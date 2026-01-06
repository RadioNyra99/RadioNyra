"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, SkipBack, SkipForward, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Track {
  title: string
  url: string
  language: string
  show?: string
}

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<string>("Hindi")
  const [playlist, setPlaylist] = useState<Track[]>([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const languages = ["Hindi", "Telugu", "Tamil", "English"]

  // Fetch playlist based on language
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`/data/playlists/${currentLanguage.toLowerCase()}.json`)
        const data = await response.json()
        setPlaylist(data)
        setCurrentTrackIndex(0) // Reset to first track when language changes
      } catch (error) {
        console.error("Failed to fetch playlist:", error)
      }
    }

    fetchPlaylist()
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
  }, [isPlaying, playlist, currentTrackIndex])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextTrack = () => {
    if (playlist.length === 0) return
    const nextIndex = (currentTrackIndex + 1) % playlist.length
    setCurrentTrackIndex(nextIndex)
    setIsPlaying(true)
  }

  const prevTrack = () => {
    if (playlist.length === 0) return
    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length
    setCurrentTrackIndex(prevIndex)
    setIsPlaying(true)
  }

  const handleTrackEnded = () => {
    nextTrack()
  }

  const changeLanguage = (lang: string) => {
    if (lang === currentLanguage) return
    setCurrentLanguage(lang)
    setIsPlaying(true) // Start playing automatically on language change
  }

  if (!isVisible) return null

  const currentTrack = playlist[currentTrackIndex]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 audio-player-slide-up animate-in slide-in-from-bottom duration-500">
      {currentTrack && (
        <audio
          ref={audioRef}
          src={currentTrack.url}
          preload="auto"
          onEnded={handleTrackEnded}
        />
      )}

      <div className="relative bg-background/95 text-foreground shadow-[0_-8px_40px_rgba(0,0,0,0.1)] border-t border-primary/20 backdrop-blur-xl">
        {/* Progress Bar (Visual Only for now) */}
        <div className="absolute top-0 left-0 h-[2px] bg-primary/20 w-full">
          <div className={cn("h-full bg-primary transition-all duration-300", isPlaying ? "w-full duration-[180s] ease-linear" : "w-0")} />
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left: Station & Track Info */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-primary/20 flex-shrink-0 group">
                <img
                  src="/images/radio-nyra-logo.jpg"
                  alt="Radio Nyra"
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
                <h3 className="font-bold text-sm md:text-base uppercase tracking-tight truncate leading-tight">
                  {currentTrack?.title || "Loading..."}
                </h3>
                <div className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest">
                  <span className="text-primary">{currentTrack?.language}</span>
                  {currentTrack?.show && (
                    <>
                      <span>•</span>
                      <span className="truncate">{currentTrack.show}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Middle: Controls */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={prevTrack} className="hover:text-primary transition-colors h-8 w-8">
                  <SkipBack className="h-5 w-5 fill-current" />
                </Button>

                <Button
                  onClick={togglePlay}
                  size="icon"
                  className="h-12 w-12 rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  {isPlaying ? <Pause className="h-6 w-6 fill-current" /> : <Play className="h-6 w-6 fill-current ml-1" />}
                </Button>

                <Button variant="ghost" size="icon" onClick={nextTrack} className="hover:text-primary transition-colors h-8 w-8">
                  <SkipForward className="h-5 w-5 fill-current" />
                </Button>
              </div>
            </div>

            {/* Right: Language Switching & Close */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-end">
              <div className="hidden lg:flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={cn(
                      "px-3 py-1 text-[10px] font-black uppercase tracking-tighter rounded-full transition-all",
                      currentLanguage === lang
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Mobile Language Selector (Simple Toggle Icon for example) */}
              <div className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-primary" onClick={() => {
                  const nextLangIdx = (languages.indexOf(currentLanguage) + 1) % languages.length;
                  changeLanguage(languages[nextLangIdx]);
                }}>
                  <Globe className="h-5 w-5" />
                </Button>
              </div>

              <div className="h-8 w-[1px] bg-border hidden md:block" />

              <Button
                onClick={() => {
                  setIsVisible(false)
                  setIsPlaying(false)
                }}
                variant="ghost"
                size="sm"
                className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground h-8"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
