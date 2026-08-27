import type { Metadata } from "next"
import { HomeView } from "@/components/home-view"

export const metadata: Metadata = {
  title: "Radio Nyra | The Indian Subcontinent Community Media Network In USA",
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
    title: "Radio Nyra | The Indian Subcontinent Community Media Network In USA",
    description: "The Indian Subcontinent Community Media Network In USA. Listen live across America and connect with diaspora communities through Radio Nyra.",
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
    title: "Radio Nyra | The Indian Subcontinent Community Media Network In USA",
    description: "The Indian Subcontinent Community Media Network In USA connecting communities across America.",
    images: ["/og-image.png"],
  },
}

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.radionyra.com/#organization",
        name: "Radio Nyra",
        url: "https://www.radionyra.com/",
        logo: "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        foundingDate: "2014",
        sameAs: [
          "https://facebook.com/radionyrausa",
          "https://instagram.com/radionyrausa",
          "https://youtube.com/c/RadioNyraUSA",
          "https://linkedin.com/company/radionyrausa",
          "https://twitter.com/NyraUsa",
        ],
      },
      {
        "@type": "RadioStation",
        "@id": "https://www.radionyra.com/#radio-station",
        name: "Radio Nyra",
        url: "https://www.radionyra.com/",
        logo: "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        foundingDate: "2014",
        broadcastServiceTier: "HD Radio and digital stream",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Raleigh-Durham, NC",
        },
        broadcastFrequency: [
          {
            "@type": "BroadcastFrequencySpecification",
            frequencyValue: "99.9",
            frequencyUnit: "MHz",
            broadcastChannelSubchannel: "HD4",
            displayName: "Radio Nyra Hindi 99.9 FM HD4",
          },
          {
            "@type": "BroadcastFrequencySpecification",
            frequencyValue: "99.9",
            frequencyUnit: "MHz",
            broadcastChannelSubchannel: "HD3",
            displayName: "Radio Nyra Telugu 99.9 FM HD3",
          },
        ],
        potentialAction: {
          "@type": "ListenAction",
          target: [
            "https://streams.radio.co/s8d06d0298/listen",
            "https://s4.radio.co/sefba541aa/listen",
          ],
        },
        sameAs: [
          "https://facebook.com/radionyrausa",
          "https://instagram.com/radionyrausa",
          "https://youtube.com/c/RadioNyraUSA",
          "https://linkedin.com/company/radionyrausa",
        ],
      },
    ],
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
