"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Play, Youtube } from "lucide-react"
import type { PodcastEpisode } from "@/lib/content-discovery"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function FeaturedVideoGrid({ videos }: { videos: PodcastEpisode[] }) {
  const [activeVideo, setActiveVideo] = useState<PodcastEpisode | null>(null)
  const publishedDate = activeVideo?.publishedAt && !Number.isNaN(Date.parse(activeVideo.publishedAt))
    ? new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(activeVideo.publishedAt))
    : null

  return (
    <section className="bg-[#0b1631] py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300"><Youtube className="h-4 w-4" /> Radio Nyra on YouTube</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Stories worth watching.</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">Latest videos and Shorts, including interviews, podcasts, and community stories from the Radio Nyra channel.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 font-bold text-white hover:bg-white/10 hover:text-white">
              <Link href="https://www.youtube.com/@RadioNyraUSA" target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" />Full channel</Link>
            </Button>
            <Button asChild className="rounded-full bg-red-600 font-bold text-white hover:bg-red-500">
              <Link href="https://www.youtube.com/@RadioNyraUSA?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><Youtube className="mr-2 h-4 w-4" />Subscribe</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {videos.map((video) => (
            <article key={video.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.045] transition-colors hover:border-white/25">
              <button type="button" onClick={() => setActiveVideo(video)} aria-label={`Play ${video.title}`} className="relative block aspect-video w-full overflow-hidden bg-black text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">
                <img src={video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt={`Video thumbnail: ${video.title}`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-xl"><Play className="ml-0.5 h-5 w-5 fill-current" /></span></span>
              </button>
              <div className="p-4">
                <p className="text-[9px] font-extrabold uppercase tracking-[.16em] text-red-300">{video.category}</p>
                <h3 className="mt-2 line-clamp-2 min-h-11 text-sm font-bold leading-snug text-white">{video.title}</h3>
                <p className="mt-2 text-xs text-white/50">{video.host} · {video.publishedLabel}</p>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <button type="button" onClick={() => setActiveVideo(video)} className="text-xs font-bold text-white/85 hover:text-white">Watch episode</button>
                  <Link href={video.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${video.title} on YouTube`} className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"><ExternalLink className="h-4 w-4" /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-h-[90dvh] max-w-5xl overflow-y-auto rounded-2xl border-border bg-background p-0 text-foreground">
          <DialogHeader className="border-b border-white/10 bg-[#111827] p-4">
            <DialogTitle className="line-clamp-2 pr-8 text-left text-sm font-bold text-white sm:text-base">{activeVideo?.title}</DialogTitle>
          </DialogHeader>
          {activeVideo && (
            <div className="grid md:grid-cols-[1.25fr_.75fr]">
              <div className="aspect-video w-full bg-black"><iframe src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full w-full border-0" /></div>
              <section aria-label="Verified episode details" className="space-y-4 p-5 sm:p-6">
                <div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-primary">Episode details</p><h3 className="mt-2 text-lg font-black leading-snug">{activeVideo.title}</h3></div>
                <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                  <span className="rounded-full bg-primary/10 px-3 py-1.5 text-primary">{activeVideo.category}</span>
                  <span className="rounded-full bg-muted px-3 py-1.5 text-muted-foreground">Host: {activeVideo.host}</span>
                </div>
                {activeVideo.description ? (
                  <div><p className="text-xs font-extrabold text-foreground">Channel description</p><p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{activeVideo.description}</p></div>
                ) : (
                  <p className="text-sm leading-relaxed text-muted-foreground">A verified episode description is not available yet. Open the episode on YouTube for its latest details.</p>
                )}
                {(publishedDate || activeVideo.duration) && <p className="text-xs font-semibold text-muted-foreground">{[publishedDate, activeVideo.duration].filter(Boolean).join(" · ")}</p>}
                <p className="border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">A transcript and chapter timestamps are not available for this episode yet.</p>
                <Link href={activeVideo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">Open on YouTube <ExternalLink className="h-3.5 w-3.5" /></Link>
              </section>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
