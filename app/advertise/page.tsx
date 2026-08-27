"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Smartphone, Star, Megaphone, Zap, Calculator, CheckCircle2, Download, ArrowRight, Radio } from "lucide-react"
import { ApolloTracker } from "@/components/apollo-tracker"
import { trackEvent, trackLeadSubmit } from "@/lib/analytics"

export default function AdvertisePage() {
    const [budget, setBudget] = useState(1500)
    const [marketTier, setMarketTier] = useState<"rdu" | "southeast" | "national">("rdu")
    const [formSubmitted, setFormSubmitted] = useState(false)

    // Dynamic calculations based on market and budget
    const getReachEstimates = () => {
        if (marketTier === "rdu") {
            const spots = Math.floor(budget / 35)
            const impressions = Math.floor(budget * 95)
            const listeners = Math.min(100000, Math.floor(budget * 42))
            return { spots, impressions, listeners, tierLabel: "Raleigh-Durham 99.9 FM (HD4/HD3) + Triangle Digital" }
        } else if (marketTier === "southeast") {
            const spots = Math.floor(budget / 45)
            const impressions = Math.floor(budget * 120)
            const listeners = Math.floor(budget * 55)
            return { spots, impressions, listeners, tierLabel: "Raleigh-Durham + Atlanta Digital Hub" }
        } else {
            const spots = Math.floor(budget / 55)
            const impressions = Math.floor(budget * 160)
            const listeners = Math.floor(budget * 75)
            return { spots, impressions, listeners, tierLabel: "7-Market National Network + YouTube + Audio Stream" }
        }
    }

    const { spots, impressions, listeners, tierLabel } = getReachEstimates()

    const handleMediaKitDownload = () => {
        trackEvent({
            category: 'Advertiser',
            action: 'download_media_kit',
            label: '2026 Media Kit & Rate Card'
        })
        alert("Downloading Radio Nyra 2026 Media Kit & Rate Card...")
    }

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                {/* Hero Section */}
                <section className="relative py-16 md:py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Radio className="w-3.5 h-3.5" />
                                99.9 FM HD4/HD3 Raleigh-Durham & National Network
                            </div>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                Grow Your <span className="text-primary">Business</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-10">
                                Advertise with America&apos;s #1 Indian Subcontinent Radio Network
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="h-16 px-10 text-base font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-full transition-all hover:scale-105 shadow-xl" asChild>
                                    <a href="#inquiry">Get Custom Proposal</a>
                                </Button>
                                <Button size="lg" variant="outline" onClick={handleMediaKitDownload} className="h-16 px-8 text-base font-black uppercase tracking-widest border-2 border-gray-300 hover:border-primary rounded-full transition-all flex items-center gap-2">
                                    <Download className="w-5 h-5 text-primary" />
                                    Download Media Kit
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Listener Reach", desc: "100K+ loyal listeners across Raleigh-Durham.", icon: Users },
                                { title: "Digital + Radio", desc: "FM broadcast, mobile apps, and digital platforms.", icon: Smartphone },
                                { title: "Targeted Audience", desc: "Reach the affluent Indian Subcontinent community.", icon: Star },
                                { title: "Brand Visibility", desc: "High-frequency placements for maximum impact.", icon: Megaphone }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-gray-50 border border-gray-100 hover:border-primary/30 transition-all hover:shadow-lg rounded-2xl">
                                    <item.icon className="w-12 h-12 text-primary mb-6" />
                                    <h3 className="text-xl font-black uppercase italic mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Audience Snapshot */}
                <section className="py-16 bg-muted/20 border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic mb-4">Audience Snapshot</h2>
                            <p className="text-lg text-gray-600 italic">Who you reach when you advertise with Radio Nyra.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-8 border-t-4 border-t-primary shadow-sm rounded-2xl">
                                <h3 className="text-xl font-black uppercase mb-4 text-primary">Demographics</h3>
                                <ul className="space-y-3 text-gray-700 font-medium">
                                    <li className="flex justify-between border-b pb-2"><span>Age 25-45</span> <strong>65%</strong></li>
                                    <li className="flex justify-between border-b pb-2"><span>Age 45+</span> <strong>25%</strong></li>
                                    <li className="flex justify-between"><span>Under 25</span> <strong>10%</strong></li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 border-t-4 border-t-secondary shadow-sm rounded-2xl">
                                <h3 className="text-xl font-black uppercase mb-4 text-secondary">Purchasing Power</h3>
                                <ul className="space-y-3 text-gray-700 font-medium">
                                    <li className="flex justify-between border-b pb-2"><span>HHI $150K+</span> <strong>55%</strong></li>
                                    <li className="flex justify-between border-b pb-2"><span>HHI $100K - $150K</span> <strong>30%</strong></li>
                                    <li className="flex justify-between"><span>Homeowners</span> <strong>78%</strong></li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 border-t-4 border-t-green-500 shadow-sm rounded-2xl">
                                <h3 className="text-xl font-black uppercase mb-4 text-green-600">Engagement</h3>
                                <ul className="space-y-3 text-gray-700 font-medium">
                                    <li className="flex justify-between border-b pb-2"><span>Daily Listening</span> <strong>2.5 hrs</strong></li>
                                    <li className="flex justify-between border-b pb-2"><span>Mobile App Usage</span> <strong>45%</strong></li>
                                    <li className="flex justify-between"><span>Event Attendees</span> <strong>15K+ Yearly</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Reach & Budget Estimator */}
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                                <Calculator className="w-3.5 h-3.5" />
                                Interactive ROI Estimator
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic mb-3">
                                Estimate Your Campaign Reach
                            </h2>
                            <p className="text-gray-600 text-base max-w-xl mx-auto">
                                Customize your desired investment and target market to preview estimated listener reach and on-air placements.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2 block">
                                        Select Target Market Coverage:
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setMarketTier("rdu")}
                                            className={`p-3 text-xs font-bold uppercase rounded-xl border transition-all ${
                                                marketTier === "rdu" ? "bg-primary text-white border-primary shadow-md" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                            }`}
                                        >
                                            Raleigh-Durham
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setMarketTier("southeast")}
                                            className={`p-3 text-xs font-bold uppercase rounded-xl border transition-all ${
                                                marketTier === "southeast" ? "bg-primary text-white border-primary shadow-md" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                            }`}
                                        >
                                            RDU + Atlanta
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setMarketTier("national")}
                                            className={`p-3 text-xs font-bold uppercase rounded-xl border transition-all ${
                                                marketTier === "national" ? "bg-primary text-white border-primary shadow-md" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                            }`}
                                        >
                                            All 7 Markets
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">
                                            Monthly Marketing Budget:
                                        </label>
                                        <span className="text-2xl font-black text-primary">${budget.toLocaleString()}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={500}
                                        max={10000}
                                        step={250}
                                        value={budget}
                                        onChange={(e) => setBudget(Number(e.target.value))}
                                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-[11px] font-bold text-gray-400 mt-1">
                                        <span>$500</span>
                                        <span>$5,000</span>
                                        <span>$10,000+</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20 text-xs text-gray-700 leading-relaxed">
                                    <strong>Campaign Scope:</strong> {tierLabel}. Includes professional audio spot production and schedule optimization.
                                </div>
                            </div>

                            <div className="lg:col-span-6 bg-gray-900 text-white p-8 rounded-2xl shadow-inner space-y-6">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                                    Projected Monthly Impact
                                </h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <span className="text-xs text-gray-300 block mb-1">Estimated Reach</span>
                                        <span className="text-2xl md:text-3xl font-black text-white">{listeners.toLocaleString()}+</span>
                                        <span className="text-[10px] text-gray-400 block mt-0.5">Unique Listeners</span>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <span className="text-xs text-gray-300 block mb-1">On-Air Spots</span>
                                        <span className="text-2xl md:text-3xl font-black text-primary">{spots} Spots</span>
                                        <span className="text-[10px] text-gray-400 block mt-0.5">30s / 60s Broadcasts</span>
                                    </div>
                                </div>

                                <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                        <span>~{impressions.toLocaleString()} Digital Streaming & App Impressions</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                        <span>Live Host Endorsements & Show Tags</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                        <span>Monthly Performance & Reach Analytics Report</span>
                                    </div>
                                </div>

                                <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-wider text-xs rounded-xl shadow-lg">
                                    <a href="#inquiry">Lock in this Custom Campaign <ArrowRight className="w-4 h-4 ml-1.5" /></a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Packages & Rate Card Overview */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic mb-4">Media Packages</h2>
                            <p className="text-lg text-gray-600 italic">Tailored solutions to fit your marketing goals.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Package 1 */}
                            <div className="border border-gray-200 p-8 flex flex-col">
                                <h3 className="text-2xl font-black uppercase mb-2">Starter Pulse</h3>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">Local Business Essentials</p>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>30-second ROS (Run of Schedule) spots</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>Standard App Banner placement</span>
                                    </li>
                                </ul>
                                <Button className="w-full rounded-none uppercase font-bold tracking-widest bg-gray-900 hover:bg-black" asChild>
                                    <a href="#inquiry">Inquire Now</a>
                                </Button>
                            </div>
                            
                            {/* Package 2 */}
                            <div className="border-2 border-primary p-8 flex flex-col relative shadow-xl transform md:-translate-y-4">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1">Most Popular</div>
                                <h3 className="text-2xl font-black uppercase mb-2 text-primary">Growth Catalyst</h3>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">Maximum Visibility</p>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>60-second Primetime spots</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>Live Host Endorsements / Mentions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>Social Media cross-promotion</span>
                                    </li>
                                </ul>
                                <Button className="w-full rounded-none uppercase font-bold tracking-widest bg-primary hover:bg-primary/90 text-white" asChild>
                                    <a href="#inquiry">Inquire Now</a>
                                </Button>
                            </div>

                            {/* Package 3 */}
                            <div className="border border-gray-200 p-8 flex flex-col">
                                <h3 className="text-2xl font-black uppercase mb-2">Network Domination</h3>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">Omnichannel Reach</p>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>Custom Show Sponsorships</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>Dedicated Email Blasts (60K+ list)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>On-ground Event Activation</span>
                                    </li>
                                </ul>
                                <Button className="w-full rounded-none uppercase font-bold tracking-widest bg-gray-900 hover:bg-black" asChild>
                                    <a href="#inquiry">Inquire Now</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section id="inquiry" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                            {/* Content Column */}
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic mb-6">Why Advertise with us?</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed italic">
                                        Radio Nyra is the premier destination for the Indian Subcontinent community in the Raleigh-Durham area. Our listeners are highly engaged, loyal, and possess significant purchasing power.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                    {[
                                        { label: "Daily Listeners", value: "100K+" },
                                        { label: "Broadcasting", value: "24/7" },
                                        { label: "Monthly Newsletter", value: "60K+" },
                                        { label: "Social Media", value: "20K+" },
                                        { label: "Brand Partners", value: "500+" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-8 bg-gray-50 border border-gray-100">
                                            <p className="text-4xl font-black text-primary italic mb-2">{stat.value}</p>
                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="bg-white p-10 border border-gray-200 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 -rotate-45 translate-x-24 -translate-y-24" />
                                <h3 className="text-2xl font-black uppercase tracking-tight italic mb-8 relative z-10">Send an Inquiry</h3>
                                <form
                                    action="https://formspree.io/f/fa42a7d8-c45e-4e7d-868c-7861ef21d915"
                                    method="POST"
                                    onSubmit={() => {
                                        trackLeadSubmit({
                                            campaignType: `Calculator Tier: ${marketTier} ($${budget}/mo)`
                                        });
                                        setFormSubmitted(true);
                                    }}
                                    className="space-y-6 relative z-10"
                                >
                                    <input type="hidden" name="estimated-budget" value={`$${budget}/mo`} />
                                    <input type="hidden" name="target-market" value={tierLabel} />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Full Name *</label>
                                            <Input name="full-name" className="bg-gray-50 border-gray-200 rounded-xl h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Company Name *</label>
                                            <Input name="company-name" className="bg-gray-50 border-gray-200 rounded-xl h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" placeholder="Brand Inc." required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Business Address *</label>
                                        <Input name="address" className="bg-gray-50 border-gray-200 rounded-xl h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" placeholder="Street, City, State, Zip" required />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Email Address *</label>
                                            <Input name="email" className="bg-gray-50 border-gray-200 rounded-xl h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" type="email" placeholder="john@example.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Phone Number *</label>
                                            <Input name="phone" className="bg-gray-50 border-gray-200 rounded-xl h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" type="tel" placeholder="+1 (919) 000-0000" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Your Message *</label>
                                        <Textarea name="message" className="bg-gray-50 border-gray-200 rounded-xl min-h-[140px] text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" placeholder={`Tell us about your campaign goals (Selected budget: $${budget}/mo for ${marketTier.toUpperCase()})...`} required />
                                    </div>

                                    {/* Simple Captcha */}
                                    <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Verification</p>
                                                <p className="text-sm font-bold uppercase tracking-widest italic text-gray-500">Solve: 5 + 3 =</p>
                                            </div>
                                        </div>
                                        <Input name="captcha" className="w-full sm:w-28 bg-white border-gray-300 rounded-xl h-14 text-center text-xl font-black text-primary transition-all focus:ring-4 focus:ring-primary/10" placeholder="?" required />
                                    </div>

                                    <Button type="submit" className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-base rounded-2xl transition-all hover:scale-[1.01] shadow-xl">
                                        Submit Inquiry & Request Proposal
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
