import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Radio Nyra",
  description: "View Radio Nyra event photos, community memories, cultural celebrations, concerts, and Triangle-area highlights.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Radio Nyra",
    description: "View Radio Nyra event photos, community memories, cultural celebrations, and concert highlights.",
    url: "https://www.radionyra.com/gallery",
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
