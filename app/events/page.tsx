"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Lightbox } from "@/components/lightbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink, MapPin, Ticket } from "lucide-react"
import { getEventTimingLabel, upcomingEvents } from "@/lib/event-data"

export default function EventsPage() {
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 })

    const pastEvents = [
        { id: 1, title: "Zain Zohaib Qawwali Show", image: "/zain-zohaib-qawwali-show.webp", date: "2025" },
        { id: 2, title: "Hooky Holiday Showcase Event", image: "/hooky-holiday-showcase-event.webp", date: "2025" },
        { id: 3, title: "AR Rahman Concert", image: "/ar-rahman-concert.webp", date: "2025" },
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

    const eventSchema = {
        "@context": "https://schema.org",
        "@graph": [
            ...upcomingEvents.map((event) => ({
                "@type": "Event",
                name: event.title,
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
                startDate: event.startDate,
                location: {
                    "@type": "Place",
                    name: event.location,
                    address: event.venue,
                },
                organizer: {
                    "@type": "Organization",
                    name: "Radio Nyra",
                    url: "https://www.radionyra.com/",
                },
                description: event.description,
                image: event.image ? `https://www.radionyra.com${event.image}` : undefined,
                url: event.link || "https://www.radionyra.com/events",
            })),
            ...pastEvents.map((event) => ({
                "@type": "Event",
                name: event.title,
                eventStatus: "https://schema.org/EventCompleted",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                startDate: event.date,
                image: `https://www.radionyra.com${event.image}`,
                organizer: {
                    "@type": "Organization",
                    name: "Radio Nyra",
                    url: "https://www.radionyra.com/",
                },
                url: "https://www.radionyra.com/events",
            })),
        ],
    }

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
            />
            <Navigation />

            <main className="pb-20">
                {/* Header with Background */}
                <section className="relative py-8 bg-black overflow-hidden flex items-center justify-center">
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-white leading-none drop-shadow-2xl">
                            Events That Bring Communities Together
                        </h1>
                        <p className="mt-6 text-primary font-bold uppercase tracking-[0.4em] text-sm md:text-base drop-shadow-md">
                            Upcoming events, past events, corporate events, community events, festival celebrations, and business networking
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 mt-10">
                    {/* UPCOMING EVENTS */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 border-l-4 border-primary pl-4">Upcoming Events</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {upcomingEvents.map((ev: any, i) => {
                                const EventCard = (
                                    <div className="group bg-card border border-border overflow-hidden hover:border-primary transition-colors h-full">
                                        {ev.image && (
                                            <div className={`relative bg-muted overflow-hidden ${ev.imageAspect === "landscape" ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                                                <img
                                                    src={ev.image}
                                                    alt={`${ev.title} flyer`}
                                                    loading="lazy"
                                                    className="w-full h-full object-contain bg-black transition-transform duration-500 group-hover:scale-105"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                    }}
                                                />
                                                <div className="absolute top-3 left-3">
                                                    <Badge className="uppercase tracking-widest text-[8px] bg-primary text-white border-none rounded-none px-1.5 py-0">{getEventTimingLabel(ev.startDate)}</Badge>
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-5 md:p-6">
                                            <div className="flex flex-wrap gap-3 mb-4">
                                                <span className="text-xs font-black text-primary uppercase tracking-wider flex items-center gap-1.5">
                                                    <Calendar className="w-4 h-4" /> {ev.date}
                                                </span>
                                                <span className="text-xs font-black text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4" /> {ev.time}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary transition-colors leading-none">{ev.title}</h3>
                                            {ev.type && <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-2">{ev.type}</p>}
                                            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wide flex items-center gap-1.5 mb-3">
                                                <MapPin className="w-3 h-3" /> {ev.location}
                                            </p>
                                            <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-4">{ev.description}</p>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border pt-4">
                                                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-foreground">
                                                    <Ticket className="h-4 w-4 text-primary" /> {ev.price}
                                                </span>
                                                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                                                    {ev.cta} <ExternalLink className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )

                                return ev.link ? (
                                    <a key={i} href={ev.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                        {EventCard}
                                    </a>
                                ) : (
                                    <div key={i} className="h-full">
                                        {EventCard}
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 border-l-4 border-primary pl-4">Past Events</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {pastEvents.map((event, index) => (
                                <div
                                    key={event.id}
                                    className="group relative aspect-square bg-muted overflow-hidden cursor-pointer border border-border hover:border-primary transition-all"
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                        <p className="text-[8px] font-bold text-primary uppercase tracking-[0.2em] mb-1">{event.date}</p>
                                        <h3 className="text-white font-bold uppercase tracking-tight text-sm leading-none">{event.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-16 bg-primary text-white p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-4">Need help organizing your event?</h2>
                        <p className="max-w-3xl mx-auto text-white/90 font-bold uppercase tracking-widest text-xs leading-relaxed mb-8">
                            Radio Nyra helps businesses plan, promote, broadcast and engage audiences through successful events.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button className="bg-white text-black hover:bg-gray-100 rounded-none font-black uppercase tracking-widest" asChild>
                                <a href="/contact">Partner With Us</a>
                            </Button>
                            <Button className="bg-foreground text-background hover:bg-black/80 rounded-none font-black uppercase tracking-widest" asChild>
                                <a href="/contact">Host Your Event</a>
                            </Button>
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
