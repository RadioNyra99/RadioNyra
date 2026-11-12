import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'About Radio Nyra | Hindi & Telugu Community Media' },
  description: 'Learn about Radio Nyra, a Hindi and Telugu community radio and digital media network based in Raleigh–Durham, North Carolina.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Radio Nyra | Hindi & Telugu Community Media',
    description: 'Learn about Radio Nyra, 12 years on air and sharing Hindi and Telugu radio, podcasts, news, and community stories.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
