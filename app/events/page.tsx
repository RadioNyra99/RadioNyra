"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Lightbox } from "@/components/lightbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function EventsPage() {
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 })

    // Data moved from Home Page
    const upcomingEvents = [
        { title: "GDC Festival of Gaming", date: "Mar 9-13, 2026", location: "San Francisco, CA", image: "/gdc-event.png" },
        { title: "Radio Nyra NYE 2026", date: "Dec 31, 2025", location: "Cary, NC", image: "/bollywood-event-flyer.jpg" },
        { title: "Zain Zohaib Live", date: "Sep 28, 2025", location: "Raleigh, NC", image: "/placeholder.jpg" },
        { title: "Community Meetup", date: "Oct 10, 2025", location: "Downtown Park", image: "/placeholder.jpg" },
    ];

    const pastEvents = [
        { id: 1, title: "Radio Nyra Bollywood NYE 2026", image: "/images/event_nye_2026.jpg", date: "Dec 31, 2025" },
        { id: 2, title: "Triangle Got Talent", image: "/images/event_triangle_talent.jpg", date: "Nov 23, 2025" },
        { id: 3, title: "Hooky Cary Holiday VIP Showcase", image: "/images/event_hooky_cary.jpg", date: "Nov 18, 2025" },
        { id: 4, title: "Radio Nyra Diwali Mela", image: "/images/event_diwali_mela.jpg", date: "Nov 11, 2025" },
        { id: 5, title: "Hum Sub Diwali", image: "/images/event_hum_sub_diwali.jpg", date: "Nov 04, 2025" },
        { id: 6, title: "Garner India Fest", image: "/images/event_garner_fest.jpg", date: "Nov 04, 2025" },
        { id: 7, title: "IAFV Diwali Fest", image: "/images/event_iafv_diwali.jpg", date: "Oct 28, 2025" },
        { id: 8, title: "Zain Zohaib Qawwali Mehfil", image: "/images/event_zain_zohaib.jpg", date: "Nov 02, 2025" },
        { id: 9, title: "A.R. Rahman Concert in Raleigh", image: "/images/event_ar_rahman.jpg", date: "2025" },
    ]

    const openLightbox = (index: number) => {
        setLightbox({ isOpen: true, index })
    }

    const closeLightbox = () => {
        setLightbox({ ...lightbox, isOpen: false })
    }

    const navigateLightbox = (index: number) => {
        setLightbox({ ...lightbox, index })
    }

    const images = pastEvents.map(e => e.image)

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main className="pb-20">
                {/* Header with Background */}
                <section className="relative py-24 bg-black overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="/images/event_nye_2026.jpg"
                            alt="Background"
                            className="w-full h-full object-cover blur-sm scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-white leading-none drop-shadow-2xl">
                            Events
                        </h1>
                        <p className="mt-6 text-primary font-bold uppercase tracking-[0.4em] text-sm md:text-base drop-shadow-md">
                            Upcoming and Past moments
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 mt-20">

                    {/* UPCOMING EVENTS */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 border-l-4 border-primary pl-4">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {upcomingEvents.map((ev, i) => (
                                <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary transition-colors">
                                    {/* Event Image */}
                                    <div className="relative h-48 bg-muted overflow-hidden">
                                        <img
                                            src={ev.image}
                                            alt={ev.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = "https://placehold.co/600x400/000000/FFFFFF?text=Event+Image";
                                            }}
                                        />
                                        <div className="absolute top-3 left-3">
                                            <Badge className="uppercase tracking-widest text-[8px] bg-primary text-white border-none rounded-none px-1.5 py-0">Upcoming</Badge>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                                                <Calendar className="w-3 h-3" /> {ev.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary transition-colors leading-none">{ev.title}</h3>
                                        <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wide flex items-center gap-1.5">
                                            <MapPin className="w-3 h-3" /> {ev.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PAST EVENTS */}
                    <section>
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 border-l-4 border-primary pl-4">Past Events</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pastEvents.map((event, idx) => (
                                <div
                                    key={event.id}
                                    className="group relative aspect-video bg-muted overflow-hidden cursor-pointer"
                                    onClick={() => openLightbox(idx)}
                                >
                                    {/* Thumbnail */}
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://placehold.co/600x400/000000/FFFFFF?text=Event+Image";
                                        }}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                                            <h3 className="text-white font-black uppercase tracking-tighter text-xl italic">{event.title}</h3>
                                            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 block">Click to view</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Lightbox
                isOpen={lightbox.isOpen}
                onClose={closeLightbox}
                images={images}
                currentIndex={lightbox.index}
                onNavigate={navigateLightbox}
            />

            <Footer />
        </div>
    )
}

