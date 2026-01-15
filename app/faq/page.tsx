"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
    {
        question: "How can I listen to Radio Nyra?",
        answer: "You can listen to Radio Nyra on 99.9FM HD4 (Hindi) and HD3 (Telugu) in the Raleigh-Durham area. You can also listen live through our website 'Listen Live' button, or download our mobile apps on the App Store and Google Play Store."
    },
    {
        question: "Where is Radio Nyra located?",
        answer: "Our main studios are located in Durham, North Carolina, USA. We serve the entire Triangle area including Raleigh, Durham, Chapel Hill, and surrounding communities."
    },
    {
        question: "How can I advertise my business on Radio Nyra?",
        answer: "We offer various advertising packages including on-air spots, digital promotions, and event sponsorships. Please visit our 'Advertise' page and fill out the inquiry form, or call us at +1 (919) 999-8595."
    },
    {
        question: "Can I request a song or a shoutout?",
        answer: "Yes! Many of our live shows take requests. You can contact us via our social media pages or call the studio line during live broadcasts."
    },
    {
        question: "Is there a Telugu channel as well?",
        answer: "Yes, in July 2025 we launched our 24/7 Telugu channel on 99.9FM HD3. It features dedicated Telugu music, news, and entertainment."
    },
    {
        question: "How can I stay updated with events?",
        answer: "Check our 'Events' page for upcoming community celebrations, concerts, and radio station events. You can also follow us on Instagram and Facebook."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main className="py-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-primary">
                            Frequently Asked <span className="text-foreground">Questions</span>
                        </h1>
                        <p className="text-lg text-muted-foreground uppercase tracking-widest font-bold">
                            Everything you need to know about Radio Nyra
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-border bg-card overflow-hidden transition-all">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-lg font-black uppercase tracking-tight italic">
                                        {faq.question}
                                    </span>
                                    {openIndex === i ? (
                                        <Minus className="w-5 h-5 text-primary shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-primary shrink-0" />
                                    )}
                                </button>
                                {openIndex === i && (
                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed italic animate-fade-in-up">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-10 bg-primary/5 border border-primary/10 text-center">
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 italic">Still have questions?</h2>
                        <p className="mb-8 text-muted-foreground">We are here to help you. Reach out to us through our contact page.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-primary text-white font-black uppercase tracking-widest px-10 py-4 hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            Contact Us Now
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
