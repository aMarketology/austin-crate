import { Metadata } from 'next'
import Link from 'next/link'
import SEOWrapper from '@/app/components/SEOWrapper'
import BlogSeoAtx from '@/app/components/BlogSeoAtx'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/moveoutatx-austin-resource-recovery-returns-in-partnership-to-ut-office-of-sustainability'

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
  }
}

export default function MoveOutATXBlog() {
  return (
    <SEOWrapper slug={SLUG}>
      <BlogSeoAtx
        title="MoveOutATX and Free Furniture Market Return for Summer 2026"
        date="March 25, 2026"
        isoDate="2026-03-25"
        author="Austin Crate & Freight"
        category="Community"
        readTime="4 min read"
        description="Austin Resource Recovery, in partnership with the UT Office of Sustainability, confirms MoveOutATX returns to West Campus in late July 2026, diverting tons of reusable items from area landfills."
      >
        <p className="lead text-xl text-grey-700 mb-8">
          <strong>AUSTIN, TX , </strong> Austin Resource Recovery, in partnership with the UT Office of Sustainability,
          has confirmed that MoveOutATX will return to the West Campus area in late July 2026. The initiative aims to divert
          tons of reusable items from landfills during the heavy student move-out season, providing donation stations and the
          popular Free Furniture Market.
        </p>
        <p>
          While specific operational hours and precise 2026 dates are typically finalized in late spring, the program
          traditionally runs during the final week of July to coincide with peak lease turnovers.
        </p>

        <h2>Donation Stations: Drop-Off Details</h2>
        <p>
          Students and residents can drop off gently used items at several pop-up stations throughout West Campus.
          Historically, these stations are open daily from 11:00 a.m. to 6:00 p.m. during the event window.
        </p>

        <h3>Accepted Items</h3>
        <ul>
          <li>Gently used furniture and housewares</li>
          <li>Clothing, towels, and bedding (even if torn or stained)</li>
          <li>Cleaning supplies (open containers accepted)</li>
          <li>Unopened, non-perishable food and toiletries</li>
          <li>Craft and office supplies</li>
        </ul>

        <p>
          <strong>Not Accepted:</strong> Large appliances, broken or heavily soiled furniture, bags of trash, and
          prescription medications.
        </p>

        <h2>The Free Furniture Market</h2>
        <p>
          The Free Furniture Market allows any Austin resident to pick up donated furniture at no cost. The market is
          historically held at the UT Whitaker Courts Parking Lot (287 W. 51st St., near the tennis courts).
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Feature</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Market Guidelines</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Availability', 'First-come, first-served.'],
                ['Ticketing', 'Tickets establish place-in-line; usually distributed starting at 6:00 p.m.'],
                ['Limits', 'Typically limited to two items per person.'],
                ['Requirements', 'Must be 18+ (or with a guardian) and sign a liability waiver.'],
                ['Transport', 'You must be able to load and move items yourself, bring a truck or dolly.'],
              ].map(([feature, guideline]) => (
                <tr key={feature} className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                  <td className="px-4 py-3 text-gray-700">{guideline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Impact and Partnerships</h2>
        <p>
          Since its inception, MoveOutATX has diverted over <strong>249 tons</strong> of material from local landfills , 
          roughly the weight of 50 African elephants. The program partners with several local reuse organizations, including:
        </p>
        <ul>
          <li>Austin Creative Reuse</li>
          <li>Goodwill Central Texas</li>
          <li>UT Outpost</li>
          <li>The SAFE Alliance</li>
          <li>Salvation Army Family Stores</li>
        </ul>

        <h2>How to Get Involved</h2>
        <ul>
          <li>
            <strong>Volunteers:</strong> Opportunities to help at donation stations or the furniture market will open in
            early summer 2026.
          </li>
          <li>
            <strong>Updates:</strong> Residents are encouraged to check{' '}
            <a href="https://www.austintexas.gov/department/austin-resource-recovery" target="_blank" rel="noopener noreferrer">
              MoveOutATX.org
            </a>{' '}
            as the summer approaches for the finalized list of 2026 drop-off locations.
          </li>
        </ul>

        <div className="not-prose mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
          <h3 className="text-lg font-bold text-emerald-900 mb-2">🚛 Moving Out This Summer?</h3>
          <p className="text-emerald-800 text-sm mb-4">
            If you have furniture or large items that won&apos;t fit in your car for donation drop-off, Austin Crate &amp; Freight
            offers white-glove pickup and specialty shipping throughout Central Texas. Whether you&apos;re relocating or
            passing items along, we can help get them where they need to go.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-emerald/90 transition-colors"
          >
            Get a Free Shipping Quote →
          </Link>
        </div>
      </BlogSeoAtx>
    </SEOWrapper>
  )
}