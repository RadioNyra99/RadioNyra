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
import { getStationsList, NETWORK_STATS, STATIONS } from "@/lib/stations"
import { VoiceAssistants } from "@/components/voice-assistants"
import { motion, AnimatePresence } from "framer-motion"
import { PARTNERS } from "@/lib/partners"
import { ApolloTracker } from "@/components/apollo-tracker"
import { HoliEffects } from "@/components/holi-effects"
import { HoliBanner } from "@/components/holi-banner"
import { ShowsMarquee } from "@/components/shows-marquee"
import { PartnersMarquee } from "@/components/partners-marquee"
import { TRENDING_SONGS } from "@/lib/trending-songs"
import { AdvertiserSection } from "@/components/advertiser-section"
import { CommunitySection } from "@/components/community-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { YouTubeWatchSection } from "@/components/youtube-watch-section"
import { CONTACT_INFO, LISTENING_PLATFORMS, SOCIAL_LINKS } from "@/lib/site-data"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"

export function HomeView() {
    const [loadVideo, setLoadVideo] = useState(false);
    useEffect(() => {
        setLoadVideo(true);
    }, []);

    // Radio Nyra Shows Data
    const shows = [
        // Hindi shows

        { name: "Hello Vaishnavi", host: "Vaishnavi Palleda", image: "/images/hosts/hello-vaishnavi.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Zara Muskurao", host: "Aayushii Rode", image: "/images/hosts/zara-muskurao.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Triangle Tunes and Talks", host: "Monika Joshi", image: "/images/hosts/triangle-tunes.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Idhar Udhar Ki Baatein", host: "Arpit Tandon", image: "/images/hosts/idhar-udhar-ki-baatein.webp", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.webp", stationId: STATIONS.Hindi.id, language: "hindi" },
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
    const stationList = getStationsList();
    const featuredStations = stationList.slice(0, 8);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Top Marketing Announcement Bar */}
            <div className="bg-gradient-to-r from-red-600 via-orange-500 to-primary text-white text-xs font-black uppercase tracking-widest py-3.5 px-4 text-center relative z-50 flex flex-col sm:flex-row items-center justify-center gap-2 shadow-inner">
                <span>Grow Your Business! Reach 250,000+ Indian Subcontinent listeners across the US.</span>
                <Link href="/advertise" className="underline hover:text-white/90 transition-colors inline-flex items-center gap-1 font-extrabold cursor-pointer">
                    Get Started Now &rarr;
                </Link>
            </div>
            <Navigation />
            <ApolloTracker />
            <FrequencyBar />

            <main>
                <HoliEffects />
                {/* HERO SECTION */}
                <section className="relative h-auto min-h-[50vh] w-full overflow-hidden flex items-center justify-center bg-black py-12">
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
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 text-white/90 font-bold uppercase tracking-widest text-sm md:text-base">
                            <a href={CONTACT_INFO.emailHref} className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span> {CONTACT_INFO.email}
                            </a>
                            <a href={CONTACT_INFO.phoneHref} className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="hidden md:inline text-primary">|</span> {CONTACT_INFO.phone} (Call Only)
                            </a>
                            <a href={CONTACT_INFO.whatsappHref} target="_blank" className="hover:text-[#25D366] transition-colors flex items-center gap-2">
                                <span className="hidden md:inline text-primary">|</span> WhatsApp: {CONTACT_INFO.phone}
                            </a>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-4 uppercase leading-[1.1] md:leading-[0.9] drop-shadow-2xl italic">
                            <span className="text-white block">The Indian Subcontinent</span>
                            <span className="text-primary block mt-1 md:mt-2">Community Media Network</span>
                        </h1>
                        <p className="text-white/90 text-sm md:text-lg max-w-3xl mx-auto mb-8 font-medium">
                            Wherever our listeners go, Radio Nyra goes with them. Listen in your car, at work, on your phone, on the website, on Alexa, and across America.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <Button onClick={() => playStation(STATIONS.Hindi.id)} className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold uppercase tracking-widest px-8 py-6 text-sm">Listen Live</Button>
                            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-none font-bold uppercase tracking-widest px-8 py-6 text-sm">
                                <Link href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" target="_blank">Download App</Link>
                            </Button>
                            <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-none font-bold uppercase tracking-widest px-8 py-6 text-sm">
                                <Link href={OFFICIAL_YOUTUBE_CHANNEL.subscribeUrl} target="_blank" className="inline-flex items-center gap-2">
                                    <Youtube className="w-4 h-4 fill-white" /> Subscribe on YouTube
                                </Link>
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="bg-white text-black hover:bg-gray-100 rounded-none border-2 border-white font-bold uppercase tracking-widest px-8 py-6 text-sm">
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

                            <Button asChild className="hidden md:flex bg-white text-black hover:bg-gray-100 rounded-none border-2 border-white font-bold uppercase tracking-widest px-8 py-6 text-sm">
                                <Link href="/advertise">Advertise</Link>
                            </Button>
                            <Button asChild className="hidden md:flex bg-white text-black hover:bg-gray-100 rounded-none border-2 border-white font-bold uppercase tracking-widest px-8 py-6 text-sm">
                                <Link href="/contact">Partner With Us</Link>
                            </Button>
                        </div>




                        <div className="mt-12">
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-4 drop-shadow-sm">Also Available on Digital Platforms</p>
                            <div className="flex flex-wrap items-center justify-center gap-6">
                                <VoiceAssistants />

                                {/* Mobile Store Icons Moved Here */}
                                <div className="flex items-center gap-6 py-4">
                                    <Link
                                        href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980"
                                        target="_blank"
                                        className="bg-white p-2 rounded-full h-16 w-16 flex items-center justify-center hover:scale-110 transition-all shadow-xl border-2 border-white/20"
                                        title="Download on App Store"
                                    >
                                        <img src="/apple-icon.webp" alt="Download on the App Store" className="w-9 h-9 object-contain" />
                                    </Link>
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app"
                                        target="_blank"
                                        className="bg-white p-2 rounded-full h-16 w-16 flex items-center justify-center hover:scale-110 transition-all shadow-xl border-2 border-white/20"
                                        title="Get it on Google Play"
                                    >
                                        <img src="/android-icon.webp" alt="Get it on Google Play" className="w-9 h-9 object-contain" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="py-12 bg-background border-b border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center justify-center items-start">
                            {[
                                { label: "Weekly Listeners", end: 250, suffix: "K+", icon: Headphones },
                                { label: "Email Subscribers", end: 50, suffix: "K+", icon: Megaphone },
                                { label: "WhatsApp Members", end: 100, suffix: "K+", icon: Smartphone },
                                { label: "Monthly IG Reach", end: 500, suffix: "K+", icon: Users },
                                { label: "Display Impressions", end: 216, suffix: "K+", icon: Star },
                                { label: "Years On Air", end: 12, suffix: "", icon: Radio },
                                { label: "Media Channels", end: 8, suffix: "+", icon: Play },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <stat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-black text-foreground tracking-tighter mb-2">
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
                <section className="py-12 bg-gradient-to-r from-red-950 via-zinc-950 to-black text-white border-b border-red-900/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-widest mb-2">
                                <Youtube className="w-4 h-4 fill-red-500 text-red-500" /> YouTube Channel Analytics
                            </span>
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-white">
                                @RadioNyraUSA on YouTube
                            </h2>
                            <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-2">
                                Streaming Indian Subcontinent content since February 2021
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                            <div className="bg-zinc-900/90 border border-red-500/20 p-5 sm:p-6 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <Youtube className="w-6 h-6 fill-red-500" />
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">
                                    <CountUp end={1.01} decimals={2} suffix="K" duration={2500} />
                                </div>
                                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                                    Subscribers
                                </div>
                            </div>
                            <div className="bg-zinc-900/90 border border-red-500/20 p-5 sm:p-6 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">
                                    <CountUp end={270} suffix="+" duration={2500} />
                                </div>
                                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                                    Videos Published
                                </div>
                            </div>
                            <div className="bg-zinc-900/90 border border-red-500/20 p-5 sm:p-6 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <PlayCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">
                                    <CountUp end={151.3} decimals={1} suffix="K" duration={2500} />
                                </div>
                                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                                    Total Views
                                </div>
                            </div>
                            <div className="bg-zinc-900/90 border border-red-500/20 p-5 sm:p-6 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <Star className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">
                                    <CountUp end={560} suffix="" duration={2500} />
                                </div>
                                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                                    Avg Views / Video
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NETWORK FOOTPRINT */}
                <section className="py-16 bg-muted/20 border-b border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-4">About Radio Nyra</p>
                                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none mb-6">
                                    America's Leading Indian Radio Network
                                </h2>
                                <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed mb-8">
                                    Radio Nyra is America's leading Indian radio network connecting communities through music, culture, entertainment, podcasts, news, and live events. We deliver premium programming while helping businesses connect with one of North America's most engaged multicultural audiences.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-card border border-border p-6 text-center">
                                        <div className="text-4xl font-black text-primary italic">{NETWORK_STATS.stations}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-2">Stations</div>
                                    </div>
                                    <div className="bg-card border border-border p-6 text-center">
                                        <div className="text-4xl font-black text-primary italic">{NETWORK_STATS.cities}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-2">Cities</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card border border-border p-6 md:p-8">
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <h2 className="text-2xl font-black uppercase tracking-tight italic">All Cities & Frequencies</h2>
                                    <Button variant="outline" className="rounded-none border-2 border-foreground text-xs font-black uppercase tracking-widest" asChild>
                                        <Link href="/fm-stations">View All</Link>
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {featuredStations.map((station) => (
                                        <button
                                            key={station.id}
                                            onClick={() => playStation(station.id)}
                                            className="text-left border border-border bg-background hover:border-primary hover:bg-primary/5 transition-colors p-4"
                                        >
                                            <span className="block text-[10px] font-black uppercase tracking-widest text-primary">{station.city}</span>
                                            <span className="block text-sm font-black uppercase tracking-tight mt-1">{station.frequency}</span>
                                            <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{station.language}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LISTEN EVERYWHERE */}
                <section className="py-16 bg-background border-b border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-4">The Indian Subcontinent Community Media Network</p>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
                                Wherever Our Listeners Go, Radio Nyra Goes With Them.
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {LISTENING_PLATFORMS.map((platform) => (
                                <div key={platform.label} className="bg-card border border-border p-6 text-center hover:border-primary transition-colors">
                                    <platform.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="text-sm font-black uppercase tracking-tight mb-2">{platform.label}</h3>
                                    <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">{platform.copy}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex flex-wrap justify-center gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    className="h-11 w-11 border border-border bg-card hover:border-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                                    title={social.label}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOCIAL PROOF & TESTIMONIALS */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 flex flex-col items-center">
                            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-green-200 dark:border-green-800">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Verified Audience Data
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">Proven Reach & Engagement</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                            <div className="bg-card p-8 border border-border shadow-sm rounded-none text-center">
                                <h3 className="text-xl font-black uppercase tracking-tighter text-primary mb-4">Instagram</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-3xl font-black"><CountUp end={10400} duration={2000} suffix="+" /></div>
                                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">Followers</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black"><CountUp end={8.4} decimals={1} duration={2000} suffix="%" /></div>
                                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">Engagement Rate</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card p-8 border border-border shadow-sm rounded-none text-center">
                                <h3 className="text-xl font-black uppercase tracking-tighter text-primary mb-4">Email</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-3xl font-black"><CountUp end={60000} duration={2000} suffix="+" /></div>
                                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">Subscribers</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black"><CountUp end={34.2} decimals={1} duration={2000} suffix="%" /></div>
                                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">Open Rate</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card p-8 border border-border shadow-sm rounded-none text-center">
                                <h3 className="text-xl font-black uppercase tracking-tighter text-primary mb-4">WhatsApp</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-3xl font-black"><CountUp end={12000} duration={2000} suffix="+" /></div>
                                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">Members</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black"><CountUp end={78} duration={2000} suffix="%" /></div>
                                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">Open Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-8 md:p-12 text-center rounded-none shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 text-[120px] font-serif leading-none opacity-10 -translate-x-4 -translate-y-4">"</div>
                            <div className="relative z-10">
                                <div className="flex justify-center gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-6 h-6 fill-current text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-2xl md:text-3xl font-bold mb-8 leading-snug italic">
                                    "This platform has helped us reach the right audience and grow our brand in ways we never expected."
                                </blockquote>
                                <div className="flex flex-col items-center">
                                    <div className="font-black uppercase tracking-widest text-lg">Mihir Chakraborty</div>
                                    <div className="text-sm font-bold opacity-80 uppercase tracking-widest mt-1">CEO, MC Construction Co.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LIVE NOW AND TRENDING SECTION */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* LIVE NOW */}
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-primary mb-6 flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                                    Live Now On Air
                                </h2>
                                <div className="bg-muted border border-border/50 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors h-full flex flex-col justify-center items-center text-center">
                                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary shadow-xl relative group-hover:scale-105 transition-transform cursor-pointer" onClick={() => { playStation(STATIONS.Hindi.id) }}>
                                        <img src="/images/radio-nyra-logo.jpg" alt="Live hit station" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <PlayCircle className="text-white w-12 h-12" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Live Stream</h3>
                                    <p className="text-muted-foreground mb-6 max-w-sm mx-auto">The biggest Bollywood hits, live talk shows, and local news — all day, every day.</p>
                                    <Button size="lg" className="rounded-full px-8 font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white" onClick={() => { playStation(STATIONS.Hindi.id) }}>
                                        <Headphones className="w-5 h-5 mr-2" /> Listen Live
                                    </Button>

                                    {/* Animated sound bars */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20 flex items-end justify-center gap-1 opacity-50">
                                        <div className="w-2 h-4 bg-primary rounded-t animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                        <div className="w-2 h-8 bg-primary rounded-t animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                        <div className="w-2 h-6 bg-primary rounded-t animate-bounce" style={{ animationDelay: "300ms" }}></div>
                                        <div className="w-2 h-10 bg-primary rounded-t animate-bounce" style={{ animationDelay: "450ms" }}></div>
                                        <div className="w-2 h-5 bg-primary rounded-t animate-bounce" style={{ animationDelay: "600ms" }}></div>
                                        <div className="w-2 h-7 bg-primary rounded-t animate-bounce" style={{ animationDelay: "750ms" }}></div>
                                        <div className="w-2 h-3 bg-primary rounded-t animate-bounce" style={{ animationDelay: "900ms" }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* TRENDING SONGS */}
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-primary mb-6 flex items-center gap-3">
                                    <Music2 className="w-6 h-6" />
                                    Trending Songs Today
                                </h2>
                                <div className="space-y-4">
                                    {TRENDING_SONGS.map((song, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-card border border-border/50 p-4 rounded-2xl hover:bg-muted/50 transition-colors group cursor-pointer" onClick={() => { playStation(STATIONS.Hindi.id) }}>
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                {i + 1}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-foreground truncate group-hover:text-primary transition-colors">{song.title}</h4>
                                                <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                                            </div>
                                            <div className="hidden sm:block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full shrink-0">
                                                {song.hits} Plays
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <YouTubeWatchSection />

                <section id="shows" className="py-12 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary italic leading-none">
                                    Our Shows
                                </h2>
                                <p className="mt-4 text-muted-foreground font-medium uppercase tracking-widest text-sm max-w-xl">
                                    Explore our lineup of live shows hosted by talented voices from the community.
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="text-foreground hover:bg-primary hover:text-white font-bold uppercase tracking-widest rounded-none border-2 border-foreground hover:border-primary transition-all h-12 px-8"
                                asChild
                            >
                                <Link href="#shows">View All Shows</Link>
                            </Button>
                        </div>

                        <ShowsMarquee shows={filteredShows} />
                    </div>
                </section>

                <CommunitySection />

                <AdvertiserSection />

                {/* OUR PARTNERS */}
                <section className="py-12 bg-background border-t border-border/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 md:mb-12 border-l-4 border-primary pl-4 text-left">Our Partners</h2>

                        <PartnersMarquee />
                    </div>
                </section>

                <NewsletterSection />



            </main >

            <Footer />
        </div >
    )
}
