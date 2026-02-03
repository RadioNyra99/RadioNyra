"use client"

import Link from "next/link"

interface PartnersMarqueeProps {
    partnersCount: number;
}

export function PartnersMarquee({ partnersCount }: PartnersMarqueeProps) {
    const partners = Array.from({ length: partnersCount }, (_, i) => i + 1);

    // Filter to handle the special Empowerly link for partner 1
    const renderPartner = (num: number) => {
        const isEmpowerly = num === 1;
        const href = isEmpowerly ? "https://start.empowerly.com/radio-nyra" : null;
        const imgSrc = `/images/${num}.jpg`;
        const alt = isEmpowerly ? "Empowerly" : `Partner ${num}`;

        const content = (
            <div className="flex-shrink-0 w-32 h-20 mx-4 border border-border/30 bg-white/50 backdrop-blur-sm p-2 flex items-center justify-center hover:border-primary/50 transition-all duration-300">
                <img
                    src={imgSrc}
                    alt={alt}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        );

        if (href) {
            return (
                <Link key={`partner-${num}`} href={href} target="_blank" rel="noopener noreferrer">
                    {content}
                </Link>
            );
        }

        return <div key={`partner-${num}`}>{content}</div>;
    };

    return (
        <div className="relative overflow-hidden py-4 w-full">
            <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
                {/* First set of partners */}
                <div className="flex items-center">
                    {partners.map(renderPartner)}
                </div>
                {/* Duplicate set for seamless scrolling */}
                <div className="flex items-center">
                    {partners.map(renderPartner)}
                </div>
            </div>

            {/* Fading edges effect */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
    );
}
