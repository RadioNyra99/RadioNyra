"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { showAudioPlayer } from "../lib/audio-player-utils"
import { cn } from "@/lib/utils"

export function ListenLiveButton({ className }: { className?: string }) {
  return (
    <Button
      onClick={showAudioPlayer}
      size="lg"
      className={cn(
        "h-14 px-8 text-base relative bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md",
        className,
      )}
    >
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full live-dot" />
      <Play className="mr-2 h-5 w-5 fill-current" /> Listen Live Now
    </Button>
  )
}
