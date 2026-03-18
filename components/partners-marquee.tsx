"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { PARTNERS, Partner } from "@/lib/partners"

interface PartnersMarqueeProps {
    partnersCount?: number;
    partnersData?: Partner[];
}

export function PartnersMarquee({ partnersCount, partnersData }: PartnersMarqueeProps) {
    const defaultPartners = partnersCount
        ? PARTNERS.slice(0, partnersCount)
        : PARTNERS;

    const partners = partnersData || defaultPartners;

    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 200;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const renderPartner = (partner: Partner, index: number) => {
        const content = (
            <div className="flex-shrink-0 w-32 h-20 mx-4 border border-border/30 bg-white/50 backdrop-blur-sm p-2 flex items-center justify-center hover:border-primary/50 transition-all duration-300 snap-center">
                <img
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain transition-all duration-500"
                />
            </div>
        );

        if (partner.link) {
            return (
                <Link key={`marquee-partner-${index}`} href={partner.link} target="_blank" rel="noopener noreferrer">
                    {content}
                </Link>
            );
        }

        return <div key={`marquee-partner-${index}`}>{content}</div>;
    };

    return (
        <div className="relative py-4 w-full group">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 hidden md:block">
                <button
                    onClick={() => scroll('left')}
                    className="p-2 bg-primary text-white rounded-full shadow-md hover:scale-110 transition-transform"
                    aria-label="Scroll Left"
                >
                    <ArrowLeft size={20} />
                </button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden md:block">
                <button
                    onClick={() => scroll('right')}
                    className="p-2 bg-primary text-white rounded-full shadow-md hover:scale-110 transition-transform"
                    aria-label="Scroll Right"
                >
                    <ArrowRight size={20} />
                </button>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 no-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {partners.map(renderPartner)}
            </div>

            {/* Fading edges effect */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity" />
        </div>
    );
}
