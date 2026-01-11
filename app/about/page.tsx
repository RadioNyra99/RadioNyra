"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Target, Zap, Award } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main>
                {/* HERO */}
                <section className="py-16 bg-primary text-primary-foreground text-left">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 italic whitespace-nowrap">About Radio Nyra</h1>
                        <p className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] opacity-80">
                            The Voice of India in USA
                        </p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="space-y-16">

                            {/* Our Story */}
                            <div className="bg-muted/30 p-10 border border-border text-left rounded-sm">
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Our Story</h2>
                                <div className="max-w-4xl space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                                    <p>
                                        Located in the lovely forest terrain of Durham North Carolina, is our first Radio Station – WDUR 1490 AM where the journey of AROHI MEDIA began in 2014. With our own tower and 1000W non-directional broadcasting channel, we launched 24/7 Desi News, Talk and Music format in Hindi for the rapidly growing South Asian population in Raleigh-Durham area.
                                    </p>
                                    <p>
                                        In no time we leased the HD-4 Channel of 99.9 WCMC-FM and eventually launched our FM translator on 101.9 FM. By then we had caught the attention of the rapidly expanding, influential Indian Subcontinent population in the Triangle.
                                    </p>
                                    <p>
                                        We bridge the gap between home and the United States with our quality news, music, entertainment, and cultural programming in Raleigh-Durham, NC.
                                    </p>
                                    <p className="font-bold text-primary not-italic">
                                        In July 2025, we launched our 24/7 Telugu channel on the HD3 Channel of 99.9 FM, right next to our Hindi HD Channel!
                                    </p>
                                </div>
                            </div>

                            {/* Our Mission */}
                            <div className="text-left">
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Our Mission</h2>
                                <div className="w-16 h-1 bg-primary mb-8" />
                                <p className="text-xl text-muted-foreground leading-relaxed italic">
                                    To empower the South Asian community by providing a platform that celebrates our rich culture while fostering connection and growth in the USA.
                                </p>
                            </div>

                            {/* Founder Section */}
                            <div className="bg-gradient-to-r from-primary/10 to-transparent p-10 border-l-4 border-primary rounded-r-sm flex flex-col md:flex-row gap-10 items-center">
                                <div className="w-40 h-52 md:w-48 md:h-64 shrink-0 overflow-hidden border-4 border-white shadow-xl bg-gray-50 relative">
                                    <img
                                        src="/RC Founder.jpeg"
                                        alt="Ravi Cherukuri"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Ravi Cherukuri</h2>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Founder, Radio Nyra</p>

                                    <p className="text-muted-foreground leading-relaxed">
                                        Under Ravi's visionary leadership, Radio Nyra has grown from a single AM station to a multimedia powerhouse. His dedication to community service and passion for high-quality broadcasting have made Radio Nyra a household name in the Triangle area and beyond.
                                    </p>
                                </div>
                            </div>

                            {/* Team Image Section */}
                            <div className="pt-8">
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-left">Meet The Team</h2>
                                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20">
                                    <img
                                        src="/radio-nyra-team.jpg"
                                        alt="Radio Nyra Team"
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                    />
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
