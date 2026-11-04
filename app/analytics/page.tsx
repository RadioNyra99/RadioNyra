import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Activity, AudioLines, Gauge, Search } from "lucide-react"

const reportingSources = [
  {
    title: "Website analytics",
    icon: Activity,
    description:
      "The site supports optional GA4 and Google Tag Manager tags. This workspace does not include a verified analytics report or account data.",
  },
  {
    title: "Search performance",
    icon: Search,
    description:
      "Search Console access is not available here, so query impressions, clicks, average position, and indexing status cannot be reported.",
  },
  {
    title: "Live listening",
    icon: AudioLines,
    description:
      "The player records Listen Live intent separately from audio_stream_started. A button click is not counted as a completed listening session.",
  },
  {
    title: "Core Web Vitals",
    icon: Gauge,
    description:
      "No field or lab report was supplied. LCP, INP, and CLS need to be measured from a named source and comparable reporting window.",
  },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
            Reporting status
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Audience and campaign measurement
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            This page only reports verified data. No analytics or Search Console report is connected in this workspace, so audience totals, demographics, and campaign results are not shown.
          </p>
        </header>

        <section aria-label="Measurement source status" className="grid gap-4 sm:grid-cols-2">
          {reportingSources.map(({ title, icon: Icon, description }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <Icon className="mb-4 h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Explore Radio Nyra</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Listen to the stations or browse current programming while reporting access is arranged.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground" href="/bollywood-radio-online">
              Listen to Hindi
            </Link>
            <Link className="rounded-full border border-border px-5 py-2.5 text-sm font-bold" href="/telugu-radio-usa">
              Listen to Telugu
            </Link>
            <Link className="rounded-full border border-border px-5 py-2.5 text-sm font-bold" href="/schedule">
              View the schedule
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
