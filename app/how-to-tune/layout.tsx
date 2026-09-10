import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Tune to Radio Nyra | In-Car HD Radio, Mobile & Alexa Guide",
  description: "Step-by-step guide to tuning Radio Nyra on car HD radios (Honda, Toyota, BMW, Tesla, Mercedes), mobile apps, online web players, and Alexa smart speakers.",
  alternates: {
    canonical: "/how-to-tune",
  },
  openGraph: {
    title: "How to Tune to Radio Nyra | In-Car HD Radio, Mobile & Alexa Guide",
    description: "Step-by-step guide to tuning Radio Nyra on car HD radios (Honda, Toyota, BMW, Tesla, Mercedes), mobile apps, online web players, and Alexa smart speakers.",
    url: "https://www.radionyra.com/how-to-tune",
    siteName: "Radio Nyra",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How to Tune Radio Nyra" }],
  },
}

export default function HowToTuneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
