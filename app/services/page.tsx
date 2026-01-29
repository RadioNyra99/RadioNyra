"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, Zap, Megaphone, Globe, Monitor, Radio, Award, Star, ZapIcon, Mic2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground relative overflow-hidden">
            <Navigation />

            <main className="relative z-10">
                {/* Header Section */}
                <section className="py-8 md:py-10 bg-primary/5 border-b border-primary/10 text-center relative overflow-hidden">
                    <div className="container mx-auto px-4 fade-in-up">
                        <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-primary italic drop-shadow-sm">
                            Our Services
                        </h1>
                        <p className="text-xl md:text-3xl text-muted-foreground uppercase tracking-[0.3em] max-w-3xl mx-auto font-bold mb-12 italic">
                            Elevate Your Brand with the Voice of the Indian Subcontinent
                        </p>
                        <div className="w-24 h-2 bg-primary mx-auto" />
                    </div>
                </section>

                {/* SECTION 1: ON-AIR ADVERTISING */}
                <section id="on-air" className="py-16 bg-background border-t border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-6 mb-16 fade-in-up">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                                <Radio className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">On-Air Advertising</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "30-Second Ad Spot",
                                    slots: "Prime-Time (8–10 AM, 11 AM–2 PM, 5–7 PM)",
                                    min: "5 spots recommended per week",
                                    delivery: "Ads are rotated across selected prime-time windows",
                                    icon: Zap
                                },
                                {
                                    title: "60-Second Ad Spot",
                                    slots: "Prime-Time (8–10 AM, 11 AM–2 PM, 5–7 PM)",
                                    min: "5 spots recommended per week",
                                    delivery: "Suitable for longer promotional messaging or storytelling ads",
                                    icon: Mic2
                                },
                                {
                                    title: "Weekend Special Package",
                                    slots: "Saturday and Sunday only",
                                    min: "One weekend per package",
                                    delivery: "Inclusions: 10 total 30-second spots across the weekend",
                                    icon: Star
                                }
                            ].map((item, i) => (
                                <Card key={i} className={`group border-border bg-card hover:border-primary hover:shadow-2xl transition-all duration-500 rounded-none overflow-hidden fade-in-up stagger-${i + 1} relative`}>
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -rotate-45 translate-x-12 -translate-y-12 transition-transform group-hover:bg-primary/10" />
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-black uppercase text-foreground group-hover:text-primary transition-colors italic">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6 text-sm">
                                        <div>
                                            <p className="font-black uppercase text-primary tracking-widest mb-2 text-[10px]">Time Slots</p>
                                            <p className="font-bold text-base">{item.slots}</p>
                                        </div>
                                        <div>
                                            <p className="font-black uppercase text-primary tracking-widest mb-2 text-[10px]">Minimum Purchase</p>
                                            <p className="font-bold text-base">{item.min}</p>
                                        </div>
                                        <div>
                                            <p className="font-black uppercase text-primary tracking-widest mb-2 text-[10px]">Delivery</p>
                                            <p className="text-muted-foreground font-medium">{item.delivery}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 2: SPONSORSHIP PACKAGES */}
                <section id="sponsorship" className="py-16 bg-muted/30 border-y border-border relative">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-6 mb-16 fade-in-up">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                                <Award className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Sponsorship Packages</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <Card className="border-border bg-card rounded-none hover:border-primary transition-all duration-500 hover:shadow-2xl fade-in-up stagger-1 p-4">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-black uppercase text-primary tracking-tight italic">Show Sponsorship</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-6">
                                        <li className="flex gap-4 items-start">
                                            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                            <span className="text-lg font-medium italic text-muted-foreground">Exclusive mention and branding within a popular show or segment</span>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                            <span className="text-lg font-medium italic text-muted-foreground">Frequency: Minimum one mention per airing + segment branding</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-border bg-card rounded-none hover:border-primary transition-all duration-500 hover:shadow-2xl fade-in-up stagger-2 p-4">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-black uppercase text-primary tracking-tight italic">Festival Sponsorship</CardTitle>
                                    <CardDescription className="font-black uppercase tracking-[0.2em] text-xs text-muted-foreground mt-2">Events: Holi, Diwali, New Year’s, Independence Day, etc.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-6">
                                        <li className="flex gap-4 items-start">
                                            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                            <span className="text-lg font-medium italic text-muted-foreground">Branding in festival-related segments</span>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                            <span className="text-lg font-medium italic text-muted-foreground">Online banners on high-traffic pages</span>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                            <span className="text-lg font-medium italic text-muted-foreground">Mentions across radio & digital media channels</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: DIGITAL & SOCIAL MEDIA PROMOTIONS */}
                <section id="digital" className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-6 mb-16 fade-in-up">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Digital & Social Media</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="group border-border bg-card relative overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-2xl rounded-none fade-in-up stagger-1">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rotate-45 translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors" />
                                <CardHeader>
                                    <CardTitle className="text-2xl font-black uppercase flex items-center gap-4 italic">
                                        <Megaphone className="w-8 h-8 text-primary" /> Sponsored Social Media
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <p className="text-lg font-bold text-muted-foreground italic">Platforms: Shared across 60+ platforms</p>
                                    <div className="p-6 bg-muted/50 border-l-8 border-primary shadow-sm">
                                        <p className="text-base font-medium italic">Inclusions: Image + caption + brand tag/hashtag</p>
                                    </div>
                                    <p className="font-black text-sm uppercase tracking-[0.3em] text-primary">Frequency: Recommended 2 posts per week</p>
                                </CardContent>
                            </Card>

                            <Card className="group border-border bg-card relative overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-2xl rounded-none fade-in-up stagger-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rotate-45 translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors" />
                                <CardHeader>
                                    <CardTitle className="text-2xl font-black uppercase flex items-center gap-4 italic">
                                        <ZapIcon className="w-8 h-8 text-primary" /> Monthly Email Blast
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <p className="text-lg font-bold text-muted-foreground italic">Audience: 60K+ Subscribers</p>
                                    <div className="p-6 bg-muted/50 border-l-8 border-primary shadow-sm">
                                        <p className="text-base font-medium italic">Inclusions: One dedicated HTML email sent to full list</p>
                                    </div>
                                    <p className="font-black text-sm uppercase tracking-[0.3em] text-primary">Best for: Event promotions, launches, sales</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: IN-STORE DIGITAL DISPLAYS */}
                <section id="in-store" className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2 fade-in-up">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                        <Monitor className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic">In-Store Digital Displays</h2>
                                </div>
                                <h3 className="text-3xl font-black mb-8 italic text-white/90">Static Ad Display</h3>
                                <ul className="space-y-6 text-xl">
                                    <li className="flex gap-6 items-start">
                                        <Check className="w-7 h-7 text-white/40 flex-shrink-0 mt-1" />
                                        <span className="font-bold italic">Locations: 3+ major Indian grocery stores (scalable to 5)</span>
                                    </li>
                                    <li className="flex gap-6 items-start">
                                        <Check className="w-7 h-7 text-white/40 flex-shrink-0 mt-1" />
                                        <span className="font-bold italic">Duration: 1 Month</span>
                                    </li>
                                    <li className="flex gap-6 items-start">
                                        <Check className="w-7 h-7 text-white/40 flex-shrink-0 mt-1" />
                                        <span className="font-bold italic">Specs: 1920×1080 static graphic or rotating slide</span>
                                    </li>
                                    <li className="flex gap-6 items-start">
                                        <Check className="w-7 h-7 text-white/40 flex-shrink-0 mt-1" />
                                        <span className="font-bold italic">Impressions: 400,000+ per month</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 p-10 bg-black/40 backdrop-blur-xl rounded-none border border-white/20 shadow-2xl fade-in-up stagger-1">
                                <p className="text-2xl font-black mb-8 uppercase tracking-[0.3em] text-primary italic">Extensions</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-none hover:bg-white/10 transition-colors">
                                        <p className="font-black uppercase tracking-tight italic">Motion ad option</p>
                                    </div>
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-none hover:bg-white/10 transition-colors">
                                        <p className="font-black uppercase tracking-tight italic">Ad production support available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: MONTHLY PACKAGES */}
                <section id="packages" className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20 fade-in-up">
                            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">Monthly Packages</h2>
                            <p className="text-muted-foreground uppercase tracking-[0.4em] font-black italic">Select the perfect plan for your growth</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* I. Trial Package */}
                            <Card className="group border-green-500/20 bg-card hover:shadow-[0_0_50px_rgba(34,197,94,0.15)] transition-all duration-500 rounded-none fade-in-up stagger-1 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                                <CardHeader className="text-center bg-green-500/5 pb-10 pt-12">
                                    <div className="text-green-500 font-black uppercase tracking-[0.2em] mb-4 text-xs">Trial</div>
                                    <CardTitle className="text-4xl font-black italic">PACKAGE I</CardTitle>
                                    <CardDescription className="font-bold uppercase tracking-widest text-xs mt-2">One-Time Use Only</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-10 space-y-6">
                                    {[
                                        "4 × 30s prime-time ads",
                                        "4 × 30s general rotation ads",
                                        "Sponsor of the Week social post"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-3 text-base items-start">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="font-bold italic text-muted-foreground">{feat}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="pb-10">
                                    <Button className="w-full bg-green-600 hover:bg-green-700 font-black uppercase tracking-widest py-8 rounded-none transition-transform active:scale-95" asChild>
                                        <Link href="/contact">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* II. Growth Package */}
                            <Card className="group border-blue-500/20 bg-card hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 rounded-none fade-in-up stagger-2 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
                                <CardHeader className="text-center bg-blue-500/5 pb-10 pt-12">
                                    <div className="text-blue-500 font-black uppercase tracking-[0.2em] mb-4 text-xs">Growth</div>
                                    <CardTitle className="text-4xl font-black italic">PACKAGE II</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-10 space-y-6">
                                    {[
                                        "25 × 30s ad spots",
                                        "1 sponsored social post",
                                        "1 email blast (60K+ sub)",
                                        "3 Grocery stores (1 month)",
                                        "Lite show sponsorship"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-3 text-base items-start">
                                            <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span className="font-bold italic text-muted-foreground">{feat}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="pb-10">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 font-black uppercase tracking-widest py-8 rounded-none transition-transform active:scale-95" asChild>
                                        <Link href="/contact">Choose Growth</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* III. Premium Package */}
                            <Card className="group border-purple-500/20 bg-card hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-500 rounded-none fade-in-up stagger-3 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-purple-500" />
                                <CardHeader className="text-center bg-purple-500/5 pb-10 pt-12">
                                    <div className="text-purple-500 font-black uppercase tracking-[0.2em] mb-4 text-xs">Premium</div>
                                    <CardTitle className="text-4xl font-black italic">PACKAGE III</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-10 space-y-6">
                                    {[
                                        "50 × 30s ad spots",
                                        "2 sponsored social posts",
                                        "1 email blast (60K+ sub)",
                                        "3 Grocery stores (1 month)",
                                        "Exclusive show sponsorship"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-3 text-base items-start">
                                            <Check className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                            <span className="font-bold italic text-muted-foreground">{feat}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="pb-10">
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700 font-black uppercase tracking-widest py-8 rounded-none transition-transform active:scale-95" asChild>
                                        <Link href="/contact">Go Premium</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* IV. Exclusive LIVE Package */}
                            <Card className="group border-primary/20 bg-card hover:shadow-[0_0_50px_rgba(255,0,0,0.15)] transition-all duration-500 rounded-none fade-in-up stagger-4 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                                <CardHeader className="text-center bg-primary/5 pb-10 pt-12">
                                    <div className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-xs">Exclusive</div>
                                    <CardTitle className="text-4xl font-black italic">PACKAGE IV</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-10 space-y-6">
                                    {[
                                        "Live broadcast (3-5 hours)",
                                        "Radio host at event",
                                        "Live & deferred streaming",
                                        "Interviews & Live media",
                                        "Social media storm",
                                        "On-site event banners"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-3 text-base items-start">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="font-bold italic text-muted-foreground">{feat}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="pb-10">
                                    <Button className="w-full bg-primary hover:bg-primary/90 font-black uppercase tracking-widest py-8 rounded-none transition-transform active:scale-95" asChild>
                                        <Link href="/contact">Request Live</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
