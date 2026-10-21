"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Pause, Play, CalendarDays, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { cn } from "@/lib/utils"
import { getLiveHindiShow, getLiveTeluguShow, getEasternTime, type LiveShowInfo, type EasternTime } from "@/lib/live-schedule-service"

/**
 * Live radio hero ΓÇö the first thing a visitor sees.
 *
 * One short headline, two clear listen actions and the channel preview cards
 * that show what is on air right now. All show data comes from the shared
 * Eastern-Time schedule service so nothing here can drift out of date, and an
 * honest fallback is shown when a slot has no presenter of record.
 */

function ShowNowCard({
  show,
  active,
  playing,
  onPlay,
  badgeLabel,
  accentClass,
}: {
  show: LiveShowInfo
  active: boolean
  playing: boolean
  onPlay: () => void
  badgeLabel: string
  accentClass: string
}) {
  const hostLabel = show.host && show.host.trim().length > 0 ? show.host : "Radio Nyra"

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border p-4 backdrop-blur-md transition-all sm:flex-row sm:items-center sm:p-5",
        active && playing
          ? `border-white/25 bg-white/[0.07] shadow-[0_10px_40px_rgba(0,0,0,0.35)]`
          : "border-white/10 bg-white/[0.04] hover:border-white/20",
      )}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-black sm:h-24 sm:w-24">
        <img
          src={show.image}
          alt={`${show.title} on ${show.station === "hindi" ? "Radio Nyra Hindi" : "Radio Nyra Telugu"}`}
          loading="lazy"
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
        <span
          className={cn(
            "absolute left-1.5 top-1.5 rounded px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider",
            accentClass,
          )}
        >
          {badgeLabel}
        </span>
        {active && playing && (
          <span className="absolute inset-0 flex items-center justify-center gap-1 bg-black/45">
            <span className="h-3 w-1 animate-[waveAnimation_0.8s_ease-in-out_infinite] rounded-full bg-white" />
            <span className="h-5 w-1 animate-[waveAnimation_0.8s_ease-in-out_infinite_150ms] rounded-full bg-white" />
            <span className="h-2 w-1 animate-[waveAnimation_0.8s_ease-in-out_infinite_300ms] rounded-full bg-white" />
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/50">
          {show.station === "hindi" ? "Hindi · 99.9 FM HD4" : "Telugu · 99.9 FM HD3"}
        </p>
        <h3 className="mt-1 truncate text-lg font-extrabold tracking-tight text-white sm:text-xl">
          {show.title}
        </h3>
        <p className="mt-0.5 truncate text-sm text-white/60">
          {hostLabel} · <span className="text-white/80">{show.timeRange}</span>
        </p>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/45">{show.description}</p>
      </div>

      <Button
        onClick={onPlay}
        className={cn(
          "h-11 w-full shrink-0 rounded-full px-6 text-xs font-bold uppercase tracking-wider sm:w-auto",
          active
            ? "bg-white text-black hover:bg-white/90"
            : "bg-primary text-white hover:bg-primary/90",
        )}
        aria-label={active && playing ? `Pause ${show.title}` : `Listen to ${show.title}`}
      >
        {active && playing ? (
          <>
            <Pause className="mr-2 h-4 w-4 fill-current" /> Pause
          </>
        ) : (
          <>
            <Play className="mr-2 h-4 w-4 fill-current" /> Listen
          </>
        )}
      </Button>
    </div>
  )
}

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
    if (currentStation.id === stationId) togglePlay()
    else playStation(stationId)
  }

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(1000px 500px at 15% -10%, rgba(217,36,28,0.35), transparent 60%), radial-gradient(800px 420px at 85% 0%, rgba(245,158,11,0.22), transparent 60%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-6 -z-10 select-none text-[22vw] font-extrabold leading-none tracking-tighter text-white/[0.15]"
      >
        NYRA
      </span>

      <div className="container mx-auto px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 md:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Headline + actions */}
          <div className="max-w-xl">
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-primary">On Air</span>
              </span>
              <span aria-hidden className="text-white/25">&middot;</span>
              Radio Nyra
              <span aria-hidden className="text-white/25">&middot;</span>
              <span className="font-semibold normal-case tracking-normal text-white/50">
                {easternTime.formattedTime}
              </span>
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Your world.
              <br />
              Your soundtrack.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
              Hindi and Telugu radio, podcasts, news and community stories — streaming 24/7 from
              Raleigh–Durham.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => handleStationClick(STATIONS.Hindi.id)}
                className="h-12 rounded-full bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-red-500"
                aria-label={isHindiActive && isPlaying ? "Pause Radio Nyra Hindi" : "Listen to Radio Nyra Hindi"}
              >
                {isHindiActive && isPlaying ? (
                  <Pause className="mr-2 h-4 w-4 fill-current" />
                ) : (
                  <Play className="mr-2 h-4 w-4 fill-current" />
                )}
                {isHindiActive && isPlaying ? "Pause Hindi" : "Listen to Hindi"}
              </Button>

              <Button
                onClick={() => handleStationClick(STATIONS.Telugu.id)}
                variant="outline"
                className="h-12 rounded-full border-white/25 bg-white/5 px-6 text-sm font-bold text-white hover:border-white/50 hover:bg-white/10 hover:text-white"
                aria-label={isTeluguActive && isPlaying ? "Pause Radio Nyra Telugu" : "Listen to Radio Nyra Telugu"}
              >
                {isTeluguActive && isPlaying ? (
                  <Pause className="mr-2 h-4 w-4 fill-current" />
                ) : (
                  <Play className="mr-2 h-4 w-4 fill-current" />
                )}
                {isTeluguActive && isPlaying ? "Pause Telugu" : "Listen to Telugu"}
              </Button>

              <Link
                href="/schedule"
                className="group inline-flex h-12 items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                <CalendarDays className="h-4 w-4" aria-hidden />
                Full schedule
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>

            <p className="mt-5 text-xs text-white/40">
              {isPlaying ? (
                <>
                  Now streaming {currentStation.name}
                  {metadata?.title ? ` ΓÇö ${metadata.title}` : ""}
                </>
              ) : (
                "Press play to start the live stream. No account needed."
              )}
            </p>
          </div>

          {/* Channel preview / on-air cards */}
          <div className="flex w-full flex-col gap-3 lg:max-w-lg">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/45">
              Channel preview
            </p>
            <ShowNowCard
              show={liveHindi}
              active={isHindiActive}
              playing={isPlaying}
              onPlay={() => handleStationClick(STATIONS.Hindi.id)}
              badgeLabel="HD4"
              accentClass="bg-red-600 text-white"
            />
            <ShowNowCard
              show={liveTelugu}
              active={isTeluguActive}
              playing={isPlaying}
              onPlay={() => handleStationClick(STATIONS.Telugu.id)}
              badgeLabel="HD3"
              accentClass="bg-amber-500 text-black"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
