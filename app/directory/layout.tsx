import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Business Directory Raleigh Durham NC | Radio Nyra",
  description: "Find Indian businesses, restaurants, groceries, temples, IT services, and more in the Raleigh-Durham Triangle area. Verified listings with exclusive deals on Radio Nyra.",
  alternates: {
    canonical: "/directory",
  },
  openGraph: {
    title: "Indian Business Directory Raleigh Durham NC | Radio Nyra",
    description: "Find Indian businesses, restaurants, groceries, temples, IT services, and more in the Raleigh-Durham Triangle area. Verified listings with exclusive deals on Radio Nyra.",
    url: "https://www.radionyra.com/directory",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
