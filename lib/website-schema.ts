/**
 * Enhanced Website Structured Data
 * Enterprise-level schemas for SEO (WordPress/Duda equivalent)
 */

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Austin Crate & Freight',
  alternateName: 'Austin Crate',
  url: 'https://austincrate.com',
  description: 'Premier specialty shipping company providing white-glove services for fine art, designer furniture, and medical equipment in Austin, Texas.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://austincrate.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Austin Crate & Freight',
    url: 'https://austincrate.com',
  },
}

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Austin Crate & Freight',
  description: 'Get in touch with Austin Crate & Freight for specialty shipping services in Austin, Texas',
  url: 'https://austincrate.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Austin Crate & Freight',
    telephone: '(512) 240-9818',
    email: 'info@austincrate.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3112 Windsor Rd',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78703',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(512) 240-9818',
      contactType: 'Customer Service',
      areaServed: ['Austin', 'Round Rock', 'Cedar Park', 'Georgetown'],
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    },
  },
}

export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Austin Crate & Freight',
  description: 'Learn about Austin Crate & Freight, Central Texas premier specialty shipping company',
  url: 'https://austincrate.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Austin Crate & Freight',
    foundingDate: '2010',
    url: 'https://austincrate.com',
    description: 'Specialty shipping company providing white-glove services for fine art, designer furniture, and medical equipment',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3112 Windsor Rd',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78703',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
  },
}

export const galleryPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Austin Crate & Freight Gallery',
  description: 'View examples of our specialty shipping projects including fine art, designer furniture, and medical equipment',
  url: 'https://austincrate.com/gallery',
}

export const servicesCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Specialty Shipping Services',
  description: 'Comprehensive specialty shipping services including fine art, designer furniture, and medical equipment transport',
  url: 'https://austincrate.com/services',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Fine Art Shipping',
        url: 'https://austincrate.com/services/fine-art',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Designer Furniture Shipping',
        url: 'https://austincrate.com/services/furniture',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Medical Equipment Transport',
        url: 'https://austincrate.com/services/medical-equipment',
      },
    ],
  },
}
