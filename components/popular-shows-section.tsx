"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import { Radio, Play, Clock, ChevronRight, Headphones, ChevronLeft, ArrowRight } from "lucide-react"
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

// Complete line-up of host show posters (Mana Muchatlu removed)
const ALL_SHOWS: ShowItem[] = [
  {
    id: "show-zara-muskurao",
    name: "Zara Muskurao",
    host: "RJ Amritha",
    image: "/images/hosts/zara-muskurao.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Mon - Sat 10:00 AM – 1:00 PM EST",
    tag: "Midday Hits",
    description: "Your daily companion with high-octane Bollywood hits, community updates, cheerful banter, and feel-good music vibes.",
  },
  {
    id: "show-triangle-tunes",
    name: "Triangle Tunes and Talks",
    host: "Monika Joshi",
    image: "/images/hosts/triangle-tunes.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Weekdays 10:00 AM – 1:00 PM EST",
    tag: "Midday Melodies",
    description: "Your daily soundtrack for the workday with current chartbusters, lifestyle conversations, and Triangle community highlights.",
  },
  {
    id: "show-bollywood-bliss",
    name: "Bollywood Bliss",
    host: "Bharti Rathore",
    image: "/images/hosts/bollywood-bliss.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Daily 1:00 PM – 3:00 PM EST",
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
    time: "Weekdays 3:00 PM – 5:00 PM EST",
    tag: "Humor & Trends",
    description: "Witty commentary, viral diaspora trends, quirky humor, and lively listener call-ins on current affairs.",
  },
  {
    id: "show-chai-pe-charcha",
    name: "Chai Pe Charcha",
    host: "Prachi",
    image: "/images/hosts/Prachi.png",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Weekdays 3:00 PM – 5:00 PM EST",
    tag: "Afternoon Chai",
    description: "Enjoy your afternoon tea with engaging local stories, cultural snippets, and classical fusion music.",
  },
  {
    id: "show-dil-se-desi",
    name: "Dil Se Desi With Van",
    host: "Van Bhandari",
    image: "/images/hosts/dil-se-desi.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Saturdays 12:00 PM – 1:00 PM EST",
    tag: "Evening Commute",
    description: "The Triangle's premier evening drive-time show featuring Chai Pe Charcha, business leader spotlights, and great tracks.",
  },
  {
    id: "show-hello-vaishnavi",
    name: "Hello Vaishnavi",
    host: "Vaishnavi Palleda",
    image: "/images/hosts/hello-vaishnavi.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Thursdays 5:00 PM – 7:00 PM EST",
    tag: "Celebrity & Culture",
    description: "Candid conversations with Indian cultural leaders, immigration specialists, health gurus, and exclusive celebrity interviews.",
  },
  {
    id: "show-aaj-ki-shaam",
    name: "Aaj Ki Shaam",
    host: "Jyothi",
    image: "/images/hosts/Aaj Ki Shaam-jyoti kae naam.png",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Fridays 6:00 PM – 8:00 PM EST",
    tag: "Weekend Melodies",
    description: "Unwind after a busy week with soulful melodies, local events, and heartwarming stories.",
  },
  {
    id: "show-nirvana-nights",
    name: "Nirvana Nights",
    host: "Parag",
    image: "/images/hosts/nirvana-nights.png",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Daily 7:00 PM – 10:00 PM EST",
    tag: "Late Night Chill",
    description: "Late-night unwind with soulful acoustic notes, timeless Bollywood classics, and unplugged melodies.",
  },
  {
    id: "show-geet-bazaar",
    name: "Geet Bazaar",
    host: "Dr. Taj & Dr. Caldwell",
    image: "/images/hosts/geet-bazaar.webp",
    stationId: STATIONS.Hindi.id,
    language: "hindi",
    stationLabel: "99.9 FM-HD4",
    time: "Sundays 10:00 AM – 12:00 PM EST",
    tag: "Golden Classics",
    description: "A long-running weekend favorite featuring nostalgic songs, ghazals, classic film music, and rich musical context.",
  },
  {
    id: "show-chinna-mata",
    name: "Chinna Mata",
    host: "Priya",
    image: "/images/hosts/chinna-mata.webp",
    stationId: STATIONS.Telugu.id,
    language: "telugu",
    stationLabel: "99.9 FM-HD3 Telugu",
    time: "Mornings 7:00 AM – 10:00 AM EST",
    tag: "Tollywood Melodies",
    description: "Wake up with the best Telugu melodies, Telugu diaspora news, family chit-chat, and positive energy on HD3.",
  },
  {
    id: "show-rtv-news",
    name: "RTV Telugu Daily News",
    host: "RTV News Team",
    image: "/images/rtv/rtv-news-poster.jpg",
    stationId: STATIONS.Telugu.id,
    language: "telugu",
    stationLabel: "99.9 FM-HD3 Telugu",
    time: "Daily Bulletins",
    tag: "Daily News & Politics",
    description: "Daily Telugu news bulletin on 99.9 FM-HD3 covering national politics, Andhra Pradesh & Telangana headlines.",
  },
]

export function PopularShowsSection() {
  const [filter, setFilter] = useState<"all" | "hindi" | "telugu">("all")
  const { playStation, currentStation, isPlaying } = useAudio()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredShows = ALL_SHOWS.filter((show) => {
    if (filter === "all") return true
    return show.language === filter
  })

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 260
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="shows" className="py-8 sm:py-10 bg-zinc-950 text-white border-b border-zinc-800/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Radio className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                Radio Nyra On-Air Lineup
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white italic">
              Our Hosts &amp; Show Posters
            </h2>
            <p className="text-zinc-400 text-xs font-medium mt-0.5">
              Slide through our live on-air shows broadcasting across America
            </p>
          </div>

          {/* Controls: Filter Tabs + Sliding Arrows */}
          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-full border border-zinc-800">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  filter === "all" ? "bg-primary text-white shadow-md shadow-primary/30" : "text-zinc-400 hover:text-white"
                }`}
              >
                All ({ALL_SHOWS.length})
              </button>
              <button
                onClick={() => setFilter("hindi")}
                className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  filter === "hindi" ? "bg-primary text-white shadow-md shadow-primary/30" : "text-zinc-400 hover:text-white"
                }`}
              >
                Hindi (HD4)
              </button>
              <button
                onClick={() => setFilter("telugu")}
                className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  filter === "telugu" ? "bg-primary text-white shadow-md shadow-primary/30" : "text-zinc-400 hover:text-white"
                }`}
              >
                Telugu (HD3)
              </button>
            </div>

            {/* Sliding Arrow Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                aria-label="Slide Left"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Slide Right"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Carousel Container with Fading Edges */}
        <div className="relative">
          {/* Fading left & right edge gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

          {/* The Horizontal Sliding Track */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory pb-3 px-1 gap-3.5 sm:gap-4 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredShows.map((show) => {
              const isThisStationPlaying = isPlaying && currentStation.id === show.stationId

              return (
                <div
                  key={show.id}
                  className="w-56 sm:w-64 shrink-0 snap-center group rounded-xl bg-zinc-900/80 border border-zinc-800/90 overflow-hidden flex flex-col justify-between hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div>
                    {/* Host Show Poster Image */}
                    <div className="relative aspect-square w-full overflow-hidden bg-zinc-950">
                      <img
                        src={show.image}
                        alt={`${show.name} hosted by ${show.host}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.src = "/images/radio-nyra-logo.jpg"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      {/* Language Badge */}
                      <div className="absolute top-2.5 left-2.5">
                        <Badge
                          className={`text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 border-none shadow-md ${
                            show.language === "hindi"
                              ? "bg-red-600/90 text-white"
                              : "bg-amber-500/90 text-zinc-950 font-extrabold"
                          }`}
                        >
                          {show.language === "hindi" ? "Hindi HD4" : "Telugu HD3"}
                        </Badge>
                      </div>

                      {/* Genre Tag */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="bg-black/70 backdrop-blur-sm text-zinc-300 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-white/10">
                          {show.tag}
                        </span>
                      </div>

                      {/* Quick Audio Play Button on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                        <button
                          onClick={() => playStation(show.stationId)}
                          className="w-11 h-11 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
                          title={`Listen to ${show.name}`}
                        >
                          {isThisStationPlaying ? (
                            <Headphones className="w-5 h-5 animate-pulse" />
                          ) : (
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          )}
                        </button>
                      </div>

                      {/* Timeslot Banner */}
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center gap-1.5 text-zinc-300 text-[10px] font-semibold">
                        <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{show.time}</span>
                      </div>
                    </div>

                    {/* Show Details */}
                    <div className="p-3 sm:p-3.5">
                      <h3 className="text-sm sm:text-base font-black text-white group-hover:text-primary transition-colors italic tracking-tight leading-snug truncate">
                        {show.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] font-bold text-amber-400 mt-0.5 uppercase tracking-wider truncate">
                        Hosted by {show.host}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-3 sm:p-3.5 pt-0">
                    <Button
                      onClick={() => playStation(show.stationId)}
                      variant="outline"
                      size="sm"
                      className="w-full h-8 rounded-full border-zinc-800 bg-zinc-950/80 hover:bg-primary hover:text-white hover:border-primary text-zinc-200 text-[11px] font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Headphones className="w-3 h-3 text-primary group-hover:text-white" />
                      <span>{isThisStationPlaying ? "Now Playing" : "Tune In"}</span>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
