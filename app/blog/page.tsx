import { Metadata } from 'next'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'
import BlogIndexClient from './BlogIndexClient'

const SLUG = '/blog'

export function generateMetadata(): Metadata {
  const entry = getEntry(SLUG)
  return {
    title: entry?.title,
    description: entry?.description,
    alternates: { canonical: 'https://austincrate.com/blog' },
  }
}

export default function BlogPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <BlogIndexClient />
    </SEOWrapper>
  )
}
