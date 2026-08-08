"use client"

import React, { useState } from "react"
import { Calendar, MapPin, Building2, Sparkles, Star, Users, CheckCircle2, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMMUNITY_EVENTS, FESTIVAL_CALENDAR, BUSINESS_DIRECTORY, CommunityEvent } from "@/lib/community-data"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { trackEvent } from "@/lib/analytics"

export function CommunitySection() {
    const [selectedTab, setSelectedTab] = useState<'events' | 'festivals' | 'directory'>('events');
    const [activeRegisterEvent, setActiveRegisterEvent] = useState<CommunityEvent | null>(null);
    const [registered, setRegistered] = useState(false);

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        trackEvent({
            category: 'Community',
            action: 'event_registration',
            label: activeRegisterEvent?.title
        });
        setRegistered(true);
        setTimeout(() => {
            setRegistered(false);
            setActiveRegisterEvent(null);
        }, 2500);
    };

    return (
        <section className="py-16 bg-background text-foreground">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest inline-block mb-3">
                        Indian Subcontinent Community Hub
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
                        Events & Festival Calendar
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base font-medium mt-3">
                        Stay connected with upcoming cultural festivals, community initiatives, and local celebrations in your region.
                    </p>
                </div>

                {/* Sub-Navigation Tabs */}
                <div className="flex items-center justify-center gap-3 mb-12">
                    <Button
                        onClick={() => setSelectedTab('events')}
                        variant={selectedTab === 'events' ? 'default' : 'outline'}
                        className="rounded-2xl text-xs font-black uppercase tracking-widest px-6 py-6 cursor-pointer"
                    >
                        <Calendar className="w-4 h-4 mr-2" /> Community Events
                    </Button>

                    <Button
                        onClick={() => setSelectedTab('festivals')}
                        variant={selectedTab === 'festivals' ? 'default' : 'outline'}
                        className="rounded-2xl text-xs font-black uppercase tracking-widest px-6 py-6 cursor-pointer"
                    >
                        <Sparkles className="w-4 h-4 mr-2 text-amber-500" /> Festival Calendar
                    </Button>
                </div>

                {/* TAB 1: COMMUNITY EVENTS */}
                {selectedTab === 'events' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {COMMUNITY_EVENTS.map(event => (
                            <div key={event.id} className="rounded-3xl bg-card border border-border/80 overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between">
                                <div>
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-red-600 text-white text-[10px] font-black uppercase">
                                            {event.category}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs font-bold text-primary mb-2">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {event.date}
                                        </div>
                                        <h3 className="font-black text-xl text-foreground mb-2 line-clamp-2">{event.title}</h3>
                                        <p className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-3">
                                            <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                                            {event.location}
                                        </p>
                                        <p className="text-xs text-muted-foreground line-clamp-3 mb-4">{event.description}</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <Button
                                        onClick={() => setActiveRegisterEvent(event)}
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs uppercase tracking-wider h-11 rounded-xl cursor-pointer"
                                    >
                                        <Ticket className="w-4 h-4 mr-2" /> Register / RSVP
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* TAB 2: FESTIVAL CALENDAR */}
                {selectedTab === 'festivals' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {FESTIVAL_CALENDAR.map(fest => (
                            <div key={fest.id} className="rounded-3xl bg-card border border-border/80 p-6 flex flex-col sm:flex-row items-center gap-6 shadow-md hover:shadow-xl transition-all">
                                <img src={fest.image} alt={fest.festivalName} className="w-full sm:w-36 h-36 object-cover rounded-2xl shrink-0" />
                                <div className="flex-1">
                                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">{fest.date}</span>
                                    <h3 className="font-black text-xl text-foreground mb-1">{fest.festivalName}</h3>
                                    <p className="text-xs font-medium text-muted-foreground mb-2">{fest.significance}</p>
                                    <div className="text-[11px] bg-muted/60 p-2.5 rounded-xl border border-border/50 text-foreground font-semibold">
                                        ✨ Radio Nyra Broadcast: <span className="text-primary font-bold">{fest.associatedShow}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Event Registration Modal */}
            <Dialog open={!!activeRegisterEvent} onOpenChange={() => setActiveRegisterEvent(null)}>
                <DialogContent className="max-w-md p-6 rounded-3xl bg-card border-border">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-black uppercase tracking-tight">
                            Event RSVP: {activeRegisterEvent?.title}
                        </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleRegisterSubmit} className="space-y-4 mt-4">
                        <Input placeholder="Full Name *" required className="rounded-xl h-12" />
                        <Input type="email" placeholder="Email Address *" required className="rounded-xl h-12" />
                        <Input type="tel" placeholder="Phone Number *" required className="rounded-xl h-12" />
                        <Button type="submit" className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-black uppercase text-xs tracking-widest cursor-pointer">
                            {registered ? (
                                <span className="flex items-center gap-2 text-white">
                                    <CheckCircle2 className="w-4 h-4 text-green-300" /> Registration Confirmed!
                                </span>
                            ) : (
                                "Confirm RSVP"
                            )}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}
