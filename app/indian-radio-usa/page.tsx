import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Indian Radio USA | #1 Indian Subcontinent Live Radio",
  description: "Radio Nyra is the premier Indian radio station in the USA. We bring you Bollywood, Tollywood, diverse programming, and community news 24/7.",
  keywords: ["Indian Radio USA", "Indian Subcontinent Radio", "Desi Radio Station", "Hindi Telugu Radio", "Radio Nyra"]
}

export default function IndianRadioUsaPage() {
    return (
        <SeoPageLayout
            title="Indian Radio USA"
            subtitle="The #1 Indian Subcontinent Radio Network Bringing Home Closer to You"
            stationKey="Hindi"
        >
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4">The Leading Indian Radio Station in the USA</h2>
                    <p>Radio Nyra proudly stands as the premier Indian radio network in the United States, keeping the Indian Subcontinent community connected to their roots. As the top Indian radio USA broadcaster, we deliver an unmatched mix of music, news, and talk programming tailored specifically for the NRI audience.</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4">A Diverse Musical Experience</h2>
                    <p>The Indian subcontinent is incredibly diverse, and so is our programming. Whether you are searching for high-energy Bollywood tracks, soulful Telugu melodies, or regional cultural segments, our stations have you covered. Radio Nyra represents the true essence of Indian Radio USA, offering multiple HD channels to cater to diverse linguistic preferences.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Community Focused Programming</h2>
                    <p>We are a community-first organization. Our daily talk shows cover local events, immigration updates, health advice, and everyday topics that matter to Indians living abroad. We bridge the gap between the USA and India, ensuring our listeners are well-informed and entertained.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Listen Across the Nation</h2>
                    <p>With our widespread terrestrial coverage in cities like Raleigh-Durham, Atlanta, Baltimore, Columbus, and Philadelphia, along with our global digital presence, tuning into Indian radio USA is completely effortless. Stream us online, via our mobile apps, or simply interact with your smart speaker devices.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                    <p>Welcome to Radio Nyra. Your voice, your platform, your ultimate Indian radio USA connection. Tune in live right now using the play button above, and let the music speak to your soul.</p>
                </section>
            </div>
        </SeoPageLayout>
    )
}
