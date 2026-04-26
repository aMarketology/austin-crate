import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/piano-shipping-austin'

export function generateMetadata(): Metadata {
  const entry = getEntry(SLUG)
  return {
    title: entry?.title,
    description: entry?.description,
    alternates: { canonical: `https://austincrate.com${SLUG}` },
    openGraph: {
      type: 'article',
      title: entry?.title,
      description: entry?.description,
      url: `https://austincrate.com${SLUG}`,
      publishedTime: entry?.publishDate,
      modifiedTime: entry?.modifiedDate,
    },
    keywords: [
      'piano shipping Austin Texas',
      'piano moving Austin',
      'piano crating Austin',
      'grand piano shipping Texas',
      'upright piano transport Austin',
      'piano freight Austin TX',
    ],
  }
}

export default function PianoShippingAustin() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Piano Shipping in Austin, Texas: Complete Guide & Costs for 2026',
    description:
      'Complete guide to piano shipping in Austin, TX, uprights to concert grands. Costs, custom crating process, and what to ask before booking a piano transport company.',
    image: 'https://austincrate.com/og-default.jpg',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: [
      {
        '@type': 'Person',
        name: 'Peter Hall',
        url: 'https://austincrate.com/about',
        jobTitle: 'Owner',
      },
      {
        '@type': 'Person',
        name: 'Max-de',
        url: 'https://austincrate.com/about',
        jobTitle: 'Marketing Director',
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Austin Crate & Freight',
      url: 'https://austincrate.com',
    },
    mainEntityOfPage: `https://austincrate.com${SLUG}`,
  }

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-grey-50 flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <Navigation />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-emerald hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Piano Shipping in Austin, Texas: Complete Guide &amp; Costs for 2026
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              From uprights to concert grands, professional piano crating, moving, and transport in Central Texas
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 March 22, 2026</span>
              <span>
                ✍️{' '}
                <Link href="/about" className="text-emerald hover:underline">
                  Peter Hall
                </Link>{' '}
                &amp;{' '}
                <Link href="/about" className="text-emerald hover:underline">
                  Max-de
                </Link>
              </span>
              <span>🎹 Specialist Shipping</span>
              <span>⏱️ 6 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-grey-700 mb-8">
              Pianos are among the most challenging items to ship. They are heavy, fragile, acoustically sensitive, and irreplaceable if something goes wrong. Whether you are moving an upright piano across Austin or shipping a grand piano to another state, the packaging and handling need to be done right the first time. This guide explains what professional piano shipping actually involves, and what it costs in Austin, Texas in 2026.
            </p>

            <h2>Why Piano Shipping Is Uniquely Challenging</h2>
            <p>
              A piano is not just heavy, a standard upright weighs 400–600 lbs. The real challenge is its combination of weight, fragile internal mechanics, delicate wood or lacquer finish, and precise internal calibration that can be disturbed by rough handling.
            </p>
            <p>The most common problems we see with improperly shipped pianos:</p>
            <ul>
              <li>
                <strong>Cracked soundboard</strong>, the large internal wood panel that gives a piano its resonance; almost impossible to repair without a full rebuild
              </li>
              <li>
                <strong>Damaged action</strong>, the mechanical assembly of hammers, dampers, and keys; highly sensitive to impact and humidity
              </li>
              <li>
                <strong>Finish damage</strong>, lacquered and polished piano finishes are unforgiving; even light contact can leave permanent marks
              </li>
              <li>
                <strong>Leg and pedal damage</strong>, grand piano legs are both structural and decorative; they are frequently snapped off in improper moves
              </li>
            </ul>

            <h2>Types of Pianos and Their Specific Needs</h2>

            <h3>Upright Pianos (Spinets, Consoles, Studios, Uprights)</h3>
            <p>
              Upright pianos are the most common. They range from 36&quot; spinets to full 52&quot; professional uprights. The primary risks are finish damage and impact to the back panel during loading. Most upright pianos can be moved on a reinforced dolly with proper padding, but long-distance shipping requires a custom crate or, at minimum, a dedicated freight blanket on a piano-only carrier.
            </p>

            <h3>Baby Grand and Grand Pianos</h3>
            <p>
              Grand pianos require leg removal, lid removal, and separate packaging for each component. The body then goes horizontal on a padded board. This is the most technically demanding type of piano move. For any shipment beyond local delivery, a custom wood crate is essential.
            </p>

            <h3>Concert and Studio Grands</h3>
            <p>
              Concert grands, Steinway Model D and equivalents, require the highest level of professional handling. These instruments can be worth $100,000 or more. Custom crating is mandatory, and climate-controlled transit is strongly recommended.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">🎹 Piano Crating Specifications</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li><strong>Crate construction:</strong> Custom-cut plywood panels sized to instrument dimensions</li>
                <li><strong>Interior cushioning:</strong> High-density foam blocks prevent all movement</li>
                <li><strong>Leg packaging:</strong> Individual wrapping and separate blocking for each grand piano leg</li>
                <li><strong>Humidity protection:</strong> Vapor barrier available for climate-sensitive shipments</li>
                <li><strong>Handling orientation:</strong> Clearly marked &ldquo;This Side Up&rdquo; with tipping indicators</li>
              </ul>
            </div>

            <h2>The Piano Packing Process at Austin Crate &amp; Freight</h2>
            <p>We follow a structured process for every piano we prepare for shipping:</p>
            <ol>
              <li>
                <strong>Assessment:</strong> We evaluate the piano type, condition, finish, and destination before building anything. A 1920s antique upright with original lacquer needs different handling than a modern Yamaha.
              </li>
              <li>
                <strong>Disassembly:</strong> For grands, we remove legs, lyre (pedal assembly), and lid. Each part is wrapped individually.
              </li>
              <li>
                <strong>Wrapping:</strong> The piano body is wrapped in furniture pads and then in stretch wrap before it goes into the crate, no surface contact with hard materials.
              </li>
              <li>
                <strong>Crating:</strong> A custom wood crate is built around the wrapped instrument. Interior foam or high-density padding is added to all six sides.
              </li>
              <li>
                <strong>Carrier coordination:</strong> We work with carriers experienced in musical instrument freight, not general cargo handlers who will treat a piano like a pallet of boxes.
              </li>
            </ol>

            <h2>What Piano Shipping Costs in Austin, Texas</h2>
            <p>
              Piano shipping costs depend heavily on the instrument type, distance, and service level. Here is what to expect in 2026:
            </p>

            <h3>Local Austin Metro (Under 50 Miles)</h3>
            <ul>
              <li><strong>Upright piano:</strong> $200-$400 (moving and delivery, no crating required for local)</li>
              <li><strong>Baby grand:</strong> $400-$700 (disassembly, move, and reassembly)</li>
              <li><strong>Concert grand:</strong> $600-$1,200</li>
            </ul>

            <h3>Statewide Texas Shipping (50-500 Miles)</h3>
            <ul>
              <li><strong>Upright piano (crated):</strong> $500-$1,200</li>
              <li><strong>Baby grand (crated):</strong> $900-$2,500</li>
              <li><strong>Concert grand:</strong> $2,000-$5,000+</li>
            </ul>

            <h3>Interstate or National Shipping</h3>
            <ul>
              <li><strong>Upright piano:</strong> $800–$2,000</li>
              <li><strong>Baby grand:</strong> $1,500–$4,000</li>
              <li><strong>Concert grand / vintage Steinway:</strong> Price on application, varies by instrument and carrier</li>
            </ul>

            <div className="bg-grey-100 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-3 text-grey-900">✅ What to Ask a Piano Shipping Company</h3>
              <ul className="text-grey-700 space-y-2">
                <li>🔹 Do you build custom crates, or just pad-wrap?</li>
                <li>🔹 How do you handle grand piano leg removal and reassembly?</li>
                <li>🔹 What carrier do you use, and do they specialize in musical instruments?</li>
                <li>🔹 Is climate-controlled shipping available?</li>
                <li>🔹 What insurance coverage is included, and what is the declared value limit?</li>
                <li>🔹 Can you provide photos of the packed instrument before it leaves your shop?</li>
              </ul>
            </div>

            <h2>Austin Crate &amp; Freight&apos;s Approach to Piano Shipping</h2>
            <p>
              We treat every piano like the irreplaceable instrument it is. Our shop in Austin builds custom wood crates to the exact dimensions of your instrument. We have shipped uprights, baby grands, and full concert grands, within Austin, across Texas, and to other states. Every crate we build for a piano is designed to survive the freight carrier&apos;s handling, because we know what happens on a loading dock.
            </p>
            <p>
              If you are considering piano shipping in Austin, the most important thing you can do is get a quote from a company that actually builds custom crates. Pad-wrap alone is not sufficient for long-distance transport, and a damaged piano is not a recoverable situation. Get it crated properly the first time.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Get a Piano Shipping Quote</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> or fill out our contact form. Share the piano type, dimensions, and destination and we will respond fast, usually within a few hours.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Get a Free Quote →
              </Link>
            </div>
          </article>
        </section>

        {/* Related Articles */}
        <section className="py-12 px-4 bg-grey-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-4">
              <Link href="/blog/ship-large-furniture-texas" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">How to Ship Large Furniture Across Texas</h3>
                <p className="text-grey-600 text-sm">Complete guide to custom crating and transporting large furniture pieces anywhere in Texas.</p>
              </Link>
              <Link href="/services/furniture" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">Custom Furniture Shipping &amp; Crating in Austin</h3>
                <p className="text-grey-600 text-sm">White-glove crating and transport for antiques, heirlooms, and valuable furniture pieces.</p>
              </Link>
              <Link href="/blog/what-is-white-glove-shipping" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">What Is White-Glove Shipping?</h3>
                <p className="text-grey-600 text-sm">A plain-English explainer on white-glove delivery services and when they make sense.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
