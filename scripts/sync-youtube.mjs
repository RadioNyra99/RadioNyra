/**
 * sync-youtube.mjs — refresh lib/youtube-live.json from the public YouTube feed.
 *
 * Why: Radio Nyra ships a static export (output: "export"), so every video card
 * visitors see was baked in at build time from a hand-maintained archive list.
 * New uploads never appeared on the site until someone edited code by hand.
 *
 * This script fetches the official channel feed (no API key, no dependencies),
 * parses it, enriches brand-new videos with duration from their watch page, and
 * writes a snapshot that lib/youtube-service.ts merges with the archive.
 *
 * It is fail-soft on purpose: on ANY error it keeps the previous snapshot (or
 * writes an empty one if none exists) and exits 0, so `npm run build` never
 * breaks because YouTube had a bad day.
 *
 * Escape hatch: SKIP_YOUTUBE_SYNC=1 npm run build
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CHANNEL_ID = "UC9VgB6gNRgANFfv6LGZuAlw";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.join(HERE, "..", "lib", "youtube-live.json");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
const FEED_TIMEOUT_MS = 6000;
const PAGE_TIMEOUT_MS = 6000;
const MAX_SCRAPE = 6; // hard cap on watch-page requests per sync

const log = (msg) => console.log(`[sync-youtube] ${msg}`);
const warn = (msg) => console.warn(`[sync-youtube] ${msg}`);

// ── XML helpers (the feed is machine-generated, so targeted regexes are safe) ──

function decodeXml(value) {
  return value
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&"); // ampersand LAST so text like "&amp;#39;" stays literal
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decodeXml(m[1].trim()) : "";
}

function formatViewCount(count) {
  if (!count || count <= 0) return "0 views";
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M views`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K views`;
  return `${count} views`;
}

function formatDuration(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

// Mirrors isDurationShort() in lib/youtube-service.ts exactly.
function isShortFromSeconds(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h === 0 && m === 0 && s <= 60;
}

// ── Fetching ──

async function fetchText(url, timeoutMs) {
  const res = await fetch(url, {
    headers: {
      "user-agent": UA,
      "accept-language": "en-US,en;q=0.9",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function parseFeed(xml) {
  const videos = [];
  const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  while ((match = entryRe.exec(xml)) !== null) {
    const block = match[1];
    const id = tag(block, "yt:videoId");
    const title = tag(block, "title");
    if (!id || !title) continue;

    const publishedRaw = tag(block, "published");
    let publishedAt = publishedRaw;
    try {
      publishedAt = new Date(publishedRaw).toISOString();
    } catch {
      /* keep raw if the date ever changes shape */
    }

    const viewsMatch = block.match(/<media:statistics[^>]*views="(\d+)"/);
    const views = viewsMatch ? parseInt(viewsMatch[1], 10) : 0;

    const ratingMatch = block.match(/<media:starRating[^>]*count="(\d+)"/);
    const likes = ratingMatch ? ratingMatch[1] : "0";

    const thumbMatch = block.match(/<media:thumbnail[^>]*url="([^"]+)"/);
    const description = tag(block, "media:description").slice(0, 400);

    videos.push({
      id,
      title,
      description,
      thumbnail: thumbMatch ? thumbMatch[1] : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      thumbnailHigh: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      publishedAt,
      channelTitle: "Radio Nyra USA",
      duration: "",
      viewCount: formatViewCount(views),
      viewCountNum: views,
      likeCount: likes,
      isShort: title.toLowerCase().includes("#short") || title.toLowerCase().includes("shorts"),
      isLive: false,
      youtubeUrl: `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube.com/embed/${id}`,
      tags: [],
    });
  }
  return videos;
}

async function fetchDurationSeconds(id) {
  const html = await fetchText(`https://www.youtube.com/watch?v=${id}`, PAGE_TIMEOUT_MS);
  const m = html.match(/"lengthSeconds":"(\d+)"/);
  return m ? parseInt(m[1], 10) : null;
}

// Bounded parallel map; never throws (failed item → null).
async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      try {
        results[i] = await fn(items[i], i);
      } catch {
        results[i] = null;
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

// ── Snapshot I/O ──

async function readSnapshot() {
  try {
    const parsed = JSON.parse(await readFile(OUT_FILE, "utf8"));
    return Array.isArray(parsed.videos) ? parsed : null;
  } catch {
    return null;
  }
}

async function writeSnapshot(videos) {
  const payload = {
    generatedAt: new Date().toISOString(),
    source: FEED_URL,
    videos,
  };
  await writeFile(OUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

// ── Main ──

async function main() {
  if (process.env.SKIP_YOUTUBE_SYNC) {
    log("SKIP_YOUTUBE_SYNC set — leaving snapshot untouched.");
    return;
  }

  const previous = await readSnapshot();

  let feedXml;
  try {
    feedXml = await fetchText(FEED_URL, FEED_TIMEOUT_MS);
  } catch (error) {
    warn(`feed fetch failed (${error.message}) — keeping previous snapshot.`);
    if (!previous) await writeSnapshot([]);
    return;
  }

  const fresh = parseFeed(feedXml);
  if (fresh.length === 0) {
    warn("feed parsed to 0 entries (bot page or format change) — keeping previous snapshot.");
    if (!previous) await writeSnapshot([]);
    return;
  }

  // Reuse durations/short-flags we already learned so repeat syncs are 1 request.
  const known = new Map((previous?.videos ?? []).map((v) => [v.id, v]));

  let scraped = 0;
  await mapPool(fresh, 3, async (video) => {
    const prior = known.get(video.id);
    if (prior?.duration) {
      video.duration = prior.duration;
      video.isShort = prior.isShort;
      return;
    }
    if (scraped >= MAX_SCRAPE) return;
    scraped++;
    const seconds = await fetchDurationSeconds(video.id);
    if (seconds != null && seconds > 0) {
      video.duration = formatDuration(seconds);
      video.isShort = isShortFromSeconds(seconds);
    }
  });

  await writeSnapshot(fresh);
  const undurated = fresh.filter((v) => !v.duration).length;
  log(
    `wrote ${fresh.length} videos (${fresh[0]?.title?.slice(0, 60)}…); ` +
      `${scraped} watch-page lookups, ${undurated} without duration yet.`
  );
}

main().catch(async (error) => {
  // Absolute last resort: never fail the build, never lose the previous file.
  warn(`unexpected error: ${error?.stack || error}`);
  try {
    if (!(await readSnapshot())) await writeSnapshot([]);
  } catch {
    /* ignore */
  }
});
