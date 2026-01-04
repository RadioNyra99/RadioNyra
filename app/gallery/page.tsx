import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
    // Use existing images for a simple initial gallery
    const images = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 border-l-8 border-primary pl-6">Photo Gallery</h1>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((num) => (
                            <div key={num} className="aspect-square bg-gray-100 overflow-hidden relative group">
                                {/* Placeholder since we don't know exactly which numbered images are good for gallery, using generic numbered pattern */}
                                <img
                                    src={`/Images/${num}.jpg`}
                                    alt={`Gallery ${num}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
