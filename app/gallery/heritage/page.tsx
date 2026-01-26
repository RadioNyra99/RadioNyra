import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const heritageImages = [
    { src: "/OLD Images/P0105_1-01-45-018_0001.jpg", alt: "Radio Nyra Heritage 1963 - Studio A" },
    { src: "/OLD Images/P0105_1-01-45-018_0002.jpg", alt: "Radio Nyra Heritage 1963 - Equipment Detail" },
    { src: "/OLD Images/P0105_1-01-45-018_0003.jpg", alt: "Radio Nyra Heritage 1963 - Control Room" },
    { src: "/OLD Images/P0105_1-01-45-018_0004.jpg", alt: "Radio Nyra Heritage 1963 - Archive Record" },
    { src: "/OLD Images/P0105_1-01-45-018_0005.jpg", alt: "Radio Nyra Heritage 1963 - Broadcasting Tower" },
    { src: "/OLD Images/P0105_1-01-45-018_0006.jpg", alt: "Radio Nyra Heritage 1963 - Studio B" },
    { src: "/OLD Images/P0105_1-01-45-018_0007.jpg", alt: "Radio Nyra Heritage 1963 - Historical Document" },
    { src: "/OLD Images/P0105_1-01-45-018_0008.jpg", alt: "Radio Nyra Heritage 1963 - Vintage Microphone" },
];

export default function HeritageGalleryPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-12 md:py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <Link href="/gallery" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-8 hover:underline gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Gallery
                    </Link>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic leading-tight">The Heritage Collection</h1>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl italic font-serif">A window into our past. These archives represent the original voice that began broadcasting on November 16, 1963.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {heritageImages.map((img, idx) => (
                            <div key={idx} className="group relative aspect-[4/5] overflow-hidden rounded-sm border-4 border-white shadow-lg bg-muted grayscale hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">{img.alt}</p>
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
