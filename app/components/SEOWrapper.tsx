/**
 * SEOWrapper
 *
 * Drop this around the content of any page to automatically inject:
 *   - NewsArticle / WebPage JSON-LD structured data
 *   - BreadcrumbList JSON-LD structured data
 *
 * Requirements:
 *   - The page's slug must be registered in lib/content-registry.ts
 *
 * Usage (server component):
 *   import SEOWrapper from '@/app/components/SEOWrapper'
 *
 *   export default function MyPage() {
 *     return (
 *       <SEOWrapper slug="/blog/my-article">
 *         <Navigation />
 *         ...page content...
 *       </SEOWrapper>
 *     )
 *   }
 */

import { ReactNode } from 'react'
import { getEntry } from '@/lib/content-registry'

const BASE_URL = 'https://austincrate.com'

function buildBreadcrumbs(slug: string) {
  const parts = slug.split('/').filter(Boolean)
  const items = [
    { name: 'Home', item: BASE_URL },
    ...parts.map((segment, i) => ({
      name: segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      item: `${BASE_URL}/${parts.slice(0, i + 1).join('/')}`,
    })),
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

interface SEOWrapperProps {
  /** Must match a slug in lib/content-registry.ts */
  slug: string
  children: ReactNode
}

export default function SEOWrapper({ slug, children }: SEOWrapperProps) {
  const entry = getEntry(slug)

  if (!entry) {
    // Page isn't in registry — render children without extra schema
    return <>{children}</>
  }

  const isBlogPost = entry.category === 'Blog' && slug !== '/blog'

  const pageSchema = isBlogPost
    ? {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: entry.title,
        description: entry.description,
        datePublished: entry.publishDate,
        dateModified: entry.modifiedDate,
        author: {
          '@type': 'Organization',
          name: entry.author,
          url: BASE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Austin Crate & Freight',
          url: BASE_URL,
        },
        mainEntityOfPage: `${BASE_URL}${slug}`,
        url: `${BASE_URL}${slug}`,
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: entry.title,
        description: entry.description,
        datePublished: entry.publishDate,
        dateModified: entry.modifiedDate,
        url: slug === '/' ? BASE_URL : `${BASE_URL}${slug}`,
        publisher: {
          '@type': 'Organization',
          name: 'Austin Crate & Freight',
          url: BASE_URL,
        },
      }

  const breadcrumbSchema = buildBreadcrumbs(slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
