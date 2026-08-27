import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian FM Radio Stations | Radio Nyra",
  description: "Tune into Radio Nyra FM and HD stations across Raleigh, Atlanta, Philadelphia, Baltimore, and more. Listen live online.",
  alternates: {
    canonical: "/fm-stations",
  },
  openGraph: {
    title: "Indian FM Radio Stations | Radio Nyra",
    description: "Tune into Radio Nyra FM and HD stations across Raleigh, Atlanta, Philadelphia, Baltimore, and more. Listen live online.",
    url: "https://www.radionyra.com/fm-stations",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
