"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const COLORS = [
    "#FF1493", // Deep Pink
    "#FFD700", // Gold
    "#ADFF2F", // Green Yellow
    "#FF4500", // Orange Red
    "#8A2BE2", // Blue Violet
    "#00CED1", // Dark Turquoise
    "#FF8C00", // Dark Orange
]

interface Particle {
    id: number
    x: number
    y: number
    size: number
    color: string
    delay: number
    duration: number
}

export function HoliEffects() {
    const [particles, setParticles] = useState<Particle[]>([])
    const [isEnabled, setIsEnabled] = useState(false)

    useEffect(() => {
        // Only show on March 3rd and 4th, 2026
        const now = new Date()
        const isHoliDate = (
            now.getFullYear() === 2026 &&
            now.getMonth() === 2 &&
            (now.getDate() === 3 || now.getDate() === 4)
        )

        const urlParams = new URLSearchParams(window.location.search)
        const forceHoli = urlParams.get('forceHoli') === 'true'

        if (isHoliDate || forceHoli) {
            setIsEnabled(true)

            // Generate random particles
            const newParticles: Particle[] = Array.from({ length: 40 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100, // percentage
                y: -20, // start above screen
                size: Math.random() * 20 + 10,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                delay: Math.random() * 5,
                duration: Math.random() * 3 + 4,
            }))
            setParticles(newParticles)
        }
    }, [])

    if (!isEnabled) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
            <AnimatePresence>
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{
                            x: `${p.x}vw`,
                            y: "-10vh",
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            y: "110vh",
                            opacity: [0, 0.8, 0.8, 0],
                            rotate: 360,
                            scale: [0, 1, 1, 0.5],
                            x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "linear"
                        }}
                        style={{
                            position: "absolute",
                            width: p.size,
                            height: p.size,
                            backgroundColor: p.color,
                            borderRadius: "50%",
                            filter: "blur(4px)",
                            boxShadow: `0 0 20px ${p.color}`,
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Corner Splashes */}
            <motion.div
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-30 pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundColor: COLORS[0], filter: "blur(60px)" }}
            />
            <motion.div
                className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-30 pointer-events-none"
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 12, repeat: Infinity }}
                style={{ backgroundColor: COLORS[2], filter: "blur(80px)" }}
            />
        </div>
    )
}
