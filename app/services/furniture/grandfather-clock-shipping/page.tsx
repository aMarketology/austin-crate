import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/grandfather-clock-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Grandfather Clock Shipping Austin Texas',
    description: 'Specialist grandfather clock shipping and crating in Austin, Texas. Pendulum removal, weight bob packaging, movement protection, and tall-case crating by certified packers. Call (512) 240-9818.',
    keywords: [
      'grandfather clock shipping Austin Texas',
      'grandfather clock crating Austin TX',
      'antique clock shipping Austin',
      'ship grandfather clock Texas',
      'longcase clock shipping Austin TX',
      'floor clock shipping Austin Texas',
      'grandfather clock movers Austin',
      'antique clock movers Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function GrandfatherClockShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Grandfather Clock Shipping Austin Texas',
    description: 'Specialist shipping and crating for grandfather clocks, floor clocks, and longcase clocks in Austin, TX   pendulum removal, movement protection, and custom tall-case crating.',
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
            <Link href="/services/furniture" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Furniture Shipping &amp; Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Grandfather Clocks · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Grandfather Clock Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Grandfather clocks sit at the intersection of furniture and precision machinery. Moving one requires securing a mechanical movement with suspended weights and a pendulum, inside a tall, narrow case that is inherently vulnerable to tipping   all without interrupting the clock&#39;s calibration or damaging its finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Why Clocks Are Unique */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Grandfather Clocks Require Specialist Handling</h2>
            <p className="text-gray-700 text-lg mb-4">
              A grandfather clock is not just tall furniture   it contains a mechanical movement with weighted chains or cables, a precision-balanced pendulum, chime rods, and glass panels, often housed in a case of solid hardwood or antique veneer that can be over 200 years old. Each of these elements has its own vulnerability.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              The pendulum can be damaged or knocked out of regulation by even small vibrations if not removed and individually packaged. The weights, if left hanging in the case, can swing and impact the chime rods or the case interior during loading. The movement itself   a finely calibrated gear train   should not be transported in a running state. And the tall, narrow form factor makes the entire piece susceptible to lateral tip-over risk in ways a low credenza is not.
            </p>
            <p className="text-gray-700 text-lg">
              Our technicians know how to properly stop, remove, and package each internal component before the case is wrapped and crated. We label every component with reinstallation notes so setup at the destination is straightforward.
            </p>
          </div>
        </section>

        {/* How We Crate */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Grandfather Clock Packing &amp; Crating Process</h2>
            <p className="text-gray-600 mb-8">Each internal component is separately secured before the case is crated.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Pendulum Removal', desc: 'The pendulum is removed, individually wrapped in padded foam, and packed in a labeled box that travels with the crate. We note bob weight and arm length for re-regulation guidance at the destination.' },
                { title: 'Weight &amp; Cable Packaging', desc: 'Hanging weights are lowered, removed from their chains or cables, and individually wrapped. Each weight is labeled (left, right, center) to ensure correct reinstallation.' },
                { title: 'Movement Protection', desc: 'The movement is stopped, and if accessible, the suspension spring is protected. Foam blocking is fitted around the movement to prevent it vibrating against the case or the seat board.' },
                { title: 'Chime Rod Padding', desc: 'Chime rods and hammers are padded to prevent metal-to-metal contact during transit. This is a common damage point overlooked by general movers.' },
                { title: 'Glass Door &amp; Panel Protection', desc: 'Glass panels on the bonnet (hood) and lower door are face-padded before any wrap is applied. We use Tyvek between glass and foam to prevent any adhesion or transfer.' },
                { title: 'Tall-Case Crating', desc: 'The crated case is built to resist lateral racking forces. The crate base is weighted and the case is secured at multiple vertical points   the key cause of tip-over damage is addressed at the crate design stage.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Clocks &amp; Timepieces We Ship</h2>
            <p className="text-gray-600 mb-8">From antique longcase movements to modern floor clocks   all handled with the same care.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Grandfather (longcase) clocks', 'Grandmother clocks',
                'Vienna regulator wall clocks', 'Bracket clocks',
                'Mantel clocks (spring-wound)', 'Skeleton clocks (visible movement)',
                'Antique 8-day clocks', 'Contemporary floor clocks',
                'Anniversary clocks (glass dome)', 'Cuckoo clocks',
                'Ship&#39;s bell / Chelsea clocks', 'Electric chime tower clocks',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: item }} />
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
                { q: 'Do I need to do anything to the clock before you arrive?', a: 'Ideally, let the clock run down naturally or stop the pendulum a few hours before pickup. If you are unsure how to stop it safely, leave it   our technicians will stop the movement and remove the pendulum during the packing appointment.' },
                { q: 'Can you ship an antique grandfather clock cross-country?', a: 'Yes. We regularly ship antique longcase clocks from Austin to other states. The clock travels crated, not on an open truck. We can coordinate with a white-glove freight carrier for cross-country routes.' },
                { q: 'Will the clock need to be re-calibrated after shipping?', a: 'The pendulum will need to be re-hung and the clock set into beat at the destination   this is always required after moving a pendulum clock. Our packing documentation includes the suspension spring position and bob adjustment notes to make this easier for you or a local clocksmith.' },
                { q: 'What does crating a grandfather clock cost?', a: 'Basic local grandfather clock delivery starts at around $300-$450 including packing, crating, and setup. Long-distance pricing depends on freight lane and clock dimensions. Call (512) 240-9818 for a specific quote.' },
                { q: 'Can you also move the clock from inside my house?', a: 'Yes. Our crew will carefully move the crated clock from any room, including up or down stairs. We use specialized furniture dollies and always have two technicians for clock moves   tipping is the primary risk and it requires two people to manage safely.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title="More Furniture Shipping Services" showSubLinks exclude={['/services/furniture']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Grandfather Clock Shipping in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Pendulum removal, weight packaging, movement protection, and custom tall-case crating. White-glove service across Austin and nationwide freight.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 border-t border-grey-700 pt-6">
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Furniture Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/furniture/designer-sofas-sectionals" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sofas &amp; Sectionals</Link>
                <Link href="/services/furniture/dining-tables-sets" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Dining Tables</Link>
                <Link href="/services/furniture/bedroom-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Bedroom Furniture</Link>
                <Link href="/services/furniture/designer-chairs" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Designer Chairs</Link>
                <Link href="/services/furniture/cabinets-credenzas" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Cabinets &amp; Credenzas</Link>
                <Link href="/services/furniture/marble-stone-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Marble &amp; Stone</Link>
                <Link href="/services/furniture/antique-heirloom-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Heirloom</Link>
                <Link href="/services/furniture/oversized-heavy-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Oversized Furniture</Link>
                <Link href="/services/furniture" className="px-3 py-1 border border-emerald/40 rounded-full text-emerald hover:bg-emerald/10 transition-colors">All Furniture →</Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
