import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ecosystem — The Radio Nyra Network",
  description: "How Radio Nyra connects radio, podcasts, video, events and community partnerships across the Indian diaspora.",
  alternates: { canonical: "/ecosystem" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
