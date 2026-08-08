"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { VideoCard } from "@/components/video-card"
import { VideoGridSkeleton, VideoEmptyState } from "@/components/video-loading-states"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"
import { fetchInterviews } from "@/lib/youtube-service"
import { useYouTube } from "@/lib/use-youtube"
import { Film } from "lucide-react"

export default function InterviewsPage() {
    const { videos: interviewVideos, loading, error, refetch } = useYouTube(
        () => fetchInterviews(12),
        []
    );

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <FrequencyBar />
            <main className="container mx-auto px-4 py-12">
                <div className="flex items-center gap-3 mb-8">
                    <Film className="w-8 h-8 text-primary" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">Celebrity & Guest Interviews</h1>
                        <p className="text-muted-foreground text-sm font-medium mt-1">Exclusive talks with Bollywood & Tollywood stars from {OFFICIAL_YOUTUBE_CHANNEL.handle}</p>
                    </div>
                </div>

                {loading ? (
                    <VideoGridSkeleton count={8} columns="md:grid-cols-4" />
                ) : error || interviewVideos.length === 0 ? (
                    <VideoEmptyState
                        title={error ? "Couldn't Load Interviews" : "No Interviews Found"}
                        description={error || "Visit our official YouTube channel for exclusive interviews."}
                        onRetry={refetch}
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {interviewVideos.map(video => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
