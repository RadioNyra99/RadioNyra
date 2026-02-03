"use client"

import { Play, Pause } from "lucide-react"
import { useAudio } from "@/components/audio-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { showAudioPlayer } from "@/lib/audio-player-utils"

export function MobileFab() {
    const { isPlaying, togglePlay } = useAudio()

    return (
        <div className="md:hidden fixed bottom-24 right-6 z-[60] flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <Button
                onClick={() => {
                    showAudioPlayer();
                    if (!isPlaying) togglePlay();
                }}
                size="icon"
                className={cn(
                    "h-14 w-14 rounded-full shadow-2xl transition-all active:scale-90 border-2 border-white/20",
                    isPlaying ? "bg-primary animate-pulse" : "bg-primary"
                )}
            >
                {isPlaying ? (
                    <Pause className="h-6 w-6 text-primary-foreground fill-current" />
                ) : (
                    <Play className="h-6 w-6 text-primary-foreground fill-current ml-1" />
                )}
                <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
            </Button>

            {/* Visual pulse effect when playing */}
            {isPlaying && (
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 -z-10" />
            )}
        </div>
    )
}
