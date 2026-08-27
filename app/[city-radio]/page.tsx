import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CITY_RADIO_MARKETS, getCityRadioMarket } from "@/lib/market-radio-data"
import { Headphones, MapPin, Megaphone, Radio, Users } from "lucide-react"

type Params = Promise<{ "city-radio": string }>

export function generateStaticParams() {
  return CITY_RADIO_MARKETS.map((market) => ({
    "city-radio": market.path.replace("/", ""),
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const route = (await params)["city-radio"]
  const market = getCityRadioMarket(route.replace(/-radio$/, ""))
  if (!market) return {}

  const title = `Radio Nyra ${market.city} | Indian Radio`
  const description = `${market.description} Listen on ${market.frequency} and advertise with Radio Nyra in ${market.regionLabel}.`

  return {
    title,
    description: description.slice(0, 158),
    alternates: {
      canonical: market.path,
    },
    openGraph: {
      title,
      description,
      url: `https://www.radionyra.com${market.path}`,
      siteName: "Radio Nyra",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function CityRadioPage({ params }: { params: Params }) {
  const route = (await params)["city-radio"]
  const market = getCityRadioMarket(route.replace(/-radio$/, ""))

  if (!market) {
    notFound()
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RadioStation",
        "@id": `https://www.radionyra.com${market.path}#station`,
        name: `Radio Nyra ${market.city}`,
        url: `https://www.radionyra.com${market.path}`,
        logo: "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        areaServed: market.coverage.map((name) => ({ "@type": "City", name })),
        broadcastFrequency: {
          "@type": "BroadcastFrequencySpecification",
          displayName: market.frequency,
        },
        sameAs: [
          "https://facebook.com/radionyrausa",
          "https://instagram.com/radionyrausa",
          "https://youtube.com/c/RadioNyraUSA",
          "https://linkedin.com/company/radionyrausa",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `https://www.radionyra.com${market.path}#webpage`,
        url: `https://www.radionyra.com${market.path}`,
        name: `Radio Nyra ${market.city}`,
        description: market.description,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />
      <main>
        <section className="bg-primary/5 border-b border-primary/10 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-primary">
                <Radio className="h-4 w-4" />
                {market.regionLabel}
              </p>
              <h1 className="max-w-4xl text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
                Radio Nyra {market.city} Indian Radio
              </h1>
              <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-muted-foreground md:text-lg">
                {market.description} Listeners tune in for Hindi music, South Asian community updates, artist interviews, event coverage, and local sponsor messages built for the {market.regionLabel} audience.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-none bg-primary px-8 py-6 text-xs font-black uppercase tracking-widest text-white">
                  <Link href="/">Listen Live</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none px-8 py-6 text-xs font-black uppercase tracking-widest">
                  <Link href="/advertise">Advertise in {market.city}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
            <div className="border border-border bg-card p-6">
              <Headphones className="mb-5 h-8 w-8 text-primary" />
              <h2 className="text-xl font-black uppercase tracking-tight">Local Frequency</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-muted-foreground">{market.frequency}</p>
            </div>
            <div className="border border-border bg-card p-6">
              <Users className="mb-5 h-8 w-8 text-primary" />
              <h2 className="text-xl font-black uppercase tracking-tight">Local Host Info</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-muted-foreground">{market.hostInfo}</p>
            </div>
            <div className="border border-border bg-card p-6">
              <Megaphone className="mb-5 h-8 w-8 text-primary" />
              <h2 className="text-xl font-black uppercase tracking-tight">Advertiser CTA</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-muted-foreground">{market.advertiserCopy}</p>
            </div>
          </div>
        </section>

        <section className="bg-muted/20 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-black uppercase tracking-tight">Coverage Across {market.regionLabel}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                This landing page targets the search phrase "{market.searchPhrase}" with useful local listening and advertising information. Radio Nyra supports community groups, cultural organizers, small businesses, artists, and families looking for a trusted South Asian media connection in {market.city}, {market.state}.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {market.coverage.map((place) => (
                  <div key={place} className="flex items-center gap-3 border border-border bg-background p-4 text-sm font-bold">
                    <MapPin className="h-4 w-4 text-primary" />
                    {place}
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link className="text-sm font-black uppercase tracking-widest text-primary hover:underline" href="/markets">
                  Explore market coverage
                </Link>
                <Link className="text-sm font-black uppercase tracking-widest text-primary hover:underline" href="/contact">
                  Contact Radio Nyra
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
