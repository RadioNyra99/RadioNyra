"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Utensils, MapPin, Star, Clock } from "lucide-react"

export default function RestaurantsPage() {
    const restaurants = [
        {
            name: "Lime & Lemon Indian Grill & Bar",
            description: "Highly rated Indian & Asian fusion in Raleigh",
            highlights: "Tandoori, North Indian curries",
            location: "Raleigh",
            rating: "4.8",
            image: "/restaurant/restaurant/Lime & Lemon Indian Grill & Bar.jpg"
        },
        {
            name: "Bazil Indian Cuisine",
            description: "Modern Indian dining with rich flavors",
            highlights: "Fusion plates, Contemporary Indian",
            location: "Durham",
            rating: "4.7",
            image: "/restaurant/restaurant/Bazil Indian Cuisine.jpg"
        },
        {
            name: "Saffron Indian Cuisine Cary",
            description: "Popular Indian eatery with classic dishes",
            highlights: "Classic curries, Traditional Tandoor",
            location: "Cary",
            rating: "4.6",
            image: "/restaurant/restaurant/Saffron Indian Cuisine Cary.jpg"
        },
        {
            name: "Urban Turban Indian Grill and Bar",
            description: "Top-rated Indian restaurant in Durham",
            highlights: "Street food, Modern Indian",
            location: "Durham",
            rating: "4.8",
            image: "/restaurant/restaurant/Urban Turban Indian Grill and Bar.jpg"
        },
        {
            name: "Bombay Curry",
            description: "Casual Indian comfort food",
            highlights: "North Indian favorites",
            location: "Raleigh",
            rating: "4.5",
            image: "/restaurant/restaurant/Bombay Curry.jpg"
        },
        {
            name: "Masala House",
            description: "Authentic Indian tastes",
            highlights: "Home-style cooking",
            location: "Cary",
            rating: "4.4",
            image: "/restaurant/restaurant/Masala House.jpg"
        },
        {
            name: "Amrut: Taste of India",
            description: "Fine-dining Indian choices",
            highlights: "Vegetarian & vegan options",
            location: "Raleigh",
            rating: "4.7",
            image: "/restaurant/restaurant/Amrut Taste of India.jpg"
        },
        {
            name: "Jalwa Indian Bistro",
            description: "Local favorite for vibrant Indian flavors",
            highlights: "South Indian favorites",
            location: "Durham",
            rating: "4.6",
            image: "/restaurant/restaurant/Jalwa Indian Bistro.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20 text-foreground">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-16 border-l-8 border-primary pl-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-4">
                            Best Indian Restaurants
                        </h1>
                        <p className="text-muted-foreground text-lg font-medium uppercase tracking-widest">
                            Around Raleigh & Durham
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {restaurants.map((rest, i) => (
                            <motion.div
                                key={rest.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group flex flex-col bg-muted/30 border border-border/50 hover:border-primary/50 transition-all overflow-hidden"
                            >
                                {rest.image && (
                                    <div className="relative h-64 w-full overflow-hidden bg-muted">
                                        <img
                                            src={rest.image}
                                            alt={rest.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <div className="p-8 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-1 text-primary">
                                            <Star size={16} fill="currentColor" />
                                            <span className="font-black text-sm">{rest.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                            <MapPin size={12} />
                                            {rest.location}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {rest.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-4">
                                        {rest.description}
                                    </p>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-3">
                                            <Utensils size={18} className="text-primary" />
                                            <p className="text-xs font-bold uppercase tracking-widest">
                                                <span className="text-muted-foreground mr-2">Specialties:</span>
                                                {rest.highlights}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-y border-border/50 py-12">
                        <div>
                            <h4 className="font-black uppercase tracking-widest text-primary mb-2">Cuisine</h4>
                            <p className="text-sm font-bold opacity-70">Authentic & Fusion</p>
                        </div>
                        <div>
                            <h4 className="font-black uppercase tracking-widest text-primary mb-2">Experience</h4>
                            <p className="text-sm font-bold opacity-70">Fine Dining to Casual</p>
                        </div>
                        <div>
                            <h4 className="font-black uppercase tracking-widest text-primary mb-2">Options</h4>
                            <p className="text-sm font-bold opacity-70">Veg & Non-Veg</p>
                        </div>
                    </div>

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
