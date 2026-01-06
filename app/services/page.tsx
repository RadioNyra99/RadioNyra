"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, Zap, Megaphone, Globe, Monitor, Radio, Award, Star, ZapIcon, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ServicesPage() {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: "",
        role: "",
        businessModel: "",
        techCompanyDesc: "",
        primarilyServe: "",
        operatingTime: "",
        problemSolved: "",
        growthOpportunity: "",
        biggestChallenge: "",
        mainStory: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        window.scrollTo({ top: 300, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navigation />

            <main>
                {/* Header Section */}
                <section className="py-20 bg-primary/5 border-b border-primary/10 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-primary">
                            Our Services
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto">
                            Elevate Your Brand with the Voice of the Indian Subcontinent
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    {!submitted ? (
                        <section className="mb-24">
                            {/* SECTION: PODCAST APPLICATION FORM */}
                            <div className="bg-card border border-border p-8 md:p-12 shadow-2xl rounded-sm">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">Join Us as a Guest!</h2>
                                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Schedule Your Podcast Today!</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name*</Label>
                                            <Input id="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name*</Label>
                                            <Input id="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number*</Label>
                                            <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email*</Label>
                                            <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company*</Label>
                                        <Input id="company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                                    </div>

                                    <div className="space-y-3">
                                        <Label>What’s your role in your business?*</Label>
                                        <RadioGroup required onValueChange={(v) => setFormData({ ...formData, role: v })}>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="owner" id="r1" />
                                                <Label htmlFor="r1">I’m the owner/operator</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="partner" id="r2" />
                                                <Label htmlFor="r2">I’m a partner or co-owner</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="leadership" id="r3" />
                                                <Label htmlFor="r3">I’m part of the leadership team</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="lead" id="r4" />
                                                <Label htmlFor="r4">I’m an acquisitions or operations lead</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="other" id="r5" />
                                                <Label htmlFor="r5">Other</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>What best describes your primary business model?*</Label>
                                        <Select required onValueChange={(v) => setFormData({ ...formData, businessModel: v })}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sfr">Single Family Residential Real Estate Investing</SelectItem>
                                                <SelectItem value="commercial">Commercial / Large Multifamily / New Development</SelectItem>
                                                <SelectItem value="lending">Lending or Private Capital</SelectItem>
                                                <SelectItem value="construction">Construction or Renovation Services</SelectItem>
                                                <SelectItem value="title">Title, Insurance, TC, Legal or Compliance Services</SelectItem>
                                                <SelectItem value="tech">Technology or Software for Real Estate Investing</SelectItem>
                                                <SelectItem value="lead">Lead Provider (PPL, PPC, Skip Tracing, etc.)</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {formData.businessModel === "other" && (
                                            <Input className="mt-2" placeholder="Please specify" onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })} />
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="techDesc">Which best describes your technology or software company?*</Label>
                                        <Input id="techDesc" required value={formData.techCompanyDesc} onChange={(e) => setFormData({ ...formData, techCompanyDesc: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="serve">Who do you primarily serve?*</Label>
                                        <Input id="serve" required value={formData.primarilyServe} onChange={(e) => setFormData({ ...formData, primarilyServe: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="operating">How long has your company been operating?*</Label>
                                        <Input id="operating" required value={formData.operatingTime} onChange={(e) => setFormData({ ...formData, operatingTime: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="problem">What problem does your product solve for real estate professionals or investors?*</Label>
                                        <Textarea id="problem" required value={formData.problemSolved} onChange={(e) => setFormData({ ...formData, problemSolved: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="growth">What’s your biggest opportunity for growth right now?*</Label>
                                        <Textarea id="growth" required value={formData.growthOpportunity} onChange={(e) => setFormData({ ...formData, growthOpportunity: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="challenge">What’s your biggest challenge in the current market?*</Label>
                                        <Textarea id="challenge" required value={formData.biggestChallenge} onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="story">If you were to be featured on our podcast, what’s the main story, strategy, or lesson you’d want to highlight?*</Label>
                                        <Textarea id="story" required value={formData.mainStory} onChange={(e) => setFormData({ ...formData, mainStory: e.target.value })} />
                                    </div>

                                    <Button type="submit" className="w-full h-14 text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90">
                                        Submit Application
                                    </Button>
                                </form>
                            </div>
                        </section>
                    ) : (
                        <section className="text-center py-20 mb-24 animate-in fade-in zoom-in duration-500">
                            <div className="mb-12">
                                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                                    ✅ You're Approved!
                                </h2>
                                <p className="text-2xl font-bold text-primary uppercase tracking-widest">
                                    Book Your Podcast Slot Below!!!
                                </p>
                            </div>

                            <div className="bg-card border border-border rounded-lg overflow-hidden min-h-[600px] shadow-2xl">
                                <iframe
                                    src="https://calendly.com/radionyra/30min"
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    className="w-full"
                                ></iframe>
                            </div>
                            <Button onClick={() => setSubmitted(false)} variant="link" className="mt-8 text-muted-foreground uppercase tracking-widest text-xs">
                                Back to Advertisement Options
                            </Button>
                        </section>
                    )}
                </div>

                {/* SECTION 1: ON-AIR ADVERTISING */}
                <section id="on-air" className="py-24 bg-background border-t border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                                <Radio className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold uppercase tracking-tighter">On-Air Advertising</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "30-Second Ad Spot",
                                    slots: "Prime-Time (8–10 AM, 11 AM–2 PM, 5–7 PM)",
                                    min: "5 spots recommended per week",
                                    delivery: "Ads are rotated across selected prime-time windows"
                                },
                                {
                                    title: "60-Second Ad Spot",
                                    slots: "Prime-Time (8–10 AM, 11 AM–2 PM, 5–7 PM)",
                                    min: "5 spots recommended per week",
                                    delivery: "Suitable for longer promotional messaging or storytelling ads"
                                },
                                {
                                    title: "Weekend Special Package",
                                    slots: "Saturday and Sunday only",
                                    min: "One weekend per package",
                                    delivery: "Inclusions: 10 total 30-second spots across the weekend"
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 border border-border bg-card hover:border-primary transition-all rounded-sm shadow-sm">
                                    <h3 className="text-2xl font-bold uppercase mb-4 text-primary">{item.title}</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest mb-1">Time Slots</p>
                                            <p className="font-semibold">{item.slots}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest mb-1">Minimum Purchase</p>
                                            <p className="font-semibold">{item.min}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest mb-1">Delivery</p>
                                            <p className="text-muted-foreground">{item.delivery}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 2: SPONSORSHIP PACKAGES */}
                <section id="sponsorship" className="py-24 bg-muted/30 border-y border-border">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                                <Award className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold uppercase tracking-tighter">Sponsorship Packages</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col gap-6 p-8 bg-card border border-border rounded-sm">
                                <h3 className="text-3xl font-black uppercase text-primary tracking-tight">Show Sponsorship</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>Exclusive mention and branding within a popular show or segment</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>Frequency: Minimum one mention per airing + segment branding</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-6 p-8 bg-card border border-border rounded-sm">
                                <h3 className="text-3xl font-black uppercase text-primary tracking-tight">Festival Sponsorship</h3>
                                <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Events: Holi, Diwali, New Year’s, Independence Day, etc.</p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>Branding in festival-related segments</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>Online banners on high-traffic pages</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>Mentions across radio & digital media channels</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: DIGITAL & SOCIAL MEDIA PROMOTIONS */}
                <section id="digital" className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold uppercase tracking-tighter">Digital & Social Media</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group p-10 border border-border bg-card relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rotate-45 translate-x-12 -translate-y-12" />
                                <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                                    <Megaphone className="w-6 h-6 text-primary" /> Sponsored Social Media
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">Platforms: Shared across 60+ platforms</p>
                                    <div className="p-4 bg-muted/50 border-l-4 border-primary">
                                        <p className="text-sm">Inclusions: Image + caption + brand tag/hashtag</p>
                                    </div>
                                    <p className="font-bold text-sm uppercase tracking-widest text-primary">Frequency: Recommended 2 posts per week</p>
                                </div>
                            </div>

                            <div className="group p-10 border border-border bg-card relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rotate-45 translate-x-12 -translate-y-12" />
                                <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                                    <ZapIcon className="w-6 h-6 text-primary" /> Monthly Email Blast
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">Audience: 60K+ Subscribers</p>
                                    <div className="p-4 bg-muted/50 border-l-4 border-primary">
                                        <p className="text-sm">Inclusions: One dedicated HTML email sent to full list</p>
                                    </div>
                                    <p className="font-bold text-sm uppercase tracking-widest text-primary">Best for: Event promotions, launches, sales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: IN-STORE DIGITAL DISPLAYS */}
                <section id="in-store" className="py-24 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Monitor className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-4xl font-black uppercase tracking-tighter">In-Store Digital Displays</h2>
                                </div>
                                <h3 className="text-3xl font-bold mb-6">Static Ad Display</h3>
                                <ul className="space-y-4 text-lg">
                                    <li className="flex gap-4">
                                        <Check className="w-6 h-6 text-white/60 flex-shrink-0" />
                                        <span>Locations: 3+ major Indian grocery stores (scalable to 5)</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <Check className="w-6 h-6 text-white/60 flex-shrink-0" />
                                        <span>Duration: 1 Month</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <Check className="w-6 h-6 text-white/60 flex-shrink-0" />
                                        <span>Specs: 1920×1080 static graphic or rotating slide</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 p-8 bg-black/20 backdrop-blur-md rounded-lg border border-white/10">
                                <p className="text-xl font-bold mb-4 uppercase tracking-widest">Extensions</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded">
                                        <p className="font-bold">Motion ad option</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded">
                                        <p className="font-bold">Ad production support available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: MONTHLY PACKAGES */}
                <section id="packages" className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-primary">Monthly Packages</h2>
                            <p className="text-muted-foreground uppercase tracking-[0.2em] font-bold">Select the perfect plan for your growth</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* I. Trial Package */}
                            <Card className="border-green-500/20 bg-card hover:shadow-2xl hover:shadow-green-500/5 transition-all">
                                <CardHeader className="text-center bg-green-500/5 pb-8">
                                    <div className="text-green-500 font-black uppercase mb-2">Trial</div>
                                    <CardTitle className="text-3xl font-black">PACKAGE I</CardTitle>
                                    <CardDescription>One-Time Use Only</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-8 space-y-4">
                                    {[
                                        "4 × 30s prime-time ads",
                                        "4 × 30s general rotation ads",
                                        "Sponsor of the Week social post"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-green-600 hover:bg-green-700 font-bold uppercase">Get Started</Button>
                                </CardFooter>
                            </Card>

                            {/* II. Growth Package */}
                            <Card className="border-blue-500/20 bg-card hover:shadow-2xl hover:shadow-blue-500/5 transition-all outline outline-2 outline-blue-500/50 scale-105 z-10">
                                <CardHeader className="text-center bg-blue-500/5 pb-8 relative">
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-[10px] font-black rounded-full uppercase">Popular</div>
                                    <div className="text-blue-500 font-black uppercase mb-2">Growth</div>
                                    <CardTitle className="text-3xl font-black">PACKAGE II</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-8 space-y-4">
                                    {[
                                        "25 × 30s ad spots",
                                        "1 sponsored social post",
                                        "1 email blast (60K+ sub)",
                                        "3 Grocery stores (1 month)",
                                        "Lite show sponsorship"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-2 text-sm">
                                            <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold uppercase">Choose Growth</Button>
                                </CardFooter>
                            </Card>

                            {/* III. Premium Package */}
                            <Card className="border-purple-500/20 bg-card hover:shadow-2xl hover:shadow-purple-500/5 transition-all">
                                <CardHeader className="text-center bg-purple-500/5 pb-8">
                                    <div className="text-purple-500 font-black uppercase mb-2">Premium</div>
                                    <CardTitle className="text-3xl font-black">PACKAGE III</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-8 space-y-4">
                                    {[
                                        "50 × 30s ad spots",
                                        "2 sponsored social posts",
                                        "1 email blast (60K+ sub)",
                                        "3 Grocery stores (1 month)",
                                        "Exclusive show sponsorship"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-2 text-sm">
                                            <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700 font-bold uppercase">Go Premium</Button>
                                </CardFooter>
                            </Card>

                            {/* IV. Exclusive LIVE Package */}
                            <Card className="border-primary/20 bg-card hover:shadow-2xl transition-all">
                                <CardHeader className="text-center bg-primary/5 pb-8">
                                    <div className="text-primary font-black uppercase mb-2">Exclusive</div>
                                    <CardTitle className="text-3xl font-black">PACKAGE IV</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-8 space-y-4">
                                    {[
                                        "Live broadcast (3-5 hours)",
                                        "Radio host at event",
                                        "Live & deferred streaming",
                                        "Interviews & Live media",
                                        "Social media storm",
                                        "On-site event banners"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-2 text-sm">
                                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-primary hover:bg-primary/90 font-bold uppercase" asChild>
                                        <a href="mailto:ads@radionyra.com">Request Live</a>
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
