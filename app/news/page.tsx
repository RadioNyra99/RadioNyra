"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Archive, BookOpen, Calendar, Newspaper, PlayCircle, Search } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { RtvPlayer } from "@/components/rtv-player"
import { getNewsItems } from "@/lib/content-discovery"

const newsItems = getNewsItems()
const categories = ["All", ...Array.from(new Set(newsItems.map((item) => item.category)))]

export default function NewsPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")

  const filteredNews = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return newsItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category
      const searchable = `${item.title} ${item.excerpt} ${item.category} ${item.source}`.toLowerCase()
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const featured = filteredNews[0] || newsItems[0]
  const archiveItems = filteredNews.slice(1)

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": newsItems.slice(0, 12).map((item) => ({
      "@type": item.source === "RTV News" ? "AudioObject" : "Article",
      name: item.title,
      headline: item.title,
      description: item.excerpt,
      datePublished: item.date,
      url: `https://www.radionyra.com${item.href}`,
      image: `https://www.radionyra.com${item.image}`,
      publisher: {
        "@type": "Organization",
        name: "Radio Nyra",
      },
    })),
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <Navigation />

      <main>
        <section className="bg-zinc-950 text-white py-12 md:py-16 border-b border-zinc-800">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.25em] text-red-400 mb-4">
                <Newspaper className="h-4 w-4" /> News & Updates
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight italic leading-none">
                Daily Bulletins, Community Updates & Radio Nyra Stories
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-300 leading-relaxed">
                Listen to RTV Telugu daily bulletins, browse Radio Nyra articles, and search archived community updates from one editorial hub.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-12 border-b border-border/50">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="mb-6 flex flex-col gap-2 text-center">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary">Featured Audio News</p>
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">RTV Telugu Daily News</h2>
              <p className="text-sm text-muted-foreground">On-demand bulletins from Radio Nyra 99.9 FM-HD3.</p>
            </div>
            <RtvPlayer />
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary mb-2">Browse Archive</p>
                <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">Latest News & Updates</h2>
              </div>
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search news, topics, bulletins..."
                  className="h-11 rounded-full pl-10"
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

            {featured ? (
              <Link href={featured.href} className="group mb-8 grid grid-cols-1 overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-video lg:aspect-auto bg-muted">
                  <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
                    Featured
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <p className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" /> {featured.dateLabel} - {featured.category}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic leading-tight group-hover:text-primary">{featured.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary">
                    {featured.source === "RTV News" ? <PlayCircle className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                    Open Story
                  </span>
                </div>
              </Link>
            ) : null}

            {archiveItems.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border bg-muted/20 p-10 text-center">
                <Archive className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
                <h3 className="font-extrabold uppercase tracking-tight">No matching archive items</h3>
                <p className="mt-1 text-sm text-muted-foreground">Try another keyword or category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {archiveItems.map((item) => (
                  <Link key={item.id} href={item.href} className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-5">
                      <p className="mb-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" /> {item.dateLabel} - {item.category}
                      </p>
                      <h3 className="line-clamp-2 text-lg font-extrabold uppercase tracking-tight leading-tight group-hover:text-primary">{item.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

