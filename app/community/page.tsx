import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CalendarDays, ExternalLink, Handshake, MapPin, Newspaper, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { COMMUNITY_LINKS, getNewsItems, getPartnerHighlights } from "@/lib/content-discovery"
import { pastEvents, upcomingEvents } from "@/lib/event-data"

export const metadata: Metadata = {
  title: "Community & Events",
  description:
    "Explore Radio Nyra community events, Indian diaspora resources, cultural programs, partner highlights, temples, restaurants, and local updates.",
  alternates: { canonical: "/community" },
}

export default function CommunityPage() {
  const partners = getPartnerHighlights().slice(0, 8)
  const updates = getNewsItems().slice(0, 4)
  const featuredPastEvents = pastEvents.slice(0, 6)

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <FrequencyBar />

      <main>
        <section className="bg-zinc-950 text-white py-12 md:py-16 border-b border-zinc-800">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-300 mb-4">
                <Users className="h-4 w-4" /> Indian Diaspora Hub
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Community, Culture, Events & Local Discovery
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-300 leading-relaxed">
                A focused hub for Triangle Indian diaspora events, cultural programs, local guides, partner organizations, community announcements, and Radio Nyra coverage.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase tracking-widest">
                  <Link href="/events">
                    <CalendarDays className="mr-2 h-4 w-4" /> Events Calendar
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 font-extrabold uppercase tracking-widest">
                  <Link href="/directory">
                    <MapPin className="mr-2 h-4 w-4" /> Local Directory
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-border/50">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {COMMUNITY_LINKS.map((item) => (
                <Link key={item.id} href={item.href} className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <h2 className="text-base font-extrabold uppercase tracking-tight group-hover:text-primary">{item.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-primary">
                    Browse <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
              <div>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary mb-2">Events</p>
                    <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">Upcoming & Recent Programs</h2>
                  </div>
                  <Button asChild variant="outline" className="rounded-full text-xs font-extrabold uppercase tracking-widest hidden sm:inline-flex">
                    <Link href="/events">All Events</Link>
                  </Button>
                </div>

                {upcomingEvents.length === 0 ? (
                  <div className="mb-6 rounded-xl border border-dashed border-border bg-muted/20 p-6">
                    <CalendarDays className="mb-3 h-8 w-8 text-muted-foreground/50" />
                    <h3 className="text-lg font-extrabold uppercase tracking-tight">No Upcoming Events Published</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Event submissions and partner announcements can be added through the events page.
                    </p>
                    <Button asChild className="mt-4 rounded-full text-xs font-extrabold uppercase tracking-widest">
                      <Link href="/events/submit">Submit An Event</Link>
                    </Button>
                  </div>
                ) : null}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredPastEvents.map((event) => (
                    <Link key={event.id} href="/events" className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-primary">{event.date}</p>
                        <h3 className="mt-1 line-clamp-2 text-sm font-extrabold uppercase tracking-tight group-hover:text-primary">{event.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <aside className="space-y-6">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h2 className="mb-4 flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest">
                    <Newspaper className="h-4 w-4 text-primary" /> Community Updates
                  </h2>
                  <div className="space-y-3">
                    {updates.map((item) => (
                      <Link key={item.id} href={item.href} className="group block rounded-lg border border-border/60 bg-background p-3 hover:border-primary/50 transition-colors">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">{item.dateLabel}</p>
                        <h3 className="line-clamp-2 text-sm font-bold leading-snug group-hover:text-primary">{item.title}</h3>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <h2 className="mb-4 flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest">
                    <Handshake className="h-4 w-4 text-primary" /> Partner Highlights
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {partners.map((partner) => (
                      <Link
                        key={partner.id}
                        href={partner.href}
                        target={partner.external ? "_blank" : undefined}
                        rel={partner.external ? "noopener noreferrer" : undefined}
                        className="group rounded-lg border border-border/60 bg-background p-3 text-center transition-colors hover:border-primary/50"
                      >
                        <img src={partner.image} alt={partner.title} className="mx-auto mb-2 h-12 w-full object-contain" loading="lazy" />
                        <p className="line-clamp-2 text-[11px] font-bold leading-tight group-hover:text-primary">{partner.title}</p>
                        {partner.external && <ExternalLink className="mx-auto mt-1 h-3 w-3 text-muted-foreground" />}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

