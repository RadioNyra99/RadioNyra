"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Users,
  ChevronUp,
  ChevronDown,
  Loader2,
  AlertCircle,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAudio } from "@/components/audio-context"
import { getStationsList } from "@/lib/stations"
import { trackAudioError, trackEvent } from "@/lib/analytics"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * Persistent mini-player.
 *
 * The `<audio>` element lives outside the visibility conditional so hiding or
 * collapsing the bar never stops a stream that is already playing, and route
 * changes never create a second audio element. Nothing is played until the
 * visitor presses play.
 */
export function AudioPlayer() {
  const {
    isPlaying,
    currentStation,
    volume,
    isMuted,
    isLoading,
    error,
    togglePlay,
    play,
    pause,
    toggleMute,
    setVolume,
    playStation,
    setIsLoading,
    setError,
    metadata,
  } = useAudio()

  const [isVisible, setIsVisible] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const retryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const retryCountRef = useRef(0)
  const lastStartedStationRef = useRef<string | null>(null)
  // Armed when *we* pause the element (or swap the station), so the
  // onPause handler can tell a programmatic pause apart from an external one.
  const externalPauseGuardRef = useRef(false)

  const stations = getStationsList()

  // Media Session API — background and lock-screen controls
  useEffect(() => {
    if (typeof navigator === "undefined" || !("mediaSession" in navigator)) return

    navigator.mediaSession.metadata = new MediaMetadata({
      title: metadata.title || `${currentStation.name} Live`,
      artist: "Radio Nyra",
      album: currentStation.name,
      artwork: [
        { src: metadata.artwork || "/images/radio-nyra-logo.jpg", sizes: "96x96", type: "image/jpeg" },
        { src: metadata.artwork || "/images/radio-nyra-logo.jpg", sizes: "192x192", type: "image/jpeg" },
        { src: metadata.artwork || "/images/radio-nyra-logo.jpg", sizes: "512x512", type: "image/jpeg" },
      ],
    })

    navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused"

    const safeHandler = (action: MediaSessionAction, handler: () => void) => {
      try {
        navigator.mediaSession.setActionHandler(action, handler)
      } catch {
        /* some browsers do not support every action */
      }
    }

    safeHandler("play", () => {
      play()
    })
    safeHandler("pause", () => {
      pause()
    })
    safeHandler("stop", () => {
      pause()
    })

    const currentIdx = stations.findIndex((s) => s.id === currentStation.id)
    safeHandler("nexttrack", () => {
      const next = stations[(currentIdx + 1) % stations.length]
      if (next) playStation(next.id)
    })
    safeHandler("previoustrack", () => {
      const prev = stations[(currentIdx - 1 + stations.length) % stations.length]
      if (prev) playStation(prev.id)
    })
  }, [currentStation, metadata, isPlaying, stations, play, pause, playStation])

  // Reveals the bar and applies the playback intent sent by the caller.
  useEffect(() => {
    const handleShowPlayer = (event: Event) => {
      setIsVisible(true)
      setIsCollapsed(false)
      const detail = (event as CustomEvent<{ toggle?: boolean }>).detail
      if (detail?.toggle) togglePlay()
      else play()
    }
    window.addEventListener("showAudioPlayer", handleShowPlayer)
    return () => window.removeEventListener("showAudioPlayer", handleShowPlayer)
  }, [togglePlay, play])

  // Sync audio element with state
  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    if (isPlaying) {
      const playPromise = el.play()
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.warn("Playback could not start (browser autoplay policy or network):", e)
        })
      }
    } else if (!el.paused) {
      // Only arm the guard when pausing will actually emit a pause event,
      // otherwise the flag would linger and swallow a later real pause.
      externalPauseGuardRef.current = true
      el.pause()
    }
  }, [isPlaying, currentStation])

  // External pause sync: the browser, OS media keys or a disconnected
  // headset can pause the element without touching app state. Without this,
  // the UI keeps showing "Pause" while no audio is audible.
  const handleElementPause = () => {
    if (externalPauseGuardRef.current) {
      externalPauseGuardRef.current = false
      return
    }
    if (isPlaying) pause()
  }
  const handleElementPlay = () => {
    // Browser-initiated resume (e.g. OS play button) — reflect it in state.
    externalPauseGuardRef.current = false
    if (!isPlaying) play()
  }

  // Changing the station swaps `src`, and the load algorithm emits a
  // synthetic pause even though the listener never asked for one.
  useEffect(() => {
    externalPauseGuardRef.current = true
  }, [currentStation.id])

  useEffect(() => {
    lastStartedStationRef.current = null
  }, [currentStation.id])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  const adjustVolume = (delta: number) => setVolume(volume + delta)

  const handleCanPlay = () => {
    setIsLoading(false)
    setError(null)
    retryCountRef.current = 0
    if (isPlaying && audioRef.current?.paused) {
      audioRef.current.play().catch(() => {})
    }
  }

  const handlePlaying = () => {
    setIsLoading(false)
    setError(null)
    retryCountRef.current = 0
    if (lastStartedStationRef.current !== currentStation.id) {
      lastStartedStationRef.current = currentStation.id
      trackEvent({
        category: "Audio",
        action: "audio_stream_started",
        label: currentStation.name,
        metadata: {
          stationId: currentStation.id,
          streamUrl: currentStation.streamUrl,
          timestamp: new Date().toISOString(),
        },
      })
    }
  }

  const handleError = () => {
    retryCountRef.current += 1
    const delay = Math.min(1000 * Math.pow(2, retryCountRef.current - 1), 16000)
    const message = `Connection interrupted. Reconnecting in ${(delay / 1000).toFixed(0)}s...`
    setError(message)
    trackAudioError(currentStation.name, message)
    setIsLoading(true)

    if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current)
    retryTimeoutRef.current = setTimeout(() => {
      const el = audioRef.current
      if (!el) return
      el.load()
      if (isPlaying) el.play().catch(() => {})
    }, delay)
  }

  useEffect(() => {
    return () => {
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current)
    }
  }, [])

  return (
    <>
      {/* Always mounted: hiding the bar below must never stop the stream */}
      <audio
        ref={audioRef}
        src={currentStation.streamUrl}
        preload="none"
        playsInline
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={handleCanPlay}
        onPlaying={handlePlaying}
        onWaiting={() => setIsLoading(true)}
        onError={handleError}
        onPause={handleElementPause}
        onPlay={handleElementPlay}
        aria-hidden
      />

      {!isVisible ? null : (
        <div className="fixed bottom-14 left-0 right-0 z-40 md:bottom-0 md:z-50 audio-player-slide-up">
          <div className="relative border-t border-border bg-background/95 shadow-[0_-8px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
            {/* Live indicator rail */}
            <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-primary/10">
              <div
                className={cn(
                  "h-full bg-primary transition-all duration-300",
                  isPlaying && !isLoading ? "w-full animate-pulse" : "w-0",
                )}
              />
            </div>

            <div className={cn("container mx-auto px-3 sm:px-4", isCollapsed ? "py-1.5" : "py-2 sm:py-2.5")}>
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Artwork + status */}
                <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
                  <div
                    className={cn(
                      "relative shrink-0 overflow-hidden rounded-lg border border-border bg-muted",
                      isCollapsed ? "h-8 w-8" : "h-10 w-10 sm:h-11 sm:w-11",
                    )}
                  >
                    <img
                      src={metadata.artwork}
                      alt=""
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                    {isLoading && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/55">
                        <Loader2 className="h-4 w-4 animate-spin text-white" aria-hidden />
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-widest text-primary">
                        <span className="h-1 w-1 animate-pulse rounded-full bg-primary" />
                        {error ? "Retry" : "Live"}
                      </span>
                      <span className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        {currentStation.name}
                      </span>
                    </div>

                    <p
                      className={cn(
                        "truncate font-semibold leading-tight",
                        isCollapsed ? "text-[11px]" : "text-xs sm:text-sm",
                      )}
                      aria-live="polite"
                    >
                      {error ? (
                        <span className="flex items-center gap-1 text-destructive">
                          <AlertCircle className="h-3 w-3 shrink-0" aria-hidden />
                          {error}
                        </span>
                      ) : (
                        metadata.title
                      )}
                    </p>

                    {!isCollapsed && metadata.listeners > 0 && !error ? (
                      <p className="hidden items-center gap-1 text-[10px] font-semibold text-muted-foreground sm:flex">
                        <Users className="h-3 w-3" aria-hidden />
                        {metadata.listeners} listening
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Transport */}
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
                  <div className={cn("hidden items-center gap-1 sm:flex", isCollapsed && "hidden")}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                      onClick={() => adjustVolume(-0.1)}
                      aria-label="Decrease volume"
                    >
                      <Volume1 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full text-foreground hover:bg-muted"
                      onClick={toggleMute}
                      aria-label={isMuted || volume === 0 ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="h-4.5 w-4.5 text-destructive" />
                      ) : (
                        <Volume2 className="h-4.5 w-4.5" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                      onClick={() => adjustVolume(0.1)}
                      aria-label="Increase volume"
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    onClick={togglePlay}
                    size="icon"
                    className={cn(
                      "shrink-0 cursor-pointer rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105 hover:bg-primary/90 active:scale-95",
                      isCollapsed ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11",
                    )}
                    aria-label={isPlaying ? "Pause the Radio Nyra live stream" : "Play the Radio Nyra live stream"}
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" aria-hidden />
                    ) : isPlaying ? (
                      <Pause className="fill-current" aria-hidden />
                    ) : (
                      <Play className="ml-0.5 fill-current" aria-hidden />
                    )}
                  </Button>
                </div>

                {/* Station + window controls */}
                <div className="flex shrink-0 items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-9 rounded-full border-border bg-background font-bold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary",
                          isCollapsed ? "hidden px-3 text-[10px] md:inline-flex" : "px-3 text-[10px] sm:px-4 sm:text-xs",
                        )}
                        aria-label="Choose a Radio Nyra station"
                      >
                        <span className="truncate max-w-[70px] sm:max-w-[180px]">{currentStation.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="max-h-[70vh] w-80 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-xl border-border p-2 shadow-xl custom-scrollbar"
                    >
                      <p className="px-3 pb-2 pt-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                        Choose station
                      </p>
                      {stations.map((station, index) => (
                        <Fragment key={station.id}>
                          {index === 2 && (
                            <div className="my-1.5 border-t border-border/50" />
                          )}
                          <DropdownMenuItem
                            onClick={() => playStation(station.id)}
                            className={cn(
                              "mb-1 cursor-pointer rounded-lg px-3 py-2.5 text-xs font-semibold last:mb-0",
                              currentStation.id === station.id
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                            )}
                          >
                            <span
                              className={cn(
                                "mr-2 h-2 w-2 shrink-0 rounded-full",
                                currentStation.id === station.id
                                  ? "bg-primary-foreground"
                                  : "border border-border",
                              )}
                            />
                            <span className="flex-1 truncate">{station.name}</span>
                          </DropdownMenuItem>
                        </Fragment>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsCollapsed((value) => !value)}
                    className="h-8 w-8 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                    aria-label={isCollapsed ? "Expand radio player" : "Collapse radio player"}
                    aria-expanded={!isCollapsed}
                  >
                    {isCollapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>

                  {/* Hides the bar only — the stream keeps playing */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsVisible(false)}
                    className="h-8 w-8 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                    aria-label="Hide the player (keeps playing)"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
