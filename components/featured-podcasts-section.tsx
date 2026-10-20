"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Mic, Play, ChevronRight, ExternalLink, User, Youtube, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { REAL_RADIO_NYRA_VIDEOS, YouTubeVideoItem } from "@/lib/youtube-service"

// Derive a clean, concise show name
function deriveShow(video: YouTubeVideoItem): string {
  const { tags, title } = video
  if (tags.includes("LeadersAndLegends") || tags.includes("LeadersLegends") || title.includes("Leaders & Legends")) {
    return "Leaders & Legends"
  }
  if (tags.includes("ChaiPeCharcha") || title.includes("Chai Pe Charcha")) {
    return "Chai Pe Charcha"
  }
  if (
    tags.includes("H1B") ||
    tags.includes("L1Visa") ||
    tags.includes("F1Visa") ||
    tags.includes("StudentVisa") ||
    tags.includes("Immigration") ||
    title.includes("Brown Immigration") ||
    title.includes("Visa")
  ) {
    return "Brown Immigration"
  }
  if (tags.includes("PrabhuDeva") || tags.includes("HariKumar") || tags.includes("Celebrity") || title.includes("Interview")) {
    return "Exclusive Interview"
  }
  return "RadioNyra Podcast"
}

// Derive a topic label
function deriveTopic(video: YouTubeVideoItem): string {
  const { tags, title } = video
  if (tags.includes("H1B") || tags.includes("DHS") || title.includes("H-1B")) return "Immigration & Legal"
  if (tags.includes("L1Visa") || title.includes("L-1")) return "Immigration & Legal"
  if (tags.includes("F1Visa") || tags.includes("StudentVisa") || tags.includes("J1Visa") || title.includes("F-1")) return "Student Visas"
  if (title.includes("Art") || title.includes("Showcase")) return "Art & Culture"
  if (title.includes("Anupam Kher") || title.includes("Theatre")) return "Cinema & Theatre"
  if (tags.includes("PrabhuDeva") || tags.includes("Celebrity")) return "Celebrity Spotlight"
  if (tags.includes("HariKumar") || tags.includes("Concert")) return "Events & Concerts"
  if (tags.includes("ChaiPeCharcha") || tags.includes("HSNC")) return "Community & Culture"
  if (tags.includes("RTP") || tags.includes("TechInnovation")) return "Innovation & Tech"
  if (tags.includes("LeadersAndLegends") || tags.includes("LeadersLegends")) return "Leadership"
  return "Podcast"
}

// Derive accurate host
function deriveHost(video: YouTubeVideoItem): string {
  const { tags, title } = video
  if (tags.includes("SteveRao") || title.includes("Steve Rao")) return "Steve Rao"
  if (tags.includes("VanBhandari") || title.includes("Van Bhandari")) return "Van Bhandari"
  if (title.includes("Vaishnavi") || tags.includes("VaishnaviPalleda")) return "Vaishnavi Palleda"
  if (title.includes("Kelsey Berger")) return "Kelsey Berger"
  if (title.includes("Prabhu Deva") && title.includes("Hari Kumar")) return "Vaishnavi Palleda"
  if (title.includes("Hari Kumar")) return "Hari Kumar"
  if (title.includes("Brown Immigration") || tags.includes("Immigration")) return "Brown Immigration Law"
  return "Radio Nyra USA"
}

// Format duration
function formatDuration(duration: string): string {
  const parts = duration.split(":")
  if (parts.length === 2) {
    return `${parseInt(parts[0])}m ${parts[1]}s`
  }
  if (parts.length === 3) {
    const h = parseInt(parts[0])
    const m = parseInt(parts[1])
    return h > 0 ? `${h}h ${m}m` : `${m}m`
  }
  return duration
}

// All full-length YouTube videos as podcasts
const PODCAST_EPISODES = REAL_RADIO_NYRA_VIDEOS
  .filter((v) => !v.isShort)
  .map((v) => ({
    id: v.id,
    title: v.title,
    host: deriveHost(v),
    show: deriveShow(v),
    topic: deriveTopic(v),
    duration: formatDuration(v.duration),
    rawDuration: v.duration,
    url: v.youtubeUrl,
    embedUrl: v.embedUrl,
    thumbnail: v.thumbnailHigh || v.thumbnail,
    views: v.viewCount,
  }))

export function FeaturedPodcastsSection() {
  const [activeVideo, setActiveVideo] = useState<(typeof PODCAST_EPISODES)[0] | null>(null)

  return (
    <>
      <section className="py-12 bg-zinc-900/60 text-white border-b border-zinc-800/80">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mic className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400">
                  On-Demand Audio &amp; Video
                </span>
                <span className="bg-red-600/30 text-red-400 border border-red-500/40 text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                  All Full Episodes
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white italic">
                Latest RadioNyra Podcasts
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                Full-length in-depth conversations with community leaders, legal experts, founders, and cultural icons
              </p>
            </div>

            <Button
              variant="ghost"
              asChild
              className="text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-800 self-start sm:self-auto"
            >
              <Link href="/podcasts" className="flex items-center gap-1.5">
                <span>View All Podcasts</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PODCAST_EPISODES.map((episode) => (
              <div
                key={episode.id}
                className="group rounded-2xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5"
              >
                <div>
                  {/* Thumbnail */}
                  <div
                    className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                    onClick={() => setActiveVideo(episode)}
                  >
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    {/* Full episode pill */}
                    <div className="absolute top-2 left-2 bg-red-600/90 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      Podcast
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-1.5 mb-2.5">
                      <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 font-mono">
                        {episode.show}
                      </span>
                      <Badge className="bg-zinc-800 text-zinc-300 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border-none shrink-0">
                        {episode.topic}
                      </Badge>
                    </div>
                    <h3
                      onClick={() => setActiveVideo(episode)}
                      className="text-sm font-black text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug cursor-pointer"
                      title={episode.title}
                    >
                      {episode.title}
                    </h3>
                    <div className="flex items-center text-xs text-zinc-400 mt-3 pt-2 border-t border-zinc-800/60 font-medium">
                      <span className="flex items-center gap-1 truncate">
                        <User className="w-3 h-3 text-zinc-500 shrink-0" />
                        <span className="truncate">{episode.host}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="p-4 pt-0 flex gap-2">
                  <Button
                    onClick={() => setActiveVideo(episode)}
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-full border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 text-xs font-bold cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 mr-1.5 fill-current text-red-500" />
                    Watch
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-zinc-400 hover:text-white px-2.5"
                    title="Open on YouTube"
                  >
                    <a href={episode.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-zinc-800 overflow-hidden text-white rounded-2xl">
          <DialogHeader className="p-4 bg-zinc-900 border-b border-zinc-800 flex flex-row items-center justify-between">
            <DialogTitle className="text-white text-sm sm:text-base font-extrabold line-clamp-1 flex items-center gap-2">
              <Youtube className="w-5 h-5 text-red-500 shrink-0" />
              <span className="truncate">{activeVideo?.title}</span>
            </DialogTitle>
          </DialogHeader>
          {activeVideo && (
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${activeVideo.embedUrl}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          )}
          <div className="p-4 bg-zinc-950 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold">{activeVideo?.show}</span>
              <span>•</span>
              <span>Hosted by {activeVideo?.host}</span>
            </div>
            {activeVideo && (
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 hover:underline font-bold flex items-center gap-1.5 self-end sm:self-auto"
              >
                <Youtube className="w-4 h-4 text-red-500" /> Watch on YouTube &rarr;
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
