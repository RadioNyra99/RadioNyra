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
            const scrollAmount = 360;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const renderPartner = (partner: Partner, index: number) => {
        const content = (
            <div 
                title={partner.name}
                className="flex-shrink-0 w-60 h-36 sm:w-80 sm:h-44 md:w-96 md:h-52 mx-3 sm:mx-5 border-2 border-border/40 bg-white p-5 sm:p-8 flex items-center justify-center hover:border-primary hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 snap-center group/card"
            >
                <img
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-all duration-300 group-hover/card:scale-110 drop-shadow-sm"
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
        <div className="relative py-6 w-full group">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-3 sm:-left-5 -translate-y-1/2 z-20 hidden md:block">
                <button
                    onClick={() => scroll('left')}
                    className="p-3 bg-primary text-white rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Scroll Left"
                >
                    <ArrowLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 z-20 hidden md:block">
                <button
                    onClick={() => scroll('right')}
                    className="p-3 bg-primary text-white rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Scroll Right"
                >
                    <ArrowRight size={24} />
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
