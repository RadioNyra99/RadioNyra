import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Community News | Radio Nyra",
  description: "Read Bollywood, Tollywood, Raleigh-Durham community, immigration, and South Asian culture updates from Radio Nyra.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Indian Community News | Radio Nyra",
    description: "Read Bollywood, Tollywood, Raleigh-Durham community, immigration, and South Asian culture updates from Radio Nyra.",
    url: "https://www.radionyra.com/news",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
