"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Smartphone, Play, Megaphone, Star, Radio, PlayCircle, Headphones, Music2, Youtube, ChevronDown } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { VoiceAssistants } from "@/components/voice-assistants"
import { motion, AnimatePresence } from "framer-motion"
import { PARTNERS } from "@/lib/partners"
import { ApolloTracker } from "@/components/apollo-tracker"
import { HoliEffects } from "@/components/holi-effects"
import { HoliBanner } from "@/components/holi-banner"
import { ShowsMarquee } from "@/components/shows-marquee"
import { PartnersMarquee } from "@/components/partners-marquee"
import { AdvertiserSection } from "@/components/advertiser-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { YouTubeWatchSection } from "@/components/youtube-watch-section"
import { CONTACT_INFO, LISTENING_PLATFORMS, SOCIAL_LINKS } from "@/lib/site-data"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"

export function HomeView() {
    const [loadVideo, setLoadVideo] = useState(false);
    const [showRadioDayPoster, setShowRadioDayPoster] = useState(true);

    useEffect(() => {
        setLoadVideo(true);
        // Automatically hide after tomorrow in EST (end of Aug 21 EST / Aug 22 04:00 UTC)
        const expiryDate = new Date("2026-08-22T04:00:00Z");
        if (new Date() > expiryDate) {
            setShowRadioDayPoster(false);
        }
    }, []);

    // Radio Nyra Shows Data
    const shows = [
        // Hindi shows

        { name: "Hello Vaishnavi", host: "Vaishnavi Palleda", image: "/images/hosts/hello-vaishnavi.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Zara Muskurao", host: "Aayushii Rode", image: "/images/hosts/zara-muskurao.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Triangle Tunes and Talks", host: "Monika Joshi", image: "/images/hosts/triangle-tunes.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Idhar Udhar Ki Baatein", host: "Arpit Tandon", image: "/images/hosts/idhar-udhar-ki-baatein.webp", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Dil Se Desi With Van", host: "Van", image: "/images/hosts/dil-se-desi.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Aaj Ki Shaam", host: "Jyoti", image: "/images/hosts/Aaj Ki Shaam-jyoti kae naam.png", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Bollywood Bliss", host: "Bharti Rathore", image: "/images/hosts/bollywood-bliss.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Nirvana Nights", host: "Parag", image: "/images/hosts/nirvana-nights.png", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Geet Bazaar", host: "Dr. Taj & Dr. Caldwell", image: "/images/hosts/geet-bazaar.webp", stationId: STATIONS.Hindi.id, language: "hindi" },
        // Telugu shows (as per requirement)
        { name: "Chinna Mata", host: "Priya", image: "/images/hosts/chinna-mata.webp", stationId: STATIONS.Telugu.id, language: "telugu" },
        { name: "Mana Muchatlu", host: "Kanthi", image: "/images/hosts/mana-muchatlu.webp", stationId: STATIONS.Telugu.id, language: "telugu" },
    ];
    const { playStation, currentStation } = useAudio();

    // Determine selected language from audio player
    const selectedLanguage = currentStation.id === STATIONS.Telugu.id ? "telugu" : "hindi";
    const filteredShows = shows.filter((show) => show.language === selectedLanguage);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
            <Navigation />
            <ApolloTracker />
            <FrequencyBar />

            <main>
                <HoliEffects />
                {/* HERO SECTION */}
                <section className="relative h-auto min-h-[45vh] w-full overflow-hidden flex items-center justify-center bg-black py-8 md:py-10">
                    <div className="absolute inset-0 z-0 opacity-60">
                        {!loadVideo ? (
                            <img
                                src="/radio-studio-modern.webp"
                                alt="Modern broadcast studio"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                poster="/radio-studio-modern.webp"
                                preload="none"
                            >
                                <source src="/home-page-video.mp4" type="video/mp4" />
                            </video>
                        )}
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    <div className="relative z-20 container mx-auto px-4 text-center">
                        {/* Added Contact Info */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-5 text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm">
                            <a href={CONTACT_INFO.emailHref} className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span> {CONTACT_INFO.email}
                            </a>
                            <a href={CONTACT_INFO.phoneHref} className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="hidden md:inline text-primary">|</span> {CONTACT_INFO.phone} (Call Only)
                            </a>
                            <a href={CONTACT_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-2">
                                <span className="hidden md:inline text-primary">|</span> WhatsApp: {CONTACT_INFO.phone}
                            </a>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 uppercase leading-[1.1] md:leading-[0.95] drop-shadow-2xl italic">
                            <span className="text-white block">The Indian Subcontinent</span>
                            <span className="text-primary block mt-1 md:mt-2">Community Media Network In USA</span>
                        </h1>
                        <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-6 font-medium">
                            Wherever our listeners go, Radio Nyra goes with them. Listen in your car, at work, on your phone, on the website, on Alexa, and across America.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-6">
                            <Button onClick={() => playStation(STATIONS.Hindi.id)} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-none font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm cursor-pointer">Listen Live</Button>
                            <Button asChild className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-none font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm cursor-pointer">
                                <Link href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" target="_blank">Download App</Link>
                            </Button>
                            <Button asChild className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white rounded-none font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm cursor-pointer">
                                <Link href={OFFICIAL_YOUTUBE_CHANNEL.subscribeUrl} target="_blank" className="inline-flex items-center justify-center gap-2">
                                    <Youtube className="w-4 h-4 fill-white" /> Subscribe on YouTube
                                </Link>
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 rounded-none border-2 border-white font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm cursor-pointer">
                                        Other Stations <ChevronDown className="ml-2 w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-black/90 text-white border-white/20">
                                    {Object.entries(STATIONS).filter(([key]) => key !== "Hindi" && key !== "Telugu").map(([key, station]) => (
                                        <DropdownMenuItem key={key} onClick={() => playStation(station.id)} className="cursor-pointer hover:bg-primary/20 hover:text-white font-bold uppercase text-xs tracking-widest">
                                            {station.name}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Button asChild className="hidden md:flex bg-white text-black hover:bg-gray-100 rounded-none border-2 border-white font-bold uppercase tracking-widest px-6 py-5 text-xs sm:text-sm cursor-pointer">
                                <Link href="/advertise">Advertise</Link>
                            </Button>
                            <Button asChild className="hidden md:flex bg-white text-black hover:bg-gray-100 rounded-none border-2 border-white font-bold uppercase tracking-widest px-6 py-5 text-xs sm:text-sm cursor-pointer">
                                <Link href="/contact">Partner With Us</Link>
                            </Button>
                        </div>

                        <div className="mt-6">
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-3 drop-shadow-sm">Also Available on Digital Platforms</p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <VoiceAssistants />

                                {/* Mobile Store Icons Moved Here */}
                                <div className="flex items-center gap-4 py-2">
                                    <Link
                                        href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980"
                                        target="_blank"
                                        className="bg-white p-2 rounded-full h-12 w-12 flex items-center justify-center hover:scale-110 transition-all shadow-xl border-2 border-white/20"
                                        title="Download on App Store"
                                    >
                                        <img src="/apple-icon.webp" alt="Download on the App Store" className="w-7 h-7 object-contain" />
                                    </Link>
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app"
                                        target="_blank"
                                        className="bg-white p-2 rounded-full h-12 w-12 flex items-center justify-center hover:scale-110 transition-all shadow-xl border-2 border-white/20"
                                        title="Get it on Google Play"
                                    >
                                        <img src="/android-icon.webp" alt="Get it on Google Play" className="w-7 h-7 object-contain" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2ND SECTION: NATIONAL RADIO DAY POSTER */}
                {showRadioDayPoster && (
                    <section className="w-full bg-zinc-950 py-4 sm:py-8 border-b border-border/40 overflow-hidden">
                        <div className="container mx-auto px-4 max-w-5xl">
                            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-zinc-800 bg-black/40">
                                <img
                                    src="/national-radio-day.jpg"
                                    alt="Happy National Radio Day - Radio Nyra USA"
                                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* STATS */}
                <section className="py-8 bg-background border-b border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center justify-center items-start">
                            {[
                                { label: "Weekly Listeners", end: 100, suffix: "K+", icon: Headphones },
                                { label: "Email Subscribers", end: 50, suffix: "K+", icon: Megaphone },
                                { label: "WhatsApp Members", end: 100, suffix: "K+", icon: Smartphone },
                                { label: "Monthly IG Reach", end: 500, suffix: "K+", icon: Users },
                                { label: "Display Impressions", end: 216, suffix: "K+", icon: Star },
                                { label: "Years On Air", end: 12, suffix: "", icon: Radio },
                                { label: "Media Channels", end: 8, suffix: "+", icon: Play },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                        <stat.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-black text-foreground tracking-tighter mb-1">
                                        <CountUp end={stat.end} suffix={stat.suffix} duration={2500} />
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* YOUTUBE STATISTICS & ANALYTICS SECTION */}
                <section className="py-8 bg-gradient-to-r from-red-950 via-zinc-950 to-black text-white border-b border-red-900/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-2xl mx-auto mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-widest mb-2">
                                <Youtube className="w-4 h-4 fill-red-500 text-red-500" /> YouTube Channel Analytics
                            </span>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white">
                                @RadioNyraUSA on YouTube
                            </h2>
                            <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                                Streaming Indian Subcontinent content since February 2021
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                            <div className="bg-zinc-900/90 border border-red-500/20 p-4 sm:p-5 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                    <Youtube className="w-5 h-5 fill-red-500" />
                                </div>
                                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">
                                    <CountUp end={1.01} decimals={2} suffix="K" duration={2500} />
                                </div>
                                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                                    Subscribers
                                </div>
                            </div>
                            <div className="bg-zinc-900/90 border border-red-500/20 p-4 sm:p-5 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 text-red-500" />
                                </div>
                                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">
                                    <CountUp end={270} suffix="+" duration={2500} />
                                </div>
                                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                                    Videos Published
                                </div>
                            </div>
                            <div className="bg-zinc-900/90 border border-red-500/20 p-4 sm:p-5 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                    <PlayCircle className="w-5 h-5 text-red-500" />
                                </div>
                                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">
                                    <CountUp end={151.3} decimals={1} suffix="K" duration={2500} />
                                </div>
                                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                                    Total Views
                                </div>
                            </div>
                            <div className="bg-zinc-900/90 border border-red-500/20 p-4 sm:p-5 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                    <Star className="w-5 h-5 text-red-500" />
                                </div>
                                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">
                                    <CountUp end={560} suffix="" duration={2500} />
                                </div>
                                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                                    Avg Views / Video
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOCIAL PROOF & TESTIMONIALS */}
                <section className="py-10 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8 flex flex-col items-center">
                            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-green-200 dark:border-green-800">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Verified Audience Data
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Proven Reach & Engagement</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                            <div className="bg-card p-6 border border-border shadow-sm rounded-none text-center">
                                <h3 className="text-lg font-black uppercase tracking-tighter text-primary mb-3">Instagram</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-2xl font-black"><CountUp end={10400} duration={2000} suffix="+" /></div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">Followers</div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-black"><CountUp end={8.4} decimals={1} duration={2000} suffix="%" /></div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">Engagement Rate</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card p-6 border border-border shadow-sm rounded-none text-center">
                                <h3 className="text-lg font-black uppercase tracking-tighter text-primary mb-3">Email</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-2xl font-black"><CountUp end={60000} duration={2000} suffix="+" /></div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">Subscribers</div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-black"><CountUp end={34.2} decimals={1} duration={2000} suffix="%" /></div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">Open Rate</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card p-6 border border-border shadow-sm rounded-none text-center">
                                <h3 className="text-lg font-black uppercase tracking-tighter text-primary mb-3">WhatsApp</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-2xl font-black"><CountUp end={12000} duration={2000} suffix="+" /></div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">Members</div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-black"><CountUp end={78} duration={2000} suffix="%" /></div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">Open Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Testimonials</h2>
                        </div>

                        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-6 md:p-8 text-center rounded-none shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 text-[100px] font-serif leading-none opacity-10 -translate-x-4 -translate-y-4">"</div>
                            <div className="relative z-10">
                                <div className="flex justify-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-xl md:text-2xl font-bold mb-6 leading-snug italic">
                                    "This platform has helped us reach the right audience and grow our brand in ways we never expected."
                                </blockquote>
                                <div className="flex flex-col items-center">
                                    <div className="font-black uppercase tracking-widest text-base">Mihir Chakraborty</div>
                                    <div className="text-xs font-bold opacity-80 uppercase tracking-widest mt-0.5">CEO, MC Construction Co.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LISTEN EVERYWHERE */}
                <section className="py-10 bg-background border-b border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-8">
                            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-2">The Indian Subcontinent Community Media Network</p>
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">
                                Wherever Our Listeners Go, Radio Nyra Goes With Them.
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                            {LISTENING_PLATFORMS.map((platform) => (
                                <div key={platform.label} className="bg-card border border-border p-4 text-center hover:border-primary transition-colors">
                                    <platform.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                                    <h3 className="text-xs font-black uppercase tracking-tight mb-1">{platform.label}</h3>
                                    <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">{platform.copy}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <YouTubeWatchSection />

                <section id="shows" className="py-8 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-primary italic leading-none">
                                    Our Shows
                                </h2>
                                <p className="mt-2 text-muted-foreground font-medium uppercase tracking-widest text-xs sm:text-sm max-w-xl">
                                    Explore our lineup of live shows hosted by talented voices from the community.
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="text-foreground hover:bg-primary hover:text-white font-bold uppercase tracking-widest rounded-none border-2 border-foreground hover:border-primary transition-all h-10 px-6 text-xs"
                                asChild
                            >
                                <Link href="#shows">View All Shows</Link>
                            </Button>
                        </div>

                        <ShowsMarquee shows={filteredShows} />
                    </div>
                </section>

                <AdvertiserSection />

                {/* OUR PARTNERS */}
                <section className="py-8 bg-background border-t border-border/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-6 border-l-4 border-primary pl-4 text-left">Our Partners</h2>

                        <PartnersMarquee />
                    </div>
                </section>

                <NewsletterSection />

            </main >

            <Footer />
        </div >
    )
}
