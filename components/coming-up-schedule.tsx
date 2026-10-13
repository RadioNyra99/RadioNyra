"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Section, SectionHeading } from "@/components/section"
import { cn } from "@/lib/utils"
import {
  getLiveHindiShow,
  getLiveTeluguShow,
  getUpcomingShows,
  type LiveShowInfo,
} from "@/lib/live-schedule-service"

interface ChannelSchedule {
  key: "hindi" | "telugu"
  label: string
  frequency: string
  accent: string
  now: LiveShowInfo
  upcoming: { show: LiveShowInfo; startsAt: Date }[]
}

/** Start time taken from the schedule entry itself (e.g. "10:00 AM – 1:00 PM EST"). */
const startFromRange = (range: string) => range.split(/[–—-]/)[0].trim()

/**
 * "On Air Now & Coming Up" — a compact visual schedule. Both the live show and
 * the upcoming list are derived from the shared schedule service at render
 * time, so this section never carries a stale hardcoded timetable.
 */
export function ComingUpSchedule() {
  const [schedules, setSchedules] = useState<ChannelSchedule[]>(() => buildSchedules())

  useEffect(() => {
    const update = () => setSchedules(buildSchedules())
    update()
    const timer = setInterval(update, 60_000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Section id="schedule">
      <SectionHeading
        eyebrow="Schedule"
        title="On air now & coming up"
        description="All times Eastern (EST). Live 24/7 on 99.9 FM HD4 and HD3."
        href="/schedule"
        linkLabel="Full schedule"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {schedules.map((channel) => (
          <div
            key={channel.key}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-2 w-2 rounded-full",
                    channel.key === "hindi" ? "bg-primary" : "bg-gold",
                  )}
                />
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">
                  {channel.label}
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {channel.frequency}
              </span>
            </div>

            {/* On air now */}
            <div className="flex items-center gap-3 px-4 py-4">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
                <img
                  src={channel.now.image}
                  alt=""
                  loading="lazy"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> On air
                </span>
                <h3 className="mt-1 truncate text-sm font-bold text-foreground">
                  {channel.now.title}
                </h3>
                <p className="truncate text-xs text-muted-foreground">
                  {channel.now.host || "Radio Nyra"} · {channel.now.timeRange}
                </p>
              </div>
            </div>

            {/* Coming up */}
            <ul className="divide-y divide-border border-t border-border">
              {channel.upcoming.map((entry) => (
                <li
                  key={`${channel.key}-${entry.show.id}`}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/40"
                >
                  <span className="w-20 shrink-0 text-xs font-semibold tabular-nums text-primary">
                    {startFromRange(entry.show.timeRange)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {entry.show.title}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {entry.show.host || "Radio Nyra"}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-4 py-3">
              <Link
                href="/schedule"
                className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary"
              >
                See the whole day
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function buildSchedules(): ChannelSchedule[] {
  const now = new Date()
  return [
    {
      key: "hindi",
      label: "Radio Nyra Hindi",
      frequency: "99.9 FM HD4",
      accent: "bg-primary",
      now: getLiveHindiShow(now),
      upcoming: getUpcomingShows("hindi", now, 3),
    },
    {
      key: "telugu",
      label: "Radio Nyra Telugu",
      frequency: "99.9 FM HD3",
      accent: "bg-gold",
      now: getLiveTeluguShow(now),
      upcoming: getUpcomingShows("telugu", now, 3),
    },
  ]
}
