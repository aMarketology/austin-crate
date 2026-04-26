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
  defaultImage: '/1.jpg',
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
  image?: string
  serviceUrl?: string
}

export function generateLocalBusinessSchema({
  locationName,
  description,
  latitude,
  longitude,
  additionalType = 'MovingCompany',
  image,
  serviceUrl,
}: LocalBusinessSchemaParams) {
  const pageUrl = serviceUrl ? `${SITE_CONFIG.url}${serviceUrl}` : SITE_CONFIG.url
  const imageUrl = image
    ? (image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`)
    : `${SITE_CONFIG.url}/austin-crate-logo.png`

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', additionalType],
    '@id': `${pageUrl}#localbusiness`,
    name: `${SITE_CONFIG.name} - ${locationName}`,
    description,
    telephone: `+1${SITE_CONFIG.phone.replace(/\D/g, '')}`,
    email: SITE_CONFIG.email,
    url: pageUrl,
    image: imageUrl,
    logo: `${SITE_CONFIG.url}/austin-crate-logo.png`,
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Invoice',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: 'US',
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Austin+Crate+%26+Freight+3112+Windsor+Rd+Austin+TX+78703',
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.linkedin,
    ],
    areaServed: [
      { '@type': 'City', name: 'Austin' },
      { '@type': 'City', name: 'Round Rock' },
      { '@type': 'City', name: 'Cedar Park' },
      { '@type': 'City', name: 'Georgetown' },
      { '@type': 'City', name: 'Pflugerville' },
      { '@type': 'City', name: 'Leander' },
      { '@type': 'City', name: 'Lakeway' },
      { '@type': 'City', name: 'Bee Cave' },
      { '@type': 'City', name: 'Dripping Springs' },
      { '@type': 'State', name: 'Texas' },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: latitude ?? 30.2972,
        longitude: longitude ?? -97.7594,
      },
      geoRadius: '80000', // 80 km / ~50 miles
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
        description: 'By appointment',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '28',
      bestRating: '5',
      worstRating: '1',
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
