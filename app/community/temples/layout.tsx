import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hindu Temples in Cary, Raleigh & Durham NC | Community Directory",
  description: "Explore Hindu temples, spiritual centers, and cultural worship places across Raleigh, Cary, and Morrisville, NC with Radio Nyra.",
  alternates: {
    canonical: "/community/temples",
  },
  openGraph: {
    title: "Hindu Temples in Cary, Raleigh & Durham NC | Community Directory",
    description: "Explore Hindu temples, spiritual centers, and cultural worship places across Raleigh, Cary, and Morrisville, NC with Radio Nyra.",
    url: "https://www.radionyra.com/community/temples",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function TemplesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
