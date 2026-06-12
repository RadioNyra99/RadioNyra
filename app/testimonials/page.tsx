"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Quote, Star, MessageSquare } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const testimonials = [
    {
        name: "Kash Patel Productions",
        role: "Event Organizers",
        content: "A record-breaking journey across North America. Every show was a testament to teamwork, creativity, and the unifying power of music. Radio Nyra was a key partner in making this vision a reality.",
        highlight: "A.R. Rahman – The Wonderment Tour",
        stars: 5
    },
    {
        name: "Digital Display Partner",
        role: "Local Business Owner",
        content: "Partnering with Radio Nyra has significantly increased our foot traffic. Their digital display network is a game-changer for local businesses in the Triangle area.",
        stars: 5
    },
    {
        name: "Raleigh Fan",
        role: "Listener",
        content: "Radio Nyra feels like home. It's the voice of our community, keeping us connected to our roots with the best music and news.",
        stars: 5
    },
    {
        name: "Community Leader",
        role: "Morrisville Resident",
        content: "The support Radio Nyra provides to local cultural events is unparalleled. They are truly the heartbeat of the South Asian community in North Carolina.",
        stars: 5
    }
];

const caseStudies = [
    {
        slug: "kash-patel-productions",
        client: "Kash Patel Productions",
        campaign: "A.R. Rahman – The Wonderment Tour Promotion",
        increase: "130%",
        metric: "Concert Ticket Sales",
        industry: "Live Entertainment & Concerts",
        summary: "Sold out 15,000+ capacity arenas and increased local Triangle tickets by 45%."
    },
    {
        slug: "mc-construction",
        client: "MC Construction Co.",
        campaign: "Triangle Custom Homebuilder Branding",
        increase: "275%",
        metric: "Monthly Inbound Leads",
        industry: "Real Estate & Construction",
        summary: "Generated 120+ qualified inbound leads and increased brand recall by 35%."
    },
    {
        slug: "royal-spice-restaurant",
        client: "Royal Spice Indian Restaurant",
        campaign: "Weekend Buffet & Dining Campaign",
        increase: "50%",
        metric: "Weekend Diners Served",
        industry: "Food & Hospitality",
        summary: "Boosted weekend dining traffic by 50% and registered 200+ WhatsApp claims."
    }
];

export default function TestimonialsPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formspree.io/f/fa42a7d8-c45e-4e7d-868c-7861ef21d915", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("There was an error submitting your testimonial. Please try again.");
            }
        } catch (error) {
            alert("An unexpected error occurred. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="py-20 bg-primary/5 border-b border-primary/10 relative overflow-hidden">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic text-shadow-glow">
                            Voice of the <span className="text-foreground">Community</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80 italic">
                            What our listeners and partners say about Radio Nyra
                        </p>
                    </div>
                    {/* Decorative Background Icon */}
                    <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-primary/5 -rotate-12" />
                </section>

                {/* Testimonials Grid */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-card border border-border p-10 relative group hover:border-primary transition-all duration-300 rounded-sm shadow-sm flex flex-col hover:-translate-y-1">
                                    <div className="absolute top-8 right-10 text-primary/20 group-hover:text-primary/40 transition-colors">
                                        <Quote className="w-12 h-12" />
                                    </div>

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.stars)].map((_, idx) => (
                                            <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl font-bold leading-relaxed mb-8 italic tracking-tight text-foreground/90">
                                        "{t.content}"
                                    </p>

                                    <div className="mt-auto pt-8 border-t border-border/50 flex flex-col">
                                        <span className="text-lg font-black uppercase tracking-tighter text-primary italic">{t.name}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t.role}</span>
                                        {t.highlight && (
                                            <span className="mt-4 inline-block bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit">
                                                {t.highlight}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Studies Section */}
                <section className="py-20 bg-muted/20 border-t border-border">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-primary/20">
                                Advertiser Success Stories
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-6 italic text-foreground">
                                Marketing Case Studies
                            </h2>
                            <p className="text-muted-foreground mt-3 uppercase tracking-widest text-xs font-bold">
                                See how local and national brands drive measurable results with Radio Nyra
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {caseStudies.map((study) => (
                                <div key={study.slug} className="bg-card border border-border p-8 rounded-sm shadow-sm flex flex-col hover:border-primary transition-all duration-300">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                            {study.industry}
                                        </span>
                                        <span className="text-3xl font-black text-primary">
                                            +{study.increase}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-2 leading-snug">
                                        {study.client}
                                    </h3>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                        {study.campaign}
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                                        {study.summary}
                                    </p>
                                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-none font-bold uppercase tracking-widest text-xs py-5">
                                        <Link href={`/testimonials/${study.slug}`}>View Case Study</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leave a Testimonial Section */}
                <section className="py-20 bg-muted/30 border-y border-border">
                    <div className="container mx-auto px-4 max-w-2xl">
                        {!submitted ? (
                            <div className="bg-card border border-border p-10 shadow-xl rounded-sm">
                                <div className="text-center mb-10">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageSquare className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">Share Your Story</h2>
                                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mt-2">We'd love to hear from you!</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Name</Label>
                                            <Input id="name" required className="h-12 rounded-none border-border focus:border-primary bg-background" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="role" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Role/City</Label>
                                            <Input id="role" placeholder="e.g. Local Business Owner, Raleigh" className="h-12 rounded-none border-border focus:border-primary bg-background" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="content" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Testimonial</Label>
                                        <Textarea id="content" required className="min-h-[150px] rounded-none border-border focus:border-primary bg-background italic text-lg" placeholder="Tell us about your experience with Radio Nyra..." />
                                    </div>

                                    <Button type="submit" className="w-full h-14 text-sm font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none shadow-lg transition-all active:scale-95">
                                        Submit Testimonial
                                    </Button>
                                </form>
                            </div>
                        ) : (
                            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Star className="w-10 h-10 text-green-500 fill-green-500" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic text-primary">Thank You!</h2>
                                <p className="text-xl font-bold text-muted-foreground uppercase tracking-widest">
                                    Your message means the world to us.
                                </p>
                                <Button onClick={() => setSubmitted(false)} variant="link" className="mt-8 text-primary font-black uppercase tracking-widest">
                                    Submit another one
                                </Button>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
