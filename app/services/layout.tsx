import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advertising Services — Radio, Digital & Events",
  description: "Radio Nyra advertising services: on-air spots, digital audio, social media, event sponsorships and production.",
  alternates: { canonical: "/services" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
