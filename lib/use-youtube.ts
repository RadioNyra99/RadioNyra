"use client"

/**
 * React Hook: useYouTube
 * Provides loading/error/data state for fetching real YouTube videos
 * from the @RadioNyraUSA channel via youtube-service.ts
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { fetchChannelStats } from "@/lib/youtube-service";
import type { YouTubeVideoItem } from "@/lib/youtube-service";
import { YOUTUBE_STATS } from "@/lib/radio-content";

const defaultChannelStats = {
    subscriberCount: YOUTUBE_STATS.find((stat) => stat.label === "subscribers")?.value ?? "1.08K",
    viewCount: YOUTUBE_STATS.find((stat) => stat.label === "views")?.value ?? "185,444",
    videoCount: YOUTUBE_STATS.find((stat) => stat.label === "videos")?.value ?? "310",
};

interface UseYouTubeResult {
    videos: YouTubeVideoItem[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

/**
 * Generic hook that wraps any async fetch function from youtube-service.
 */
export function useYouTube(
    fetchFn: () => Promise<YouTubeVideoItem[]>,
    deps: unknown[] = []
): UseYouTubeResult {
    const [videos, setVideos] = useState<YouTubeVideoItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const mountedRef = useRef(true);
    const fetchRef = useRef(fetchFn);
    fetchRef.current = fetchFn;

    const doFetch = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchRef.current();
            if (mountedRef.current) {
                setVideos(data);
                setLoading(false);
            }
        } catch (err) {
            if (mountedRef.current) {
                setError(err instanceof Error ? err.message : "Failed to load videos");
                setLoading(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    useEffect(() => {
        mountedRef.current = true;
        doFetch();
        return () => {
            mountedRef.current = false;
        };
    }, [doFetch]);

    return { videos, loading, error, refetch: doFetch };
}

/**
 * Hook to fetch playlists.
 */
export function useYouTubePlaylists(
    fetchFn: () => Promise<{ id: string; title: string; thumbnail: string; videoCount: number }[]>,
) {
    const [playlists, setPlaylists] = useState<{ id: string; title: string; thumbnail: string; videoCount: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchRef = useRef(fetchFn);
    fetchRef.current = fetchFn;

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        fetchRef.current().then((data) => {
            if (mounted) {
                setPlaylists(data);
                setLoading(false);
            }
        }).catch(() => {
            if (mounted) setLoading(false);
        });
        return () => { mounted = false; };
    }, []);

    return { playlists, loading };
}

export function useYouTubeChannelStats() {
    const [stats, setStats] = useState<{
        subscriberCount: string;
        viewCount: string;
        videoCount: string;
        watchTime: string;
        loading: boolean;
    }>({
        ...defaultChannelStats,
        watchTime: "Unavailable",
        loading: true,
    });

    useEffect(() => {
        let mounted = true;
        async function loadStats() {
            try {
                const data = await fetchChannelStats();
                if (mounted) {
                    if (data && data.subscriberCount && data.subscriberCount !== "Unavailable") {
                        const formatCount = (valStr: string, compact = false) => {
                            if (!valStr || valStr === "Unavailable") return "";
                            const num = Number.parseInt(valStr, 10);
                            if (Number.isNaN(num)) return valStr;
                            return compact
                                ? new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(num)
                                : num.toLocaleString("en-US");
                        };
                        setStats({
                            subscriberCount: formatCount(data.subscriberCount, true) || defaultChannelStats.subscriberCount,
                            viewCount: formatCount(data.viewCount) || defaultChannelStats.viewCount,
                            videoCount: formatCount(data.videoCount) || defaultChannelStats.videoCount,
                            watchTime: "Unavailable",
                            loading: false
                        });
                    } else {
                        setStats({
                            ...defaultChannelStats,
                            watchTime: "Unavailable",
                            loading: false
                        });
                    }
                }
            } catch {
                if (mounted) {
                    setStats({
                        ...defaultChannelStats,
                        watchTime: "Unavailable",
                        loading: false
                    });
                }
            }
        }
        loadStats();
        return () => { mounted = false; };
    }, []);

    return stats;
}
