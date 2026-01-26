/**
 * Enhanced Sitemap with Images
 * WordPress/Duda-level sitemap functionality
 * Includes image metadata for better SEO
 */

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://austincrate.com'
  const currentDate = new Date().toISOString()
  
  // Core pages with image metadata
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
      images: ['/hero-image.jpg', '/services-overview.jpg'],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: ['/about-team.jpg', '/about-facility.jpg'],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      images: [
        '/gallery/fine-art-1.jpg',
        '/gallery/fine-art-2.jpg',
        '/gallery/furniture-1.jpg',
        '/gallery/furniture-2.jpg',
        '/gallery/medical-1.jpg',
      ],
    },
    {
      url: `${baseUrl}/buy-a-crate`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Service pages with detailed metadata
  const servicePages = [
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: ['/services/all-services.jpg'],
    },
    {
      url: `${baseUrl}/services/fine-art`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: ['/services/fine-art-shipping.jpg', '/services/art-crating.jpg'],
    },
    {
      url: `${baseUrl}/services/furniture`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: ['/services/furniture-shipping.jpg', '/services/furniture-protection.jpg'],
    },
    {
      url: `${baseUrl}/services/medical-equipment`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: ['/services/medical-equipment.jpg', '/services/medical-transport.jpg'],
    },
  ]

  // Location pages for local SEO
  const locationPages = [
    {
      url: `${baseUrl}/locations/round-rock`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: ['/locations/round-rock.jpg'],
    },
    {
      url: `${baseUrl}/locations/cedar-park`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: ['/locations/cedar-park.jpg'],
    },
    {
      url: `${baseUrl}/locations/georgetown`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: ['/locations/georgetown.jpg'],
    },
  ]

  // Resource/educational content
  const resourcePages = [
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/prepare-artwork`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: ['/resources/prepare-artwork-guide.jpg'],
    },
  ]

  // Combine all pages
  return [
    ...corePages,
    ...servicePages,
    ...locationPages,
    ...resourcePages,
  ]
}
