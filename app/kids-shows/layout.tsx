import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kids Corner & Storytime | Radio Nyra",
  description: "Watch Radio Nyra kids shows, moral stories, rhymes, and family-friendly videos from the official Radio Nyra YouTube channel.",
  alternates: {
    canonical: "/kids-shows",
  },
  openGraph: {
    type: "website",
    url: "https://www.radionyra.com/kids-shows",
    siteName: "Radio Nyra",
    title: "Kids Corner & Storytime | Radio Nyra",
    description: "Browse Radio Nyra kids shows, stories, rhymes, and family-friendly videos.",
    images: ["/og-image.png"],
  },
}

export default function KidsShowsLayout({ children }: { children: React.ReactNode }) {
  return children
}
