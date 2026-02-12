import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Partners",
    description: "Explore the brands and organizations that trust Radio Nyra to connect with the Indian subcontinent communities in the USA.",
    keywords: ["Radio Nyra Partners", "Indian Business Network", "Community Partners USA", "Brand Collaborations"],
}

export default function PartnersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
