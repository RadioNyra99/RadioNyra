"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Play, Clock, Headphones, Radio } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Section, SectionHeading } from "@/components/section"
import { useAudio } from "@/components/audio-context"
import { SHOW_PROFILES } from "@/lib/content-discovery"
import { getLiveHindiShow, getLiveTeluguShow, type LiveShowInfo } from "@/lib/live-schedule-service"
import { cn } from "@/lib/utils"

/** A schedule title is on-air when it names the profile show (handles
 *  variants like "Geet Bazaar (Live)" vs "Geet Bazaar"). */
function isShowOnAir(showName: string, live: LiveShowInfo): boolean {
  const normalize = (s: string) => s.toLowerCase().replace(/\s*\([^)]*\)\s*$/, "").trim()
  const liveTitle = normalize(live.title)
  const profileName = normalize(showName)
  return liveTitle === profileName || liveTitle.startsWith(`${profileName} `)
}

/**
 * Section E — Featured Shows. Consistent image cards with a short title,
 * presenter, schedule and one clear listening action.
 */
export function PopularShowsSection() {
  const [filter, setFilter] = useState<"all" | "Hindi" | "Telugu">("all")
  const { playStation, currentStation, isPlaying } = useAudio()
  const [liveShows, setLiveShows] = useState<{ hindi: LiveShowInfo; telugu: LiveShowInfo }>(
    () => ({ hindi: getLiveHindiShow(), telugu: getLiveTeluguShow() }),
  )

  // Refresh on-air status as the schedule rolls over.
  useEffect(() => {
    const id = setInterval(() => {
      setLiveShows({ hindi: getLiveHindiShow(), telugu: getLiveTeluguShow() })
    }, 60_000)
    return () => clearInterval(id)
  }, [])

  const filteredShows = SHOW_PROFILES.filter((show) => {
    if (filter === "all") return true
    return show.language === filter
  }).slice(0, 8)

  const filters: { key: typeof filter; label: string }[] = [
    { key: "all", label: "All shows" },
    { key: "Hindi", label: "Hindi HD4" },
    { key: "Telugu", label: "Telugu HD3" },
  ]

  return (
    <Section id="shows">
      <SectionHeading
        eyebrow="Shows"
        title="Featured programmes"
        description="The voices behind the schedule — tune in or read more."
        href="/shows"
        linkLabel="All shows"
      />

      <div
        role="tablist"
        aria-label="Filter shows by language"
        className="mb-6 inline-flex rounded-full border border-border bg-muted p-1"
      >
        {filters.map((item) => (
          <button
            key={item.key}
            role="tab"
            aria-selected={filter === item.key}
            type="button"
            onClick={() => setFilter(item.key)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer",
              filter === item.key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filteredShows.map((show) => {
          const onAir = isShowOnAir(show.name, liveShows[show.language.toLowerCase() as "hindi" | "telugu"])
          const isCurrent = onAir && isPlaying && currentStation.id === show.stationId

          return (
            <article key={show.slug} className="media-card group">
              <div className="ratio-4-3 relative overflow-hidden bg-muted">
                <img
                  src={show.image}
                  alt={`${show.name}, hosted by ${show.host}`}
                  loading="lazy"
                  width={480}
                  height={360}
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <Badge
                  className={cn(
                    "absolute left-3 top-3 border-none text-[9px] font-extrabold uppercase tracking-widest",
                    show.language === "Hindi"
                      ? "bg-primary text-primary-foreground"
                      : "bg-gold text-black",
                  )}
                >
                  {show.language === "Hindi" ? "Hindi HD4" : "Telugu HD3"}
                </Badge>

                {onAir && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                    On air
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => playStation(show.stationId)}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors cursor-pointer hover:bg-black/40"
                  aria-label={isCurrent ? `Now playing ${show.name}` : `Listen to ${show.name}`}
                >
                  <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
                    {isCurrent ? (
                      <Headphones className="h-5 w-5 animate-pulse" aria-hidden />
                    ) : (
                      <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden />
                    )}
                  </span>
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-1.5 p-4">
                <h3 className="text-base font-extrabold leading-snug tracking-tight text-foreground group-hover:text-primary">
                  {show.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {show.host}
                </p>
                <p className="flex items-center gap-1.5 text-[11px] text-primary">
                  <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{show.schedule}</span>
                </p>
                <button
                  type="button"
                  onClick={() => playStation(show.stationId)}
                  className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-full border border-border text-xs font-bold uppercase tracking-wider transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                >
                  <Headphones className="h-3.5 w-3.5" aria-hidden />
                  {isCurrent ? "Now playing" : onAir ? "Play on air" : "Tune in"}
                </button>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-8">
        <Link
          href="/schedule"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
        >
          View the 7-day schedule
        </Link>
      </div>
    </Section>
  )
}
