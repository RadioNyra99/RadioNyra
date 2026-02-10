"use client"

import Link from "next/link"

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

    const renderPartner = (partner: Partner, index: number) => {
        const content = (
            <div className="flex-shrink-0 w-32 h-20 mx-4 border border-border/30 bg-white/50 backdrop-blur-sm p-2 flex items-center justify-center hover:border-primary/50 transition-all duration-300">
                <img
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
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
