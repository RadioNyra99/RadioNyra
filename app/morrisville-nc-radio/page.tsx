import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"
import Link from "next/link"
import { MapPin, Radio, Megaphone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Morrisville NC Indian Radio | 99.9 FM HD4 & HD3 Radio Nyra",
  description: "Tune in to Radio Nyra in Morrisville, NC on 99.9 FM HD4 (Hindi) & HD3 (Telugu). Connecting Morrisville's 46% South Asian community with 24/7 hits & local news.",
  keywords: ["Morrisville NC Indian Radio", "Indian Radio Morrisville", "99.9 FM HD4 Morrisville", "Telugu Radio Morrisville NC", "Morrisville Desi Community", "Radio Nyra Morrisville"],
  alternates: {
    canonical: "/morrisville-nc-radio",
  },
  openGraph: {
    title: "Morrisville NC Indian Radio | 99.9 FM HD4 & HD3 Radio Nyra",
    description: "Tune in to Radio Nyra in Morrisville, NC on 99.9 FM HD4 (Hindi) & HD3 (Telugu). Connecting Morrisville's 46% South Asian community with 24/7 hits & local news.",
    url: "https://www.radionyra.com/morrisville-nc-radio",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function MorrisvilleNcRadioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RadioStation",
        "@id": "https://www.radionyra.com/morrisville-nc-radio#station",
        "name": "Radio Nyra Morrisville NC",
        "url": "https://www.radionyra.com/morrisville-nc-radio",
        "logo": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        "telephone": "+1 (919) 294-4800",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4819 Emperor Blvd Suite 400",
          "addressLocality": "Durham",
          "addressRegion": "NC",
          "postalCode": "27703",
          "addressCountry": "US"
        },
        "areaServed": "Morrisville, North Carolina",
        "broadcastFrequency": [
          {
            "@type": "BroadcastFrequencySpecification",
            "frequencyValue": "99.9",
            "frequencyUnit": "MHz",
            "broadcastChannelSubchannel": "HD4",
            "displayName": "Radio Nyra Hindi (99.9 FM HD4)"
          },
          {
            "@type": "BroadcastFrequencySpecification",
            "frequencyValue": "99.9",
            "frequencyUnit": "MHz",
            "broadcastChannelSubchannel": "HD3",
            "displayName": "Radio Nyra Telugu (99.9 FM HD3)"
          }
        ]
      }
    ]
  }

  return (
    <SeoPageLayout
      title="Morrisville NC Indian Radio"
      subtitle="The Cultural Heart of North Carolina's South Asian Community on 99.9 FM HD4 & HD3"
      stationKey="Hindi"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-10">
        <section className="bg-card border border-border p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" /> Morrisville, North Carolina Hub
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
            North Carolina's Premier South Asian Broadcaster
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            With over 46% of its population identifying as Asian and Indian-American, Morrisville is the cultural and commercial epicentre of the Indian diaspora in North Carolina. Radio Nyra broadcasts directly into Morrisville homes, cars, and businesses on 99.9 FM HD4 (Hindi) and HD3 (Telugu).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
            <div className="bg-muted/40 p-4 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Hindi Channel</span>
              <span className="text-lg font-black text-primary italic">99.9 FM HD4</span>
              <p className="text-xs text-muted-foreground mt-1">Bollywood music, celebrity interviews, daily morning shows.</p>
            </div>
            <div className="bg-muted/40 p-4 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Telugu Channel</span>
              <span className="text-lg font-black text-primary italic">99.9 FM HD3</span>
              <p className="text-xs text-muted-foreground mt-1">Tollywood hits, regional culture, local community spotlights.</p>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border p-8 rounded-3xl space-y-4 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tight text-foreground">
            Local Morrisville Community Connections
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            From Church Street and Davis Drive to Morrisville Town Hall Drive and Park West Village, Radio Nyra is an active media sponsor for local festivals, cricket tournaments, food festivals, and community initiatives.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/community/restaurants" className="text-primary text-xs font-bold uppercase tracking-wider hover:underline">
              Morrisville Indian Restaurant Guide &rarr;
            </Link>
            <Link href="/community/temples" className="text-primary text-xs font-bold uppercase tracking-wider hover:underline">
              Triangle Temples & Cultural Centers &rarr;
            </Link>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Advertise to Morrisville Families</h3>
            <p className="opacity-90 text-sm max-w-xl">
              Target the most concentrated Indian demographic in North Carolina. Custom on-air, digital, and live event sponsorship packages.
            </p>
          </div>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full font-bold uppercase tracking-widest text-xs px-6 py-5 shrink-0">
            <Link href="/advertise">Advertise in Morrisville</Link>
          </Button>
        </section>
      </div>
    </SeoPageLayout>
  )
}
