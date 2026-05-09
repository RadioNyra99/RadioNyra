"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Lightbox } from "@/components/lightbox"

export default function GalleryClient({ data }: { data: { title: string; images: string[] } }) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = (index: number) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
    }

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter border-l-8 border-primary pl-6">
                                {data.title}
                            </h1>
                            <a
                                href="/gallery"
                                className="hidden md:inline-flex items-center justify-center text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors border-b-2 border-primary/20 pb-1"
                            >
                                ← Back to Galleries
                            </a>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {data.images.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => openLightbox(index)}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted/30 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary/50"
                                >
                                    <img
                                        src={image}
                                        alt={`${data.title} - Image ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white text-[10px] font-black uppercase tracking-widest border-2 border-white px-4 py-2">View Image</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex justify-center md:hidden">
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

            <Lightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                images={data.images}
                currentIndex={currentIndex}
                onNavigate={setCurrentIndex}
            />

            <Footer />
        </div>
    )
}
