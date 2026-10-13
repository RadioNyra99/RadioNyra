import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Directory — Indian Businesses & Services",
  description: "Browse the Radio Nyra directory of Indian and South Asian businesses and services across Raleigh-Durham and North Carolina.",
  alternates: { canonical: "/directory" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
