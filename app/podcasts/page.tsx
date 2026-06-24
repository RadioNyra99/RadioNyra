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
import Script from "next/script"

export default function PodcastsPage() {
    const podcasts = [
        {
            title: "RadioNyra | Aaj Ki Shaam, Jyoti Ke Naam with Jyoti | Uthar Dakshin Partner: Debashree",
            host: "Jyoti",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/zHoVR1rDCuo",
            thumbnail: "https://img.youtube.com/vi/zHoVR1rDCuo/maxresdefault.jpg"
        },
        {
            title: "Leaders & Legends RadioNyra podcast I Guest Andrews IV Executive Chairman, Dominion Realty partners.",
            host: "Steve Rao",
            show: "Leaders & Legends",
            url: "https://youtu.be/vSV3n6SHUeQ",
            thumbnail: "https://img.youtube.com/vi/vSV3n6SHUeQ/maxresdefault.jpg"
        },
        {
            title: "EB5 Visa Explained Simple | RadioNyra Podcast Ep.2 Brown Immigration | Hello Vaishnavi – Radio Nyra",
            host: "Vaishnavi",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/d_i_OsE3xRQ",
            thumbnail: "https://img.youtube.com/vi/d_i_OsE3xRQ/maxresdefault.jpg"
        },
        {
            title: "RadioNyra Podcast: Anand Ramakrishna of Sai Mandir Cary on Chai pe Charcha with Van",
            host: "Van Bhandari",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/YNnL-3oWM_0",
            thumbnail: "https://img.youtube.com/vi/YNnL-3oWM_0/maxresdefault.jpg"
        },
        {
            title: "RadioNyra Podcast Features Radhesh Reddy Gurrala- Author on Chai pe Charcha with Van I Host Van",
            host: "Van Bhandari",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/oP1cJPj9sW8",
            thumbnail: "https://img.youtube.com/vi/oP1cJPj9sW8/maxresdefault.jpg"
        },
        {
            title: "A LIFE OF SERVICE, SURGERY & PATRIOTISM | Dr. Sankar Adusumilli I Radio Nyra Hello Vaishnavi Podcast",
            host: "Vaishnavi",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/HVbQ7nKkEFo",
            thumbnail: "https://img.youtube.com/vi/HVbQ7nKkEFo/maxresdefault.jpg"
        },
        {
            title: "RadioNyra Presents: Leaders & Legends Featuring David Crabtree, CEO of PBS Carolinas  host Steve Rao",
            host: "Steve Rao",
            show: "Leaders & Legends",
            url: "https://youtu.be/Kza3P0eABwY",
            thumbnail: "https://img.youtube.com/vi/Kza3P0eABwY/maxresdefault.jpg"
        },
        {
            title: "RadioNyra presents Leaders & Legends with Krista Covey, CEO of First Flight",
            host: "Steve Rao",
            show: "Leaders & Legends",
            url: "https://youtu.be/OPZ3qkGMOgI",
            thumbnail: "https://img.youtube.com/vi/OPZ3qkGMOgI/maxresdefault.jpg"
        },
        {
            title: "Bhagavad-Gita for Kids & Life Lessons | Amit Kulkarni | Chai Pe Charcha with Van | Radio Nyra",
            host: "Van Bhandari",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/KekIDPrM_Zc",
            thumbnail: "https://img.youtube.com/vi/KekIDPrM_Zc/maxresdefault.jpg"
        },
        {
            title: "Leaders & Legends Podcast | Featuring Hon. Randolph Voller",
            host: "Steve Rao",
            show: "Leaders & Legends",
            url: "https://youtu.be/MNb9i9dcnR0",
            thumbnail: "https://img.youtube.com/vi/MNb9i9dcnR0/maxresdefault.jpg"
        },
        {
            title: "EB-5 Visa vs Myth | Chai Pe Charcha with Van | Radio Nyra",
            host: "Van Bhandari",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/5_KmiQZityU",
            thumbnail: "https://img.youtube.com/vi/5_KmiQZityU/maxresdefault.jpg"
        },
        {
            title: "Monday Motivation | Dr. Madhu Sharma",
            host: "Dr. Madhu Sharma",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/CyTV514isww",
            thumbnail: "https://img.youtube.com/vi/CyTV514isww/maxresdefault.jpg"
        },
        {
            title: "Hello Vaishnavi Show | Arvind Mahajan, AKM Investments",
            host: "Vaishnavi",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/TIprZF1bMuM",
            thumbnail: "https://img.youtube.com/vi/TIprZF1bMuM/maxresdefault.jpg"
        },
        {
            title: "H1B Visa Explained Simply | RadioNyra Podcast Ep.1 Brown Immigration",
            host: "Vaishnavi",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/UO9w7zmkHd4",
            thumbnail: "https://img.youtube.com/vi/UO9w7zmkHd4/maxresdefault.jpg"
        },
        {
            title: "Tax Talk USA | Chai Pe Charcha with Van ft. CPA Anuradha Aggarwal | Radio Nyra Podcast",
            host: "Van Bhandari",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/P5jQhU9aXgE",
            thumbnail: "https://img.youtube.com/vi/P5jQhU9aXgE/maxresdefault.jpg"
        },
        {
            title: "Aura Scanning & Energy Healing Explained | Surya Kiran with Vaishnavi | Radio Nyra Podcast series",
            host: "Vaishnavi",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/FEg1KpYOD-Q",
            thumbnail: "https://img.youtube.com/vi/FEg1KpYOD-Q/maxresdefault.jpg"
        },
        {
            title: "Gaming Data, Growth & Monetization | Stanislav Minasov, CPO at AppMagic",
            host: "Radio Nyra",
            show: "The Games Insider",
            url: "https://youtu.be/0IGi_x381aI",
            thumbnail: "https://img.youtube.com/vi/0IGi_x381aI/maxresdefault.jpg"
        },
        {
            title: "Future of Gaming | Exclusive Conversation with Dr. Srikar Reddy, Consul General of India",
            host: "Vaishnavi Palleda",
            show: "The Games Insider",
            url: "https://youtu.be/e0mFf8AUrXA",
            thumbnail: "https://img.youtube.com/vi/e0mFf8AUrXA/maxresdefault.jpg"
        },
        {
            title: "IGF 2026 Finalist Interview | Titanium Court (AP Thomson)",
            host: "Radio Nyra",
            show: "The Games Insider",
            url: "https://youtu.be/5RDaEEQudKA",
            thumbnail: "https://img.youtube.com/vi/5RDaEEQudKA/maxresdefault.jpg"
        },
        {
            title: "IGF 2026 Excellence in Narrative Nominee | Promise Mascot Agency (Oli Smith)",
            host: "Radio Nyra",
            show: "The Games Insider",
            url: "https://youtu.be/i-vy2MDta1Q",
            thumbnail: "https://img.youtube.com/vi/i-vy2MDta1Q/maxresdefault.jpg"
        },
        {
            title: "IGF 2026 Nominee Interview | Wednesdays (Pierre Corbinais)",
            host: "Radio Nyra",
            show: "The Games Insider",
            url: "https://youtu.be/2qTyliDT3Mg",
            thumbnail: "https://img.youtube.com/vi/2qTyliDT3Mg/maxresdefault.jpg"
        },
        {
            title: "IGF 2026 Finalist Interview | Z13: The Zodiac Trials (Edi Torres, Chalit)",
            host: "Radio Nyra",
            show: "The Games Insider",
            url: "https://youtu.be/jgbYHOurgQ0",
            thumbnail: "https://img.youtube.com/vi/jgbYHOurgQ0/maxresdefault.jpg"
        },
        {
            title: "IGF 2026 Nuovo Award Finalist Interview | Plum Road Tea Dream (Samuel Baidoo)",
            host: "Radio Nyra",
            show: "The Games Insider",
            url: "https://youtu.be/Ar3CeZTMrYk",
            thumbnail: "https://img.youtube.com/vi/Ar3CeZTMrYk/maxresdefault.jpg"
        },
        {
            title: "College Admissions Strategy by Empowerly | Episode 3",
            host: "Raj Persaud",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/GuEiuNv9hDc",
            thumbnail: "https://img.youtube.com/vi/GuEiuNv9hDc/maxresdefault.jpg"
        },
        {
            title: "Interview with Madhavi Lata - Mana Muchatlu",
            host: "Kanthi",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/6xJRcPWxCJE",
            thumbnail: "https://img.youtube.com/vi/6xJRcPWxCJE/maxresdefault.jpg"
        },
        {
            title: "Confused about U.S.college admissions? We’ve got you covered!",
            host: "Raj Parsaud",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/Jj3WeE-4Z4A",
            thumbnail: "https://img.youtube.com/vi/Jj3WeE-4Z4A/maxresdefault.jpg"
        },
        {
            title: "College Admissions Strategy by Empowerly | Episode 2",
            host: "Raj Persaud",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/CXTOkdIA7Bk",
            thumbnail: "https://img.youtube.com/vi/CXTOkdIA7Bk/maxresdefault.jpg"
        },
        {
            title: "Leaders & Legends | Featuring Seema Kak, Kiran Inc",
            host: "Steve Rao",
            show: "Leaders & Legends",
            url: "https://youtu.be/uwu0hho9fEg",
            thumbnail: "https://img.youtube.com/vi/uwu0hho9fEg/maxresdefault.jpg"
        },
        {
            title: "Aventon Cary at Radio Nyra Studio Podcast",
            host: "Raj Parsaud",
            show: "Radio Nyra Podcast",
            url: "https://youtu.be/-kYmBs64DuI",
            thumbnail: "https://img.youtube.com/vi/-kYmBs64DuI/maxresdefault.jpg"
        },
        {
            title: "Emerging Tech Explained by Industry Veteran Mark R. Hinkle",
            host: "Steve Rao",
            show: "Leaders & Legends",
            url: "https://youtu.be/9am4zK87Tz4",
            thumbnail: "https://img.youtube.com/vi/9am4zK87Tz4/maxresdefault.jpg"
        },
        {
            title: "Leaders & Legends Podcast | Sachin Joshi",
            host: "Steve Rao",
            show: "Leaders & Legends",
            url: "https://youtu.be/iJ5P669vJZ4",
            thumbnail: "https://img.youtube.com/vi/iJ5P669vJZ4/maxresdefault.jpg"
        },
        {
            title: "Leaders & Legends | Interview with Himanshu H. Shah",
            host: "Steve Rao",
            show: "Leaders & Legends",
            url: "https://youtu.be/kQulwTLdXr0",
            thumbnail: "https://img.youtube.com/vi/kQulwTLdXr0/maxresdefault.jpg"
        },
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch("https://formspree.io/f/fa42a7d8-c45e-4e7d-868c-7861ef21d915", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true)
                const formElement = document.getElementById('guest-form')
                if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' })
                }
            } else {
                alert("There was an error submitting your request. Please try again or contact us directly.");
            }
        } catch (error) {
            alert("An unexpected error occurred. Please try again later.");
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

                {/* Geet Bazaar Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="mb-16">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-primary italic border-l-8 border-primary pl-6">
                                Geet Bazaar
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-bold opacity-80 decoration-primary decoration-4 underline-offset-8 underline mb-8">
                                Monthly Retro Classics & Stories
                            </p>
                        </div>

                        <Link href="https://pod.co/geet-bazaar" target="_blank" rel="noopener noreferrer" className="group block w-full bg-card rounded-2xl shadow-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="flex flex-col md:flex-row items-center p-8 md:p-16 gap-8 relative z-10 w-full">
                                {/* Large faux cover art */}
                                <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-xl overflow-hidden relative shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                                    <img 
                                        src="/geet-bazaar.jpg" 
                                        alt="Geet Bazaar Podcast Poster"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback to logo if needed
                                            e.currentTarget.src = "/nyra-logo.png"
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-24 h-24 bg-primary/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary),0.3)] group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                            <Play className="w-12 h-12 text-white fill-white ml-2" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 bg-primary/10 px-4 py-2 rounded-full inline-block">
                                        Podcast Channel
                                    </span>
                                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 italic text-foreground group-hover:text-primary transition-colors">
                                        Geet Bazaar
                                    </h3>
                                    <p className="text-xl md:text-2xl text-muted-foreground font-bold mb-10 max-w-2xl leading-relaxed">
                                        Immerse yourself in our monthly retro classics and stories. Click here to listen to the full catalog of episodes directly on Pod.co!
                                    </p>
                                    
                                    <div className="flex items-center gap-4 text-sm md:text-base font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                                        <span>Play on Pod.co</span>
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Play className="w-5 h-5 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                <Script src="https://play.pod.co/embed/frame-v1.js" strategy="lazyOnload" />

                {/* Episodes Section - MOVED TO BOTTOM */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 border-l-4 border-primary pl-4 italic">Recent Episodes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {podcasts.map((pod, i) => (
                                <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary transition-all duration-300 rounded-sm shadow-sm flex flex-col">
                                    <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                                        <img
                                            src={pod.thumbnail}
                                            alt={pod.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity z-10" />
                                        <Link
                                            href={pod.url}
                                            target="_blank"
                                            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-all z-20 shadow-2xl"
                                        >
                                            <Play className="fill-white text-white ml-1 w-6 h-6" />
                                        </Link>
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/90 bg-black/60 px-2 py-1 backdrop-blur-sm border border-white/10">WATCH NOW</span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">{pod.show}</span>
                                        </div>
                                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors italic leading-tight line-clamp-2">{pod.title}</h3>
                                        <div className="flex items-center gap-2 mb-8 mt-auto">
                                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                                                <Mic2 className="w-3 h-3 text-muted-foreground" />
                                            </div>
                                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Hosted by {pod.host}</p>
                                        </div>

                                        <Link
                                            href={pod.url}
                                            target="_blank"
                                            className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1 self-start"
                                        >
                                            Watch Full Video
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
