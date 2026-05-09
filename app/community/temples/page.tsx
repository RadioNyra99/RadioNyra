"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Landmark, MapPin, Heart, Sun } from "lucide-react"

export default function TemplesPage() {
    const places = [
        {
            name: "Sri Venkateswara Temple of North Carolina",
            type: "Hindu Temple",
            description: "A majestic Hindu temple and cultural center dedicated to Lord Venkateshwara, serving as a spiritual cornerstone for the community.",
            location: "Cary, NC",
            features: ["Traditional Architecture", "Daily Worship", "Cultural Events"],
            image: "/temples/temples/Sri%20Venkateswara%20Temple%20of%20North%20Carolina.jpg"
        },
        {
            name: "Kosala Kadampa Buddhist Center",
            type: "Buddhist Center",
            description: "A peaceful sanctuary offering meditation classes and spiritual teachings in the Kadampa Buddhist tradition.",
            location: "Raleigh, NC",
            features: ["Meditation Classes", "Spiritual Support", "Quiet Contemplation"],
            image: "/temples/temples/Kosala%20Kadampa%20Buddhist%20Center.jpg"
        },
        {
            name: "Raleigh North Carolina Temple",
            type: "Spiritual Site",
            description: "A serene and beautiful spiritual site maintained by the Church of Jesus Christ of Latter-day Saints.",
            location: "Raleigh, NC",
            features: ["Garden Grounds", "Peaceful Atmosphere", "Spiritual Worship"],
            image: "/temples/temples/Raleigh%20North%20Carolina%20Temple.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center mb-20 bg-primary/5 py-16 border-2 border-primary/20"
                    >
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-primary italic mb-4">
                            Temples & Spiritual Places
                        </h1>
                        <p className="text-muted-foreground text-sm font-black uppercase tracking-[0.4em]">
                            In Raleigh & Durham
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {places.map((place, i) => (
                            <motion.div
                                key={place.name}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col bg-card border-b-4 border-primary overflow-hidden hover:bg-muted/10 transition-colors"
                            >
                                {place.image && (
                                    <div className="relative h-72 w-full overflow-hidden bg-muted">
                                        <img
                                            src={place.image}
                                            alt={place.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col md:flex-row gap-8 p-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 text-primary mb-4 font-black text-xs uppercase tracking-widest">
                                            <button className="bg-primary text-white p-1 rounded-sm"><Landmark size={14} /></button>
                                            {place.type}
                                        </div>
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{place.name}</h3>
                                        <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                                            {place.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {place.features.map(f => (
                                                <span key={f} className="text-[10px] font-bold uppercase tracking-widest bg-muted px-3 py-1 rounded-full border border-border/50">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:w-64 flex flex-col justify-center items-center md:items-end gap-4 p-6 bg-muted/20 md:bg-transparent">
                                        <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm uppercase tracking-widest">
                                            <MapPin size={18} className="text-primary" />
                                            {place.location}
                                        </div>
                                        <button className="mt-4 md:mt-0 text-xs font-black uppercase tracking-widest text-primary hover:underline flex items-center gap-2">
                                            Learn More <Heart size={14} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-20 text-center p-12 bg-black text-white"
                    >
                        <Sun className="mx-auto text-primary mb-6" size={48} />
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">Spiritual Guidance & Community</h2>
                        <p className="max-w-2xl mx-auto opacity-70 font-medium leading-relaxed uppercase tracking-widest text-sm">
                            Discover peaceful and spiritual destinations in the Triangle area, ideal for worship, meditation, and community gatherings.
                        </p>
                    </motion.div>

                    <div className="mt-32 text-center border-t border-border/50 pt-20">
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-6">
                            Have more <span className="text-primary">Questions?</span>
                        </h3>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest mb-10 max-w-md mx-auto">
                            Check our frequently asked questions for everything you need to know about Radio Nyra.
                        </p>
                        <a
                            href="/faq"
                            className="inline-block bg-primary text-white font-black uppercase tracking-widest px-12 py-4 hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_10px_20px_rgba(235,30,50,0.2)]"
                        >
                            Visit FAQ Page
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
