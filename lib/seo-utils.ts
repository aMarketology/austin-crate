// Enterprise-level SEO utilities for consistent metadata generation
// Similar to WordPress SEO plugins (Yoast, RankMath) and Duda's SEO system

import { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  category?: string
  tags?: string[]
}

const SITE_CONFIG = {
  name: 'Austin Crate & Freight',
  url: 'https://austincrate.com',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@austincrate',
  locale: 'en_US',
  phoneNumber: '(512) 240-9818',
  email: 'info@austincrate.com',
}

/**
 * Generate comprehensive metadata for a page (WordPress/Duda-style)
 * @param config - SEO configuration object
 * @returns Next.js Metadata object
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    noindex = false,
    nofollow = false,
    ogImage = SITE_CONFIG.defaultImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    publishedTime,
    modifiedTime,
    author,
  } = config

  const fullTitle = title.includes('|') ? title : `${title} | ${SITE_CONFIG.name}`
  const canonicalUrl = canonical || SITE_CONFIG.url
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: ogType,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    // Twitter Card
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle,
    },

    // Robots
    robots: {
      index: !noindex,
      follow: !nofollow,
      nocache: noindex,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        noimageindex: noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Additional metadata
    category: config.category,
  }

  return metadata
}

/**
 * Generate Service Page Metadata (template for service pages)
 */
export function generateServiceMetadata(
  serviceName: string,
  shortDescription: string,
  keywords: string[],
  imagePath?: string
): Metadata {
  return generateMetadata({
    title: `${serviceName} | ${SITE_CONFIG.name}`,
    description: `${shortDescription} in Austin, TX. ${SITE_CONFIG.phoneNumber} for free quote.`,
    keywords: [...keywords, 'Austin TX', 'Central Texas', SITE_CONFIG.name],
    canonical: `${SITE_CONFIG.url}/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
    ogImage: imagePath,
    ogType: 'website',
  })
}

/**
 * Generate Location Page Metadata
 */
export function generateLocationMetadata(
  cityName: string,
  state: string = 'TX'
): Metadata {
  return generateMetadata({
    title: `Specialty Shipping ${cityName}, ${state} | ${SITE_CONFIG.name}`,
    description: `Professional white-glove specialty shipping in ${cityName}, Texas. Fine art, furniture, and medical equipment transport. Call ${SITE_CONFIG.phoneNumber}.`,
    keywords: [
      `${cityName} shipping`,
      `specialty freight ${cityName} ${state}`,
      `white glove movers ${cityName}`,
      `art shipping ${cityName} Texas`,
    ],
    canonical: `${SITE_CONFIG.url}/locations/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
  })
}

/**
 * Generate Article/Blog Post Metadata
 */
export function generateArticleMetadata(
  title: string,
  description: string,
  slug: string,
  category: string,
  keywords: string[],
  publishedDate: string,
  modifiedDate?: string,
  author: string = SITE_CONFIG.name
): Metadata {
  return generateMetadata({
    title,
    description,
    keywords,
    canonical: `${SITE_CONFIG.url}/resources/${slug}`,
    ogType: 'article',
    publishedTime: publishedDate,
    modifiedTime: modifiedDate || publishedDate,
    author,
    category,
  })
}

/**
 * Generate breadcrumb JSON-LD
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate local business JSON-LD for location pages
 */
export function generateLocalBusinessSchema(
  cityName: string,
  coordinates?: { lat: number; lng: number }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    telephone: SITE_CONFIG.phoneNumber,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    areaServed: {
      '@type': 'City',
      name: cityName,
    },
    ...(coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      },
    }),
  }
}

/**
 * Generate article JSON-LD
 */
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  publishedDate: string,
  modifiedDate: string,
  imageUrl?: string,
  author: string = SITE_CONFIG.name
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    }),
  }
}

/**
 * Generate service JSON-LD
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  serviceType: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    serviceType: serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phoneNumber,
      url: SITE_CONFIG.url,
    },
    areaServed: [
      { '@type': 'City', name: 'Austin' },
      { '@type': 'City', name: 'Round Rock' },
      { '@type': 'City', name: 'Cedar Park' },
      { '@type': 'City', name: 'Georgetown' },
    ],
    url: url,
  }
}

/**
 * Validate and optimize metadata (Yoast-style checks)
 */
export interface SEOScore {
  score: number // 0-100
  issues: string[]
  warnings: string[]
  passed: string[]
}

export function analyzeSEO(config: SEOConfig): SEOScore {
  const issues: string[] = []
  const warnings: string[] = []
  const passed: string[] = []
  let score = 100

  // Title checks
  if (!config.title) {
    issues.push('Missing page title')
    score -= 20
  } else {
    if (config.title.length < 30) {
      warnings.push('Title is too short (recommended: 50-60 characters)')
      score -= 5
    } else if (config.title.length > 60) {
      warnings.push('Title is too long (recommended: 50-60 characters)')
      score -= 5
    } else {
      passed.push('Title length is optimal')
    }
  }

  // Description checks
  if (!config.description) {
    issues.push('Missing meta description')
    score -= 20
  } else {
    if (config.description.length < 120) {
      warnings.push('Description is too short (recommended: 150-160 characters)')
      score -= 5
    } else if (config.description.length > 160) {
      warnings.push('Description is too long (recommended: 150-160 characters)')
      score -= 5
    } else {
      passed.push('Meta description length is optimal')
    }
  }

  // Keywords check
  if (!config.keywords || config.keywords.length === 0) {
    warnings.push('No keywords defined')
    score -= 5
  } else if (config.keywords.length > 10) {
    warnings.push('Too many keywords (recommended: 5-10)')
    score -= 3
  } else {
    passed.push('Keywords defined')
  }

  // Canonical URL check
  if (config.canonical) {
    passed.push('Canonical URL set')
  } else {
    warnings.push('No canonical URL specified')
    score -= 3
  }

  // Image check
  if (config.ogImage) {
    passed.push('OG Image set')
  } else {
    warnings.push('No custom OG image')
    score -= 5
  }

  return {
    score: Math.max(0, score),
    issues,
    warnings,
    passed,
  }
}

/**
 * Format phone number for schema
 */
export function formatPhoneForSchema(phone: string): string {
  return phone.replace(/\D/g, '').replace(/^/, '+1')
}

/**
 * Generate image object for schema
 */
export function generateImageObject(
  url: string,
  alt: string,
  width: number = 1200,
  height: number = 630
) {
  return {
    '@type': 'ImageObject',
    url: url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`,
    description: alt,
    width: width,
    height: height,
  }
}

export { SITE_CONFIG }
