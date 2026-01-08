"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Radio, Users, Mic2, Smartphone, Apple } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"
import { ListenLiveButton } from "@/components/listen-live-button"

export default function HomePage() {

  // Radio Nyra Shows Data
  const shows = [
    { name: "Non Stop Hungama", host: "Sohail", image: "/images/hosts/non-stop-hungama.jpg" },
    { name: "Morning Commute", host: "Raj Persaud", image: "/images/hosts/cha-pe-charcha.jpg" },
    { name: "Hello Vaishnavi", host: "Vaishnavi Palleda", image: "/images/hosts/hello-vaishnavi.jpg" },
    { name: "Triangle Tunes", host: "Monika Joshi", image: "/images/hosts/triangle-tunes.jpg" },
    { name: "Idhar Udhar Ki Baatein", host: "Arpit Tandon", image: "/images/hosts/idhar-udhar-ki-baatein.jpg" },
    { name: "Desh ParDesh", host: "Vishal The Khushhal", image: "/images/hosts/desi-pardesi.jpg" },
    { name: "Nirvana Nights", host: "Shivani", image: "/images/hosts/nirvana-nights.jpg" },
    { name: "Dil Se Desi", host: "Jyoti", image: "/images/hosts/dil-se-desi.jpg" },
    { name: "Zara Muskurao", host: "Aayushii Rode", image: "/images/hosts/zara-muskurao.jpg" },
    { name: "Bollywood Bliss", host: "Bharti Rathore", image: "/images/hosts/bollywood-bliss.jpg" },
    { name: "Geet Bazaar", host: "Dr. Taj & Dr. Caldwell", image: "/images/hosts/geet-bazaar.jpg" },
    { name: "Chinna Mata", host: "Kanthi", image: "/images/hosts/chinna-mata.jpg" },
    { name: "Kuch Tum Kaho, Kuch Hum Kahein", host: "Aditi", image: "/images/hosts/kuch-tum-kaho-kuch-hum-kahein.jpg" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
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
            <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-[0.8] drop-shadow-2xl italic">
              <span className="text-white block">The Voice of</span>
              <span className="text-primary block mt-2">India in USA</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-12 w-full max-w-4xl mx-auto">
              <ListenLiveButton className="w-full md:w-auto text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none transition-all hover:scale-105 shadow-2xl h-16 px-12" />

              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-8 text-sm font-bold uppercase tracking-widest text-white border-2 border-white bg-transparent hover:bg-white hover:text-black rounded-none transition-all hover:scale-105 shadow-2xl"
                  asChild
                >
                  <Link href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app&pcampaignid=web_share&pli=1">
                    <Smartphone className="mr-3 w-5 h-5" /> Download on Google Play
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-8 text-sm font-bold uppercase tracking-widest text-white border-2 border-white bg-transparent hover:bg-white hover:text-black rounded-none transition-all hover:scale-105 shadow-2xl"
                  asChild
                >
                  <Link href="https://apps.apple.com/in/app/radio-nyra-raleigh-durham/id6469009980">
                    <Apple className="mr-3 w-5 h-5" /> Download on App Store
                  </Link>
                </Button>
              </div>
            </div>


          </div>
        </section>

        {/* VOICE ASSISTANT SECTION */}
        <section className="py-12 md:py-16 bg-black text-white border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-8 md:gap-16">
                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all border border-white/10 shadow-xl backdrop-blur-sm hover:scale-105 duration-300">
                    <img
                      src="https://www.gstatic.com/images/branding/product/2x/google_assistant_48dp.png"
                      alt="OK Google"
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                    OK GOOGLE
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all border border-white/10 shadow-xl backdrop-blur-sm hover:scale-105 duration-300">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Amazon_Alexa_logo.svg"
                      alt="Alexa"
                      className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-0 invert"
                    />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                    ALEXA
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all border border-white/10 shadow-xl backdrop-blur-sm hover:scale-105 duration-300">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Siri_logo.png"
                      alt="Siri"
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                    SIRI
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-center">
                <span className="text-white/60">LISTEN TO RADIO NYRA ON </span>
                <span className="text-white">OK GOOGLE, ALEXA & SIRI</span>
              </h2>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-6 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                { label: "Active Listeners", end: 100, suffix: "K+", icon: Users },
                { label: "Live Broadcasting", end: 24, suffix: "/7", icon: Radio },
                { label: "Professional Hosts", end: 15, suffix: "+", icon: Mic2 }
              ].map((stat, i) => (
                <div key={i} className="p-2">
                  <div className="flex justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2500} />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RADIO NYRA SHOWS SECTION */}
        <section id="shows" className="py-20 bg-muted/20">
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
              {shows.map((show, i) => (
                <Link href="/schedule" key={i} className="group bg-card border border-border/50 hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden bg-black">
                    <img
                      src={show.image}
                      alt={show.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x600/000000/FFFFFF?text=" + encodeURIComponent(show.name);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-4 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-black uppercase tracking-tighter text-white italic leading-none mb-1">
                        {show.name}
                      </h3>
                      {show.host && (
                        <p className="text-primary font-bold uppercase tracking-widest text-xs">
                          {show.host}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PARTNERS */}
        <section className="py-20 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-12 border-l-4 border-primary pl-4 text-left">Our Partners</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 30 }, (_, i) => i + 2).map((num) => (
                <div key={`partner-${num}`} className="group border border-border/30 hover:border-primary/50 transition-all duration-300 bg-transparent p-4 flex items-center justify-center h-24 hover:shadow-lg">
                  <div className="relative w-full h-full">
                    <img
                      src={`/images/${num}.jpg`}
                      alt={`Partner ${num}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
