/**
 * Breadcrumb Schema Generator
 * Generates structured data for breadcrumb navigation
 * Helps Google understand site hierarchy
 */

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://austincrate.com${item.url}`,
    })),
  }
}

// Common breadcrumb paths
export const BREADCRUMB_PATHS = {
  home: { name: 'Home', url: '/' },
  about: { name: 'About', url: '/about' },
  services: { name: 'Services', url: '/services' },
  gallery: { name: 'Gallery', url: '/gallery' },
  contact: { name: 'Contact', url: '/contact' },
  buyACrate: { name: 'Buy a Crate', url: '/buy-a-crate' },
  locations: { name: 'Locations', url: '/locations' },
  resources: { name: 'Resources', url: '/resources' },
  
  // Services
  fineArt: { name: 'Fine Art Shipping', url: '/services/fine-art' },
  furniture: { name: 'Designer Furniture', url: '/services/furniture' },
  medical: { name: 'Medical Equipment', url: '/services/medical-equipment' },
  
  // Locations
  roundRock: { name: 'Round Rock', url: '/locations/round-rock' },
  cedarPark: { name: 'Cedar Park', url: '/locations/cedar-park' },
  georgetown: { name: 'Georgetown', url: '/locations/georgetown' },
}
