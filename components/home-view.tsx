"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Smartphone, Apple, Play, Megaphone, Star, Radio, PlayCircle, Headphones, Music2 } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"

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

export function HomeView() {

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
        { name: "Nirvana Nights", host: "Shivani", image: "/images/hosts/nirvana-nights.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
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
                <section className="relative h-auto min-h-[50vh] w-full overflow-hidden flex items-center justify-center bg-black py-12">
                    <div className="absolute inset-0 z-0 opacity-60">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            poster="/radio-studio-modern.webp"
                        >
                            <source src="/home%20page%20video.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    <div className="relative z-20 container mx-auto px-4 text-center">
                        {/* Added Contact Info */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 text-white/90 font-bold uppercase tracking-widest text-sm md:text-base">
                            <a href="mailto:info@radionyra.com" className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span> info@radionyra.com
                            </a>
                            <a href="tel:+19199998595" className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="hidden md:inline text-primary">|</span> +1 (919) 999 - 8595 (Call Only)
                            </a>
                            <a href="https://wa.me/19192944800" target="_blank" className="hover:text-[#25D366] transition-colors flex items-center gap-2">
                                <span className="hidden md:inline text-primary">|</span> WhatsApp: +1 (919) 294 - 4800
                            </a>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 md:mb-8 uppercase leading-[1.1] md:leading-[0.9] drop-shadow-2xl italic">
                            <span className="text-white block">Indian Radio Live</span>
                            <span className="text-primary block mt-1 md:mt-2">in USA</span>
                        </h1>




                        <div className="mt-12">
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-4 drop-shadow-sm">Also Available on Digital Platforms</p>
                            <div className="flex flex-wrap items-center justify-center gap-6">
                                <VoiceAssistants />

                                {/* Mobile Store Icons Moved Here */}
                                <div className="flex items-center gap-6 py-4">
                                    <Link
                                        href="https://apps.apple.com/in/app/radio-nyra-raleigh-durham/id6469009980"
                                        target="_blank"
                                        className="bg-white p-2 rounded-full h-16 w-16 flex items-center justify-center hover:scale-110 transition-all shadow-xl border-2 border-white/20"
                                        title="Download on App Store"
                                    >
                                        <img src="/apple-icon.webp" alt="App Store" className="w-9 h-9 object-contain" />
                                    </Link>
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app"
                                        target="_blank"
                                        className="bg-white p-2 rounded-full h-16 w-16 flex items-center justify-center hover:scale-110 transition-all shadow-xl border-2 border-white/20"
                                        title="Get it on Google Play"
                                    >
                                        <img src="/android-icon.webp" alt="Google Play" className="w-9 h-9 object-contain" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="py-6 bg-background border-b border-border/50">
                    <div className="container mx-auto px-2">
                        <div className="grid grid-cols-4 gap-2 md:gap-4 text-center justify-center items-center overflow-hidden">
                            {[
                                { label: "Active listeners per week", end: 100, suffix: "K+", icon: Users },
                                { label: "Broadcasting", end: 24, suffix: "/7", icon: Radio },
                                { label: "Monthly Newsletter", end: 60, suffix: "K+", icon: Megaphone },
                                { label: "Social Followers", end: 20, suffix: "K+", icon: Star },
                            ].map((stat, i) => (
                                <div key={i} className="flex-1 p-1 md:p-2">
                                    <div className="flex justify-center">
                                        <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                                    </div>
                                    <div className="text-xl sm:text-2xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
                                        <CountUp end={stat.end} suffix={stat.suffix} duration={2500} />
                                    </div>
                                    <div className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
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
                                        <img src="/images/radio-nyra-logo.jpg" alt="Radio Nyra Hit Station" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <PlayCircle className="text-white w-12 h-12" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Radio Nyra Stream</h3>
                                    <p className="text-muted-foreground mb-6 max-w-sm mx-auto">Broadcasting the biggest Bollywood hits, live talk shows, and local news 24/7.</p>
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
                                    {[
                                        { title: "Chaleya (Jawan)", artist: "Arijit Singh, Shilpa Rao", hits: "2.4M" },
                                        { title: "Heeriye", artist: "Jasleen Royal, Arijit Singh", hits: "1.8M" },
                                        { title: "Tum Kya Mile (Rocky Aur Rani)", artist: "Arijit Singh, Shreya Ghoshal", hits: "1.5M" },
                                        { title: "Naatu Naatu (RRR)", artist: "Rahul Sipligunj, Kaala Bhairava", hits: "5.1M" },
                                        { title: "Samajavaragamana", artist: "Sid Sriram", hits: "3.2M" },
                                    ].map((song, i) => (
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
                <section id="shows" className="py-12 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary italic leading-none">
                                    Radio Nyra Shows
                                </h2>
                                <p className="mt-4 text-muted-foreground font-medium uppercase tracking-widest text-sm max-w-xl">
                                    Tune in to the rhythm of your life with our diverse lineup of shows and charismatic hosts.
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

                {/* OUR PARTNERS */}
                <section className="py-12 bg-background border-t border-border/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 md:mb-12 border-l-4 border-primary pl-4 text-left">Our Partners</h2>

                        <PartnersMarquee />
                    </div>
                </section>



            </main >

            <Footer />
        </div >
    )
}
