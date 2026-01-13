"use client"

import { useEffect, useState } from "react"

export function FestiveOverlay() {
    const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number }[]>([])

    useEffect(() => {
        // Generate petals on client-side only to avoid hydration mismatch
        const count = 15
        const newPetals = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 8 + Math.random() * 5,
        }))
        setPetals(newPetals)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* 1. Warm Sun Glow (Top Right) */}
            <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />

            {/* 2. Warm Ambient Glow (Bottom Left) */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

            {/* 3. Kolam / Rangoli Patters (Corners) */}
            {/* Top Left */}
            <div className="absolute top-4 left-4 opacity-10 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-600 animate-spin-slow">
                    <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="50" cy="50" r="10" stroke="currentColor" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeDasharray="4 4" />
                </svg>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-4 right-4 opacity-10 w-32 h-32 pointer-events-none rotate-180">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Kolam_texture.jpg/640px-Kolam_texture.jpg" className="w-full h-full object-contain opacity-20 invert mix-blend-multiply hidden" alt="pattern" />
                {/* Simple Geometric Kolam SVG replacement */}
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-600">
                    <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
                    <circle cx="50" cy="50" r="20" />
                    <path d="M50 10 Q 90 10 90 50 T 50 90 T 10 50 T 50 10" opacity="0.5" />
                </svg>
            </div>

            {/* 4. Sugarcane Silhouette (Bottom Corners - Very Subtle) */}
            <div className="absolute bottom-0 left-0 w-24 h-48 opacity-[0.03] pointer-events-none text-green-900">
                <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="h-full w-full">
                    <path d="M40 200 Q 30 150 60 100 Q 90 50 50 0" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 200 Q 40 160 70 110 Q 95 60 60 10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M40 100 L 0 80" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M60 120 L 100 100" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </div>

            {/* 5. Falling Petals / Marigold Flowers */}
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="absolute top-[-5%] text-orange-400/40 animate-fall"
                    style={{
                        left: `${petal.left}%`,
                        animationDelay: `${petal.delay}s`,
                        animationDuration: `${petal.duration}s`,
                    }}
                >
                    {/* Simple Flower Shape */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                </div>
            ))}
        </div>
    )
}
