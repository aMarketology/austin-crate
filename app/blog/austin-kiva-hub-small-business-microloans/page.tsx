import { Metadata } from 'next'
import SEOWrapper from '@/app/components/SEOWrapper'
import BlogSeoAtx from '@/app/components/BlogSeoAtx'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/austin-kiva-hub-small-business-microloans'

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

export default function AustinKivaHubBlog() {
  return (
    <SEOWrapper slug={SLUG}>
      <BlogSeoAtx
        title="City of Austin Launches Kiva Hub to Financially Support Small Business Owners"
        date="March 24, 2026"
        isoDate="2026-03-24"
        author="Laurel Pinchback Austin"
        category="Local Business"
        readTime="3 min read"
        description="Austin becomes the latest city to partner with global nonprofit Kiva, launching a crowdfunded microloan program offering 0% interest loans from $1,000 to $15,000 — with no minimum credit score required."
      >
        <p className="lead text-xl text-gray-700 mb-8">
          <strong>AUSTIN, Texas —</strong> A new funding resource for small business owners has been announced by the
          City of Austin. In partnership with global nonprofit{' '}
          <a
            href="https://spectrumlocalnews.com/tx/austin/news/2026/03/24/city-of-austin-launches-hub-to-financially-support-small-business-owners"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kiva
          </a>
          , Austin will launch its first &ldquo;Kiva Hub,&rdquo; providing crowdfunded microloans to local entrepreneurs.
        </p>

        <h2>What Is the Kiva Hub Program?</h2>
        <p>
          The program offers <strong>0% interest and no fees</strong> for loans ranging from{' '}
          <strong>$1,000 to $15,000</strong>. Critically, the loans have{' '}
          <strong>no minimum credit score requirement</strong> — removing one of the most common barriers that prevents
          small business owners from accessing traditional financing.
        </p>
        <p>
          The loans are crowdfunded, meaning the capital comes directly from the local community and a global network of
          Kiva lenders worldwide. This model allows anyone — from an Austin neighbour to an international supporter — to
          back a local business they believe in.
        </p>

        <h2>Key Loan Details at a Glance</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Feature</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Loan Range', '$1,000 – $15,000'],
                ['Interest Rate', '0%'],
                ['Fees', 'None'],
                ['Credit Score Minimum', 'None'],
                ['Funding Model', 'Crowdfunded via local community & global lenders'],
                ['Program Partner', 'Kiva (global nonprofit)'],
              ].map(([feature, detail]) => (
                <tr key={feature} className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                  <td className="px-4 py-3 text-gray-700">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>City Leadership on the Launch</h2>
        <p>
          Deputy Director of Austin Economic Development <strong>Anthony Segura</strong> highlighted the broader
          mission behind the partnership:
        </p>
        <blockquote>
          <p>
            &ldquo;Partnering with Kiva showcases our shared commitment to empower small business owners — regardless of
            background.&rdquo;
          </p>
        </blockquote>
        <p>
          Segura also noted how the program extends Austin&apos;s economic reach globally:
        </p>
        <blockquote>
          <p>
            &ldquo;This collaboration increases opportunities for our community to back local visionaries and connects our
            city to an international network of economic innovation.&rdquo;
          </p>
        </blockquote>

        <h2>Why This Matters for Austin Entrepreneurs</h2>
        <p>
          Access to capital is consistently cited as one of the top challenges facing small business owners, particularly
          for entrepreneurs from underserved communities who may lack credit history or collateral. The Kiva Hub model
          sidesteps traditional bank lending entirely — instead relying on community trust and a proven global crowdfunding
          platform that has deployed over $2 billion in loans across 90+ countries.
        </p>
        <p>
          For Austin&apos;s growing community of independent business owners — from food truck operators to boutique
          retailers to specialty freight and logistics startups — this program represents a meaningful new on-ramp to
          growth capital.
        </p>

        <p>
          <em>
            Source:{' '}
            <a
              href="https://spectrumlocalnews.com/tx/austin/news/2026/03/24/city-of-austin-launches-hub-to-financially-support-small-business-owners"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spectrum News Austin — City of Austin launches hub to financially support small business owners
            </a>
            , reported by Laurel Pinchback Austin, March 24, 2026.
          </em>
        </p>
      </BlogSeoAtx>
    </SEOWrapper>
  )
}
