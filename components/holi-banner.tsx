"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"

export function HoliBanner() {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        // Show only on March 3rd and 4th, 2026
        // Or if forceHoli is in URL
        const now = new Date()
        const isHoliDate = (
            now.getFullYear() === 2026 &&
            now.getMonth() === 2 && // March is 2 (0-indexed)
            (now.getDate() === 2 || now.getDate() === 3 || now.getDate() === 4)
        )

        const urlParams = new URLSearchParams(window.location.search)
        const forceHoli = urlParams.get('forceHoli') === 'true'

        if ((isHoliDate || forceHoli) && !isDismissed) {
            setIsVisible(true)
        }
    }, [isDismissed])

    if (!isVisible) return null

    return (
        <AnimatePresence>
            <motion.section
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="relative w-full overflow-hidden bg-black border-b border-primary/20"
            >
                <div className="relative aspect-[21/4] md:aspect-[32/5] w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 flex flex-col items-center justify-center text-center p-4">
                        {/* SVG Splatters */}
                        <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <motion.path
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                d="M10,20 Q15,10 25,15 T35,25 T25,35 T15,30 Z"
                                fill="#FF1493"
                            />
                            <motion.path
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 1 }}
                                d="M80,10 Q90,15 85,25 T75,30 T65,20 T75,10 Z"
                                fill="#FFD700"
                            />
                            <motion.path
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 1 }}
                                d="M70,70 Q80,75 75,85 T60,90 T50,80 T60,70 Z"
                                fill="#ADFF2F"
                            />
                            <motion.path
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.1, duration: 1 }}
                                d="M20,60 Q30,55 25,70 T15,75 T10,65 T20,60 Z"
                                fill="#FF8C00"
                            />
                            <motion.path
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.3, duration: 1 }}
                                d="M85,65 Q95,70 90,80 T80,85 T75,75 T85,65 Z"
                                fill="#8A2BE2"
                            />
                        </svg>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        >
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic text-white drop-shadow-[0_5px_15px_rgba(234,20,131,0.5)] leading-none">
                                <span className="text-primary">Happy</span> Holi
                            </h2>
                            <p className="mt-1 md:mt-2 text-white font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs drop-shadow-md">
                                Wishing you a festival full of colors & joy!
                            </p>
                            <div className="mt-4 flex gap-2 justify-center">
                                <div className="w-2 h-2 rounded-full bg-[#FF9933] animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 rounded-full bg-[#138808] animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </motion.div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:bg-white/20 rounded-full z-30"
                        onClick={() => {
                            setIsVisible(false)
                            setIsDismissed(true)
                        }}
                    >
                        <X className="w-5 h-5" />
                    </Button>
                </div>
            </motion.section>
        </AnimatePresence>
    )
}
