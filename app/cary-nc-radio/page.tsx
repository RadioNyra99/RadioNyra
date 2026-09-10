import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"
import Link from "next/link"
import { MapPin, Radio, Megaphone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cary NC Indian Radio | 99.9 FM HD4 & HD3 Radio Nyra",
  description: "Listen to Radio Nyra in Cary, NC on 99.9 FM HD4 (Hindi) & HD3 (Telugu). Serving Cary, Morrisville & RTP with live Bollywood hits, local news & community updates.",
  keywords: ["Cary NC Indian Radio", "Telugu Radio Cary", "Hindi Radio Cary NC", "99.9 FM Cary NC", "Indian Community Cary NC", "Radio Nyra Cary"],
  alternates: {
    canonical: "/cary-nc-radio",
  },
  openGraph: {
    title: "Cary NC Indian Radio | 99.9 FM HD4 & HD3 Radio Nyra",
    description: "Listen to Radio Nyra in Cary, NC on 99.9 FM HD4 (Hindi) & HD3 (Telugu). Serving Cary, Morrisville & RTP with live Bollywood hits, local news & community updates.",
    url: "https://www.radionyra.com/cary-nc-radio",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function CaryNcRadioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RadioStation",
        "@id": "https://www.radionyra.com/cary-nc-radio#station",
        "name": "Radio Nyra Cary NC",
        "url": "https://www.radionyra.com/cary-nc-radio",
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
        "areaServed": "Cary, North Carolina",
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
      title="Cary NC Indian Radio"
      subtitle="99.9 FM HD4 (Hindi) & HD3 (Telugu) Serving Cary's Premier South Asian Community"
      stationKey="Hindi"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-10">
        <section className="bg-card border border-border p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" /> Cary, North Carolina Broadcast
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
            The Voice of Cary's Indian Subcontinent Community
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cary, North Carolina is home to one of the most vibrant, educated, and fast-growing Indian and South Asian communities on the East Coast. From neighborhoods like Preston, Highcroft, and Amberly to community gatherings at the Sri Venkateswara Temple and Cary Diwali at Koka Booth Amphitheatre, Radio Nyra connects Cary families with 24/7 premium audio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
            <div className="bg-muted/40 p-4 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Hindi Broadcast</span>
              <span className="text-lg font-black text-primary italic">99.9 FM HD4</span>
              <p className="text-xs text-muted-foreground mt-1">Bollywood chartbusters, morning talk shows, diaspora news.</p>
            </div>
            <div className="bg-muted/40 p-4 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Telugu Broadcast</span>
              <span className="text-lg font-black text-primary italic">99.9 FM HD3</span>
              <p className="text-xs text-muted-foreground mt-1">Tollywood hits, Telugu cultural talk, festive specials.</p>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border p-8 rounded-3xl space-y-4 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tight text-foreground">
            How to Tune in Cary, NC
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Whether you are commuting on Highway 55, I-40, or Maynard Road, tuning in is instant:
          </p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              <span><strong>In Car HD Radio:</strong> Tune to 99.9 FM and switch to HD4 (Hindi) or HD3 (Telugu).</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              <span><strong>Smart Speakers:</strong> Say "Alexa, play Radio Nyra Hindi" at home.</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              <span><strong>Mobile Apps:</strong> Download Radio Nyra on iOS App Store and Google Play.</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link href="/how-to-tune" className="text-primary text-xs font-bold uppercase tracking-wider hover:underline">
              View Detailed In-Car HD Radio Setup Guide &rarr;
            </Link>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Reach Cary Indian Consumers</h3>
            <p className="opacity-90 text-sm max-w-xl">
              Promote your Cary business, restaurant, healthcare clinic, or service to high-income South Asian professionals across Wake County.
            </p>
          </div>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full font-bold uppercase tracking-widest text-xs px-6 py-5 shrink-0">
            <Link href="/advertise">Advertise in Cary</Link>
          </Button>
        </section>
      </div>
    </SeoPageLayout>
  )
}
