'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      // Show navigation after scrolling down 100px (only on desktop)
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const services = [
    { name: 'Fine Art Shipping', href: '/services/fine-art' },
    { name: 'Designer Furniture', href: '/services/furniture' },
    { name: 'Medical Equipment', href: '/services/medical-equipment' },
    { name: 'Buy a Crate', href: '/buy-a-crate' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-2 border-grey-200 transition-transform duration-300 ${isMobile || isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex-shrink-0 text-2xl font-bold text-grey-900">
              Austin <span className="text-emerald">Crate</span>
            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="font-semibold text-grey-800 hover:text-emerald transition-colors">
              Home
            </Link>

            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link href="/services" className="font-semibold text-grey-800 hover:text-emerald transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 z-[100]">
                  <div className="w-64 bg-white border-2 border-grey-200 rounded-lg shadow-xl">
                    {services.map((service, i) => (
                      <Link key={i} href={service.href} className="block px-4 py-3 text-grey-700 font-medium hover:bg-emerald/10 hover:text-emerald transition-all border-b border-grey-200 last:border-b-0 first:rounded-t-lg last:rounded-b-lg">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="font-semibold text-grey-800 hover:text-emerald transition-colors">
              Contact
            </Link>

            <a href="tel:(512) 240-9818" className="px-6 py-2.5 rounded-lg bg-emerald text-white font-bold hover:bg-emerald-600 transition-all shadow-md">
              (512) 240-9818
            </a>
          </div>

          <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="w-6 h-0.5 bg-grey-900"></div>
            <div className="w-6 h-0.5 bg-grey-900"></div>
            <div className="w-6 h-0.5 bg-grey-900"></div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="py-4 space-y-1 bg-white rounded-lg shadow-xl border-2 border-grey-200">
              <Link href="/" className="block px-4 py-3 text-grey-800 font-semibold hover:bg-emerald/10 hover:text-emerald transition rounded" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              <div className="px-4 py-2 text-grey-600 text-sm font-bold uppercase">Services</div>
              {services.map((service, i) => (
                <Link key={i} href={service.href} className="block px-8 py-2 text-grey-700 font-medium hover:bg-emerald/10 hover:text-emerald transition rounded" onClick={() => setMobileMenuOpen(false)}>
                  {service.name}
                </Link>
              ))}

              <Link href="/contact" className="block px-4 py-3 text-grey-800 font-semibold hover:bg-emerald/10 hover:text-emerald transition rounded" onClick={() => setMobileMenuOpen(false)}>
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
