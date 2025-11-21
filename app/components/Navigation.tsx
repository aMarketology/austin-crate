'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'All Services', href: '/services' },
    { name: 'Fine Art Shipping', href: '/services/fine-art' },
    { name: 'Designer Furniture', href: '/services/furniture' },
    { name: 'Medical Equipment', href: '/services/medical-equipment' },
    { name: 'Buy a Crate', href: '/buy-a-crate' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-grey-900/95 backdrop-blur-lg shadow-lg border-b border-grey-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <span className={`text-2xl font-bold transition-colors ${
                scrolled
                  ? 'text-grey-50'
                  : 'text-grey-50'
              }`}>
                Austin Crate
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
            >
              <Link
                href="/"
                className={`font-medium transition-colors relative group ${
                  scrolled
                    ? 'text-grey-200 hover:text-emerald'
                    : 'text-grey-200 hover:text-emerald'
                }`}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald transition-all group-hover:w-full" />
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`font-medium transition-colors relative group flex items-center gap-1 ${
                  scrolled
                    ? 'text-grey-200 hover:text-emerald'
                    : 'text-grey-200 hover:text-emerald'
                }`}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald transition-all group-hover:w-full" />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-grey-900/98 backdrop-blur-lg border border-grey-700 rounded-lg shadow-2xl overflow-hidden"
                  >
                    {services.map((service, i) => (
                      <Link
                        key={i}
                        href={service.href}
                        className={`block px-4 py-3 text-grey-200 hover:bg-emerald/10 hover:text-emerald transition-all ${
                          i !== services.length - 1 ? 'border-b border-grey-800' : ''
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className={`font-medium transition-colors relative group ${
                  scrolled
                    ? 'text-grey-200 hover:text-emerald'
                    : 'text-grey-200 hover:text-emerald'
                }`}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald transition-all group-hover:w-full" />
              </Link>
            </motion.div>
            <motion.a
              href="tel:(512) 240-9818"
              className={`font-semibold px-6 py-2 rounded-lg transition-all ${
                scrolled
                  ? 'text-grey-50 hover:text-emerald'
                  : 'text-grey-50 hover:text-emerald'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              (512) 240-9818
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-grey-50 transition-all"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 8 : 0,
              }}
            />
            <motion.div
              className="w-6 h-0.5 bg-grey-50 transition-all"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <motion.div
              className="w-6 h-0.5 bg-grey-50 transition-all"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -8 : 0,
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 bg-grey-800/95 backdrop-blur-lg rounded-lg mt-4 shadow-xl border border-grey-700">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                >
                  <Link
                    href="/"
                    className="block px-4 py-3 text-grey-200 hover:bg-primary/10 hover:text-emerald transition font-medium rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>
                
                {/* Services in Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="px-4 py-2 text-grey-400 text-sm font-semibold uppercase tracking-wider">
                    Services
                  </div>
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      className="block px-8 py-2 text-grey-200 hover:bg-primary/10 hover:text-emerald transition font-medium rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-grey-200 hover:bg-primary/10 hover:text-emerald transition font-medium rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
                <div className="px-4 pt-2">
                  <a
                    href="tel:(512) 240-9818"
                    className="block w-full bg-gradient-to-r from-primary to-primary-light hover:shadow-lg text-white text-center font-semibold px-6 py-3 rounded-lg transition"
                  >
                    (512) 240-9818
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
