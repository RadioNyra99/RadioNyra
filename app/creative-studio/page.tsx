"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { Mic, Headphones, AudioLines, MonitorPlay } from "lucide-react"

export default function CreativeStudioPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                <section className="relative py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                Creative <span className="text-primary">Studio</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-8">
                                World-Class Audio Production & Advertising Creation
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
                                Don't have a commercial ready? No problem. The Radio Nyra Creative Studio provides end-to-end production services to craft compelling audio and visual assets for your brand.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex gap-6 border-b border-gray-200 pb-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <AudioLines className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase mb-3">Scriptwriting & Copy</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our bilingual copywriters understand the cultural nuances needed to resonate with the South Asian audience. We craft scripts in English, Hindi, and Telugu that drive action.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex gap-6 border-b border-gray-200 pb-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mic className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase mb-3">Professional Voiceovers</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Access our roster of professional voice talent. From energetic promotional reads to trustworthy corporate voices, we find the perfect tone for your brand.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 border-b border-gray-200 pb-8 md:border-b-0">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Headphones className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase mb-3">Audio Engineering</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        State-of-the-art mixing and mastering. We integrate licensed music beds, sound effects, and crystal-clear vocals to produce broadcast-ready commercial spots.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 pb-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MonitorPlay className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase mb-3">Digital Asset Design</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We also design compelling visual banners for our mobile apps, website, and social media platforms to ensure your omnichannel campaign is visually cohesive.
                                    </p>
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
