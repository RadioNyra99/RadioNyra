import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Press | Radio Nyra",
  description: "Read Radio Nyra press releases, media coverage, company announcements, and South Asian community media updates.",
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title: "Press | Radio Nyra",
    description: "Read Radio Nyra press releases, media coverage, company announcements, and community media updates.",
    url: "https://www.radionyra.com/press",
  },
}

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
