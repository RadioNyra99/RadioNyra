"use client"

import Link from "next/link"
import { CalendarDays, MapPin, ArrowRight } from "lucide-react"
import { Section, SectionHeading } from "@/components/section"
import { COMMUNITY_EVENTS, FESTIVAL_CALENDAR, type CommunityEvent, type FestivalCalendarItem } from "@/lib/community-data"

type CalendarItem = {
  key: string
  title: string
  dateLabel: string
  sortAt: number
  location?: string
  detail?: string
  image: string
  href: string
  kind: "Event" | "Festival"
}

/**
 * Best-effort date parsing for the human-readable date strings kept in the
 * data files (e.g. "October 24, 2026 • 4:00 PM EST"). Items we cannot parse
 * are kept but sorted last so nothing is silently dropped.
 */
function parseDateish(value: string): number {
  const head = value.split("•")[0].trim()
  const attempts = [head, head.split(" - ")[0].trim(), head.split(", 20")[0]]
  for (const attempt of attempts) {
    const parsed = new Date(attempt)
    if (!Number.isNaN(parsed.getTime())) return parsed.getTime()
  }
  return Number.POSITIVE_INFINITY
}

function toCalendarItems(now: Date): CalendarItem[] {
  const today = now.getTime()

  const events: CalendarItem[] = COMMUNITY_EVENTS.map((event: CommunityEvent) => {
    const sortAt = parseDateish(event.date)
    return {
      key: `event-${event.id}`,
      title: event.title,
      dateLabel: event.date,
      sortAt,
      location: event.location,
      detail: event.category,
      image: event.image,
      href: event.ticketUrl || "/events",
      kind: "Event" as const,
    }
  })

  const festivals: CalendarItem[] = FESTIVAL_CALENDAR.map((festival: FestivalCalendarItem) => {
    const sortAt = parseDateish(festival.date)
    return {
      key: `festival-${festival.id}`,
      title: festival.festivalName,
      dateLabel: festival.date,
      sortAt,
      detail: festival.associatedShow ? `On air: ${festival.associatedShow}` : festival.significance,
      image: festival.image,
      href: "/festival-calendar",
      kind: "Festival" as const,
    }
  })

  return [...events, ...festivals]
    .filter((item) => item.sortAt >= today)
    .sort((a, b) => a.sortAt - b.sortAt)
}

/**
 * Section I — Community & Events. Only shows items whose dates are still in
 * the future, and always falls back to a link to the full calendar rather
 * than inventing events.
 */
export function CommunityEventsSection() {
  const items = toCalendarItems(new Date()).slice(0, 4)

  return (
    <Section id="community" variant="alt">
      <SectionHeading
        eyebrow="Community"
        title="Around the Triangle & beyond"
        description="Festivals, events and community moments we are part of."
        href="/events"
        linkLabel="All events"
      />

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">
            No upcoming events are listed right now. The full calendar is always up to date.
          </p>
          <Link
            href="/events"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            Open the events calendar
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link key={item.key} href={item.href} className="media-card group">
              <div className="ratio-4-3 relative overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  width={400}
                  height={300}
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white backdrop-blur-sm">
                  {item.kind}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-4">
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                  <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{item.dateLabel}</span>
                </p>
                {item.location ? (
                  <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    <span className="truncate">{item.location}</span>
                  </p>
                ) : null}
                {item.detail ? (
                  <p className="mt-auto line-clamp-2 pt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/events/submit"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
        >
          Submit an event
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
        <Link
          href="/community"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
        >
          Community hub
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </Section>
  )
}
