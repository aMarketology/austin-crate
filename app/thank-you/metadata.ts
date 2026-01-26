import type { Metadata } from 'next'
import { advancedRobots } from '@/lib/robots-config'

export const metadata: Metadata = {
  title: 'Thank You - Quote Request Received',
  description: 'Thank you for contacting Austin Crate & Freight. We will respond to your quote request within 24 business hours.',
  ...advancedRobots.noindex, // Do not index thank you pages
}
