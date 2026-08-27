"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAudio } from "@/components/audio-context"
import { getStationsList, NETWORK_STATS } from "@/lib/stations"
import { CITY_RADIO_MARKETS } from "@/lib/market-radio-data"
import { Radio, Headphones, Volume2, Globe, MapPin, Search } from "lucide-react"

const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")]

export default function FMStationsPage() {
  const { playStation, currentStation } = useAudio()
  const [query, setQuery] = useState("")
  const [letter, setLetter] = useState("All")
  const stations = getStationsList()

  const filteredStations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return stations.filter((station) => {
      const haystack = `${station.name} ${station.city} ${station.state} ${station.frequency} ${station.language}`.toLowerCase()
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery)
      const matchesLetter = letter === "All" || station.city?.toUpperCase().startsWith(letter)
      return matchesQuery && matchesLetter
    })
  }, [letter, query, stations])

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": stations.map((station) => ({
      "@type": "RadioStation",
      "@id": `https://www.radionyra.com/fm-stations#${station.id}`,
      "name": station.name,
      "url": "https://www.radionyra.com",
      "logo": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
      "broadcastFrequency": {
        "@type": "BroadcastFrequencySpecification",
        "frequencyValue": station.frequency,
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
              {NETWORK_STATS.stations} Stations - {NETWORK_STATS.cities} Cities - {NETWORK_STATS.headline}
            </p>
          </div>

          <div className="mb-10 space-y-5">
            <div className="relative max-w-3xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by city, frequency, state, or language"
                className="h-14 rounded-none border-2 border-border bg-background pl-12 font-bold uppercase tracking-widest text-xs"
                aria-label="Search stations"
              />
            </div>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 justify-start md:justify-center" aria-label="Alphabet filter">
              {alphabet.map((item) => (
                <button
                  key={item}
                  onClick={() => setLetter(item)}
                  className={`h-9 min-w-9 px-3 text-[10px] font-black uppercase tracking-widest transition-colors ${
                    letter === item ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of Stations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStations.map((station) => {
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
                        {station.city} Market
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
                      Frequency: <strong className="text-foreground text-sm font-black italic">{station.frequency}</strong>
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
          <section className="mt-16 bg-muted/20 border border-border p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-black uppercase tracking-tight italic mb-2">Local Market Landing Pages</h2>
              <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed mb-6 font-medium mx-auto">
                Explore dedicated Radio Nyra market pages for local frequency information, host programming notes, and advertiser opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CITY_RADIO_MARKETS.map((market) => (
                <a
                  key={market.path}
                  href={market.path}
                  className="border border-border bg-background p-4 hover:border-primary transition-colors"
                >
                  <span className="block text-[10px] font-black uppercase tracking-widest text-primary">{market.frequency}</span>
                  <span className="mt-2 block text-sm font-black uppercase tracking-tight text-foreground">{market.city} Radio</span>
                </a>
              ))}
            </div>
          </section>

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
