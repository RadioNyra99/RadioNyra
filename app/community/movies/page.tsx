"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Film, Calendar, Monitor, Ticket, Sparkles, Rocket, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function MoviesPage() {
    const categories = [
        {
            id: "april",
            title: "April 2026",
            subtitle: "Current & Very Soon",
            icon: <Zap className="text-yellow-400" />,
            movies: [
                {
                    title: "Bhooth Bangla",
                    image: "/Upcoming movies/Upcoming movies/Bhooth Bangla.jpg",
                    language: "Hindi",
                    releaseDate: "April 16, 2026",
                    description: "A hilarious spin on the horror genre featuring spectral shenanigans and chaotic comedy.",
                    type: "Theatre",
                    genre: "Comedy + Horror",
                    bookingUrl: null
                },
                {
                    title: "Maatrubhumi",
                    image: "/Upcoming movies/Upcoming movies/Maatrubhumi.jpg",
                    language: "Hindi",
                    releaseDate: "April 17, 2026",
                    description: "An intense war drama focusing on the untold stories of sacrifice and bravery.",
                    type: "Theatre",
                    genre: "War drama",
                    bookingUrl: null
                },
                {
                    title: "Toaster",
                    image: "/Upcoming movies/Upcoming movies/Toaster.jpg",
                    language: "Hindi",
                    releaseDate: "April 15, 2026",
                    description: "A quirky comedy drama exploring modern relationships and domestic disasters.",
                    type: "Theatre",
                    genre: "Comedy drama",
                    bookingUrl: null
                },
                {
                    title: "Ginny Weds Sunny 2",
                    image: "/Upcoming movies/Upcoming movies/Ginny weds Sunny 2.jpg",
                    language: "Hindi",
                    releaseDate: "April 24, 2026",
                    description: "The return of the beloved duo in a celebration of love, chaos, and big fat Indian weddings.",
                    type: "Theatre",
                    genre: "Romantic comedy",
                    bookingUrl: null
                },
                {
                    title: "Michael",
                    image: "/Upcoming movies/Upcoming movies/Michael.jpg",
                    language: "Multi",
                    releaseDate: "April end, 2026",
                    description: "A soul-stirring musical biopic capturing the rise of a legendary performer.",
                    type: "Theatre",
                    genre: "Music biopic",
                    bookingUrl: null
                },
                {
                    title: "Dhoom 4",
                    image: "/Upcoming movies/Upcoming movies/Dhoom 4.jpg",
                    language: "Hindi",
                    releaseDate: "April 25, 2026",
                    description: "The action franchise returns with higher stakes, faster bikes, and a new mastermind.",
                    type: "Theatre",
                    genre: "Action franchise",
                    bookingUrl: null
                }
            ]
        },
        {
            id: "may",
            title: "May 2026",
            subtitle: "Big Summer Releases",
            icon: <Rocket className="text-primary" />,
            movies: [
                {
                    title: "Mortal Kombat II",
                    image: "/Upcoming movies/Upcoming movies/Mortal Kombat 2.jpg",
                    language: "English",
                    releaseDate: "May 8, 2026",
                    description: "The fight for Earthrealm continues in this high-stakes fantasy action sequel.",
                    type: "Theatre",
                    genre: "Action/Fantasy",
                    bookingUrl: null
                },
                {
                    title: "The Devil Wears Prada 2",
                    image: "/Upcoming movies/Upcoming movies/The Devil Wears Parada.jpg",
                    language: "English",
                    releaseDate: "May 2026",
                    description: "Fashion, ambition, and heels collide once again in this highly anticipated sequel.",
                    type: "Theatre",
                    genre: "Comedy/Drama",
                    bookingUrl: null
                },
                {
                    title: "Goodachari 2",
                    image: "/Upcoming movies/Upcoming movies/Goodachari 2.jpg",
                    language: "Telugu",
                    releaseDate: "May 2026",
                    description: "Agent Gopi returns for a global mission involving high-tech espionage and betrayal.",
                    type: "Theatre",
                    genre: "Spy thriller",
                    bookingUrl: null
                },
                {
                    title: "Ek Din",
                    image: "/Upcoming movies/Upcoming movies/Ek Din.jpg",
                    language: "Hindi",
                    releaseDate: "May 1, 2026",
                    description: "A poignant story told over the course of a single life-changing day.",
                    type: "Theatre",
                    genre: "Drama",
                    bookingUrl: null
                },
                {
                    title: "Pati Patni Aur Woh 2",
                    image: "/Upcoming movies/Upcoming movies/Pati Patni Aur Woh 2.jpg",
                    language: "Hindi",
                    releaseDate: "May 15, 2026",
                    description: "More confusion, more comedy, and a more complicated web of lies and love.",
                    type: "Theatre",
                    genre: "Comedy",
                    bookingUrl: null
                }
            ]
        },
        {
            id: "june",
            title: "June 2026 & Beyond",
            subtitle: "Most Anticipated",
            icon: <Sparkles className="text-purple-400" />,
            movies: [
                {
                    title: "Toxic",
                    image: "/Upcoming movies/Upcoming movies/Toxic A Fairy Tale for Grown-Ups.jpg",
                    language: "Kannada/Multi",
                    releaseDate: "June 4, 2026",
                    description: "A gritty fairy tale exploring the dark side of ambition and the underworld.",
                    type: "Theatre",
                    genre: "A Fairy Tale for Grown-Ups",
                    bookingUrl: null
                },
                {
                    title: "Cocktail 2",
                    image: "/Upcoming movies/Upcoming movies/Cocktail 2.jpg",
                    language: "Hindi",
                    releaseDate: "June 19, 2026",
                    description: "A fresh perspective on friendship and love in the modern age.",
                    type: "Theatre",
                    genre: "Drama/Romance",
                    bookingUrl: null
                },
                {
                    title: "Welcome to the Jungle",
                    image: "/Upcoming movies/Upcoming movies/Welcom to the Jungle.jpg",
                    language: "Hindi",
                    releaseDate: "June 26, 2026",
                    description: "An ensemble comedy adventure set in the wild unknown.",
                    type: "Theatre",
                    genre: "Adventure Comedy",
                    bookingUrl: null
                },
                {
                    title: "Supergirl",
                    image: "/Upcoming movies/Upcoming movies/SuperGirl.jpg",
                    language: "English",
                    releaseDate: "June 26, 2026",
                    description: "A new hero rises to protect the world in this DC epic.",
                    type: "Theatre",
                    genre: "Action/Sci-Fi",
                    bookingUrl: null
                },
                {
                    title: "Ramayana",
                    image: "/Upcoming movies/Upcoming movies/Ramayanan.jpg",
                    language: "Multi",
                    releaseDate: "Diwali 2026",
                    description: "The legendary epic visualised on a grand scale like never before.",
                    type: "Theatre",
                    genre: "Mythology",
                    bookingUrl: null
                },
                {
                    title: "King",
                    image: "/Upcoming movies/Upcoming movies/King.jpg",
                    language: "Hindi",
                    releaseDate: "December 2026",
                    description: "Shah Rukh Khan returns in an action-packed journey of power and destiny.",
                    type: "Theatre",
                    genre: "Action thriller",
                    bookingUrl: null
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main className="relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto px-4 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <Badge variant="outline" className="mb-6 border-primary/50 text-primary py-1 px-4 text-xs font-bold uppercase tracking-[0.3em] bg-primary/5">
                            Radio Nyra Exclusives
                        </Badge>
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                            Upcoming <span className="text-primary italic">Movies</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            Your ultimate guide to the biggest blockbusters hitting the silver screen and OTT platforms in 2026.
                        </p>
                    </motion.div>

                    {categories.map((category, catIdx) => (
                        <section key={category.id} className="mb-32">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 mb-12 border-b border-white/10 pb-6"
                            >
                                <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-center text-3xl">
                                    {category.icon}
                                </div>
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
                                        {category.title}
                                    </h2>
                                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mt-1">
                                        {category.subtitle}
                                    </p>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {category.movies.map((movie, i) => (
                                    <motion.div
                                        key={movie.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group"
                                    >
                                        <div className="relative aspect-[3/4] overflow-hidden bg-[#111] rounded-2xl border border-white/5 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
                                            {movie.image ? (
                                                <img
                                                    src={movie.image}
                                                    alt={movie.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/20">
                                                    <Film size={60} />
                                                </div>
                                            )}
                                            
                                            {/* Overlays */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                                            
                                            <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                                                <Badge className="bg-white/10 backdrop-blur-md border-white/10 text-white font-bold uppercase text-[8px] tracking-widest px-2 py-1">
                                                    {movie.language}
                                                </Badge>
                                                <div className={`p-1.5 rounded-lg backdrop-blur-md ${movie.type === 'Theatre' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                                                    {movie.type === 'Theatre' ? <Film size={12} /> : <Monitor size={12} />}
                                                </div>
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <p className="text-primary font-black uppercase text-[8px] tracking-[0.3em] mb-1.5 drop-shadow-lg">
                                                    {movie.genre}
                                                </p>
                                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none mb-3 group-hover:text-primary transition-colors">
                                                    {movie.title}
                                                </h3>
                                                
                                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-300 mb-4">
                                                    <Calendar size={12} className="text-primary" />
                                                    <span className="uppercase tracking-widest text-[9px]">{movie.releaseDate}</span>
                                                </div>

                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    {movie.bookingUrl ? (
                                                        <a href={movie.bookingUrl} target="_blank" rel="noopener noreferrer">
                                                            <Button className="w-full bg-primary hover:bg-white hover:text-primary text-white font-black uppercase tracking-widest rounded-lg h-9 text-[9px] transition-all group/btn">
                                                                <Ticket size={12} className="mr-1.5 group-hover/btn:rotate-12 transition-transform" />
                                                                Book Tickets
                                                            </Button>
                                                        </a>
                                                    ) : (
                                                        <Button disabled className="w-full bg-white/5 border border-white/10 text-white/40 font-black uppercase tracking-widest rounded-lg h-9 text-[9px] cursor-not-allowed">
                                                            Coming Soon
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-40 p-12 relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl text-center"
                    >
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
                        
                        <div className="relative z-10">
                            <Sparkles className="mx-auto text-primary mb-6" size={40} />
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-6 leading-none">
                                Want to <span className="text-primary">Stay Updated?</span>
                            </h3>
                            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] mb-12 max-w-xl mx-auto text-sm">
                                Join our community for exclusive early access to movie tickets and OTT release alerts.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <a
                                    href="/community"
                                    className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_15px_30px_rgba(235,30,50,0.3)]"
                                >
                                    Join Community
                                </a>
                                <a
                                    href="/faq"
                                    className="px-12 py-5 bg-white/5 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all border border-white/10"
                                >
                                    View FAQ
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
