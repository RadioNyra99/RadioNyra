"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ExternalLink, Headphones, Mic2, Play, Search, Send, UserRound, Video } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getPodcastEpisodes, type PodcastEpisode } from "@/lib/content-discovery"

const episodes = getPodcastEpisodes()
const categories = ["All", ...Array.from(new Set(episodes.map((episode) => episode.category)))]

export default function PodcastsPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode | null>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const selectedId = params.get("episode")
    if (selectedId) {
      const selected = episodes.find((episode) => episode.id === selectedId)
      if (selected) setActiveEpisode(selected)
    }
  }, [])

  const filteredEpisodes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return episodes.filter((episode) => {
      const matchesCategory = category === "All" || episode.category === category
      const searchable = `${episode.title} ${episode.description} ${episode.host} ${episode.show} ${episode.category}`.toLowerCase()
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const popularEpisodes = useMemo(() => [...episodes].sort((a, b) => b.viewCountNum - a.viewCountNum).slice(0, 4), [])
  const recentEpisodes = episodes.slice(0, 4)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/fa42a7d8-c45e-4e7d-868c-7861ef21d915", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (response.ok) {
        setSubmitted(true)
        form.reset()
      }
    } catch {
      setSubmitted(false)
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground text-foreground">
      <Navigation />

      <main>
        <section className="bg-zinc-950 text-white border-b border-zinc-800 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.25em] text-red-400 mb-4">
                  <Headphones className="h-4 w-4" /> Podcast Hub
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight italic leading-none">
                  Conversations Worth Staying For
                </h1>
                <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-300 leading-relaxed">
                  Browse Radio Nyra interviews, leadership conversations, immigration explainers, cultural programs, and community stories from the official Radio Nyra video library.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button onClick={() => setActiveEpisode(recentEpisodes[0])} className="rounded-full bg-red-600 hover:bg-red-500 text-white font-extrabold uppercase tracking-widest">
                    <Play className="mr-2 h-4 w-4 fill-current" /> Play Latest
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 font-extrabold uppercase tracking-widest">
                    <Link href="/youtube">Watch Video Hub</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
                <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-400">Recently Uploaded</p>
                <div className="space-y-3">
                  {recentEpisodes.map((episode) => (
                    <button
                      key={episode.id}
                      type="button"
                      onClick={() => setActiveEpisode(episode)}
                      className="group flex w-full gap-3 rounded-lg border border-zinc-800 bg-black/30 p-3 text-left transition-colors hover:border-red-500/60"
                    >
                      <img src={episode.thumbnail} alt={episode.title} className="h-16 w-24 rounded-md object-cover bg-zinc-800" loading="lazy" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-extrabold uppercase tracking-widest text-red-400">{episode.show}</span>
                        <span className="line-clamp-2 text-sm font-bold text-white group-hover:text-red-300">{episode.title}</span>
                        <span className="mt-1 block text-[11px] text-zinc-400">{episode.publishedLabel}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-end">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">Find Your Next Episode</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Filter by category or search by host, show, guest, topic, or title.
                </p>
              </div>
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search podcasts..."
                  className="pl-10 h-11 rounded-full"
                />
              </div>
            </div>

            <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition-colors ${
                    category === item ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8">
              <div>
                {filteredEpisodes.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-border bg-muted/20 p-10 text-center">
                    <Headphones className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
                    <h3 className="font-extrabold uppercase tracking-tight">No episodes found</h3>
                    <p className="text-sm text-muted-foreground mt-1">Try a different keyword or clear the selected category.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {filteredEpisodes.map((episode) => (
                      <article key={episode.id} className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors">
                        <button type="button" onClick={() => setActiveEpisode(episode)} className="relative aspect-video bg-muted text-left overflow-hidden">
                          <img src={episode.thumbnail} alt={episode.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                          <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl">
                              <Play className="h-6 w-6 fill-current ml-0.5" />
                            </span>
                          </span>
                          <Badge className="absolute left-3 top-3 bg-black/70 text-white border-none">{episode.category}</Badge>
                        </button>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center justify-between gap-3 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground mb-2">
                            <span>{episode.show}</span>
                            <span>{episode.duration}</span>
                          </div>
                          <h3 className="line-clamp-2 text-lg font-extrabold uppercase tracking-tight leading-tight group-hover:text-primary">
                            {episode.title}
                          </h3>
                          <p className="mt-3 line-clamp-3 text-sm text-muted-foreground leading-relaxed">{episode.description}</p>
                          <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                            <span className="min-w-0 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              <UserRound className="h-4 w-4 shrink-0" />
                              <span className="truncate">{episode.host}</span>
                            </span>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => setActiveEpisode(episode)} className="rounded-full text-xs font-bold">
                                <Play className="mr-1.5 h-3.5 w-3.5 fill-current" /> Play
                              </Button>
                              <Button asChild size="icon" variant="outline" className="rounded-full h-8 w-8">
                                <a href={episode.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${episode.title} on YouTube`}>
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              <aside className="space-y-5">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest">
                    <Video className="h-4 w-4 text-primary" /> Popular Podcasts
                  </h3>
                  <div className="space-y-3">
                    {popularEpisodes.map((episode) => (
                      <button key={episode.id} type="button" onClick={() => setActiveEpisode(episode)} className="group w-full text-left">
                        <p className="line-clamp-2 text-sm font-bold leading-snug group-hover:text-primary">{episode.title}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">{episode.views} - {episode.host}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest">
                    <Mic2 className="h-4 w-4 text-primary" /> Be A Guest
                  </h3>
                  {submitted ? (
                    <p className="text-sm font-medium text-primary">Thanks. The Radio Nyra team will review your podcast request.</p>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <Input name="name" required placeholder="Name" className="bg-background" />
                      <Input name="email" type="email" required placeholder="Email" className="bg-background" />
                      <Input name="company" placeholder="Company or organization" className="bg-background" />
                      <Textarea name="message" required placeholder="What topic or story would you like to discuss?" className="min-h-24 bg-background" />
                      <Button type="submit" className="w-full rounded-full font-extrabold uppercase tracking-widest text-xs">
                        <Send className="mr-2 h-4 w-4" /> Send Request
                      </Button>
                    </form>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={Boolean(activeEpisode)} onOpenChange={(open) => !open && setActiveEpisode(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black text-white border-zinc-800 overflow-hidden">
          <DialogHeader className="p-4 border-b border-zinc-800 bg-zinc-950">
            <DialogTitle className="line-clamp-1 text-sm md:text-base">{activeEpisode?.title}</DialogTitle>
          </DialogHeader>
          {activeEpisode && (
            <>
              <div className="aspect-video bg-black">
                <iframe
                  src={`${activeEpisode.embedUrl}?autoplay=1&rel=0`}
                  title={activeEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between bg-zinc-950 text-xs text-zinc-400">
                <span>{activeEpisode.show} - Hosted by {activeEpisode.host}</span>
                <a href={activeEpisode.url} target="_blank" rel="noopener noreferrer" className="font-bold text-red-400 hover:text-red-300">
                  Open on YouTube
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

