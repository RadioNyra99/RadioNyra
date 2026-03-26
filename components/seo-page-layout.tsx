"use client"

import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import React from "react"

interface SeoPageLayoutProps {
    title: string;
    subtitle: string;
    stationKey: string;
    children: React.ReactNode;
}

export function SeoPageLayout({ title, subtitle, stationKey, children }: SeoPageLayoutProps) {
    const { playStation, currentStation, isPlaying, togglePlay } = useAudio()
    const targetStation = STATIONS[stationKey] || STATIONS.Hindi;
    const isTargetStation = currentStation.id === targetStation.id;

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
            <main className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary mb-6">
                        {title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 text-balance">
                        {subtitle}
                    </p>
                    <Button 
                        size="lg" 
                        className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
                        onClick={handlePlayClick}
                    >
                        <Play className="mr-2 h-6 w-6" /> 
                        {isPlaying && isTargetStation ? "Pause Radio" : `Listen Live Now`}
                    </Button>
                </header>

                <article className="mx-auto space-y-8 text-foreground pb-24 text-lg leading-relaxed">
                    {children}
                </article>
            </main>
            <Footer />
        </div>
    )
}
