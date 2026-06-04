"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Smartphone, Star, Megaphone, Zap } from "lucide-react"
import { ApolloTracker } from "@/components/apollo-tracker"

export default function AdvertisePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white text-gray-900">
            <Navigation />
            <ApolloTracker />

            <main>
                {/* Hero Section */}
                <section className="relative py-16 md:py-20 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none text-gray-900">
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
                <section className="py-16 bg-white border-b border-gray-100">
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

                {/* Audience Snapshot */}
                <section className="py-16 bg-muted/20 border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic mb-4">Audience Snapshot</h2>
                            <p className="text-lg text-gray-600 italic">Who you reach when you advertise with Radio Nyra.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-8 border-t-4 border-t-primary shadow-sm">
                                <h3 className="text-xl font-black uppercase mb-4 text-primary">Demographics</h3>
                                <ul className="space-y-3 text-gray-700 font-medium">
                                    <li className="flex justify-between border-b pb-2"><span>Age 25-45</span> <strong>65%</strong></li>
                                    <li className="flex justify-between border-b pb-2"><span>Age 45+</span> <strong>25%</strong></li>
                                    <li className="flex justify-between"><span>Under 25</span> <strong>10%</strong></li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 border-t-4 border-t-secondary shadow-sm">
                                <h3 className="text-xl font-black uppercase mb-4 text-secondary">Purchasing Power</h3>
                                <ul className="space-y-3 text-gray-700 font-medium">
                                    <li className="flex justify-between border-b pb-2"><span>HHI $150K+</span> <strong>55%</strong></li>
                                    <li className="flex justify-between border-b pb-2"><span>HHI $100K - $150K</span> <strong>30%</strong></li>
                                    <li className="flex justify-between"><span>Homeowners</span> <strong>78%</strong></li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 border-t-4 border-t-green-500 shadow-sm">
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
                                        Radio Nyra is the premier destination for the South Asian community in the Raleigh-Durham area. Our listeners are highly engaged, loyal, and possess significant purchasing power.
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
