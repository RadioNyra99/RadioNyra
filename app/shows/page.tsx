"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { CalendarDays, Clock3, Radio, Search, Youtube } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RADIO_SHOWS, getCurrentRadioShow, getEasternTime, type RadioLanguageFilter, type RadioShow } from "@/lib/radio-content"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"

const filters: RadioLanguageFilter[] = ["All", "Hindi", "Telugu"]
const programs = RADIO_SHOWS.filter((show): show is RadioShow & { language: "Hindi" | "Telugu" } => show.language === "Hindi" || show.language === "Telugu")
const featuredTimes = [
  { slug: "idhar-udhar-ki-baatein", day: "Wednesday", time: "5:00–7:00 PM ET" },
  { slug: "aaj-ki-shaam", day: "Friday", time: "5:00–7:00 PM ET" },
  { slug: "dil-se-desi-with-van", day: "Saturday", time: "12:00–2:00 PM ET" },
  { slug: "geet-bazaar", day: "Sunday", time: "10:00 AM–12:00 PM ET", extra: "Also Sundays, 10:00 PM–12:00 AM ET" },
]

export default function ShowsPage() {
  const { playStation } = useAudio()
  const [filter, setFilter] = useState<RadioLanguageFilter>("All")
  const [query, setQuery] = useState("")
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])

  const time = getEasternTime(now)
  const hindiOnAir = getCurrentRadioShow("Hindi", now)
  const teluguOnAir = getCurrentRadioShow("Telugu", now)
  const visibleShows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return programs.filter((show) => {
      const matchesLanguage = filter === "All" || show.language === filter
      const searchable = `${show.name} ${show.host} ${show.description} ${show.schedule} ${show.language}`.toLowerCase()
      return matchesLanguage && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [filter, query])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FrequencyBar />
      <main>
        <section className="relative overflow-hidden bg-[#0b1631] py-12 text-white sm:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(ellipse at 85% 20%, rgba(239,42,56,.28), transparent 40%), radial-gradient(ellipse at 12% 100%, rgba(44,82,160,.35), transparent 45%)" }} />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.2em] text-white/70"><Radio className="h-3.5 w-3.5 text-red-400" /> Hindi HD4 · Telugu HD3</p>
              <h1 className="text-4xl font-black leading-[.98] tracking-tight sm:text-6xl">Discover your next favorite show on RadioNyra.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">Explore our shows, meet your favorite hosts, and see what’s on this week.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => playStation(STATIONS.Hindi.id)} className="h-11 rounded-full bg-primary px-5 font-bold text-white hover:bg-primary/90"><Radio className="mr-2 h-4 w-4" />Listen Live</Button>
              <Button asChild variant="outline" className="h-11 rounded-full border-white/20 bg-white/5 px-5 font-bold text-white hover:bg-white/10 hover:text-white"><Link href="/youtube"><Youtube className="mr-2 h-4 w-4 text-red-300" />Watch Now</Link></Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-9 sm:px-6 sm:pt-12">
          <div className="mb-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Weekly schedule · Eastern Time</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">This week on RadioNyra</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTimes.map((slot) => {
              const show = programs.find((program) => program.slug === slot.slug)
              if (!show) return null
              return (
                <article key={slot.slug} className="flex min-w-0 gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
                  <img src={show.image} alt={`${show.name} artwork`} className="h-16 w-16 shrink-0 rounded-xl bg-muted object-cover" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-primary">{slot.day}</p>
                    <h3 className="mt-1 truncate font-extrabold">{show.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-muted-foreground">{slot.time} · {show.host}</p>
                    {slot.extra && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{slot.extra}</p>}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="schedule" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Full lineup · All times Eastern Time (ET)</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Find the show for you</h2>
              <p className="mt-1 text-sm text-muted-foreground">Local time: {time.formattedTime}</p>
            </div>
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search shows or hosts" aria-label="Search shows or hosts" className="h-11 rounded-full pl-10" />
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter shows by language">
            {filters.map((item) => (
              <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`rounded-full px-4 py-2.5 text-xs font-extrabold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${filter === item ? "bg-primary text-white" : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}>
                {item === "All" ? "All" : item === "Hindi" ? "Hindi · HD4" : "Telugu · HD3"}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-[minmax(180px,1.4fr)_minmax(120px,.8fr)_minmax(180px,1fr)_minmax(150px,.8fr)] gap-4 border-b border-border bg-muted/50 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[.14em] text-muted-foreground max-md:hidden">
              <span>Program</span><span>Channel</span><span>Day &amp; time</span><span>Host</span>
            </div>
            <div className="divide-y divide-border">
              {visibleShows.map((show) => {
                const onAirShow = show.language === "Hindi" ? hindiOnAir : teluguOnAir
                const isOnAir = onAirShow.id === show.slug
                return (
                  <article key={show.slug} className={`grid gap-4 px-4 py-4 sm:px-5 md:grid-cols-[minmax(180px,1.4fr)_minmax(120px,.8fr)_minmax(180px,1fr)_minmax(150px,.8fr)] md:items-center ${isOnAir ? "bg-primary/[.045]" : ""}`}>
                    <div className="flex min-w-0 items-center gap-3">
                      <img src={show.image} alt={`${show.name} program artwork`} loading="lazy" className="h-14 w-14 shrink-0 rounded-xl bg-muted object-cover" />
                      <div className="min-w-0">
                        <h3 className="truncate font-extrabold tracking-tight">{show.name}</h3>
                        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{show.description}</p>
                        {isOnAir && <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white"><span className="h-1.5 w-1.5 rounded-full bg-white" />On air now</span>}
                      </div>
                    </div>
                    <div><span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-extrabold ${show.language === "Hindi" ? "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300" : "bg-blue-50 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300"}`}>{show.language} · {show.station}</span></div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><Clock3 className="h-4 w-4 shrink-0 text-primary" />{show.schedule}</div>
                    <div className="flex items-center justify-between gap-3 text-sm font-medium"><span>{show.host}</span><Link href={`/shows/${show.slug}`} className="shrink-0 text-xs font-bold text-primary hover:underline">Details</Link></div>
                  </article>
                )
              })}
              {visibleShows.length === 0 && <p className="px-5 py-12 text-center text-sm text-muted-foreground">No shows match that search. Try another name or choose a different language.</p>}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[{ language: "Hindi" as const, show: hindiOnAir }, { language: "Telugu" as const, show: teluguOnAir }].map(({ language, show }) => (
              <div key={language} className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
                <div><p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-muted-foreground">On air · {language}</p><p className="mt-1 font-extrabold">{show.title}</p><p className="mt-1 text-xs text-muted-foreground">{show.host} · {show.timeRange}</p></div>
                <Button asChild variant="ghost" size="sm" className="rounded-full font-bold"><Link href="#schedule"><CalendarDays className="mr-1.5 h-4 w-4" />Schedule</Link></Button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
