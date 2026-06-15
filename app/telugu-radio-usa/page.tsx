import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Telugu Radio USA | Stream Tollywood & Telugu Hits Live",
  description: "Listen to the best Telugu radio in the USA. Streaming 24/7 Tollywood hits, news, and talk shows on Radio Nyra.",
  keywords: ["Telugu Radio USA", "Tollywood Radio Online", "Telugu Fm USA", "Telugu News Radio", "Radio Nyra Telugu"]
}

export default function TeluguRadioUsaPage() {
    return (
        <SeoPageLayout
            title="Telugu Radio USA"
            subtitle="The Ultimate Destination for Tollywood Fans Across the United States"
            stationKey="Telugu"
        >
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Welcome to the #1 Telugu Radio Station in the USA</h2>
                    <p>Are you looking for the perfect blend of nostalgic hits, latest Tollywood chartbusters, and engaging talk shows right here in the United States? You've found your home at Radio Nyra, the premier destination for Telugu Radio USA.</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4">Why Listen to Telugu Radio Online?</h2>
                    <p>Staying connected to your roots while living abroad is essential. Our 24/7 dedicated Telugu stream ensures that you never miss out on the cultural heartbeat of Andhra Pradesh and Telangana. We bring you constant updates on Tollywood news, local community events, and much more.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Top Telugu Radio Shows</h2>
                    <p>At Radio Nyra, we pride ourselves on delivering content that resonates with the NRI community. From morning drive-time shows that energize your day to late-night melodic journeys, our RJs curate the best content for our listeners across the USA.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">How to Tune In</h2>
                    <p>Listening to our Telugu broadcast is easier than ever. You can stream directly from this webpage using the play button above. We are also available on all major smart speakers. Simply ask Alexa, Google Home, or Siri to "Open Radio Nyra Telugu" and instantly immerse yourself in the world of Telugu entertainment.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Join Our Growing Community</h2>
                    <p>Radio Nyra isn't just a broadcasting station; it's a vibrant community of Indian Subcontinents across the United States. Participate in our live contests, call in during our interactive sessions, and be a part of the largest Telugu radio network in America.</p>
                </section>
            </div>
        </SeoPageLayout>
    )
}
