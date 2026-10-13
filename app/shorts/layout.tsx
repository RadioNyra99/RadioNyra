import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Radio Nyra Shorts",
  description: "Official 60-second video highlights and clips from Radio Nyra on YouTube.",
  alternates: { canonical: "/shorts" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
