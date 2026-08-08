import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { YouTubeHub } from "@/components/youtube-hub"

export const metadata: Metadata = {
    title: "Video Library | Watch Official Radio Nyra USA Videos",
    description: "Browse the complete video library from @RadioNyraUSA: Celebrity interviews, festival specials, kids storytime, and community programs.",
}

export default function VideoLibraryPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <FrequencyBar />
            <main>
                <YouTubeHub />
            </main>
            <Footer />
        </div>
    )
}
