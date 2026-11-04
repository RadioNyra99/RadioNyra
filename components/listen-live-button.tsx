"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { showAudioPlayer } from "@/lib/audio-player-utils"
import { trackListenLive } from "@/lib/analytics"
import { STATIONS } from "@/lib/stations"
import { cn } from "@/lib/utils"

interface ListenLiveButtonProps {
  className?: string
  stationId?: string
  language?: "Hindi" | "Telugu"
  children?: React.ReactNode
}

export function ListenLiveButton({
  className,
  stationId = STATIONS.Hindi.id,
  language = "Hindi",
  children,
}: ListenLiveButtonProps) {
  const handleClick = () => {
    trackListenLive(language === "Telugu" ? STATIONS.Telugu.name : STATIONS.Hindi.name, language)
    showAudioPlayer({
      stationId: stationId || (language === "Telugu" ? STATIONS.Telugu.id : STATIONS.Hindi.id),
      toggle: false,
    })
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className={cn(
        "h-14 px-8 text-base relative bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md",
        className,
      )}
      aria-label={`Listen live to Radio Nyra ${language}`}
    >
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full live-dot" />
      <Play className="mr-2 h-5 w-5 fill-current" />
      {children || `Listen Live ${language}`}
    </Button>
  )
}
