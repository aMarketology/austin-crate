'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const services = [
    'Fine Art Shipping',
    'Designer Furniture',
    'Medical Equipment',
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceAreas = [
    'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville'
  ]

  return (
    <footer className="bg-gradient-to-b from-grey-900 to-grey-950 text-white border-t border-grey-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl font-bold leading-none mb-1">Austin Crate</div>
              <div className="text-xl font-light leading-none text-grey-300">
                Specialty Shipping
              </div>
            </motion.div>
            <p className="text-grey-400 mb-6 text-sm leading-relaxed">
              White-glove specialty shipping services for fine art, designer furniture, and medical equipment in Austin, Texas.
            </p>
            <div className="space-y-2 text-sm text-grey-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>3112 Windsor Rd, Austin, TX 78703</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:(512) 240-9818" className="hover:text-emerald transition">(512) 240-9818</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Mon-Fri: 8 AM - 6 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
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
                    className="text-gray-400 hover:text-emerald transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:(512) 240-9818"
                  className="text-emerald hover:text-emerald-400 transition font-semibold flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  (512) 240-9818
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                3112 Windsor Rd<br />Austin, TX 78703
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Mon-Fri: Open - 6pm<br />
                Sat: By Appointment
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas Bar */}
        <div className="py-6 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm mb-3">Proudly Serving:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {serviceAreas.map((area, index) => (
              <span key={index} className="text-gray-500">
                {area}{index < serviceAreas.length - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2025 Austin Crate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-emerald transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
