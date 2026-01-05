"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // URL for the radio stream - Replace with your actual stream URL
  const STREAM_URL = "https://stream.zeno.fm/s5q5036z108uv" // Example stream

  useEffect(() => {
    // Listen for custom event to show player
    const handleShowPlayer = () => {
      setIsVisible(true)
      // Auto-play when opened
      setIsPlaying(true)
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.error("Playback failed:", e))
      }
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
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 audio-player-slide-up">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />
      <div className="relative bg-background/80 text-foreground shadow-[0_-8px_40px_rgba(0,0,0,0.08)] border-t border-border backdrop-blur-2xl overflow-hidden">
        {/* Subtle ambient glows */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 py-5 relative z-10">
          <div className="flex items-center justify-between gap-4">
            {/* Album Art with Wave Animation */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg flex-shrink-0 border border-border">
                <div className="absolute inset-0 bg-muted flex items-center justify-center backdrop-blur-sm">
                  {isPlaying ? (
                    <div className="flex items-center gap-0.5 h-8">
                      <div className="w-1.5 bg-primary rounded-full wave-bar" style={{ animationDelay: "0s" }} />
                      <div className="w-1.5 bg-primary rounded-full wave-bar" style={{ animationDelay: "0.1s" }} />
                      <div className="w-1.5 bg-primary rounded-full wave-bar" style={{ animationDelay: "0.2s" }} />
                      <div className="w-1.5 bg-primary rounded-full wave-bar" style={{ animationDelay: "0.3s" }} />
                      <div className="w-1.5 bg-primary rounded-full wave-bar" style={{ animationDelay: "0.4s" }} />
                    </div>
                  ) : (
                    <Volume2 className="h-7 w-7 text-primary" />
                  )}
                </div>
                {isPlaying && <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full live-pulse" />}
              </div>

              {/* Station Info */}
              <div className="hidden sm:block">
                <p className="font-bold text-base text-foreground">Radio Nyra - Live Stream</p>
                <p className="text-xs text-muted-foreground">Broadcasting 24/7</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <Button
                onClick={togglePlay}
                size="icon"
                className="h-14 w-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:scale-105 transition-all duration-300"
              >
                {isPlaying ? <Pause className="h-6 w-6 fill-current" /> : <Play className="h-6 w-6 fill-current" />}
              </Button>

              <Button
                onClick={() => {
                  setIsVisible(false)
                  setIsPlaying(false) // Stop playing when closed
                }}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-muted text-xs border border-border"
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
