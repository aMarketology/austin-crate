/**
 * Advanced Robots Meta Tag Configuration
 * Enterprise-level indexing directives (WordPress/Duda equivalent)
 * 
 * Usage: Import and spread into page metadata
 * Example: export const metadata = { ...advancedRobots.index }
 */

export const advancedRobots = {
  // Standard indexable pages (most pages)
  index: {
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  },

  // High-priority pages (homepage, main services)
  indexPriority: {
    robots: {
      index: true,
      follow: true,
      nocache: true, // Fresh content for high-priority pages
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  },

  // Thank you pages (should not be indexed)
  noindex: {
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
  },

  // Admin/API pages (completely block)
  noindexNofollow: {
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  },

  // Location pages (local SEO optimization)
  locationOptimized: {
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': 300, // Longer snippets for location pages
      },
    },
  },

  // Resource/blog pages (content marketing)
  contentOptimized: {
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  },
}

/**
 * Generate page-specific robots directives
 * More granular control than preset configs
 */
export function generateRobots(options: {
  index?: boolean
  follow?: boolean
  nocache?: boolean
  maxSnippet?: number
  maxImagePreview?: 'none' | 'standard' | 'large'
}) {
  return {
    robots: {
      index: options.index ?? true,
      follow: options.follow ?? true,
      nocache: options.nocache ?? false,
      googleBot: {
        index: options.index ?? true,
        follow: options.follow ?? true,
        'max-snippet': options.maxSnippet ?? -1,
        'max-image-preview': options.maxImagePreview ?? 'large',
      },
    },
  }
}
