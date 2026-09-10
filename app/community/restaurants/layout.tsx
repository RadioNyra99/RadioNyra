import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Restaurants in Raleigh, Cary & Morrisville NC | Food Guide",
  description: "Curated guide to premier Indian restaurants, sweets shops, and South Asian dining in Cary, Morrisville, and Raleigh, NC from Radio Nyra.",
  alternates: {
    canonical: "/community/restaurants",
  },
  openGraph: {
    title: "Indian Restaurants in Raleigh, Cary & Morrisville NC | Food Guide",
    description: "Curated guide to premier Indian restaurants, sweets shops, and South Asian dining in Cary, Morrisville, and Raleigh, NC from Radio Nyra.",
    url: "https://www.radionyra.com/community/restaurants",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function RestaurantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
