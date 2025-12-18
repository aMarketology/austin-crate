'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Don't show the button on the contact page
  const isContactPage = pathname === '/contact'

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Hide on contact page
  if (isContactPage) {
    return null
  }

  return (
    <>
      {isVisible && (
        <>
          {/* Desktop Button - Bottom Right */}
          <div className="hidden md:block fixed bottom-8 right-8 z-50">
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-6 py-4 bg-emerald hover:bg-emerald-600 text-white font-bold rounded-lg shadow-2xl hover:shadow-emerald/30 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Request a Quote
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile Button - Full Width Bottom Bar */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-grey-200 shadow-2xl">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-emerald hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Request a Quote
            </Link>
          </div>
        </>
      )}
    </>
  )
}
