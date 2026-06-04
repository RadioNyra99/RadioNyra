"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { CountUp } from "@/components/ui/count-up"
import { BarChart3, PieChart, TrendingUp, Users, MapPin, Target } from "lucide-react"

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                Audience <span className="text-primary">Analytics</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-12">
                                Data-Driven Insights for Your Campaigns
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Metrics Dashboard */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-8 bg-gray-50 border border-gray-100 shadow-sm text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-5xl font-black text-gray-900 mb-2">
                                    <CountUp end={100} suffix="K+" duration={2000} />
                                </div>
                                <h3 className="font-bold uppercase tracking-widest text-sm text-gray-500">Weekly Listeners</h3>
                            </div>
                            <div className="p-8 bg-gray-50 border border-gray-100 shadow-sm text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Target className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-5xl font-black text-gray-900 mb-2">
                                    <CountUp end={60} suffix="K+" duration={2000} />
                                </div>
                                <h3 className="font-bold uppercase tracking-widest text-sm text-gray-500">Email Subscribers</h3>
                            </div>
                            <div className="p-8 bg-gray-50 border border-gray-100 shadow-sm text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <TrendingUp className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-5xl font-black text-gray-900 mb-2">
                                    <CountUp end={390} suffix="K+" duration={2000} />
                                </div>
                                <h3 className="font-bold uppercase tracking-widest text-sm text-gray-500">Monthly IG Reach</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Demographics */}
                <section className="py-16 bg-muted/20 border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic mb-4">Deep Demographics</h2>
                            <p className="text-lg text-gray-600 italic">Understand exactly who is tuning in.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Age Distribution */}
                            <div>
                                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                    <PieChart className="w-6 h-6 text-primary" /> Age Distribution
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between font-bold text-sm uppercase tracking-widest mb-2">
                                            <span>25 - 45 Years</span>
                                            <span className="text-primary">65%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between font-bold text-sm uppercase tracking-widest mb-2">
                                            <span>45+ Years</span>
                                            <span className="text-secondary">25%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                                            <div className="bg-secondary h-full rounded-full" style={{ width: '25%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between font-bold text-sm uppercase tracking-widest mb-2">
                                            <span>Under 25</span>
                                            <span className="text-green-500">10%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                                            <div className="bg-green-500 h-full rounded-full" style={{ width: '10%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Geographic Reach */}
                            <div>
                                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-primary" /> Core Geographies
                                </h3>
                                <div className="bg-white p-8 border border-gray-100 shadow-sm space-y-4">
                                    <div className="flex justify-between items-center border-b pb-4">
                                        <span className="font-black text-lg">Raleigh (NC)</span>
                                        <span className="font-bold text-gray-500 uppercase tracking-widest text-sm">Primary Market</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-4">
                                        <span className="font-black text-lg">Durham (NC)</span>
                                        <span className="font-bold text-gray-500 uppercase tracking-widest text-sm">Primary Market</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-4">
                                        <span className="font-black text-lg">Cary & Morrisville</span>
                                        <span className="font-bold text-gray-500 uppercase tracking-widest text-sm">Tech/Expat Hub</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-black text-lg">National Digital</span>
                                        <span className="font-bold text-gray-500 uppercase tracking-widest text-sm">App & Web Listeners</span>
                                    </div>
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
