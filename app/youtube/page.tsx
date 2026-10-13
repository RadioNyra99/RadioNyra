import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { YouTubeHub } from "@/components/youtube-hub"
import { generateVideoSchema } from "@/lib/seo-schemas"
import { SITE_VIDEOS } from "@/lib/youtube-service"

export const metadata: Metadata = {
    title: "YouTube Hub | Watch Celeb Interviews, Shorts & Music",
    description: "Explore Radio Nyra YouTube Hub: Watch latest uploads, trending shorts, celebrity interviews, kids stories, and Indian community events.",
    openGraph: {
        title: "Radio Nyra YouTube Hub | Live Streams, Interviews & Music",
        description: "Watch Bollywood celeb interviews, trending shorts, and Indian Subcontinent community events.",
        images: ["/og-image.png"]
    }
}

export default function YouTubePage() {
    const featuredVideo = SITE_VIDEOS[0]
    const videoSchema = generateVideoSchema({
        title: featuredVideo.title,
        description: featuredVideo.description,
        thumbnailUrl: featuredVideo.thumbnailHigh || featuredVideo.thumbnail,
        uploadDate: featuredVideo.publishedAt,
        duration: featuredVideo.duration,
        embedUrl: featuredVideo.embedUrl,
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
