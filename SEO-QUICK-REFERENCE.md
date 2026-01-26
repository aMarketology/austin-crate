# 🎯 SEO Quick Reference Card
## Austin Crate & Freight - Enterprise SEO System

Quick guide for common SEO tasks and troubleshooting.

---

## 📄 Adding a New Page

### 1. Create Page with Metadata

```typescript
// app/new-page/page.tsx
import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo-utils'
import { advancedRobots } from '@/lib/robots-config'

export const metadata: Metadata = {
  ...generateMetadata({
    title: 'Page Title | Austin Crate & Freight',
    description: 'Page description (under 155 chars)',
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    canonicalUrl: '/new-page',
  }),
  ...advancedRobots.index, // Or .noindex, .locationOptimized, etc.
}

export default function NewPage() {
  return (
    <div>
      <h1>Page Title</h1>
      {/* Content */}
    </div>
  )
}
```

### 2. Add to Sitemap

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    // ... existing entries
    {
      url: `${baseUrl}/new-page`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

### 3. Add to Navigation (if needed)

```typescript
// app/components/FooterEnhanced.tsx or Navigation.tsx
const newLinks = [
  { name: 'New Page', href: '/new-page' },
]
```

---

## 🏢 Adding a New Service Page

```typescript
// app/services/new-service/page.tsx
import type { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema } from '@/lib/seo-utils'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'New Service',
  description: 'Service description...',
  keywords: ['service', 'keywords'],
  serviceUrl: '/services/new-service',
})

export default function NewServicePage() {
  const schema = generateServiceSchema({
    serviceName: 'New Service',
    description: 'Detailed description...',
    price: 'Contact for Quote',
    serviceType: 'Professional Service',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h1>New Service</h1>
      {/* Content */}
    </>
  )
}
```

---

## 📍 Adding a New Location Page

```typescript
// app/locations/new-location/page.tsx
import type { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import { advancedRobots } from '@/lib/robots-config'

export const metadata: Metadata = {
  ...generateLocationMetadata({
    locationName: 'New Location',
    description: 'Serving New Location...',
    keywords: ['new location', 'shipping'],
    locationUrl: '/locations/new-location',
  }),
  ...advancedRobots.locationOptimized,
}

export default function NewLocationPage() {
  const schema = generateLocalBusinessSchema({
    locationName: 'New Location',
    address: {
      streetAddress: '123 Main St',
      addressLocality: 'New Location',
      addressRegion: 'TX',
      postalCode: '78XXX',
    },
    coordinates: {
      latitude: 30.XXXX,
      longitude: -97.XXXX,
    },
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h1>Specialty Shipping in New Location, TX</h1>
      {/* Content */}
    </>
  )
}
```

---

## 📝 Adding FAQ Schema

```typescript
// lib/faq-schema.ts or in page component
export const newPageFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the question?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The answer to the question.',
      },
    },
    // Add more questions...
  ],
}

// In page component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(newPageFAQ) }}
/>
```

---

## 🔍 SEO Checklist for New Pages

### Content

- [ ] **H1 tag**: One per page, includes primary keyword
- [ ] **H2/H3 tags**: Logical hierarchy, include secondary keywords
- [ ] **Word count**: At least 300 words (500+ recommended)
- [ ] **Images**: All have descriptive alt text
- [ ] **Internal links**: At least 3-5 links to other pages
- [ ] **External links**: Link to authoritative sources (if applicable)

### Metadata

- [ ] **Title**: 50-60 characters, includes keyword
- [ ] **Description**: 120-155 characters, compelling CTA
- [ ] **Keywords**: 5-10 relevant keywords
- [ ] **Canonical URL**: Set correctly
- [ ] **Open Graph**: Auto-generated via seo-utils
- [ ] **Twitter Card**: Auto-generated via seo-utils

### Technical

- [ ] **Robots meta**: Configured properly (index/noindex)
- [ ] **Sitemap**: Added to sitemap.ts
- [ ] **Mobile-friendly**: Test responsive design
- [ ] **Load time**: Under 3 seconds
- [ ] **HTTPS**: Secure connection

### Structured Data

- [ ] **Schema type**: Choose appropriate schema
- [ ] **JSON-LD**: Valid JSON syntax
- [ ] **Test**: Validate with Rich Results Test

---

## 🛠️ Common SEO Tasks

### Update Meta Description

```typescript
export const metadata: Metadata = {
  description: 'New description here (under 155 characters)',
}
```

### Change Page Title

```typescript
export const metadata: Metadata = {
  title: 'New Page Title | Austin Crate & Freight',
}
```

### Noindex a Page

```typescript
import { advancedRobots } from '@/lib/robots-config'

export const metadata: Metadata = {
  ...advancedRobots.noindex,
}
```

### Add Breadcrumbs

```typescript
import { generateBreadcrumbSchema, BREADCRUMB_PATHS } from '@/lib/breadcrumb-schema'

const breadcrumbs = generateBreadcrumbSchema([
  BREADCRUMB_PATHS.home,
  BREADCRUMB_PATHS.services,
  { name: 'Current Page', url: '/current-page' },
])

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
/>
```

### Track Custom Event

```typescript
import { event } from '@/lib/analytics'

event({
  action: 'button_click',
  category: 'Engagement',
  label: 'Get Quote Button',
})
```

---

## 🚨 Troubleshooting

### Page Not Indexing

**Check**:
1. Robots meta tag (should be `index: true`)
2. Robots.txt (shouldn't disallow page)
3. Sitemap (page should be listed)
4. Search Console (request indexing manually)

**Fix**:
```typescript
// Change this:
...advancedRobots.noindex

// To this:
...advancedRobots.index
```

### Rich Results Not Showing

**Check**:
1. JSON-LD syntax (no errors)
2. Schema type (correct for content)
3. Required properties (all filled)

**Test**:
```
https://search.google.com/test/rich-results
```

### Duplicate Content

**Fix with canonical URL**:
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://austincrate.com/correct-url',
  },
}
```

### Low SEO Score

**Run analyzer**:
```typescript
import { analyzeSEO } from '@/lib/seo-utils'

const score = analyzeSEO({
  title: 'Page Title',
  description: 'Description...',
  headings: ['H1', 'H2', 'H2', 'H3'],
  wordCount: 500,
  images: 5,
  links: 10,
  hasSchema: true,
})

console.log(score)
// { score: 85, issues: ['Add more images', ...], strengths: [...] }
```

---

## 📊 Analytics Quick Reference

### View Real-Time Data

```
Google Analytics > Reports > Realtime
```

### Top Pages

```
Google Analytics > Reports > Engagement > Pages and screens
```

### Conversions

```
Google Analytics > Reports > Engagement > Conversions
```

### Search Console Performance

```
Search Console > Performance > Search results
```

---

## 🔗 Important URLs

### Testing Tools

- **Rich Results**: https://search.google.com/test/rich-results
- **PageSpeed**: https://pagespeed.web.dev
- **Mobile Test**: https://search.google.com/test/mobile-friendly
- **Schema Validator**: https://validator.schema.org

### Admin Panels

- **Google Analytics**: https://analytics.google.com
- **Search Console**: https://search.google.com/search-console
- **SendGrid**: https://app.sendgrid.com

### Files to Edit

- **Metadata**: Individual page.tsx files
- **Sitemap**: `app/sitemap.ts`
- **Robots**: `public/robots.txt` + `lib/robots-config.ts`
- **Schemas**: `lib/schema.ts`, `lib/faq-schema.ts`, `lib/website-schema.ts`
- **Footer**: `app/components/FooterEnhanced.tsx`
- **Navigation**: `app/components/Navigation.tsx`

---

## 💡 Best Practices

### Content

- Write for humans first, search engines second
- Use natural language, not keyword stuffing
- Answer user questions directly
- Update content regularly

### Technical

- Keep page load time under 3 seconds
- Ensure mobile responsiveness
- Use semantic HTML
- Implement proper heading hierarchy

### Links

- Use descriptive anchor text
- Link to relevant internal pages
- Don't overdo external links
- Fix broken links immediately

### Images

- Use descriptive file names: `fine-art-crating.jpg` not `img123.jpg`
- Write helpful alt text: "Museum-quality art crating service" not "art"
- Optimize file sizes (WebP format, compressed)
- Use proper dimensions

---

## 🎯 SEO Score Goals

**Target Scores**:
- **Overall SEO**: 90-100 (Excellent)
- **Title**: Perfect length (50-60 chars)
- **Description**: Perfect length (120-155 chars)
- **Word Count**: 500+ words
- **Images**: All with alt text
- **Links**: 5+ internal links
- **Schema**: Valid JSON-LD

**Check with**:
```typescript
import { analyzeSEO } from '@/lib/seo-utils'
```

---

**Quick Access**: Keep this card bookmarked for fast SEO reference!

**Last Updated**: January 2026
