"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar } from "lucide-react"
import { useState } from "react"

interface ScheduleEntry {
    time: string;
    hour: number; // For sorting
    shows: {
        [key: string]: {
            name: string;
            host?: string;
            image?: string;
            color?: string;
        }
    }
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SCHEDULE_DATA: ScheduleEntry[] = [
    {
        time: "12 AM - 6 AM", hour: 0,
        shows: { all: { name: "Back-To-Back", color: "bg-muted/30 text-muted-foreground" } }
    },
    {
        time: "6 AM - 7 AM", hour: 6,
        shows: { all: { name: "Geetanjali", color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400" } }
    },
    {
        time: "7 AM - 8 AM", hour: 7,
        shows: {
            weekdays: { name: "Back-To-Back", color: "bg-muted/30 text-muted-foreground" },
            weekend: { name: "Zara Muskurao", host: "Aayushii", image: "/images/hosts/zara-muskurao.jpg", color: "bg-orange-100 text-orange-700" }
        }
    },
    {
        time: "8 AM - 10 AM", hour: 8,
        shows: {
            weekdays: { name: "Chai Pe Charcha", host: "Raj Persaud", image: "/images/hosts/cha-pe-charcha.jpg", color: "bg-cyan-100 text-cyan-700" },
            weekend: { name: "Zara Muskurao", host: "Aayushii", image: "/images/hosts/zara-muskurao.jpg", color: "bg-orange-100 text-orange-700" }
        }
    },
    {
        time: "10 AM - 11 AM", hour: 10,
        shows: {
            weekdays: { name: "Zara Muskurao", host: "Aayushii", image: "/images/hosts/zara-muskurao.jpg", color: "bg-orange-100 text-orange-700" },
            Saturday: { name: "Kuch Tum Kaho, Kuch Hum Kahein", host: "Aditi", image: "/images/hosts/kuch-tum-kaho-kuch-hum-kahein.jpg", color: "bg-orange-300 text-orange-900" },
            Sunday: { name: "Geet Bazaar (Live)", host: "Dr. Taj & Dr. Caldwell", image: "/images/hosts/geet-bazaar.jpg", color: "bg-purple-100 text-purple-700" }
        }
    },
    {
        time: "11 AM - 1 PM", hour: 11,
        shows: {
            weekdays: { name: "Zara Muskurao", host: "Aayushii", image: "/images/hosts/zara-muskurao.jpg", color: "bg-orange-100 text-orange-700" },
            weekend: { name: "Back-To-Back", color: "bg-muted/30 text-muted-foreground" }
        }
    },
    {
        time: "1 PM - 2 PM", hour: 13,
        shows: { all: { name: "Back-To-Back", color: "bg-muted/30 text-muted-foreground" } }
    },
    {
        time: "2 PM - 4 PM", hour: 14,
        shows: { all: { name: "Bollywood Bliss", host: "Bharti Rathore", image: "/images/hosts/bollywood-bliss.jpg", color: "bg-purple-50 text-purple-700" } }
    },
    {
        time: "4 PM - 5 PM", hour: 16,
        shows: {
            Monday: { name: "Desh Pardesh", host: "Vishal The Khushhal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Tuesday: { name: "Desh Pardesh", host: "Vishal The Khushhal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Wednesday: { name: "Misc. or Podcast", color: "bg-lime-100 text-lime-800" },
            Thursday: { name: "Misc. or Podcast", color: "bg-lime-100 text-lime-800" },
            Friday: { name: "Misc. or Podcast", color: "bg-lime-100 text-lime-800" },
            Saturday: { name: "Desh Pardesh", host: "Vishal The Khushhal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Sunday: { name: "Legends & Leaders", host: "Steve Rao", color: "bg-blue-900 text-white" }
        }
    },
    {
        time: "5 PM - 7 PM", hour: 17,
        shows: {
            Monday: { name: "Desh Pardesh", host: "Vishal The Khushhal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Tuesday: { name: "Desh Pardesh", host: "Vishal The Khushhal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Wednesday: { name: "Idhar Udhar Ki Baatein", host: "Arpit Tandon", image: "/images/hosts/idhar-udhar-ki-baatein.jpg", color: "bg-blue-400 text-white" },
            Thursday: { name: "Hello Vaishnavi", host: "Vaishnavi Palleda", image: "/images/hosts/hello-vaishnavi.jpg", color: "bg-yellow-600 text-white" },
            Friday: { name: "Dil Se Desi", host: "Jyoti", image: "/images/hosts/dil-se-desi.jpg", color: "bg-red-800 text-white" },
            Saturday: { name: "Desh Pardesh", host: "Vishal The Khushhal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Sunday: { name: "Desh Pardesh", host: "Vishal The Khushhal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" }
        }
    },
    {
        time: "7 PM - 10 PM", hour: 19,
        shows: { all: { name: "Nirvana Nights", host: "Shivani", image: "/images/hosts/nirvana-nights.jpg", color: "bg-cyan-50 text-cyan-700" } }
    },
    {
        time: "10 PM - 12 AM", hour: 22,
        shows: {
            weekdays: { name: "Triangle Tunes and Talks", host: "Monika Joshi", image: "/images/hosts/triangle-tunes.jpg", color: "bg-blue-200 text-blue-800" },
            Saturday: { name: "Triangle Tunes and Talks", host: "Monika Joshi", image: "/images/hosts/triangle-tunes.jpg", color: "bg-blue-200 text-blue-800" },
            Sunday: { name: "Geet Bazaar (Repeat) / Mehfil", host: "Dr. Taj & Dr. Caldwell", image: "/images/hosts/geet-bazaar.jpg", color: "bg-purple-300 text-purple-900" }
        }
    }
];

export default function SchedulePage() {
    const [selectedDay, setSelectedDay] = useState<string>(DAYS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]);

    const getShowForDay = (entry: ScheduleEntry, day: string) => {
        if (entry.shows.all) return entry.shows.all;
        if (entry.shows[day]) return entry.shows[day];
        const isWeekend = day === "Saturday" || day === "Sunday";
        if (isWeekend && entry.shows.weekend) return entry.shows.weekend;
        if (!isWeekend && entry.shows.weekdays) return entry.shows.weekdays;
        return { name: "--", color: "bg-transparent text-muted-foreground" };
    };

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground text-foreground">
            <Navigation />

            <main>
                {/* Header Section */}
                <section className="py-20 bg-primary/5 border-b border-primary/10 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
                            The Schedule
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
                            Your Daily Dose of Rhythms & Stories
                        </p>
                    </div>
                </section>

                <section className="py-12 md:py-24 bg-background">
                    <div className="container mx-auto px-4">

                        {/* Mobile View: Day Selector and Vertical List */}
                        <div className="md:hidden space-y-8">
                            <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar scroll-smooth">
                                {DAYS.map(day => (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDay(day)}
                                        className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-black uppercase tracking-widest transition-all border-2 ${selectedDay === day
                                                ? "bg-primary border-primary text-white shadow-lg scale-105"
                                                : "bg-muted/30 border-transparent text-muted-foreground"
                                            }`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-6">
                                {SCHEDULE_DATA.sort((a, b) => a.hour - b.hour).map((entry, idx) => {
                                    const show = getShowForDay(entry, selectedDay);
                                    if (show.name === "--") return null;

                                    return (
                                        <div key={idx} className="bg-card border border-border/50 overflow-hidden flex flex-col shadow-sm">
                                            {show.image && (
                                                <div className="aspect-[16/9] w-full overflow-hidden">
                                                    <img
                                                        src={show.image}
                                                        alt={show.host || show.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 text-primary mb-3">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-sm font-black uppercase tracking-widest">{entry.time}</span>
                                                </div>
                                                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-2">
                                                    {show.name}
                                                </h3>
                                                {show.host && (
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <User className="w-4 h-4" />
                                                        <span className="text-xs font-bold uppercase tracking-widest">{show.host}</span>
                                                    </div>
                                                )}
                                                <div className={`mt-4 px-3 py-1 text-[10px] font-black uppercase tracking-widest inline-block ${show.color}`}>
                                                    Live on Air
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Desktop View: Existing Table Layout */}
                        <div className="hidden md:block overflow-x-auto">
                            <div className="min-w-[1000px]">
                                {/* Header Row */}
                                <div className="grid grid-cols-[150px_repeat(7,1fr)] bg-primary/5 border border-border text-center font-black uppercase tracking-widest text-sm">
                                    <div className="p-4 border-r border-border">Time</div>
                                    {DAYS.map(day => <div key={day} className="p-4 border-r border-border last:border-r-0 text-primary">{day}</div>)}
                                </div>

                                {SCHEDULE_DATA.map((entry, idx) => (
                                    <div key={idx} className="grid grid-cols-[150px_repeat(7,1fr)] border-x border-b border-border text-center text-[10px] font-bold uppercase tracking-widest">
                                        <div className="p-4 border-r border-border text-muted-foreground flex items-center justify-center font-black">{entry.time}</div>
                                        {DAYS.map(day => {
                                            const show = getShowForDay(entry, day);
                                            return (
                                                <div key={day} className={`p-4 border-r border-border last:border-r-0 flex flex-col items-center justify-center gap-1 ${show.color}`}>
                                                    <span className="leading-tight">{show.name}</span>
                                                    {show.host && <span className="opacity-60 text-[8px]">{show.host}</span>}
                                                </div>
                                            )
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted/20 border-t border-border">
                    <div className="container mx-auto px-4 text-center max-w-2xl">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Tune In Anywhere</h2>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-10 leading-loose">
                            Radio Nyra is available 24/7. Don't miss out on our special weekend programs and exclusive community segments.
                        </p>
                        <Button className="h-16 px-12 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none shadow-xl transition-all" asChild>
                            <Link href="/">Listen Live Now</Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
