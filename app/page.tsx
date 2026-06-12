import type { Metadata } from "next"
import { HomeView } from "@/components/home-view"

export const metadata: Metadata = {
  title: "Radio Nyra | Indian Subcontinent Radio & Media Network | Raleigh-Durham NC",
  description:
    "Radio Nyra is a trusted Indian Subcontinent Community Media Network delivering reach across radio, digital, social, events, and AI-powered marketing.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.radionyra.com",
    siteName: "Radio Nyra",
    title: "Radio Nyra | Indian Subcontinent Radio & Media Network | Raleigh-Durham NC",
    description: "Radio Nyra is a trusted Indian Subcontinent Community Media Network delivering reach across radio, digital, social, events, and AI-powered marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radio Nyra - Indian Subcontinent Community Media Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Nyra | Indian Subcontinent Radio & Media Network | Raleigh-Durham NC",
    description: "Radio Nyra is a trusted Indian Subcontinent Community Media Network delivering reach across radio, digital, social, events, and AI-powered marketing.",
    images: ["/og-image.png"],
  },
}

export default function HomePage() {
  return <HomeView />
}
