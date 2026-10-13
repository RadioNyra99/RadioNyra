"use client"

import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { Section, SectionHeading } from "@/components/section"
import { getVideoItems } from "@/lib/content-discovery"

/**
 * Section H — Featured Videos. Deliberately thumbnail-only: no YouTube iframe
 * is created anywhere on the homepage, so the player JavaScript never loads
 * until a visitor opens the video pages themselves.
 */
export function FeaturedVideosSection() {
  const videos = getVideoItems().slice(0, 4)

  if (videos.length === 0) return null

  return (
    <Section id="videos">
      <SectionHeading
        eyebrow="Videos"
        title="Watch Radio Nyra"
        description="Latest uploads and clips from the official YouTube channel."
        href="/youtube"
        linkLabel="Open channel"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={video.isShort ? "/shorts" : "/youtube"}
            className="media-card group"
          >
            <div className="ratio-16-9 relative overflow-hidden bg-ink">
              <img
                src={video.thumbnailHigh || video.thumbnail}
                alt=""
                loading="lazy"
                width={480}
                height={270}
                className="transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/35">
                <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-primary text-white opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
                  <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden />
                </span>
              </span>
              <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white backdrop-blur-sm">
                {video.isShort ? "Short" : "Video"}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-4">
              <h3 className="line-clamp-2 text-sm font-bold leading-snug text-foreground group-hover:text-primary">
                {video.title}
              </h3>
              <span className="mt-auto pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {video.isShort ? "View shorts" : "Watch now"}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/shorts"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
        >
          Shorts
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
        <Link
          href="/video-library"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
        >
          Video library
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </Section>
  )
}
