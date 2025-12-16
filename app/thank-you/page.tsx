'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ThankYou() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Thank You Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-grey-900 to-grey-800 text-white py-24 px-4 mt-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className={`mb-8 transition-all duration-700 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald rounded-full">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-150 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Thank You!
          </h1>

          {/* Message */}
          <p className={`text-xl text-grey-300 mb-8 transition-all duration-700 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            We've received your quote request and will get back to you within 24 hours.
          </p>

          {/* Contact Info */}
          <div className={`bg-grey-800/50 rounded-xl p-6 mb-8 transition-all duration-700 delay-450 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-grey-300 mb-4">Need immediate assistance?</p>
            <a 
              href="tel:(512) 240-9818" 
              className="inline-flex items-center gap-2 text-2xl font-bold text-emerald hover:text-emerald/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (512) 240-9818
            </a>
          </div>

          {/* Back to Home Button */}
          <div className={`transition-all duration-700 delay-600 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald hover:bg-emerald/90 rounded-lg font-bold text-white transition-all hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
