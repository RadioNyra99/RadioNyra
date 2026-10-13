"use client"

import Link from "next/link"
import { ArrowRight, CalendarDays, Newspaper, PlayCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMMUNITY_LINKS, getNewsItems, getVideoItems } from "@/lib/content-discovery"

export function ContentDiscoverySection() {
  const videos = getVideoItems().slice(0, 2)
  const news = getNewsItems().slice(0, 3)
  const community = COMMUNITY_LINKS.slice(0, 3)

  return (
    <section className="bg-background py-12 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary mb-2">Recently Added</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight italic">
              Watch, Read, Discover
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full text-xs font-extrabold uppercase tracking-widest self-start sm:self-auto">
            <Link href="/youtube">
              View Videos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <PlayCircle className="h-4 w-4 text-red-500" />
              <h3 className="text-sm font-extrabold uppercase tracking-widest">Videos</h3>
            </div>
            <div className="space-y-3">
              {videos.map((video) => (
                <Link key={video.id} href={video.isShort ? "/shorts" : "/youtube"} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-muted mb-2">
                    <img src={video.thumbnailHigh || video.thumbnail} alt={video.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                    <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white">
                      {video.isShort ? "Short" : "Video"}
                    </span>
                  </div>
                  <h4 className="line-clamp-2 text-sm font-bold leading-snug group-hover:text-primary">{video.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-extrabold uppercase tracking-widest">News & Community</h3>
            </div>
            <div className="space-y-3">
              {news.map((item) => (
                <Link key={item.id} href={item.href} className="group block rounded-lg border border-border/60 bg-background p-3 transition-colors hover:border-primary/50">
                  <p className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                    <CalendarDays className="h-3 w-3" /> {item.dateLabel}
                  </p>
                  <h4 className="line-clamp-2 text-sm font-bold leading-snug group-hover:text-primary">{item.title}</h4>
                </Link>
              ))}
              {community.map((item) => (
                <Link key={item.id} href={item.href} className="group flex items-start gap-2 rounded-lg border border-border/60 bg-muted/30 p-3 transition-colors hover:border-primary/50">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-sm font-bold group-hover:text-primary">{item.title}</h4>
                    <p className="line-clamp-1 text-[11px] text-muted-foreground">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

