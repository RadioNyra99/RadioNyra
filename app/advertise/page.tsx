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
                <section className="relative py-24 md:py-40 overflow-hidden border-b border-white/10">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.2),transparent_70%)]" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none">
                            ADVERTISE WITH <span className="text-primary">RADIO NYRA</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 uppercase tracking-[0.2em] max-w-3xl mx-auto font-bold mb-12">
                            The Voice of the Indian Subcontinent in the USA
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" className="h-16 px-12 text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none transition-all hover:scale-105 shadow-2xl" asChild>
                                <a href="#contact">Advertise Now</a>
                            </Button>
                            <Button variant="outline" size="lg" className="h-16 px-12 text-lg font-bold uppercase tracking-widest border-2 border-white text-white bg-transparent hover:bg-white hover:text-black rounded-none transition-all hover:scale-105 shadow-2xl" asChild>
                                <a href="#why">Learn More</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* WHY ADVERTISE SECTION */}
                <section id="why" className="py-24 bg-[#0a0a0a] border-b border-white/5">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16 italic text-center">
                            WHY ADVERTISE WITH US?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                <div key={i} className="p-8 bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                                    <item.icon className="w-12 h-12 text-primary mb-6 transition-transform group-hover:scale-110" />
                                    <h3 className="text-xl font-bold uppercase tracking-tighter mb-4 italic">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ADVERTISING OPTIONS */}
                <section className="py-24 bg-[#000000] border-b border-white/5">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16 italic text-center">
                            ADVERTISING OPTIONS
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "On-air Commercials (30s/60s Spots)",
                                "Specific Show Sponsorships",
                                "Digital Banner Ads & Social Media",
                                "Live Remote Broadcasts",
                                "Event Partnership & Presence",
                                "App-exclusive Promotions"
                            ].map((option, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 bg-white/5 border-l-4 border-primary">
                                    <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                                    <span className="text-xl font-black uppercase tracking-tight italic">{option}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD ADVERTISE */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16 italic text-center">
                            WHO SHOULD ADVERTISE?
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Local Businesses", "International Brands", "Event Organizers",
                                "Real Estate Agencies", "Financial Institutions", "Educational Services",
                                "Entertainment Centers", "Healthcare Providers", "Churches & Ministries"
                            ].map((tag, i) => (
                                <span key={i} className="px-8 py-4 bg-white/5 border border-white/10 text-lg font-bold uppercase tracking-widest hover:bg-primary transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section id="contact" className="py-24 bg-[#050505] border-t border-white/10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Info Column */}
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic">
                                    LET'S BUILD YOUR <span className="text-primary">SUCCESS</span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-12 font-medium">
                                    Contact our advertising team today to discuss custom packages tailored to your brand's specific needs and goals.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Email Us</p>
                                            <p className="text-xl font-bold italic">advertise@radionyra.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Call Us</p>
                                            <p className="text-xl font-bold italic">+1 (919) 890-6101</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Our Studio</p>
                                            <p className="text-xl font-bold italic">Raleigh, North Carolina, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="bg-white/5 p-10 border border-white/10 shadow-2xl">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
                                            <Input className="bg-black/50 border-white/20 rounded-none h-14 text-white focus:border-primary transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Company Name</label>
                                            <Input className="bg-black/50 border-white/20 rounded-none h-14 text-white focus:border-primary transition-all" placeholder="Brand Inc." />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                                        <Input className="bg-black/50 border-white/20 rounded-none h-14 text-white focus:border-primary transition-all" type="email" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">Your Message</label>
                                        <Textarea className="bg-black/50 border-white/20 rounded-none min-h-[150px] text-white focus:border-primary transition-all" placeholder="How can we help you grow your business?" />
                                    </div>
                                    <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-lg rounded-none transition-all hover:scale-[1.02]">
                                        Submit Inquiry
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
