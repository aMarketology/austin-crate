'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesClient() {
  const services = [
    {
      title: 'Fine Art Shipping',
      subtitle: 'Museum-Quality Care',
      description: 'Custom crating and climate-controlled transport for paintings, sculptures, and collectibles.',
      image: '/1.jpg',
      href: '/services/fine-art',
      features: ['Climate-Controlled', 'Custom Crating', 'Full Insurance', 'Gallery-Standard'],
    },
    {
      title: 'Designer Furniture',
      subtitle: 'White-Glove Service',
      description: 'Premium handling for luxury pieces with expert disassembly, wrapping, and reassembly.',
      image: '/2.jpg',
      href: '/services/furniture',
      features: ['Assembly/Disassembly', 'Protective Wrapping', 'Inside Delivery', 'Scratch-Free'],
    },
    {
      title: 'Medical Equipment',
      subtitle: 'HIPAA Compliant',
      description: 'Specialized transport for sensitive medical devices with chain-of-custody documentation.',
      image: '/3.jpg',
      href: '/services/medical-equipment',
      features: ['HIPAA Certified', 'Chain of Custody', 'Calibration Safe', 'Temperature Control'],
    },
  ]

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Insured Shipments' },
    { value: '24/7', label: 'Tracking Available' },
    { value: '5.0', label: 'Customer Rating' },
  ]

  const process = [
    { 
      step: '01', 
      title: 'Free Consultation', 
      description: 'Tell us about your items. We\'ll assess your needs and provide a detailed, no-obligation quote.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    { 
      step: '02', 
      title: 'Custom Packaging', 
      description: 'Our craftsmen build custom crates and packaging designed specifically for your valuable items.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    { 
      step: '03', 
      title: 'Secure Transport', 
      description: 'White-glove handling with climate-controlled vehicles and real-time GPS tracking.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    { 
      step: '04', 
      title: 'Final Delivery', 
      description: 'We deliver, unpack, and place your items exactly where you want them. Complete satisfaction guaranteed.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  const whyChooseUs = [
    { title: 'Fully Insured', description: 'Every shipment is covered with comprehensive insurance for your peace of mind.' },
    { title: 'Expert Handlers', description: 'Our team is trained in museum-standard handling techniques for delicate items.' },
    { title: 'Custom Solutions', description: 'We design packaging and crating solutions tailored to each unique item.' },
    { title: 'Local & National', description: 'Serving Austin and surrounding areas, plus nationwide shipping capabilities.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-grey-900 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/IMG_3748.jpg"
            alt="Austin Crate Specialty Shipping Services"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-grey-900 via-grey-900/95 to-grey-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald/50 bg-emerald/10 text-emerald text-sm font-semibold mb-6">
                Austin&apos;s Premier Specialty Shipping
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              White-Glove
              <br />
              <span className="text-emerald">Shipping Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-grey-300 mb-10 leading-relaxed"
            >
              Expert handling for fine art, designer furniture, and medical equipment. 
              Museum-quality care, fully insured, delivered with precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
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
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-bold text-white hover:bg-white/20 transition-all duration-300"
              >
                Get Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-emerald py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-emerald-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 text-grey-800 text-xs font-semibold uppercase tracking-widest mb-6">
              Our Specialty Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-grey-900 mb-4">
              What We <span className="text-emerald">Ship</span>
            </h2>
            <p className="text-xl text-grey-600 max-w-2xl mx-auto">
              From priceless artwork to sensitive medical equipment, we handle your most valuable items with expert care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-grey-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-emerald/90 text-white text-xs font-bold rounded-full">
                      {service.subtitle}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-grey-900 mb-3">{service.title}</h3>
                  <p className="text-grey-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, j) => (
                      <span key={j} className="px-3 py-1 bg-grey-100 text-grey-700 text-xs font-medium rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-emerald font-bold hover:gap-3 transition-all"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 text-grey-800 text-xs font-semibold uppercase tracking-widest mb-6">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-grey-900 mb-4">
              Simple, <span className="text-emerald">Stress-Free</span> Process
            </h2>
            <p className="text-xl text-grey-600 max-w-2xl mx-auto">
              From consultation to delivery, we handle everything so you don&apos;t have to worry.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-emerald/20" />
                )}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-grey-200 relative z-10">
                  <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald mb-6">
                    {item.icon}
                  </div>
                  <div className="text-emerald font-bold text-sm mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-grey-900 mb-3">{item.title}</h3>
                  <p className="text-grey-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 text-grey-800 text-xs font-semibold uppercase tracking-widest mb-6">
                Why Austin Crate
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
                Trusted by Austin&apos;s <span className="text-emerald">Finest</span>
              </h2>
              <p className="text-xl text-grey-600 mb-10">
                For over a decade, galleries, hospitals, interior designers, and collectors have trusted Austin Crate to handle their most valuable shipments.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-grey-900 mb-1">{item.title}</h4>
                      <p className="text-grey-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/IMG_3760.jpg"
                  alt="Austin Crate Professional Team"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-emerald-100 text-sm">Years Serving Austin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-grey-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Ship Your
            <br />
            <span className="text-emerald">Valuable Items?</span>
          </h2>
          <p className="text-xl text-grey-400 mb-10 max-w-2xl mx-auto">
            Get a free quote today. Our team is standing by to help with your specialty shipping needs.
          </p>
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
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-bold text-lg text-white hover:bg-white/20 transition-all duration-300"
            >
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
