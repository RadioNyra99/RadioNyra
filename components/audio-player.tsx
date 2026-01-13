"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Radio, Volume2, VolumeX, Volume1, Users, ChevronUp, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAudio } from "@/components/audio-context"
import { getStationsList } from "@/lib/stations"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AudioPlayer() {
  const {
    isPlaying,
    currentStation,
    volume,
    isMuted,
    isLoading,
    error,
    togglePlay,
    toggleMute,
    setVolume,
    playStation,
    setIsLoading,
    setError,
    metadata
  } = useAudio()

  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Get stations list for UI
  const stations = getStationsList()

  useEffect(() => {
    // Listen for custom event to show player
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
        // Attempt play
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(e => {
            console.error("Playback failed (likely autoplay policy):", e)
            // If autoplay failed, we might need user interaction.
            // But if it's a stream error, onError will catch it.
          })
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentStation]) // Re-run when station changes

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const adjustVolume = (delta: number) => {
    setVolume(volume + delta)
  }

  // Audio Event Handlers for Robustness
  const handleLoadStart = () => setIsLoading(true)

  const handleCanPlay = () => {
    setIsLoading(false)
    setError(null)
    if (isPlaying && audioRef.current?.paused) {
      audioRef.current.play().catch(() => { })
    }
  }

  const handlePlaying = () => {
    setIsLoading(false)
    setError(null)
  }

  const handleWaiting = () => setIsLoading(true)

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    console.error("Audio Error:", e)
    setError("Connection lost. Reconnecting...")
    setIsLoading(true)

    // Auto-reconnection logic
    if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current)

    retryTimeoutRef.current = setTimeout(() => {
      if (audioRef.current) {
        console.log("Retrying stream connection...")
        audioRef.current.load() // Reloads the source
        if (isPlaying) audioRef.current.play().catch(() => { })
      }
    }, 3000) // Retry after 3 seconds
  }

  // Cleanup retry timeout
  useEffect(() => {
    return () => {
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 audio-player-slide-up animate-in slide-in-from-bottom duration-500">
      <audio
        ref={audioRef}
        src={currentStation.streamUrl}
        preload="none"
        playsInline
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onPlaying={handlePlaying}
        onWaiting={handleWaiting}
        onError={handleError}
      />

      <div className="relative bg-background/95 text-foreground shadow-[0_-8px_40px_rgba(0,0,0,0.15)] border-t border-primary/10 backdrop-blur-xl">
        {/* Live Indicator Bar */}
        <div className="absolute top-0 left-0 h-[2px] bg-primary/10 w-full overflow-hidden">
          <div className={cn("h-full bg-primary transition-all duration-300", isPlaying && !isLoading ? "w-full animate-pulse" : "w-0")} />
        </div>

        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-3 md:gap-6">

            {/* Left: Station & Metadata Info */}
            <div className="flex items-center gap-3 min-w-0 flex-1 md:flex-initial">
              <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-lg overflow-hidden border border-primary/10 flex-shrink-0 group bg-muted shadow-sm">
                <img
                  src={metadata.artwork}
                  alt="Now Playing"
                  className={cn("w-full h-full object-cover transition-transform duration-500", isLoading ? "scale-90 opacity-50" : "group-hover:scale-110")}
                />

                {/* Loading / Playing Overlays */}
                {isLoading && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  </div>
                )}

                {!isLoading && isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex items-center gap-0.5 h-3">
                      <div className="w-0.5 md:w-1 bg-white rounded-full animate-bounce h-1.5 md:h-2" style={{ animationDelay: "0s" }} />
                      <div className="w-0.5 md:w-1 bg-white rounded-full animate-bounce h-3 md:h-4" style={{ animationDelay: "0.1s" }} />
                      <div className="w-0.5 md:w-1 bg-white rounded-full animate-bounce h-1.5 md:h-2" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="flex items-center gap-1 md:gap-1.5 px-1.5 py-0.5 bg-red-500/10 text-red-500 rounded-full shrink-0">
                    <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                      Live 🏺
                    </span>
                  </div>
                  <span className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-[0.1em] md:tracking-[0.2em] truncate">{currentStation.name}</span>
                </div>

                <h3 className="font-bold text-xs md:text-base uppercase tracking-tight truncate leading-tight">
                  {error ? <span className="text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {error}</span> : metadata.title}
                </h3>

                {metadata.listeners > 0 && !error && (
                  <p className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                    <Users className="w-3 h-3 inline mr-1" /> {metadata.listeners} Listening
                  </p>
                )}
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
                {isLoading ? <Loader2 className="h-6 w-6 md:h-8 md:w-8 animate-spin" /> : (isPlaying ? <Pause className="h-6 w-6 md:h-8 md:w-8 fill-current" /> : <Play className="h-6 w-6 md:h-8 md:w-8 fill-current ml-0.5 md:ml-1" />)}
              </Button>

            </div>

            {/* Right: Language Dropdown (Menu Style) */}
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-10 px-4 md:px-6 rounded-full border-border/50 bg-background/50 hover:bg-primary hover:text-white transition-all duration-300 font-bold uppercase tracking-wider text-xs md:text-sm shadow-sm group"
                  >
                    <span className="mr-2 hidden md:inline opacity-70 group-hover:opacity-100">Language:</span>
                    {currentStation.name}
                    <ChevronUp className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 max-h-[60vh] overflow-y-auto custom-scrollbar bg-background/95 backdrop-blur-xl border-border/50 shadow-2xl p-2 rounded-xl">
                  {stations.map((station) => (
                    <DropdownMenuItem
                      key={station.id}
                      onClick={() => playStation(station.id)}
                      className={cn(
                        "cursor-pointer font-bold uppercase tracking-wider text-xs py-2.5 px-3 rounded-lg focus:bg-primary/10 focus:text-primary transition-colors mb-1 last:mb-0",
                        currentStation.id === station.id ? "bg-primary text-white focus:bg-primary focus:text-white" : "text-muted-foreground"
                      )}
                    >
                      <Radio className={cn("mr-2 h-3.5 w-3.5", currentStation.id === station.id ? "animate-pulse" : "opacity-0")} />
                      {station.name}
                      {currentStation.id === station.id && metadata.listeners > 0 && (
                        <span className="ml-auto text-[9px] opacity-70">{metadata.listeners} Listening</span>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
