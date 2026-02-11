"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PARTNERS } from "@/lib/partners"

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
            <Navigation />

            <main>
                {/* HERO */}
                <section className="relative py-16 md:py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 italic leading-none text-gray-900">
                                Our <span className="text-primary">Partners</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 uppercase tracking-[0.15em] font-bold italic max-w-2xl">
                                The brands and organizations who put their trust in us.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PARTNERS GRID */}
                <section className="py-12 bg-background">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 md:mb-12 border-l-4 border-primary pl-4 text-left">
                            Brand Partners
                        </h2>

                        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {PARTNERS.map((partner, i) => (
                                partner.link ? (
                                    <Link
                                        key={i}
                                        href={partner.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group border border-border/30 hover:border-primary/50 transition-all duration-300 bg-transparent p-4 flex items-center justify-center h-32 hover:shadow-lg"
                                        title={partner.name}
                                    >
                                        <div className="relative w-full h-full">
                                            <img
                                                src={partner.image}
                                                alt={partner.name}
                                                loading="lazy"
                                                className="w-full h-full object-contain transition-all duration-500"
                                            />
                                        </div>
                                    </Link>
                                ) : (
                                    <div key={i} className="group border border-border/30 hover:border-primary/50 transition-all duration-300 bg-transparent p-4 flex items-center justify-center h-32 hover:shadow-lg">
                                        <div className="relative w-full h-full">
                                            <img
                                                src={partner.image}
                                                alt={partner.name}
                                                loading="lazy"
                                                className="w-full h-full object-contain transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
