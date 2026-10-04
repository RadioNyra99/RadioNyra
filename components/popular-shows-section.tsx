"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Radio, Play, Clock, Sparkles, ChevronRight, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"

interface ShowItem {
  id: string
  name: string
  host: string
  image: string
  stationId: string
  language: "hindi" | "telugu"
  stationLabel: string
  time: string
  tag: string
  description: string
}

const ALL_SHOWS: ShowItem[] = [
  {
    id: "show-zara-muskurao",
    name: "Zara Muskurao",
    host: "Aayushii Rode",
    image: "/images/hosts/zara-muskurao.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "7:00 AM – 9:00 AM EST",
    tag: "Morning Drive",
    description: "Start your day with high-octane Bollywood hits, community updates, cheerful banter, and feel-good morning vibes.",
  },
  {
    id: "show-triangle-tunes",
    name: "Triangle Tunes and Talks",
    host: "Monika Joshi",
    image: "/images/hosts/triangle-tunes.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "9:00 AM – 11:00 AM EST",
    tag: "Midday Melodies",
    description: "Your daily soundtrack for the workday with current chartbusters, lifestyle conversations, and Triangle community highlights.",
  },
  {
    id: "show-hello-vaishnavi",
    name: "Hello Vaishnavi",
    host: "Vaishnavi Palleda",
    image: "/images/hosts/hello-vaishnavi.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "11:00 AM – 1:00 PM EST",
    tag: "Celebrity & Culture",
    description: "Candid conversations with Indian cultural leaders, immigration specialists, health gurus, and exclusive celebrity interviews.",
  },
  {
    id: "show-bollywood-bliss",
    name: "Bollywood Bliss",
    host: "Bharti Rathore",
    image: "/images/hosts/bollywood-bliss.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "1:00 PM – 3:00 PM EST",
    tag: "Romantic Classics",
    description: "An afternoon escape through timeless romantic tracks, soulful acoustic melodies, and cinema nostalgia.",
  },
  {
    id: "show-idhar-udhar",
    name: "Idhar Udhar Ki Baatein",
    host: "Arpit Tandon",
    image: "/images/hosts/idhar-udhar-ki-baatein.webp",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "3:00 PM – 5:00 PM EST",
    tag: "Humor & Trends",
    description: "Witty commentary, viral diaspora trends, quirky humor, and lively listener call-ins on current affairs.",
  },
  {
    id: "show-dil-se-desi",
    name: "Dil Se Desi With Van",
    host: "Van Bhandari",
    image: "/images/hosts/dil-se-desi.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "5:00 PM – 7:00 PM EST",
    tag: "Evening Commute",
    description: "The Triangle's premier evening drive-time show featuring Chai Pe Charcha, business leader spotlights, and great tracks.",
  },
  {
    id: "show-chinna-mata",
    name: "Chinna Mata",
    host: "Priya",
    image: "/images/hosts/chinna-mata.webp",
    stationId: STATIONS.Telugu.id,
    language: "telugu",
    stationLabel: "99.9 FM-HD3 Telugu",
    time: "8:00 AM – 10:00 AM EST",
    tag: "Tollywood Melodies",
    description: "Wake up with the best Telugu melodies, Telugu diaspora news, family chit-chat, and positive energy on HD3.",
  },
]

export function PopularShowsSection() {
  const [filter, setFilter] = useState<"all" | "hindi" | "telugu">("all")
  const { playStation, currentStation, isPlaying } = useAudio()

  const filteredShows = ALL_SHOWS.filter((show) => {
    if (filter === "all") return true
    return show.language === filter
  })

  return (
    <section id="shows" className="py-14 bg-zinc-950 text-white border-b border-zinc-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Radio className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                KEXP-Style Editorial Showcase
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white italic">
              Popular RadioNyra Shows &amp; Personalities
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
              Meet the real voices behind the microphone broadcasting across the Indian Subcontinent diaspora
            </p>
          </div>

          {/* Language Filter Tabs */}
          <div className="flex items-center gap-2 bg-zinc-900/90 p-1 rounded-full border border-zinc-800 self-start sm:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                filter === "all" ? "bg-primary text-white shadow-md shadow-primary/30" : "text-zinc-400 hover:text-white"
              }`}
            >
              All Shows
            </button>
            <button
              onClick={() => setFilter("hindi")}
              className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                filter === "hindi" ? "bg-primary text-white shadow-md shadow-primary/30" : "text-zinc-400 hover:text-white"
              }`}
            >
              Hindi (HD4)
            </button>
            <button
              onClick={() => setFilter("telugu")}
              className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                filter === "telugu" ? "bg-primary text-white shadow-md shadow-primary/30" : "text-zinc-400 hover:text-white"
              }`}
            >
              Telugu (HD3)
            </button>
          </div>
        </div>

        {/* Shows Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredShows.map((show) => {
            const isThisStationPlaying = isPlaying && currentStation.id === show.stationId

            return (
              <div
                key={show.id}
                className="group rounded-2xl bg-zinc-900/70 border border-zinc-800/90 overflow-hidden flex flex-col justify-between hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  {/* Host Studio Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <img
                      src={show.image}
                      alt={`${show.name} hosted by ${show.host}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Language Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge
                        className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border-none shadow-md ${
                          show.language === "hindi"
                            ? "bg-red-600/90 text-white"
                            : "bg-amber-500/90 text-zinc-950 font-extrabold"
                        }`}
                      >
                        {show.language === "hindi" ? "Hindi HD4" : "Telugu HD3"}
                      </Badge>
                    </div>

                    {/* Genre Tag */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/70 backdrop-blur-sm text-zinc-300 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10">
                        {show.tag}
                      </span>
                    </div>

                    {/* Quick Audio Play Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <button
                        onClick={() => playStation(show.stationId)}
                        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
                        title={`Listen to ${show.name}`}
                      >
                        {isThisStationPlaying ? (
                          <Headphones className="w-6 h-6 animate-pulse" />
                        ) : (
                          <Play className="w-6 h-6 fill-current ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Timeslot Banner */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-zinc-300 text-[11px] font-semibold">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{show.time}</span>
                    </div>
                  </div>

                  {/* Show Details */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-white group-hover:text-primary transition-colors italic tracking-tight leading-snug">
                      {show.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-400 mt-1 uppercase tracking-wider">
                      Hosted by {show.host}
                    </p>
                    <p className="text-xs text-zinc-400 mt-2.5 line-clamp-2 font-normal leading-relaxed">
                      {show.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <Button
                    onClick={() => playStation(show.stationId)}
                    variant="outline"
                    size="sm"
                    className="w-full rounded-full border-zinc-800 bg-zinc-950/80 hover:bg-primary hover:text-white hover:border-primary text-zinc-200 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Headphones className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                    <span>{isThisStationPlaying ? "Now Playing" : "Tune In Station"}</span>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* View Full Schedule CTA */}
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-widest px-8 py-5"
          >
            <Link href="/schedule" className="flex items-center gap-2">
              <span>View Complete 7-Day Broadcast Schedule</span>
              <ChevronRight className="w-4 h-4 text-primary" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
