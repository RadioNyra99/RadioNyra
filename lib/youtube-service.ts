/**
 * YouTube Data API v3 Client Service for Radio Nyra
 * Official Channel ID: UC9VgB6gNRgANFfv6LGZuAlw (@RadioNyraUSA)
 *
 * Strategy:
 *   1. Primary Channel ID: UC9VgB6gNRgANFfv6LGZuAlw
 *   2. RSS Feed: Direct feed from https://www.youtube.com/feeds/videos.xml?channel_id=UC9VgB6gNRgANFfv6LGZuAlw
 *   3. YouTube Data API v3 (when NEXT_PUBLIC_YOUTUBE_API_KEY is available)
 *   4. Pre-populated real Radio Nyra videos as instant fallback
 */

// ─── Channel Constants ───────────────────────────────────────────────
export const CHANNEL_ID = "UC9VgB6gNRgANFfv6LGZuAlw";
export const CHANNEL_HANDLE = "@RadioNyraUSA";
export const CHANNEL_URL = `https://www.youtube.com/channel/${CHANNEL_ID}`;
export const SUBSCRIBE_URL = `https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`;

// ─── Types ───────────────────────────────────────────────────────────
export interface YouTubeVideoItem {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    thumbnailHigh: string;
    publishedAt: string;
    channelTitle: string;
    duration: string;
    viewCount: string;
    viewCountNum: number;
    likeCount: string;
    isShort: boolean;
    isLive: boolean;
    youtubeUrl: string;
    embedUrl: string;
    tags: string[];
}

// ─── Pre-Populated Real Videos from Channel UC9VgB6gNRgANFfv6LGZuAlw ──
export const REAL_RADIO_NYRA_VIDEOS: YouTubeVideoItem[] = [
    {
        id: "AXYedAw3-wk",
        title: "Hello Vaishnavi | Radio Nyra Raleigh-Durham | 99.9 FM-HD4 | Live Every Thursday",
        description: "Welcome to HELLO VAISHNAVI, an engaging Telugu radio show on Radio Nyra Raleigh-Durham! Join us every Thursday from 5:00 PM – 7:00 PM for exciting conversations, inspiring guests, and community updates.",
        thumbnail: "https://i.ytimg.com/vi/AXYedAw3-wk/mqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/AXYedAw3-wk/hqdefault.jpg",
        publishedAt: "2026-07-27T20:33:28Z",
        channelTitle: "Radio Nyra USA",
        duration: "Unavailable",
        viewCount: "0 views",
        viewCountNum: 0,
        likeCount: "Unavailable",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=AXYedAw3-wk",
        embedUrl: "https://www.youtube.com/embed/AXYedAw3-wk",
        tags: ["HelloVaishnavi", "RadioNyra", "TeluguRadio", "RaleighDurham"]
    },
    {
        id: "TcioJf2BXPM",
        title: "Hello Vaishnavi | Veena & Gandhi Interview on Prabhu Deva Live Dance Concert | Radio Nyra USA",
        description: "Host Vaishnavi sits down with Veena & Gandhi for an exclusive conversation about the much-awaited Prabhu Deva Live Dance Concert in Raleigh-Durham.",
        thumbnail: "https://i.ytimg.com/vi/TcioJf2BXPM/mqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/TcioJf2BXPM/hqdefault.jpg",
        publishedAt: "2026-07-27T20:25:44Z",
        channelTitle: "Radio Nyra USA",
        duration: "Unavailable",
        viewCount: "0 views",
        viewCountNum: 0,
        likeCount: "Unavailable",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=TcioJf2BXPM",
        embedUrl: "https://www.youtube.com/embed/TcioJf2BXPM",
        tags: ["PrabhuDeva", "ExclusiveInterview", "RadioNyra", "Celebrity"]
    },
    {
        id: "oqHgu5JLBF0",
        title: "Dil Se Desi | Live Radio Show | Bollywood Hits, Conversations & Entertainment",
        description: "Welcome to Dil Se Desi, your favorite live entertainment show on Radio Nyra USA! Mix of Bollywood music, entertainment news, fun conversations, and listener requests.",
        thumbnail: "https://i.ytimg.com/vi/oqHgu5JLBF0/mqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/oqHgu5JLBF0/hqdefault.jpg",
        publishedAt: "2026-07-27T20:02:38Z",
        channelTitle: "Radio Nyra USA",
        duration: "Unavailable",
        viewCount: "0 views",
        viewCountNum: 0,
        likeCount: "Unavailable",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=oqHgu5JLBF0",
        embedUrl: "https://www.youtube.com/embed/oqHgu5JLBF0",
        tags: ["DilSeDesi", "Bollywood", "RadioNyra", "HindiSongs"]
    },
    {
        id: "1ciGmPa7Cv4",
        title: "Both & Beyond | Aarna & Aarini on Radio Nyra | Fun Conversations, Stories & Inspiration",
        description: "Join Aarna and Aarini on Both & Beyond for engaging conversations, inspiring stories, fun experiences, and youth perspective on Radio Nyra.",
        thumbnail: "https://i.ytimg.com/vi/1ciGmPa7Cv4/mqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/1ciGmPa7Cv4/hqdefault.jpg",
        publishedAt: "2026-07-27T19:03:43Z",
        channelTitle: "Radio Nyra USA",
        duration: "Unavailable",
        viewCount: "0 views",
        viewCountNum: 0,
        likeCount: "Unavailable",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=1ciGmPa7Cv4",
        embedUrl: "https://www.youtube.com/embed/1ciGmPa7Cv4",
        tags: ["BothAndBeyond", "Aarna", "Aarini", "YouthVoices", "RadioNyra"]
    }
];

// ─── In-Memory Cache ─────────────────────────────────────────────────
interface CacheEntry<T> {
    data: T;
    timestamp: number;
    ttl: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

function getFromCache<T>(key: string): T | null {
    const entry = cache.get(key) as CacheEntry<T> | undefined;
    if (!entry) return null;
    if (Date.now() - entry.timestamp > entry.ttl) {
        cache.delete(key);
        return null;
    }
    return entry.data;
}

function setCache<T>(key: string, data: T, ttlMs: number = 10 * 60 * 1000): void {
    cache.set(key, { data, timestamp: Date.now(), ttl: ttlMs });
}

// ─── API Key ─────────────────────────────────────────────────────────
function getApiKey(): string | null {
    if (typeof window !== "undefined") {
        return (window as Record<string, unknown>).__YOUTUBE_API_KEY as string | null
            || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
            || null;
    }
    return process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || null;
}

// ─── YouTube Data API v3 Fetch ──────────────────────────────────────
async function fetchFromApi(
    maxResults: number = 12,
    query?: string,
    type: "video" | "playlist" = "video",
    videoDuration?: "short" | "medium" | "long" | "any",
    eventType?: "live" | "completed" | "upcoming"
): Promise<YouTubeVideoItem[]> {
    const apiKey = getApiKey();
    if (!apiKey) return [];

    const cacheKey = `api_${type}_${maxResults}_${query || "all"}_${videoDuration || "any"}_${eventType || "none"}`;
    const cached = getFromCache<YouTubeVideoItem[]>(cacheKey);
    if (cached) return cached;

    try {
        const searchParams = new URLSearchParams({
            part: "snippet",
            channelId: CHANNEL_ID,
            maxResults: String(maxResults),
            order: "date",
            type,
            key: apiKey,
        });

        if (query) searchParams.set("q", query);
        if (videoDuration && type === "video") searchParams.set("videoDuration", videoDuration);
        if (eventType && type === "video") searchParams.set("eventType", eventType);

        const searchRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?${searchParams.toString()}`
        );
        if (!searchRes.ok) return [];
        const searchData = await searchRes.json();

        const videoIds = (searchData.items || [])
            .filter((item: Record<string, Record<string, string>>) => item.id?.videoId)
            .map((item: Record<string, Record<string, string>>) => item.id.videoId);

        if (videoIds.length === 0) return [];

        const detailsRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds.join(",")}&key=${apiKey}`
        );
        if (!detailsRes.ok) return [];
        const detailsData = await detailsRes.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const videos: YouTubeVideoItem[] = (detailsData.items || []).map((item: any) => mapApiVideo(item));

        setCache(cacheKey, videos, 10 * 60 * 1000);
        return videos;
    } catch {
        return [];
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapApiVideo(item: any): YouTubeVideoItem {
    const snippet = item.snippet || {};
    const stats = item.statistics || {};
    const content = item.contentDetails || {};
    const videoId = item.id;
    const duration = parseDuration(content.duration || "");
    const isShort = isDurationShort(content.duration || "");
    const viewCount = parseInt(stats.viewCount || "0", 10);

    return {
        id: videoId,
        title: snippet.title || "",
        description: snippet.description || "",
        thumbnail: snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url || "",
        thumbnailHigh: snippet.thumbnails?.high?.url || snippet.thumbnails?.maxres?.url || snippet.thumbnails?.medium?.url || "",
        publishedAt: snippet.publishedAt || "",
        channelTitle: snippet.channelTitle || "Radio Nyra USA",
        duration,
        viewCount: formatViewCount(viewCount),
        viewCountNum: viewCount,
        likeCount: stats.likeCount || "0",
        isShort,
        isLive: snippet.liveBroadcastContent === "live",
        youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        tags: snippet.tags || [],
    };
}

// ─── YouTube RSS Feed Fallback ──────────────────────────────────────
async function fetchFromRSS(): Promise<YouTubeVideoItem[]> {
    const cacheKey = "rss_feed_official";
    const cached = getFromCache<YouTubeVideoItem[]>(cacheKey);
    if (cached) return cached;

    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

    try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
        const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(8000) });
        if (res.ok) {
            const xmlText = await res.text();
            const videos = parseRSSFeed(xmlText);
            if (videos.length > 0) {
                setCache(cacheKey, videos, 15 * 60 * 1000);
                return videos;
            }
        }
    } catch {
        // Fallback to pre-populated real channel videos
    }

    return REAL_RADIO_NYRA_VIDEOS;
}

function parseRSSFeed(xml: string): YouTubeVideoItem[] {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "text/xml");
        const entries = doc.querySelectorAll("entry");
        const videos: YouTubeVideoItem[] = [];

        entries.forEach((entry) => {
            const videoId = entry.querySelector("yt\\:videoId, videoId")?.textContent || "";
            const title = entry.querySelector("title")?.textContent || "";
            const published = entry.querySelector("published")?.textContent || "";
            const description = entry.querySelector("media\\:description, description")?.textContent || "";
            const thumbnail = entry.querySelector("media\\:thumbnail")?.getAttribute("url") || `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
            const views = entry.querySelector("media\\:statistics")?.getAttribute("views") || "0";
            const viewCount = parseInt(views, 10);

            if (videoId) {
                videos.push({
                    id: videoId,
                    title,
                    description: description.substring(0, 200),
                    thumbnail,
                    thumbnailHigh: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                    publishedAt: published,
                    channelTitle: "Radio Nyra USA",
                    duration: "",
                    viewCount: formatViewCount(viewCount),
                    viewCountNum: viewCount,
                    likeCount: "0",
                    isShort: title.toLowerCase().includes("#short") || title.toLowerCase().includes("shorts"),
                    isLive: false,
                    youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
                    embedUrl: `https://www.youtube.com/embed/${videoId}`,
                    tags: [],
                });
            }
        });

        return videos;
    } catch {
        return [];
    }
}

// ─── Public API Methods ─────────────────────────────────────────────

export async function fetchLatestVideos(maxResults: number = 12): Promise<YouTubeVideoItem[]> {
    const apiVideos = await fetchFromApi(maxResults);
    if (apiVideos.length > 0) return apiVideos;
    const rssVideos = await fetchFromRSS();
    return rssVideos.slice(0, maxResults);
}

export async function fetchShorts(maxResults: number = 8): Promise<YouTubeVideoItem[]> {
    const apiVideos = await fetchFromApi(maxResults, undefined, "video", "short");
    if (apiVideos.length > 0) return apiVideos;

    const rss = await fetchFromRSS();
    const shorts = rss.filter(v => v.isShort || v.title.toLowerCase().includes("#short") || v.title.toLowerCase().includes("shorts"));
    return shorts.length > 0 ? shorts.slice(0, maxResults) : REAL_RADIO_NYRA_VIDEOS.slice(0, maxResults);
}

export async function fetchLiveStreams(maxResults: number = 4): Promise<YouTubeVideoItem[]> {
    return fetchFromApi(maxResults, undefined, "video", undefined, "live");
}

export async function fetchPlaylists(): Promise<{ id: string; title: string; thumbnail: string; videoCount: number }[]> {
    const apiKey = getApiKey();
    if (!apiKey) {
        return [
            { id: "PL_hello_vaishnavi", title: "Hello Vaishnavi Live Shows", thumbnail: "https://i.ytimg.com/vi/AXYedAw3-wk/hqdefault.jpg", videoCount: 24 },
            { id: "PL_dil_se_desi", title: "Dil Se Desi Radio Sessions", thumbnail: "https://i.ytimg.com/vi/oqHgu5JLBF0/hqdefault.jpg", videoCount: 18 },
            { id: "PL_interviews", title: "Celebrity & Community Interviews", thumbnail: "https://i.ytimg.com/vi/TcioJf2BXPM/hqdefault.jpg", videoCount: 15 },
            { id: "PL_youth_voices", title: "Both & Beyond Youth Specials", thumbnail: "https://i.ytimg.com/vi/1ciGmPa7Cv4/hqdefault.jpg", videoCount: 12 },
        ];
    }

    try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=10&key=${apiKey}`
        );
        if (!res.ok) return [];
        const data = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (data.items || []).map((item: any) => ({
            id: item.id,
            title: item.snippet?.title || "",
            thumbnail: item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.medium?.url || "",
            videoCount: item.contentDetails?.itemCount || 0,
        }));
    } catch {
        return [];
    }
}

export async function searchChannelVideos(query: string, maxResults: number = 8): Promise<YouTubeVideoItem[]> {
    const apiVideos = await fetchFromApi(maxResults, query);
    if (apiVideos.length > 0) return apiVideos;

    const rss = await fetchFromRSS();
    const lower = query.toLowerCase();
    const matches = rss.filter(v => v.title.toLowerCase().includes(lower) || v.description.toLowerCase().includes(lower));
    return matches.length > 0 ? matches : REAL_RADIO_NYRA_VIDEOS.filter(v => v.title.toLowerCase().includes(lower) || v.description.toLowerCase().includes(lower));
}

export async function fetchKidsVideos(maxResults: number = 8): Promise<YouTubeVideoItem[]> {
    return searchChannelVideos("kids", maxResults);
}

export async function fetchInterviews(maxResults: number = 8): Promise<YouTubeVideoItem[]> {
    return searchChannelVideos("Interview", maxResults);
}

export async function fetchCommunityPrograms(maxResults: number = 8): Promise<YouTubeVideoItem[]> {
    return searchChannelVideos("Radio", maxResults);
}

export async function fetchPopularVideos(maxResults: number = 8): Promise<YouTubeVideoItem[]> {
    const apiVideos = await fetchFromApi(maxResults, undefined, "video");
    if (apiVideos.length > 0) return apiVideos;

    const rss = await fetchFromRSS();
    return rss.slice(0, maxResults);
}

// ─── Utilities ──────────────────────────────────────────────────────

function parseDuration(iso8601: string): string {
    if (!iso8601) return "";
    const match = iso8601.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "";
    const h = parseInt(match[1] || "0", 10);
    const m = parseInt(match[2] || "0", 10);
    const s = parseInt(match[3] || "0", 10);
    if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    return `${m}:${String(s).padStart(2, "0")}`;
}

function isDurationShort(iso8601: string): boolean {
    if (!iso8601) return false;
    const match = iso8601.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return false;
    const h = parseInt(match[1] || "0", 10);
    const m = parseInt(match[2] || "0", 10);
    const s = parseInt(match[3] || "0", 10);
    return h === 0 && m === 0 && s <= 60;
}

function formatViewCount(count: number): string {
    if (!count || count <= 0) return "0 views";
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M views`;
    if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K views`;
    return `${count} views`;
}

export function formatPublishedDate(dateStr: string): string {
    if (!dateStr) return "";
    try {
        const date = new Date(dateStr);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffWeeks = Math.floor(diffDays / 7);
        const diffMonths = Math.floor(diffDays / 30);

        if (diffHours < 1) return "Just now";
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
        if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
        if (diffWeeks < 5) return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
        if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
        return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    } catch {
        return dateStr;
    }
}

export function clearYouTubeCache(): void {
    cache.clear();
}

export async function fetchChannelStats(): Promise<{
    subscriberCount: string;
    viewCount: string;
    videoCount: string;
} | null> {
    const apiKey = getApiKey();
    if (!apiKey) return null;
    try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${apiKey}`
        );
        if (!res.ok) return null;
        const data = await res.json();
        const stats = data.items?.[0]?.statistics;
        if (!stats) return null;
        return {
            subscriberCount: stats.subscriberCount || "Unavailable",
            viewCount: stats.viewCount || "Unavailable",
            videoCount: stats.videoCount || "Unavailable",
        };
    } catch {
        return null;
    }
}
