import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Telugu Radio USA | Listen Live to Radio Nyra Telugu",
    description: "Listen live to Radio Nyra Telugu on 99.9 FM HD3 in Raleigh-Durham and online. Explore Telugu music, news, and community programming.",
    keywords: ["Telugu Radio USA", "Listen Telugu Radio Live", "Radio Nyra Telugu", "Telugu Community Raleigh"],
    alternates: {
        canonical: "/telugu-radio-usa",
    },
}

export default function TeluguLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
