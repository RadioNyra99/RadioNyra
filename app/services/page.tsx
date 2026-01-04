import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function ServicesPage() {
    const services = [
        {
            title: "Audio Advertising",
            description: "Reach thousands of listeners with high-quality audio ads tailored to your brand.",
        },
        {
            title: "Event Promotion",
            description: "Get the word out about your upcoming events to the vibrant Indian community.",
        },
        {
            title: "Digital Marketing",
            description: "Amplify your presence online with our integrated digital marketing solutions.",
        },
        {
            title: "Podcast Production",
            description: "Professional recording and editing services for your own podcast series.",
        },
        {
            title: "Live Broadcosts",
            description: "Host live shows remotely or from our state-of-the-art studios.",
        },
        {
            title: "Community Outreach",
            description: "Partner with us for community-driven initiatives and social causes.",
        },
    ]

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 border-l-8 border-primary pl-6">Our Services</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="bg-card border border-border p-8 hover:shadow-xl transition-shadow group">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Check className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
