"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { Radio, Smartphone, Mic2, Megaphone } from "lucide-react"

export default function EcosystemPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                <section className="relative py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                The <span className="text-primary">Ecosystem</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-8">
                                A True Omnichannel Media Network
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Terrestrial Radio */}
                            <div className="p-10 border border-gray-200 shadow-xl relative overflow-hidden group hover:border-primary transition-all">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Radio className="w-32 h-32" />
                                </div>
                                <Radio className="w-12 h-12 text-primary mb-6" />
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Terrestrial Radio</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our foundational broadcast reaching the Triangle area with massive localized penetration. HD Radio technology ensures crystal clear sound across FM translators.
                                </p>
                                <ul className="space-y-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                                    <li>• 99.9FM HD4 (Hindi)</li>
                                    <li>• 99.9FM HD3 (Telugu)</li>
                                    <li>• WDUR 1490 AM</li>
                                </ul>
                            </div>

                            {/* Digital Apps */}
                            <div className="p-10 border border-gray-200 shadow-xl relative overflow-hidden group hover:border-primary transition-all">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Smartphone className="w-32 h-32" />
                                </div>
                                <Smartphone className="w-12 h-12 text-primary mb-6" />
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Mobile & Smart Tech</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our dedicated iOS and Android applications let listeners take us anywhere. Fully integrated with Alexa and Google Home smart speakers for hands-free tuning.
                                </p>
                                <ul className="space-y-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                                    <li>• Apple App Store</li>
                                    <li>• Google Play Store</li>
                                    <li>• "Alexa, play Radio Nyra"</li>
                                </ul>
                            </div>

                            {/* Live Events */}
                            <div className="p-10 border border-gray-200 shadow-xl relative overflow-hidden group hover:border-primary transition-all">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Mic2 className="w-32 h-32" />
                                </div>
                                <Mic2 className="w-12 h-12 text-primary mb-6" />
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-4">On-Ground Events</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Bridging the gap between the airwaves and the community. We host and sponsor the largest Indian Subcontinent festivals, concerts, and cultural gatherings in NC.
                                </p>
                                <ul className="space-y-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                                    <li>• Bollywood New Year Bash</li>
                                    <li>• Cary Diwali Festival</li>
                                    <li>• Local Concert Promotions</li>
                                </ul>
                            </div>

                            {/* Direct Marketing */}
                            <div className="p-10 border border-gray-200 shadow-xl relative overflow-hidden group hover:border-primary transition-all">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Megaphone className="w-32 h-32" />
                                </div>
                                <Megaphone className="w-12 h-12 text-primary mb-6" />
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Direct Digital</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We own the audience relationship. With highly engaged email newsletters and active WhatsApp communities, we bypass algorithms to reach consumers directly.
                                </p>
                                <ul className="space-y-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                                    <li>• 60,000+ Email List</li>
                                    <li>• 12,000+ WhatsApp Members</li>
                                    <li>• 390K+ Instagram Reach</li>
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
