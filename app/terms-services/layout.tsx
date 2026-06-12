import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Radio Nyra Terms of Service. Review the terms and conditions governing your use of our radio broadcasts, website, mobile applications, and digital services.',
  alternates: { canonical: '/terms-services' },
  openGraph: {
    title: 'Terms of Service | Radio Nyra',
    description: 'Radio Nyra Terms of Service. Review the terms and conditions governing your use of our services.',
  },
}

export default function TermsServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
