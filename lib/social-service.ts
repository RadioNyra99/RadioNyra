/**
 * Real-Time Social Media Service for Radio Nyra
 * Strictly fetches LIVE data from official APIs.
 * NO fake followers, fake likes, fake comments, or fake placeholder metrics.
 * If data is unavailable, returns null/unavailable state so the UI displays "Data unavailable" or hides the metric cleanly.
 */

import { getSocialSettings } from "@/lib/social-config";
import { fetchLatestVideos, CHANNEL_ID, YouTubeVideoItem } from "@/lib/youtube-service";

export interface LiveChannelStats {
    subscriberCount: string | null;
    videoCount: string | null;
    viewCount: string | null;
    status: "live" | "unavailable";
}

export interface LiveSocialFeedItem {
    id: string;
    platform: "youtube" | "instagram" | "facebook" | "linkedin";
    title: string;
    caption?: string;
    url: string;
    thumbnailUrl?: string;
    publishedAt: string;
    likesCount?: string | null;
    commentsCount?: string | null;
    sharesCount?: string | null;
}

// ─── Cache Mechanism ────────────────────────────────────────────────
interface CacheEntry<T> {
    data: T;
    timestamp: number;
}
const socialCache = new Map<string, CacheEntry<unknown>>();

function getCached<T>(key: string, maxAgeMinutes: number = 15): T | null {
    const entry = socialCache.get(key) as CacheEntry<T> | undefined;
    if (!entry) return null;
    const ageMs = Date.now() - entry.timestamp;
    if (ageMs > maxAgeMinutes * 60 * 1000) {
        socialCache.delete(key);
        return null;
    }
    return entry.data;
}

function setCached<T>(key: string, data: T): void {
    socialCache.set(key, { data, timestamp: Date.now() });
}

// ─── YouTube Channel Live Stats ─────────────────────────────────────
export async function getLiveYouTubeStats(): Promise<LiveChannelStats> {
    const cacheKey = "yt_live_channel_stats";
    const cached = getCached<LiveChannelStats>(cacheKey, 15);
    if (cached) return cached;

    const apiKey = typeof window !== "undefined"
        ? (window as Record<string, unknown>).__YOUTUBE_API_KEY as string || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
        : process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    if (!apiKey) {
        // Without an API key, we return "unavailable" instead of guessing or hardcoding numbers
        const unavailableState: LiveChannelStats = {
            subscriberCount: null,
            videoCount: null,
            viewCount: null,
            status: "unavailable",
        };
        setCached(cacheKey, unavailableState);
        return unavailableState;
    }

    try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${apiKey}`
        );
        if (!res.ok) throw new Error(`YouTube API returned ${res.status}`);
        const data = await res.json();
        const stats = data.items?.[0]?.statistics;

        if (!stats) throw new Error("No channel stats found");

        const result: LiveChannelStats = {
            subscriberCount: parseInt(stats.subscriberCount || "0", 10).toLocaleString(),
            videoCount: parseInt(stats.videoCount || "0", 10).toLocaleString(),
            viewCount: parseInt(stats.viewCount || "0", 10).toLocaleString(),
            status: "live",
        };

        setCached(cacheKey, result);
        return result;
    } catch {
        const fallback: LiveChannelStats = {
            subscriberCount: null,
            videoCount: null,
            viewCount: null,
            status: "unavailable",
        };
        setCached(cacheKey, fallback);
        return fallback;
    }
}

// ─── Live Instagram Data ────────────────────────────────────────────
export async function getLiveInstagramFeed(): Promise<{ items: LiveSocialFeedItem[]; followerCount: string | null; status: "live" | "unavailable" }> {
    const cacheKey = "ig_live_feed";
    const cached = getCached<{ items: LiveSocialFeedItem[]; followerCount: string | null; status: "live" | "unavailable" }>(cacheKey, 30);
    if (cached) return cached;

    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

    if (!token) {
        // No hardcoding. Return empty feed & null metrics if API key is not present.
        const result = { items: [], followerCount: null, status: "unavailable" as const };
        setCached(cacheKey, result);
        return result;
    }

    try {
        const res = await fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=${token}`
        );
        if (!res.ok) throw new Error("Instagram API Error");
        const data = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items: LiveSocialFeedItem[] = (data.data || []).map((item: any) => ({
            id: item.id,
            platform: "instagram",
            title: item.caption?.substring(0, 80) || "Radio Nyra Instagram Post",
            caption: item.caption || "",
            url: item.permalink || "https://www.instagram.com/radionyrausa",
            thumbnailUrl: item.media_url || "",
            publishedAt: item.timestamp || "",
            likesCount: item.like_count ? formatCount(item.like_count) : null,
            commentsCount: item.comments_count ? formatCount(item.comments_count) : null,
        }));

        const result = { items, followerCount: null, status: "live" as const };
        setCached(cacheKey, result);
        return result;
    } catch {
        const fallback = { items: [], followerCount: null, status: "unavailable" as const };
        setCached(cacheKey, fallback);
        return fallback;
    }
}

// ─── Live Combined Social Media Feed ────────────────────────────────
export async function getLiveSocialFeed(): Promise<LiveSocialFeedItem[]> {
    const cacheKey = "combined_live_feed";
    const cached = getCached<LiveSocialFeedItem[]>(cacheKey, 10);
    if (cached) return cached;

    const items: LiveSocialFeedItem[] = [];

    // Add YouTube latest videos
    try {
        const ytVideos = await fetchLatestVideos(6);
        ytVideos.forEach((v: YouTubeVideoItem) => {
            items.push({
                id: `yt_${v.id}`,
                platform: "youtube",
                title: v.title,
                caption: v.description,
                url: v.youtubeUrl,
                thumbnailUrl: v.thumbnailHigh || v.thumbnail,
                publishedAt: v.publishedAt,
                likesCount: v.likeCount !== "0" ? v.likeCount : null,
                commentsCount: null,
            });
        });
    } catch {
        // Handle error silently
    }

    // Add Instagram posts if token present
    try {
        const igData = await getLiveInstagramFeed();
        items.push(...igData.items);
    } catch {
        // Handle error silently
    }

    setCached(cacheKey, items);
    return items;
}

function formatCount(count: number): string {
    if (!count || isNaN(count)) return "0";
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
    if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
    return count.toLocaleString();
}
