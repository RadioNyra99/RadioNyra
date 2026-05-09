"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, Calendar, Star, TrendingUp, Monitor, Tv, Flame, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OTTAddaPage() {
    const platforms: Record<string, { color: string, bg: string }> = {
        "Aha": { color: "text-[#FF5E00]", bg: "bg-[#FF5E00]/10" },
        "ETV Win": { color: "text-[#0047AB]", bg: "bg-[#0047AB]/10" },
        "ZEE5": { color: "text-[#A320F2]", bg: "bg-[#A320F2]/10" },
        "Prime Video": { color: "text-[#00A8E1]", bg: "bg-[#00A8E1]/10" },
        "Netflix": { color: "text-[#E50914]", bg: "bg-[#E50914]/10" },
        "Sun NXT": { color: "text-[#FBD107]", bg: "bg-[#FBD107]/10" }
    };

    const freshDrops = [
        { title: "Nilave", platform: "ETV Win", date: "Apr 9", image: "/OTT ADDA/OTT ADDA/Nilave.jpg", type: "Romantic Drama" },
        { title: "Dark Night", platform: "Aha", date: "Apr 9", image: "/OTT ADDA/OTT ADDA/Dark Night.jpg", type: "Thriller" },
        { title: "Sabdham", platform: "ZEE5", date: "Apr 10", image: "/OTT ADDA/OTT ADDA/Sabdham.jpg", type: "Action" },
        { title: "Chitti Thalli", platform: "ETV Win", date: "Apr 10", image: "/OTT ADDA/OTT ADDA/Chitti Thalli.jpg", type: "Family Drama" },
        { title: "Pochamma", platform: "Aha", date: "Apr 17", image: "/OTT ADDA/OTT ADDA/Pochamma.jpg", type: "Folk Drama" }
    ];

    const recentlyReleased = [
        { title: "Vishnu Vinyasam", platform: "Prime Video", date: "Mar 20", image: "/OTT ADDA/OTT ADDA/Vishnu Vinayasam.jpg", type: "Spiritual Drama" },
        { title: "Seetha Payanam", platform: "Sun NXT", date: "Mar 19", image: "/OTT ADDA/OTT ADDA/Seetha Payanam.jpg", type: "Emotional Journey" },
        { title: "Couple Friendly", platform: "Prime Video", date: "Mar 13", image: "/OTT ADDA/OTT ADDA/Couple Friendly.jpg", type: "Modern Romance" },
        { title: "Mrithyunjay", platform: "Netflix", date: "Apr 3", image: "/OTT ADDA/OTT ADDA/Mrithyunjay.jpg", type: "Mystery Thriller" },
        { title: "S. Saraswathi", platform: "Prime Video", date: "Apr 3", image: "/OTT ADDA/OTT ADDA/S.Saraswathi.jpg", type: "Biopic" },
        { title: "Roomates", platform: "ETV Win", date: "Recent", image: "/OTT ADDA/OTT ADDA/Roomates.jpg", type: "Youth Comedy" }
    ];

    return (
        <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main className="py-24 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse" />
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative h-[50vh] min-h-[400px] rounded-[3rem] overflow-hidden mb-24 group border border-white/5"
                    >
                        <div className="absolute inset-0 bg-[url('/OTT ADDA/OTT ADDA/Pochamma.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                        <div className="relative z-10 h-full flex flex-col justify-end p-12 md:p-20">
                            <Badge className="w-fit mb-6 bg-primary text-white px-4 py-1 font-black uppercase tracking-widest animate-pulse">
                                Featured This Week
                            </Badge>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
                                OTT <span className="text-primary italic">ADDA</span>
                            </h1>
                            <p className="max-w-xl text-gray-300 font-medium text-lg mb-10 leading-relaxed uppercase tracking-wide">
                                Your front-row seat to the latest digital premieres. Track every drop across Aha, ETV Win, Prime Video & more!
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white font-black uppercase tracking-widest px-10 py-6 rounded-2xl h-auto transition-all">
                                    <Play fill="currentColor" size={20} className="mr-2" /> Start Watching
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Fresh Drops Section */}
                    <section className="mb-32">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-[0_10px_20px_rgba(235,30,50,0.3)]">
                                    <Tv size={24} />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">Fresh OTT Drops</h2>
                                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mt-1">April 10 – April 17, 2026</p>
                                </div>
                            </div>
                            <Badge variant="outline" className="hidden md:flex border-white/10 text-gray-400 font-bold uppercase px-4 py-2 rounded-xl">
                                5 NEW RELEASES
                            </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {freshDrops.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#111] border border-white/5 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-4 left-4">
                                            <Badge className={`${platforms[item.platform]?.bg || 'bg-white/10'} backdrop-blur-md ${platforms[item.platform]?.color || 'text-white'} border-none font-black text-[9px] px-3 py-1 ring-1 ring-inset ring-white/10`}>
                                                {item.platform}
                                            </Badge>
                                        </div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.type}</p>
                                            <h3 className="text-xl font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{item.title}</h3>
                                        </div>
                                    </div>
                                    <Button className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black hover:bg-primary hover:text-white font-black uppercase text-[10px] px-6 h-10 rounded-xl shadow-2xl">
                                        Watch Now
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Recently Released Grid */}
                    <section className="mb-32">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-12 w-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">Recently Premiered</h2>
                                <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-1">March – Early April 2026</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentlyReleased.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <div className="h-40 w-28 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="outline" className={`${platforms[item.platform]?.color || 'text-white'} border-none p-0 font-black uppercase text-[10px] tracking-widest`}>
                                                {item.platform}
                                            </Badge>
                                            <span className="text-gray-600">•</span>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-3 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-6">
                                            {item.type}
                                        </p>
                                        <Button variant="ghost" className="w-fit p-0 h-auto font-black uppercase text-[10px] tracking-widest text-primary hover:text-white hover:bg-transparent flex items-center gap-2">
                                            <Play size={12} fill="currentColor" /> Stream Details
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Community Buzz Banner */}
                    <div className="bg-primary p-12 md:p-20 rounded-[3rem] relative overflow-hidden shadow-[0_20px_50px_rgba(235,30,50,0.3)]">
                        <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                            <Flame size={300} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-2xl text-center md:text-left">
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white leading-none mb-6">
                                    Join the OTT <br /><span className="text-black">Watch Party!</span>
                                </h3>
                                <p className="text-white/80 font-medium text-lg mb-0 leading-relaxed uppercase tracking-wide">
                                    Don't watch alone. Join our community to discuss the latest drops, share reviews, and get exclusive streaming codes.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 w-full md:w-auto">
                                <Button className="bg-black text-white hover:bg-white hover:text-black font-black uppercase tracking-widest px-12 py-8 rounded-2xl h-auto text-xl transition-all shadow-2xl">
                                    Join Now
                                </Button>
                                <Button variant="outline" className="border-black/20 text-black hover:bg-black/10 font-bold uppercase tracking-widest px-12 py-4 rounded-2xl h-auto transition-all">
                                    <Info size={18} className="mr-2" /> How it works
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 text-center">
                        <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] animate-pulse">
                            Refreshed Every Monday by Radio Nyra Digital Dept.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
