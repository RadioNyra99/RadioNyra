"use client"

import type React from "react"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface SeoPageLayoutProps {
    title: string;
    subtitle: string;
    stationKey: string;
    children: React.ReactNode;
}

/**
 * Shared shell for the SEO landing pages (markets, city radio pages, show and
 * testimonial detail). The header carries the single H1 and one-sentence
 * description; the body keeps the long-form copy these pages need for search.
 */
export function SeoPageLayout({ title, subtitle, stationKey, children }: SeoPageLayoutProps) {
    const { playStation, currentStation, isPlaying, togglePlay } = useAudio()
    const targetStation = STATIONS[stationKey] || STATIONS.Hindi
    const isTargetStation = currentStation.id === targetStation.id
    const isCurrentlyPlaying = isTargetStation && isPlaying

    const handlePlayClick = () => {
        if (!isTargetStation) {
            playStation(targetStation.id);
        } else {
            togglePlay();
        }
    }

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <PageHeader
                eyebrow="Radio Nyra"
                title={title}
                description={subtitle}
            >
                <Button
                    className="h-11 rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
                    onClick={handlePlayClick}
                    aria-label={isCurrentlyPlaying ? "Pause the live stream" : "Listen to the live stream"}
                >
                    {isCurrentlyPlaying ? <Pause className="mr-2 h-4 w-4 fill-current" /> : <Play className="mr-2 h-4 w-4 fill-current" />}
                    {isCurrentlyPlaying ? "Pause Live" : "Listen Live"}
                </Button>
            </PageHeader>

            <main className="container mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-14">
                <article className="space-y-8 text-[15px] leading-relaxed text-foreground/90 md:text-base">
                    {children}
                </article>
            </main>
            <Footer />
        </div>
    )
}
