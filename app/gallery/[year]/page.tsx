
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { galleryImages2016, galleryImages2018, galleryImages2019, galleryImages2026 } from "@/lib/gallery-data"
import GalleryClient from "./gallery-client"

const galleryMetadata: Record<string, { title: string; images: string[] }> = {
    "2016": {
        title: "New Year 2016 – Bollywood Bash",
        images: galleryImages2016
    },
    "2018": {
        title: "New Year 2018 – Bollywood Bash",
        images: galleryImages2018
    },
    "2019": {
        title: "New Year 2019 – Celebrations",
        images: galleryImages2019
    },
    "2026": {
        title: "2026 Bollywood and Tollywood Bash",
        images: galleryImages2026
    }
}

export async function generateStaticParams() {
    return [
        { year: "2016" },
        { year: "2018" },
        { year: "2019" },
        { year: "2026" },
    ]
}

export default async function EventGalleryPage({ params }: { params: Promise<{ year: string }> }) {
    const { year } = await params
    const data = galleryMetadata[year]

    if (!data) {
        notFound()
    }

    return (
        <GalleryClient data={data} />
    )
}
