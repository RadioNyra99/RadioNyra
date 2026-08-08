"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { VideoCard } from "@/components/video-card"
import { VideoGridSkeleton, VideoEmptyState } from "@/components/video-loading-states"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"
import { fetchKidsVideos } from "@/lib/youtube-service"
import { useYouTube } from "@/lib/use-youtube"
import { Sparkles } from "lucide-react"

export default function KidsShowsPage() {
    const { videos: kidsVideos, loading, error, refetch } = useYouTube(
        () => fetchKidsVideos(12),
        []
    );

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <FrequencyBar />
            <main className="container mx-auto px-4 py-12">
                <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="w-8 h-8 text-amber-500 fill-amber-500 animate-pulse" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">Kids Corner & Storytime</h1>
                        <p className="text-muted-foreground text-sm font-medium mt-1">Moral stories, rhymes, and fun tales from {OFFICIAL_YOUTUBE_CHANNEL.handle}</p>
                    </div>
                </div>

                {loading ? (
                    <VideoGridSkeleton count={8} columns="md:grid-cols-4" />
                ) : error || kidsVideos.length === 0 ? (
                    <VideoEmptyState
                        title={error ? "Couldn't Load Kids Videos" : "No Kids Videos Found"}
                        description={error || "Visit our official YouTube channel for stories and kids shows."}
                        onRetry={refetch}
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {kidsVideos.map(video => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
