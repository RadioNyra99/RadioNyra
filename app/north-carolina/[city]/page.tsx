import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { NC_CITIES, getCityBySlug } from "@/lib/nc-data"
import { getBusinessesByCity } from "@/lib/directory-data"
import { Radio, MapPin, Building2, Utensils, ShoppingBag, Landmark, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Star, Phone, PlusCircle, Sparkles, Calendar } from "lucide-react"

interface CityPageProps {
  params: Promise<{
    city: string
  }>
}

export async function generateStaticParams() {
  return NC_CITIES.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)

  if (!city) {
    return {
      title: "City Hub Not Found | Radio Nyra",
    }
  }

  return {
    title: `${city.name}, NC Indian Community Radio, Events & Directory | Radio Nyra 99.9 FM`,
    description: `Comprehensive South Asian guide for ${city.name}, North Carolina. Listen to Radio Nyra 99.9 FM HD4 (Hindi) & HD3 (Telugu/RTV News). Discover top Indian restaurants, temples, grocery stores, and local community events in ${city.name}.`,
    alternates: {
      canonical: `https://www.radionyra.com/north-carolina/${city.slug}`,
    },
    openGraph: {
      title: `${city.name}, NC South Asian Community Guide & Radio | Radio Nyra`,
      description: `Tune in to Radio Nyra 99.9 FM in ${city.name}, NC. Connect with local Indian events, groceries, temples, and daily Telugu & Hindi broadcasting.`,
      url: `https://www.radionyra.com/north-carolina/${city.slug}`,
    },
  }
}

export default async function CityHubPage({ params }: CityPageProps) {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)

  if (!city) {
    notFound()
  }

  // Schema Markup for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RadioStation",
    name: `Radio Nyra ${city.name}`,
    url: `https://www.radionyra.com/north-carolina/${city.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "NC",
      addressCountry: "US",
    },
    broadcastFrequency: [
      {
        "@type": "BroadcastFrequencySpecification",
        frequencyValue: "99.9",
        frequencyUnit: "MHz",
        broadcastChannelSubchannel: "HD4",
        displayName: "Radio Nyra Hindi",
      },
      {
        "@type": "BroadcastFrequencySpecification",
        frequencyValue: "99.9",
        frequencyUnit: "MHz",
        broadcastChannelSubchannel: "HD3",
        displayName: "Radio Nyra Telugu (RTV News)",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <FrequencyBar />

      <main className="pb-16">
        {/* BREADCRUMB */}
        <div className="bg-muted/40 border-b border-border/40 py-2.5">
          <div className="container mx-auto px-4 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/north-carolina" className="hover:text-primary transition-colors">North Carolina</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-bold">{city.name}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-12 border-b border-border/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-3">
              <MapPin className="w-3.5 h-3.5" /> {city.county}, North Carolina
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight italic mb-3">
              {city.name} <span className="text-primary">South Asian Community</span> Hub
            </h1>
            <p className="text-base sm:text-lg text-primary font-bold mb-4">{city.tagline}</p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              {city.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full px-5 font-bold uppercase tracking-wider text-xs">
                <Link href="/how-to-tune">
                  <Radio className="w-4 h-4 mr-1.5" /> Listen Live in {city.name}
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5 font-bold uppercase tracking-wider text-xs">
                <Link href="/events">Upcoming Events</Link>
              </Button>
              <Button asChild variant="secondary" className="rounded-full px-5 font-bold uppercase tracking-wider text-xs">
                <Link href="/directory">Local Business Directory</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* HOW TO TUNE IN THIS CITY */}
        <section className="py-10 bg-card border-b border-border/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/20 via-primary/5 to-transparent border border-primary/20">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary mb-2">
                <Radio className="w-4 h-4" /> Broadcast Reception Guide
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight mb-2">
                Tuning into Radio Nyra in {city.name}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                {city.listenDetails.receptionTips}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-background/90 p-4 rounded-xl border border-border">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary block mb-1">Hindi Programming</span>
                  <div className="text-lg font-extrabold text-foreground">{city.listenDetails.hdChannelHindi}</div>
                  <p className="text-xs text-muted-foreground mt-1">Bollywood hits, retro classics, morning motivation, and talk shows.</p>
                </div>
                <div className="bg-background/90 p-4 rounded-xl border border-border">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-600 block mb-1">Telugu &amp; RTV News</span>
                  <div className="text-lg font-extrabold text-foreground">{city.listenDetails.hdChannelTelugu}</div>
                  <p className="text-xs text-muted-foreground mt-1">Tollywood chartbusters, cultural programs, and daily RTV Telugu bulletins.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOTSPOTS: TEMPLES, GROCERIES, RESTAURANTS */}
        {city.hotspots && city.hotspots.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="mb-8">
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-1">Local Landmarks</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                  South Asian Hotspots in {city.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {city.hotspots.map((spot) => (
                  <div key={spot.name} className="p-5 bg-card border border-border rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">
                          {spot.type}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">{spot.name}</h3>
                      <p className="text-xs text-muted-foreground font-medium mb-2">{spot.address}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{spot.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* LOCAL BUSINESS DIRECTORY FOR THIS CITY */}
        <section className="py-12 bg-muted/15 border-t border-border/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-1">
                  Community Directory
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                  South Asian Businesses in {city.name}
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Verified restaurants, groceries, temples, legal services &amp; contractors serving {city.name}.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button asChild variant="outline" size="sm" className="rounded-full text-xs font-bold">
                  <Link href="/directory">View Full Directory</Link>
                </Button>
                <Button asChild size="sm" className="rounded-full text-xs font-bold">
                  <Link href="/directory/submit">
                    <PlusCircle className="w-3.5 h-3.5 mr-1" /> Add Business
                  </Link>
                </Button>
              </div>
            </div>

            {getBusinessesByCity(city.name).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {getBusinessesByCity(city.name).map((biz) => (
                  <div key={biz.id} className="p-5 bg-card border border-border rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          {biz.categoryLabel}
                        </span>
                        {biz.rating && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-500" /> {biz.rating} ({biz.reviewCount})
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">{biz.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3 shrink-0 text-muted-foreground" /> {biz.address}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {biz.shortDescription}
                      </p>
                      {biz.offer && (
                        <div className="p-2 rounded-lg bg-primary/5 border border-primary/20 text-[11px] font-bold text-primary mb-3">
                          🎁 {biz.offer}
                        </div>
                      )}
                    </div>
                    <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                      <a href={`tel:${biz.phone}`} className="font-bold text-primary hover:underline flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {biz.phone}
                      </a>
                      <Link href="/directory" className="text-muted-foreground hover:text-foreground font-semibold flex items-center gap-1">
                        Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-card border border-dashed border-border text-center mb-6">
                <Building2 className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
                <h3 className="text-sm font-bold text-foreground mb-1">Own a South Asian business in {city.name}?</h3>
                <p className="text-xs text-muted-foreground max-w-md mx-auto mb-4">
                  Connect with thousands of daily South Asian listeners in {city.name}. Add your listing to our community directory for free.
                </p>
                <Button asChild size="sm" className="rounded-full text-xs font-bold">
                  <Link href="/directory/submit">Submit Free Business Listing</Link>
                </Button>
              </div>
            )}

            {/* COMMUNITY ACTION CTAS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border flex flex-col justify-between">
                <div>
                  <Calendar className="w-5 h-5 text-primary mb-2" />
                  <h4 className="text-xs font-extrabold uppercase text-foreground mb-1">Hosting an Event?</h4>
                  <p className="text-[11px] text-muted-foreground mb-3">
                    Submit your festival, concert, or community meetup to our calendar.
                  </p>
                </div>
                <Button asChild variant="outline" size="sm" className="rounded-full text-xs font-bold w-full">
                  <Link href="/events/submit">Submit Event</Link>
                </Button>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border flex flex-col justify-between">
                <div>
                  <Building2 className="w-5 h-5 text-primary mb-2" />
                  <h4 className="text-xs font-extrabold uppercase text-foreground mb-1">Grow Your Business</h4>
                  <p className="text-[11px] text-muted-foreground mb-3">
                    Feature your brand to South Asian families across {city.name}.
                  </p>
                </div>
                <Button asChild variant="outline" size="sm" className="rounded-full text-xs font-bold w-full">
                  <Link href="/directory/submit">List Business</Link>
                </Button>
              </div>

              <div className="p-4 rounded-xl bg-primary text-primary-foreground flex flex-col justify-between shadow-md">
                <div>
                  <Sparkles className="w-5 h-5 text-white mb-2" />
                  <h4 className="text-xs font-extrabold uppercase text-white mb-1">Advertise on 99.9 FM</h4>
                  <p className="text-[11px] text-white/90 mb-3">
                    Reach 100K+ weekly listeners on HD4 Hindi &amp; HD3 Telugu radio.
                  </p>
                </div>
                <Button asChild size="sm" className="bg-white text-black hover:bg-gray-100 rounded-full text-xs font-bold w-full">
                  <Link href="/advertise">Ad Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY HIGHLIGHTS */}
        {city.communityHighlights && city.communityHighlights.length > 0 && (
          <section className="py-10 bg-muted/20 border-y border-border/40">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight mb-4">
                Community Life &amp; Heritage in {city.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {city.communityHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-background border border-border rounded-lg text-xs">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FREQUENTLY ASKED QUESTIONS */}
        {city.faqs && city.faqs.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" /> {city.name} Community FAQs
              </h2>
              <div className="space-y-4">
                {city.faqs.map((faq, i) => (
                  <div key={i} className="p-5 bg-card border border-border rounded-xl">
                    <h3 className="font-bold text-sm text-foreground mb-2">{faq.question}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* EXPLORE OTHER TRIANGLE CITIES */}
        <section className="py-10 bg-muted/30 border-t border-border/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-base font-extrabold uppercase tracking-wider text-muted-foreground mb-4">
              Explore More Triangle Cities Covered by Radio Nyra 99.9 FM
            </h2>
            <div className="flex flex-wrap gap-2">
              {NC_CITIES.filter((c) => c.slug !== city.slug).map((other) => (
                <Button key={other.id} asChild variant="outline" size="sm" className="rounded-full text-xs font-bold">
                  <Link href={`/north-carolina/${other.slug}`}>{other.name}, NC</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
