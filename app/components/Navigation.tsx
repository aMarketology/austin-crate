'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const services = [
    { name: 'Fine Art Shipping', href: '/services/fine-art' },
    { name: 'Designer Furniture', href: '/services/furniture' },
    { name: 'Medical Equipment', href: '/services/medical-equipment' },
    { name: 'Buy a Crate', href: '/buy-a-crate' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-grey-900 shadow-md border-b-2 border-grey-200 dark:border-grey-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex-shrink-0 text-2xl font-bold text-grey-900 dark:text-white">
              Austin <span className="text-emerald">Crate</span>
            </Link>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-grey-100 dark:bg-grey-800 hover:bg-grey-200 dark:hover:bg-grey-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-grey-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-grey-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="font-semibold text-grey-800 dark:text-grey-200 hover:text-emerald transition-colors">
              Home
            </Link>

            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link href="/services" className="font-semibold text-grey-800 dark:text-grey-200 hover:text-emerald transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 z-[100]">
                  <div className="w-64 bg-white dark:bg-grey-800 border-2 border-grey-200 dark:border-grey-700 rounded-lg shadow-xl">
                    {services.map((service, i) => (
                      <Link key={i} href={service.href} className="block px-4 py-3 text-grey-700 dark:text-grey-200 font-medium hover:bg-emerald/10 hover:text-emerald transition-all border-b border-grey-200 dark:border-grey-700 last:border-b-0 first:rounded-t-lg last:rounded-b-lg">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="font-semibold text-grey-800 dark:text-grey-200 hover:text-emerald transition-colors">
              Contact
            </Link>

            <a href="tel:(512) 240-9818" className="px-6 py-2.5 rounded-lg bg-emerald text-white font-bold hover:bg-emerald-600 transition-all shadow-md">
              (512) 240-9818
            </a>
          </div>

          <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="w-6 h-0.5 bg-grey-900 dark:bg-grey-200"></div>
            <div className="w-6 h-0.5 bg-grey-900 dark:bg-grey-200"></div>
            <div className="w-6 h-0.5 bg-grey-900 dark:bg-grey-200"></div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="py-4 space-y-1 bg-white dark:bg-grey-800 rounded-lg shadow-xl border-2 border-grey-200 dark:border-grey-700">
              <Link href="/" className="block px-4 py-3 text-grey-800 dark:text-grey-200 font-semibold hover:bg-emerald/10 hover:text-emerald transition rounded" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              <div className="px-4 py-2 text-grey-600 dark:text-grey-400 text-sm font-bold uppercase">Services</div>
              {services.map((service, i) => (
                <Link key={i} href={service.href} className="block px-8 py-2 text-grey-700 dark:text-grey-300 font-medium hover:bg-emerald/10 hover:text-emerald transition rounded" onClick={() => setMobileMenuOpen(false)}>
                  {service.name}
                </Link>
              ))}

              <Link href="/contact" className="block px-4 py-3 text-grey-800 dark:text-grey-200 font-semibold hover:bg-emerald/10 hover:text-emerald transition rounded" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              <div className="px-4 pt-2">
                <a href="tel:(512) 240-9818" className="block w-full bg-emerald hover:bg-emerald-600 text-white text-center font-bold px-6 py-3 rounded-lg transition shadow-md">
                  (512) 240-9818
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
