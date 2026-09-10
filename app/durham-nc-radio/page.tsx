import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"
import Link from "next/link"
import { MapPin, Radio, Megaphone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Durham NC Radio Stations | Listen to Radio Nyra 99.9 FM HD",
  description: "Listen to top Durham NC radio stations live. Radio Nyra broadcasts on 99.9 FM HD4 (Hindi) and HD3 (Telugu) with studios at 4819 Emperor Blvd, Durham, NC.",
  keywords: ["Durham NC Radio Stations", "Indian Radio Durham", "Radio Nyra Durham NC", "99.9 FM Durham", "RTP Indian Community Radio", "Radio Stations in Durham NC"],
  alternates: {
    canonical: "/durham-nc-radio",
  },
  openGraph: {
    title: "Durham NC Radio Stations | Listen to Radio Nyra 99.9 FM HD",
    description: "Listen to top Durham NC radio stations live. Radio Nyra broadcasts on 99.9 FM HD4 (Hindi) and HD3 (Telugu) with studios at 4819 Emperor Blvd, Durham, NC.",
    url: "https://www.radionyra.com/durham-nc-radio",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function DurhamNcRadioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RadioStation",
        "@id": "https://www.radionyra.com/durham-nc-radio#station",
        "name": "Radio Nyra Durham & RTP",
        "url": "https://www.radionyra.com/durham-nc-radio",
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
        "areaServed": "Durham & Research Triangle Park, North Carolina",
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
      title="Durham NC Radio Stations"
      subtitle="Broadcasting Live from 4819 Emperor Blvd Across Durham, RTP & Central North Carolina"
      stationKey="Hindi"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-10">
        <section className="bg-card border border-border p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" /> Corporate HQ & Studios: Durham, NC
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
            Durham & Research Triangle Park (RTP) Broadcast Hub
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Headquartered in Durham at 4819 Emperor Blvd Suite 400, Radio Nyra serves Durham, Duke University students and faculty, biotech professionals across Research Triangle Park (RTP), and neighboring communities. Listen live on 99.9 FM HD4 and HD3 for premium music, entertainment, and news.
          </p>
        </section>

        <section className="bg-card border border-border p-8 rounded-3xl space-y-4 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tight text-foreground">
            Durham Radio Stations Frequency Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-muted/40 p-4 rounded-2xl">
              <span className="text-xs font-bold uppercase text-primary block">99.9 FM HD4 / HD3</span>
              <span className="font-bold text-foreground block">Radio Nyra</span>
              <p className="text-xs text-muted-foreground mt-1">Hindi & Telugu multicultural broadcast across Durham & RTP.</p>
            </div>
            <div className="bg-muted/40 p-4 rounded-2xl">
              <span className="text-xs font-bold uppercase text-foreground block">90.1 FM</span>
              <span className="font-bold text-foreground block">WUNC (NPR)</span>
              <p className="text-xs text-muted-foreground mt-1">Public radio, news, and in-depth stories from Chapel Hill/Durham.</p>
            </div>
          </div>
          <div className="pt-2">
            <Link href="/markets/raleigh-durham" className="text-primary text-xs font-bold uppercase tracking-wider hover:underline">
              View Complete Raleigh-Durham Radio Station Guide &rarr;
            </Link>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Advertise Across Durham & RTP</h3>
            <p className="opacity-90 text-sm max-w-xl">
              Connect with top tech, biotech, healthcare, and university professionals living and commuting throughout Durham County.
            </p>
          </div>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full font-bold uppercase tracking-widest text-xs px-6 py-5 shrink-0">
            <Link href="/advertise">Advertise in Durham</Link>
          </Button>
        </section>
      </div>
    </SeoPageLayout>
  )
}
