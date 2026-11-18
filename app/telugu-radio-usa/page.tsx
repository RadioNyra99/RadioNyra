import type { Metadata } from "next"
import Link from "next/link"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Telugu Radio USA | Music, News & Radio Nyra",
  description: "Explore Telugu music, news, and community programming with Radio Nyra. Listen to on-demand RTV Telugu bulletins and find Raleigh-Durham broadcast details.",
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
            subtitle="Telugu music, news, and community programming from Radio Nyra"
            stationKey="Telugu"
            fallbackAction={{ label: "Listen to Telugu News", href: "/rtv-news" }}
        >
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Radio Nyra Telugu in the USA</h2>
                    <p>Radio Nyra Telugu brings together Tollywood music, Telugu news, and community programming. Raleigh-Durham listeners can find the station on 99.9 FM HD3, and the website offers Telugu news bulletins on demand.</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4">Listen to Telugu News on Demand</h2>
                    <p>Open the <Link className="text-primary underline underline-offset-4" href="/rtv-news">RTV Telugu news archive</Link> to browse dated bulletins, read episode summaries, and play available recordings. Each episode has its own page so you can return to a specific broadcast.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Top Telugu Radio Shows</h2>
                    <p>Radio Nyra Telugu pairs music and conversation with community updates. Visit the <Link className="text-primary underline underline-offset-4" href="/schedule">broadcast schedule</Link> and <Link className="text-primary underline underline-offset-4" href="/rtv-news">RTV Telugu news</Link> for more ways to explore current programming.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">How to Tune In</h2>
                    <p>For local over-the-air listening, tune to 99.9 FM HD3 in Raleigh-Durham. To play a Telugu bulletin online, use the on-demand archive. Visit <Link className="text-primary underline underline-offset-4" href="/how-to-tune">How to Tune</Link> for general HD Radio guidance.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Join Our Growing Community</h2>
                    <p>Explore more conversations on the <Link className="text-primary underline underline-offset-4" href="/youtube">Radio Nyra YouTube channel</Link> and find community programming across the site.</p>
                </section>
            </div>
        </SeoPageLayout>
    )
}
