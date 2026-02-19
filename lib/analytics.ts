/**
 * Google Analytics 4 Configuration
 * Enterprise-level analytics setup (WordPress/Duda equivalent)
 * 
 * Setup Instructions:
 * 1. Create GA4 property at https://analytics.google.com
 * 2. Get Measurement ID (format: G-XXXXXXXXXX)
 * 3. Replace NEXT_PUBLIC_GA_ID in .env.local
 * 4. Import and use in app/layout.tsx
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-8G3X2DX8L2'

// Send pageview event
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Send custom event
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track conversions (quote requests, contact form submissions)
export const trackConversion = (conversionType: 'quote_request' | 'contact_form' | 'phone_call') => {
  event({
    action: 'conversion',
    category: 'Lead Generation',
    label: conversionType,
  })
}

// Track service page views
export const trackServiceView = (serviceName: string) => {
  event({
    action: 'view_service',
    category: 'Services',
    label: serviceName,
  })
}

// Track location page views
export const trackLocationView = (locationName: string) => {
  event({
    action: 'view_location',
    category: 'Locations',
    label: locationName,
  })
}

// Track resource engagement
export const trackResourceView = (resourceName: string) => {
  event({
    action: 'view_resource',
    category: 'Resources',
    label: resourceName,
  })
}

// Extend Window type for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
