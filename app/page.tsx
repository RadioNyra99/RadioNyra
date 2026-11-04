import type { Metadata } from "next"
import { HomeView } from "@/components/home-view"

export const metadata: Metadata = {
  title: "Radio Nyra | Hindi & Telugu Radio, News & Podcasts",
  description:
    "Listen live to Radio Nyra Hindi and Telugu radio, and explore music, community news, shows, podcasts, interviews, and events.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.radionyra.com/",
    siteName: "Radio Nyra",
    title: "Radio Nyra | Hindi & Telugu Radio, News & Podcasts",
    description:
      "Listen live to Radio Nyra Hindi and Telugu radio, and explore music, community news, shows, podcasts, interviews, and events.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radio Nyra — Hindi and Telugu Radio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Nyra | Hindi & Telugu Radio",
    description:
      "Listen live to Radio Nyra Hindi and Telugu radio, with music, news, podcasts, and community stories.",
    images: ["/og-image.png"],
  },
}

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.radionyra.com/#webpage",
    url: "https://www.radionyra.com/",
    name: "Radio Nyra | Hindi & Telugu Radio, News & Podcasts",
    isPartOf: { "@id": "https://www.radionyra.com/#website" },
    about: { "@id": "https://www.radionyra.com/#organization" },
    mainEntity: { "@id": "https://www.radionyra.com/#station" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <HomeView />
    </>
  )
}
