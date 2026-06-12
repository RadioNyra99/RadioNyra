import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Radio Nyra, the premier Indian Subcontinent Community Media Network in the USA. Founded in 2014, serving 8 major U.S. markets with 24/7 Hindi and Telugu programming.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Radio Nyra | Indian Subcontinent Community Media Network',
    description: 'Learn about Radio Nyra, the premier Indian Subcontinent Community Media Network in the USA.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
