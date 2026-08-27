import { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { Button } from "@/components/ui/button";
import { MapPin, Megaphone, ArrowRight, Signal, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Markets & Broadcast Coverage | Radio Nyra USA",
  description: "Explore Radio Nyra's broadcast and digital coverage across Raleigh-Durham (99.9 FM HD4/HD3), Atlanta, Baltimore, Cleveland, Columbus, Philadelphia, and St. Louis.",
  keywords: [
    "Radio Nyra Markets", "Raleigh FM Radio Stations", "Indian Radio Atlanta",
    "Telugu Radio Cary", "Hindi Radio USA", "Indian Community Radio NC"
  ],
  openGraph: {
    title: "Markets & Coverage | Radio Nyra",
    description: "Explore Radio Nyra broadcast frequencies and digital streams across 7 major metropolitan markets in the United States.",
    url: "https://www.radionyra.com/markets",
    siteName: "Radio Nyra",
    type: "website"
  }
};

const MARKETS = [
  {
    slug: "raleigh-durham",
    name: "Raleigh-Durham, NC",
    type: "On-Air FM Broadcast",
    frequency: "99.9 FM HD4 (Hindi) & HD3 (Telugu)",
    tagline: "The Flagship Carolinas Indian Community Media Hub",
    description: "Reaching the fast-growing Indian Subcontinent community across Raleigh, Durham, Cary, Morrisville, Chapel Hill, and Apex in North Carolina's Research Triangle.",
    highlights: ["99.9 FM HD4 (Hindi)", "99.9 FM HD3 (Telugu)", "Local Events Hub", "Local Business Advertising"],
    featured: true
  },
  {
    slug: "atlanta",
    name: "Atlanta, GA",
    type: "Digital Stream & App Hub",
    frequency: "24/7 Digital Audio Stream",
    tagline: "Connecting the Vibrant Southeast Diaspora",
    description: "Covering the Atlanta Metro Area, Alpharetta, Johns Creek, Cumming, Duluth, and Marietta with live music, diaspora news, and cultural shows.",
    highlights: ["24/7 Live Stream", "Mobile App Audio", "Southeast Events", "Community Spotlights"],
    featured: false
  },
  {
    slug: "baltimore",
    name: "Baltimore, MD",
    type: "Digital Stream & App Hub",
    frequency: "24/7 Digital Audio Stream",
    tagline: "Mid-Atlantic Diaspora Bridge",
    description: "Tailored audio streaming and diaspora news serving Baltimore City, Columbia, Ellicott City, Towson, and the wider DMV region.",
    highlights: ["Mid-Atlantic Coverage", "DMV Desi Spotlights", "Local Announcements", "Podcasts"],
    featured: false
  },
  {
    slug: "cleveland",
    name: "Cleveland, OH",
    type: "Digital Stream & App Hub",
    frequency: "24/7 Digital Audio Stream",
    tagline: "Northeast Ohio Cultural Connection",
    description: "Serving the Indian Subcontinent professional and student communities across Beachwood, Solon, Westlake, and Greater Cleveland.",
    highlights: ["Northeast Ohio Hub", "Student & Pro Segments", "Bollywood Hits", "Local Business Spotlight"],
    featured: false
  },
  {
    slug: "columbus",
    name: "Columbus, OH",
    type: "Digital Stream & App Hub",
    frequency: "24/7 Digital Audio Stream",
    tagline: "Central Ohio Tech & Culture Hub",
    description: "Connecting tech professionals and diaspora families across Dublin, Westerville, New Albany, and Central Ohio.",
    highlights: ["Central Ohio Coverage", "Dublin Desi Community", "Tech & Cultural News", "Regional Music"],
    featured: false
  },
  {
    slug: "philadelphia",
    name: "Philadelphia, PA",
    type: "Digital Stream & App Hub",
    frequency: "24/7 Digital Audio Stream",
    tagline: "Tri-State Mid-Atlantic Voice",
    description: "Reaching listeners across the Philadelphia Metro, Cherry Hill (NJ), King of Prussia, and Bensalem with premium programming.",
    highlights: ["PA & NJ Coverage", "University Segments", "Corporate Spotlights", "Live HD Streaming"],
    featured: false
  },
  {
    slug: "st-louis",
    name: "St. Louis, MO",
    type: "Digital Stream & App Hub",
    frequency: "24/7 Digital Audio Stream",
    tagline: "Heartland Diaspora Audio Voice",
    description: "High-fidelity audio stream and cultural newsletters serving Chesterfield, St. Charles, Creve Coeur, and the St. Louis metro.",
    highlights: ["Missouri & Illinois Reach", "Community Newsletters", "Cultural Specials", "Local Sponsor Hub"],
    featured: false
  }
];

export default function MarketsHubPage() {
  return (
    <SeoPageLayout
      title="Our Markets & Coverage"
      subtitle="Connecting Indian Subcontinent Communities Across America"
      stationKey="Hindi"
    >
      <div className="space-y-12">
        {/* Header Hero Section */}
        <section className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-sm text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Signal className="w-3.5 h-3.5 animate-pulse" />
            7 Metropolitan Markets & National Reach
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-4">
            Where to Tune In & Connect
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From our flagship on-air broadcast in the Research Triangle Park of North Carolina to digital audio streams in top metropolitan hubs, Radio Nyra unites diaspora communities across the nation.
          </p>
        </section>

        {/* Markets Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MARKETS.map((m) => (
            <div
              key={m.slug}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                m.featured
                  ? "bg-gradient-to-b from-primary/10 via-card to-card border-primary/40 shadow-xl md:col-span-2 lg:col-span-3"
                  : "bg-card border-border/80 hover:border-primary/40 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    m.featured ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {m.type}
                  </span>
                  <span className="text-xs font-bold text-primary italic">
                    {m.frequency}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  {m.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  {m.tagline}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {m.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {m.highlights.map((h, i) => (
                    <span key={i} className="text-[11px] font-semibold bg-muted px-3 py-1 rounded-lg border border-border/50 text-foreground/80">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <Button asChild className="flex-1 rounded-full font-bold uppercase tracking-wider text-xs">
                  <Link href={`/markets/${m.slug}`}>
                    Explore {m.slug === "raleigh-durham" ? "RTP Broadcast" : m.name.split(",")[0]} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full shrink-0" title="Listen Live">
                  <Link href={`/markets/${m.slug}`}>
                    <Headphones className="w-4 h-4 text-primary" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </section>

        {/* Business & Sponsorship Banner */}
        <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest text-white">
              <Megaphone className="w-3.5 h-3.5" /> Multicultural Advertising
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Grow Your Brand in Local Diaspora Markets
            </h3>
            <p className="opacity-90 text-sm md:text-base leading-relaxed">
              Target high-income, community-engaged Indian Subcontinent audiences across Raleigh-Durham on 99.9 FM or nationwide through digital audio, podcasts, and event activations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full font-bold uppercase tracking-widest text-xs px-8 py-6 shadow-md">
              <Link href="/advertise">Advertise with Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-900 border-2 border-white rounded-full font-bold uppercase tracking-widest text-xs px-8 py-6 shadow-md">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  );
}
