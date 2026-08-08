"use client"

import React, { useState } from "react"
import { Megaphone, CheckCircle2, TrendingUp, Users, Radio, MapPin, Send, Sparkles, Target, ShieldCheck, Award, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { trackLeadSubmit } from "@/lib/analytics"

const AD_PACKAGES = [
    {
        title: "On-Air Broadcast Campaign",
        price: "Custom Monthly",
        tag: "Most Popular",
        features: [
            "Prime Time 30s & 60s Commercial Spots",
            "Broadcasted across 99.9 FM HD3 / HD4",
            "Live RJ Mentions & Radio Show Sponsorship",
            "Coverage in Raleigh, Atlanta, MD, & OH"
        ]
    },
    {
        title: "Digital & YouTube Omnichannel",
        price: "Flexible Campaign",
        tag: "High Engagement",
        features: [
            "Pre-roll & In-stream YouTube Video Integration",
            "Targeted Social Media Posts (IG, FB, LinkedIn)",
            "Dedicated WhatsApp Community Promotions",
            "Comprehensive Performance & Audience Analytics"
        ]
    },
    {
        title: "360° Platinum Media Sponsorship",
        price: "Full Package",
        tag: "Maximum Impact",
        features: [
            "Exclusive On-Air + YouTube + Digital Synergy",
            "Title Media Partner at Major Festival Events",
            "Custom Live Host Interview & Brand Segment",
            "VIP Lead Generation & Dedicated Strategy Team"
        ]
    }
];

const AD_BENEFITS = [
    {
        icon: Target,
        title: "High-Income Diaspora Audience",
        desc: "Reach affluent Indian Subcontinent families with high purchasing power across top US metropolitan hubs."
    },
    {
        icon: ShieldCheck,
        title: "Verified Community Trust",
        desc: "Over 12 years on air building unmatched listener loyalty and brand credibility across generations."
    },
    {
        icon: Zap,
        title: "Multi-Channel Synergy",
        desc: "Simultaneous reach across terrestrial FM radio, YouTube digital video, email, and social networks."
    },
    {
        icon: Award,
        title: "Turnkey Creative Studio",
        desc: "Professional audio scriptwriting, voiceover talent, and video production included with your campaign."
    }
];

export function AdvertiserSection() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        trackLeadSubmit("Advertiser Lead Form", formData.company);
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", company: "", email: "", phone: "", message: "" });
            setSubmitted(false);
        }, 4000);
    };

    return (
        <section id="advertise-section" className="py-20 bg-background text-foreground border-t border-border">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 text-red-600 text-xs font-black uppercase tracking-widest mb-4 border border-red-600/20">
                        <Megaphone className="w-4 h-4" />
                        Media & Business Advertising Opportunities
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight italic text-foreground leading-tight mb-4">
                        Promote Your Brand Across America's Leading Indian Subcontinent Network
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Connect directly with over <strong className="text-foreground">250,000+ engaged, high-income listeners</strong> across terrestrial FM radio, YouTube original video content, digital streams, and premier community events.
                    </p>
                </div>

                {/* Audience Statistics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="p-6 rounded-3xl bg-card border border-border/80 text-center shadow-md hover:shadow-xl transition-all">
                        <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                        <span className="text-3xl font-black block">250,000+</span>
                        <span className="text-xs text-muted-foreground font-extrabold uppercase tracking-wider">Monthly Active Listeners</span>
                    </div>

                    <div className="p-6 rounded-3xl bg-card border border-border/80 text-center shadow-md hover:shadow-xl transition-all">
                        <TrendingUp className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                        <span className="text-3xl font-black block">5.8M+</span>
                        <span className="text-xs text-muted-foreground font-extrabold uppercase tracking-wider">Digital & Video Impressions</span>
                    </div>

                    <div className="p-6 rounded-3xl bg-card border border-border/80 text-center shadow-md hover:shadow-xl transition-all">
                        <MapPin className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                        <span className="text-3xl font-black block">7+ Major</span>
                        <span className="text-xs text-muted-foreground font-extrabold uppercase tracking-wider">US Metro Markets</span>
                    </div>

                    <div className="p-6 rounded-3xl bg-card border border-border/80 text-center shadow-md hover:shadow-xl transition-all">
                        <Radio className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                        <span className="text-3xl font-black block">99.9 FM</span>
                        <span className="text-xs text-muted-foreground font-extrabold uppercase tracking-wider">HD3 & HD4 Channels</span>
                    </div>
                </div>

                {/* Why Advertise With Us - Benefits Grid */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic">
                            Why Brands Choose Radio Nyra
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm font-semibold uppercase tracking-widest mt-1">
                            Proven results for multicultural media marketing
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {AD_BENEFITS.map((benefit, bIdx) => (
                            <div key={bIdx} className="bg-card border border-border/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                        <benefit.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-black text-lg text-foreground mb-2 leading-tight">{benefit.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ad Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {AD_PACKAGES.map((pkg, idx) => (
                        <div key={idx} className="relative rounded-3xl bg-card border border-border/80 p-8 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between">
                            <div>
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider inline-block mb-4">
                                    {pkg.tag}
                                </span>
                                <h3 className="text-xl font-black text-foreground mb-2">{pkg.title}</h3>
                                <p className="text-2xl font-extrabold text-primary mb-6">{pkg.price}</p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button
                                onClick={() => {
                                    const element = document.getElementById("lead-form-anchor");
                                    element?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="w-full bg-foreground text-background hover:bg-foreground/90 font-black text-xs uppercase tracking-widest h-12 rounded-xl cursor-pointer"
                            >
                                Request Advertising Information
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Lead Form Container */}
                <div id="lead-form-anchor" className="max-w-3xl mx-auto bg-gradient-to-b from-card via-card to-muted/30 border border-border/80 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-8">
                        <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary mb-2">
                            <Sparkles className="w-4 h-4" /> Start Your Campaign
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Request Advertising Information</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm font-medium mt-2 max-w-lg mx-auto">
                            Fill out the inquiry form below and our advertising strategy team will prepare a customized media plan for your brand within 24 hours.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input
                                placeholder="Your Full Name *"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="h-12 rounded-xl bg-background/80"
                                required
                            />
                            <Input
                                placeholder="Company / Brand Name *"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="h-12 rounded-xl bg-background/80"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input
                                type="email"
                                placeholder="Work Email Address *"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="h-12 rounded-xl bg-background/80"
                                required
                            />
                            <Input
                                type="tel"
                                placeholder="Phone Number *"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="h-12 rounded-xl bg-background/80"
                                required
                            />
                        </div>

                        <Textarea
                            placeholder="Tell us about your campaign objectives, target audience, budget, or preferred advertising channels (Radio, YouTube, Social, Events)..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="min-h-[120px] rounded-xl bg-background/80"
                            required
                        />

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button
                                type="submit"
                                size="lg"
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest h-14 rounded-2xl cursor-pointer shadow-xl shadow-red-600/30"
                            >
                                {submitted ? (
                                    <span className="flex items-center gap-2 text-white">
                                        <CheckCircle2 className="w-5 h-5 text-green-300" /> Inquiry Submitted Successfully!
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Send className="w-4 h-4" /> Advertise Now & Request Plan
                                    </span>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
