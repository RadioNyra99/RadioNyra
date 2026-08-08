"use client"

import React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { VideoCard } from "@/components/video-card"
import { VideoGridSkeleton, VideoEmptyState } from "@/components/video-loading-states"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"
import { fetchShorts } from "@/lib/youtube-service"
import { useYouTube } from "@/lib/use-youtube"
import { Flame } from "lucide-react"

export default function ShortsPage() {
    const { videos: shorts, loading, error, refetch } = useYouTube(
        () => fetchShorts(12),
        []
    );

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <FrequencyBar />
            <main className="container mx-auto px-4 py-12">
                <div className="flex items-center gap-3 mb-8">
                    <Flame className="w-8 h-8 text-red-500 fill-red-500 animate-bounce" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">Radio Nyra Shorts</h1>
                        <p className="text-muted-foreground text-sm font-medium mt-1">Official 60-second video highlights from {OFFICIAL_YOUTUBE_CHANNEL.handle}</p>
                    </div>
                </div>

                {loading ? (
                    <VideoGridSkeleton count={8} columns="md:grid-cols-4" />
                ) : error || shorts.length === 0 ? (
                    <VideoEmptyState
                        title={error ? "Couldn't Load Shorts" : "No Shorts Available"}
                        description={error || "Visit our official YouTube channel to watch the latest shorts."}
                        onRetry={refetch}
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {shorts.map(short => (
                            <VideoCard key={short.id} video={short} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
