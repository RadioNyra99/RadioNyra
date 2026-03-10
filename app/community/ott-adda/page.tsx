"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, Calendar, Star, Users, Flame, Heart, TrendingUp, Ticket, Monitor } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OTTAddaPage() {
    const nowStreaming = [
        { title: "Subedaar", language: "Hindi", platform: "Prime Video", type: "Action Drama", tags: ["Streaming March 5"], image: "/OTT ADDA/OTT ADDA/subedaar.webp", link: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=Subedaar" },
        { title: "Gandhi Talks", language: "Multi", platform: "ZEE5", type: "Silent Film", tags: ["Streaming March 6"], image: "/OTT ADDA/OTT ADDA/gandhi-talks.webp", link: "https://www.zee5.com/movies/details/gandhi-talks/0-0-1z5639145" },
        { title: "Jab Khuli Kitaab", language: "Hindi", platform: "ZEE5", type: "Romance Drama", tags: ["Streaming March 6"], image: "/OTT ADDA/OTT ADDA/jab-khuli-kitaab.webp", link: "https://www.zee5.com/movies/details/jab-khuli-kitaab/0-0-1z5638123" },
        { title: "Hello Bachhon", language: "Hindi", platform: "Netflix", type: "Drama", tags: ["Streaming March 6"], image: "/OTT ADDA/OTT ADDA/hello-bachhon.webp", link: "https://www.netflix.com/title/81691123" },
        { title: "With Love", language: "English", platform: "Netflix", type: "Romance", tags: ["Streaming March 6"], image: "/OTT ADDA/OTT ADDA/with-love.webp", link: "https://www.netflix.com/search?q=With%20Love" },
        { title: "Bhartha Mahasayulaku Wignyapthi", language: "Telugu", platform: "ZEE5", type: "Drama", tags: ["Streaming March 13"], image: "/OTT ADDA/OTT ADDA/bhartha-mahasayulaku-wignyapthi.webp", link: "https://www.zee5.com/search?q=Bhartha%20Mahasayulaku%20Wignyapthi" },
        { title: "Nawab Cafe", language: "Telugu", platform: "ETV Win", type: "Drama", tags: ["Streaming March 12"], image: "/OTT ADDA/OTT ADDA/nawab-cafe.webp", link: "https://www.etvwin.com/search?q=Nawab%20Cafe" },
        { title: "Funky", language: "Telugu", platform: "Netflix", type: "Comedy", tags: ["Streaming March 13"], image: "/OTT ADDA/OTT ADDA/funky.webp", link: "https://www.netflix.com/search?q=Funky" },
        { title: "Zootopia 2", language: "English", platform: "Disney+", type: "Animation", tags: ["Streaming March 11"], image: "/OTT ADDA/OTT ADDA/zootopia-2.webp", link: "https://www.hotstar.com/in/search?q=Zootopia%202" },
        { title: "Sankalp", language: "Telugu", platform: "MX Player", type: "Drama", tags: ["Streaming March 11"], image: "/OTT ADDA/OTT ADDA/sankalp.webp", link: "https://www.mxplayer.in/search?q=Sankalp" },
        { title: "Sitaare Zameen Par", language: "Hindi", platform: "Sony LIV", type: "Drama", tags: ["Coming Soon 2026"], image: "/OTT ADDA/OTT ADDA/sitaare-zameen-par.webp", link: "https://www.sonyliv.com/search?q=Sitaare%20Zameen%20Par" },
        { title: "Dheeram", language: "Telugu", platform: "Sun NXT", type: "Action", tags: ["TBA"], image: "/OTT ADDA/OTT ADDA/dheeram.webp", link: "https://www.sunnxt.com/search?q=Dheeram" },
        { title: "One Piece Season 2", language: "Japanese/English", platform: "Netflix", type: "Adventure", tags: ["TBA"], image: "/OTT ADDA/OTT ADDA/one-piece-season-2.webp", link: "https://www.netflix.com/search?q=One%20Piece" },
        { title: "Jazz City", language: "English", platform: "SonyLIV", type: "Drama", tags: ["Streaming March 19"], image: "/OTT ADDA/OTT ADDA/jazz-city.webp", link: "https://www.sonyliv.com/search?q=Jazz%20City" },
        { title: "Daredevil: Born Again", language: "English", platform: "JioHotstar", type: "Action", tags: ["Streaming March 24"], image: "/OTT ADDA/OTT ADDA/daredevil-born-again.webp", link: "https://www.hotstar.com/in/search?q=Daredevil%20Born%20Again" },
        { title: "Sky Force", language: "Hindi", platform: "JioHotstar", type: "Action", tags: ["TBA"], image: "/OTT ADDA/OTT ADDA/sky-force.webp", link: "https://www.hotstar.com/in/search?q=Sky%20Force" },
    ];

    const upcoming = [
        { title: "Dhurandhar: The Revenge", language: "Telugu", platform: "Theaters", date: "March 19", type: "Movie", link: "https://in.bookmyshow.com/explore/movies-national-capital-region-ncr?search=Dhurandhar", image: "/Upcoming movies/Upcoming movies/dhurandhar-the-revenge.webp" },
        { title: "Toxic", language: "Telugu", platform: "Theaters", date: "March 19", type: "Movie", link: "https://in.bookmyshow.com/movies/toxic-a-fairy-tale-for-grown-ups/ET00378822", image: "/Upcoming movies/Upcoming movies/toxic-a-fairy-tale-for-grown-ups.webp" },
        { title: "Ustaad Bhagat Singh", language: "Telugu", platform: "Theaters", date: "March 19", type: "Movie", link: "https://in.bookmyshow.com/movies/ustaad-bhagat-singh/ET00355448", image: "/Upcoming movies/Upcoming movies/ustaad-bhagat-singh.webp" },
        { title: "Project Hail Mary", language: "English", platform: "Theaters", date: "March 20", type: "Movie", link: "https://in.bookmyshow.com/movies/project-hail-mary/ET00399123", image: "/Upcoming movies/Upcoming movies/project-hail-mary.webp" },
    ];

    const theatricalReleases = [
        { title: "Dhurandhar: The Revenge", language: "Telugu", date: "March 19", type: "In Theaters", link: "https://in.bookmyshow.com/explore/movies-national-capital-region-ncr?search=Dhurandhar" },
        { title: "Toxic", language: "Telugu", date: "March 19", type: "In Theaters", link: "https://in.bookmyshow.com/movies/toxic-a-fairy-tale-for-grown-ups/ET00378822" },
        { title: "Ustaad Bhagat Singh", language: "Telugu", date: "March 19", type: "In Theaters", link: "https://in.bookmyshow.com/movies/ustaad-bhagat-singh/ET00355448" },
    ];

    const trendingBuzz = [
        { title: "Subedaar", industry: "Bollywood", date: "March 5", type: "OTT Hit", image: "/OTT ADDA/OTT ADDA/subedaar.webp", link: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=Subedaar" },
        { title: "Dhurandhar", industry: "Tollywood", date: "March 19", type: "Highly Anticipated", image: "/Upcoming movies/Upcoming movies/dhurandhar-the-revenge.webp", link: "https://in.bookmyshow.com/explore/movies-national-capital-region-ncr?search=Dhurandhar" },
        { title: "Daredevil: Born Again", industry: "Hollywood", date: "March 24", type: "Action", image: "/OTT ADDA/OTT ADDA/daredevil-born-again.webp", link: "https://www.hotstar.com/in/search?q=Daredevil%20Born%20Again" },
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

                                        <div className="flex flex-wrap gap-1 mb-6">
                                            {item.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none text-[8px] uppercase tracking-tighter">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button className="w-full rounded-none font-black uppercase tracking-widest bg-primary hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300 group/btn flex items-center justify-center gap-2 text-[10px] py-1 h-auto">
                                                <Play size={14} className="group-hover/btn:scale-110 transition-transform fill-current" />
                                                Watch Now
                                            </Button>
                                        </a>
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
                                                    <a
                                                        href={item.link || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block"
                                                    >
                                                        <Button variant="outline" size="sm" className="h-7 text-[9px] uppercase font-black border-primary text-primary hover:bg-primary hover:text-white rounded-none flex items-center gap-1 px-2">
                                                            <Monitor size={10} />
                                                            {item.platform}
                                                        </Button>
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
                                    <div key={item.title} className="p-4 bg-muted/50 border-l-4 border-primary flex justify-between items-center group/item hover:bg-muted transition-colors">
                                        <div>
                                            <h4 className="font-black uppercase text-sm group-hover/item:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                                                {item.language} | {item.date}
                                            </p>
                                        </div>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase font-black hover:bg-primary hover:text-white rounded-none flex items-center gap-1 border border-transparent hover:border-primary transition-all">
                                                <Ticket size={12} />
                                                Book
                                            </Button>
                                        </a>
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
                                            <div className="flex justify-between items-end mt-4">
                                                <div>
                                                    <span className="text-sm font-bold uppercase block">{movie.type}</span>
                                                    <span className="text-xs opacity-60 uppercase tracking-widest">{movie.date}</span>
                                                </div>
                                                <a href={movie.link} target="_blank" rel="noopener noreferrer">
                                                    <Button size="sm" className="h-8 text-[10px] uppercase font-black rounded-none flex items-center gap-2 hover:bg-white hover:text-primary border-2 border-primary transition-all">
                                                        <TrendingUp size={12} />
                                                        Details
                                                    </Button>
                                                </a>
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
