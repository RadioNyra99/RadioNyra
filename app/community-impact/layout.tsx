import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Impact — Serving the Indian Diaspora",
  description: "How Radio Nyra supports Indian Subcontinent community organisations, charities and cultural initiatives across the USA.",
  alternates: { canonical: "/community-impact" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
