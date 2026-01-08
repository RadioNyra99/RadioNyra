"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Megaphone, Smartphone, Star, Users, Mail, Phone, MapPin } from "lucide-react"

export default function AdvertisePage() {
    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main>
                {/* HERO SECTION */}
                <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/10">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.2),transparent_70%)]" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 italic leading-none">
                            ADVERTISE WITH <span className="text-primary">RADIO NYRA</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 uppercase tracking-[0.2em] max-w-3xl mx-auto font-bold mb-10">
                            The Voice of the Indian Subcontinent in the USA
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" className="h-12 px-10 text-base font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none transition-all hover:scale-105 shadow-2xl" asChild>
                                <a href="#contact">Advertise Now</a>
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-10 text-base font-bold uppercase tracking-widest border-2 border-white text-white bg-transparent hover:bg-white hover:text-black rounded-none transition-all hover:scale-105 shadow-2xl" asChild>
                                <a href="#why">Learn More</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* WHY ADVERTISE SECTION */}
                <section id="why" className="py-16 bg-[#0a0a0a] border-b border-white/5">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 italic text-center">
                            WHY ADVERTISE WITH US?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "LISTENER REACH",
                                    desc: "Connect with over 100,000+ loyal listeners across the Raleigh-Durham area and beyond.",
                                    icon: Users
                                },
                                {
                                    title: "DIGITAL + RADIO",
                                    desc: "Maximize exposure through our FM broadcast, mobile apps, and digital platforms.",
                                    icon: Smartphone
                                },
                                {
                                    title: "TARGETED AUDIENCE",
                                    desc: "Reach the affluent and rapidly growing South Asian community in the US with precision.",
                                    icon: Star
                                },
                                {
                                    title: "BRAND VISIBILITY",
                                    desc: "Establish your brand as a community leader through high-frequency on-air placements.",
                                    icon: Megaphone
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                                    <item.icon className="w-10 h-10 text-primary mb-4 transition-transform group-hover:scale-110" />
                                    <h3 className="text-lg font-bold uppercase tracking-tighter mb-3 italic">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ADVERTISING OPTIONS */}
                <section className="py-16 bg-[#000000] border-b border-white/5">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 italic text-center">
                            ADVERTISING OPTIONS
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "On-air Commercials (30s/60s Spots)",
                                "Specific Show Sponsorships",
                                "Digital Banner Ads & Social Media",
                                "Live Remote Broadcasts",
                                "Event Partnership & Presence",
                                "App-exclusive Promotions"
                            ].map((option, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border-l-4 border-primary">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-lg font-black uppercase tracking-tight italic">{option}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD ADVERTISE */}
                <section className="py-16 bg-[#0a0a0a]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 italic text-center">
                            WHO SHOULD ADVERTISE?
                        </h2>

                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Local Businesses", "International Brands", "Event Organizers",
                                "Real Estate Agencies", "Financial Institutions", "Educational Services",
                                "Entertainment Centers", "Healthcare Providers", "Churches & Ministries"
                            ].map((tag, i) => (
                                <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section id="contact" className="py-16 bg-[#050505] border-t border-white/10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Info Column */}
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">
                                    LET'S BUILD YOUR <span className="text-primary">SUCCESS</span>
                                </h2>
                                <p className="text-lg text-gray-400 mb-10 font-medium">
                                    Contact our advertising team today to discuss custom packages tailored to your brand's specific needs and goals.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center">
                                            <Mail className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Email Us</p>
                                            <p className="text-lg font-bold italic">Info@radionyra.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center">
                                            <Phone className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Call Us</p>
                                            <p className="text-lg font-bold italic">+1 (919) 999 - 8595</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center">
                                            <MapPin className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Our Studio</p>
                                            <p className="text-lg font-bold italic">Durham, North Carolina, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="bg-white/5 p-8 border border-white/10 shadow-2xl">
                                <form
                                    action="https://formspree.io/f/fa42a7d8-c45e-4e7d-868c-7861ef21d915"
                                    method="POST"
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
                                            <Input name="full-name" className="bg-black/50 border-white/20 rounded-none h-12 text-white focus:border-primary transition-all" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Company Name</label>
                                            <Input name="company-name" className="bg-black/50 border-white/20 rounded-none h-12 text-white focus:border-primary transition-all" placeholder="Brand Inc." required />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                                        <Input name="email" className="bg-black/50 border-white/20 rounded-none h-12 text-white focus:border-primary transition-all" type="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Your Message</label>
                                        <Textarea name="message" className="bg-black/50 border-white/20 rounded-none min-h-[120px] text-white focus:border-primary transition-all" placeholder="How can we help you grow your business?" required />
                                    </div>
                                    <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm rounded-none transition-all hover:scale-[1.02]">
                                        Submit
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
