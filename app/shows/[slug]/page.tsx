import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, Headphones, Mic2, Play, Radio, User } from "lucide-react"
import { SeoPageLayout } from "@/components/seo-page-layout"
import { Button } from "@/components/ui/button"
import { SHOW_PROFILES, getPodcastEpisodes } from "@/lib/content-discovery"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return SHOW_PROFILES.map((show) => ({ slug: show.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const show = SHOW_PROFILES.find((item) => item.slug === slug)
  if (!show) return {}

  const title = `${show.name} with ${show.host} | Radio Nyra Show`
  const description = `${show.name} on Radio Nyra ${show.stationLabel}. Hosted by ${show.host}. ${show.description}`

  return {
    title,
    description,
    alternates: { canonical: `/shows/${show.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: show.image }],
      url: `https://www.radionyra.com/shows/${show.slug}`,
      siteName: "Radio Nyra",
      type: "website",
    },
  }
}

export default async function ShowPage({ params }: { params: Params }) {
  const { slug } = await params
  const show = SHOW_PROFILES.find((item) => item.slug === slug)

  if (!show) notFound()

  const relatedEpisodes = getPodcastEpisodes()
    .filter((episode) => {
      const haystack = `${episode.title} ${episode.show} ${episode.host} ${episode.description}`.toLowerCase()
      return haystack.includes(show.name.toLowerCase()) || haystack.includes(show.host.toLowerCase())
    })
    .slice(0, 4)

  const showSchema = {
    "@context": "https://schema.org",
    "@type": "RadioSeries",
    name: show.name,
    description: show.description,
    image: `https://www.radionyra.com${show.image}`,
    productionCompany: {
      "@type": "Organization",
      name: "Radio Nyra",
      url: "https://www.radionyra.com/",
    },
    actor: {
      "@type": "Person",
      name: show.host,
    },
    url: `https://www.radionyra.com/shows/${show.slug}`,
  }

  return (
    <SeoPageLayout title={show.name} subtitle={`Hosted by ${show.host}`} stationKey={show.language}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(showSchema) }} />
      <div className="space-y-10">
        <section className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 rounded-2xl border border-border bg-card p-5 md:p-8 shadow-sm">
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-muted">
            <img src={show.image} alt={`${show.name} hosted by ${show.host}`} className="aspect-square h-full w-full object-cover" />
          </div>
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-primary">
                <Radio className="h-3.5 w-3.5" /> {show.stationLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {show.schedule}
              </span>
            </div>
            <h2 className="flex items-center gap-2 text-2xl font-extrabold uppercase tracking-tight">
              <User className="h-5 w-5 text-primary" /> Meet The Host
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {show.host} hosts {show.name}, a Radio Nyra program focused on {show.category.toLowerCase()} for the Indian Subcontinent diaspora.
            </p>
            <p className="text-base leading-relaxed">{show.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full font-extrabold uppercase tracking-widest text-xs">
                <Link href="/schedule">
                  <Calendar className="mr-2 h-4 w-4" /> Full Schedule
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full font-extrabold uppercase tracking-widest text-xs">
                <Link href="/podcasts">
                  <Headphones className="mr-2 h-4 w-4" /> Related Podcasts
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-2 text-xl font-extrabold uppercase tracking-tight">
              <Mic2 className="h-5 w-5 text-primary" /> Related Episodes
            </h2>
            <Button asChild variant="ghost" className="text-xs font-extrabold uppercase tracking-widest">
              <Link href="/podcasts">Podcast Hub</Link>
            </Button>
          </div>

          {relatedEpisodes.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Related on-demand episodes will appear here when they are available in the Radio Nyra content library.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedEpisodes.map((episode) => (
                <Link
                  key={episode.id}
                  href={`/podcasts?episode=${episode.id}`}
                  className="group flex gap-3 rounded-xl border border-border bg-background p-3 transition-colors hover:border-primary/50"
                >
                  <img src={episode.thumbnail} alt={episode.title} className="h-20 w-28 rounded-lg object-cover bg-muted" loading="lazy" />
                  <span className="min-w-0 flex-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">{episode.show}</span>
                    <span className="line-clamp-2 text-sm font-bold leading-snug group-hover:text-primary">{episode.title}</span>
                    <span className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Play className="h-3 w-3" /> {episode.duration}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </SeoPageLayout>
  )
}

