import { Metadata } from 'next'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'
import BuyACrateClient from './BuyACrateClient'

const SLUG = '/buy-a-crate'

export function generateMetadata(): Metadata {
  const entry = getEntry(SLUG)
  return {
    title: entry?.title,
    description: entry?.description,
    alternates: { canonical: 'https://austincrate.com/buy-a-crate' },
  }
}

export default function BuyACratePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <BuyACrateClient />
    </SEOWrapper>
  )
}
