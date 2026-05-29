import Link from 'next/link'

/**
 * AuthorCard — reusable author bio block for blog post footers.
 * Renders inside the article prose area (use "not-prose" wrapper).
 *
 * Props:
 *   name        – Display name (e.g. "Peter Hall")
 *   title       – Job title (e.g. "Owner & Master Crate Builder")
 *   bio         – 1–2 sentence expertise statement
 *   authorUrl   – Link to /authors/[slug] page
 *   initials    – 2-char initials for the avatar circle (e.g. "PH")
 *   accentColor – Tailwind bg class for the avatar circle (default: 'bg-emerald-600')
 */
interface AuthorCardProps {
  name: string
  title: string
  bio: string
  authorUrl: string
  initials: string
  accentColor?: string
}

export default function AuthorCard({
  name,
  title,
  bio,
  authorUrl,
  initials,
  accentColor = 'bg-emerald-600',
}: AuthorCardProps) {
  return (
    <div className="not-prose mt-12 pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Avatar */}
        <Link href={authorUrl} aria-label={`About ${name}`}>
          <div
            className={`w-14 h-14 rounded-full ${accentColor} flex items-center justify-center text-white font-bold text-lg shrink-0 hover:opacity-90 transition-opacity`}
          >
            {initials}
          </div>
        </Link>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
            Written by
          </p>
          <Link
            href={authorUrl}
            className="font-bold text-gray-900 text-base hover:text-emerald-600 transition-colors"
          >
            {name}
          </Link>
          <p className="text-sm text-gray-500 mt-0.5">{title}</p>
          <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{bio}</p>
        </div>

        {/* Profile link */}
        <Link
          href={authorUrl}
          className="shrink-0 text-xs font-semibold text-emerald-600 border border-emerald-200 rounded-full px-4 py-1.5 hover:bg-emerald-50 transition-colors"
        >
          Full Profile →
        </Link>
      </div>
    </div>
  )
}
