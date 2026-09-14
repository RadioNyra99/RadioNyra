"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { Calendar, MapPin, Music, Sparkles } from "lucide-react"

export default function FestivalCalendarPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                <section className="relative py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                Festival <span className="text-primary">Calendar</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-8">
                                Connecting at the Heart of the Community
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
                                Radio Nyra isn't just on the air—we are on the ground. We proudly host, sponsor, and participate in the largest Indian Subcontinent cultural events in the region.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Ganesh Chaturthi */}
                            <div className="flex flex-col md:flex-row gap-8 bg-amber-50/60 border-2 border-amber-400/80 p-8 shadow-md group hover:border-amber-500 transition-all rounded-xl">
                                <div className="w-full md:w-56 h-56 rounded-lg overflow-hidden shrink-0 border border-amber-300 shadow-sm bg-black">
                                    <img
                                        src="/images/ganesh-chaturthi.jpg"
                                        alt="Ganesh Chaturthi Celebration Radio Nyra"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2.5 py-0.5 bg-amber-500 text-black text-xs font-black uppercase tracking-widest rounded">Aug - Sept</span>
                                        <span className="px-2.5 py-0.5 bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider rounded">Special Broadcast</span>
                                    </div>
                                    <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-2">Ganesh Chaturthi / Ganeshotsav</h2>
                                    <p className="text-amber-800 font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-3">
                                        <MapPin className="w-4 h-4 text-amber-600" /> Triangle Temples & Community Celebrations • Raleigh, Cary, Morrisville
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Welcoming Lord Ganesha with grand community festivities, stotrams, bhajans, and special live broadcasts on Radio Nyra Hindi 99.9 FM-HD4 and Telugu 99.9 FM-HD3. May Lord Ganesha remove all obstacles and fill your life with happiness, success and peace.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-block px-3 py-1 bg-amber-200/80 text-amber-950 text-xs font-bold uppercase tracking-wider rounded">Radio Nyra Broadcast Partner</span>
                                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider rounded">Live Coverage</span>
                                    </div>
                                </div>
                            </div>

                            {/* Diwali */}
                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 border border-gray-200 p-8 shadow-sm group hover:border-primary transition-all">
                                <div className="w-32 h-32 bg-primary/10 flex flex-col items-center justify-center shrink-0 border-2 border-primary">
                                    <Sparkles className="w-8 h-8 text-primary mb-2" />
                                    <span className="font-black uppercase tracking-widest text-sm">Oct-Nov</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Grand Diwali Mela</h2>
                                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-4">
                                        <MapPin className="w-4 h-4" /> Koka Booth Amphitheatre, Cary NC
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Join over 15,000 attendees at the largest Diwali celebration in the Carolinas. Radio Nyra serves as the premier media partner, providing live coverage, stage hosting, and exclusive sponsor booths.
                                    </p>
                                    <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest">Sponsorships Available</div>
                                </div>
                            </div>

                            {/* Holi */}
                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 border border-gray-200 p-8 shadow-sm group hover:border-primary transition-all">
                                <div className="w-32 h-32 bg-primary/10 flex flex-col items-center justify-center shrink-0 border-2 border-primary">
                                    <Sparkles className="w-8 h-8 text-primary mb-2" />
                                    <span className="font-black uppercase tracking-widest text-sm">March</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Colors of Holi Festival</h2>
                                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-4">
                                        <MapPin className="w-4 h-4" /> Morrisville, NC
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        The vibrant festival of colors brought to life with live DJs, traditional food, and endless energy. Radio Nyra hosts the main stage, distributing branded colors and merchandise.
                                    </p>
                                    <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest">Past Event</div>
                                </div>
                            </div>

                            {/* New Year */}
                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 border border-gray-200 p-8 shadow-sm group hover:border-primary transition-all">
                                <div className="w-32 h-32 bg-primary/10 flex flex-col items-center justify-center shrink-0 border-2 border-primary">
                                    <Music className="w-8 h-8 text-primary mb-2" />
                                    <span className="font-black uppercase tracking-widest text-sm">Dec 31</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Bollywood & Tollywood NYE Bash</h2>
                                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-4">
                                        <MapPin className="w-4 h-4" /> Raleigh Convention Center
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        The most anticipated New Year's Eve party in the Triangle. Premium ticketing, VIP experiences, and non-stop music curated by Radio Nyra's top DJs.
                                    </p>
                                    <div className="inline-block px-4 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest">Sponsorships Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
