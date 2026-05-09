import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, FileText, Image as ImageIcon, Users, Mail, ArrowRight } from "lucide-react"

export default function MediaKitPage() {
    const sections = [
        {
            title: "Logo Kit",
            description: "Official Radio Nyra logos in high-resolution formats (PNG, SVG, EPS).",
            icon: ImageIcon,
            items: ["Primary Logo (Red)", "Secondary Logo (White)", "Icon Only", "Monochrome Version"]
        },
        {
            title: "Brand Guidelines",
            description: "Our core brand colors, typography, and usage rules to ensure consistency.",
            icon: FileText,
            items: ["Brand Voice Guide", "Color Palette", "Typography Rules", "Dos and Don'ts"]
        },
        {
            title: "Radio Shows Overview",
            description: "A comprehensive list of our top-rated shows and host profiles.",
            icon: ArrowRight,
            items: ["Show One Sheets", "Host Bios", "Promotional Photos", "Audio Snippets"]
        },
        {
            title: "Audience & Reach",
            description: "Key demographics and geographical reach of Radio Nyra broadcasts.",
            icon: Users,
            items: ["Listener Demographics", "Geographic Reach", "Digital Growth Stats", "Media Impact Report"]
        },
        {
            title: "Contact for Collaborations",
            description: "Get in touch for media inquiries, event partnerships, or official statements.",
            icon: Mail,
            items: ["Media Inquiries", "Partnership Requests", "Event Coordination", "Press Releases"]
        }
    ]

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main>
                {/* HERO SECTION */}
                <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase italic mb-6">
                            Radio Nyra – <span className="text-primary">Media Kit</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Download our official branding, logos, and promotional assets.
                        </p>
                    </div>
                </section>

                {/* MEDIA KIT CONTENT */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-16 lg:gap-24">
                            {sections.map((section, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="md:w-1/3">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-primary/5 rounded-2xl group-hover:bg-primary transition-colors duration-300">
                                                    <section.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                                                </div>
                                                <h2 className="text-3xl font-bold uppercase tracking-tighter">{section.title}</h2>
                                            </div>
                                            <p className="text-gray-500 font-medium leading-relaxed">
                                                {section.description}
                                            </p>
                                        </div>

                                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                            {section.items.map((item, itemIdx) => (
                                                <div key={itemIdx} className="p-6 border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300 group/item flex items-center justify-between">
                                                    <span className="font-bold text-sm uppercase tracking-wider text-gray-700">{item}</span>
                                                    <Button variant="ghost" size="icon" className="text-primary hover:bg-primary hover:text-white transition-all">
                                                        <Download className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                            {/* Upload Placeholder */}
                                            <div className="p-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 opacity-50 bg-gray-100/30">
                                                <ImageIcon className="w-5 h-5 text-gray-400" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">File Placeholder</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CALL TO ACTION */}
                <section className="py-16 bg-black text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl md:text-5xl font-black uppercase italic mb-8">Need anything else?</h3>
                        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                            If you require specific assets or have custom media requests, please reach out to our team.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest h-14 px-10 rounded-none transition-transform hover:scale-105" asChild>
                            <a href="mailto:media@radionyra.com">Email Media Team</a>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
