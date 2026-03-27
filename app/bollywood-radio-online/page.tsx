import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Bollywood Radio Online | Live Hindi Music 24/7",
  description: "Listen to Bollywood radio online on Radio Nyra. Streaming 24/7 Hindi music, Bollywood news, and hit songs live.",
  keywords: ["Bollywood Radio Online", "Hindi Radio USA", "Listen to Bollywood Music", "Indian FM Radio", "Radio Nyra"]
}

export default function BollywoodRadioOnlinePage() {
    return (
        <SeoPageLayout
            title="Bollywood Radio Online"
            subtitle="Your 24/7 Access to the Latest Hindi Hits and Bollywood News"
            stationKey="Hindi"
        >
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4">The Ultimate Destination for Bollywood Radio Online</h2>
                    <p>Welcome to Radio Nyra, your go-to station for non-stop Bollywood entertainment. Whether you are looking for the latest romantic tracks, upbeat party anthems, or soulful classics from the golden era of Hindi cinema, our Bollywood radio online stream has it all.</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4">Why Stream Bollywood Music with Us?</h2>
                    <p>We know how much Bollywood music means to Indians living around the world. Our carefully curated playlists feature top artists like Arijit Singh, Shreya Ghoshal, and Neha Kakkar, ensuring that every song perfectly matches your mood. Listen to Bollywood radio online and experience high-quality streaming wherever you go.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">More Than Just Movies & Music</h2>
                    <p>We bring you more than just great songs. Tune in for the latest Bollywood gossip, exclusive celebrity interviews, movie reviews, and box office updates. Stay connected to the glamorous world of Mumbai right from the comfort of your home or car.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">How to Listen Live</h2>
                    <p>Experience the magic of Bollywood radio online directly from this page using our interactive player. You can also listen on the go using our official Radio Nyra app, or via smart voice assistants. Just say "Open Radio Nyra Hindi" to your Alexa or Google Home device.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Be Part of the Radio Nyra Family</h2>
                    <p>Join thousands of active listeners who tune in every day. Follow us on social media for behind-the-scenes content, participate in live show requests, and make Radio Nyra your daily soundtrack.</p>
                </section>
            </div>
        </SeoPageLayout>
    )
}
