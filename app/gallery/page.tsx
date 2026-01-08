import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function GalleryPage() {
    const galleryItems = [
        {
            title: "New Year 2016 – Bollywood Bash",
            image: "/New Year 2016 - Bollywood Bash/464709626_8497332847002133_547247647108096346_n-1600x700.jpg",
            href: "/gallery/2016"
        },
        {
            title: "New Year 2018 – Bollywood Bash",
            image: "/New Year 2018 – Bollywood BASH/513062840_10061386530596749_1269707655621158881_n.jpg",
            href: "/gallery/2018"
        },
        {
            title: "New Year 2019 – Celebrations",
            image: "/New Year 2019 -Celebrations/48407416_1942179082517575_8863305223121141760_n.jpg",
            href: "/gallery/2019"
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 border-l-8 border-primary pl-6">Photo Gallery</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className="group block space-y-4"
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted border border-border shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground italic">
                                        Click to view gallery
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
