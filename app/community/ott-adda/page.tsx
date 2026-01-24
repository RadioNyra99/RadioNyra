"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Play, Calendar, Star, Users, Flame, Heart, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OTTAddaPage() {
    const nowStreaming = [
        { title: "Cheekatilo", language: "Telugu", platform: "Amazon Prime Video", type: "Horror Thriller", tags: ["New Release"], image: "/OTT%20ADDA/OTT%20ADDA/Cheekatilo.jpg" },
        { title: "Andhela Ravamidhi", language: "Telugu", platform: "Amazon Prime Video", type: "Drama", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/Andhela Ravamidhi.jpg" },
        { title: "Jigris", language: "Telugu", platform: "Sun NXT", type: "Comedy Drama", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/Jigris.jpg" },
        { title: "Drive", language: "Telugu", platform: "Amazon Prime Video", type: "Thriller", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/Drive.jpg" },
        { title: "Beauty", language: "Telugu", platform: "ZEE5", type: "Romantic Entertainer", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/Beauty.jpg" },
        { title: "Premante", language: "Telugu", platform: "Netflix", type: "Romantic Comedy", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/Premante.jpg" },
        { title: "12A Railway Colony", language: "Telugu", platform: "Amazon Prime Video", type: "Horror Thriller", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/12A%20Railway%20Colony.jpg" },
        { title: "Paanch Minar", language: "Telugu", platform: "Amazon Prime Video", type: "Comedy", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/Paanch%20Minar.jpg" },
        { title: "Aaryan", language: "Telugu", platform: "Netflix", type: "Psychological Crime", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/Aaryan.jpg" },
        { title: "Premistunnaa", language: "Telugu", platform: "Aha Video", type: "Romantic Drama", tags: [], image: "/OTT%20ADDA/OTT%20ADDA/Premistunnaa.jpg" },
    ];

    const upcoming = [
        { title: "Trimukha", language: "Telugu", platform: "Theaters", date: "30 Jan 2026", type: "Movie", link: "#" },
        { title: "Karikaada", language: "Telugu", platform: "Theaters", date: "06 Feb 2026", type: "Movie", link: "#" },
        { title: "Euphoria", language: "Telugu", platform: "Theaters", date: "06 Feb 2026", type: "Movie", link: "#" },
        { title: "Erracheera", language: "Telugu", platform: "Theaters", date: "06 Feb 2026", type: "Movie", link: "#" },
        { title: "Chennai Love Story", language: "Telugu", platform: "Theaters", date: "12 Feb 2026", type: "Movie", link: "#" },
        { title: "Swayambhu", language: "Telugu", platform: "Theaters", date: "13 Feb 2026", type: "Movie", link: "#", image: "/Upcoming%20movies/Upcoming%20movies/Swayambhu.jpg" },
        { title: "Funky", language: "Telugu", platform: "Theaters", date: "13 Feb 2026", type: "Movie", link: "#" },
        { title: "Pookie", language: "Telugu", platform: "Theaters", date: "13 Feb 2026", type: "Movie", link: "#" },
        { title: "Premalu 2", language: "Telugu", platform: "Theaters", date: "14 Mar 2026", type: "Movie", link: "#" },
        { title: "Badass", language: "Telugu", platform: "Theaters", date: "14 Mar 2026", type: "Movie", link: "#" },
        { title: "Dacoit: A Love Story", language: "Telugu", platform: "Theaters", date: "19 Mar 2026", type: "Movie", link: "#", image: "/Upcoming%20movies/Upcoming%20movies/Dacoit.jpg" },
        { title: "The Paradise", language: "Telugu", platform: "Theaters", date: "26 Mar 2026", type: "Movie", link: "#", image: "/Upcoming%20movies/Upcoming%20movies/The%20Paradise.jpg" },
        { title: "Peddi", language: "Telugu", platform: "Theaters", date: "27 Mar 2026", type: "Movie", link: "#" },
        { title: "Mrithunjay", language: "Telugu", platform: "Theaters", date: "Mar–Apr 2026", type: "Movie", link: "#", image: "/Upcoming%20movies/Upcoming%20movies/Mrithunjay.jpg" },
        { title: "Rao Bahadur", language: "Telugu", platform: "Theaters", date: "April 2026", type: "Movie", link: "#" },
        { title: "Spirit", language: "Telugu", platform: "Theaters", date: "April 2026", type: "Movie", link: "#" },
        { title: "Pushpa 3", language: "Telugu", platform: "Theaters", date: "Aug 2026 (Expected)", type: "Movie", link: "#" },
        { title: "Ustaad Bhagat Singh", language: "Telugu", platform: "Theaters", date: "2026 (TBA)", type: "Movie", link: "#" },
        { title: "Adarsha Kutumbam", language: "Telugu", platform: "Theaters", date: "2026 (TBA)", type: "Movie", link: "#" },
        { title: "NTR–Neel", language: "Telugu", platform: "Theaters", date: "2026 (TBA)", type: "Movie", link: "#" },
        { title: "Fauzi", language: "Telugu", platform: "Theaters", date: "2026 (TBA)", type: "Movie", link: "#" },
        { title: "Rowdy Janardhana", language: "Telugu", platform: "Theaters", date: "2026 (TBA)", type: "Movie", link: "#" },
        { title: "Jai Hanuman", language: "Telugu", platform: "Theaters", date: "2026 (TBA)", type: "Movie", link: "#" },
    ];

    const theatricalReleases = [
        { title: "Anaganaga Oka Raju", language: "Telugu", date: "Trending Hit (Theaters)", type: "Romantic Comedy" },
        { title: "Dhandoraa", language: "Telugu", date: "OTT Buzz", type: "Social Drama" },
        { title: "Peddi", language: "Telugu", date: "Upcoming (27 Mar)", type: "Sports Drama" },
    ];

    const trendingBuzz = [
        { title: "Cheekatilo", industry: "Tollywood", date: "Now Streaming", type: "Horror (OTT)", image: "/OTT%20ADDA/OTT%20ADDA/Cheekatilo.jpg" },

        { title: "Anaganaga Oka Raju", industry: "Tollywood", date: "In Theaters", type: "Box Office Hit" },
        { title: "Dhandoraa", industry: "Tollywood", date: "Trending", type: "Critically Acclaimed" },
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
                            <h2 className="text-3xl font-black uppercase tracking-tight">OTT – Now Streaming (Telugu)</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {nowStreaming.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-card border border-border/50 overflow-hidden hover:border-primary/50 transition-all group"
                                >
                                    {item.image && (
                                        <div className="relative h-64 w-full overflow-hidden bg-muted">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    <div className="p-5">
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
                                <h2 className="text-3xl font-black uppercase tracking-tight">Upcoming Telugu Movies</h2>
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
                                                    <div className="flex items-center gap-3">
                                                        {/* Optional: Show small thumbnail if available */}
                                                        {/* @ts-ignore */}
                                                        {item.image && (
                                                            <div className="h-10 w-8 bg-gray-200 overflow-hidden rounded-sm flex-shrink-0">
                                                                <img
                                                                    // @ts-ignore
                                                                    src={item.image}
                                                                    alt={item.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <p className="font-black uppercase">{item.title}</p>
                                                            <p className="text-[10px] text-muted-foreground">{item.language} • {item.type}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-xs font-bold">
                                                    {/* @ts-ignore */}
                                                    <a
                                                        href={item.link || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline uppercase font-black"
                                                    >
                                                        {item.platform}
                                                    </a>
                                                </td>
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
                                <h2 className="text-3xl font-black uppercase tracking-tight">In Theaters & Trending (Telugu)</h2>
                            </div>
                            <div className="space-y-4">
                                {theatricalReleases.map(item => (
                                    <div key={item.title} className="p-4 bg-muted/50 border-l-4 border-primary">
                                        <h4 className="font-black uppercase text-sm">{item.title}</h4>
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                                            {item.language} | {item.date}
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
                                <Star size={32} className="text-primary fill-current" />
                                <h2 className="text-4xl font-black uppercase tracking-tighter italic">Trending / Buzz</h2>
                            </div>
                            <p className="text-primary font-bold uppercase tracking-widest mb-10 border-l-2 border-primary pl-4">
                                Popular & Widely Talked About
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {trendingBuzz.map(movie => (
                                    <div key={movie.title} className="bg-white/5 p-6 rounded-lg border border-white/10 flex gap-4 items-center">
                                        {/* @ts-ignore */}
                                        {movie.image && (
                                            <div className="h-16 w-16 bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                                                <img
                                                    // @ts-ignore
                                                    src={movie.image}
                                                    alt={movie.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h4 className="text-xl font-black uppercase italic text-primary">{movie.title}</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-sm font-bold uppercase">{movie.type}</span>
                                                <span className="text-xs opacity-60 uppercase tracking-widest">{movie.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

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

                        <div className="mt-20">
                            <p className="text-muted-foreground font-black uppercase tracking-[0.2em] text-sm animate-pulse">
                                Stay tuned to Radio Nyra for weekly OTT updates!
                            </p>
                        </div>
                    </div>
                </div>
            </main >

            <Footer />
        </div >
    )
}
