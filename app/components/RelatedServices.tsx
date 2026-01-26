'use client'

import Link from 'next/link'

interface RelatedService {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

interface RelatedServicesProps {
  currentService?: string
  variant?: 'default' | 'compact'
}

export default function RelatedServices({ currentService, variant = 'default' }: RelatedServicesProps) {
  const allServices: RelatedService[] = [
    {
      title: 'Fine Art Shipping',
      description: 'Museum-quality crating and climate-controlled transport for paintings, sculptures, and collectibles.',
      href: '/services/fine-art',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Designer Furniture',
      description: 'White-glove furniture handling with expert disassembly, wrapping, and reassembly.',
      href: '/services/furniture',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Medical Equipment',
      description: 'HIPAA-compliant transport for sensitive medical devices with full documentation.',
      href: '/services/medical-equipment',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  // Filter out current service
  const relatedServices = allServices.filter(service => service.href !== currentService)

  if (variant === 'compact') {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
        <div className="space-y-3">
          {relatedServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                {service.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h4>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Other Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our full range of specialty shipping services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
