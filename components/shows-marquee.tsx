"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAudio } from "@/components/audio-context"

interface Show {
    name: string;
    host: string;
    image: string;
    stationId: string;
    language: string;
}

interface ShowsMarqueeProps {
    shows: Show[];
}

export function ShowsMarquee({ shows }: ShowsMarqueeProps) {
    const { playStation } = useAudio();

    const renderShow = (show: Show, index: number) => (
        <div key={`show-${index}`} className="flex-shrink-0 w-72 mx-4 group">
            <Link
                href="/schedule"
                className="bg-card border border-border/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden block rounded-xl shadow-lg"
                onClick={() => playStation(show.stationId)}
            >
                <div className="relative aspect-square overflow-hidden bg-black">
                    <img
                        src={show.image}
                        alt={show.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/600x600/000000/FFFFFF?text=" + encodeURIComponent(show.name);
                        }}
                    />
                </div>
                <div className="p-5 bg-card/80 backdrop-blur-sm border-t border-border/50">
                    <h3 className="font-bold uppercase tracking-tight leading-none text-lg truncate mb-1">{show.name}</h3>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{show.host}</p>
                </div>
            </Link>
        </div>
    );

    return (
        <div className="relative overflow-hidden py-12 w-full">
            <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
                {/* First set of shows */}
                <div className="flex items-center">
                    {shows.map(renderShow)}
                </div>
                {/* Duplicate set for seamless scrolling */}
                <div className="flex items-center">
                    {shows.map(renderShow)}
                </div>
            </div>

            {/* Fading edges effect */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
    );
}
