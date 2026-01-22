"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Radio, Users, Mic2, Smartphone, Apple, Play } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"
import { ListenLiveButton } from "@/components/listen-live-button"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { VoiceAssistants } from "@/components/voice-assistants"
import { motion, AnimatePresence } from "framer-motion"

export default function HomePage() {

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
    { name: "Mana Muchatlu", host: "Kanthi", image: "/images/hosts/Mana Muchatlu.jpg", stationId: STATIONS.Telugu.id, language: "telugu" },
  ];
  const { playStation, currentStation } = useAudio();

  // Determine selected language from audio player
  const selectedLanguage = (currentStation.name || "Hindi").toLowerCase() as "hindi" | "telugu";
  const filteredShows = shows.filter((show) => show.language === selectedLanguage);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      {/* <FrequencyBar /> */}

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
              <source src="https://assets.mixkit.co/videos/preview/mixkit-sound-waves-in-the-dark-3079-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.9] drop-shadow-2xl italic">
              <span className="text-white block">The Only Gateway to the Indian</span>
              <span className="text-primary block mt-2">Subcontinent Communities in the USA</span>
            </h1>


            <div className="mt-8">
              <ListenLiveButton className="w-full md:w-auto text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none transition-all hover:scale-105 shadow-2xl h-14 px-10" />
            </div>

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
          <div className="container mx-auto px-4">
            <div className="flex flex-row flex-nowrap md:grid md:grid-cols-2 gap-2 text-center justify-center items-center overflow-hidden">
              {[
                { label: "Active listeners per week", end: 100, suffix: "K+", icon: Users },
                { label: "24/7 Broadcasting", end: 24, suffix: "", icon: Radio },
                // { label: "Professional Hosts", end: 15, suffix: "+", icon: Mic2 } // Hidden as per request
              ].map((stat, i) => (
                <div key={i} className="flex-1 p-2">
                  <div className="flex justify-center">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2500} />
                  </div>
                  <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GDC BANNER */}
        <section className="py-4 bg-background border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <Link href="https://gdc.informafestivals.com/2026/registrations/Attendee?_mc=barter_gdcsf_gdcsf_le_x_partn" target="_blank" rel="noopener noreferrer">
                <img
                  src="/GDC_1200x300.gif"
                  alt="GDC Banner"
                  className="w-full max-w-[1200px] h-auto object-contain hover:opacity-90 transition-opacity"
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
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary italic leading-none">
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
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-12 border-l-4 border-primary pl-4 text-left">Our Partners</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Empowerly Partner */}
              <Link
                href="https://start.empowerly.com/radio-nyra"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border/30 hover:border-primary/50 transition-all duration-300 bg-transparent p-4 flex items-center justify-center h-32 hover:shadow-lg"
              >
                <div className="relative w-full h-full">
                  <img
                    src="/images/1.jpg"
                    alt="Empowerly"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>

              {/* All Other Partners Restored */}
              {Array.from({ length: 29 }, (_, i) => i + 2).map((num) => (
                <div key={`partner-${num}`} className="group border border-border/30 hover:border-primary/50 transition-all duration-300 bg-transparent p-4 flex items-center justify-center h-32 hover:shadow-lg">
                  <div className="relative w-full h-full">
                    <img
                      src={`/images/${num}.jpg`}
                      alt={`Partner ${num}`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main >

      <Footer />
    </div >
  )
}
