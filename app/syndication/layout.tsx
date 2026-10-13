import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Syndication Network — Broadcast & Digital Partners",
  description: "Syndicate Radio Nyra programmes and community content across broadcast and digital partners.",
  alternates: { canonical: "/syndication" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
