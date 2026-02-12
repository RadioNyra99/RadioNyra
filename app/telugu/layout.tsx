import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Telugu Radio",
    description: "Radio Nyra Telugu - The voice of the Telugu community in the USA. Listen to 24/7 Telugu music, news, and talk shows.",
    keywords: ["Telugu Radio USA", "Listen Telugu Radio Live", "Radio Nyra Telugu", "Telugu Community Raleigh"],
}

export default function TeluguLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
