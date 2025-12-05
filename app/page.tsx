'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-grey-900">
      <Navigation />

      {/* === HERO SECTION === */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-grey-50 dark:bg-grey-800 pt-24">
        {/* Subtle Texture Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  <span className="text-xs font-semibold text-grey-800 uppercase tracking-widest">Austin, Texas</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 relative z-50 pb-4"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-grey-900 tracking-tight leading-relaxed relative z-50 pb-2">
                  Austin Crate
                </h1>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-emerald leading-relaxed relative z-50 pb-3">
                  & Freight
                </h2>
              </motion.div>

              {/* Tagline */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-3xl md:text-4xl text-grey-800 font-medium leading-tight"
              >
                White-Glove Specialty Shipping for Your Most Valuable Assets
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-grey-600 leading-relaxed max-w-2xl"
              >
                Expert crating and freight services for fine art, designer furniture, and medical equipment. We handle your treasures with museum-quality care, delivering peace of mind with every shipment.
              </motion.p>

              {/* CTA Buttons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a
                  href="tel:(512) 240-9818"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-bold text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (512) 240-9818
                </a>
                
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-emerald rounded-lg font-bold text-emerald hover:bg-emerald hover:text-white transition-all duration-300"
                >
                  Our Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                {/* Featured Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-grey-200 shadow-lg bg-white">
                  <Image
                    src="/1.jpg"
                    alt="Fine Art Shipping Services Austin Texas - Museum Quality Crating and Transport"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-lg">Fine Art Expertise</span>
                  </div>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white">
                    <Image
                      src="/2.jpg"
                      alt="Designer Furniture Shipping Austin - White Glove Furniture Transport Services"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-4">
                      <span className="text-white text-sm font-bold">Furniture Transport</span>
                    </div>
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white">
                    <Image
                      src="/3.jpg"
                      alt="Medical Equipment Shipping Austin TX - HIPAA Compliant Medical Device Transport"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-4">
                      <span className="text-white text-sm font-bold">Medical Equipment</span>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-white border-2 border-emerald/20 text-center shadow-sm">
                    <div className="text-2xl font-bold text-emerald mb-1">10+</div>
                    <div className="text-xs text-grey-600 font-medium">Years Experience</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border-2 border-emerald/20 text-center shadow-sm">
                    <div className="text-2xl font-bold text-emerald mb-1">10K+</div>
                    <div className="text-xs text-grey-600 font-medium">Shipments</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border-2 border-emerald/20 text-center shadow-sm">
                    <div className="text-2xl font-bold text-emerald mb-1">5.0</div>
                    <div className="text-xs text-grey-600 font-medium">Rating</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES & WHY CHOOSE US SECTION === */}
      <section className="relative py-24 pb-0 bg-white border-t-4 border-grey-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 mb-6">
              <span className="text-xs font-semibold text-grey-800 uppercase tracking-widest">Austin's Premier Specialty Shipping</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-grey-900 mb-4">
              Why Choose <span className="text-emerald">Austin Crate</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-grey-700 mb-6">
              Premium Shipping for Every Need
            </h3>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Austin Crate provides white-glove specialty shipping services for fine art, designer furniture, and medical equipment. Our expert team combines meticulous handling with cutting-edge logistics to ensure your most precious items arrive safely.
            </p>
          </div>

          {/* Services Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* Service Card 1 - Fine Art */}
            <div className="group relative p-8 rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300">
              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-grey-900 mb-4">Fine Art Shipping</h3>
              <p className="text-grey-600 mb-6 leading-relaxed">
                Museum-quality crating and transport for paintings, sculptures, and collectibles. Our climate-controlled handling ensures your artwork arrives in pristine condition.
              </p>

              {/* Feature List */}
              <ul className="space-y-2 mb-6">
                {['Climate-Controlled', 'Custom Crating', 'Insurance Coverage', 'Gallery-Standard Care'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-grey-700">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link href="/services/fine-art" className="inline-flex items-center gap-2 text-emerald font-bold hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Service Card 2 - Designer Furniture */}
            <div className="group relative p-8 rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 mb-6 rounded-xl bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-grey-900 mb-4">Designer Furniture</h3>
              <p className="text-grey-600 mb-6 leading-relaxed">
                White-glove furniture handling for luxury pieces and designer collections. Expert disassembly, protective wrapping, and precision reassembly included.
              </p>

              <ul className="space-y-2 mb-6">
                {['White-Glove Service', 'Protective Wrapping', 'Assembly/Disassembly', 'Scratch-Free Transport'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-grey-700">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/services/furniture" className="inline-flex items-center gap-2 text-emerald font-bold hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Service Card 3 - Medical Equipment */}
            <div className="group relative p-8 rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 mb-6 rounded-xl bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-grey-900 mb-4">Medical Equipment</h3>
              <p className="text-grey-600 mb-6 leading-relaxed">
                HIPAA-compliant transport for sensitive medical devices and laboratory equipment. Specialized handling with chain-of-custody documentation and calibration protection.
              </p>

              <ul className="space-y-2 mb-6">
                {['HIPAA Compliant', 'Chain of Custody', 'Temperature Control', 'Calibration Safe'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-grey-700">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/services/medical-equipment" className="inline-flex items-center gap-2 text-emerald font-bold hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Features Grid - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Museum-Quality Care', desc: 'White-glove handling for every shipment' },
              { title: 'Custom Crating', desc: 'Tailored packaging solutions' },
              { title: 'Insured & Certified', desc: 'Full coverage and compliance' },
              { title: 'Real-Time Tracking', desc: 'Monitor your shipment 24/7' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl bg-grey-50 border-2 border-grey-200">
                <div className="w-12 h-12 rounded-lg bg-emerald flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-grey-900 font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-grey-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA in Services Section */}
          <div className="text-center py-12">
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald hover:bg-emerald-600 rounded-lg font-bold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (512) 240-9818 for Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* === SERVICE AREAS SECTION === */}
      <section className="relative py-32 bg-grey-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 mb-6">
              <span className="text-xs font-semibold text-grey-800 uppercase tracking-widest">Service Areas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-grey-900 mb-4">
              Serving Austin & Surrounding Areas
            </h2>
            <p className="text-xl text-grey-600">
              Austin • Round Rock • Cedar Park • Georgetown • Pflugerville & More
            </p>
          </div>

          {/* Cities Grid - 5 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander', 'Lakeway', 'Bee Cave', 'Dripping Springs', 'Kyle'].map((city, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-md transition-all text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-grey-800">{city}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA in Service Areas */}
          <div className="text-center pt-8">
            <p className="text-lg text-grey-700 mb-6 font-medium">Need service in your area?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-emerald rounded-lg font-bold text-lg text-emerald hover:bg-emerald hover:text-white transition-all duration-300 shadow-md"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className="relative py-32 bg-white border-t-4 border-emerald/20">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-grey-900 mb-6">
            Ready to Ship
            <br />
            <span className="text-emerald">Your Items?</span>
          </h2>
          
          <p className="text-xl text-grey-600 mb-12 max-w-2xl mx-auto">
            Request your free shipping quote today. Let our expert team handle your fine art, furniture, or medical equipment with care.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald hover:bg-emerald-600 rounded-lg font-bold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (512) 240-9818
            </a>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-zinc-900/50 border-2 border-zinc-800 rounded-lg font-semibold text-lg text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-700 backdrop-blur-sm transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Serving Austin & Surrounding Areas, Texas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
