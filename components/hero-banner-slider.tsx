"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Youtube, Smartphone, Radio, Volume2, Sparkles, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { trackListenLive, trackYouTubeSubscribe, trackAppDownload } from "@/lib/analytics"

const SLIDES = [
    {
        id: 1,
        tag: "LIVE ON AIR 99.9 FM HD3 / HD4",
        title: "THE INDIAN SUBCONTINENT",
        subtitle: "COMMUNITY MEDIA NETWORK",
        description: "Reaching over 250,000+ Indian Subcontinent households across the US through high-definition radio, YouTube streams, community events, and digital media.",
        bgImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1920&q=80",
        badge: "24/7 HD Radio Streaming"
    },
    {
        id: 2,
        tag: "YOUTUBE EXCLUSIVE",
        title: "WATCH LIVE INTERVIEWS",
        subtitle: "& CELEBRITY SHOWS",
        description: "Subscribe to Radio Nyra YouTube for exclusive Bollywood celeb interviews, trending shorts, kids storytime, and community festival coverage.",
        bgImage: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1920&q=80",
        badge: "52.8K+ Subscribers • 5.8M+ Views"
    },
    {
        id: 3,
        tag: "RADIO NYRA MOBILE APP",
        title: "LISTEN ANYTIME",
        subtitle: "ANYWHERE IN THE WORLD",
        description: "Download the free Radio Nyra app on iOS and Android for crystal-clear HD live audio, podcast episodes, and real-time community updates.",
        bgImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80",
        badge: "Top Rated #1 Indian Subcontinent Radio App"
    }
];

export function HeroBannerSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const { playStation, isPlaying, currentStation } = useAudio();

    useEffect(() => {
        if (!isAutoplay) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [isAutoplay]);

    const handleListenLiveClick = () => {
        playStation(STATIONS.Hindi.id);
        trackListenLive(STATIONS.Hindi.name, "Hindi");
    };

    const handleYouTubeSubscribeClick = () => {
        trackYouTubeSubscribe("Hero Banner CTA");
        window.open("https://youtube.com/c/RadioNyraUSA?sub_confirmation=1", "_blank");
    };

    const currentSlide = SLIDES[currentIndex];

    return (
        <section className="relative w-full min-h-[680px] lg:min-h-[750px] flex items-center overflow-hidden bg-black text-white select-none">
            {/* Animated Canvas / Background Layer */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${currentSlide.bgImage}')` }}
                    >
                        {/* Dark Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                    </motion.div>
                </AnimatePresence>

                {/* Animated Pulsing Waveform Background Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none animate-pulse" />
            </div>

            {/* Main Hero Content */}
            <div className="container mx-auto px-4 relative z-10 py-16 lg:py-24">
                <div className="max-w-4xl">
                    {/* Live ON AIR Indicator & Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/90 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-red-600/30 backdrop-blur">
                            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                            <Radio className="w-4 h-4 animate-pulse" />
                            <span>LIVE ON AIR</span>
                        </div>

                        <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 font-bold text-xs uppercase tracking-wider backdrop-blur border border-white/10">
                            {currentSlide.badge}
                        </span>
                    </div>

                    {/* Dynamic Tagline */}
                    <motion.p
                        key={`tag-${currentSlide.id}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary text-sm md:text-base font-extrabold tracking-widest uppercase mb-2"
                    >
                        {currentSlide.tag}
                    </motion.p>

                    {/* Main Headline */}
                    <motion.h1
                        key={`title-${currentSlide.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] italic mb-4"
                    >
                        <span className="text-white block drop-shadow-lg">{currentSlide.title}</span>
                        <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent block">
                            {currentSlide.subtitle}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        key={`desc-${currentSlide.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white/80 text-base md:text-xl font-normal leading-relaxed max-w-2xl mb-10"
                    >
                        {currentSlide.description}
                    </motion.p>

                    {/* Three Key CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        {/* Primary CTA: Listen Live */}
                        <Button
                            onClick={handleListenLiveClick}
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-7 rounded-full shadow-2xl shadow-red-600/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer group"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            </div>
                            <span>Listen Live Now</span>
                        </Button>

                        {/* Secondary CTA: Subscribe on YouTube */}
                        <Button
                            onClick={handleYouTubeSubscribeClick}
                            variant="outline"
                            size="lg"
                            className="bg-white/10 hover:bg-red-600/20 text-white border-2 border-red-500/80 font-extrabold uppercase tracking-widest text-sm px-7 py-7 rounded-full backdrop-blur transition-all duration-300 flex items-center gap-3 cursor-pointer"
                        >
                            <Youtube className="w-6 h-6 text-red-500 fill-red-500/20" />
                            <span>Subscribe on YouTube</span>
                        </Button>

                        {/* Third CTA: Download Mobile App */}
                        <Button
                            asChild
                            variant="ghost"
                            size="lg"
                            className="bg-white/5 hover:bg-white/15 text-white/90 font-bold uppercase tracking-widest text-xs px-6 py-7 rounded-full backdrop-blur border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <Link href="#app-download" onClick={() => trackAppDownload("ios")}>
                                <Smartphone className="w-5 h-5 text-cyan-400" />
                                <span>Get Mobile App</span>
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Slider Navigation Dots & Arrows */}
            <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
                <button
                    onClick={() => {
                        setIsAutoplay(false);
                        setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
                    }}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                    {SLIDES.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => {
                                setIsAutoplay(false);
                                setCurrentIndex(index);
                            }}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index ? "w-8 bg-red-500" : "w-2.5 bg-white/30"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => {
                        setIsAutoplay(false);
                        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
                    }}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur transition-colors cursor-pointer"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
