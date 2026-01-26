import type { Metadata } from 'next'
import ResourcesClient from './ResourcesClient'

export const metadata: Metadata = {
  title: 'Shipping Resources & Guides | Austin Crate & Freight',
  description: 'Expert guides on specialty shipping, fine art transport, furniture moving, and medical equipment handling from Austin Crate & Freight professionals.',
  keywords: ['shipping guides', 'art transport tips', 'furniture moving advice', 'packing resources'],
}

export default function Resources() {
  return <ResourcesClient />
}
