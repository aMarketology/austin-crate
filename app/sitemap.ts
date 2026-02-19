import { MetadataRoute } from 'next'
import { contentRegistry } from '@/lib/content-registry'

const baseUrl = 'https://austincrate.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return contentRegistry.map((entry) => ({
    url: entry.slug === '/' ? baseUrl : `${baseUrl}${entry.slug}`,
    lastModified: new Date(entry.modifiedDate),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
