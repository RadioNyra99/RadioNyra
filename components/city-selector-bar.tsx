"use client"

import Link from "next/link"
import { NC_CITIES } from "@/lib/nc-data"
import { MapPin, Compass, ChevronRight } from "lucide-react"

/**
 * Slim market/coverage row. Keeps the internal links to the eight Triangle
 * city pages without occupying a full promotional band above the fold.
 */
export function CitySelectorBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="container mx-auto flex flex-col gap-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex shrink-0 items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-foreground">
            Triangle Hubs
          </span>
          <span className="hidden text-[10px] text-muted-foreground sm:inline">
            99.9 FM HD4 (Hindi) · HD3 (Telugu) coverage
          </span>
        </div>

        <div className="-mx-1 flex items-center gap-1.5 overflow-x-auto px-1 pb-1 no-scrollbar lg:pb-0">
          {NC_CITIES.map((city) => (
            <Link
              key={city.id}
              href={`/north-carolina/${city.slug}`}
              className="whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {city.name}
            </Link>
          ))}
        </div>

        <Link
          href="/near-me"
          className="group flex shrink-0 items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary"
        >
          <Compass className="h-3.5 w-3.5" aria-hidden />
          Near Me
          <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </div>
  )
}
