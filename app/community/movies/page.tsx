"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Film, Calendar, Monitor, Ticket } from "lucide-react"

export default function MoviesPage() {
    const movies = [
        {
            title: "Dhurandhar: The Revenge",
            image: "/Upcoming movies/Upcoming movies/dhurandhar-the-revenge.webp",
            language: "Telugu",
            releaseDate: "March 19, 2026",
            description: "High-octane action drama featuring a calculated protagonist in a high-stakes revenge mission.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/search?q=Dhurandhar"
        },
        {
            title: "Toxic: A Fairy Tale for Grown-ups",
            image: "/Upcoming movies/Upcoming movies/toxic-a-fairy-tale-for-grown-ups.webp",
            language: "Kannada/Multi",
            releaseDate: "March 19, 2026",
            description: "A dark action thriller exploring the gritty underworld of illegal mining and complex characters.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/toxic-2026-238456/movie-overview"
        },
        {
            title: "Ustaad Bhagat Singh",
            image: "/Upcoming movies/Upcoming movies/ustaad-bhagat-singh.webp",
            language: "Telugu",
            releaseDate: "March 19, 2026",
            description: "A powerful action drama starring Pawan Kalyan as a charismatic cop fighting corruption.",
            type: "Theatre",
            bookingUrl: "https://www.amctheatres.com/search?q=Ustaad%20Bhagat%20Singh"
        },
        {
            title: "Project Hail Mary",
            image: "/Upcoming movies/Upcoming movies/project-hail-mary.webp",
            language: "English",
            releaseDate: "March 20, 2026",
            description: "Science fiction epic starring Ryan Gosling as a scientist on a mission to save the sun.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/project-hail-mary-2026-235889/movie-overview"
        },
        {
            title: "Rosie: The Saffron Chapter",
            image: "/Upcoming movies/Upcoming movies/rosie-the-saffron-chapter.webp",
            language: "Hindi",
            releaseDate: "Released",
            description: "Horror thriller based on real-life events in Gurugram, exploring supernatural occurrences.",
            type: "Theatre",
            bookingUrl: null,
            notes: "Previously Released"
        },
        {
            title: "Band Melam",
            image: "/Upcoming movies/Upcoming movies/band-melam.webp",
            language: "Telugu",
            releaseDate: "March 26, 2026",
            description: "A fun family entertainer exploring rural traditions and comedic situations.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/search?q=Band+Melam"
        },
        {
            title: "Kenatha Kanom",
            image: "/Upcoming movies/Upcoming movies/kenatha-kanom.webp",
            language: "Tamil",
            releaseDate: "March 13, 2026",
            description: "A unique social drama addressing village life and traditional folklore.",
            type: "OTT",
            bookingUrl: "https://www.hotstar.com/us/search?q=Kenatha%20Kanom"
        },
        {
            title: "Theri Meri",
            image: "/Upcoming movies/Upcoming movies/theri-meri.webp",
            language: "Multi",
            releaseDate: "July 28, 2025",
            description: "A vibrant romantic comedy set in the picturesque locales of Malaysia.",
            type: "Theatre",
            bookingUrl: null,
            notes: "International Release Only"
        },
        {
            title: "Premalu 2",
            image: "/Upcoming movies/Upcoming movies/premalu-2.webp",
            language: "Malayalam",
            releaseDate: "TBA 2025",
            description: "The sequel to the massive rom-com hit, following the next chapter of Sachin and Reenu.",
            type: "Theatre",
            bookingUrl: null
        },
        {
            title: "Aadu 3",
            image: "/Upcoming movies/Upcoming movies/aadu-3.webp",
            language: "Malayalam",
            releaseDate: "March 19, 2026",
            description: "The return of Shaji Pappan in this hilarious third installment of the cult comedy series.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/search?q=Aadu+3"
        },
        {
            title: "Bheeshmar",
            image: "/Upcoming movies/Upcoming movies/bheeshmar.webp",
            language: "Telugu",
            releaseDate: "March 20, 2026",
            description: "A gripping action thriller featuring a high-stakes investigation and intense drama.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/search?q=Bheeshmar"
        },
        {
            title: "Kissa Court Kachehari Ka",
            image: "/Upcoming movies/Upcoming movies/kissa-court-kachehari-ka.webp",
            language: "Hindi",
            releaseDate: "March 13, 2026",
            description: "A socially relevant legal drama highlighting the flaws in the judicial system.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/search?q=Kissa+Court+Kachehari+Ka"
        },
        {
            title: "Chiranjeevi Hanuman",
            image: "/Upcoming movies/Upcoming movies/chiranjeevi-hanuman.webp",
            language: "Telugu",
            releaseDate: "TBA 2026",
            description: "A mythological action epic exploring the legend of Hanuman in a modern context.",
            type: "Theatre",
            bookingUrl: null
        },
        {
            title: "Awarapan 2",
            image: "/Upcoming movies/Upcoming movies/awarapan-2.webp",
            language: "Hindi",
            releaseDate: "April 3, 2026",
            description: "The sequel to the intense romantic thriller, continuing the saga of love and redemption.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/search?q=Awarapan+2"
        },
        {
            title: "Bhooth Bangla",
            image: "/Upcoming movies/Upcoming movies/bhooth-bangla.webp",
            language: "Hindi",
            releaseDate: "May 15, 2026",
            description: "Akshay Kumar returns to the horror-comedy genre with this spooky entertainer.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/search?q=Bhooth+Bangla"
        },
        {
            title: "Alpha",
            image: "/Upcoming movies/Upcoming movies/alpha.webp",
            language: "Hindi",
            releaseDate: "April 17, 2026",
            description: "The first female-led film in the YRF Spy Universe starring Alia Bhatt and Sharvari.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/alpha-2026-235887/movie-overview"
        },
        {
            title: "Battle of Galwan",
            image: "/Upcoming movies/Upcoming movies/battle-of-galwan.webp",
            language: "Hindi",
            releaseDate: "August 14, 2026",
            description: "A patriotic war epic depicting the bravery of Indian soldiers in the Galwan Valley.",
            type: "Theatre",
            bookingUrl: "https://www.fandango.com/search?q=Battle+of+Galwan"
        }
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
                                        {movie.bookingUrl ? (
                                            <a href={movie.bookingUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                <Button className="w-full rounded-none font-bold uppercase tracking-widest bg-primary hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300 group/btn flex items-center justify-center gap-2">
                                                    {movie.type === 'Theatre' ? (
                                                        <>
                                                            <Ticket size={18} className="group-hover/btn:rotate-12 transition-transform" />
                                                            Book Tickets
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Monitor size={18} className="group-hover/btn:scale-110 transition-transform" />
                                                            Watch Now
                                                        </>
                                                    )}
                                                </Button>
                                            </a>
                                        ) : (
                                            <Button disabled className="w-full rounded-none font-bold uppercase tracking-widest bg-muted text-muted-foreground border-2 border-muted flex items-center justify-center gap-2 cursor-not-allowed">
                                                {movie.type === 'Theatre' ? (
                                                    <>
                                                        <Ticket size={18} />
                                                        Book Tickets (N/A)
                                                    </>
                                                ) : (
                                                    <>
                                                        <Monitor size={18} />
                                                        Watch Now (N/A)
                                                    </>
                                                )}
                                            </Button>
                                        )}
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
