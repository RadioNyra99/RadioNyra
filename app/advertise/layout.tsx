import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Advertise with Radio Nyra",
    description: "Reach Indian and South Asian listeners in Raleigh-Durham and Radio Nyra markets through FM, streaming, social, and event advertising.",
    keywords: ["Radio Advertising", "Indian Subcontinent Marketing", "Raleigh Business Ads", "Radio Nyra Advertising", "Indian Community Marketing"],
    alternates: {
        canonical: "/advertise",
    },
    openGraph: {
        title: "Advertise with Radio Nyra",
        description: "Reach Indian and South Asian listeners through Radio Nyra FM, streaming, social, and event advertising.",
        url: "https://www.radionyra.com/advertise",
    },
}

export default function AdvertiseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
