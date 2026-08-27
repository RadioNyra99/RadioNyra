"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { Youtube, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"
import { fetchLatestVideos } from "@/lib/youtube-service"
import { useYouTube, useYouTubeChannelStats } from "@/lib/use-youtube"
import { VideoCard } from "@/components/video-card"
import { VideoGridSkeleton, VideoEmptyState } from "@/components/video-loading-states"
import { trackYouTubeSubscribe } from "@/lib/analytics"

const HOMEPAGE_WATCH_CATEGORIES = [
    "All",
    "Shorts",
    "Live",
    "Popular",
];

export function YouTubeWatchSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { subscriberCount } = useYouTubeChannelStats();

    const { videos, loading, error, refetch } = useYouTube(
        () => fetchLatestVideos(16),
        []
    );

    const handleSubscribe = () => {
        trackYouTubeSubscribe("Homepage Watch on YouTube Section");
        window.open(OFFICIAL_YOUTUBE_CHANNEL.subscribeUrl, "_blank");
    };

    const filteredVideos = useMemo(() => {
        const sorted = [...videos].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        if (selectedCategory === "All") return sorted;
        if (selectedCategory === "Shorts") return sorted.filter(v => v.isShort);
        if (selectedCategory === "Live") return sorted.filter(v => v.isLive);
        if (selectedCategory === "Popular") return [...videos].sort((a, b) => b.viewCountNum - a.viewCountNum);
        return sorted;
    }, [videos, selectedCategory]);

    return (
        <section id="watch-on-youtube" className="py-8 bg-gradient-to-b from-black via-zinc-950 to-background text-white border-b border-border/40">
            <div className="container mx-auto px-4">
                {/* Official Branding Header & Subscribe Bar */}
                <div className="p-5 md:p-6 rounded-2xl bg-zinc-900/90 border border-red-900/40 backdrop-blur-xl shadow-2xl mb-6 flex flex-col lg:flex-row items-center justify-between gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left z-10">
                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl shadow-red-600/50 shrink-0">
                            <Youtube className="w-7 h-7 text-white fill-white" />
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-widest mb-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                Official Channel: {OFFICIAL_YOUTUBE_CHANNEL.handle}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white">
                                Watch On YouTube
                            </h2>
                            <p className="text-zinc-400 text-xs md:text-sm mt-0.5 max-w-lg font-medium">
                                Watch exclusive celebrity interviews, 60s shorts, kids Panchatantra storytime, and Indian Subcontinent festival specials.
                            </p>
                        </div>
                    </div>

                    {/* Large Subscribe Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 z-10 shrink-0">
                        <div className="text-center sm:text-right hidden md:block">
                            <span className="text-lg font-black text-white block">{subscriberCount}</span>
                            <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest">Subscribers</span>
                        </div>
                        <Button
                            onClick={handleSubscribe}
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest px-6 py-5 rounded-xl shadow-xl shadow-red-600/50 transform hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <Youtube className="w-5 h-5 fill-white" />
                            <span>Subscribe Now</span>
                        </Button>
                    </div>
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar mb-6">
                    {HOMEPAGE_WATCH_CATEGORIES.map(category => (
                        <Button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            variant={selectedCategory === category ? "default" : "outline"}
                            className={`rounded-xl text-xs font-black uppercase tracking-wider px-5 py-2.5 shrink-0 transition-all cursor-pointer ${selectedCategory === category
                                    ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 border-red-600"
                                    : "bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-red-500/50 hover:text-white"
                                }`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Video Cards Grid */}
                {loading ? (
                    <VideoGridSkeleton count={8} columns="lg:grid-cols-4" />
                ) : error || filteredVideos.length === 0 ? (
                    <VideoEmptyState
                        title={error ? "Couldn't Load Videos" : "No Videos Found"}
                        description={error || "No videos match this filter. Try a different category or visit our YouTube channel."}
                        onRetry={refetch}
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredVideos.slice(0, 8).map(video => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                )}

                {/* Section Footer Link */}
                <div className="mt-12 text-center">
                    <Button asChild variant="outline" className="rounded-full bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 text-xs font-extrabold uppercase tracking-widest px-8 py-6 cursor-pointer">
                        <Link href="/youtube">
                            Browse Complete @RadioNyraUSA YouTube Hub <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
