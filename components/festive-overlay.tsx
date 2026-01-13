"use client"

import React from "react"
import { PongalPot, Sugarcane, HolographicKolam } from "./floating-assets"

export function FestiveOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

            {/* 1. Glowing Rangoli Background (Slow, faint, premium) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                <HolographicKolam className="w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] text-pongal-yellow rangoli-bg" />
            </div>

            {/* 2. Floating Pongal Elements (Static positions but animated via CSS) */}
            {/* Hero-specific placement or general scattering */}

            {/* Top Left Sugarcane */}
            <div className="absolute top-20 left-10 w-24 md:w-32 opacity-80 pongal-float">
                <Sugarcane className="w-full h-full" />
            </div>

            {/* Bottom Right Pongal Pot */}
            <div className="absolute bottom-20 right-10 w-28 md:w-40 opacity-90 pongal-float" style={{ animationDelay: "1.5s" }}>
                <PongalPot className="w-full h-full" />
            </div>

            {/* Optional: Tiny floating flowers/grains as micro-accents */}
            <div className="absolute top-[30%] right-[15%] w-8 h-8 opacity-40 pongal-float" style={{ animationDelay: "3s" }}>
                <svg viewBox="0 0 24 24" fill="var(--pongal-yellow)">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
            </div>

        </div>
    )
}
