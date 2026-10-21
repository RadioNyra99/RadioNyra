import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays, Clock, Headphones, Mic2, Radio, Search } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SHOW_PROFILES } from "@/lib/content-discovery"

export const metadata: Metadata = {
  title: "Shows & RJ Profiles",
  description:
    "Explore Radio Nyra shows, RJ profiles, broadcast timings, Hindi and Telugu programs, and related on-demand episodes.",
  alternates: { canonical: "/shows" },
}

export default function ShowsPage() {
  const hindiShows = SHOW_PROFILES.filter((show) => show.language === "Hindi")
  const teluguShows = SHOW_PROFILES.filter((show) => show.language === "Telugu")

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <FrequencyBar />

      <main>
        <section className="bg-zinc-950 text-white py-12 md:py-16 border-b border-zinc-800">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.25em] text-red-400 mb-4">
                  <Radio className="h-4 w-4" /> Shows & Schedule
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight italic leading-none">
                  Meet The Voices Behind Radio Nyra
                </h1>
                <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-300 leading-relaxed">
                  Browse Hindi and Telugu programming, RJ profiles, broadcast times, show pages, and related on-demand conversations.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full bg-red-600 hover:bg-red-500 text-white font-extrabold uppercase tracking-widest">
                    <Link href="/schedule">
                      <CalendarDays className="mr-2 h-4 w-4" /> Weekly Schedule
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 font-extrabold uppercase tracking-widest">
                    <Link href="/podcasts">
                      <Headphones className="mr-2 h-4 w-4" /> Podcast Hub
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-400 mb-3">At A Glance</p>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-lg bg-black/30 p-4 border border-zinc-800">
                    <p className="text-3xl font-extrabold">{hindiShows.length}</p>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Hindi Shows</p>
                  </div>
                  <div className="rounded-lg bg-black/30 p-4 border border-zinc-800">
                    <p className="text-3xl font-extrabold">{teluguShows.length}</p>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Telugu Shows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary mb-2">Show Directory</p>
                <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">Programs, RJs & Broadcast Blocks</h2>
              </div>
              <Button asChild variant="outline" className="rounded-full text-xs font-extrabold uppercase tracking-widest self-start">
                <Link href="/schedule">
                  <CalendarDays className="mr-2 h-4 w-4" /> View Full Schedule
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SHOW_PROFILES.map((show) => (
                <article key={show.slug} className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
                  <Link href={`/shows/${show.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img src={show.image} alt={`${show.name} hosted by ${show.host}`} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <Badge className={`absolute left-3 top-3 border-none ${show.language === "Hindi" ? "bg-red-600 text-white" : "bg-amber-500 text-black"}`}>
                        {show.stationLabel}
                      </Badge>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">{show.category}</p>
                        <h3 className="text-xl font-extrabold italic leading-tight">{show.name}</h3>
                      </div>
                    </div>
                  </Link>
                  <div className="p-5">
                    <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      <Mic2 className="h-4 w-4 text-primary" /> Hosted by {show.host}
                    </p>
                    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" /> {show.schedule}
                    </p>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{show.description}</p>
                    <div className="mt-5 flex gap-2">
                      <Button asChild size="sm" className="rounded-full text-xs font-bold">
                        <Link href={`/shows/${show.slug}`}>View Show</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="rounded-full text-xs font-bold">
                        <Link href={`/podcasts?episode=${show.slug}`}>
                          <Search className="mr-1.5 h-3.5 w-3.5" /> Episodes
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

