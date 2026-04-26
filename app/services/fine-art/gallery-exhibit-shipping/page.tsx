import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/gallery-exhibit-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Gallery Exhibit Shipping & Crating Austin Texas',
    description: 'Full-service gallery exhibit shipping in Austin, Texas. Outgoing and return logistics for gallery shows, art fairs, and traveling exhibitions. Condition reporting, custom crating, and freight coordination. Call (512) 240-9818.',
    keywords: [
      'gallery exhibit shipping Austin TX',
      'art gallery shipping Austin Texas',
      'gallery show logistics Austin',
      'art fair shipping Austin TX',
      'traveling exhibition shipping Texas',
      'gallery art transport Austin',
      'exhibition freight Austin Texas',
      'gallery crating Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function GalleryExhibitShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Gallery Exhibit Shipping & Crating Austin Texas',
    description: 'Full-service gallery exhibit shipping and crating in Austin, TX, outgoing and return logistics for gallery shows, art fairs, and traveling exhibitions.',
    serviceType: 'Specialty Shipping',
  })

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-white flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <Navigation />
        <Breadcrumbs />

        {/* Hero */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/services/fine-art" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Fine Art Shipping &amp; Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Gallery Logistics · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery Exhibit Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Austin galleries need a shipping partner who understands the rhythm of exhibition schedules, the condition reporting standards that protect consigned work, and the logistics of getting multiple works to a venue on time, and back safely afterward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Gallery Inquiry
              </Link>
            </div>
          </div>
        </section>

        {/* What Gallery Shipping Involves */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Gallery Exhibit Shipping Actually Involves</h2>
            <p className="text-gray-700 text-lg mb-4">
              Gallery exhibit shipping is distinct from standard art shipping in its complexity and risk profile. A collector shipping one painting to a buyer has a single, simple transaction. A gallery sending 25 works to an art fair has 25 different condition baselines, 25 insurance certificates, artists who want their own documentation, a fair organizer with its own receiving requirements, and a 3-day window to get everything there, installed, and insured before the opening.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We provide galleries with a consistent logistics partner who knows their standards, maintains condition records for their regular artists, and handles the documentation burden that falls on gallery staff when a shipment goes wrong and someone needs to make a claim.
            </p>
            <p className="text-gray-700 text-lg">
              For galleries with ongoing exhibition programs, we offer account-based pricing that recognizes the volume and predictability of regular work. Contact us to discuss a gallery shipping arrangement.
            </p>
          </div>
        </section>

        {/* Our Services for Galleries */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services for Austin Galleries</h2>
            <p className="text-gray-600 mb-8">From a single walk-in show shipment to ongoing logistics for your full exhibition program.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Exhibition Launch Shipping', desc: 'Crating and freight for outgoing shows, collector loans, gallery inventory, and artist-consigned works. We work to your opening date, not to a standard transit estimate.' },
                { title: 'Art Fair Logistics', desc: 'Booth crating and shipping for Austin-area fairs and national art fairs (Expo Chicago, Dallas Art Fair, The Armory Show). We handle the crating; you handle the booth. Advance warehouse delivery coordinated with fair organizers.' },
                { title: 'Condition Reporting', desc: 'Standardized condition reports at intake and delivery for every work in your show shipment. Documents pre-existing condition, protects you in consignor disputes, and meets insurance requirements.' },
                { title: 'Return Shipping Coordination', desc: 'Exhibition close logistics, works returned to gallery, to consignors, or to next venue. The same condition records from the outgoing shipment are used to confirm return condition.' },
                { title: 'Artist Pickups & Deliveries', desc: 'We pick up from artists\' studios in and around Austin and deliver directly to your gallery. We handle the pieces with the same white-glove standard as a $50,000 work from a major collector.' },
                { title: 'Storage Crating', desc: 'Works going into long-term storage benefit from a proper storage crate, not just a padded blanket. We build storage crates that protect works indefinitely without off-gassing or creating pressure points.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Austin Gallery Scene */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Austin&apos;s Gallery Scene &amp; Why Local Logistics Matter</h2>
            <p className="text-gray-700 text-lg mb-4">
              Austin&apos;s art gallery ecosystem spans contemporary spaces on East 6th Street, established galleries along South Congress, museum-affiliated venues near UT, and a growing constellation of artist-run spaces. The city hosts Austin Art Week, SXSW gallery activations, and significant participation in the Texas regional art fair circuit.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Having a local crating company rather than a national freight broker means faster turnaround, the ability to inspect unusual pieces before committing to a crating approach, and the flexibility to accommodate last-minute additions to a show shipment. We are in Austin, when something changes, we can respond the same day.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {[
                'East Austin Galleries', 'South Congress', 'Warehouse District', 'Domain Area',
                'UT Campus Area', 'West Austin', 'Mueller District', 'Round Rock',
              ].map((area, i) => (
                <div key={i} className="text-center py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'Can you accommodate last-minute additions to a show shipment?', a: 'Often yes, but call us as soon as you know. Same-day crating for add-on pieces is possible when our shop schedule allows. We recommend contacting us 5–7 business days before pickup to allow time for custom crating, especially for works requiring non-standard crate sizes.' },
                { q: 'Do you provide condition reports that artists and consignors can sign off on?', a: 'Yes. Our condition reports document the state of each work at the time of pickup with photographs and written notes. We can share these with consignors for their records. This is standard practice for gallery shipments and protects both the gallery and the consignor.' },
                { q: 'Can you handle a gallery move, taking all inventory from one location to another?', a: 'Yes. Full gallery relocations are within our scope, artwork inventory, display hardware, storage racks, and framing materials. We treat every piece in active inventory with the same care as a consigned work. Get in touch for a walk-through quote.' },
                { q: 'Do you work with galleries on a recurring account basis?', a: 'Yes. Galleries with regular shipping needs benefit from an established account relationship, consistent crating standards, familiar condition reporting, and volume pricing. Contact us to discuss an ongoing arrangement.' },
                { q: 'What is your standard timeline for a gallery show shipment?', a: 'For a show requiring 5–15 works crated and freighted, we typically need 5–10 business days from intake to delivery. Complex installations or large shows need more lead time. Art fair shipments should be planned 3–4 weeks in advance to accommodate fair organizer receiving windows.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title="More Fine Art &amp; Specialty Shipping Services" showSubLinks exclude={['/services/fine-art']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Partner with Us for Your Gallery&apos;s Shipping Needs</h2>
            <p className="text-grey-300 text-lg mb-8">Whether it is one show or a full season of exhibitions, we are the Austin crating company that knows how galleries work.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Gallery Inquiry
              </Link>
            </div>
            <div className="mt-8 border-t border-grey-700 pt-6">
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Fine Art Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/fine-art/painting-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Painting Shipping</Link>
                <Link href="/services/fine-art/sculpture-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sculpture Shipping</Link>
                <Link href="/services/fine-art/art-installation-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Art Installation</Link>
                <Link href="/services/fine-art/fragile-item-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Fragile Items</Link>
                <Link href="/services/fine-art/antique-artifacts-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Artifacts</Link>
                <Link href="/services/fine-art/rare-collectibles-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Rare Collectibles</Link>
                <Link href="/services/fine-art/glass-art-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Glass Art</Link>
                <Link href="/services/fine-art/museum-display-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Museum Display</Link>
                <Link href="/services/fine-art" className="px-3 py-1 border border-emerald/40 rounded-full text-emerald hover:bg-emerald/10 transition-colors">All Fine Art →</Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
