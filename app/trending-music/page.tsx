import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { TrendingMusicSection } from "@/components/trending-music-section"
import { Music2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Trending Music & Chartbusters",
  description:
    "Top Bollywood and Tollywood tracks trending across Radio Nyra 99.9 FM HD4 and HD3. Stream the biggest South Asian hits in North Carolina.",
}

export default function TrendingMusicPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FrequencyBar />

      <main className="py-8">
        <TrendingMusicSection />
      </main>

      <Footer />
    </div>
  )
}
