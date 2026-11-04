"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Users, Smartphone, Star, Megaphone, Zap, Calculator, CheckCircle2, Download, ArrowRight, Radio,
  Building2, Calendar, Briefcase, Stethoscope, Globe2, Mail, Phone, MapPin, Sparkles, Check
} from "lucide-react"
import { ApolloTracker } from "@/components/apollo-tracker"
import { trackEvent, trackLeadSubmit } from "@/lib/analytics"

export default function AdvertisePage() {
    const [budget, setBudget] = useState(3000)
    const [marketTier, setMarketTier] = useState<"rdu" | "southeast" | "national">("rdu")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [advertiserSegment, setAdvertiserSegment] = useState<"local" | "events" | "services" | "healthcare" | "national">("local")
    const [campaignGoal, setCampaignGoal] = useState("Walk-in Foot Traffic & Customers")
    const [targetCity, setTargetCity] = useState("Triangle-Wide (All 8 Cities)")
    const [selectedChannels, setSelectedChannels] = useState<string[]>(["On-Air Spots (99.9 FM)", "Digital Web Streaming"])

    const tierLabel = marketTier === "rdu"
        ? "Raleigh-Durham"
        : marketTier === "southeast"
            ? "Raleigh-Durham and Atlanta"
            : "National digital campaign scope"

    const handleMediaKitRequest = () => {
        trackEvent({
            category: 'Advertiser',
            action: 'media_kit_requested',
            label: '2026 Media Kit & Rate Card'
        })
        window.location.href =
            "mailto:info@radionyra.com?subject=2026 Media Kit & Rate Card Request&body=Hello Radio Nyra team,%0D%0A%0D%0APlease send me the 2026 Media Kit & Rate Card.%0D%0A%0D%0AThank you."
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
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900">
                                Grow Your <span className="text-primary">Business</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 uppercase tracking-[0.2em] font-bold italic mb-10">
                                Advertise with Radio Nyra&apos;s Hindi, Telugu, and community programming
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="h-16 px-10 text-base font-extrabold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-full transition-all hover:scale-105 shadow-xl" asChild>
                                    <a href="#inquiry">Get Custom Proposal</a>
                                </Button>
                                <Button size="lg" variant="outline" onClick={handleMediaKitRequest} className="h-16 px-8 text-base font-extrabold uppercase tracking-widest border-2 border-gray-300 hover:border-primary rounded-full transition-all flex items-center gap-2">
                                    <Download className="w-5 h-5 text-primary" />
                                    Request Media Kit
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
                                { title: "Listener Reach", desc: "Plan placements across radio, digital streams, podcasts, and community events.", icon: Users },
                                { title: "Digital + Radio", desc: "FM broadcast, mobile apps, and digital platforms.", icon: Smartphone },
                                { title: "Targeted Audience", desc: "Plan messaging around language, content, and market.", icon: Star },
                                { title: "Brand Visibility", desc: "Discuss on-air and digital placement options with the team.", icon: Megaphone }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-gray-50 border border-gray-100 hover:border-primary/30 transition-all hover:shadow-lg rounded-2xl">
                                    <item.icon className="w-12 h-12 text-primary mb-6" />
                                    <h3 className="text-xl font-extrabold uppercase italic mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Multi-Platform Campaign Ecosystem */}
                <section className="py-16 bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                                <Sparkles className="w-3.5 h-3.5" />
                                Omnichannel Media Network
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight italic mb-4">
                                One Partner. 7 High-Converting Touchpoints.
                            </h2>
                            <p className="text-base text-gray-600 max-w-2xl mx-auto">
                                We combine the broad credibility of broadcast FM radio with hyper-targeted digital media, WhatsApp communities, and on-ground activations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "99.9 FM HD Radio Spots",
                                    badge: "Broadcast Audio",
                                    desc: "Ask about available 30-second and 60-second radio placements for listeners across the Triangle.",
                                    detail: "99.9 FM HD4 (Hindi) & HD3 (Telugu)",
                                },
                                {
                                    title: "Live Host Endorsements",
                                    badge: "High Trust",
                                    desc: "Our beloved RJs and hosts personally introduce, recommend, and vouch for your business on-air during daily shows.",
                                    detail: "Personalized host read scripts",
                                },
                                {
                                    title: "Digital Audio & Web Stream",
                                    badge: "Digital Reach",
                                    desc: "Streaming prerolls, companion banners, and interactive display ads across RadioNyra.com and mobile apps.",
                                    detail: "Ask for current campaign reach data",
                                },
                                {
                                    title: "YouTube & Video Podcasts",
                                    badge: "Visual Storytelling",
                                    desc: "Video sponsor lower-thirds, executive interviews, and guest features on our high-growth YouTube studio channels.",
                                    detail: "Leaders & Legends, Chai Pe Charcha",
                                },
                                {
                                    title: "WhatsApp & Email Blasts",
                                    badge: "Direct Response",
                                    desc: "Ask about current email newsletter and WhatsApp promotional placements.",
                                    detail: "Availability confirmed when a proposal is prepared",
                                },
                                {
                                    title: "Festival Event Activations",
                                    badge: "Experiential",
                                    desc: "Exclusive brand booths, stage announcements, and banner placement at Triangle Diwali, Holi, and Garba nights.",
                                    detail: "15,000+ annual in-person attendees",
                                },
                            ].map((channel, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary/40 transition-all shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                                                {channel.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-extrabold uppercase tracking-tight text-gray-900 mb-2">
                                            {channel.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                            {channel.desc}
                                        </p>
                                    </div>
                                    <div className="pt-3 border-t border-gray-100 text-[11px] font-bold text-primary">
                                        &bull; {channel.detail}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industry Solutions Tabs */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight italic mb-3">
                                Tailored Packages By Industry
                            </h2>
                            <p className="text-sm text-gray-600">
                                Select your business type to see how Radio Nyra drives measurable results for your sector.
                            </p>
                        </div>

                        {/* Industry Pill Selector */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                            {[
                                { id: "local", label: "Dining & Groceries", icon: Building2 },
                                { id: "events", label: "Concerts & Events", icon: Calendar },
                                { id: "services", label: "Legal & Real Estate", icon: Briefcase },
                                { id: "healthcare", label: "Healthcare & Dental", icon: Stethoscope },
                                { id: "national", label: "Corporate & National", icon: Globe2 },
                            ].map((tab) => {
                                const Icon = tab.icon
                                const isActive = advertiserSegment === tab.id
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setAdvertiserSegment(tab.id as any)}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                                            isActive
                                                ? "bg-primary text-white shadow-md shadow-primary/20"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Industry Detail Card */}
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl">
                            {advertiserSegment === "local" && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        <Building2 className="w-4 h-4" /> For Local Restaurants, Groceries &amp; Retailers
                                    </div>
                                    <h3 className="text-2xl font-extrabold uppercase tracking-tight">
                                        Drive Weekend Foot Traffic &amp; Repeat Local Customers
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Businesses can ask about promotional placements for dining, grocery, retail, and community events in the Triangle.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Weekend Primetime Spots</strong>
                                            <span className="text-gray-500">Air between 11 AM - 3 PM and 5 PM - 9 PM for peak hunger impact.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Featured Directory Listing</strong>
                                            <span className="text-gray-500">Includes direct call button, menu link, and special listener discount badge.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">WhatsApp Weekend Guide</strong>
                                            <span className="text-gray-500">Inclusion in Friday "Where to Eat in the Triangle" community blast.</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {advertiserSegment === "events" && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        <Calendar className="w-4 h-4" /> For Concerts, Festivals &amp; Comedy Organizers
                                    </div>
                                    <h3 className="text-2xl font-extrabold uppercase tracking-tight">
                                        Promote Concerts, Festivals &amp; Community Events
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Discuss on-air spots, interviews, event listings, and digital placements for Bollywood and Tollywood concerts, comedy shows, festivals, and community events. Campaign delivery and outcomes depend on the agreed plan.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">On-Air Ticket Contests</strong>
                                            <span className="text-gray-500">High-engagement call-in contests creating word-of-mouth buzz.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Dedicated Email Blast</strong>
                                            <span className="text-gray-500">Email placement can be included when the current list and campaign schedule are confirmed.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Artist Audio Station IDs</strong>
                                            <span className="text-gray-500">Celebrity artist drops saying "Catch me live in Raleigh with Radio Nyra!"</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {advertiserSegment === "services" && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        <Briefcase className="w-4 h-4" /> For Attorneys, CPAs, Realtors &amp; Mortgage Officers
                                    </div>
                                    <h3 className="text-2xl font-extrabold uppercase tracking-tight">
                                        Reach Audiences Interested in Professional Services
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Introduce your practice through relevant programming and campaign placements. Ask the Radio Nyra team for current market information before planning a campaign.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Expert Talk Segments</strong>
                                            <span className="text-gray-500">Weekly 5-minute educational Q&amp;A on immigration or real estate trends.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Priority Directory Placement</strong>
                                            <span className="text-gray-500">Featured placements may be available for eligible directory listings.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Lead Generation Route</strong>
                                            <span className="text-gray-500">Direct consultation inquiries forwarded straight to your CRM.</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {advertiserSegment === "healthcare" && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        <Stethoscope className="w-4 h-4" /> For Dental Practices, Doctors &amp; Wellness Centers
                                    </div>
                                    <h3 className="text-2xl font-extrabold uppercase tracking-tight">
                                        Attract Loyal Family Patients In Morrisville, Cary &amp; Apex
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Healthcare decisions in the South Asian community are heavily driven by trust, language comfort, and peer recommendations. Radio Nyra connects your clinic with growing families seeking pediatricians, orthodontists, ayurvedic care, and family dentistry.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Family Morning Show Slots</strong>
                                            <span className="text-gray-500">Aired during school drop-off and morning commute hours.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Health &amp; Wellness Vignettes</strong>
                                            <span className="text-gray-500">60-second health tips branded with your clinic's name and contact number.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Community Health Fair Tie-In</strong>
                                            <span className="text-gray-500">Featured sponsorship at Radio Nyra wellness events.</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {advertiserSegment === "national" && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        <Globe2 className="w-4 h-4" /> For National Brands, Auto &amp; Telecom Providers
                                    </div>
                                    <h3 className="text-2xl font-extrabold uppercase tracking-tight">
                                        Scale Across North Carolina &amp; Top US Multicultural Markets
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Whether launching an electric vehicle campaign, telecom international calling offer, or financial service, Radio Nyra delivers turnkey production, bilingual creative execution (Hindi, Telugu, English), and verified multi-market distribution across our 7 broadcast territories.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Multi-Market Syndication</strong>
                                            <span className="text-gray-500">Simultaneous broadcast across Raleigh, Atlanta, Cleveland, and beyond.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Full Creative Studio</strong>
                                            <span className="text-gray-500">Native voiceover talent, script translations, and audio post-production.</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
                                            <strong className="block text-primary">Third-Party Verification</strong>
                                            <span className="text-gray-500">Broadcast affidavits, stream log verification, and post-campaign analysis.</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Listener channels */}
                <section className="py-16 bg-muted/20 border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight italic mb-4">Ways to Connect with Radio Nyra</h2>
                            <p className="text-lg text-gray-600 italic">Choose placements that fit your audience, market, and campaign goals.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-8 border-t-4 border-t-primary shadow-sm rounded-2xl">
                                <h3 className="text-xl font-extrabold uppercase mb-4 text-primary">Live Radio</h3>
                                <p className="text-gray-700 font-medium">Hindi and Telugu programming on FM HD channels in Raleigh-Durham, with online live streams.</p>
                            </div>
                            <div className="bg-white p-8 border-t-4 border-t-secondary shadow-sm rounded-2xl">
                                <h3 className="text-xl font-extrabold uppercase mb-4 text-secondary">Digital Content</h3>
                                <p className="text-gray-700 font-medium">Explore podcast conversations, interviews, video, and station content across Radio Nyra's digital channels.</p>
                            </div>
                            <div className="bg-white p-8 border-t-4 border-t-green-500 shadow-sm rounded-2xl">
                                <h3 className="text-xl font-extrabold uppercase mb-4 text-green-600">Community</h3>
                                <p className="text-gray-700 font-medium">Discuss event listings, sponsorships, and community-focused campaigns with the Radio Nyra team.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campaign planner */}
                <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white py-16">
                    <div className="container mx-auto max-w-5xl px-4">
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                                <Calculator className="h-3.5 w-3.5" /> Campaign planning
                            </div>
                            <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight italic md:text-5xl">Build a Campaign Brief</h2>
                            <p className="text-base text-gray-600">
                                Choose a planning budget and market, then request a proposal. Listener reach, impressions, rates, and campaign outcomes require current inventory and reporting data, so this planner does not estimate them.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-3xl gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
                            <div>
                                <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wider">Planning budget</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {[1200, 3000, 6000].map((amount) => (
                                        <button
                                            key={amount}
                                            type="button"
                                            onClick={() => setBudget(amount)}
                                            aria-pressed={budget === amount}
                                            className={`rounded-xl border px-3 py-3 text-sm font-bold transition-colors ${budget === amount ? "border-primary bg-primary text-white" : "border-gray-200 bg-gray-50 text-gray-700 hover:border-primary"}`}
                                        >
                                            ${amount.toLocaleString()}
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-2 text-xs text-gray-500">Planning amount only; final pricing and placement require a proposal.</p>
                            </div>
                            <div>
                                <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wider">Market scope</h3>
                                <div className="grid gap-2">
                                    {[
                                        { id: "rdu", label: "Raleigh-Durham" },
                                        { id: "southeast", label: "Raleigh-Durham and Atlanta" },
                                        { id: "national", label: "National digital" },
                                    ].map((market) => (
                                        <button
                                            key={market.id}
                                            type="button"
                                            onClick={() => setMarketTier(market.id as "rdu" | "southeast" | "national")}
                                            aria-pressed={marketTier === market.id}
                                            className={`rounded-xl border px-3 py-2 text-left text-xs font-bold transition-colors ${marketTier === market.id ? "border-primary bg-primary/10 text-primary" : "border-gray-200 text-gray-700 hover:border-primary"}`}
                                        >
                                            {market.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="sm:col-span-2 flex flex-col items-start justify-between gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-center">
                                <p className="text-sm text-gray-600">Selected brief: <strong>${budget.toLocaleString()}</strong> · {tierLabel}</p>
                                <Button asChild className="rounded-full px-6 font-bold">
                                    <a href="#inquiry">Request a proposal</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Packages & Rate Card Overview */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight italic mb-4">Media Packages</h2>
                            <p className="text-lg text-gray-600 italic">Tailored solutions to fit your marketing goals.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Package 1 */}
                            <div className="border border-gray-200 p-8 flex flex-col">
                                <h3 className="text-2xl font-extrabold uppercase mb-2">Starter Pulse</h3>
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
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1">Most Popular</div>
                                <h3 className="text-2xl font-extrabold uppercase mb-2 text-primary">Growth Catalyst</h3>
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
                                <h3 className="text-2xl font-extrabold uppercase mb-2">Network Domination</h3>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">Omnichannel Reach</p>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>Custom Show Sponsorships</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-primary shrink-0" />
                                        <span>Email or WhatsApp placement, when available</span>
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
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight italic mb-4">Why Partner With Radio Nyra?</h2>
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        Radio Nyra offers advertising and sponsorship placements across Hindi and Telugu broadcasts, digital streams, podcasts, video, and community events. Ask the team for a current media kit and verified audience information.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {[
                                        { label: "Radio", value: "Hindi & Telugu" },
                                        { label: "HD channels", value: "99.9 FM HD3 / HD4" },
                                        { label: "On demand", value: "Podcasts & interviews" },
                                        { label: "Community", value: "Events & stories" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                            <p className="text-2xl font-extrabold text-primary italic mb-0.5">{stat.value}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Direct Contact Card */}
                                <div className="p-6 bg-gray-900 text-white rounded-2xl space-y-4">
                                    <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                                        Prefer To Speak With Our Media Director?
                                    </h3>
                                    <div className="space-y-2 text-xs text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-primary shrink-0" />
                                            <span>Studio Direct: <strong className="text-white">+1 (919) 294-4800</strong></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-primary shrink-0" />
                                            <span>Advertising Desk: <strong className="text-white">info@radionyra.com</strong></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                                            <span>HQ: 4819 Emperor Blvd, Suite 400, Durham, NC 27703</span>
                                        </div>
                                    </div>
                                    <div className="pt-2 border-t border-gray-800 flex items-center justify-between text-xs">
                                        <span className="text-gray-400">See Client Case Studies:</span>
                                        <a href="/testimonials" className="font-bold text-primary hover:underline flex items-center gap-1">
                                            View Testimonials &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="bg-white p-8 md:p-10 border border-gray-200 shadow-2xl rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 -rotate-45 translate-x-24 -translate-y-24 pointer-events-none" />
                                <h3 className="text-2xl font-extrabold uppercase tracking-tight italic mb-2 relative z-10">Request Campaign Proposal</h3>
                                <p className="text-xs text-gray-500 mb-6 relative z-10">
                                    Fill out your details below to request a campaign proposal. Timing, availability, reach, and projections are confirmed by the team.
                                </p>

                                <form
                                    action="https://formspree.io/f/fa42a7d8-c45e-4e7d-868c-7861ef21d915"
                                    method="POST"
                                    onSubmit={() => {
                                        trackLeadSubmit(`Calculator Tier: ${marketTier} ($${budget}/mo) - Goal: ${campaignGoal}`);
                                        setFormSubmitted(true);
                                    }}
                                    className="space-y-5 relative z-10 text-xs"
                                >
                                    <input type="hidden" name="estimated-budget" value={`$${budget}/mo`} />
                                    <input type="hidden" name="target-market" value={tierLabel} />
                                    <input type="hidden" name="campaign-goal" value={campaignGoal} />
                                    <input type="hidden" name="target-city" value={targetCity} />
                                    <input type="hidden" name="selected-channels" value={selectedChannels.join(", ")} />

                                    {/* Campaign Goal Selection */}
                                    <div>
                                        <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary block mb-2">
                                            1. Primary Campaign Goal:
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                "Walk-in Foot Traffic",
                                                "Event Ticket Sales",
                                                "Direct Phone Calls & Leads",
                                                "Brand Awareness & Authority"
                                            ].map((goal) => (
                                                <button
                                                    key={goal}
                                                    type="button"
                                                    onClick={() => setCampaignGoal(goal)}
                                                    className={`p-2.5 rounded-xl border text-left font-bold transition-all text-[11px] ${
                                                        campaignGoal === goal
                                                            ? "bg-primary text-white border-primary shadow-sm"
                                                            : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                                    }`}
                                                >
                                                    {goal}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Target City Selector */}
                                    <div>
                                        <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary block mb-2">
                                            2. Target Triangle City / Coverage:
                                        </label>
                                        <select
                                            name="city-preference"
                                            value={targetCity}
                                            onChange={(e) => setTargetCity(e.target.value)}
                                            className="w-full h-11 px-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-bold focus:border-primary text-xs"
                                        >
                                            <option value="Triangle-Wide (All 8 Cities)">Triangle-Wide (All 8 Cities - Raleigh, Durham, Cary, Morrisville, Apex, Chapel Hill, Wake Forest, RTP)</option>
                                            <option value="Morrisville & Cary Focus">Morrisville &amp; Cary Focus (Core South Asian Hub)</option>
                                            <option value="Raleigh & Durham Hub">Raleigh &amp; Durham Hub</option>
                                            <option value="Apex & Chapel Hill">Apex &amp; Chapel Hill</option>
                                            <option value="National Multi-Market Network">National Multi-Market Network (7 Markets)</option>
                                        </select>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">Your Name *</label>
                                            <Input name="full-name" className="bg-gray-50 border-gray-200 rounded-xl h-11 text-gray-900 text-xs focus:border-primary placeholder:text-gray-400" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">Business / Organization *</label>
                                            <Input name="company-name" className="bg-gray-50 border-gray-200 rounded-xl h-11 text-gray-900 text-xs focus:border-primary placeholder:text-gray-400" placeholder="Your Business Name" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">Email Address *</label>
                                            <Input name="email" className="bg-gray-50 border-gray-200 rounded-xl h-11 text-gray-900 text-xs focus:border-primary placeholder:text-gray-400" type="email" placeholder="you@business.com" required />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">Phone Number *</label>
                                            <Input name="phone" className="bg-gray-50 border-gray-200 rounded-xl h-11 text-gray-900 text-xs focus:border-primary placeholder:text-gray-400" type="tel" placeholder="(919) 000-0000" required />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">Target Launch Date / Special Requirements</label>
                                        <Textarea name="message" className="bg-gray-50 border-gray-200 rounded-xl min-h-[90px] text-gray-900 text-xs focus:border-primary placeholder:text-gray-400" placeholder={`E.g. Launching campaign by next month for festival specials. Interested in $${budget}/mo budget...`} />
                                    </div>

                                    {/* Verification */}
                                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <Zap className="w-5 h-5 text-primary shrink-0" />
                                            <div>
                                                <p className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Verification</p>
                                                <p className="text-xs font-bold text-gray-500">Solve: 5 + 3 =</p>
                                            </div>
                                        </div>
                                        <Input name="captcha" className="w-20 bg-white border-gray-300 rounded-xl h-10 text-center text-base font-extrabold text-primary focus:ring-2 focus:ring-primary/20" placeholder="?" required />
                                    </div>

                                    <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-extrabold uppercase tracking-widest text-xs rounded-xl transition-all shadow-lg">
                                        Submit Proposal Request &rarr;
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
