import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo-utils'
import ContactClient from './ContactClient'

export const metadata: Metadata = generateMetadata({
  title: 'Contact Austin Crate & Freight | Get Your Free Shipping Quote',
  description: 'Contact Austin Crate & Freight for a free quote on specialty shipping services. Call (512) 240-9818 or fill out our form. Serving Austin, Round Rock, Cedar Park & Central Texas.',
  keywords: ['Austin shipping quote', 'contact Austin Crate', 'free shipping estimate Austin', 'specialty shipping inquiry'],
  canonical: 'https://austincrate.com/contact',
})

export default function Contact() {
  return <ContactClient />
}
