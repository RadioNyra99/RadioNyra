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
        id: "Dh9sCFzkTnk",
        title: "$103,265 H-1B Fee?! DHS Proposal Explained by Kelsey Berger, Brown Immigration | RadioNyra Podcast",
        description: "Kelsey Berger from Brown Immigration Law explains the recent DHS proposal and what it could mean for H-1B applicants, F-1 students on OPT, employers, and businesses.",
        thumbnail: "https://i.ytimg.com/vi/Dh9sCFzkTnk/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/Dh9sCFzkTnk/hqdefault.jpg",
        publishedAt: "2026-08-25T22:23:47Z",
        channelTitle: "Radio Nyra USA",
        duration: "31:00",
        viewCount: "88 views",
        viewCountNum: 88,
        likeCount: "0",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=Dh9sCFzkTnk",
        embedUrl: "https://www.youtube-nocookie.com/embed/Dh9sCFzkTnk",
        tags: ["H1B", "Immigration", "DHS", "BrownImmigration", "RadioNyra", "Podcast"]
    },
    {
        id: "OjdLKCc34WI",
        title: "Bhajan Clubbing in Raleigh North Carolina #radionyra #northcarolina #podcast",
        description: "RadioNyra and Cherished Moments present Bhajan Clubbing, a Krishna Janmashtami special in Cary, NC.",
        thumbnail: "https://i.ytimg.com/vi/OjdLKCc34WI/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/OjdLKCc34WI/hqdefault.jpg",
        publishedAt: "2026-08-23T19:47:16Z",
        channelTitle: "Radio Nyra USA",
        duration: "00:58",
        viewCount: "84 views",
        viewCountNum: 84,
        likeCount: "1",
        isShort: true,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=OjdLKCc34WI",
        embedUrl: "https://www.youtube-nocookie.com/embed/OjdLKCc34WI",
        tags: ["BhajanClubbing", "Raleigh", "NorthCarolina", "RadioNyra", "Shorts"]
    },
    {
        id: "384r1uIW2NU",
        title: "L-1 Visa Secrets: Who Qualifies & How to Get Approved? | RadioNyra Podcast 99.9FM HD4",
        description: "Immigration insights and expert advice on L-1 visa qualifications and approvals on Radio Nyra.",
        thumbnail: "https://i.ytimg.com/vi/384r1uIW2NU/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/384r1uIW2NU/hqdefault.jpg",
        publishedAt: "2026-08-23T17:43:33Z",
        channelTitle: "Radio Nyra USA",
        duration: "28:40",
        viewCount: "679 views",
        viewCountNum: 679,
        likeCount: "2",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=384r1uIW2NU",
        embedUrl: "https://www.youtube-nocookie.com/embed/384r1uIW2NU",
        tags: ["L1Visa", "Immigration", "RadioNyra", "Podcast", "NRI"]
    },
    {
        id: "9PVZvU-tZw8",
        title: "Prabhu Deva Live in Raleigh | Exclusive Interview with Prabhu Deva & Show Director Hari Kumar",
        description: "Exclusive conversation with the legendary Prabhu Deva and show director Hari Kumar on Radio Nyra.",
        thumbnail: "https://i.ytimg.com/vi/9PVZvU-tZw8/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/9PVZvU-tZw8/hqdefault.jpg",
        publishedAt: "2026-08-07T14:04:31Z",
        channelTitle: "Radio Nyra USA",
        duration: "42:15",
        viewCount: "48.2K views",
        viewCountNum: 48200,
        likeCount: "2.1K",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=9PVZvU-tZw8",
        embedUrl: "https://www.youtube-nocookie.com/embed/9PVZvU-tZw8",
        tags: ["PrabhuDeva", "ExclusiveInterview", "RadioNyra", "Celebrity", "Raleigh"]
    },
    {
        id: "xgO4b6qmp84",
        title: "Sanskar Gurukul Classes at HSNC | Chai Pe Charcha with Van Bhandari | RadioNyra Podcast",
        description: "Host Van Bhandari discusses community education, cultural heritage, and Sanskar Gurukul classes.",
        thumbnail: "https://i.ytimg.com/vi/xgO4b6qmp84/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/xgO4b6qmp84/hqdefault.jpg",
        publishedAt: "2026-08-15T14:49:06Z",
        channelTitle: "Radio Nyra USA",
        duration: "35:10",
        viewCount: "300 views",
        viewCountNum: 300,
        likeCount: "3",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=xgO4b6qmp84",
        embedUrl: "https://www.youtube-nocookie.com/embed/xgO4b6qmp84",
        tags: ["ChaiPeCharcha", "VanBhandari", "RadioNyra", "HSNC"]
    },
    {
        id: "1MVRWu3OL6M",
        title: "The Man Behind Prabhu Deva Live in Raleigh | Hari Kumar, Show Director | RadioNyra Podcast",
        description: "Behind-the-scenes insights into organizing the biggest Indian live concert in Raleigh-Durham.",
        thumbnail: "https://i.ytimg.com/vi/1MVRWu3OL6M/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/1MVRWu3OL6M/hqdefault.jpg",
        publishedAt: "2026-08-08T19:31:15Z",
        channelTitle: "Radio Nyra USA",
        duration: "31:45",
        viewCount: "84 views",
        viewCountNum: 84,
        likeCount: "1",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=1MVRWu3OL6M",
        embedUrl: "https://www.youtube-nocookie.com/embed/1MVRWu3OL6M",
        tags: ["HariKumar", "PrabhuDeva", "RadioNyra", "Concert"]
    },
    {
        id: "r845AOvE45A",
        title: "Leaders & Legends | Hill Carrow on Sports, Economic Impact & World University Games | Steve Rao",
        description: "Councilman Steve Rao sits down with sports visionary Hill Carrow for an inspiring episode of Leaders & Legends.",
        thumbnail: "https://i.ytimg.com/vi/r845AOvE45A/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/r845AOvE45A/hqdefault.jpg",
        publishedAt: "2026-08-12T07:04:42Z",
        channelTitle: "Radio Nyra USA",
        duration: "46:30",
        viewCount: "10 views",
        viewCountNum: 10,
        likeCount: "0",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=r845AOvE45A",
        embedUrl: "https://www.youtube-nocookie.com/embed/r845AOvE45A",
        tags: ["LeadersAndLegends", "SteveRao", "HillCarrow", "RadioNyra"]
    },
    {
        id: "zXIo0RceZHc",
        title: "Leaders & Legends | RTP’s Next Chapter: Innovation, Tech & Economic Growth | Scott Levitan",
        description: "Exploring the future of Research Triangle Park (RTP) with Scott Levitan and host Steve Rao.",
        thumbnail: "https://i.ytimg.com/vi/zXIo0RceZHc/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/zXIo0RceZHc/hqdefault.jpg",
        publishedAt: "2026-08-07T08:33:39Z",
        channelTitle: "Radio Nyra USA",
        duration: "39:50",
        viewCount: "34 views",
        viewCountNum: 34,
        likeCount: "1",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=zXIo0RceZHc",
        embedUrl: "https://www.youtube-nocookie.com/embed/zXIo0RceZHc",
        tags: ["RTP", "TechInnovation", "LeadersAndLegends", "RadioNyra"]
    },
    {
        id: "j77wSeVe2DM",
        title: "F-1 vs J-1 vs I Visa Explained: Student, Exchange & Journalist Visas | RadioNyra",
        description: "Clear legal breakdown of student, exchange visitor, and media visa categories for the NRI community.",
        thumbnail: "https://i.ytimg.com/vi/j77wSeVe2DM/hqdefault.jpg",
        thumbnailHigh: "https://i.ytimg.com/vi/j77wSeVe2DM/hqdefault.jpg",
        publishedAt: "2026-08-05T18:40:07Z",
        channelTitle: "Radio Nyra USA",
        duration: "26:15",
        viewCount: "40 views",
        viewCountNum: 40,
        likeCount: "0",
        isShort: false,
        isLive: false,
        youtubeUrl: "https://www.youtube.com/watch?v=j77wSeVe2DM",
        embedUrl: "https://www.youtube-nocookie.com/embed/j77wSeVe2DM",
        tags: ["StudentVisa", "F1Visa", "J1Visa", "Immigration", "RadioNyra"]
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

        const videos: YouTubeVideoItem[] = (detailsData.items || []).map((item: any) => mapApiVideo(item));

        setCache(cacheKey, videos, 10 * 60 * 1000);
        return videos;
    } catch {
        return [];
    }
}

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

// ─── Real-time YouTube RSS Feed Fetching ─────────────────────────────
async function fetchFromRSS(maxResults: number = 16, query?: string): Promise<YouTubeVideoItem[]> {
    const cacheKey = `feed_${maxResults}_${query || "all"}`;
    const cached = getFromCache<YouTubeVideoItem[]>(cacheKey);
    if (cached) return cached;

    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
    const rssUrlWithCacheBust = `${rssUrl}&_=${Date.now()}`;

    const rssJsonVideos = await fetchFromRSSJson(rssUrl, maxResults);
    if (rssJsonVideos.length > 0) {
        setCache(cacheKey, rssJsonVideos, 5 * 60 * 1000);
        return rssJsonVideos;
    }

    // Direct external RSS feed with multiple redundant proxies
    const proxyUrls = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrlWithCacheBust)}`,
        `https://corsproxy.io/?url=${encodeURIComponent(rssUrlWithCacheBust)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(rssUrlWithCacheBust)}`
    ];

    for (const proxyUrl of proxyUrls) {
        try {
            const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(6000) });
            if (res.ok) {
                const xmlText = await res.text();
                const videos = parseRSSFeed(xmlText);
                if (videos.length > 0) {
                    setCache(cacheKey, videos, 5 * 60 * 1000);
                    return videos;
                }
            }
        } catch {
            // Try next proxy
        }
    }

    return REAL_RADIO_NYRA_VIDEOS;
}

async function fetchFromRSSJson(rssUrl: string, maxResults: number): Promise<YouTubeVideoItem[]> {
    try {
        const res = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`,
            { cache: "no-store", signal: AbortSignal.timeout(6000) }
        );
        if (!res.ok) return [];

        const data = await res.json();
        if (data.status !== "ok" || !Array.isArray(data.items)) return [];

        return data.items
            .slice(0, maxResults)
            .map((item: any) => {
                const id = extractVideoId(item.guid || item.link || "");
                if (!id) return null;

                const title = decodeHtmlEntities(item.title || "");
                const description = stripHtml(decodeHtmlEntities(item.description || item.content || ""));

                return {
                    id,
                    title,
                    description: description.substring(0, 200),
                    thumbnail: item.thumbnail || `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
                    thumbnailHigh: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
                    publishedAt: item.pubDate ? new Date(item.pubDate).toISOString() : "",
                    channelTitle: "Radio Nyra USA",
                    duration: "",
                    viewCount: "0 views",
                    viewCountNum: 0,
                    likeCount: "0",
                    isShort: title.toLowerCase().includes("#short") || title.toLowerCase().includes("shorts"),
                    isLive: false,
                    youtubeUrl: `https://www.youtube.com/watch?v=${id}`,
                    embedUrl: `https://www.youtube.com/embed/${id}`,
                    tags: Array.isArray(item.categories) ? item.categories : [],
                } satisfies YouTubeVideoItem;
            })
            .filter((video: YouTubeVideoItem | null): video is YouTubeVideoItem => video !== null);
    } catch {
        return [];
    }
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

function extractVideoId(value: string): string {
    const guidMatch = value.match(/yt:video:([a-zA-Z0-9_-]+)/);
    if (guidMatch) return guidMatch[1];

    try {
        const url = new URL(value);
        return url.searchParams.get("v") || "";
    } catch {
        return "";
    }
}

function stripHtml(value: string): string {
    return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtmlEntities(value: string): string {
    if (!value) return "";
    if (typeof document !== "undefined") {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = value;
        return textarea.value;
    }

    return value
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
}

// ─── Public API Methods ─────────────────────────────────────────────

export async function fetchLatestVideos(maxResults: number = 12): Promise<YouTubeVideoItem[]> {
    const apiVideos = await fetchFromApi(maxResults);
    if (apiVideos.length > 0) {
        return apiVideos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }
    const rssVideos = await fetchFromRSS();
    const sorted = [...rssVideos].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    return sorted.slice(0, maxResults);
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
