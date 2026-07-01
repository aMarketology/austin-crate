import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import Breadcrumbs from '@/app/components/Breadcrumbs'

const SLUG = '/authors/peter-hall'

export const metadata: Metadata = {
  title: 'Peter Hall — Owner & Master Crate Builder | Austin Crate & Freight',
  description:
    'Peter Hall is the founder and owner of Austin Crate & Freight. With over 15 years building custom crates and shipping high-value freight across Texas, Peter writes about specialty shipping, fine-art crating, and white-glove logistics.',
  alternates: { canonical: `https://austincrate.com${SLUG}` },
  openGraph: {
    type: 'profile',
    title: 'Peter Hall — Owner & Master Crate Builder | Austin Crate & Freight',
    description:
      'Founder of Austin Crate & Freight. 15+ years building custom crates and moving high-value freight across Central Texas.',
    url: `https://austincrate.com${SLUG}`,
  },
  keywords: [
    'Peter Hall Austin Crate',
    'Austin Crate owner',
    'specialty shipping expert Austin TX',
    'custom crating Austin Texas',
    'white glove freight Austin',
  ],
}

const authorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Peter Hall',
  url: `https://austincrate.com${SLUG}`,
  jobTitle: 'Owner & Master Crate Builder',
  worksFor: {
    '@type': 'Organization',
    name: 'Austin Crate & Freight',
    url: 'https://austincrate.com',
  },
  description:
    'Founder and owner of Austin Crate & Freight with over 15 years of experience in custom crating, fine-art shipping, and white-glove specialty freight in Central Texas.',
  knowsAbout: [
    'Custom crating',
    'White-glove shipping',
    'Fine art crating',
    'Safe & vault moving',
    'Piano shipping',
    'Medical equipment transport',
    'Specialty freight logistics',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
}

const PETER_ARTICLES = [
  {
    title: 'Safe & Vault Moving in Austin, TX: What It Actually Takes (2026 Guide)',
    href: '/blog/safe-vault-moving-austin',
    date: 'May 21, 2026',
    category: 'Heavy Item Shipping',
    excerpt:
      'Everything Austin homeowners and businesses need to know before moving a safe or vault — weight limits, stair fees, and how custom crating protects your investment.',
  },
  {
    title: 'Custom Crating vs. Standard Boxes: When You Need a Crate',
    href: '/blog/custom-crating-vs-standard-boxes',
    date: 'March 28, 2026',
    category: 'Crating Guide',
    excerpt:
      'How to decide between a custom wood crate and a standard shipping box, with real cost comparisons from Austin Crate & Freight.',
  },
  {
    title: 'Piano Shipping in Austin, TX: Costs, Process & What to Expect',
    href: '/blog/piano-shipping-austin',
    date: 'March 20, 2026',
    category: 'Specialty Shipping',
    excerpt:
      'A complete guide to moving upright pianos, baby grands, and concert grands in Austin — from rigging and crating to final delivery.',
  },
  {
    title: 'What Is White-Glove Shipping? (And When Do You Need It)',
    href: '/blog/what-is-white-glove-shipping',
    date: 'March 15, 2026',
    category: 'Shipping Guide',
    excerpt:
      'White-glove shipping explained: what it includes, what it costs, and which items genuinely require it versus standard freight.',
  },
  {
    title: 'How to Ship Large Furniture Across Texas',
    href: '/blog/ship-large-furniture-texas',
    date: 'March 10, 2026',
    category: 'Furniture Shipping',
    excerpt:
      'The complete step-by-step guide to shipping a sofa, dining set, or oversized furniture piece anywhere in Texas safely and affordably.',
  },
]

export default function PeterHallAuthorPage() {
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
            <div className="w-28 h-28 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-4xl shrink-0 ring-4 ring-emerald-500/30">
              PH
            </div>
            {/* Info */}
            <div>
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-1">
                Author &amp; Industry Expert
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Peter Hall</h1>
              <p className="text-emerald-300 font-medium text-lg mb-4">
                Owner &amp; Master Crate Builder · Austin Crate &amp; Freight
              </p>
              <p className="text-gray-300 leading-relaxed max-w-2xl">
                Peter founded Austin Crate &amp; Freight in 2010 after spending nearly a decade in logistics and museum artifact transport. He personally oversees custom-crate builds for fine art, antiques, heavy safes, and sensitive medical equipment — and writes about the craft from firsthand field experience.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">15+ Years Experience</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Fine Art &amp; Museum Crating</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">White-Glove Logistics</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Central Texas Shipping</span>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Peter</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Peter Hall started Austin Crate &amp; Freight in 2010 with one truck, a table saw, and a commitment to treating every shipment like it belonged in a museum. What began as a small custom-crating shop serving local art galleries quickly grew into Central Texas's go-to specialty freight company for high-value, irreplaceable, or unusually shaped items.
                  </p>
                  <p>
                    Over 15 years, Peter and his team have shipped everything from a 1,400-pound bank vault to a priceless 19th-century oil painting to a neurosurgical robot destined for a Round Rock hospital. His hands-on background means he doesn't just write <em>about</em> shipping — he builds the crates himself and rides along on jobs that demand it.
                  </p>
                  <p>
                    On the Austin Crate blog, Peter focuses on practical, field-tested guidance: what moves require custom crating, when standard freight falls short, how to evaluate specialty shippers, and the real costs behind white-glove service. His goal is to give Austin homeowners, collectors, interior designers, and business owners the information they need to ship confidently.
                  </p>

                  <h3>Areas of Expertise</h3>
                  <ul>
                    <li>Custom wood crate design and fabrication</li>
                    <li>Fine art and antique packing — museum-standard methods</li>
                    <li>Safe, vault, and heavy-item rigging and transport</li>
                    <li>Piano and heirloom furniture shipping</li>
                    <li>Medical and laboratory equipment transport (HIPAA-aware)</li>
                    <li>White-glove inside delivery and installation</li>
                    <li>Long-distance specialty freight across Texas and CONUS</li>
                  </ul>

                  <h3>Credentials &amp; Background</h3>
                  <ul>
                    <li>Founder &amp; Owner, Austin Crate &amp; Freight (est. 2010)</li>
                    <li>15+ years specialty freight &amp; custom crating</li>
                    <li>Prior experience: museum artifact transport, gallery logistics, commercial warehousing</li>
                    <li>Austin, TX based — serves Round Rock, Cedar Park, Georgetown, and beyond</li>
                  </ul>
                </div>
              </div>

              {/* Articles */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Articles by Peter Hall</h2>
                <div className="space-y-5">
                  {PETER_ARTICLES.map((art) => (
                    <Link
                      key={art.href}
                      href={art.href}
                      className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-emerald-200 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                          {art.category}
                        </span>
                        <span className="text-xs text-gray-400">{art.date}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors mb-1.5">
                        {art.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{art.excerpt}</p>
                      <span className="inline-block mt-3 text-xs font-semibold text-emerald-600 group-hover:underline">
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
                    <dd className="font-semibold text-gray-800">Owner &amp; Master Crate Builder</dd>
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
                    <dt className="text-gray-400 text-xs uppercase tracking-wider">Experience</dt>
                    <dd className="font-semibold text-gray-800">15+ Years</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wider">Specialty</dt>
                    <dd className="font-semibold text-gray-800">Custom Crating &amp; White-Glove Freight</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6">
                <h2 className="text-base font-bold mb-2">Talk to Peter's Team</h2>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Get a free quote for custom crating, white-glove pickup, or specialty freight anywhere in Central Texas.
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

              {/* About link */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Meet the Team</h2>
                <Link href="/about" className="text-sm text-emerald-600 font-medium hover:underline">
                  About Austin Crate &amp; Freight →
                </Link>
                <div className="mt-3">
                  <Link href="/authors/max-deleonardis" className="text-sm text-emerald-600 font-medium hover:underline">
                    Max DeLeonardis — Marketing Manager →
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
