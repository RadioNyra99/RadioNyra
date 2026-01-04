import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 border-l-8 border-primary pl-6">Latest News</h1>

                    <div className="prose max-w-none text-muted-foreground">
                        <p className="text-xl uppercase tracking-widest font-bold">Coming Soon</p>
                        <p>Stay tuned for the latest updates from Radio Nyra and the community.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
