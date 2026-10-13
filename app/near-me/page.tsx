"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { NC_CITIES, getCityBySlug } from "@/lib/nc-data"
import { BUSINESS_DIRECTORY } from "@/lib/directory-data"
import { upcomingEvents } from "@/lib/event-data"
import { useAudio } from "@/components/audio-context"
import {
  Compass,
  MapPin,
  Radio,
  Utensils,
  ShoppingBag,
  Landmark,
  Calendar,
  Sparkles,
  ChevronRight,
  Phone,
  Navigation as NavigationIcon,
} from "lucide-react"

export default function NearMePage() {
  const [selectedCitySlug, setSelectedCitySlug] = useState("morrisville")
  const [isLocating, setIsLocating] = useState(false)
  const [locationMessage, setLocationMessage] = useState<string | null>(null)
  const { playStation } = useAudio()

  const city = getCityBySlug(selectedCitySlug) || NC_CITIES[0]

  // Filter nearby directory listings
  const nearbyBusinesses = BUSINESS_DIRECTORY.filter(
    (b) => b.city.toLowerCase() === city.name.toLowerCase()
  )

  const handleUseCurrentLocation = () => {
    setIsLocating(true)
    setLocationMessage("Detecting your location in North Carolina...")

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocating(false)
          // Default to Morrisville or Cary for demo / local Triangle coordinates
          setSelectedCitySlug("morrisville")
          setLocationMessage("Location detected! Showing Morrisville & Triangle recommendations.")
        },
        (error) => {
          setIsLocating(false)
          setLocationMessage("Could not retrieve precise GPS. Switched to Morrisville, NC default.")
          setSelectedCitySlug("morrisville")
        },
        { timeout: 8000 }
      )
    } else {
      setIsLocating(false)
      setLocationMessage("Geolocation is not supported. Please select your Triangle city below.")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FrequencyBar />

      <main className="pb-16">
        {/* HERO */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-10 md:py-14 border-b border-border/50">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> RadioNyra Near Me
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Your Hyper-Local <span className="text-primary">Triangle Guide</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6">
              Find live radio signals, nearby Indian restaurants, temples, grocery supermarkets, and weekend events closest to you in North Carolina.
            </p>

            {/* QUICK LOCATION ACTIONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <Button
                onClick={handleUseCurrentLocation}
                disabled={isLocating}
                className="w-full sm:w-auto rounded-full font-bold uppercase tracking-wide text-xs"
              >
                <NavigationIcon className="w-3.5 h-3.5 mr-1.5" />
                {isLocating ? "Locating..." : "Use My Location"}
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto rounded-full font-bold uppercase tracking-wide text-xs">
                <Link href={`/north-carolina/${city.slug}`}>
                  View Full {city.name} Hub <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </Button>
            </div>

            {locationMessage && (
              <p className="text-xs text-primary font-bold mt-3 animate-fade-in">{locationMessage}</p>
            )}
          </div>
        </section>

        {/* CITY SELECTOR TABS */}
        <section className="py-6 bg-muted/20 border-b border-border/40 sticky top-16 z-30 backdrop-blur-md bg-background/90">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground shrink-0 mr-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary" /> Select City:
              </span>
              {NC_CITIES.map((c) => (
                <Button
                  key={c.id}
                  variant={selectedCitySlug === c.slug ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCitySlug(c.slug)
                    setLocationMessage(null)
                  }}
                  className="rounded-full text-xs font-bold uppercase shrink-0 h-8"
                >
                  {c.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* NEARBY HIGHLIGHTS */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* LIVE TUNING IN THIS CITY */}
            <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-red-950/20 via-primary/5 to-transparent border border-primary/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-primary mb-1">
                    <Radio className="w-4 h-4" /> Live Broadcast in {city.name}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
                    Radio Nyra 99.9 FM HD3 &amp; HD4
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                    {city.listenDetails.receptionTips}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => playStation("raleigh-hd4-hindi")}
                    className="rounded-full text-xs font-extrabold uppercase tracking-wider"
                  >
                    Play Hindi HD4
                  </Button>
                  <Button
                    onClick={() => playStation("raleigh-hd3-telugu")}
                    variant="outline"
                    className="rounded-full text-xs font-extrabold uppercase tracking-wider border-2"
                  >
                    Play Telugu HD3
                  </Button>
                </div>
              </div>
            </div>

            {/* HOTSPOTS & BUSINESSES */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Temples & Cultural Landmarks */}
              <div>
                <h3 className="text-lg font-extrabold uppercase tracking-tight flex items-center gap-2 mb-4">
                  <Landmark className="w-4 h-4 text-primary" /> Temples &amp; Cultural Centers
                </h3>
                <div className="space-y-3">
                  {city.hotspots.map((spot, idx) => (
                    <div key={`${spot.name}-${idx}`} className="p-4 bg-card border border-border rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">
                          {spot.type}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-foreground">{spot.name}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{spot.address}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{spot.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Local Businesses & Dining */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-primary" /> Dining &amp; Services in {city.name}
                  </h3>
                  <Button asChild variant="ghost" size="sm" className="text-xs font-bold text-primary">
                    <Link href="/directory">All Listings</Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  {nearbyBusinesses.length === 0 ? (
                    <div className="p-6 bg-muted/20 border border-dashed rounded-xl text-center">
                      <p className="text-xs text-muted-foreground mb-2">No businesses listed specifically in {city.name} yet.</p>
                      <Button asChild size="sm" variant="outline" className="rounded-full text-xs">
                        <Link href="/directory/submit">Add the First Business</Link>
                      </Button>
                    </div>
                  ) : (
                    nearbyBusinesses.map((biz) => (
                      <div key={biz.id} className="p-4 bg-card border border-border rounded-xl flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                            {biz.categoryLabel}
                          </span>
                          <h4 className="font-bold text-sm text-foreground mt-0.5">{biz.name}</h4>
                          <p className="text-xs text-muted-foreground">{biz.address}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{biz.shortDescription}</p>
                        </div>
                        <a
                          href={`tel:${biz.phone}`}
                          className="shrink-0 p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                          aria-label={`Call ${biz.name}`}
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* UPCOMING EVENTS */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-extrabold uppercase tracking-tight flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Triangle Events Near You
                </h3>
                <Button asChild variant="ghost" size="sm" className="text-xs font-bold text-primary">
                  <Link href="/events">Full Calendar</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingEvents.slice(0, 4).map((evt) => (
                  <div key={evt.id} className="p-4 bg-card border border-border rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-primary mb-1">
                        <span>{evt.category}</span>
                        <span>{evt.date}</span>
                      </div>
                      <h4 className="font-bold text-sm text-foreground mb-1">{evt.title}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" /> {evt.venue}, {evt.location}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-border/40 flex justify-end">
                      <Button asChild size="sm" variant="outline" className="h-7 text-xs font-bold rounded-full">
                        <Link href="/events">View Event</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
