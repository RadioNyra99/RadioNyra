"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Play, Car, Info, ChevronRight, Radio, Globe, Smartphone, Volume2, ExternalLink, Sparkles, CheckCircle2, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const CAR_CATEGORIES = [
    {
        id: "honda",
        brand: "Honda & Acura",
        badge: "Honda / Acura",
        badgeColor: "bg-blue-600 text-white",
        description: "Official and step-by-step guides to tune HD multicasts and save permanent presets on Honda Civic, Accord, CR-V, HR-V, Pilot, and Acura models.",
        videos: [
            {
                title: "How-To Preset & Tune HD Radio Stations in a Honda",
                id: "Mi99dawJq6I",
                thumbnail: "https://img.youtube.com/vi/Mi99dawJq6I/hqdefault.jpg",
                duration: "Honda English Guide",
                carModel: "Honda Touchscreen System"
            },
            {
                title: "How to Tune Radio on Honda Civic / CR-V / HR-V / Accord (2020-Current)",
                id: "3IB23f0AJ0w",
                thumbnail: "https://img.youtube.com/vi/3IB23f0AJ0w/hqdefault.jpg",
                duration: "Modern Honda Guide",
                carModel: "Honda Display Audio"
            }
        ]
    },
    {
        id: "toyota",
        brand: "Toyota & Lexus",
        badge: "Toyota / Lexus",
        badgeColor: "bg-red-600 text-white",
        description: "Master Toyota Entune & Lexus Enform HD Radio multicast tuning to select HD2, HD3, and HD4 digital channels seamlessly.",
        videos: [
            {
                title: "Hoffman Hints - HD Radio Multicasts in Your Toyota (Selecting Sub-Channels)",
                id: "YNBltVopivQ",
                thumbnail: "https://img.youtube.com/vi/YNBltVopivQ/hqdefault.jpg",
                duration: "Toyota Multicast Guide",
                carModel: "Toyota Entune System"
            },
            {
                title: "How To Save and Program Radio Stations in Toyota Entune",
                id: "rkSpvHzQWNU",
                thumbnail: "https://img.youtube.com/vi/rkSpvHzQWNU/hqdefault.jpg",
                duration: "Toyota Presets Guide",
                carModel: "Toyota Sessions"
            }
        ]
    },
    {
        id: "bmw",
        brand: "BMW & European Luxury",
        badge: "BMW / Mercedes",
        badgeColor: "bg-zinc-800 text-white",
        description: "BMW iDrive & Mercedes-Benz MBUX guides for tuning multicast sub-channels sharing the same main frequency (HD1, HD2, HD3).",
        videos: [
            {
                title: "BMW How-To: Creating Radio Shortcuts & Adding Presets (iDrive)",
                id: "-_hIPNuQlkc",
                thumbnail: "https://img.youtube.com/vi/-_hIPNuQlkc/hqdefault.jpg",
                duration: "BMW iDrive Guide",
                carModel: "BMW iDrive 7 / 8 / 8.5"
            },
            {
                title: "BMW iDrive Secret Manual Tuning for Digital & HD Radio",
                id: "WQt08SPJi9M",
                thumbnail: "https://img.youtube.com/vi/WQt08SPJi9M/hqdefault.jpg",
                duration: "BMW Manual Tune",
                carModel: "BMW iDrive Systems"
            },
            {
                title: "Tuning to HD Radio Stations Sharing Same Frequency in Mercedes-Benz",
                id: "D3dCRuqt3ao",
                thumbnail: "https://img.youtube.com/vi/D3dCRuqt3ao/hqdefault.jpg",
                duration: "Mercedes MBUX Guide",
                carModel: "Mercedes-Benz Audio"
            }
        ]
    },
    {
        id: "general",
        brand: "General HD Radio & Aftermarket",
        badge: "All Vehicles",
        badgeColor: "bg-emerald-600 text-white",
        description: "Comprehensive English tutorials explaining HD Radio multicasting, sub-channel scanning, and aftermarket dash receivers.",
        videos: [
            {
                title: "How to Tune HD Radio Multicast Channels (HD2, HD3, HD4) in English",
                id: "OHfPvqA7sJ8",
                thumbnail: "https://img.youtube.com/vi/OHfPvqA7sJ8/hqdefault.jpg",
                duration: "Featured English Masterclass",
                carModel: "All HD Radio Cars"
            },
            {
                title: "How to Set Up Your HD Radio & Save Permanent Station Presets",
                id: "I95DSfh9a1M",
                thumbnail: "https://img.youtube.com/vi/I95DSfh9a1M/hqdefault.jpg",
                duration: "Setup & Presets Guide",
                carModel: "Digital Receivers"
            },
            {
                title: "In-Car HD Radio Receiver & Multicast Selection Walkthrough",
                id: "xgEW1I1NJak",
                thumbnail: "https://img.youtube.com/vi/xgEW1I1NJak/hqdefault.jpg",
                duration: "Touchscreen Tuning",
                carModel: "Kenwood / Pioneer / Alpine"
            }
        ]
    }
];

const DIRECTORY_LINKS = [
    {
        name: "radio.net",
        link: "http://radio.net/search?q=radionyra",
        domain: "radio.net",
        featured: true,
        desc: "Stream Radio Nyra live on Europe and America's premier web & mobile radio directory."
    },
    {
        name: "Get Me Radio!",
        link: "https://www.getmeradio.com/stations/radionyra-4514/",
        domain: "getmeradio.com",
        featured: true,
        desc: "Official Radio Nyra station page with instant live streaming on web, Roku, Fire TV, & Alexa."
    },
    {
        name: "thenonstopradio.com",
        link: "https://thenonstopradio.com/radio/radio_nyra_us",
        domain: "thenonstopradio.com",
        featured: false,
        desc: "24/7 crystal-clear global web stream player."
    },
    {
        name: "radioandpodcast.com",
        link: "https://radioandpodcast.com/radio/united-states/radio_nyra_us",
        domain: "radioandpodcast.com",
        featured: false,
        desc: "US broadcast directory & podcast hub."
    },
    {
        name: "zeno.fm",
        link: "https://zeno.fm",
        domain: "zeno.fm",
        featured: false,
        desc: "High-bandwidth worldwide internet radio network."
    },
    {
        name: "liveonlineradio.net",
        link: "https://liveonlineradio.net",
        domain: "liveonlineradio.net",
        featured: false,
        desc: "Global online radio stream directory."
    },
    {
        name: "radioinsight.com",
        link: "https://radioinsight.com",
        domain: "radioinsight.com",
        featured: false,
        desc: "Official radio industry directory."
    },
    {
        name: "globalradioplayer.com",
        link: "https://globalradioplayer.com",
        domain: "globalradioplayer.com",
        featured: false,
        desc: "Worldwide live radio player platform."
    },
    {
        name: "openradio.app",
        link: "https://openradio.app",
        domain: "openradio.app",
        featured: false,
        desc: "Open radio mobile streaming directory."
    },
    {
        name: "radioindia.in",
        link: "https://radioindia.in",
        domain: "radioindia.in",
        featured: false,
        desc: "Indian diaspora radio portal."
    },
    {
        name: "365liveradio.com",
        link: "https://365liveradio.com",
        domain: "365liveradio.com",
        featured: false,
        desc: "365 Live Radio world station directory."
    },
    {
        name: "fmradios.in",
        link: "https://fmradios.in",
        domain: "fmradios.in",
        featured: false,
        desc: "Comprehensive Indian FM radio directory."
    },
    {
        name: "radiostationworld.com",
        link: "http://radiostationworld.com",
        domain: "radiostationworld.com",
        featured: false,
        desc: "Global broadcast index."
    },
    {
        name: "radio.pl",
        link: "https://www.radio.pl",
        domain: "radio.pl",
        featured: false,
        desc: "International radio directory."
    }
];

export default function HowToTunePage() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const [heroVideoPlaying, setHeroVideoPlaying] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<string>("all");

    const HERO_MAIN_VIDEO_ID = "OHfPvqA7sJ8";

    const filteredCategories = selectedFilter === "all"
        ? CAR_CATEGORIES
        : CAR_CATEGORIES.filter(cat => cat.id === selectedFilter);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white pb-20">
            <Navigation />

            <div className="bg-background border-b border-border/50">
                <div className="container mx-auto px-4 py-3">
                    <a href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </a>
                </div>
            </div>

            <main>
                {/* Hero section */}
                <section className="py-14 md:py-20 bg-gradient-to-b from-red-600 via-primary to-rose-700 text-white overflow-hidden relative shadow-lg">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex-1 text-center md:text-left">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 rounded-full text-xs font-black uppercase tracking-widest text-white/90 mb-4 border border-white/10">
                                    <Radio className="w-3.5 h-3.5 text-yellow-300" /> Official English Video Guides
                                </span>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 italic leading-tight md:leading-none drop-shadow-md">
                                    How To Tune <br /> <span className="text-yellow-300">English Tutorials</span>
                                </h1>
                                <p className="text-sm md:text-base font-bold uppercase tracking-[0.12em] opacity-95 max-w-xl leading-relaxed mb-6">
                                    Step-by-step English video guides to tune into Radio Nyra HD4 (Hindi) & HD3 (Telugu) on your Honda, Toyota, BMW, and other vehicles.
                                </p>

                                {/* Quick Jump Car Pills */}
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
                                    <span className="text-xs font-black uppercase tracking-wider text-white/80 mr-1 flex items-center gap-1">
                                        <Car className="w-3.5 h-3.5" /> Jump to:
                                    </span>
                                    <button
                                        onClick={() => { setSelectedFilter("honda"); document.getElementById("honda")?.scrollIntoView({ behavior: 'smooth' }); }}
                                        className="px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-black/40 hover:bg-white hover:text-black border border-white/20 transition-all cursor-pointer"
                                    >
                                        Honda / Acura
                                    </button>
                                    <button
                                        onClick={() => { setSelectedFilter("toyota"); document.getElementById("toyota")?.scrollIntoView({ behavior: 'smooth' }); }}
                                        className="px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-black/40 hover:bg-white hover:text-black border border-white/20 transition-all cursor-pointer"
                                    >
                                        Toyota / Lexus
                                    </button>
                                    <button
                                        onClick={() => { setSelectedFilter("bmw"); document.getElementById("bmw")?.scrollIntoView({ behavior: 'smooth' }); }}
                                        className="px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-black/40 hover:bg-white hover:text-black border border-white/20 transition-all cursor-pointer"
                                    >
                                        BMW / Mercedes
                                    </button>
                                    <button
                                        onClick={() => { setSelectedFilter("general"); document.getElementById("general")?.scrollIntoView({ behavior: 'smooth' }); }}
                                        className="px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-black/40 hover:bg-white hover:text-black border border-white/20 transition-all cursor-pointer"
                                    >
                                        General HD Radio
                                    </button>
                                </div>
                            </div>

                            {/* Main Featured English Hero Video Player */}
                            <div className="w-full md:w-5/12 aspect-video bg-black rounded-2xl border-2 border-white/20 relative overflow-hidden shadow-2xl group">
                                {heroVideoPlaying ? (
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${HERO_MAIN_VIDEO_ID}?autoplay=1&rel=0`}
                                        title="Main English HD Radio Tuning Tutorial"
                                        className="w-full h-full border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div 
                                        className="relative w-full h-full cursor-pointer"
                                        onClick={() => setHeroVideoPlaying(true)}
                                    >
                                        <img
                                            src={`https://img.youtube.com/vi/${HERO_MAIN_VIDEO_ID}/hqdefault.jpg`}
                                            alt="HD Radio Multicast Tuning Tutorial"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-between p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
                                                    Main English Guide
                                                </span>
                                                <span className="text-[11px] text-white/90 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                                                    HD2 & HD3 Multicast
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1 text-white" />
                                                </div>
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-sm sm:text-base font-black text-white leading-tight drop-shadow">
                                                    HD Radio Multicast Tuning (HD2, HD3 & HD4)
                                                </h3>
                                                <p className="text-[11px] text-yellow-300 font-bold uppercase tracking-wider mt-0.5">
                                                    Click to Play Full English Tutorial
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3-Step In-Car Quick Tuning Guide */}
                <section className="py-10 bg-muted/40 border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic">
                                3 Quick Steps to Tune In Your Car
                            </h2>
                            <p className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider mt-1">
                                Available in Raleigh-Durham & Across North Carolina on 99.9 FM
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="bg-card border border-border/80 p-6 rounded-2xl shadow-sm relative overflow-hidden group hover:border-primary transition-colors">
                                <div className="text-4xl font-black text-primary/20 absolute top-4 right-4">01</div>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black mb-4">
                                    <Radio className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Tune to 99.9 FM</h3>
                                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                                    Set your vehicle&apos;s audio system to <strong>99.9 FM</strong>. Ensure your car&apos;s HD Radio feature is switched on.
                                </p>
                            </div>

                            <div className="bg-card border border-border/80 p-6 rounded-2xl shadow-sm relative overflow-hidden group hover:border-primary transition-colors">
                                <div className="text-4xl font-black text-primary/20 absolute top-4 right-4">02</div>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black mb-4">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Wait for HD Logo</h3>
                                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                                    Within 2-3 seconds, the digital <strong>HD Radio logo</strong> will appear on your screen, indicating multicast channels are ready.
                                </p>
                            </div>

                            <div className="bg-card border border-border/80 p-6 rounded-2xl shadow-sm relative overflow-hidden group hover:border-primary transition-colors">
                                <div className="text-4xl font-black text-primary/20 absolute top-4 right-4">03</div>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black mb-4">
                                    <Volume2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Select HD4 or HD3</h3>
                                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                                    Use your tuning knob, seek buttons, or touchscreen to select <strong>HD4 for Hindi</strong> or <strong>HD3 for Telugu</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* English Video Tutorials Section with Brand Filter */}
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center max-w-3xl mx-auto mb-10">
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block mb-2">
                                Video Walkthroughs
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
                                Car-Specific English Video Tutorials
                            </h2>
                            <p className="text-xs md:text-sm text-muted-foreground font-medium mt-2">
                                Step-by-step setup guides for Honda, Toyota, BMW, Mercedes, and universal HD Radio receivers.
                            </p>

                            {/* Brand Filters */}
                            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                                <Button
                                    variant={selectedFilter === "all" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedFilter("all")}
                                    className="font-black text-xs uppercase tracking-wider rounded-full px-5 cursor-pointer"
                                >
                                    All Brands
                                </Button>
                                <Button
                                    variant={selectedFilter === "honda" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedFilter("honda")}
                                    className="font-black text-xs uppercase tracking-wider rounded-full px-5 cursor-pointer"
                                >
                                    Honda & Acura
                                </Button>
                                <Button
                                    variant={selectedFilter === "toyota" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedFilter("toyota")}
                                    className="font-black text-xs uppercase tracking-wider rounded-full px-5 cursor-pointer"
                                >
                                    Toyota & Lexus
                                </Button>
                                <Button
                                    variant={selectedFilter === "bmw" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedFilter("bmw")}
                                    className="font-black text-xs uppercase tracking-wider rounded-full px-5 cursor-pointer"
                                >
                                    BMW & Luxury
                                </Button>
                                <Button
                                    variant={selectedFilter === "general" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedFilter("general")}
                                    className="font-black text-xs uppercase tracking-wider rounded-full px-5 cursor-pointer"
                                >
                                    General HD Setup
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-16">
                            {filteredCategories.map((cat) => (
                                <div key={cat.id} id={cat.id} className="bg-card border border-border/70 rounded-3xl p-6 md:p-8 shadow-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-border/60 pb-4">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${cat.badgeColor}`}>
                                                    {cat.badge}
                                                </span>
                                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic">{cat.brand}</h3>
                                            </div>
                                            <p className="text-xs text-muted-foreground font-medium mt-2 max-w-3xl">{cat.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                        {cat.videos.map((video) => (
                                            <div key={video.id} className="group bg-muted/40 border border-border rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col justify-between">
                                                <div>
                                                    <div
                                                        className="relative aspect-video bg-black cursor-pointer overflow-hidden"
                                                        onClick={() => setActiveVideo(video.id)}
                                                    >
                                                        {activeVideo === video.id ? (
                                                            <iframe
                                                                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                                                                title={video.title}
                                                                className="absolute inset-0 w-full h-full border-0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                allowFullScreen
                                                            ></iframe>
                                                        ) : (
                                                            <>
                                                                <img
                                                                    src={video.thumbnail}
                                                                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
                                                                    alt={video.title}
                                                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                                />
                                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                                                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                                                                        <Play className="w-6 h-6 fill-white ml-1 text-white" />
                                                                    </div>
                                                                </div>
                                                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                                                                    {video.duration}
                                                                </div>
                                                                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xs text-yellow-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border border-white/10">
                                                                    {video.carModel}
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="p-5">
                                                        <h4 className="text-base font-black uppercase tracking-tight italic leading-snug group-hover:text-primary transition-colors mb-2">
                                                            {video.title}
                                                        </h4>
                                                    </div>
                                                </div>

                                                <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-border/40 mt-auto">
                                                    <span className="text-[11px] text-muted-foreground font-semibold">
                                                        Vehicle: {video.carModel}
                                                    </span>
                                                    <a
                                                        href={`https://www.youtube.com/watch?v=${video.id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[11px] text-primary hover:underline font-black flex items-center gap-1 uppercase tracking-wider"
                                                    >
                                                        YouTube <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Online Radio Directories & Stream Links */}
                <section className="py-16 bg-zinc-950 text-white border-y border-zinc-800">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-black uppercase tracking-widest mb-3 border border-red-500/20">
                                <Globe className="w-3.5 h-3.5" /> Worldwide Online Directories
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
                                Listen via Global Radio Directories
                            </h2>
                            <p className="text-xs md:text-sm text-zinc-400 font-medium mt-3 leading-relaxed">
                                Radio Nyra is indexed on the world&apos;s leading online radio players and streaming hubs. Click any directory below to stream instantly from anywhere in the world.
                            </p>
                        </div>

                        {/* Top Featured Directories (radio.net & getmeradio.com) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {/* radio.net Card */}
                            <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-red-500/40 hover:border-red-500 p-6 sm:p-8 rounded-3xl transition-all shadow-xl group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center font-black text-white text-lg">
                                            <Radio className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black uppercase tracking-tight">radio.net</h3>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Official Search & Stream</span>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-[10px] font-black uppercase tracking-widest border border-red-500/30">
                                        Featured
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-300 font-medium mb-6 leading-relaxed">
                                    Tune into Radio Nyra live on radio.net portal and mobile apps across the United States and Europe.
                                </p>
                                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest h-12 rounded-xl cursor-pointer">
                                    <a href="http://radio.net/search?q=radionyra" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                        Listen on radio.net <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>

                            {/* getmeradio.com Card */}
                            <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-cyan-500/40 hover:border-cyan-500 p-6 sm:p-8 rounded-3xl transition-all shadow-xl group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-cyan-600 flex items-center justify-center font-black text-white text-lg">
                                            <Volume2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black uppercase tracking-tight">Get Me Radio!</h3>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Station #4514</span>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest border border-cyan-500/30">
                                        Verified
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-300 font-medium mb-6 leading-relaxed">
                                    Official verified Radio Nyra station on Get Me Radio! Compatible with web, Roku, Fire TV, and Alexa skills.
                                </p>
                                <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-black text-xs uppercase tracking-widest h-12 rounded-xl cursor-pointer">
                                    <a href="https://www.getmeradio.com/stations/radionyra-4514/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                        Listen on Get Me Radio <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* All Directory Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                            {DIRECTORY_LINKS.map((dir, i) => (
                                <a 
                                    key={i} 
                                    href={dir.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-4 bg-zinc-900/90 hover:bg-red-600 hover:text-white border border-zinc-800 hover:border-red-500 rounded-2xl text-center transition-all duration-300 font-bold text-xs tracking-wider text-zinc-300 hover:scale-105 shadow-md flex flex-col justify-between group"
                                >
                                    <div className="flex items-center justify-center gap-1.5 mb-1">
                                        <span className="truncate">{dir.name}</span>
                                        <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-white shrink-0" />
                                    </div>
                                    <span className="text-[9px] text-zinc-500 group-hover:text-white/80 uppercase font-semibold block">{dir.domain}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Voice Assistants & Smart Speakers Guide */}
                <section className="py-14 bg-card border-b border-border">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-primary block mb-2">
                            Hands-Free Listening
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic mb-8">
                            Smart Speaker Voice Commands (English)
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div className="bg-muted/40 p-6 rounded-2xl border border-border">
                                <div className="text-primary font-black text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" /> Amazon Alexa
                                </div>
                                <p className="text-xs text-foreground font-bold italic mb-1">&quot;Alexa, Play Radio Nyra on Get Me Radio&quot;</p>
                                <p className="text-[11px] text-muted-foreground">or &quot;Alexa, Play Radio Nyra Raleigh-Durham&quot;</p>
                            </div>

                            <div className="bg-muted/40 p-6 rounded-2xl border border-border">
                                <div className="text-primary font-black text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" /> Google Assistant
                                </div>
                                <p className="text-xs text-foreground font-bold italic mb-1">&quot;Hey Google, Play Radio Nyra&quot;</p>
                                <p className="text-[11px] text-muted-foreground">Streams directly via Google Home & Android devices</p>
                            </div>

                            <div className="bg-muted/40 p-6 rounded-2xl border border-border">
                                <div className="text-primary font-black text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" /> Apple Siri
                                </div>
                                <p className="text-xs text-foreground font-bold italic mb-1">&quot;Hey Siri, Play Radio Nyra&quot;</p>
                                <p className="text-[11px] text-muted-foreground">Available across Apple CarPlay, iPhone, and HomePod</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact support */}
                <section className="py-16 bg-primary/5 text-center">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">Still having trouble tuning in?</h2>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-8">
                            We can help you set up your car radio! Visit our Morrisville broadcast studio or call our engineering team.
                        </p>
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest px-10 py-6 rounded-full shadow-xl">
                            <a href="/contact">Get Tuning Support</a>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

