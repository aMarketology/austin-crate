import type { Metadata } from 'next'
import PrepareArtworkClient from './PrepareArtworkClient'

export const metadata: Metadata = {
  title: 'How to Prepare Artwork for Shipping | Austin Crate & Freight',
  description: 'Expert guide on preparing fine art for shipping. Learn museum-quality packing techniques, materials needed, and best practices from Austin Crate & Freight professionals.',
  keywords: ['art shipping preparation', 'how to pack artwork', 'fine art shipping guide', 'painting shipping tips'],
}

export default function PrepareArtwork() {
  return <PrepareArtworkClient />
}
