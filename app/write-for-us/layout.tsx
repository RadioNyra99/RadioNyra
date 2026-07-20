import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Write For Us - Media & Guest Blog Contribution Guidelines | Radio Nyra",
  description: "Contribute high-quality guest posts or share immigrant stories on Radio Nyra's media platform. Read our editorial guidelines and link-exchange options.",
  alternates: {
    canonical: "/write-for-us",
  },
  openGraph: {
    title: "Write For Us - Media & Guest Blog Contribution Guidelines | Radio Nyra",
    description: "Contribute high-quality guest posts or share immigrant stories on Radio Nyra's media platform. Read our editorial guidelines and link-exchange options.",
    url: "https://www.radionyra.com/write-for-us",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
