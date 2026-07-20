"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { Radio, Headphones, Play, Volume2, Globe, MapPin } from "lucide-react"

export default function FMStationsPage() {
  const { playStation, currentStation } = useAudio()

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": Object.entries(STATIONS).map(([key, station]) => ({
      "@type": "RadioStation",
      "@id": `https://www.radionyra.com/fm-stations#${station.id}`,
      "name": station.name,
      "url": "https://www.radionyra.com",
      "logo": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
      "broadcastFrequency": {
        "@type": "BroadcastFrequencySpecification",
        "frequencyValue": key.includes("99.9") ? "99.9" : key.includes("107.5") ? "107.5" : key.includes("92.3") ? "92.3" : key.includes("93.1") ? "93.1" : key.includes("103.9") ? "103.9" : "95.5",
        "frequencyUnit": "MHz"
      }
    }))
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navigation />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Radio className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic text-primary">
              FM Stations <span className="text-foreground">& Frequencies</span>
            </h1>
            <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mt-3">
              Tune in to Radio Nyra on high-definition FM dials across North America
            </p>
          </div>

          {/* Grid Layout of Stations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(STATIONS).map(([key, station]) => {
              const isCurrentlyPlaying = currentStation.id === station.id
              return (
                <div 
                  key={station.id}
                  className={`bg-card border p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-xl ${
                    isCurrentlyPlaying ? "border-primary ring-2 ring-primary/20" : "border-border"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {key.split(" ")[0]} Market
                      </span>
                      {isCurrentlyPlaying && (
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-500 flex items-center gap-1">
                          <Volume2 className="w-3.5 h-3.5 animate-pulse" /> Playing Live
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight italic text-foreground/90 leading-tight">
                      {station.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                      Broadcasting 24/7 high-fidelity digital programming. Stream Bollywood hits, Telugu classics, local news, and community updates.
                    </p>
                  </div>

                  <div className="mt-8 border-t border-border pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Frequency: <strong className="text-foreground text-sm font-black italic">{key.includes("99.9") ? "99.9 FM" : key.includes("107.5") ? "107.5 FM" : key.includes("92.3") ? "92.3 FM" : key.includes("93.1") ? "93.1 FM" : key.includes("103.9") ? "103.9 FM" : "95.5 FM"}</strong>
                    </div>

                    <Button
                      onClick={() => playStation(station.id)}
                      className={`w-full sm:w-auto font-bold uppercase tracking-widest text-xs px-6 py-4 rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isCurrentlyPlaying 
                          ? "bg-green-600 hover:bg-green-700 text-white" 
                          : "bg-primary hover:bg-primary/90 text-white"
                      }`}
                    >
                      <Headphones className="w-4 h-4" />
                      {isCurrentlyPlaying ? "Currently Playing" : "Stream Live"}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Interactive coverage information */}
          <div className="mt-16 bg-muted/20 border border-border p-8 md:p-12 text-center max-w-4xl mx-auto">
            <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-black uppercase tracking-tight italic mb-2">Can't receive the FM signal?</h3>
            <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed mb-6 font-medium mx-auto">
              Our HD Radio signals are incredibly robust, but building materials or topography can sometimes interfere. Download our mobile applications or enable the Alexa skill to stream crystal-clear audio globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-foreground text-background hover:bg-primary hover:text-white font-bold uppercase tracking-widest rounded-none text-xs" asChild>
                <a href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" target="_blank" rel="noopener noreferrer">iOS App</a>
              </Button>
              <Button className="bg-foreground text-background hover:bg-primary hover:text-white font-bold uppercase tracking-widest rounded-none text-xs" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app" target="_blank" rel="noopener noreferrer">Android App</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
