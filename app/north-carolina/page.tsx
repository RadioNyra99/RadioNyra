import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { NC_CITIES } from "@/lib/nc-data"
import { MapPin, Radio, Users, Building, ArrowRight, ShieldCheck, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "North Carolina South Asian Community Hubs",
  description:
    "Explore Radio Nyra's dedicated hubs across the Research Triangle: Morrisville, Cary, Raleigh, Durham, Apex, Chapel Hill, Wake Forest, and RTP. 99.9 FM HD4/HD3 radio coverage, local events, dining, and community resources.",
}

export default function NorthCarolinaHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FrequencyBar />

      <main className="pb-16">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-4">
              <MapPin className="w-3.5 h-3.5" /> North Carolina Community Network
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight italic mb-4">
              Connecting North Carolina's <span className="text-primary">South Asian Diaspora</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-medium">
              Over 100,000 South Asian residents call the Research Triangle home. Radio Nyra broadcasts on 99.9 FM HD4 (Hindi) & HD3 (Telugu) across all eight premier Triangle cities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild className="rounded-full px-6 font-bold uppercase tracking-wide">
                <Link href="/near-me">
                  <Sparkles className="w-4 h-4 mr-2" /> Find What's Near Me
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 font-bold uppercase tracking-wide">
                <Link href="/events">Explore Triangle Events</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 8 CITIES GRID */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-1">Local Coverage</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">8 Canonical City Hubs</h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Select your city below for curated Indian restaurants, temples, grocery markets, school resources, and local FM tuning guides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {NC_CITIES.map((city) => (
                <div
                  key={city.id}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-primary/60 hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {city.county}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-muted-foreground">
                        <Radio className="w-3.5 h-3.5 text-primary" /> 99.9 FM
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold uppercase tracking-tight group-hover:text-primary transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-primary font-bold mt-0.5 mb-3">{city.tagline}</p>
                    <p className="text-xs text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                      {city.description}
                    </p>

                    <div className="space-y-1.5 py-3 border-t border-border/40 text-[11px]">
                      <div className="flex items-center justify-between text-muted-foreground">
                        <span>Demographics:</span>
                        <span className="font-bold text-foreground">{city.indianPopulationShare}</span>
                      </div>
                      <div className="flex items-center justify-between text-muted-foreground">
                        <span>Hindi Audio:</span>
                        <span className="font-bold text-foreground">99.9 HD4</span>
                      </div>
                      <div className="flex items-center justify-between text-muted-foreground">
                        <span>Telugu / RTV:</span>
                        <span className="font-bold text-foreground">99.9 HD3</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                    <Link href={`/north-carolina/${city.slug}`} className="flex items-center justify-center gap-1 font-bold uppercase text-xs">
                      <span>Explore {city.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BROADCAST SUMMARY */}
        <section className="py-12 bg-muted/30 border-y border-border/40">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-3">Broadcasting 24/7 Across The Research Triangle</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Radio Nyra's broadcast studios are headquartered at 4819 Emperor Blvd, Durham, NC 27703. We cover the entire triangle region via high-definition digital radio and global digital streaming.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-1">In The Car</p>
                <p className="text-xs text-muted-foreground">Tune to 99.9 FM, select HD4 for Hindi hits or HD3 for Telugu music &amp; RTV News.</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-1">Smart Speakers</p>
                <p className="text-xs text-muted-foreground">Say "Alexa, play Radio Nyra" or "Hey Google, stream Radio Nyra Hindi/Telugu".</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-1">Mobile &amp; Web</p>
                <p className="text-xs text-muted-foreground">Instant zero-buffer streaming on radionyra.com and our free iOS &amp; Android apps.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
