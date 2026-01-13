"use client"

import React from "react"

export const PongalPot = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="potGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#A0522D" />
                <stop offset="100%" stopColor="#5D2906" />
            </radialGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        {/* Main Pot Body */}
        <path d="M50 150 Q 50 190 100 190 Q 150 190 150 150 Q 150 100 100 100 Q 50 100 50 150Z" fill="url(#potGradient)" />
        {/* Pot Rim */}
        <ellipse cx="100" cy="100" rx="40" ry="10" fill="#8B4513" />
        <ellipse cx="100" cy="98" rx="35" ry="8" fill="#A0522D" />
        {/* Overflowing Rice/Milk */}
        <path d="M65 100 Q 100 60 135 100 Q 150 120 140 140 Q 130 130 100 130 Q 70 130 60 140 Q 50 120 65 100Z" fill="white" />
        {/* Rice Grains (Tiny dots) */}
        {[...Array(10)].map((_, i) => (
            <circle key={i} cx={80 + Math.random() * 40} cy={110 + Math.random() * 30} r="1.5" fill="#f0f0f0" />
        ))}
        {/* Decoration on Pot */}
        <path d="M60 150 Q 100 170 140 150" stroke="#FFD700" strokeWidth="2" opacity="0.6" />
    </svg>
)

export const Sugarcane = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="caneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2E7D32" />
                <stop offset="50%" stopColor="#4CAF50" />
                <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
        </defs>
        {/* Main Stalk */}
        <rect x="42" y="50" width="16" height="350" rx="8" fill="url(#caneGradient)" />
        {/* Cane Segments */}
        {[100, 150, 200, 250, 300, 350].map((y) => (
            <line key={y} x1="42" y1={y} x2="58" y2={y} stroke="#1B5E20" strokeWidth="2" />
        ))}
        {/* Leaves at Top */}
        <path d="M50 50 Q 10 10 0 80" stroke="#4CAF50" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M50 50 Q 90 10 100 80" stroke="#4CAF50" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M50 40 Q 20 0 0 40" stroke="#66BB6A" strokeWidth="3" fill="none" />
        <path d="M50 40 Q 80 0 100 40" stroke="#66BB6A" strokeWidth="3" fill="none" />
    </svg>
)

export const HolographicKolam = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="kolamGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <g filter="url(#kolamGlow)">
            <circle cx="100" cy="100" r="80" stroke="#FFD700" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
            <path d="M100 20 L120 80 L180 100 L120 120 L100 180 L80 120 L20 100 L80 80 Z" stroke="#FF9800" strokeWidth="2" fill="#FFC107" fillOpacity="0.1" />
            <path d="M100 40 L115 85 L160 100 L115 115 L100 160 L85 115 L40 100 L85 85 Z" stroke="#4CAF50" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="15" stroke="#FFD700" strokeWidth="2" />
            {/* Intricate dots */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <circle
                    key={angle}
                    cx={100 + 60 * Math.cos((angle * Math.PI) / 180)}
                    cy={100 + 60 * Math.sin((angle * Math.PI) / 180)}
                    r="3"
                    fill="#FF9800"
                />
            ))}
        </g>
    </svg>
)
