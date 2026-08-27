"use client"

/**
 * React Hook: useYouTube
 * Provides loading/error/data state for fetching real YouTube videos
 * from the @RadioNyraUSA channel via youtube-service.ts
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { fetchChannelStats } from "@/lib/youtube-service";
import type { YouTubeVideoItem } from "@/lib/youtube-service";

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
        subscriberCount: "1.01K",
        viewCount: "151.3K",
        videoCount: "270+",
        watchTime: "25,000+",
        loading: true,
    });

    useEffect(() => {
        let mounted = true;
        async function loadStats() {
            try {
                const data = await fetchChannelStats();
                if (mounted) {
                    if (data && data.subscriberCount && data.subscriberCount !== "Unavailable") {
                        const formatVal = (valStr: string) => {
                            if (!valStr || valStr === "Unavailable") return "";
                            const num = parseInt(valStr, 10);
                            return isNaN(num) ? valStr : num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toLocaleString();
                        };
                        setStats({
                            subscriberCount: formatVal(data.subscriberCount) || "1.01K",
                            viewCount: formatVal(data.viewCount) || "151.3K",
                            videoCount: formatVal(data.videoCount) || "270+",
                            watchTime: "25,000+",
                            loading: false
                        });
                    } else {
                        setStats({
                            subscriberCount: "1.01K",
                            viewCount: "151.3K",
                            videoCount: "270+",
                            watchTime: "25,000+",
                            loading: false
                        });
                    }
                }
            } catch {
                if (mounted) {
                    setStats({
                        subscriberCount: "1.01K",
                        viewCount: "151.3K",
                        videoCount: "270+",
                        watchTime: "25,000+",
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
