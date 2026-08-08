import type { Metadata } from "next"
import { HomeView } from "@/components/home-view"

export const metadata: Metadata = {
  title: "Radio Nyra | The Indian Subcontinent Community Media Network",
  description:
    "Listen live to Radio Nyra, America's leading Indian Subcontinent Community Media Network for music, culture, news, podcasts, events, and advertiser partnerships.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.radionyra.com",
    siteName: "Radio Nyra",
    title: "Radio Nyra | The Indian Subcontinent Community Media Network",
    description: "The Indian Subcontinent Community Media Network. Listen live across America and connect with diaspora communities through Radio Nyra.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radio Nyra - The Indian Subcontinent Community Media Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Nyra | The Indian Subcontinent Community Media Network",
    description: "The Indian Subcontinent Community Media Network connecting communities across America.",
    images: ["/og-image.png"],
  },
}

export default function HomePage() {
  return <HomeView />
}
