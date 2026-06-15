import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Advertise with us",
    description: "Grow your business with Radio Nyra, the #1 Indian Subcontinent Radio Network in the USA. Reach over 100,000 loyal listeners in the Raleigh-Durham area through FM, mobile apps, and digital platforms.",
    keywords: ["Radio Advertising", "Indian Subcontinent Marketing", "Raleigh Business Ads", "Radio Nyra Advertising", "Indian Community Marketing"],
}

export default function AdvertiseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
