import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Radio Nyra Shows & Schedule",
  description: "Explore Radio Nyra Hindi and Telugu programs, meet the hosts, and browse the weekly schedule. All times EST.",
  alternates: { canonical: "/shows" },
  openGraph: {
    title: "Radio Nyra Shows & Schedule",
    description: "Explore Radio Nyra Hindi and Telugu programs and weekly schedule.",
    url: "https://www.radionyra.com/shows",
  },
}

export default function ShowsLayout({ children }: { children: React.ReactNode }) {
  return children
}
