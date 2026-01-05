import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

const galleryData: Record<string, { title: string; image: string }> = {
    "2016": {
        title: "New Year 2016 – Bollywood Bash",
        image: "/images/new-year-2016-bollywood-bash.jpg"
    },
    "2018": {
        title: "New Year 2018 – Bollywood Bash",
        image: "/images/new-year-2018-bollywood-bash.jpg"
    },
    "2019": {
        title: "New Year 2019 – Celebrations",
        image: "/images/new-year-2019-celebrations.jpg"
    }
}

export default async function EventGalleryPage({ params }: { params: Promise<{ year: string }> }) {
    const { year } = await params
    const data = galleryData[year]

    if (!data) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 border-l-8 border-primary pl-6">
                            {data.title}
                        </h1>

                        <div className="relative group overflow-hidden rounded-xl border border-border bg-muted/30 p-2 md:p-4 shadow-2xl transition-all duration-500 hover:shadow-primary/10">
                            <div className="aspect-auto flex items-center justify-center bg-black/5 rounded-lg overflow-hidden">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="max-w-full max-h-[70vh] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-xl md:text-2xl font-bold text-foreground tracking-tight opacity-90 italic">
                                    "{data.title}"
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">
                                    Radio Nyra Special Event Gallery
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <a
                                href="/gallery"
                                className="inline-flex items-center justify-center text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors border-b-2 border-primary/20 pb-1"
                            >
                                ← Back to All Galleries
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export function generateStaticParams() {
    return [
        { year: "2016" },
        { year: "2018" },
        { year: "2019" },
    ]
}
