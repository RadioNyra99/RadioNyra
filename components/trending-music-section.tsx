"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Play, Music, Sparkles, ChevronRight, Disc, Flame, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { cn } from "@/lib/utils"

interface Playlist {
  id: string
  title: string
  subtitle: string
  language: string
  image: string
  stationId: string
  tag: string
  color: string
}

const PLAYLISTS: Playlist[] = [
  {
    id: "pl-1",
    title: "Bollywood Chartbusters 2026",
    subtitle: "Arijit Singh, Shreya Ghoshal, Badshah & Pritam",
    language: "Hindi",
    image: "/images/hosts/zara-muskurao.jpeg",
    stationId: STATIONS.Hindi.id,
    tag: "Trending Now",
    color: "from-red-600/30 to-zinc-900",
  },
  {
    id: "pl-2",
    title: "Tollywood Melodies & Mass Beats",
    subtitle: "Sid Sriram, Anirudh, Thaman S & Devi Sri Prasad",
    language: "Telugu",
    image: "/images/hosts/chinna-mata.webp",
    stationId: STATIONS.Telugu.id,
    tag: "Top Telugu",
    color: "from-amber-600/30 to-zinc-900",
  },
  {
    id: "pl-3",
    title: "Retro Rewind: 70s to 90s Golden Era",
    subtitle: "Kishore Kumar, Lata Mangeshkar & R.D. Burman",
    language: "Hindi",
    image: "/images/hosts/geet-bazaar.webp",
    stationId: STATIONS.Hindi.id,
    tag: "Classics",
    color: "from-purple-600/30 to-zinc-900",
  },
  {
    id: "pl-4",
    title: "Punjabi Beat Wave",
    subtitle: "Diljit Dosanjh, Karan Aujla, AP Dhillon & Sidhu",
    language: "Punjabi",
    image: "/images/hosts/idhar-udhar-ki-baatein.webp",
    stationId: STATIONS.Hindi.id,
    tag: "High Energy",
    color: "from-emerald-600/30 to-zinc-900",
  },
  {
    id: "pl-5",
    title: "Tamil Top 20 Grooves",
    subtitle: "A.R. Rahman, Anirudh Ravichander & Yuvan",
    language: "Tamil",
    image: "/images/hosts/triangle-tunes.jpeg",
    stationId: STATIONS.Hindi.id,
    tag: "Melody & Beats",
    color: "from-cyan-600/30 to-zinc-900",
  },
  {
    id: "pl-6",
    title: "Nirvana Nights: Late-Night Chill",
    subtitle: "Ghazals, Sufi Vibes & Acoustic Unplugged",
    language: "Hindi",
    image: "/images/hosts/nirvana-nights.png",
    stationId: STATIONS.Hindi.id,
    tag: "Late Night",
    color: "from-indigo-600/30 to-zinc-900",
  },
]

const LANGUAGES = ["All", "Hindi", "Telugu", "Punjabi", "Tamil"]

export function TrendingMusicSection() {
  const [activeLang, setActiveLang] = useState("All")
  const { playStation } = useAudio()

  const filteredPlaylists =
    activeLang === "All"
      ? PLAYLISTS
      : PLAYLISTS.filter((p) => p.language.toLowerCase() === activeLang.toLowerCase())

  return (
    <section className="py-12 bg-zinc-950 text-white border-b border-zinc-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-400">
                Music Discovery
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white italic">
              Trending Sounds & Playlists
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
              Curated by RadioNyra music editors for the South Asian diaspora
            </p>
          </div>

          {/* Language Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/80 p-1.5 rounded-full border border-zinc-800 self-start md:self-auto">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={cn(
                  "px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer",
                  activeLang === lang
                    ? "bg-red-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                )}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Playlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPlaylists.map((pl) => (
            <div
              key={pl.id}
              className={cn(
                "group relative rounded-2xl overflow-hidden border border-zinc-800/90 bg-gradient-to-b p-5 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:-translate-y-0.5",
                pl.color
              )}
            >
              <div className="flex gap-4 items-start">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-zinc-700/60 bg-black shadow-md">
                  <img
                    src={pl.image}
                    alt={pl.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Badge className="bg-zinc-800 text-zinc-300 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border-none">
                      {pl.language}
                    </Badge>
                    <span className="text-[10px] font-semibold text-zinc-400">
                      {pl.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {pl.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {pl.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-zinc-400 flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-red-500" />
                  Streaming on Nyra
                </span>
                <Button
                  onClick={() => playStation(pl.stationId)}
                  size="sm"
                  className="rounded-full bg-zinc-800 hover:bg-red-600 text-white text-[11px] font-bold h-7 px-3.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3 h-3 mr-1 fill-current" />
                  Tune In
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
