"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Radio, Play, Smartphone, Volume2, X, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { trackListenLive } from "@/lib/analytics"

export function GaneshChaturthiBanner() {
    const { playStation } = useAudio()
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const handlePlayHindi = () => {
        playStation(STATIONS.Hindi.id)
        trackListenLive(STATIONS.Hindi.name, "Hindi")
    }

    const handlePlayTelugu = () => {
        playStation(STATIONS.Telugu.id)
        trackListenLive(STATIONS.Telugu.name, "Telugu")
    }

    return (
        <>
            <section className="relative w-full bg-gradient-to-b from-[#1a0802] via-[#240a02] to-black text-white border-y border-amber-500/30 overflow-hidden select-none">
                {/* Festive Background Ambient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-red-900/10 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        
                        {/* Poster Image with Gold Accent Frame */}
                        <div className="w-full lg:w-5/12 flex justify-center">
                            <div className="relative group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-red-600 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
                                <div className="relative rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-black aspect-square max-w-[340px] sm:max-w-[400px] w-full">
                                    <img
                                        src="/images/ganesh-chaturthi.jpg"
                                        alt="Happy Ganesh Chaturthi Radio Nyra Raleigh-Durham"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Hover Overlay with expand prompt */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-[2px]">
                                        <Maximize2 className="w-4 h-4 text-amber-400" /> Click to view full image
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/40 text-[10px] font-black text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                                        <Sparkles className="w-3 h-3 text-amber-400" /> Radio Nyra Special
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text and Tune-in CTAs */}
                        <div className="w-full lg:w-7/12 text-center lg:text-left">
                            {/* Festive Tag */}
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-black uppercase tracking-widest mb-4">
                                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
                                <span>Ganesh Chaturthi Festive Greetings</span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight italic leading-tight text-white mb-2">
                                Happy <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 inline-block">Ganesh Chaturthi</span>
                            </h2>
                            <p className="text-amber-400 font-extrabold text-sm sm:text-base uppercase tracking-widest mb-4">
                                May Bappa Bless You Always
                            </p>

                            {/* Blessing Paragraph */}
                            <blockquote className="border-l-0 lg:border-l-4 lg:border-amber-500/70 lg:pl-4 text-zinc-200 text-sm sm:text-base leading-relaxed italic mb-6">
                                &ldquo;May Lord Ganesha remove all obstacles and fill your life with happiness, success and peace.&rdquo;
                                <span className="block text-xs font-bold text-amber-300/80 uppercase tracking-wider not-italic mt-1.5">
                                    — Warm wishes from team Radio Nyra Raleigh-Durham
                                </span>
                            </blockquote>

                            {/* Station Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {/* Hindi Station */}
                                <div className="bg-gradient-to-r from-red-950/60 to-black/80 border border-red-600/30 p-3.5 rounded-xl flex items-center justify-between gap-3">
                                    <div className="text-left">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-red-400">Hindi Broadcast</div>
                                        <div className="text-xs sm:text-sm font-bold text-white">99.9 FM-HD4 • 101.9 FM • 1490 AM</div>
                                    </div>
                                    <Button
                                        onClick={handlePlayHindi}
                                        size="sm"
                                        className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider h-9 px-3 rounded-lg shadow-md cursor-pointer shrink-0"
                                    >
                                        <Radio className="w-3.5 h-3.5 mr-1.5" /> Listen
                                    </Button>
                                </div>

                                {/* Telugu Station */}
                                <div className="bg-gradient-to-r from-amber-950/60 to-black/80 border border-amber-500/30 p-3.5 rounded-xl flex items-center justify-between gap-3">
                                    <div className="text-left">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-amber-400">Telugu Broadcast</div>
                                        <div className="text-xs sm:text-sm font-bold text-white">99.9 FM-HD3</div>
                                    </div>
                                    <Button
                                        onClick={handlePlayTelugu}
                                        size="sm"
                                        className="bg-amber-500 hover:bg-amber-600 text-black font-black text-xs uppercase tracking-wider h-9 px-3 rounded-lg shadow-md cursor-pointer shrink-0"
                                    >
                                        <Radio className="w-3.5 h-3.5 mr-1.5 text-black" /> Listen
                                    </Button>
                                </div>
                            </div>

                            {/* Additional Actions */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 border-white/20 text-white font-bold text-xs uppercase tracking-wider h-10 px-5 rounded-lg cursor-pointer"
                                >
                                    <Link href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" target="_blank">
                                        <Smartphone className="w-4 h-4 mr-2 text-amber-400" /> Free Mobile App
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/40 text-amber-300 font-bold text-xs uppercase tracking-wider h-10 px-5 rounded-lg cursor-pointer"
                                >
                                    <Link href="/festival-calendar">
                                        Explore Festival Calendar
                                    </Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <div className="relative max-w-2xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setIsLightboxOpen(false)}
                                className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <img
                                src="/images/ganesh-chaturthi.jpg"
                                alt="Ganesh Chaturthi Poster Radio Nyra"
                                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border-2 border-amber-400 shadow-2xl"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
