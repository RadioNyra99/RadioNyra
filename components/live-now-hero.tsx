"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Play, Pause, Radio, Volume2, Sparkles, Calendar, ChevronRight, Share2, Headphones, Music2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { cn } from "@/lib/utils"
import { getLiveHindiShow, getLiveTeluguShow, getEasternTime, type LiveShowInfo, type EasternTime } from "@/lib/live-schedule-service"

export function LiveNowHero() {
  const { isPlaying, currentStation, playStation, togglePlay, metadata } = useAudio()

  const [liveHindi, setLiveHindi] = useState<LiveShowInfo>(() => getLiveHindiShow())
  const [liveTelugu, setLiveTelugu] = useState<LiveShowInfo>(() => getLiveTeluguShow())
  const [easternTime, setEasternTime] = useState<EasternTime>(() => getEasternTime())

  useEffect(() => {
    const updateShows = () => {
      setLiveHindi(getLiveHindiShow())
      setLiveTelugu(getLiveTeluguShow())
      setEasternTime(getEasternTime())
    }
    updateShows()
    const timer = setInterval(updateShows, 30000)
    return () => clearInterval(timer)
  }, [])

  const isHindiActive = currentStation.id === STATIONS.Hindi.id
  const isTeluguActive = currentStation.id === STATIONS.Telugu.id

  const handleStationClick = (stationId: string) => {
    if (currentStation.id === stationId) {
      togglePlay()
    } else {
      playStation(stationId)
    }
  }

  const openNyraAI = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-nyra-ai"))
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white py-8 sm:py-12 border-b border-zinc-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -z-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-red-400 flex items-center gap-2">
                Live Broadcast Command Center
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 font-semibold lowercase tracking-normal flex items-center gap-1">
                  <Clock className="w-3 h-3 text-red-400" />
                  {easternTime.formattedTime}
                </span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white italic">
              Listen. Discover. <span className="text-red-500">Connect.</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-1">
              Continuous live broadcasts, curated South Asian music, cultural podcasts, and community stories across North America.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={openNyraAI}
              className="rounded-full bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 shadow-lg shadow-red-900/30 transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Ask Nyra AI
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 text-xs sm:text-sm px-4"
            >
              <Link href="/schedule">
                <Calendar className="w-4 h-4 mr-2 text-zinc-400" />
                Schedule
              </Link>
            </Button>
          </div>
        </div>

        {/* Dual Live Station Cards (Spotify + KEXP style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* STATION 1: HINDI */}
          <div
            className={cn(
              "group relative overflow-hidden rounded-2xl border transition-all duration-300 p-5 sm:p-6 backdrop-blur-md",
              isHindiActive && isPlaying
                ? "bg-zinc-900/90 border-red-500/80 shadow-[0_0_30px_rgba(239,68,68,0.25)]"
                : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"
            )}
          >
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
              {/* Cover Artwork & Equalizer */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-zinc-700/80 shadow-md bg-zinc-950">
                <img
                  src={liveHindi.image}
                  alt={`${liveHindi.title} - ${liveHindi.host}`}
                  key={liveHindi.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {isHindiActive && isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-1">
                    <span className="w-1.5 bg-red-500 rounded-full animate-[bounce_1s_infinite_100ms] h-6" />
                    <span className="w-1.5 bg-red-400 rounded-full animate-[bounce_1s_infinite_300ms] h-8" />
                    <span className="w-1.5 bg-amber-400 rounded-full animate-[bounce_1s_infinite_200ms] h-5" />
                    <span className="w-1.5 bg-red-500 rounded-full animate-[bounce_1s_infinite_400ms] h-7" />
                  </div>
                )}
                <div className="absolute top-1.5 left-1.5">
                  <Badge className="bg-red-600/90 hover:bg-red-600 text-white font-black text-[9px] uppercase tracking-wider px-1.5 py-0.5 border-none">
                    HD4
                  </Badge>
                </div>
                <div className="absolute bottom-1.5 right-1.5">
                  <span className="bg-black/80 backdrop-blur-xs text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded text-zinc-300">
                    {liveHindi.tag}
                  </span>
                </div>
              </div>

              {/* Station Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-400">
                    Hindi Broadcast
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-[10px] font-semibold text-zinc-400 truncate">
                    99.9 FM-HD4 • 101.9 FM • 1490 AM
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white truncate group-hover:text-red-400 transition-colors">
                  {isHindiActive && metadata?.title ? metadata.title : liveHindi.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium truncate mt-0.5">
                  Hosted by {liveHindi.host} • <span className="text-amber-400 font-bold">{liveHindi.timeRange}</span>
                </p>
                <div className="flex items-center gap-2 mt-3 text-[11px] text-zinc-400">
                  <Music2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="truncate">{liveHindi.description}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 w-full sm:w-auto pt-2 sm:pt-0">
                <Button
                  onClick={() => handleStationClick(STATIONS.Hindi.id)}
                  size="lg"
                  className={cn(
                    "w-full sm:w-auto rounded-full font-black uppercase tracking-wider text-xs px-6 py-6 transition-all shadow-md cursor-pointer",
                    isHindiActive && isPlaying
                      ? "bg-zinc-800 hover:bg-zinc-700 text-white border border-red-500/50"
                      : "bg-red-600 hover:bg-red-500 text-white hover:scale-105 shadow-red-900/30"
                  )}
                >
                  {isHindiActive && isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 mr-2 fill-current" />
                      Pause Live
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2 fill-current" />
                      Listen Live
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* STATION 2: TELUGU */}
          <div
            className={cn(
              "group relative overflow-hidden rounded-2xl border transition-all duration-300 p-5 sm:p-6 backdrop-blur-md",
              isTeluguActive && isPlaying
                ? "bg-zinc-900/90 border-amber-500/80 shadow-[0_0_30px_rgba(245,158,11,0.25)]"
                : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"
            )}
          >
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
              {/* Cover Artwork & Equalizer */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-zinc-700/80 shadow-md bg-zinc-950">
                <img
                  src={liveTelugu.image}
                  alt={`${liveTelugu.title} - ${liveTelugu.host}`}
                  key={liveTelugu.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {isTeluguActive && isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-1">
                    <span className="w-1.5 bg-amber-500 rounded-full animate-[bounce_1s_infinite_100ms] h-6" />
                    <span className="w-1.5 bg-amber-400 rounded-full animate-[bounce_1s_infinite_300ms] h-8" />
                    <span className="w-1.5 bg-red-400 rounded-full animate-[bounce_1s_infinite_200ms] h-5" />
                    <span className="w-1.5 bg-amber-500 rounded-full animate-[bounce_1s_infinite_400ms] h-7" />
                  </div>
                )}
                <div className="absolute top-1.5 left-1.5">
                  <Badge className="bg-amber-500/90 hover:bg-amber-500 text-black font-black text-[9px] uppercase tracking-wider px-1.5 py-0.5 border-none">
                    HD3
                  </Badge>
                </div>
                <div className="absolute bottom-1.5 right-1.5">
                  <span className="bg-black/80 backdrop-blur-xs text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded text-amber-300">
                    {liveTelugu.tag}
                  </span>
                </div>
              </div>

              {/* Station Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    Telugu Broadcast
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-[10px] font-semibold text-zinc-400">
                    99.9 FM-HD3
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white truncate group-hover:text-amber-400 transition-colors">
                  {isTeluguActive && metadata?.title ? metadata.title : liveTelugu.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium truncate mt-0.5">
                  Hosted by {liveTelugu.host} • <span className="text-amber-400 font-bold">{liveTelugu.timeRange}</span>
                </p>
                <div className="flex items-center gap-2 mt-3 text-[11px] text-zinc-400">
                  <Music2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{liveTelugu.description}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 w-full sm:w-auto pt-2 sm:pt-0">
                <Button
                  onClick={() => handleStationClick(STATIONS.Telugu.id)}
                  size="lg"
                  className={cn(
                    "w-full sm:w-auto rounded-full font-black uppercase tracking-wider text-xs px-6 py-6 transition-all shadow-md cursor-pointer",
                    isTeluguActive && isPlaying
                      ? "bg-zinc-800 hover:bg-zinc-700 text-white border border-amber-500/50"
                      : "bg-amber-500 hover:bg-amber-400 text-black hover:scale-105 shadow-amber-900/30"
                  )}
                >
                  {isTeluguActive && isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 mr-2 fill-current" />
                      Pause Live
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2 fill-current" />
                      Listen Live
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery & Live Banner Ticker */}
        <div className="mt-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-black text-[10px] uppercase tracking-wider">
              On Air Now
            </span>
            <span className="text-zinc-300 font-medium truncate">
              {liveHindi.title} on HD4 &bull; {liveTelugu.title} on HD3 &bull; Broadcasting 24/7 across Raleigh-Durham & online.
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400 shrink-0">
            <button
              onClick={openNyraAI}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ask who's playing
            </button>
            <span className="text-zinc-700">|</span>
            <Link
              href="/schedule"
              className="hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              View Full Schedule
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
