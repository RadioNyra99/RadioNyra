"use client"

import Link from "next/link"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play, Mic2, Calendar, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PodcastsPage() {
    const podcasts = [
        { title: "Episode 1: The Beginning", host: "Sohail", show: "Non Stop Hungama", date: "Jan 03, 2026" },
        { title: "Episode 2: Bollywood Talk", host: "Bharti Rathore", show: "Bollywood Bliss", date: "Jan 04, 2026" },
        { title: "Episode 3: Morning Vibes", host: "Raj Persaud", show: "Morning Commute", date: "Jan 05, 2026" },
    ]

    const [submitted, setSubmitted] = useState(false)
    const [step, setStep] = useState(1)

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
        // Smooth scroll to the success message/calendly
        const formElement = document.getElementById('guest-form')
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const nextStep = () => {
        // Basic validation (mostly relying on browser required check for now, but we can do manual)
        // Since browser required check only works on submit, we might want to manually check empty fields if needed.
        // For now, allow next. A more robust implementation would check fields.
        // Let's do a simple check.
        if (step === 1 && (!formData.firstName || !formData.lastName || !formData.phone || !formData.email)) return alert("Please fill all required fields");
        if (step === 2 && (!formData.company || !formData.role || !formData.businessModel)) return alert("Please fill all required fields");
        if (step === 3 && (!formData.techCompanyDesc || !formData.primarilyServe || !formData.operatingTime)) return alert("Please fill all required fields");

        setStep(step + 1);
    }

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground text-foreground">
            <Navigation />

            <main>
                {/* Header Section */}
                <section className="py-12 bg-primary/5 border-b border-primary/10 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
                            Podcast
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
                            Insights, Stories & Deep Dives
                        </p>
                    </div>
                </section>

                {/* Podcast Application Section - Compact Single Form */}
                <section id="guest-form" className="py-16 bg-muted/20 border-b border-border">
                    <div className="container mx-auto px-4 max-w-2xl">
                        {!submitted ? (
                            <div className="bg-card border border-border p-8 shadow-xl rounded-sm">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-black uppercase tracking-tighter mb-1 italic">Join Us as a Guest!</h2>
                                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Schedule Your Podcast Today!</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Personal Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label htmlFor="firstName" className="text-[10px] uppercase tracking-widest text-muted-foreground">First Name*</Label>
                                            <Input id="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="h-9 rounded-none border-border focus:border-primary bg-background text-sm" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="lastName" className="text-[10px] uppercase tracking-widest text-muted-foreground">Last Name*</Label>
                                            <Input id="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="h-9 rounded-none border-border focus:border-primary bg-background text-sm" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-muted-foreground">Phone*</Label>
                                            <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-9 rounded-none border-border focus:border-primary bg-background text-sm" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground">Email*</Label>
                                            <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-9 rounded-none border-border focus:border-primary bg-background text-sm" />
                                        </div>
                                    </div>

                                    {/* Company Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label htmlFor="company" className="text-[10px] uppercase tracking-widest text-muted-foreground">Company*</Label>
                                            <Input id="company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="h-9 rounded-none border-border focus:border-primary bg-background text-sm" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Your Role*</Label>
                                            <Select required onValueChange={(v) => setFormData({ ...formData, role: v })} value={formData.role}>
                                                <SelectTrigger className="h-9 rounded-none border-border bg-background text-sm">
                                                    <SelectValue placeholder="Select Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="owner">Owner/Operator</SelectItem>
                                                    <SelectItem value="partner">Partner/Co-owner</SelectItem>
                                                    <SelectItem value="leadership">Leadership Team</SelectItem>
                                                    <SelectItem value="lead">Acquisitions/Ops Lead</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Business Model*</Label>
                                            <Select required onValueChange={(v) => setFormData({ ...formData, businessModel: v })} value={formData.businessModel}>
                                                <SelectTrigger className="h-9 rounded-none border-border bg-background text-sm">
                                                    <SelectValue placeholder="Select Model" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="sfr">SFR Real Estate</SelectItem>
                                                    <SelectItem value="commercial">Commercial/Multifamily</SelectItem>
                                                    <SelectItem value="lending">Lending/Private Capital</SelectItem>
                                                    <SelectItem value="construction">Construction/Renovation</SelectItem>
                                                    <SelectItem value="title">Legal/Compliance</SelectItem>
                                                    <SelectItem value="tech">Tech/Software</SelectItem>
                                                    <SelectItem value="lead">Lead Provider</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="techDesc" className="text-[10px] uppercase tracking-widest text-muted-foreground">Operating Time*</Label>
                                            <Input id="operating" required value={formData.operatingTime} onChange={(e) => setFormData({ ...formData, operatingTime: e.target.value })} className="h-9 rounded-none border-border bg-background text-sm" placeholder="Years in business" />
                                        </div>
                                    </div>

                                    {/* Detailed Questions */}
                                    <div className="space-y-1">
                                        <Label htmlFor="techDesc" className="text-[10px] uppercase tracking-widest text-muted-foreground">Who do you primarily serve?*</Label>
                                        <Input id="serve" required value={formData.primarilyServe} onChange={(e) => setFormData({ ...formData, primarilyServe: e.target.value })} className="h-9 rounded-none border-border bg-background text-sm" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label htmlFor="problem" className="text-[10px] uppercase tracking-widest text-muted-foreground">Problem Solved*</Label>
                                            <Textarea id="problem" required value={formData.problemSolved} onChange={(e) => setFormData({ ...formData, problemSolved: e.target.value })} className="min-h-[60px] rounded-none border-border bg-background text-sm" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="growth" className="text-[10px] uppercase tracking-widest text-muted-foreground">Growth Opportunity*</Label>
                                            <Textarea id="growth" required value={formData.growthOpportunity} onChange={(e) => setFormData({ ...formData, growthOpportunity: e.target.value })} className="min-h-[60px] rounded-none border-border bg-background text-sm" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <Label htmlFor="story" className="text-[10px] uppercase tracking-widest text-muted-foreground">What story/strategy would you highlight?*</Label>
                                        <Textarea id="story" required value={formData.mainStory} onChange={(e) => setFormData({ ...formData, mainStory: e.target.value })} className="min-h-[80px] rounded-none border-border bg-background text-sm" placeholder="Briefly tell us what you'd like to discuss..." />
                                    </div>

                                    <Button type="submit" className="w-full h-11 text-xs font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none shadow-lg transition-all mt-2">
                                        Submit
                                    </Button>
                                </form>
                            </div>
                        ) : (
                            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                                <div className="mb-8">
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 italic">
                                        ✅ Application Sent!
                                    </h2>
                                    <p className="text-lg font-bold text-primary uppercase tracking-widest">
                                        We'll be in touch shortly.
                                    </p>
                                </div>
                                <Button onClick={() => setSubmitted(false)} variant="link" className="text-muted-foreground uppercase tracking-widest text-[10px] font-black hover:text-primary transition-colors">
                                    Submit another application
                                </Button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Episodes Section - MOVED TO BOTTOM */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 border-l-4 border-primary pl-4 italic">Recent Episodes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {podcasts.map((pod, i) => (
                                <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary transition-all duration-300 rounded-sm shadow-sm">
                                    <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-all z-20 shadow-2xl">
                                            <Play className="fill-white text-white ml-1 w-6 h-6" />
                                        </div>
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60 bg-black/40 px-2 py-1 backdrop-blur-sm">45:00 MIN</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">{pod.show}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 opacity-60">
                                                <Calendar className="w-3 h-3" /> {pod.date}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors italic leading-tight">{pod.title}</h3>
                                        <div className="flex items-center gap-2 mb-8">
                                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                                                <Mic2 className="w-3 h-3 text-muted-foreground" />
                                            </div>
                                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Hosted by {pod.host}</p>
                                        </div>

                                        <Link href="/podcasts" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1">
                                            Watch Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-primary text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">Never Miss an Episode</h2>
                        <p className="text-white/80 font-bold uppercase tracking-widest text-xs mb-10">Subscribe to our newsletter for weekly podcast highlights.</p>
                        <Button className="h-16 px-12 text-lg font-black uppercase tracking-widest bg-white hover:bg-white/90 text-primary rounded-none shadow-xl transition-all" asChild>
                            <Link href="/contact">Subscribe Now</Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
