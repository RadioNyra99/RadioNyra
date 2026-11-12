import type { Metadata } from "next"
import Link from "next/link"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Telugu Radio USA | Stream Tollywood & Telugu Hits Live",
  description: "Listen live to Radio Nyra Telugu for Tollywood music, Telugu news, and community programming in the USA.",
  keywords: ["Telugu Radio USA", "Tollywood Radio Online", "Telugu Fm USA", "Telugu News Radio", "Radio Nyra Telugu"],
  alternates: {
    canonical: "/telugu-radio-usa",
  },
  openGraph: {
    title: "Telugu Radio USA | Stream Tollywood & Telugu Hits Live",
    description: "Listen live to Radio Nyra Telugu for Tollywood music, Telugu news, and community programming in the USA.",
    url: "https://www.radionyra.com/telugu-radio-usa",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function TeluguRadioUsaPage() {
    return (
        <SeoPageLayout
            title="Telugu Radio USA"
            subtitle="Live Telugu music, news, and community programming from Raleigh-Durham"
            stationKey="Telugu"
        >
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Listen to Telugu Radio in the USA</h2>
                    <p>Radio Nyra Telugu brings together Tollywood songs, Telugu news, and community programming for listeners in the United States. Use the Listen Live button above to start the 99.9 FM HD3 stream.</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4">Why Listen to Telugu Radio Online?</h2>
                    <p>Staying connected to your roots while living abroad is essential. Our 24/7 dedicated Telugu stream ensures that you never miss out on the cultural heartbeat of Andhra Pradesh and Telangana. We bring you constant updates on Tollywood news, local community events, and much more.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Top Telugu Radio Shows</h2>
                    <p>Radio Nyra Telugu pairs music and conversation with community updates. Visit the <Link className="text-primary underline underline-offset-4" href="/schedule">broadcast schedule</Link> and <Link className="text-primary underline underline-offset-4" href="/rtv-news">RTV Telugu news</Link> for more ways to explore current programming.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">How to Tune In</h2>
                    <p>Listen on this page, or tune to 99.9 FM HD3 in the Raleigh-Durham area. Playback starts only when you choose Listen Live.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Join Our Growing Community</h2>
                    <p>Explore more conversations on the <Link className="text-primary underline underline-offset-4" href="/youtube">Radio Nyra YouTube channel</Link> and find community programming across the site.</p>
                </section>
            </div>
        </SeoPageLayout>
    )
}
