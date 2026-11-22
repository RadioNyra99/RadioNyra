import type { Metadata } from "next"
import TermsOfServicePage from "@/app/terms-services/page"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review the terms that apply to Radio Nyra's website, mobile app, live radio broadcasts, streams, and other services.",
  alternates: { canonical: "/terms-services" },
}

export default function TermsPage() {
  return <TermsOfServicePage />
}
