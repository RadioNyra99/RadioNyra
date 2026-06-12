import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Radio Nyra Privacy Policy. Learn how we collect, use, and protect your personal information across our radio, website, and mobile app services.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Radio Nyra',
    description: 'Radio Nyra Privacy Policy. Learn how we collect, use, and protect your personal information.',
  },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
