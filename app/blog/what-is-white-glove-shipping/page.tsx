import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/what-is-white-glove-shipping'

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
      'white glove shipping explained',
      'what is white glove delivery',
      'white glove shipping Austin TX',
      'white glove shipping service',
      'premium delivery service Austin',
      'specialty shipping Austin Texas',
    ],
  }
}

export default function WhiteGloveShippingBlog() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is White-Glove Shipping? (And Is It Worth It?)',
    description:
      'A plain-English explanation of white-glove shipping, what it includes, when to use it, and whether the cost is worth it for your specific item.',
    image: 'https://austincrate.com/og-default.jpg',
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    author: [
      {
        '@type': 'Person',
        name: 'Max-de',
        url: 'https://austincrate.com/about',
        jobTitle: 'Marketing Director',
      },
      {
        '@type': 'Person',
        name: 'Peter Hall',
        url: 'https://austincrate.com/about',
        jobTitle: 'Owner',
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
              What Is White-Glove Shipping? (And Is It Worth It?)
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              A plain-English explanation of white-glove delivery, what it includes, when to choose it, and how it works in Austin, TX
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 March 25, 2026</span>
              <span>
                ✍️{' '}
                <Link href="/about" className="text-emerald hover:underline">
                  Max-de
                </Link>{' '}
                &amp;{' '}
                <Link href="/about" className="text-emerald hover:underline">
                  Peter Hall
                </Link>
              </span>
              <span>🚚 Shipping Guide</span>
              <span>⏱️ 5 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-grey-700 mb-8">
              If you have ever shopped for furniture, art, or specialty items online, you have probably seen &ldquo;white-glove delivery&rdquo; listed as an upgrade option. But what does it actually include? Is it just marketing language, or is there a real difference in how your item is handled? This guide explains what white-glove shipping is, what you are actually paying for, and whether it makes sense for your specific situation.
            </p>

            <h2>The Short Definition</h2>
            <p>
              White-glove shipping is a premium delivery and handling service where trained specialists, not standard freight handlers, manage every aspect of your shipment. The term comes from the idea of handling items so carefully that you could do it wearing white gloves without leaving a mark.
            </p>
            <p>In practice, white-glove service typically includes some or all of the following:</p>
            <ul>
              <li>Custom packaging or crating at the origin</li>
              <li>Dedicated or climate-controlled transport</li>
              <li>Delivery by a trained two-person team (not a solo driver)</li>
              <li>Inside delivery to your room of choice</li>
              <li>Product placement and installation if applicable</li>
              <li>Removal of all packaging materials</li>
            </ul>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">🤍 What White-Glove Delivery Includes</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li>✅ <strong>Custom crating/packaging</strong> at origin, not just a blanket wrap</li>
                <li>✅ <strong>Assigned specialist crew</strong>, same team handles origin through delivery</li>
                <li>✅ <strong>Inside delivery</strong>, through the door, to the room, not curbside</li>
                <li>✅ <strong>Placement &amp; assembly</strong>, positioned correctly, not just left in a hallway</li>
                <li>✅ <strong>Debris removal</strong>, packaging materials leave with the crew</li>
                <li>✅ <strong>Photo documentation</strong>, condition recorded before and after</li>
              </ul>
            </div>

            <h2>What White-Glove Shipping Is NOT</h2>
            <p>
              White-glove is often misused as a marketing term. Here is what it does <strong>not</strong> automatically mean:
            </p>
            <ul>
              <li>
                <strong>It is not necessarily overnight or expedited.</strong> White-glove refers to handling quality, not speed.
              </li>
              <li>
                <strong>It is not the same as &ldquo;threshold delivery.&rdquo;</strong> Threshold delivery means the carrier drops it inside your door. White-glove means placing it in the room.
              </li>
              <li>
                <strong>It does not include automatic insurance coverage.</strong> White-glove providers may still have declared value limits and exclusions. Always confirm what coverage is included.
              </li>
              <li>
                <strong>It does not solve bad packaging.</strong> If the item was improperly crated before it got to the white-glove carrier, premium handling still cannot protect it.
              </li>
            </ul>

            <h2>When to Choose White-Glove Shipping</h2>
            <p>White-glove service makes sense when any of the following are true:</p>

            <h3>The Item Is High Value or Irreplaceable</h3>
            <p>
              Fine art, antique furniture, medical equipment, and musical instruments fall into this category. The cost difference between standard freight and white-glove is almost always justified when a claim would result in a loss you cannot recover from, financially or emotionally.
            </p>

            <h3>The Item Requires Professional Assembly or Placement</h3>
            <p>
              Large furniture, equipment that needs to be connected or calibrated, and items with multiple components all benefit from white-glove because the delivery team actually knows what they are doing.
            </p>

            <h3>The Destination Has Access Challenges</h3>
            <p>
              Stairways, freight elevators, narrow doorways, parking restrictions, all of these require experienced crews. Standard freight drivers are not expected to navigate these situations. White-glove crews are.
            </p>

            <h3>You Are Moving Business-Critical Equipment</h3>
            <p>
              Medical devices, production machinery, trade show displays, and IT infrastructure often need white-glove handling both for protection and because there is a real cost of downtime if anything is delayed or damaged.
            </p>

            <h2>White-Glove vs. Standard Freight: The Real Difference</h2>
            <div className="bg-grey-100 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-4 text-grey-900">📊 Comparison: White-Glove vs. Standard Freight</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-grey-700">
                  <thead>
                    <tr className="border-b border-grey-300">
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Factor</th>
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Standard Freight</th>
                      <th className="text-left py-2 font-bold text-grey-900">White-Glove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4 font-medium">Packaging</td>
                      <td className="py-2 pr-4">Shipper-provided, pallet or blanket</td>
                      <td className="py-2">Custom crating included</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4 font-medium">Handling</td>
                      <td className="py-2 pr-4">Multiple handlers, forklift, dock contact</td>
                      <td className="py-2">Dedicated specialist team</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4 font-medium">Delivery point</td>
                      <td className="py-2 pr-4">Curbside or loading dock</td>
                      <td className="py-2">Room of choice, inside</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4 font-medium">Packaging removal</td>
                      <td className="py-2 pr-4">No</td>
                      <td className="py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium">Best for</td>
                      <td className="py-2 pr-4">Palletized goods, non-fragile cargo</td>
                      <td className="py-2">Fine art, furniture, fragile or high-value items</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2>What Does White-Glove Shipping Cost in Austin?</h2>
            <p>
              White-glove shipping costs more than standard freight, typically 30–80% over a standard LTL shipment, depending on the service level, item size, and route. Some Austin benchmarks:
            </p>
            <ul>
              <li><strong>Local Austin white-glove delivery (under 30 miles):</strong> $150-$400 depending on complexity</li>
              <li><strong>Austin to Houston or Dallas:</strong> $400-$1,200 for furniture-sized items</li>
              <li><strong>Full white-glove with custom crating for fine art or antiques:</strong> $600-$3,000+ depending on item size and distance</li>
            </ul>
            <p>
              The right question is not just &ldquo;what does it cost?&rdquo; but &ldquo;what does damage or loss cost?&rdquo; For most items that genuinely need white-glove shipping, the premium is small relative to the value at risk.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">Is White-Glove Worth It?</p>
              <p className="text-grey-700 mb-3">
                <strong>Yes</strong>, for fine art, antique furniture, pianos, medical equipment, and anything with a replacement cost or sentimental value that outweighs the service premium.
              </p>
              <p className="text-grey-700">
                <strong>No</strong>, for standard consumer goods, flat-pack furniture, or items that are easily and inexpensively replaceable.
              </p>
            </div>

            <h2>Who Uses White-Glove Shipping in Austin, TX</h2>
            <p>The Austin area customers who most commonly request white-glove shipping from Austin Crate &amp; Freight:</p>
            <ul>
              <li><strong>Interior designers and decorators</strong>, moving client furniture into staged homes or permanent installations</li>
              <li><strong>Art collectors and galleries</strong>, shipping paintings, sculpture, and prints to collectors, exhibitions, and auction houses</li>
              <li><strong>Homeowners relocating</strong>, especially those with antiques, custom dining sets, or irreplaceable heirlooms</li>
              <li><strong>Medical offices and clinics</strong>, imaging equipment, specialized devices, and procedure room installations</li>
              <li><strong>Musicians and music schools</strong>, grand piano moves within Austin and statewide</li>
              <li><strong>Trade show exhibitors</strong>, display fixtures, booth components, and promotional equipment that must arrive perfect</li>
            </ul>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Need White-Glove Shipping in Austin?</p>
              <p className="text-grey-700 mb-4">
                Austin Crate &amp; Freight provides full white-glove shipping services, custom crating, specialist handling, and careful delivery anywhere in Texas. Call <strong>(512) 240-9818</strong> or request a quote online.
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
                <p className="text-grey-600 text-sm">Custom crating, costs, and tips for shipping large furniture anywhere in the Lone Star State.</p>
              </Link>
              <Link href="/blog/cost-to-ship-heavy-items-austin" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">How Much Does It Cost to Ship Heavy Items in Austin?</h3>
                <p className="text-grey-600 text-sm">Full 2026 pricing guide for specialty shipping in Austin, Texas.</p>
              </Link>
              <Link href="/services/fine-art" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">Fine Art Shipping &amp; Custom Crating in Austin</h3>
                <p className="text-grey-600 text-sm">Museum-quality crating and white-glove transport for paintings, sculpture, and more.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
