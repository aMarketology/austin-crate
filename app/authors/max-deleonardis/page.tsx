import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import Breadcrumbs from '@/app/components/Breadcrumbs'

const SLUG = '/authors/max-deleonardis'

export const metadata: Metadata = {
  title: 'Max DeLeonardis — Operations Manager | Austin Crate & Freight',
  description:
    'Max DeLeonardis is the Operations Manager at Austin Crate & Freight. He oversees specialty freight logistics across Central Texas and writes about cost-saving shipping strategies, equipment crating, and Austin-area freight.',
  alternates: { canonical: `https://austincrate.com${SLUG}` },
  openGraph: {
    type: 'profile',
    title: 'Max DeLeonardis — Operations Manager | Austin Crate & Freight',
    description:
      'Operations Manager at Austin Crate & Freight. Expert in specialty freight logistics, equipment crating, and Austin-area shipping.',
    url: `https://austincrate.com${SLUG}`,
  },
  keywords: [
    'Max DeLeonardis Austin Crate',
    'Austin Crate operations manager',
    'specialty freight logistics Austin TX',
    'equipment crating Austin Texas',
    'Austin shipping expert',
  ],
}

const authorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Max DeLeonardis',
  url: `https://austincrate.com${SLUG}`,
  jobTitle: 'Operations Manager',
  worksFor: {
    '@type': 'Organization',
    name: 'Austin Crate & Freight',
    url: 'https://austincrate.com',
  },
  description:
    'Operations Manager at Austin Crate & Freight, responsible for coordinating specialty freight logistics across Central Texas. Max writes about cost strategies, equipment transport, and the operational side of white-glove shipping.',
  knowsAbout: [
    'Specialty freight logistics',
    'Equipment crating and transport',
    'LTL and FTL freight coordination',
    'Cost-to-ship heavy items',
    'Safety and panel saw equipment',
    'Austin-area freight logistics',
    'White-glove operations',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
}

const MAX_ARTICLES = [
  {
    title: 'How Much Does It Cost to Ship Heavy Items in Austin?',
    href: '/blog/cost-to-ship-heavy-items-austin',
    date: 'March 12, 2026',
    category: 'Pricing Guide',
    excerpt:
      'Real cost breakdowns for shipping furniture, equipment, and oversized freight in and out of Austin, TX — by the pound, by the mile, and by job type.',
  },
  {
    title: 'Safety Speed 6400 Panel Saw: Specialty Crating & Shipping',
    href: '/blog/safety-speed-6400-panel-saw',
    date: 'February 28, 2026',
    category: 'Equipment Shipping',
    excerpt:
      'How we crate and ship a 600 lb Safety Speed 6400 panel saw safely — disassembly, vibration control, and LTL freight considerations.',
  },
  {
    title: 'Best Furniture Stores in Austin, Texas (2026)',
    href: '/blog/best-furniture-stores-austin-texas',
    date: 'February 15, 2026',
    category: 'Austin Local',
    excerpt:
      "Austin's top furniture stores for luxury, vintage, and custom pieces — plus tips on getting your new purchase shipped home safely.",
  },
  {
    title: 'Apartment Fire in SE Austin: What Specialty Freight Has to Do With It',
    href: '/blog/apartment-fire-se-austin',
    date: 'January 20, 2026',
    category: 'Austin News',
    excerpt:
      'How Austin Crate & Freight assisted displaced SE Austin residents after a multi-unit apartment fire with emergency item recovery and transport.',
  },
]

export default function MaxDeLeonardisAuthorPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <Breadcrumbs />

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-28 md:pt-32 pb-14 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-4xl shrink-0 ring-4 ring-sky-500/30">
              MD
            </div>
            {/* Info */}
            <div>
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-1">
                Author &amp; Logistics Expert
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Max DeLeonardis</h1>
              <p className="text-sky-300 font-medium text-lg mb-4">
                Operations Manager · Austin Crate &amp; Freight
              </p>
              <p className="text-gray-300 leading-relaxed max-w-2xl">
                Max runs day-to-day freight operations at Austin Crate &amp; Freight — routing shipments, coordinating carriers, managing the crating crew, and keeping jobs on time and on budget. He brings a data-driven, cost-transparent perspective to the Austin Crate blog, writing for readers who want real numbers and actionable logistics advice.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Freight Logistics</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Equipment Transport</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">LTL &amp; FTL Freight</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Austin Area Expert</span>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="flex-1 py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main column */}
            <div className="lg:col-span-2 space-y-10">

              {/* Bio */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Max</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Max DeLeonardis joined Austin Crate &amp; Freight after several years coordinating commercial freight and warehouse logistics in Central Texas. As Operations Manager, he sits at the intersection of crating, carrier relationships, and client timelines — which gives him a uniquely ground-level view of what specialty freight really costs and why.
                  </p>
                  <p>
                    Max handles the freight side that most customers never see: carrier vetting, rate negotiation, shipment routing, and the problem-solving that happens when a 900-pound piece of equipment needs to move from a third-floor Austin condo to a warehouse in Dallas by Thursday. He's handled thousands of jobs ranging from antique chandeliers to industrial panel saws.
                  </p>
                  <p>
                    On the Austin Crate blog, Max writes with a logistics operator's clarity — breaking down costs, explaining freight classes, and cutting through the jargon that makes shipping feel more complicated than it needs to be. His articles are especially useful for business owners, interior designers, and anyone managing recurring freight needs in Austin.
                  </p>

                  <h3>Areas of Expertise</h3>
                  <ul>
                    <li>LTL (less-than-truckload) and FTL freight coordination</li>
                    <li>Freight cost estimation and rate benchmarking</li>
                    <li>Heavy equipment transport and rigging</li>
                    <li>Commercial and industrial crating logistics</li>
                    <li>Carrier selection for fragile and high-value freight</li>
                    <li>Austin-area pickup, storage, and last-mile delivery</li>
                    <li>Emergency freight and time-sensitive shipments</li>
                  </ul>

                  <h3>Background</h3>
                  <ul>
                    <li>Operations Manager, Austin Crate &amp; Freight</li>
                    <li>Prior: Commercial freight coordination, Central Texas warehousing</li>
                    <li>Austin, TX native — deep knowledge of local logistics networks</li>
                    <li>Experience with industrial, commercial, and residential specialty freight</li>
                  </ul>
                </div>
              </div>

              {/* Articles */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Articles by Max DeLeonardis</h2>
                <div className="space-y-5">
                  {MAX_ARTICLES.map((art) => (
                    <Link
                      key={art.href}
                      href={art.href}
                      className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-sky-200 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full">
                          {art.category}
                        </span>
                        <span className="text-xs text-gray-400">{art.date}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-sky-600 transition-colors mb-1.5">
                        {art.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{art.excerpt}</p>
                      <span className="inline-block mt-3 text-xs font-semibold text-sky-600 group-hover:underline">
                        Read article →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">

              {/* Quick facts */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Quick Facts</h2>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wider">Role</dt>
                    <dd className="font-semibold text-gray-800">Operations Manager</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wider">Company</dt>
                    <dd className="font-semibold text-gray-800">Austin Crate &amp; Freight</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wider">Location</dt>
                    <dd className="font-semibold text-gray-800">Austin, TX</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wider">Focus</dt>
                    <dd className="font-semibold text-gray-800">Freight Logistics &amp; Cost Strategy</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wider">Specialty</dt>
                    <dd className="font-semibold text-gray-800">Equipment &amp; Commercial Freight</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6">
                <h2 className="text-base font-bold mb-2">Ship with Austin Crate</h2>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Free quotes on specialty freight, equipment crating, and white-glove logistics across Central Texas.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:5122409818"
                  className="block text-center mt-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  📞 (512) 240-9818
                </a>
              </div>

              {/* Team links */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Meet the Team</h2>
                <Link href="/about" className="text-sm text-emerald-600 font-medium hover:underline">
                  About Austin Crate &amp; Freight →
                </Link>
                <div className="mt-3">
                  <Link href="/authors/peter-hall" className="text-sm text-emerald-600 font-medium hover:underline">
                    Peter Hall — Owner &amp; Master Crate Builder →
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/blog" className="text-sm text-gray-500 hover:underline text-xs">
                    ← Back to Blog
                  </Link>
                </div>
              </div>

            </aside>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
