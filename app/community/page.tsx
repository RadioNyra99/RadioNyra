import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, CalendarDays, ExternalLink, Handshake, MapPin, MessageCircle, Newspaper, Ticket, Users } from "lucide-react"
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

const communityStats = [
  { value: "17", label: "organizations we work alongside" },
  { value: "50+", label: "major events supported each year" },
  { value: "250K+", label: "combined annual event attendees" },
  { value: "100K+", label: "community members impacted" },
]

const partnerGroups = [
  {
    title: "Temples & Faith",
    count: "04",
    organizations: [
      "Sri Venkateswara Temple of NC",
      "BAPS Shri Swaminarayan Mandir",
      "Chinmaya Mission Raleigh Durham",
      "Sri Shirdi Sai Baba Mandir of NC",
    ],
  },
  {
    title: "Cultural Hubs",
    count: "04",
    organizations: ["Hindu Society of North Carolina", "Apna RTP", "HumSub", "KIRAN"],
  },
  {
    title: "Regional & Language",
    count: "07",
    organizations: [
      "Tamil Sangam of Carolina",
      "TATA of NC",
      "TUTA NC",
      "Triangle Telugu Group Association",
      "Sampige NC Kannada Association",
      "Triangle Gujarati Sangam",
      "Triangle Bengali Association",
    ],
  },
  {
    title: "Professional Networks",
    count: "02",
    organizations: ["NC Indian American Technologists", "NC Indian American Professionals"],
  },
]

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

        <section className="border-b border-border bg-muted/25 py-8 sm:py-10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-5 rounded-3xl border border-border bg-card p-5 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Fastest way to reach the community</p>
                <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">Join Radio Nyra on WhatsApp.</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">Get community announcements, event updates, and Radio Nyra news directly on your phone.</p>
              </div>
              <a href="https://wa.me/19192944800" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-extrabold text-white transition-colors hover:bg-emerald-700"><MessageCircle className="h-4 w-4" />Join the WhatsApp community</a>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-[#f7f6f3] py-10 dark:bg-background sm:py-14">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-5 flex items-start gap-3 sm:gap-4">
              <div className="h-14 w-2 shrink-0 rounded-sm bg-[#8f2118] sm:h-16" />
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#8f2118] dark:text-red-300">Channel 07 · Community Partners</p>
                <h2 className="mt-1 text-2xl font-black uppercase leading-[.98] tracking-tight text-foreground sm:text-4xl">Associations &amp;<br className="sm:hidden" /> Community Partners</h2>
              </div>
            </div>
            <p className="max-w-4xl rounded-xl bg-[#f5eceb] px-4 py-3 text-xs font-medium leading-relaxed text-[#5c302d] dark:bg-red-950/25 dark:text-red-100 sm:px-5 sm:py-4 sm:text-sm">
              Trust travels through people. When a temple, a cultural group, or a professional network welcomes a brand, every family in that circle hears about it from someone they know. For twelve years we have grown alongside these organizations, covering their events and announcing their programs.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-[#8f2118] p-4 text-white sm:grid-cols-4 sm:gap-5 sm:p-6">
              {communityStats.map((stat, index) => (
                <div key={stat.label} className={`${index > 0 ? "border-l border-white/20 pl-3 sm:pl-5" : ""}`}>
                  <p className="text-2xl font-black leading-none tracking-tight sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 max-w-36 text-[9px] leading-relaxed text-white/75 sm:text-[10px]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 md:gap-4">
              <PartnerCategory group={partnerGroups[0]} />
              <PartnerCategory group={partnerGroups[1]} />
              <PartnerCategory group={partnerGroups[2]} />
              <div className="flex flex-col gap-3 md:gap-4">
                <PartnerCategory group={partnerGroups[3]} />
                <div className="rounded-2xl bg-[#f5eceb] p-4 text-xs font-semibold leading-relaxed text-[#78302a] dark:bg-red-950/25 dark:text-red-100 sm:p-5">
                  Every one is a community of many families, so one introduction reaches a whole circle of trusted households.
                </div>
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

        <section className="bg-background py-10 sm:py-14">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-6 max-w-2xl"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Around the Triangle</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Community places to explore.</h2></div>
            <div className="grid gap-4 md:grid-cols-2">
              <a href="https://hookyentertainment.com/cary/home/" target="_blank" rel="noopener noreferrer" className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 sm:grid-cols-[200px_1fr]">
                <img src="/hooky-holiday-showcase-event.webp" alt="Hooky Entertainment community showcase" loading="lazy" className="h-44 w-full object-cover sm:h-full" />
                <div className="flex flex-col justify-center p-5"><span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Ticket className="h-5 w-5" /></span><h3 className="font-extrabold group-hover:text-primary">Hooky Entertainment</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Family entertainment, movies, bowling, and games in Cary.</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">Explore Hooky Cary <ExternalLink className="h-3.5 w-3.5" /></span></div>
              </a>
              <a href="https://www.shopbriercreekcommons.com/location" target="_blank" rel="noopener noreferrer" className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 sm:grid-cols-[200px_1fr]">
                <div className="flex min-h-44 items-center justify-center bg-gradient-to-br from-[#0b1631] to-[#263b67] text-white sm:min-h-0"><Building2 className="h-12 w-12 text-red-300" /></div>
                <div className="flex flex-col justify-center p-5"><span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span><h3 className="font-extrabold group-hover:text-primary">Brier Creek Commons</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">A Raleigh destination for shopping, dining, entertainment, and community happenings.</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">Visit Brier Creek Commons <ExternalLink className="h-3.5 w-3.5" /></span></div>
              </a>
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

function PartnerCategory({ group }: { group: { title: string; count: string; organizations: string[] } }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between gap-3 bg-[#8f2118] px-4 py-2.5 text-white">
        <h3 className="text-xs font-black uppercase tracking-[.08em] sm:text-sm">{group.title}</h3>
        <span className="text-sm font-black text-amber-300">{group.count}</span>
      </div>
      <ul className="grid gap-x-4 gap-y-2 p-4 sm:grid-cols-2 sm:p-5">
        {group.organizations.map((organization) => (
          <li key={organization} className="flex items-start gap-2 text-xs leading-relaxed text-foreground/85 sm:text-sm">
            <span className="mt-0.5 text-amber-600" aria-hidden>•</span>{organization}
          </li>
        ))}
      </ul>
    </article>
  )
}

