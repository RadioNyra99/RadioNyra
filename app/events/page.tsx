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
        { title: "GDC Festival of Gaming", date: "Mar 9-13, 2026", location: "San Francisco, CA", image: "/GDC_250x250.gif", link: "https://gdc.informafestivals.com/2026/registrations/Attendee?_mc=barter_gdcsf_gdcsf_le_x_partn" },
        { title: "Valentine's Day Special", date: "Feb 14, 2026", location: "Radio Nyra Studios", image: "/Valientiens day.jpg" },
        { title: "Holi Festival Celebration", date: "Mar 25, 2026", location: "City Park", image: "/Holi.jpg" },
    ];

    const pastEvents = [
        { id: 1, title: "Zain Zohaib Qawwali Show", image: "/zain zohaib qawwali show.jpeg", date: "2025" },
        { id: 2, title: "Hooky Holiday Showcase Event", image: "/hooky holiday showcase event.jpeg", date: "2025" },
        { id: 3, title: "AR Rahman Concert", image: "/AR rahman concert.jpeg", date: "2025" },
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
                <section className="relative py-8 bg-black overflow-hidden flex items-center justify-center">
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-white leading-none drop-shadow-2xl">
                            Events
                        </h1>
                        <p className="mt-6 text-primary font-bold uppercase tracking-[0.4em] text-sm md:text-base drop-shadow-md">
                            Upcoming and Past moments
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 mt-12">
                    {/* UPCOMING EVENTS */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 border-l-4 border-primary pl-4">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {upcomingEvents.map((ev: any, i) => {
                                const EventCard = (
                                    <div className="group bg-card border border-border overflow-hidden hover:border-primary transition-colors h-full">
                                        {/* Event Image - Conditionally Rendered */}
                                        {ev.image && (
                                            <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                                                <img
                                                    src={ev.image}
                                                    alt={ev.title}
                                                    loading="lazy"
                                                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${ev.image.includes('GDC') || ev.image.endsWith('.gif') ? 'object-contain bg-black' : 'object-cover'}`}
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none'; // Hide broken images
                                                    }}
                                                />
                                                <div className="absolute top-3 left-3">
                                                    <Badge className="uppercase tracking-widest text-[8px] bg-primary text-white border-none rounded-none px-1.5 py-0">Upcoming</Badge>
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-4">
                                            {!ev.image && (
                                                <div className="mb-4">
                                                    <Badge className="uppercase tracking-widest text-[8px] bg-primary text-white border-none rounded-none px-1.5 py-0">Upcoming</Badge>
                                                </div>
                                            )}
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