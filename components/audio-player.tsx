"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Globe, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Station {
  id: string
  name: string
  streamUrl: string
  statusUrl: string
}

const STATIONS: Record<string, Station> = {
  Hindi: {
    id: "s8d06d0298",
    name: "Hindi Station",
    streamUrl: "https://streams.radio.co/s8d06d0298/listen",
    statusUrl: "https://public.radio.co/stations/s8d06d0298/status"
  },
  Telugu: {
    id: "sefba541aa",
    name: "Telugu Station",
    streamUrl: "https://s4.radio.co/sefba541aa/listen",
    statusUrl: "https://public.radio.co/stations/sefba541aa/status"
  }
}

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [currentLanguage, setCurrentLanguage] = useState<string>("Hindi")
  const [metadata, setMetadata] = useState<{ title: string; artwork: string }>({
    title: "Live Stream",
    artwork: "/images/radio-nyra-logo.jpg"
  })

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const languages = Object.keys(STATIONS)

  // Fetch metadata from Radio.co
  const fetchMetadata = async (lang: string) => {
    try {
      const response = await fetch(STATIONS[lang].statusUrl)
      const data = await response.json()
      if (data && data.current_track) {
        setMetadata({
          title: data.current_track.title || "Live Stream",
          artwork: data.current_track.artwork_url_large || data.current_track.artwork_url || "/images/radio-nyra-logo.jpg"
        })
      }
    } catch (error) {
      console.error("Failed to fetch metadata:", error)
    }
  }

  // Initial metadata fetch and polling
  useEffect(() => {
    fetchMetadata(currentLanguage)
    const interval = setInterval(() => fetchMetadata(currentLanguage), 30000) // Poll every 30 seconds
    return () => clearInterval(interval)
  }, [currentLanguage])

  useEffect(() => {
    // Listen for custom event to show player
    const handleShowPlayer = () => {
      setIsVisible(true)
      setIsPlaying(true)
    }

    window.addEventListener("showAudioPlayer", handleShowPlayer)
    return () => window.removeEventListener("showAudioPlayer", handleShowPlayer)
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed:", e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentLanguage])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const changeLanguage = (lang: string) => {
    if (lang === currentLanguage) return
    setIsPlaying(false)
    setCurrentLanguage(lang)
    // Small delay to ensure stream URL updates before playing
    setTimeout(() => setIsPlaying(true), 100)
  }

  if (!isVisible) return null

  const activeStation = STATIONS[currentLanguage]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 audio-player-slide-up animate-in slide-in-from-bottom duration-500">
      <audio
        ref={audioRef}
        src={activeStation.streamUrl}
        preload="auto"
      />

      <div className="relative bg-background/95 text-foreground shadow-[0_-8px_40px_rgba(0,0,0,0.1)] border-t border-primary/20 backdrop-blur-xl">
        {/* Live Indicator Bar */}
        <div className="absolute top-0 left-0 h-[2px] bg-primary/20 w-full overflow-hidden">
          <div className={cn("h-full bg-primary transition-all duration-300", isPlaying ? "w-full animate-pulse" : "w-0")} />
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left: Station & Metadata Info */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-primary/20 flex-shrink-0 group bg-muted">
                <img
                  src={metadata.artwork}
                  alt="Now Playing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex items-center gap-0.5 h-4">
                      <div className="w-1 bg-white rounded-full animate-bounce h-2" style={{ animationDelay: "0s" }} />
                      <div className="w-1 bg-white rounded-full animate-bounce h-4" style={{ animationDelay: "0.1s" }} />
                      <div className="w-1 bg-white rounded-full animate-bounce h-2" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-red-500/10 text-red-500 rounded-full">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Live</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{activeStation.name}</span>
                </div>
                <h3 className="font-bold text-sm md:text-base uppercase tracking-tight truncate leading-tight">
                  {metadata.title}
                </h3>
              </div>
            </div>

            {/* Middle: Controls */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <Button
                  onClick={togglePlay}
                  size="icon"
                  className="h-14 w-14 rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl hover:scale-105 active:scale-95 transition-all outline-none ring-primary/20 hover:ring-8"
                >
                  {isPlaying ? <Pause className="h-7 w-7 fill-current" /> : <Play className="h-7 w-7 fill-current ml-1" />}
                </Button>
              </div>
            </div>

            {/* Right: Station Switching & Close */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-end">
              <div className="hidden md:flex items-center gap-1 bg-muted/50 p-1.5 rounded-full border border-border">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={cn(
                      "px-4 py-1.5 text-[10px] font-black uppercase tracking-tight rounded-full transition-all",
                      currentLanguage === lang
                        ? "bg-primary text-white shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Mobile Station Selector */}
              <div className="md:hidden">
                <Button variant="outline" size="sm" className="rounded-full gap-2 font-black text-[10px] uppercase tracking-widest" onClick={() => {
                  const nextLangIdx = (languages.indexOf(currentLanguage) + 1) % languages.length;
                  changeLanguage(languages[nextLangIdx]);
                }}>
                  <Globe className="h-3.5 w-3.5" />
                  {currentLanguage}
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
