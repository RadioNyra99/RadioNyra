"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { Map, RadioReceiver, Network, PlayCircle } from "lucide-react"

export default function SyndicationPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                <section className="relative py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                Syndication <span className="text-primary">Network</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-8">
                                Scaling Local Content Across the Nation
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic mb-6">Our National Footprint</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Radio Nyra has expanded beyond our Raleigh-Durham headquarters to deliver premium Indian Subcontinent programming to multiple major metropolitan markets across the United States.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    By syndicating our most popular talk shows, news updates, and music blocks, we provide our advertisers with the unique opportunity to scale their campaigns nationally while maintaining local relevance.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 border border-gray-200 shadow-xl relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 -rotate-45 translate-x-8 -translate-y-8" />
                                <h3 className="text-2xl font-black uppercase mb-6 relative z-10">Live Syndication Markets</h3>
                                <ul className="space-y-4 relative z-10">
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0"><Map className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <div className="font-black text-lg">Raleigh-Durham, NC</div>
                                            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">99.9FM HD4 / HD3</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0"><Map className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <div className="font-black text-lg">Atlanta, GA</div>
                                            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">107.5FM HD3</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0"><Map className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <div className="font-black text-lg">Baltimore, MD</div>
                                            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">92.3FM HD2</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0"><Map className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <div className="font-black text-lg">Cleveland, OH</div>
                                            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">93.1FM HD2</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0"><Map className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <div className="font-black text-lg">Columbus, OH</div>
                                            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">107.5FM HD2</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0"><Map className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <div className="font-black text-lg">Philadelphia, PA</div>
                                            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">103.9FM HD2</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
