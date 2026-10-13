"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Play, ExternalLink, User, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Section, SectionHeading } from "@/components/section"
import { getPodcastEpisodes } from "@/lib/content-discovery"

const PODCAST_EPISODES = getPodcastEpisodes().slice(0, 4)

/**
 * Section F — Latest Podcasts. The iframe player is only mounted once a
 * visitor opens an episode, so no third-party player JavaScript loads on the
 * homepage itself.
 */
export function FeaturedPodcastsSection() {
  const [activeVideo, setActiveVideo] = useState<(typeof PODCAST_EPISODES)[0] | null>(null)

  return (
    <>
      <Section id="podcasts" variant="alt">
        <SectionHeading
          eyebrow="Podcasts"
          title="Latest episodes"
          description="Conversations, interviews and music shows, on demand."
          href="/podcasts"
          linkLabel="All podcasts"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PODCAST_EPISODES.map((episode) => (
            <article key={episode.id} className="media-card group">
              <div className="ratio-16-9 relative overflow-hidden bg-muted">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  loading="lazy"
                  width={480}
                  height={270}
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <button
                  type="button"
                  onClick={() => setActiveVideo(episode)}
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 transition-colors hover:bg-black/40"
                  aria-label={`Play ${episode.title}`}
                >
                  <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
                    <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden />
                  </span>
                </button>
                <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white backdrop-blur-sm">
                  Podcast
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-[11px] font-extrabold uppercase tracking-wider text-primary">
                    {episode.show}
                  </span>
                  <Badge className="shrink-0 border-none bg-muted px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    {episode.category}
                  </Badge>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVideo(episode)}
                  className="cursor-pointer text-left text-sm font-bold leading-snug text-foreground transition-colors hover:text-primary"
                  title={episode.title}
                >
                  <span className="line-clamp-2">{episode.title}</span>
                </button>

                <p className="mt-auto flex items-center gap-1.5 pt-1 text-[11px] text-muted-foreground">
                  <User className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{episode.host}</span>
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <Button
                    onClick={() => setActiveVideo(episode)}
                    variant="outline"
                    size="sm"
                    className="h-8 flex-1 rounded-full text-xs font-bold"
                  >
                    <Play className="mr-1.5 h-3.5 w-3.5 fill-current text-primary" aria-hidden />
                    Play
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 rounded-full px-0 text-muted-foreground"
                    title="Open on YouTube"
                  >
                    <a href={episode.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      <span className="sr-only">Open {episode.title} on YouTube</span>
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Episode player — iframe is only created after the visitor asks for it */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-4xl overflow-hidden rounded-2xl border-border bg-background p-0 text-foreground">
          <DialogHeader className="flex flex-row items-center justify-between gap-3 border-b border-border bg-muted/40 p-4">
            <DialogTitle className="flex items-center gap-2 line-clamp-1 text-sm font-extrabold sm:text-base">
              <Youtube className="h-5 w-5 shrink-0 text-primary" aria-hidden />
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
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
          )}
          <div className="flex flex-col gap-2 bg-muted/30 p-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary">{activeVideo?.show}</span>
              <span aria-hidden>·</span>
              <span>Hosted by {activeVideo?.host}</span>
            </div>
            {activeVideo && (
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-bold text-primary hover:underline"
              >
                <Youtube className="h-4 w-4" aria-hidden /> Watch on YouTube
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
