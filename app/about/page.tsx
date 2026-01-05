import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mic2, Radio, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="bg-foreground text-background py-16 border-b border-border/20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">About Us</h1>
                        <p className="text-xl max-w-2xl mx-auto text-gray-400 font-light">
                            The Voice of India in USA.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold uppercase tracking-tighter mb-6 border-l-4 border-primary pl-4">Our Mission</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    Radio Nyra is more than just a radio station; it's a bridge between home and heart. We are dedicated to bringing the vibrant sounds, culture, and stories of the Indian subcontinent to the diaspora in the USA.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    From Bollywood hits to Tollywood trends, from community news to insightful talk shows, we provide a platform for every voice and a soundtrack for every moment.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-muted p-8 text-center flex flex-col items-center justify-center">
                                    <Users className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-2xl font-bold uppercase">100K+</h3>
                                    <p className="text-xs font-bold uppercase text-muted-foreground">Listeners</p>
                                </div>
                                <div className="bg-primary p-8 text-center flex flex-col items-center justify-center text-white">
                                    <Radio className="w-10 h-10 mb-4" />
                                    <h3 className="text-2xl font-bold uppercase">24/7</h3>
                                    <p className="text-xs font-bold uppercase opacity-80">Broadcasting</p>
                                </div>
                                <div className="bg-muted p-8 text-center flex flex-col items-center justify-center">
                                    <Mic2 className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-2xl font-bold uppercase">15+</h3>
                                    <p className="text-xs font-bold uppercase text-muted-foreground">Hosts</p>
                                </div>
                                <div className="bg-muted p-8 text-center flex flex-col items-center justify-center">
                                    <Heart className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-2xl font-bold uppercase">100%</h3>
                                    <p className="text-xs font-bold uppercase text-muted-foreground">Community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-muted/20 border-t border-border/50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8">Join Our Journey</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <Button size="lg" className="rounded-none font-bold uppercase tracking-widest px-10" asChild>
                                <Link href="/contact">Get In Touch</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-none font-bold uppercase tracking-widest px-10" asChild>
                                <Link href="/schedule">View Schedule</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
