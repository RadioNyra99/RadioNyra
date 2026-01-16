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
        shows: { all: { name: "Back to Back", image: "/Back to Back.jpg", color: "bg-muted/30 text-muted-foreground" } }
    },
    {
        time: "6 AM - 7 AM", hour: 6,
        shows: { all: { name: "Geetanjali", image: "/Geetanjali.jpg", color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400" } }
    },
    {
        time: "7 AM - 8 AM", hour: 7,
        shows: { all: { name: "Subha Ki Shuruaat", host: "Sohail", image: "/images/hosts/Subha Ki Shuruaat.jpg", color: "bg-blue-100 text-blue-700" } }
    },
    {
        time: "8 AM - 10 AM", hour: 8,
        shows: {
            weekdays: { name: "Chai Pe Charcha", host: "Raj Persaud", image: "/images/hosts/cha-pe-charcha.jpg", color: "bg-cyan-100 text-cyan-700" },
            weekend: { name: "Subha Ki Shuruaat", host: "Sohail", image: "/images/hosts/Subha Ki Shuruaat.jpg", color: "bg-blue-100 text-blue-700" }
        }
    },
    {
        time: "10 AM - 12 PM", hour: 10,
        shows: {
            weekdays: { name: "Zara Muskurao", host: "Aayushii Rode", image: "/images/hosts/zara-muskurao.jpg", color: "bg-orange-100 text-orange-700" },
            Saturday: { name: "Zara Muskurao", host: "Aayushii Rode", image: "/images/hosts/zara-muskurao.jpg", color: "bg-orange-100 text-orange-700" },
            Sunday: { name: "Geet Bazaar (Live)", host: "Dr. Taj & Dr. Caldwell", image: "/images/hosts/geet-bazaar.jpg", color: "bg-purple-100 text-purple-700" }
        }
    },
    {
        time: "12 PM - 1 PM", hour: 12,
        shows: {
            weekdays: { name: "Zara Muskurao", host: "Aayushii Rode", image: "/images/hosts/zara-muskurao.jpg", color: "bg-orange-100 text-orange-700" },
            Saturday: { name: "Zara Muskurao", host: "Aayushii Rode", image: "/images/hosts/zara-muskurao.jpg", color: "bg-orange-100 text-orange-700" },
            Sunday: { name: "The Real Returns Show", image: "/The real return show.jpg", color: "bg-blue-100 text-blue-700" }
        }
    },
    {
        time: "1 PM - 4 PM", hour: 13,
        shows: { all: { name: "Triangle Tunes and Talks", host: "Monika Joshi", image: "/images/hosts/triangle-tunes.jpg", color: "bg-blue-200 text-blue-800" } }
    },
    {
        time: "4 PM - 5 PM", hour: 16,
        shows: {
            Monday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Tuesday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Wednesday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Thursday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Friday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Saturday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Sunday: { name: "Legends and Leaders", host: "Steve Rao", image: "/Legends and Leaders.jpg", color: "bg-blue-900 text-white" }
        }
    },
    {
        time: "5 PM - 6 PM", hour: 17,
        shows: {
            Monday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Tuesday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Wednesday: { name: "Idhar Udhar Ki Baatein", host: "Arpit Tandon", image: "/images/hosts/idhar-udhar-ki-baatein.jpg", color: "bg-blue-400 text-white" },
            Thursday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Friday: { name: "Dil Se Desi", host: "Jyoti", image: "/images/hosts/dil-se-desi.jpg", color: "bg-red-800 text-white" },
            Saturday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Sunday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" }
        }
    },
    {
        time: "6 PM - 7 PM", hour: 18,
        shows: {
            Monday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Tuesday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Wednesday: { name: "Idhar Udhar Ki Baatein", host: "Arpit Tandon", image: "/images/hosts/idhar-udhar-ki-baatein.jpg", color: "bg-blue-400 text-white" },
            Thursday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Friday: { name: "Dil Se Desi", host: "Jyoti", image: "/images/hosts/dil-se-desi.jpg", color: "bg-red-800 text-white" },
            Saturday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" },
            Sunday: { name: "Desh Pardesh", host: "Vishal", image: "/images/hosts/desi-pardesi.jpg", color: "bg-green-200 text-green-800" }
        }
    },
    {
        time: "7 PM - 10 PM", hour: 19,
        shows: { all: { name: "Bollywood Bliss", host: "Bharti Rathore", image: "/images/hosts/bollywood-bliss.jpg", color: "bg-purple-50 text-purple-700" } }
    },
    {
        time: "10 PM - 11 PM", hour: 22,
        shows: {
            weekdays: { name: "Nirvana Nights", host: "Shivani", image: "/images/hosts/nirvana-nights.jpg", color: "bg-cyan-50 text-cyan-700" },
            Saturday: { name: "Nirvana Nights", host: "Shivani", image: "/images/hosts/nirvana-nights.jpg", color: "bg-cyan-50 text-cyan-700" },
            Sunday: { name: "Geet Bazaar (Repeat) / Mehfil", host: "Dr. Taj & Dr. Caldwell", image: "/images/hosts/geet-bazaar.jpg", color: "bg-purple-300 text-purple-900" }
        }
    },
    {
        time: "11 PM - 12 AM", hour: 23,
        shows: {
            weekdays: { name: "Nirvana Nights", host: "Shivani", image: "/images/hosts/nirvana-nights.jpg", color: "bg-cyan-50 text-cyan-700" },
            Saturday: { name: "Nirvana Nights", host: "Shivani", image: "/images/hosts/nirvana-nights.jpg", color: "bg-cyan-50 text-cyan-700" },
            Sunday: { name: "Back to Back", image: "/Back to Back.jpg", color: "bg-muted/30 text-muted-foreground" }
        }
    }
];

export default function SchedulePage() {
    const [selectedDay, setSelectedDay] = useState<string>(() => {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'America/New_York' }).format(new Date());
    });

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
                <section className="py-12 bg-primary/5 border-b border-primary/10 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
                            The Schedule
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
                            Your Daily Dose of Rhythms & Stories
                        </p>
                    </div>
                </section>

                <section className="py-12 md:py-16 bg-background">
                    <div className="container mx-auto px-4">

                        {/* Unified Vertical List Layout */}
                        <div className="max-w-4xl mx-auto space-y-12">
                            <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar scroll-smooth justify-center">
                                {DAYS.map(day => (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDay(day)}
                                        className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-black uppercase tracking-widest transition-all border-2 ${selectedDay === day
                                            ? "bg-primary border-primary text-white shadow-lg scale-105"
                                            : "bg-muted/30 border-transparent text-muted-foreground hover:border-primary/30"
                                            }`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-8">
                                {(() => {
                                    const sortedData = [...SCHEDULE_DATA].sort((a, b) => a.hour - b.hour);
                                    const dayShows = sortedData.map(entry => ({
                                        ...entry,
                                        activeShow: getShowForDay(entry, selectedDay)
                                    })).filter(item => item.activeShow.name !== "--");

                                    const groupedShows: any[] = [];
                                    dayShows.forEach((item) => {
                                        const lastGroup = groupedShows[groupedShows.length - 1];
                                        if (lastGroup &&
                                            lastGroup.activeShow.name === item.activeShow.name &&
                                            lastGroup.activeShow.host === item.activeShow.host &&
                                            lastGroup.activeShow.image === item.activeShow.image) {

                                            // Merge time
                                            const startTime = lastGroup.time.split(' - ')[0];
                                            const endTime = item.time.split(' - ')[1];
                                            lastGroup.time = `${startTime} - ${endTime}`;
                                        } else {
                                            groupedShows.push({ ...item });
                                        }
                                    });

                                    return groupedShows.map((item, idx) => {
                                        const show = item.activeShow;
                                        return (
                                            <div key={idx} className="group bg-card border border-border/50 overflow-hidden flex flex-col md:flex-row shadow-sm hover:border-primary/50 transition-all duration-300">
                                                {show.image ? (
                                                    <div className="aspect-square md:w-1/3 overflow-hidden bg-black flex items-center justify-center">
                                                        <img
                                                            src={show.image}
                                                            alt={show.host || show.name}
                                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="md:w-1/3 bg-muted/20 flex items-center justify-center p-8">
                                                        <Clock className="w-12 h-12 text-muted-foreground/20" />
                                                    </div>
                                                )}
                                                <div className="p-8 flex-1 flex flex-col justify-center">
                                                    <div className="flex items-center gap-2 text-primary mb-4">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="text-sm font-black uppercase tracking-widest">{item.time}</span>
                                                    </div>
                                                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-3 italic">
                                                        {show.name}
                                                    </h3>
                                                    {show.host && (
                                                        <div className="flex items-center gap-2 text-muted-foreground mb-6">
                                                            <User className="w-4 h-4" />
                                                            <span className="text-xs font-bold uppercase tracking-widest">{show.host}</span>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest inline-block ${show.color}`}>
                                                            Live on Air
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    });
                                })()}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-muted/20 border-t border-border">
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
