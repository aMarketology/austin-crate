/**
 * ArticleSources — reusable inline source citation component for news articles.
 *
 * Usage:
 *   <ArticleSources sources={[
 *     { label: 'DOJ Press Release', href: 'https://...', publisher: 'U.S. Department of Justice' },
 *     { label: 'TAKE IT DOWN Act Text', href: 'https://...', publisher: 'Congress.gov' },
 *   ]} />
 */

interface Source {
  /** Short human-readable title for the source, e.g. "DOJ Press Release – May 21, 2026" */
  label: string
  /** Fully-qualified external URL */
  href: string
  /** Publishing organisation, e.g. "U.S. Department of Justice" */
  publisher: string
  /** Optional: access / publish date shown to the reader */
  date?: string
}

interface ArticleSourcesProps {
  sources: Source[]
}

export default function ArticleSources({ sources }: ArticleSourcesProps) {
  return (
    <aside
      aria-label="Sources cited in this article"
      className="not-prose mt-12 pt-8 border-t border-gray-200"
    >
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
        Sources &amp; References
      </h2>
      <ol className="space-y-3">
        {sources.map((src, i) => (
          <li key={src.href} className="flex gap-3 items-start">
            {/* Citation number */}
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald/10 text-emerald text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>

            <div className="min-w-0">
              <a
                href={src.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-emerald hover:underline leading-snug break-words"
              >
                {src.label}
              </a>
              <p className="text-xs text-gray-500 mt-0.5">
                <span className="font-medium text-gray-600">{src.publisher}</span>
                {src.date && (
                  <>
                    <span className="mx-1.5 text-gray-300">·</span>
                    <time>{src.date}</time>
                  </>
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  )
}
