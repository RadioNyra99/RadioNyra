import type { Metadata } from "next"
import Link from "next/link"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Indian Radio USA | Hindi & Telugu Live Radio | Radio Nyra",
  description: "Listen to Hindi and Telugu radio online with Radio Nyra. Find Bollywood and Tollywood shows, community news, podcasts, and interviews.",
  keywords: ["Indian Radio USA", "Indian Subcontinent Radio", "Desi Radio Station", "Hindi Telugu Radio", "Radio Nyra"],
  alternates: {
    canonical: "/indian-radio-usa",
  },
  openGraph: {
    title: "Indian Radio USA | Hindi & Telugu Live Radio | Radio Nyra",
    description: "Listen to Hindi and Telugu radio online with Radio Nyra. Find Bollywood and Tollywood shows, community news, podcasts, and interviews.",
    url: "https://www.radionyra.com/indian-radio-usa",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function IndianRadioUsaPage() {
    return (
        <SeoPageLayout
            title="Indian Radio USA"
            subtitle="Hindi and Telugu radio, music, news, and community programming"
            stationKey="Hindi"
        >
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Indian Radio Online with Radio Nyra</h2>
                    <p>Radio Nyra brings Hindi and Telugu music, news, shows, podcasts, and community stories to listeners in the United States. Choose a live stream or explore the on-demand programming on this site.</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4">A Diverse Musical Experience</h2>
                    <p>Explore Hindi Bollywood programming on 99.9 FM HD4 and Telugu programming on 99.9 FM HD3 in Raleigh-Durham. Both station streams are also available online through Radio Nyra.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Community Focused Programming</h2>
                    <p>Radio Nyra programming includes music, interviews, news, and community conversations. Browse the <Link className="text-primary underline underline-offset-4" href="/schedule">broadcast schedule</Link>, <Link className="text-primary underline underline-offset-4" href="/podcasts">podcasts</Link>, and <Link className="text-primary underline underline-offset-4" href="/events">community events</Link>.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Listen Across the Nation</h2>
                    <p>Radio Nyra's broadcast and digital listening options vary by market. See the <Link className="text-primary underline underline-offset-4" href="/markets">markets and coverage page</Link> for local details, or use the live streams from anywhere with an internet connection.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                    <p>Welcome to Radio Nyra. Your voice, your platform, your ultimate Indian radio USA connection. Tune in live right now using the play button above, and let the music speak to your soul.</p>
                </section>
            </div>
        </SeoPageLayout>
    )
}
