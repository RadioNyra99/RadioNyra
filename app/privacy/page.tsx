import type { Metadata } from "next"
import PrivacyPolicyPage from "@/app/privacy-policy/page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Radio Nyra's privacy policy and learn how information is handled when you use our website, app, streams, and services.",
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPage() {
  return <PrivacyPolicyPage />
}
