"use client"

import React, { useState, useMemo } from "react"
import { Youtube, Users, Eye, Clock, Sparkles, Flame, PlayCircle, Grid, ListFilter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"
import { fetchLatestVideos, fetchShorts, fetchPopularVideos, fetchPlaylists } from "@/lib/youtube-service"
import { useYouTube, useYouTubePlaylists, useYouTubeChannelStats } from "@/lib/use-youtube"
import { VideoCard } from "@/components/video-card"
import { VideoGridSkeleton, VideoEmptyState, VideoCardSkeleton } from "@/components/video-loading-states"
import { trackYouTubeSubscribe } from "@/lib/analytics"

const CATEGORIES = [
    "All Content",
    "Popular",
    "Shorts",
    "Live",
];

export function YouTubeHub() {
    const [selectedCategory, setSelectedCategory] = useState("All Content");
    const { subscriberCount, viewCount, videoCount } = useYouTubeChannelStats();

    // Fetch all latest videos
    const { videos: allVideos, loading: loadingAll, error: errorAll, refetch } = useYouTube(
        () => fetchLatestVideos(20),
        []
    );

    // Fetch shorts separately for the shorts carousel
    const { videos: shortsList, loading: loadingShorts } = useYouTube(
        () => fetchShorts(8),
        []
    );

    // Fetch playlists
    const { playlists, loading: loadingPlaylists } = useYouTubePlaylists(fetchPlaylists);

    const handleSubscribe = () => {
        trackYouTubeSubscribe("YouTube Hub Header");
        window.open(OFFICIAL_YOUTUBE_CHANNEL.subscribeUrl, "_blank");
    };

    const filteredVideos = useMemo(() => {
        if (selectedCategory === "All Content") return allVideos;
        if (selectedCategory === "Popular") return [...allVideos].sort((a, b) => b.viewCountNum - a.viewCountNum);
        if (selectedCategory === "Shorts") return allVideos.filter(v => v.isShort);
        if (selectedCategory === "Live") return allVideos.filter(v => v.isLive);
        return allVideos;
    }, [allVideos, selectedCategory]);

    return (
        <div className="w-full bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header Banner & Channel Metrics */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-950 via-zinc-900 to-black text-white p-8 md:p-12 mb-12 shadow-2xl border border-red-900/30">
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-2xl shadow-red-600/50 shrink-0">
                                <Youtube className="w-12 h-12 text-white fill-white" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest mb-3">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Radio Nyra YouTube Hub
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
                                    Watch & Subscribe
                                </h1>
                                <p className="text-zinc-300 text-sm md:text-base mt-2 max-w-xl font-medium">
                                    Catch up on high-definition interviews, trending shorts, kids storytime, and Indian Subcontinent community events.
                                </p>
                            </div>
                        </div>

                        {/* Subscribe Action Button */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                            <Button
                                onClick={handleSubscribe}
                                size="lg"
                                className="bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-widest px-8 py-7 rounded-2xl shadow-2xl shadow-red-600/50 transform hover:scale-105 transition-all flex items-center gap-3 cursor-pointer"
                            >
                                <Youtube className="w-6 h-6 fill-white" />
                                <span>Subscribe Now</span>
                            </Button>
                        </div>
                    </div>

                    {/* Channel Stats Widget */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-zinc-800/80">
                        <div className="bg-white/5 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                            <div className="flex items-center justify-center gap-2 text-red-400 mb-1">
                                <Users className="w-5 h-5" />
                                <span className="text-2xl font-black text-white">{subscriberCount}</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 font-extrabold uppercase tracking-wider">Subscribers</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-1">
                                <Eye className="w-5 h-5" />
                                <span className="text-2xl font-black text-white">{viewCount}</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 font-extrabold uppercase tracking-wider">Total Video Views</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                            <div className="flex items-center justify-center gap-2 text-amber-400 mb-1">
                                <Clock className="w-5 h-5" />
                                <span className="text-2xl font-black text-white">Unavailable</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 font-extrabold uppercase tracking-wider">Watch Time Hours</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-1">
                                <PlayCircle className="w-5 h-5" />
                                <span className="text-2xl font-black text-white">{videoCount}</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 font-extrabold uppercase tracking-wider">Uploaded Videos</p>
                        </div>
                    </div>
                </div>

                {/* Shorts Carousel Section */}
                <div className="mb-14">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <Flame className="w-6 h-6 text-red-500 fill-red-500 animate-bounce" />
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                                Trending Shorts
                            </h2>
                        </div>
                        <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest">
                            Quick 60s Highlights
                        </span>
                    </div>

                    {loadingShorts ? (
                        <VideoGridSkeleton count={4} columns="md:grid-cols-4" />
                    ) : shortsList.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {shortsList.map(short => (
                                <VideoCard key={short.id} video={short} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted-foreground text-sm text-center py-8">No shorts available right now. Visit <a href={OFFICIAL_YOUTUBE_CHANNEL.channelUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline font-bold">@RadioNyraUSA</a> for the latest.</p>
                    )}
                </div>

                {/* Category Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar mb-8">
                    <ListFilter className="w-5 h-5 text-primary shrink-0 mr-2" />
                    {CATEGORIES.map(category => (
                        <Button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            variant={selectedCategory === category ? "default" : "outline"}
                            className={`rounded-xl text-xs font-black uppercase tracking-wider px-5 py-2.5 shrink-0 transition-all cursor-pointer ${selectedCategory === category
                                    ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30"
                                    : "hover:border-primary"
                                }`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Main Video Grid */}
                {loadingAll ? (
                    <VideoGridSkeleton count={8} columns="xl:grid-cols-4" />
                ) : errorAll || filteredVideos.length === 0 ? (
                    <VideoEmptyState
                        title={errorAll ? "Couldn't Load Videos" : "No Videos Found"}
                        description={errorAll || "No videos match this filter. Try a different category."}
                        onRetry={refetch}
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredVideos.map(video => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                )}

                {/* Featured Playlists */}
                <div className="mt-16 pt-12 border-t border-border">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                        <Grid className="w-7 h-7 text-primary" />
                        Curated Playlists
                    </h2>

                    {loadingPlaylists ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="aspect-video rounded-2xl bg-muted/40 animate-pulse" />
                            ))}
                        </div>
                    ) : playlists.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {playlists.map(playlist => (
                                <div
                                    key={playlist.id}
                                    className="group relative rounded-2xl overflow-hidden aspect-video bg-zinc-900 border border-border hover:border-primary cursor-pointer transition-all shadow-md hover:shadow-xl"
                                    onClick={() => window.open(`https://www.youtube.com/playlist?list=${playlist.id}`, "_blank")}
                                >
                                    {playlist.thumbnail ? (
                                        <img
                                            src={playlist.thumbnail}
                                            alt={playlist.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                            <PlayCircle className="w-12 h-12 text-zinc-600" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-5 flex flex-col justify-end">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-red-400">
                                            {playlist.videoCount} Videos
                                        </span>
                                        <h3 className="text-white font-extrabold text-lg leading-tight group-hover:text-red-400 transition-colors">
                                            {playlist.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted-foreground text-sm text-center py-8">No playlists available right now. Visit <a href={OFFICIAL_YOUTUBE_CHANNEL.channelUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline font-bold">@RadioNyraUSA</a> for curated collections.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
