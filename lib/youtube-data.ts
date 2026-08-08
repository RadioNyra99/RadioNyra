/**
 * YouTube Data – Bridge Module for Radio Nyra
 * Official Channel ID: UC9VgB6gNRgANFfv6LGZuAlw (@RadioNyraUSA)
 * Official Studio URL: https://www.youtube.com/channel/UC9VgB6gNRgANFfv6LGZuAlw
 */

// Re-export the live service types and fetch functions
export type { YouTubeVideoItem } from "@/lib/youtube-service";
export {
    CHANNEL_ID,
    CHANNEL_HANDLE,
    CHANNEL_URL,
    SUBSCRIBE_URL,
    REAL_RADIO_NYRA_VIDEOS,
    fetchLatestVideos,
    fetchShorts,
    fetchLiveStreams,
    fetchPlaylists,
    fetchKidsVideos,
    fetchInterviews,
    fetchCommunityPrograms,
    fetchPopularVideos,
    searchChannelVideos,
    formatPublishedDate,
    clearYouTubeCache,
    fetchChannelStats,
} from "@/lib/youtube-service";

// Re-export the React hooks
export { useYouTube, useYouTubePlaylists, useYouTubeChannelStats } from "@/lib/use-youtube";

export type YouTubeVideo = import("@/lib/youtube-service").YouTubeVideoItem;

export interface YouTubeChannelStats {
    channelId: string;
    handle: string;
    channelUrl: string;
    subscribeUrl: string;
    subscriberCount: string;
    subscriberCountNum: number;
    totalViews: string;
    totalViewsNum: number;
    watchTimeHours: string;
    totalVideos: number;
}

export const OFFICIAL_YOUTUBE_CHANNEL: YouTubeChannelStats = {
    channelId: "UC9VgB6gNRgANFfv6LGZuAlw",
    handle: "@RadioNyraUSA",
    channelUrl: "https://www.youtube.com/channel/UC9VgB6gNRgANFfv6LGZuAlw",
    subscribeUrl: "https://www.youtube.com/channel/UC9VgB6gNRgANFfv6LGZuAlw?sub_confirmation=1",
    subscriberCount: "52.8K+",
    subscriberCountNum: 52800,
    totalViews: "5.8M+",
    totalViewsNum: 5840000,
    watchTimeHours: "285,000+",
    totalVideos: 420
};
