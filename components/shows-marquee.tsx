"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAudio } from "@/components/audio-context"
import { ArrowLeft, ArrowRight } from "lucide-react"

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
        <div key={`show-${index}`} className="flex-shrink-0 w-72 mx-4 group snap-center">
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

    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative py-12 w-full group">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 hidden md:block">
                <button
                    onClick={() => scroll('left')}
                    className="p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    aria-label="Scroll Left"
                >
                    <ArrowLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden md:block">
                <button
                    onClick={() => scroll('right')}
                    className="p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    aria-label="Scroll Right"
                >
                    <ArrowRight size={24} />
                </button>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 gap-2 no-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {shows.map(renderShow)}
            </div>

            {/* Fading edges effect - always visible */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity" />
        </div>
    );
}
