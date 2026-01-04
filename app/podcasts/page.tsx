import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Play } from "lucide-react"

export default function PodcastsPage() {
    const podcasts = [
        { title: "Episode 1: The Beginning", host: "Sohail", show: "Non Stop Hungama" },
        { title: "Episode 2: Bollywood Talk", host: "Bharti Rathore", show: "Bollywood Bliss" },
        { title: "Episode 3: Morning Vibes", host: "Raj Persaud", show: "Morning Commute" },
    ]

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 border-l-8 border-primary pl-6">Podcast Videos</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {podcasts.map((pod, i) => (
                            <div key={i} className="bg-card border border-border overflow-hidden hover:shadow-xl transition-all group">
                                <div className="relative aspect-video bg-black/80 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="fill-white text-white ml-1" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{pod.show}</div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{pod.title}</h3>
                                    <p className="text-muted-foreground text-sm">Hosted by {pod.host}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
