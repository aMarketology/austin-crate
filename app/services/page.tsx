import { Metadata } from 'next'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'
import ServicesClient from './ServicesClient'

const SLUG = '/services'

export function generateMetadata(): Metadata {
  const entry = getEntry(SLUG)
  return {
    title: entry?.title,
    description: entry?.description,
    alternates: { canonical: 'https://austincrate.com/services' },
  }
}

export default function ServicesPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <ServicesClient />
    </SEOWrapper>
  )
}
