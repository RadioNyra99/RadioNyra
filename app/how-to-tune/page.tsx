"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Play, Car, Info, ChevronRight } from "lucide-react"
import { useState } from "react"

const categories = [
    {
        id: "toyota",
        name: "Toyota",
        videos: [
            {
                title: "How to Tune HD Radio in Toyota Entune 3.0",
                id: "B8_oP2B7L3k",
                thumbnail: "https://img.youtube.com/vi/B8_oP2B7L3k/maxresdefault.jpg"
            }
        ]
    },
    {
        id: "honda",
        name: "Honda",
        videos: [
            {
                title: "Honda HD Radio Guide",
                id: "LIDfHw9D_6Y",
                thumbnail: "https://img.youtube.com/vi/LIDfHw9D_6Y/maxresdefault.jpg"
            }
        ]
    },
    {
        id: "ford",
        name: "Ford",
        videos: [
            {
                title: "Sync 3 HD Radio Tutorial",
                id: "7vW5z-L6z-0",
                thumbnail: "https://img.youtube.com/vi/7vW5z-L6z-0/maxresdefault.jpg"
            }
        ]
    },
    {
        id: "bmw",
        name: "BMW",
        videos: [
            {
                title: "BMW iDrive HD Radio Setup",
                id: "r-x49x5M4xE",
                thumbnail: "https://img.youtube.com/vi/r-x49x5M4xE/maxresdefault.jpg"
            }
        ]
    }
];

export default function HowToTunePage() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white pb-20">
            <Navigation />

            <main>
                {/* Hero section */}
                <section className="py-20 bg-primary text-white overflow-hidden relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 italic leading-none">
                                    HD Radio <br /> <span className="text-background">Tutorials</span>
                                </h1>
                                <p className="text-xl font-bold uppercase tracking-[0.2em] opacity-90 max-w-xl">
                                    Learn how to tune into Radio Nyra HD4 (Hindi) & HD3 (Telugu) in your car.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 aspect-video bg-black/20 rounded-sm border-4 border-white/20 flex items-center justify-center relative overflow-hidden group">
                                <Car className="w-32 h-32 text-white/10 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center animate-pulse">
                                        <Play className="w-8 h-8 fill-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Instructions info */}
                <section className="py-12 bg-muted/30 border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-card border border-primary/20 p-8 rounded-sm shadow-lg -mt-10 relative z-20">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0">
                                <Info className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black uppercase tracking-tighter italic mb-2">General Tuning Tip</h2>
                                <p className="text-muted-foreground font-bold italic leading-relaxed">
                                    Tune your radio to <span className="text-primary">99.9 FM</span>. Wait for the HD logo to appear. Once it's locked, use your tuning knob or seekers to find <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">HD4 for Hindi</span> or <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">HD3 for Telugu</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tutorial Categories */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="space-y-24">
                            {categories.map((cat) => (
                                <div key={cat.id} id={cat.id}>
                                    <div className="flex items-center gap-4 mb-12 border-b-4 border-primary pb-4 w-fit">
                                        <h3 className="text-4xl font-black uppercase tracking-tighter italic">{cat.name}</h3>
                                        <ChevronRight className="w-8 h-8 text-primary" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {cat.videos.map((video) => (
                                            <div key={video.id} className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-all shadow-sm">
                                                <div
                                                    className="relative aspect-video bg-black cursor-pointer overflow-hidden"
                                                    onClick={() => setActiveVideo(video.id)}
                                                >
                                                    {activeVideo === video.id ? (
                                                        <iframe
                                                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                                            className="absolute inset-0 w-full h-full"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    ) : (
                                                        <>
                                                            <img
                                                                src={video.thumbnail}
                                                                alt={video.title}
                                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                                    <Play className="w-6 h-6 fill-white ml-1" />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="p-6">
                                                    <h4 className="text-lg font-black uppercase tracking-tight italic leading-tight group-hover:text-primary transition-colors">
                                                        {video.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global Radio Directories */}
                <section className="py-16 bg-card border-t border-b border-border">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">Listen via Global Radio Directories</h2>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-10">We are listed on the world's most trusted online radio player directories. Tune in from anywhere.</p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                { name: "radio.net", link: "https://www.radio.net" },
                                { name: "getmeradio.com", link: "https://www.getmeradio.com/stations/radionyra-4514/" },
                                { name: "thenonstopradio.com", link: "https://thenonstopradio.com/radio/radio_nyra_us" },
                                { name: "radioandpodcast.com", link: "https://radioandpodcast.com/radio/united-states/radio_nyra_us" },
                                { name: "zeno.fm", link: "https://zeno.fm" },
                                { name: "liveonlineradio.net", link: "https://liveonlineradio.net" },
                                { name: "radioinsight.com", link: "https://radioinsight.com" },
                                { name: "globalradioplayer.com", link: "https://globalradioplayer.com" },
                                { name: "openradio.app", link: "https://openradio.app" },
                                { name: "radioindia.in", link: "https://radioindia.in" },
                                { name: "365liveradio.com", link: "https://365liveradio.com" },
                                { name: "fmradios.in", link: "https://fmradios.in" },
                                { name: "radiostationworld.com", link: "http://radiostationworld.com" },
                                { name: "radio.pl", link: "https://www.radio.pl" }
                            ].map((dir, i) => (
                                <a 
                                    key={i} 
                                    href={dir.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-4 bg-muted hover:bg-primary hover:text-white border border-border text-center transition-all duration-300 font-semibold text-xs tracking-wider text-muted-foreground hover:scale-105"
                                >
                                    {dir.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact support */}
                <section className="py-20 bg-primary/5 text-center">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">Still having trouble tuning in?</h2>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-sm mb-10">We can help you set up your car radio! Visit our studio or call us.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-primary text-white font-black uppercase tracking-widest px-12 py-5 shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                        >
                            Get Support
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
