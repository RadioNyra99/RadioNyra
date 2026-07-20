import type { Metadata } from "next"
import { HomeView } from "@/components/home-view"

export const metadata: Metadata = {
  title: "Radio Nyra | Indian Radio & Media Network",
  description:
    "Listen to live Indian radio, find community news, and grow your brand with our media network.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.radionyra.com",
    siteName: "Radio Nyra",
    title: "Radio Nyra | Indian Radio & Media Network",
    description: "Listen to live Indian radio, find community news, and grow your brand with our media network.",
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
    title: "Radio Nyra | Indian Radio & Media Network",
    description: "Listen to live Indian radio, find community news, and grow your brand with our media network.",
    images: ["/og-image.png"],
  },
}

export default function HomePage() {
  return <HomeView />
}
