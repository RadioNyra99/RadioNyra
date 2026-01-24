"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Film, Calendar, Monitor, Ticket } from "lucide-react"

export default function MoviesPage() {
    const movies = [
        {
            title: "Trimukha",
            type: "Theatre",
            releaseDate: "30 Jan 2026",
            language: "Telugu",
            genre: "Action/Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/trimukha.jpg"
        },
        {
            title: "Karikaada",
            type: "Theatre",
            releaseDate: "06 Feb 2026",
            language: "Telugu",
            genre: "Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/Karikaada.jpg"
        },
        {
            title: "Euphoria",
            type: "Theatre",
            releaseDate: "06 Feb 2026",
            language: "Telugu",
            genre: "Thriller",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/euphoria.jpg"
        },
        {
            title: "Erracheera",
            type: "Theatre",
            releaseDate: "06 Feb 2026",
            language: "Telugu",
            genre: "Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/errachira.jpg"
        },
        {
            title: "Chennai Love Story",
            type: "Theatre",
            releaseDate: "12 Feb 2026",
            language: "Telugu",
            genre: "Romance",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/chennai%20Love%20Story.jpg"
        },
        {
            title: "Swayambhu",
            type: "Theatre",
            releaseDate: "13 Feb 2026",
            language: "Telugu",
            genre: "Action/Period",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/Swayambhu.jpg"
        },
        {
            title: "Funky",
            type: "Theatre",
            releaseDate: "13 Feb 2026",
            language: "Telugu",
            genre: "Comedy",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/funky.jpg"
        },
        {
            title: "Pookie",
            type: "Theatre",
            releaseDate: "13 Feb 2026",
            language: "Telugu",
            genre: "Comedy/Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/pookie.jpg"
        },
        {
            title: "Premalu 2",
            type: "Theatre",
            releaseDate: "14 Mar 2026",
            language: "Telugu",
            genre: "Rom-Com",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/premalu%202.jpg"
        },
        {
            title: "Badass",
            type: "Theatre",
            releaseDate: "14 Mar 2026",
            language: "Telugu",
            genre: "Action",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/badass.jpg"
        },
        {
            title: "Toxic",
            type: "Theatre",
            releaseDate: "10 Apr 2026",
            language: "Kannada/Telugu",
            genre: "Action/Thriller",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/Toxic.jpg"
        },
        {
            title: "Dacoit: A Love Story",
            type: "Theatre",
            releaseDate: "19 Mar 2026",
            language: "Telugu",
            genre: "Action/Romance",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/Dacoit.jpg"
        },
        {
            title: "The Paradise",
            type: "Theatre",
            releaseDate: "26 Mar 2026",
            language: "Telugu",
            genre: "Action/Thriller",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/The%20Paradise.jpg"
        },
        {
            title: "Mardaani 3",
            type: "Theatre",
            releaseDate: "2026",
            language: "Hindi",
            genre: "Crime/Action",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/Mardaani%203.jpg"
        },
        {
            title: "Peddi",
            type: "Theatre",
            releaseDate: "27 Mar 2026",
            language: "Telugu",
            genre: "Sports Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/peddi.jpg"
        },
        {
            title: "Mrithunjay",
            type: "Theatre",
            releaseDate: "Mar–Apr 2026",
            language: "Telugu",
            genre: "Action/Thriller",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/Mrithunjay.jpg"
        },
        {
            title: "Rahu Ketu",
            type: "Theatre",
            releaseDate: "2026",
            language: "Telugu",
            genre: "Thriller",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/Rahu%20Ketu.jpg"
        },
        {
            title: "Dhurandhar 2",
            type: "Theatre",
            releaseDate: "2026",
            language: "Hindi",
            genre: "Action",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/Dhurandhar%202.jpg"
        },
        {
            title: "Rao Bahadur",
            type: "Theatre",
            releaseDate: "April 2026",
            language: "Telugu",
            genre: "Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/rao%20bahadur.jpg"
        },
        {
            title: "Spirit",
            type: "Theatre",
            releaseDate: "April 2026",
            language: "Telugu",
            genre: "Action/Cop Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/spirit.jpg"
        },
        {
            title: "Pushpa 3",
            type: "Theatre",
            releaseDate: "Aug 2026 (Expected)",
            language: "Telugu",
            genre: "Action",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/pushpa%203.jpg"
        },
        {
            title: "Ustaad Bhagat Singh",
            type: "Theatre",
            releaseDate: "2026 (TBA)",
            language: "Telugu",
            genre: "Action/Entertainer",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/ustaad%20bagath%20singh.jpg"
        },
        {
            title: "Adarsha Kutumbam",
            type: "Theatre",
            releaseDate: "2026 (TBA)",
            language: "Telugu",
            genre: "Family Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/adarsha%20kutumbam.jpg"
        },
        {
            title: "NTR–Neel",
            type: "Theatre",
            releaseDate: "2026 (TBA)",
            language: "Telugu",
            genre: "Action",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/NTR%20NEEL.jpg"
        },
        {
            title: "Fauzi",
            type: "Theatre",
            releaseDate: "2026 (TBA)",
            language: "Telugu",
            genre: "Period Drama",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/fauzi.jpg"
        },
        {
            title: "Rowdy Janardhana",
            type: "Theatre",
            releaseDate: "2026 (TBA)",
            language: "Telugu",
            genre: "Action",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/rowdy%20janardhana.jpg"
        },
        {
            title: "Jai Hanuman",
            type: "Theatre",
            releaseDate: "2026 (TBA)",
            language: "Telugu",
            genre: "Mythological",
            notes: "Theatrical Release",
            image: "/Upcoming%20movies/Upcoming%20movies/jai%20hanuman.jpg"
        },
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-primary italic mb-6">
                            Upcoming Movies
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium uppercase tracking-widest">
                            Stay updated with the latest Telugu and Hindi movies hitting theaters and OTT platforms!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {movies.map((movie, i) => (
                            <motion.div
                                key={movie.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card border border-border/50 relative overflow-hidden group hover:shadow-2xl transition-all"
                            >
                                {movie.image && (
                                    <div className="relative h-80 w-full overflow-hidden bg-muted">
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-2 rounded-none ${movie.type === 'Theatre' ? 'bg-primary text-white' : 'bg-black text-white'}`}>
                                            {movie.type === 'Theatre' ? <Film size={20} /> : <Monitor size={20} />}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground border border-border px-2 py-1">
                                            {movie.language}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {movie.title}
                                    </h3>
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                        {movie.genre}
                                    </p>

                                    <div className="space-y-2 border-t border-border/50 pt-4">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Calendar size={16} className="text-primary" />
                                            <span className="font-bold">{movie.releaseDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="font-bold uppercase text-[10px] tracking-widest">{movie.notes}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Button className="w-full rounded-none font-bold uppercase tracking-widest group-hover:bg-primary transition-all">
                                            {movie.type === 'Theatre' ? 'Book Tickets' : 'Watch Now'}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-20 p-8 border-2 border-dashed border-primary/30 text-center bg-primary/5"
                    >
                        <p className="text-xl font-bold uppercase tracking-tighter italic">
                            🎟️ Book Tickets | Watch on OTT — Links coming soon!
                        </p>
                        <p className="text-muted-foreground mt-2 font-bold uppercase tracking-widest text-sm">
                            Bookmark this page for weekly updates.
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
