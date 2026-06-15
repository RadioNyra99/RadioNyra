"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { Newspaper, ChevronRight } from "lucide-react"

export default function PressPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                <section className="relative py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                Press <span className="text-primary">& News</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-8">
                                The Latest Announcements from Radio Nyra
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="space-y-8">
                            
                            <article className="group bg-gray-50 border border-gray-200 p-8 hover:border-primary transition-all">
                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center shrink-0">
                                        <Newspaper className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Press Release • July 2025</p>
                                        <h2 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">Radio Nyra Launches 24/7 Telugu Channel on 99.9FM HD3</h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Expanding its commitment to the diverse Indian Subcontinent community, Radio Nyra announces the launch of a dedicated 24/7 Telugu station, delivering round-the-clock news, talk shows, and Tollywood hits to the Triangle area.
                                        </p>
                                        <a href="#" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-primary hover:text-gray-900 transition-colors">
                                            Read Full Release <ChevronRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </article>

                            <article className="group bg-gray-50 border border-gray-200 p-8 hover:border-primary transition-all">
                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center shrink-0">
                                        <Newspaper className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Company News • January 2025</p>
                                        <h2 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">Record Growth in Digital Listenership Surpasses 100K Weekly</h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Radio Nyra continues to dominate the Indian Subcontinent media landscape, hitting a new milestone of 100,000 active weekly listeners across terrestrial and digital streaming platforms combined.
                                        </p>
                                        <a href="#" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-primary hover:text-gray-900 transition-colors">
                                            Read Full Release <ChevronRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
