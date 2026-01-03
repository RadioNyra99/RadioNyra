import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function SchedulePage() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Upcoming Events WITH IMAGES (Copied from Home)
    const upcomingEvents = [
        { title: "Radio Nyra NYE 2026", date: "Dec 31, 2025", location: "Cary, NC", image: "/placeholder-event.jpg" },
        { title: "Zain Zohaib Live", date: "Sep 28, 2025", location: "Raleigh, NC", image: "/placeholder-event.jpg" },
        { title: "Community Meetup", date: "Oct 10, 2025", location: "Downtown Park", image: "/placeholder-event.jpg" },
    ];

    // Past Events SMALL RECTANGLES WITH IMAGES (Copied from Home)
    const pastEvents = [
        { title: "Diwali Gala", date: "Nov 2024", image: "/placeholder-event.jpg" },
        { title: "Navratri Night", date: "Oct 2024", image: "/placeholder-event.jpg" },
        { title: "Independence Day", date: "Aug 2024", image: "/placeholder-event.jpg" },
        { title: "Summer Jam", date: "July 2024", image: "/placeholder-event.jpg" },
    ];

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
            <Navigation />

            <main>
                {/* SCHEDULE SECTION */}
                <section className="py-24 bg-foreground text-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">Broadcast Schedule</h1>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Stay tuned with your favorite shows throughout the week.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {days.map((day) => (
                                <Card key={day} className="bg-white/5 border-white/10 text-white rounded-none hover:bg-white/10 transition-colors border-l-4 border-l-primary">
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-bold uppercase mb-6 text-primary">{day}</h2>
                                        <div className="space-y-6">
                                            <div className="group">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">08:00 AM</span>
                                                    <span className="text-[10px] uppercase font-bold bg-white/20 px-2 py-0.5 rounded text-white">Live</span>
                                                </div>
                                                <h3 className="text-lg font-bold uppercase tracking-tight">Morning Drive</h3>
                                                <p className="text-xs text-gray-500 uppercase">with Raj Persaud</p>
                                            </div>

                                            <div className="group">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">01:00 PM</span>
                                                </div>
                                                <h3 className="text-lg font-bold uppercase tracking-tight">Bollywood Bliss</h3>
                                                <p className="text-xs text-gray-500 uppercase">with Bharti</p>
                                            </div>

                                            <div className="group">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">05:00 PM</span>
                                                    <span className="text-[10px] uppercase font-bold bg-white/20 px-2 py-0.5 rounded text-white">Live</span>
                                                </div>
                                                <h3 className="text-lg font-bold uppercase tracking-tight">Desh Pradesh</h3>
                                                <p className="text-xs text-gray-500 uppercase">with Vishal</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* UPCOMING EVENTS (WITH IMAGES) */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-12 border-l-4 border-primary pl-4">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {upcomingEvents.map((ev, i) => (
                                <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary transition-colors">
                                    {/* Event Image */}
                                    <div className="relative h-48 bg-muted overflow-hidden">
                                        <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="uppercase tracking-widest text-[10px] bg-primary text-white border-none rounded-none">Upcoming</Badge>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm font-bold text-primary flex items-center gap-2">
                                                <Calendar className="w-4 h-4" /> {ev.date}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary transition-colors leading-none">{ev.title}</h3>
                                        <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide mb-6">{ev.location}</p>
                                        <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-widest rounded-none">Get Details</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PAST EVENTS (SMALL RECTANGLES WITH IMAGES) */}
                <section className="py-16 bg-black text-white border-t border-white/10">
                    <div className="container mx-auto px-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">Past Events Archive</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {pastEvents.map((ev, i) => (
                                <div key={i} className="group flex items-center gap-4 bg-white/5 p-2 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20">
                                    {/* Small Thumbnail */}
                                    <div className="w-16 h-16 bg-gray-800 flex-shrink-0 overflow-hidden">
                                        <img src={ev.image} alt={ev.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <div className="overflow-hidden">
                                        <span className="block text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">{ev.date}</span>
                                        <h5 className="text-sm font-bold text-white uppercase truncate">{ev.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
