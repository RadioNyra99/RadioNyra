import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Creative Studio — Production & Brand Content",
  description: "Radio Nyra Creative Studio: audio production, brand campaigns and content for advertisers and community partners.",
  alternates: { canonical: "/creative-studio" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
