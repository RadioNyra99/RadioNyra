import Link from "next/link"
import { CalendarDays, Clock3, Radio } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { RADIO_SHOWS } from "@/lib/radio-content"

export default function SchedulePage() {
  const programs = RADIO_SHOWS
    .filter((show) => show.language === "Hindi" || show.language === "Telugu")
    .sort((a, b) => (a.startMinute ?? 0) - (b.startMinute ?? 0))

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FrequencyBar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
            <CalendarDays className="h-4 w-4" aria-hidden="true" /> Weekly schedule · Eastern Time
          </p>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">Radio Nyra Hindi & Telugu Show Schedule</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Browse the recurring Radio Nyra programs, hosts, and airtimes for Hindi HD4 and Telugu HD3. All listed times are Eastern Time (ET).
          </p>
        </header>

        <section aria-label="Radio Nyra weekly programs" className="grid gap-4 md:grid-cols-2">
          {programs.map((show) => (
            <article key={show.slug} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <Radio className="h-3.5 w-3.5" aria-hidden="true" /> {show.language} · {show.station}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" /> {show.schedule} ET
                </span>
              </div>
              <h2 className="mt-4 text-xl font-extrabold tracking-tight">{show.name}</h2>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">Hosted by {show.host}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{show.description}</p>
              <Link href={`/shows/${show.slug}`} className="mt-4 inline-flex text-sm font-bold text-primary hover:underline">
                About this show
              </Link>
            </article>
          ))}
        </section>

        <p className="mt-10 text-sm text-muted-foreground">
          Want to listen now? <Link href="/" className="font-bold text-primary hover:underline">Listen live to Radio Nyra</Link> or <Link href="/shows" className="font-bold text-primary hover:underline">browse all shows</Link>.
        </p>
      </main>
      <Footer />
    </div>
  )
}
