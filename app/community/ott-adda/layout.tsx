import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian OTT Adda | Web Series, Streaming Guides & Reviews",
  description: "Discover what to watch on Netflix, Prime Video, Hotstar, and Aha. Recommendations and reviews on South Asian streaming shows.",
  alternates: {
    canonical: "/community/ott-adda",
  },
  openGraph: {
    title: "Indian OTT Adda | Web Series, Streaming Guides & Reviews",
    description: "Discover what to watch on Netflix, Prime Video, Hotstar, and Aha. Recommendations and reviews on South Asian streaming shows.",
    url: "https://www.radionyra.com/community/ott-adda",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function OttAddaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
