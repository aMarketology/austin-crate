import { Metadata } from 'next'
import { getEntry } from '@/lib/content-registry'
import SEOWrapper from '@/app/components/SEOWrapper'
import { generateLocalBusinessSchema } from '@/lib/seo-utils'
import HomeClient from './HomeClient'

const SLUG = '/'

export function generateMetadata(): Metadata {
  const entry = getEntry(SLUG)
  return {
    title: entry?.title ?? 'Austin Crate & Freight | Specialty Shipping Austin TX',
    description:
      entry?.description ??
      'Premier specialty shipping in Austin, Texas. White-glove services for fine art, designer furniture, medical equipment, and heavy item pickup. Museum-quality crating. Call (512) 240-9818.',
    keywords: [
      'Austin Texas specialty shipping',
      'specialty shipping Austin TX',
      'custom furniture shipping Austin',
      'heavy package pickup Austin',
      'heavy item shipping Austin',
      'white glove shipping Austin',
      'custom crating Austin TX',
      'fine art shipping Austin',
      'oversized item shipping Austin',
      'Austin Crate and Freight',
    ].join(', '),
    alternates: { canonical: 'https://austincrate.com' },
    openGraph: {
      title: entry?.title ?? 'Austin Crate & Freight | Specialty Shipping Austin TX',
      description:
        entry?.description ??
        'Premier specialty shipping in Austin, Texas. White-glove services for fine art, designer furniture, medical equipment, and heavy item pickup.',
      url: 'https://austincrate.com',
      siteName: 'Austin Crate & Freight',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry?.title ?? 'Austin Crate & Freight | Specialty Shipping Austin TX',
      description:
        entry?.description ??
        'Premier specialty shipping in Austin, Texas.',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  }
}

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema({
    locationName: 'Austin',
    description: 'Austin, Texas specialty shipping company. Custom furniture shipping, heavy package pickup, fine art crating, and medical equipment transport. Museum-quality custom crating and white-glove service.',
    latitude: 30.2972,
    longitude: -97.7594,
    additionalType: 'MovingCompany',
  })

  return (
    <SEOWrapper slug={SLUG}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HomeClient />
    </SEOWrapper>
  )
}
