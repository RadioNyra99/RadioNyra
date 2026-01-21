"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Play, Calendar, Star, Users, Flame, Heart, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OTTAddaPage() {
    const nowStreaming = [
        { title: "Tere Ishk Mein", language: "Hindi", platform: "Netflix", type: "Romantic drama", tags: ["Must Watch"] },
        { title: "Shambhala", language: "Telugu", platform: "Aha", type: "Supernatural thriller", tags: ["Trending"] },
        { title: "Beauty", language: "Telugu", platform: "ZEE5", type: "Romantic drama", tags: ["New Release"] },
        { title: "Drive", language: "Telugu", platform: "Prime Video", type: "Thriller", tags: ["Trending"] },
        { title: "Andhela Ravamidhi", language: "Telugu", platform: "Prime Video", type: "Musical drama", tags: [] },
        { title: "Jigris", language: "Telugu", platform: "Sun NXT", type: "Comedy drama", tags: ["Family Friendly"] },
        { title: "Mowgli", language: "Telugu", platform: "ETV Win", type: "Romantic adventure", tags: [] },
        { title: "12A Railway Colony", language: "Telugu", platform: "Prime Video", type: "Horror thriller", tags: [] },
        { title: "Raju Weds Rambai", language: "Telugu", platform: "ETV Win", type: "Romantic drama", tags: ["Family Friendly"] },
        { title: "Nayanam (Series)", language: "Telugu", platform: "ZEE5", type: "Sci-fi web series", tags: [] },
        { title: "Premante", language: "Telugu", platform: "Netflix", type: "Romantic comedy", tags: ["Must Watch"] },
        { title: "Jatadhara", language: "Telugu", platform: "Prime Video", type: "Horror comedy", tags: [] },
        { title: "The Great Pre-Wedding Show", language: "Telugu", platform: "ZEE5", type: "Comedy", tags: ["Family Friendly"] },
        { title: "3 Roses – Season 2", language: "Telugu", platform: "Aha", type: "Drama series", tags: ["Trending"] },
        { title: "Kaantha", language: "Telugu", platform: "Netflix", type: "Multilingual", tags: [] },
        { title: "They Call Him OG", language: "Telugu", platform: "Netflix", type: "Action drama", tags: ["Must Watch"] },
        { title: "Mithra Mandali", language: "Telugu", platform: "Prime Video", type: "Comedy", tags: [] },
        { title: "120 Bahadur", language: "Hindi", platform: "Prime Video", type: "War/Action", tags: ["Must Watch"] },
    ];

    const upcoming = [
        { title: "DalDal (Bhumi Pednekar)", language: "Hindi", platform: "Prime Video", date: "~30 Jan 2026", type: "Thriller" },
        { title: "Space Jen: Chandrayaan", language: "Hindi", platform: "(Various)", date: "23 Jan 2026", type: "Docu-drama" },
        { title: "Gustakh Ishq", language: "Hindi", platform: "OTT", date: "23 Jan 2026", type: "Drama" },
        { title: "HIM", language: "Hindi", platform: "OTT", date: "Jan 2026 (early)", type: "Drama" },
        { title: "Steal", language: "English", platform: "OTT", date: "21 Jan 2026", type: "Action" },
        { title: "Finding Her Edge", language: "English", platform: "OTT", date: "22 Jan 2026", type: "Drama" },
        { title: "MCOCA", language: "Hindi", platform: "KableOne", date: "22 Jan 2026", type: "Crime Drama" },
    ];

    const highlights = [
        { title: "Lupin – Season 4", platform: "Netflix", type: "Web series" },
        { title: "De De Pyaar De 2", platform: "Netflix", type: "Bollywood movie" },
        { title: "Heer Express", platform: "JioHotstar", type: "Movie" },
        { title: "Freedom at Midnight – Season 2", platform: "Sony LIV", type: "Series" },
    ];

    const communityFavorites = [
        { title: "Champion", language: "Telugu", note: "Sports drama (Prime Video)" },
        { title: "Stranger Things – Season 5", language: "English", note: "Netflix" },
        { title: "Haq", language: "Hindi", note: "Netflix" },
        { title: "DalDal", language: "Hindi", note: "Upcoming suspense thriller (Prime)" },
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-primary italic mb-4">
                            OTT Adda
                        </h1>
                        <p className="text-muted-foreground text-xl font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                            by Radio Nyra <Flame className="text-primary fill-current" />
                        </p>
                    </motion.div>

                    {/* NOW STREAMING SECTION */}
                    <section className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-10 bg-primary flex items-center justify-center text-white">
                                <Play fill="currentColor" size={24} />
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tight">Now Streaming on OTT</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {nowStreaming.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-card border border-border/50 p-5 hover:border-primary/50 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.platform}</span>
                                        <span className="text-[10px] font-bold text-muted-foreground">{item.language}</span>
                                    </div>
                                    <h3 className="text-lg font-black uppercase leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground mt-1 mb-4">{item.type}</p>

                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none text-[8px] uppercase tracking-tighter">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* UPCOMING & HIGHLIGHTS */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                        {/* UPCOMING */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-10 w-10 bg-black flex items-center justify-center text-white">
                                    <Calendar size={24} />
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Upcoming on OTT (Coming Soon)</h2>
                            </div>
                            <div className="bg-muted/30 border border-border/50 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-black text-white text-[10px] uppercase tracking-[0.2em]">
                                            <th className="p-4">Title</th>
                                            <th className="p-4">Platform</th>
                                            <th className="p-4">Release Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50 text-sm font-medium">
                                        {upcoming.map(item => (
                                            <tr key={item.title} className="hover:bg-primary/5 transition-colors">
                                                <td className="p-4">
                                                    <p className="font-black uppercase">{item.title}</p>
                                                    <p className="text-[10px] text-muted-foreground">{item.language} • {item.type}</p>
                                                </td>
                                                <td className="p-4 text-primary uppercase text-xs font-black">{item.platform}</td>
                                                <td className="p-4 text-xs font-bold">{item.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* HIGHLIGHTS */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-10 w-10 bg-primary flex items-center justify-center text-white">
                                    <TrendingUp size={24} />
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Recent Highlights</h2>
                            </div>
                            <div className="space-y-4">
                                {highlights.map(item => (
                                    <div key={item.title} className="p-4 bg-muted/50 border-l-4 border-primary">
                                        <h4 className="font-black uppercase text-sm">{item.title}</h4>
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                                            {item.platform} | {item.type}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COMMUNITY FAVORITES */}
                    <section className="bg-black text-white p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Users size={200} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <Heart size={32} className="text-primary fill-current" />
                                <h2 className="text-4xl font-black uppercase tracking-tighter italic">Community Favorites</h2>
                            </div>
                            <p className="text-primary font-bold uppercase tracking-widest mb-10 border-l-2 border-primary pl-4">
                                From Our Viewers – What they are watching!
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {communityFavorites.map(fav => (
                                    <div key={fav.title} className="flex items-start gap-4">
                                        <span className="text-primary text-2xl font-black">•</span>
                                        <div>
                                            <h4 className="text-xl font-black uppercase italic">{fav.title}</h4>
                                            <p className="text-sm opacity-60 uppercase tracking-widest mt-1">
                                                {fav.language} — {fav.note}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className="mt-20 text-center">
                        <p className="text-muted-foreground font-black uppercase tracking-[0.2em] text-sm animate-pulse">
                            Stay tuned to Radio Nyra for weekly OTT updates!
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
