import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest news, event guides, community stories, and cultural insights from Radio Nyra, the leading Indian Subcontinent Community Media Network in the USA.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Radio Nyra',
    description: 'Latest news, event guides, and community stories from Radio Nyra.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
