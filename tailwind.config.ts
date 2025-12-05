import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Green Shades (Primary)
        primary: '#2d5f3f',          // Deep forest green
        'primary-light': '#3d8b5c',   // Medium sage green
        'primary-dark': '#1a3d28',    // Dark hunter green
        emerald: '#50c878',           // Vibrant emerald accent
        sage: '#87a96b',              // Soft sage green
        
        // Pink Accents (Premium touch)
        rose: '#d4a5a5',              // Dusty rose
        'rose-light': '#f5e6e6',      // Light blush
        'rose-accent': '#c97b84',     // Muted coral-pink
        
        // Grey Tones (Sophistication)
        'grey-50': '#f9fafb',
        'grey-100': '#f3f4f6',
        'grey-200': '#e5e7eb',
        'grey-300': '#d1d5db',
        'grey-400': '#9ca3af',
        'grey-500': '#6b7280',
        'grey-600': '#4b5563',
        'grey-700': '#374151',
        'grey-800': '#1f2937',
        'grey-900': '#111827',
        
        // Utility
        dark: '#1a1a1a',
        darkAlt: '#2d2d2d',
        light: '#f8f9fa',
      },
    },
  },
  plugins: [],
}
export default config
