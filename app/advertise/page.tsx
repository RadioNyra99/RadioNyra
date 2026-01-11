"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Smartphone, Star, Megaphone, Zap } from "lucide-react"

export default function AdvertisePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                        <div className="max-w-4xl">
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
                                Grow Your <span className="text-primary">Business</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-12">
                                Advertise with the #1 South Asian Radio Network
                            </p>
                            <Button size="lg" className="h-16 px-12 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none transition-all hover:scale-105 shadow-xl" asChild>
                                <a href="#inquiry">Get Started Now</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Listener Reach", desc: "100K+ loyal listeners across Raleigh-Durham.", icon: Users },
                                { title: "Digital + Radio", desc: "FM broadcast, mobile apps, and digital platforms.", icon: Smartphone },
                                { title: "Targeted Audience", desc: "Reach the affluent South Asian community.", icon: Star },
                                { title: "Brand Visibility", desc: "High-frequency placements for maximum impact.", icon: Megaphone }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-gray-50 border border-gray-100 hover:border-primary/30 transition-all hover:shadow-lg">
                                    <item.icon className="w-12 h-12 text-primary mb-6" />
                                    <h3 className="text-xl font-black uppercase italic mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section id="inquiry" className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                            {/* Content Column */}
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic mb-6">Why Advertise with us?</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed italic">
                                        Radio Nyra is the premier destination for the South Asian community in the Raleigh-Durham area. Our listeners are highly engaged, loyal, and possess significant purchasing power.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { label: "Daily Listeners", value: "100K+" },
                                        { label: "Community Events", value: "24/7" },
                                        { label: "Digital Reach", value: "1M+" },
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
                                    className="space-y-6 relative z-10"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Full Name *</label>
                                            <Input name="full-name" className="bg-gray-50 border-gray-200 rounded-none h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Company Name *</label>
                                            <Input name="company-name" className="bg-gray-50 border-gray-200 rounded-none h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" placeholder="Brand Inc." required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Business Address *</label>
                                        <Input name="address" className="bg-gray-50 border-gray-200 rounded-none h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" placeholder="Street, City, State, Zip" required />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Email Address *</label>
                                            <Input name="email" className="bg-gray-50 border-gray-200 rounded-none h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" type="email" placeholder="john@example.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Phone Number *</label>
                                            <Input name="phone" className="bg-gray-50 border-gray-200 rounded-none h-14 text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" type="tel" placeholder="+1 (919) 000-0000" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Your Message *</label>
                                        <Textarea name="message" className="bg-gray-50 border-gray-200 rounded-none min-h-[150px] text-gray-900 focus:border-primary transition-all placeholder:text-gray-400" placeholder="Tell us about your advertising needs..." required />
                                    </div>

                                    {/* Simple Captcha */}
                                    <div className="p-6 bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Verification</p>
                                                <p className="text-sm font-bold uppercase tracking-widest italic text-gray-500">Solve: 5 + 3 =</p>
                                            </div>
                                        </div>
                                        <Input name="captcha" className="w-full sm:w-28 bg-white border-gray-300 rounded-none h-14 text-center text-xl font-black text-primary transition-all focus:ring-4 focus:ring-primary/10" placeholder="?" required />
                                    </div>

                                    <Button type="submit" className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-lg rounded-none transition-all hover:scale-[1.01] shadow-xl">
                                        Submit inquiry
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
