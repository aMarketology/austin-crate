import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/custom-crating-vs-standard-boxes'

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
      'custom crating vs standard boxes',
      'when do you need a custom crate',
      'custom wood crate Austin TX',
      'shipping crate vs cardboard box',
      'custom crating Austin',
      'specialty packaging Austin Texas',
    ],
  }
}

export default function CustomCratingVsStandardBoxes() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Custom Crating vs. Standard Boxes: When You Actually Need a Crate',
    description:
      'Not everything needs a custom wood crate   but some items absolutely do. A clear breakdown of when to crate vs. when standard packaging is fine, with real examples.',
    image: 'https://austincrate.com/og-default.jpg',
    datePublished: '2026-03-28',
    dateModified: '2026-03-28',
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
              Custom Crating vs. Standard Boxes: When You Actually Need a Crate
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              Most things ship fine in a box. Some things absolutely cannot. Here&apos;s how to tell the difference   and avoid a costly mistake.
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 March 28, 2026</span>
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
              <span>📦 Packaging Guide</span>
              <span>⏱️ 6 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-grey-700 mb-8">
              We get this question every week: &ldquo;Do I really need a custom crate, or can this go in a double-walled box?&rdquo; Honest answer: it depends. Custom wood crating is not always necessary   but when it is, there is no substitute. Using a box when you need a crate is how expensive things get destroyed. This guide cuts through the guesswork.
            </p>

            <h2>The Short Answer: Use a Crate When the Loss Would Be Catastrophic</h2>
            <p>
              If the item is expensive, irreplaceable, structurally fragile, or too large/heavy for standard cardboard to support   you need a crate. If it is standard consumer goods, small electronics, or items that are cheap to replace   a quality box with the right void fill is often fine.
            </p>
            <p>The real question is not &ldquo;what costs less to pack?&rdquo;   it is &ldquo;what does damage or loss actually cost you?&rdquo;</p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">📦 Quick Decision Framework</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li>✅ <strong>Value over $500?</strong> Consider custom crating.</li>
                <li>✅ <strong>Irreplaceable (antique, art, heirloom)?</strong> Crate it.</li>
                <li>✅ <strong>Over 50 lbs or 108&quot; in combined dimensions?</strong> Standard carriers require crating or specialty freight.</li>
                <li>✅ <strong>Fragile internal components (mechanics, electronics, glass)?</strong> Crate or specialty foam packaging.</li>
                <li>✅ <strong>Multiple legs or protrusions that could break?</strong> Crate it.</li>
                <li>⬜ <strong>Under $200 and easily replaceable?</strong> A good box with proper void fill is probably fine.</li>
              </ul>
            </div>

            <h2>What Is a Custom Wood Crate?</h2>
            <p>
              A custom wood crate is a rigid structural container built specifically around your item. It is cut from plywood or OSB to the exact dimensions of the piece, assembled with screws instead of nails for consistent clamping strength, and lined with foam, padding, or blocking to prevent internal movement.
            </p>
            <p>
              Unlike a double-walled cardboard box   which relies on the box itself and void fill to protect the item   a wood crate provides rigid structural protection that cardboard cannot match. A wood crate will not collapse under a 200 lb pallet placed on top of it. Cardboard will.
            </p>

            <h2>What Standard Cardboard Boxes Are Good For</h2>
            <p>
              Cardboard boxes work well for:
            </p>
            <ul>
              <li>Consumer goods under 50 lbs in standard dimensions</li>
              <li>Items that are not fragile or have robust factory packaging</li>
              <li>Things where the retail replacement cost is low</li>
              <li>Shipments via standard parcel carriers (UPS, FedEx, USPS) within their size limits</li>
            </ul>
            <p>
              Even within these categories, how you pack matters. A poorly packed box with bad void fill will damage items that would have survived perfectly in a properly packed box. The box is not the problem   insufficient internal support is.
            </p>

            <h2>What Custom Crating Is Required For</h2>

            <h3>Fine Art   Paintings, Sculpture, Prints</h3>
            <p>
              A painting on stretched canvas shipped in a box almost always arrives with corner dents, cracked gesso, or worse. The canvas has no rigid support behind it   one compression event on a loading dock and the damage is done. A crate with a built-in face frame and interior foam spacers eliminates this risk entirely.
            </p>
            <p>
              For sculpture and three-dimensional art, a crate lets you build a custom foam cradle that holds the piece in orientation, preventing it from shifting, tipping, or contacting hard surfaces.
            </p>

            <h3>Antique and High-Value Furniture</h3>
            <p>
              An 18th century French cabinet going from Austin to New York cannot go in a moving blanket on an LTL truck. The veneer will lift. The finish will scratch. The legs will crack. A crate built to fit the piece   with foam blocking at every structural stress point   is the only safe option.
            </p>

            <h3>Items Over 70 lbs</h3>
            <p>
              UPS and FedEx officially cap their standard Ground service at 70 lbs. Above that, items get surcharged and reclassified. More importantly, heavy items in cardboard boxes will blow out the bottom. Wood crates are rated for the actual weight of the contents.
            </p>

            <h3>Items with Mechanical or Electronic Components</h3>
            <p>
              Medical equipment, industrial machinery, audio gear with tubes, vintage electronics   any item where the internal components are sensitive to shock or vibration   benefits strongly from custom crating with vibration-damping foam. Cardboard provides no meaningful vibration attenuation.
            </p>

            <h3>Items with Legs or Protruding Elements</h3>
            <p>
              Piano legs. Dining table legs. Lamp bases. Chair arms. Any element that extends from the body of an item is a fracture point in transit. Standard carriers have no mechanism to prevent items from tipping or being compressed at bad angles. A crate eliminates all of this by supporting the entire piece in a rigid shell.
            </p>

            <h2>The Hidden Cost of Under-Packaging</h2>
            <p>
              The cost argument against crating usually goes: &ldquo;A crate adds $75-$350   I will just take my chances with a box.&rdquo; This logic only holds until the item arrives damaged.
            </p>
            <p>Freight insurance claim realities for under-packaged items:</p>
            <ul>
              <li>Carriers often deny claims when packaging is deemed inadequate   and &ldquo;inadequate&rdquo; is assessed post-damage by the carrier&apos;s own claim adjuster</li>
              <li>Most policies have a declared value limit that does not cover full replacement for antiques or art</li>
              <li>The &ldquo;consequential loss&rdquo; (an art installation that can no longer be displayed, a medical device that causes a clinic to close) is almost never covered</li>
            </ul>
            <p>
              A $200 crate for a $3,000 piece of furniture is not an expense   it is 6.7% insurance that the job goes right.
            </p>

            <div className="bg-grey-100 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-3 text-grey-900">📊 Cost Comparison: What Goes Wrong vs. What It Costs to Prevent It</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-grey-700">
                  <thead>
                    <tr className="border-b border-grey-300">
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Item</th>
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Crate Cost</th>
                      <th className="text-left py-2 font-bold text-grey-900">Cost of Damage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Oil painting, canvas, 24×36"</td>
                      <td className="py-2 pr-4">$120-$200</td>
                      <td className="py-2">$500-$5,000+ (irreplaceable)</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Antique dining table</td>
                      <td className="py-2 pr-4">$200-$400</td>
                      <td className="py-2">$1,000-$8,000 (refinish, repair, or total loss)</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Medical imaging device</td>
                      <td className="py-2 pr-4">$300-$600</td>
                      <td className="py-2">$5,000-$50,000+ (recalibration, replacement)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Grand piano</td>
                      <td className="py-2 pr-4">$500-$1,200</td>
                      <td className="py-2">$2,000-$full replacement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2>How Austin Crate &amp; Freight Decides What You Need</h2>
            <p>
              When you call us with a shipping job, we ask the same questions every time: What is it? How much does it weigh? What are the dimensions? How fragile is it? What is the destination? What is it worth to you?
            </p>
            <p>
              We are not going to upsell you to a $500 crate if a $120 crate and good foam blocking does the job. We are also not going to let you ship a hand-carved 19th century chest in a cardboard box because it saves money on packaging. Our reputation is built on items arriving intact   and we are protective of that.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Not Sure What Your Item Needs?</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> and describe what you are shipping. We will tell you exactly what packaging it needs and give you a quote on the spot.
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
              <Link href="/blog/prepare-furniture-for-shipping" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">How to Prepare Furniture for Shipping (Step-by-Step)</h3>
                <p className="text-grey-600 text-sm">A practical checklist for getting furniture ready for pickup and transit   before we arrive.</p>
              </Link>
              <Link href="/blog/ship-large-furniture-texas" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">How to Ship Large Furniture Across Texas</h3>
                <p className="text-grey-600 text-sm">Custom crating, costs, and tips for shipping large furniture pieces anywhere in Texas.</p>
              </Link>
              <Link href="/buy-a-crate" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">Order a Custom Crate</h3>
                <p className="text-grey-600 text-sm">Need a one-off crate for a specific item? Get a quote and order directly from our crate shop.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
