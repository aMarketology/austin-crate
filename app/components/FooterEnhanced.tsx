'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function EnhancedFooter() {
  const services = [
    { name: 'Fine Art Shipping', href: '/services/fine-art' },
    { name: 'Designer Furniture', href: '/services/furniture' },
    { name: 'Medical Equipment', href: '/services/medical-equipment' },
    { name: 'All Services', href: '/services' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Buy a Crate', href: '/buy-a-crate' },
  ]

  const locations = [
    { name: 'Austin', href: '/' },
    { name: 'Round Rock', href: '/locations/round-rock' },
    { name: 'Cedar Park', href: '/locations/cedar-park' },
    { name: 'Georgetown', href: '/locations/georgetown' },
  ]

  const resources = [
    { name: 'Shipping Resources', href: '/resources' },
    { name: 'Prepare Artwork Guide', href: '/resources/prepare-artwork' },
  ]

  return (
    <footer className="bg-grey-50 text-grey-800 border-t-4 border-grey-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl font-bold leading-none mb-1 text-grey-900">Austin Crate</div>
              <div className="text-xl font-semibold leading-none text-emerald">
                & Freight
              </div>
            </motion.div>
            <p className="text-grey-600 mb-6 text-sm leading-relaxed">
              White-glove specialty shipping services for fine art, designer furniture, and medical equipment throughout Central Texas.
            </p>
            <div className="space-y-2 text-sm text-grey-700 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>3112 Windsor Rd, Austin, TX 78703</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:(512) 240-9818" className="hover:text-emerald transition font-medium">(512) 240-9818</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Mon-Fri: 8 AM - 6 PM</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-grey-200 hover:bg-emerald hover:text-white rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-grey-200 hover:bg-emerald hover:text-white rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-grey-200 hover:bg-emerald hover:text-white rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-grey-900">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.href}
                    className="text-grey-700 text-sm hover:text-emerald transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald group-hover:w-4 transition-all" />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-grey-900">Locations</h3>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={location.href}
                    className="text-grey-700 text-sm hover:text-emerald transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald group-hover:w-4 transition-all" />
                    {location.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mb-6 mt-8 text-grey-900">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={resource.href}
                    className="text-grey-700 text-sm hover:text-emerald transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald group-hover:w-4 transition-all" />
                    {resource.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-grey-900">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-grey-700 text-sm hover:text-emerald transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas Bar */}
        <div className="py-6 border-t-2 border-grey-200">
          <p className="text-center text-grey-700 font-semibold text-sm mb-3">Proudly Serving Central Texas:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander', 'Kyle', 'Dripping Springs'].map((area, index, array) => (
              <span key={index} className="text-grey-600">
                {area}{index < array.length - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t-2 border-grey-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-grey-600">
          <p>&copy; {new Date().getFullYear()} Austin Crate & Freight. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/sitemap.xml" className="hover:text-emerald transition">Sitemap</Link>
            <Link href="#" className="hover:text-emerald transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
