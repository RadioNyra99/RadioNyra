import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { YouTubeHub } from "@/components/youtube-hub"
import { generateVideoSchema } from "@/lib/seo-schemas"

export const metadata: Metadata = {
    title: "YouTube Hub | Watch Celeb Interviews, Shorts & Music | Radio Nyra",
    description: "Explore Radio Nyra YouTube Hub: Watch latest uploads, trending shorts, celebrity interviews, kids stories, and Indian community events.",
    openGraph: {
        title: "Radio Nyra YouTube Hub | Live Streams, Interviews & Music",
        description: "Watch Bollywood celeb interviews, trending shorts, and Indian Subcontinent community events.",
        images: ["/og-image.png"]
    }
}

export default function YouTubePage() {
    const videoSchema = generateVideoSchema({
        title: "Exclusive Interview with Bollywood Superstar",
        description: "Candid conversation with Bollywood star on Radio Nyra.",
        thumbnailUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
        uploadDate: "2026-07-20",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    });

    return (
        <div className="min-h-screen bg-background font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />
            <Navigation />
            <FrequencyBar />
            <main>
                <YouTubeHub />
            </main>
            <Footer />
        </div>
    )
}
