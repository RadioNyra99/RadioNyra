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
                <section className="py-12 bg-primary text-primary-foreground text-left relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img
                            src="/OLD Images/P0105_1-01-45-018_0001.jpg"
                            alt="Heritage background"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic leading-tight">
                            The Voice of <br />Continuity
                        </h1>
                        <p className="text-base md:text-lg font-bold uppercase tracking-[0.3em] opacity-90">
                            Since November 16, 1963
                        </p>
                    </div>
                </section>

                {/* HERITAGE SECTION */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-4">Our Heritage</h2>
                                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 leading-tight">
                                    A Legacy Born <br />in 1963
                                </h3>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        It began on a crisp November morning in 1963. A switch was flipped, and a voice entered the homes and hearts of a community for the first time.
                                    </p>
                                    <p>
                                        We don't remember the exact name that was whispered over the airwaves that day, a detail lost to the archives of time, but we remember how it felt. It felt like home. It was the start of a conversation that has never stopped.
                                    </p>
                                    <p>
                                        For over sixty years, that voice has evolved, adapted, and grown. It has been a steady companion through decades of change, technological shifts, and the migration of dreams across oceans.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden border-8 border-white shadow-2xl skew-y-2">
                                    <img
                                        src="/OLD Images/P0105_1-01-45-018_0003.jpg"
                                        alt="Historical archives 1963"
                                        className="w-full h-full object-cover grayscale sepia-[0.2]"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 aspect-square w-48 bg-muted rounded-sm overflow-hidden border-4 border-white shadow-xl -skew-y-3 hidden md:block">
                                    <img
                                        src="/OLD Images/P0105_1-01-45-018_0004.jpg"
                                        alt="Historical archives 1963 detail"
                                        className="w-full h-full object-cover grayscale"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MODERN CONTINUATION */}
                <section className="py-24 bg-muted/30 border-y border-border">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-black uppercase mb-6">Radio Nyra: The Modern Identity</h2>
                            <p className="text-xl text-muted-foreground italic">
                                Today, that original pulse beats through Radio Nyra. We are the modern face of a timeless legacy, a continuation of a journey that started more than half a century ago.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 bg-background border border-border rounded-sm">
                                <h4 className="font-bold uppercase tracking-widest text-primary mb-4">1963</h4>
                                <p className="text-sm text-muted-foreground">The first broadcast is aired, marking the beginning of a lifelong connection with the South Asian community.</p>
                            </div>
                            <div className="p-8 bg-background border border-border rounded-sm">
                                <h4 className="font-bold uppercase tracking-widest text-primary mb-4">Evolution</h4>
                                <p className="text-sm text-muted-foreground">The station thrives through decades of change, adapting its voice to reflect the community's growth.</p>
                            </div>
                            <div className="p-8 bg-background border border-border rounded-sm">
                                <h4 className="font-bold uppercase tracking-widest text-primary mb-4">Present Day</h4>
                                <p className="text-sm text-muted-foreground">Radio Nyra emerges as the modern platform, bridging the gap between roots and the future.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTENT (Original) */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="space-y-24">

                            {/* Our Story */}
                            <div className="text-left">
                                <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Our NC Journey</h2>
                                <div className="max-w-4xl space-y-6 text-lg text-muted-foreground leading-relaxed italic">
                                    <p>
                                        The recent chapter of our story began in 2014 in the forest terrain of Durham, North Carolina. WDUR 1490 AM became the vessel for our mission, launching 24/7 Desi News, Talk, and Music.
                                    </p>
                                    <p>
                                        What started as a 1000W broadcasting channel quickly expanded to HD radio and FM translators, catching the attention of the rapidly growing Triangle community.
                                    </p>
                                    <p className="font-bold text-primary not-italic border-l-4 border-primary pl-6">
                                        In July 2025, we continued this tradition of growth by launching our 24/7 Telugu channel right alongside our Hindi broadcast.
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
