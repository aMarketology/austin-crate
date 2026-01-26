import { Metadata } from 'next'

// Site-wide configuration
export const SITE_CONFIG = {
  name: 'Austin Crate & Freight',
  url: 'https://austincrate.com',
  phone: '(512) 240-9818',
  email: 'info@austincrate.com',
  address: {
    street: '3112 Windsor Rd',
    city: 'Austin',
    state: 'TX',
    zip: '78703',
  },
  social: {
    facebook: 'https://facebook.com/austincrate',
    twitter: 'https://twitter.com/austincrate',
    linkedin: 'https://linkedin.com/company/austincrate',
  },
  defaultImage: '/images/austin-crate-og.jpg',
}

interface GenerateMetadataParams {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl: string
  ogImage?: string
  noindex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = SITE_CONFIG.defaultImage,
  noindex = false,
}: GenerateMetadataParams): Metadata {
  const fullUrl = `${SITE_CONFIG.url}${canonicalUrl}`

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@austincrate',
    },
    robots: noindex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
  }
}

interface GenerateServiceMetadataParams {
  serviceName: string
  description: string
  keywords?: string[]
  serviceUrl: string
  ogImage?: string
}

export function generateServiceMetadata({
  serviceName,
  description,
  keywords = [],
  serviceUrl,
  ogImage,
}: GenerateServiceMetadataParams): Metadata {
  return generateMetadata({
    title: `${serviceName} | ${SITE_CONFIG.name}`,
    description,
    keywords: [...keywords, 'Austin', 'Texas', 'shipping', 'specialty shipping'],
    canonicalUrl: serviceUrl,
    ogImage,
  })
}

interface GenerateLocationMetadataParams {
  locationName: string
  description: string
  keywords?: string[]
  locationUrl: string
  ogImage?: string
}

export function generateLocationMetadata({
  locationName,
  description,
  keywords = [],
  locationUrl,
  ogImage,
}: GenerateLocationMetadataParams): Metadata {
  return generateMetadata({
    title: `${locationName} Specialty Shipping | ${SITE_CONFIG.name}`,
    description,
    keywords: [...keywords, locationName, 'Texas', 'shipping', 'crating', 'freight'],
    canonicalUrl: locationUrl,
    ogImage,
  })
}

interface ServiceSchemaParams {
  serviceName: string
  description: string
  price?: string
  serviceType?: string
  areaServed?: string[]
}

export function generateServiceSchema({
  serviceName,
  description,
  price = 'Contact for Quote',
  serviceType = 'Professional Service',
  areaServed = ['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Texas'],
}: ServiceSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zip,
        addressCountry: 'US',
      },
    },
    serviceType,
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }
}

interface LocalBusinessSchemaParams {
  locationName: string
  description: string
  latitude?: number
  longitude?: number
  additionalType?: string
}

export function generateLocalBusinessSchema({
  locationName,
  description,
  latitude,
  longitude,
  additionalType = 'MovingCompany',
}: LocalBusinessSchemaParams) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', additionalType],
    name: `${SITE_CONFIG.name} - ${locationName}`,
    description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationName,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  }

  if (latitude && longitude) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    }
  }

  return schema
}

export function analyzeSEO(metadata: Metadata) {
  const warnings: string[] = []
  const errors: string[] = []

  // Title checks
  if (metadata.title) {
    const titleLength = metadata.title.toString().length
    if (titleLength > 60) warnings.push(`Title too long (${titleLength} chars, recommend < 60)`)
    if (titleLength < 30) warnings.push(`Title too short (${titleLength} chars, recommend > 30)`)
  } else {
    errors.push('Missing title')
  }

  // Description checks
  if (metadata.description) {
    const descLength = metadata.description.length
    if (descLength > 155) warnings.push(`Description too long (${descLength} chars, recommend < 155)`)
    if (descLength < 120) warnings.push(`Description too short (${descLength} chars, recommend > 120)`)
  } else {
    errors.push('Missing description')
  }

  return { warnings, errors, score: errors.length === 0 ? 100 - warnings.length * 10 : 0 }
}
