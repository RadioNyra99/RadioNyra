"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { Heart, Globe, Users, Home } from "lucide-react"

export default function CommunityImpactPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                <section className="relative py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                Community <span className="text-primary">Impact</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-8">
                                A Network Built for the People, By the People
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="p-8 border-l-4 border-primary bg-gray-50 shadow-sm">
                                <Heart className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-black uppercase mb-4">Charity & Fundraising</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Radio Nyra actively leverages its reach to support local and international causes. From disaster relief fundraisers to local food drives, our platform serves as a powerful megaphone for mobilizing community support.
                                </p>
                            </div>
                            <div className="p-8 border-l-4 border-secondary bg-gray-50 shadow-sm">
                                <Globe className="w-10 h-10 text-secondary mb-6" />
                                <h3 className="text-2xl font-black uppercase mb-4">Cultural Preservation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Through dedicated programming in Hindi, Telugu, and other regional languages, we ensure that linguistic and cultural heritage is passed down to the next generation growing up in the United States.
                                </p>
                            </div>
                            <div className="p-8 border-l-4 border-green-500 bg-gray-50 shadow-sm">
                                <Home className="w-10 h-10 text-green-500 mb-6" />
                                <h3 className="text-2xl font-black uppercase mb-4">Small Business Support</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We act as the growth engine for immigrant-owned businesses. By providing accessible advertising and business spotlights, we help local restaurants, grocers, and services thrive.
                                </p>
                            </div>
                            <div className="p-8 border-l-4 border-gray-900 bg-gray-50 shadow-sm">
                                <Users className="w-10 h-10 text-gray-900 mb-6" />
                                <h3 className="text-2xl font-black uppercase mb-4">Local Integration</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We bridge the gap between the South Asian diaspora and the broader local community, partnering with local governments and schools to ensure our listeners are engaged and informed citizens.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
