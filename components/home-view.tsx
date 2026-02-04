"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Smartphone, Apple, Play, Megaphone, Star, Radio, Ticket } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"

import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { VoiceAssistants } from "@/components/voice-assistants"
import { PartnersMarquee } from "@/components/partners-marquee"
import { motion, AnimatePresence } from "framer-motion"

export function HomeView() {

    // Radio Nyra Shows Data
    const shows = [
        // Hindi shows

        { name: "Chai Pe Charcha", host: "Raj Persaud", image: "/images/hosts/cha-pe-charcha.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Hello Vaishnavi", host: "Vaishnavi Palleda", image: "/images/hosts/hello-vaishnavi.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Zara Muskurao", host: "Aayushii Rode", image: "/images/hosts/zara-muskurao.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Triangle Tunes and Talks", host: "Monika Joshi", image: "/images/hosts/triangle-tunes.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Idhar Udhar Ki Baatein", host: "Arpit Tandon", image: "/images/hosts/idhar-udhar-ki-baatein.jpeg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Dil Se Desi", host: "Jyoti", image: "/images/hosts/dil-se-desi.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Bollywood Bliss", host: "Bharti Rathore", image: "/images/hosts/bollywood-bliss.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Nirvana Nights", host: "Shivani", image: "/images/hosts/nirvana-nights.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        { name: "Geet Bazaar", host: "Dr. Taj & Dr. Caldwell", image: "/images/hosts/geet-bazaar.jpg", stationId: STATIONS.Hindi.id, language: "hindi" },
        // Telugu shows (as per requirement)
        { name: "Non-Stop Hungama", host: "Sohail", image: "/images/hosts/non-stop-hungama.jpg", stationId: STATIONS.Telugu.id, language: "telugu" },
        { name: "Chinna Mata", host: "Priya", image: "/images/hosts/chinna-mata.jpg", stationId: STATIONS.Telugu.id, language: "telugu" },
        { name: "Mana Muchatlu", host: "Kanthi", image: "/images/hosts/Mana%20Muchatlu.jpg", stationId: STATIONS.Telugu.id, language: "telugu" },
    ];
    const { playStation, currentStation } = useAudio();

    // Determine selected language from audio player
    const selectedLanguage = (currentStation.name || "Hindi").toLowerCase() as "hindi" | "telugu";
    const filteredShows = shows.filter((show) => show.language === selectedLanguage);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
            <Navigation />
            <FrequencyBar />

            <main>
                {/* HERO SECTION */}
                <section className="relative h-auto min-h-[50vh] w-full overflow-hidden flex items-center justify-center bg-black py-12">
                    <div className="absolute inset-0 z-0 opacity-60">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            poster="/radio-studio-modern.jpg"
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
                            <span className="text-white block">The Only Gateway to the Indian</span>
                            <span className="text-primary block mt-1 md:mt-2">Subcontinent Communities in the USA</span>
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
                                        <img src="/Apple icon.png" alt="App Store" className="w-9 h-9 object-contain" />
                                    </Link>
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app"
                                        target="_blank"
                                        className="bg-white p-2 rounded-full h-16 w-16 flex items-center justify-center hover:scale-110 transition-all shadow-xl border-2 border-white/20"
                                        title="Get it on Google Play"
                                    >
                                        <img src="/Android icon.png" alt="Google Play" className="w-9 h-9 object-contain" />
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

                {/* FEATURED EVENT SECTION */}
                <section className="py-12 bg-gradient-to-b from-background to-primary/5 border-y border-border/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Ticket className="w-64 h-64 text-primary rotate-12" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-primary drop-shadow-sm">
                                Featured Event
                            </h2>
                            <p className="mt-2 text-muted-foreground font-bold uppercase tracking-widest text-xs md:text-sm">
                                Don't miss out on the biggest night of the year!
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 md:p-8 border border-border shadow-2xl">
                            {/* Event Poster */}
                            <div className="flex justify-center">
                                <Link href="https://www.eventbrite.com/e/valentine-galentines-dance-night-tickets-1982288757034" target="_blank" rel="noopener noreferrer" className="w-full relative group">
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                        <span className="bg-white text-primary px-4 py-2 font-bold uppercase tracking-widest text-xs shadow-lg transform -rotate-3">View Details</span>
                                    </div>
                                    <img
                                        src="/images/VDay 2026 AI Poster.png"
                                        alt="Valentine's Day Party"
                                        className="w-full h-auto max-h-[500px] object-contain shadow-lg"
                                    />
                                </Link>
                            </div>

                            {/* Event Details & Checkout */}
                            <div className="flex flex-col gap-6 text-center md:text-left">
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic leading-none mb-2">Valentine's & Galentine's Dance Night</h3>
                                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">February 14, 2026 • 8 PM Onwards</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        Join us for an unforgettable evening of music, dance, and celebration featuring <strong>DJ SHIV (Live)</strong>.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">Secure Your Spot</p>
                                    <Button className="w-full bg-[#D1410C] hover:bg-[#D1410C]/90 text-white font-black uppercase tracking-widest py-6 rounded-sm text-lg shadow-xl hover:scale-102 transition-transform" asChild>
                                        <Link href="https://www.eventbrite.com/e/valentine-galentines-dance-night-tickets-1982288757034" target="_blank" rel="noopener noreferrer">
                                            Book Tickets on Eventbrite
                                        </Link>
                                    </Button>
                                    <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-60">
                                        <Ticket className="w-3 h-3" />
                                        <span>Instant Confirmation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPONSORED BANNER SECTION */}
                <section className="py-8 bg-background border-b border-border/50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="flex justify-center">
                            <Link href="https://gdc.informafestivals.com/2026/registrations/Attendee?_mc=barter_gdcsf_gdcsf_le_x_partn" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-95 transition-opacity">
                                <img
                                    src="/GDC_1200x300.gif"
                                    alt="GDC Festival of Gaming"
                                    className="w-full h-auto object-contain shadow-md border border-border/50"
                                />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* RADIO NYRA SHOWS SECTION */}
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <AnimatePresence mode="popLayout">
                                {filteredShows.map((show, i) => (
                                    <motion.div
                                        key={`${show.language}-${show.name}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                    >
                                        <Link
                                            href="/schedule"
                                            className="group bg-card border border-border/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden block"
                                            onClick={() => playStation(show.stationId)}
                                        >
                                            <div className="relative aspect-square overflow-hidden bg-black">
                                                <img
                                                    src={show.image}
                                                    alt={show.name}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.src = "https://placehold.co/600x600/000000/FFFFFF?text=" + encodeURIComponent(show.name);
                                                    }}
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold uppercase tracking-tight leading-none text-lg truncate">{show.name}</h3>
                                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{show.host}</p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* OUR PARTNERS */}
                <section className="py-12 bg-background border-t border-border/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 md:mb-12 border-l-4 border-primary pl-4 text-left">Our Partners</h2>

                        {/* Partners Data */}
                        {(() => {
                            const partnersData = [
                                { name: "Empowerly", image: "/images/1.jpg", link: "https://start.empowerly.com/radio-nyra" },
                                { name: "Cloud Divine Custom", image: "/images/Black in white cdc logo.jpg.jpeg", link: "https://www.clouddivinecustom.com/" },
                                { name: "Sharkey's Cuts for Kids", image: "/images/Sharkey's Logo.png", link: "https://sharkeyscutsforkidsdurham.com/" },
                                { name: "Sip n Spices", image: "/images/Sip N Spices Logo.png", link: "https://www.sipnspicesnc.com/" },
                                // Existing partners 2-30 (generic)
                                ...Array.from({ length: 29 }, (_, i) => ({
                                    name: `Partner ${i + 2}`,
                                    image: `/images/${i + 2}.jpg`,
                                    link: null
                                }))
                            ];

                            return (
                                <>
                                    <div className="md:hidden -mx-4">
                                        <PartnersMarquee partnersData={partnersData} />
                                    </div>

                                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 gap-4">
                                        {partnersData.map((partner, i) => (
                                            partner.link ? (
                                                <Link
                                                    key={i}
                                                    href={partner.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group border border-border/30 hover:border-primary/50 transition-all duration-300 bg-transparent p-4 flex items-center justify-center h-32 hover:shadow-lg"
                                                    title={partner.name}
                                                >
                                                    <div className="relative w-full h-full">
                                                        <img
                                                            src={partner.image}
                                                            alt={partner.name}
                                                            loading="lazy"
                                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                                        />
                                                    </div>
                                                </Link>
                                            ) : (
                                                <div key={i} className="group border border-border/30 hover:border-primary/50 transition-all duration-300 bg-transparent p-4 flex items-center justify-center h-32 hover:shadow-lg">
                                                    <div className="relative w-full h-full">
                                                        <img
                                                            src={partner.image}
                                                            alt={partner.name}
                                                            loading="lazy"
                                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </section>

            </main >

            <Footer />
        </div >
    )
}
