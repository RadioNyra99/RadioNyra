import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { SocialHub } from "@/components/social-hub"

export const metadata: Metadata = {
    title: "Social Media Hub | Instagram, Facebook, WhatsApp | Radio Nyra",
    description: "Connect with Radio Nyra across Instagram, Facebook, LinkedIn, YouTube, WhatsApp groups, and Telegram channels.",
}

export default function SocialHubPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <FrequencyBar />
            <main className="py-8">
                <SocialHub />
            </main>
            <Footer />
        </div>
    )
}
