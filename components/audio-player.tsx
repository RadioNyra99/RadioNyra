"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Radio, Volume2, VolumeX, Volume1 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAudio } from "@/components/audio-context"
import { getStationsList } from "@/lib/stations"

export function AudioPlayer() {
  const {
    isPlaying,
    currentStation,
    volume,
    isMuted,
    togglePlay,
    toggleMute,
    setVolume,
    playStation,
    metadata
  } = useAudio()

  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Get stations list for UI
  const stations = getStationsList()

  useEffect(() => {
    // Listen for custom event to show player (keeping legacy compatibility just in case)
    const handleShowPlayer = () => {
      setIsVisible(true)
      if (!isPlaying) togglePlay()
    }

    window.addEventListener("showAudioPlayer", handleShowPlayer)
    return () => window.removeEventListener("showAudioPlayer", handleShowPlayer)
  }, [isPlaying, togglePlay])

  // Sync audio element with state
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(e => console.error("Playback failed:", e))
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentStation]) // Re-run when station changes (src updates below)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const adjustVolume = (delta: number) => {
    setVolume(volume + delta)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 audio-player-slide-up animate-in slide-in-from-bottom duration-500">
      <audio
        ref={audioRef}
        src={currentStation.streamUrl}
        preload="auto"
      />

      <div className="relative bg-background/95 text-foreground shadow-[0_-8px_40px_rgba(0,0,0,0.15)] border-t border-primary/10 backdrop-blur-xl">
        {/* Live Indicator Bar */}
        <div className="absolute top-0 left-0 h-[2px] bg-primary/10 w-full overflow-hidden">
          <div className={cn("h-full bg-primary transition-all duration-300", isPlaying ? "w-full animate-pulse" : "w-0")} />
        </div>

        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-3 md:gap-6">

            {/* Left: Station & Metadata Info */}
            <div className="flex items-center gap-3 min-w-0 flex-1 md:flex-initial">
              <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-lg overflow-hidden border border-primary/10 flex-shrink-0 group bg-muted shadow-sm">
                <img
                  src={metadata.artwork}
                  alt="Now Playing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex items-center gap-0.5 h-3">
                      <div className="w-0.5 md:w-1 bg-white rounded-full animate-bounce h-1.5 md:h-2" style={{ animationDelay: "0s" }} />
                      <div className="w-0.5 md:w-1 bg-white rounded-full animate-bounce h-3 md:h-4" style={{ animationDelay: "0.1s" }} />
                      <div className="w-0.5 md:w-1 bg-white rounded-full animate-bounce h-1.5 md:h-2" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="flex items-center gap-1 md:gap-1.5 px-1.5 py-0.5 bg-red-500/10 text-red-500 rounded-full shrink-0">
                    <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest">Live</span>
                  </div>
                  <span className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-[0.1em] md:tracking-[0.2em] truncate">{currentStation.name}</span>
                  {metadata.listeners > 0 && (
                    <span className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-2">
                      <Users className="w-3 h-3 inline mr-1" /> {metadata.listeners} Listening
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-xs md:text-base uppercase tracking-tight truncate leading-tight">
                  {metadata.title}
                </h3>
              </div>
            </div>

            {/* Middle: Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Volume Controls (Desktop) */}
              <div className="flex items-center gap-1 md:gap-2 mr-1 md:mr-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 md:h-10 md:w-10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 hidden sm:flex"
                  onClick={() => adjustVolume(-0.1)}
                >
                  <Volume1 className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 md:h-11 md:w-11 rounded-full text-foreground hover:bg-muted"
                  onClick={toggleMute}
                >
                  {isMuted || volume === 0 ? <VolumeX className="h-5 w-5 md:h-6 md:w-6 text-red-500" /> : <Volume2 className="h-5 w-5 md:h-6 md:w-6" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 md:h-10 md:w-10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 hidden sm:flex"
                  onClick={() => adjustVolume(0.1)}
                >
                  <Volume2 className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>

              <Button
                onClick={togglePlay}
                size="icon"
                className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg hover:scale-105 active:scale-95 transition-all outline-none ring-primary/20 hover:ring-4 md:hover:ring-8 shrink-0"
              >
                {isPlaying ? <Pause className="h-6 w-6 md:h-8 md:w-8 fill-current" /> : <Play className="h-6 w-6 md:h-8 md:w-8 fill-current ml-0.5 md:ml-1" />}
              </Button>

            </div>

            {/* Right: Station Switcher (Desktop & Mobile Unified or responsive) */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-1 bg-muted/50 p-1.5 rounded-full border border-border shadow-inner">
                {stations.map((station) => (
                  <button
                    key={station.id}
                    onClick={() => playStation(station.id)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2 text-[11px] font-black uppercase tracking-wider rounded-full transition-all duration-300",
                      currentStation.id === station.id
                        ? "bg-primary text-white shadow-lg active:scale-95"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                    )}
                  >
                    <Radio className={cn("h-3 w-3", currentStation.id === station.id ? "animate-pulse" : "")} />
                    {station.name.replace(" Station", "")}
                  </button>
                ))}
              </div>

              {/* Mobile Station Toggles (simplified) */}
              <div className="md:hidden flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border/50">
                {stations.map((station) => (
                  <button
                    key={station.id}
                    onClick={() => playStation(station.id)}
                    className={cn(
                      "w-10 h-10 flex flex-col items-center justify-center rounded-full transition-all",
                      currentStation.id === station.id
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Radio className="h-3 w-3 mb-0.5" />
                    <span className="text-[7px] font-white uppercase">{station.name.substring(0, 3)}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
