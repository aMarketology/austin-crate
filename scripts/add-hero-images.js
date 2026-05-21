#!/usr/bin/env node
/**
 * Adds a hero image column to all service sub-pages that don't already have one.
 * Transforms the single-column hero into a 2-column grid matching the parent page pattern.
 */

const fs = require('fs')
const path = require('path')

// Image mapping by page category/slug
const imageMap = {
  // Fine Art
  'painting-shipping': '/IMG_3832_1681922619689.jpg',
  'sculpture-shipping': '/IMG_4196_1695841417957.jpg',
  'glass-art-shipping': '/IMG_3954_1686069785125.jpg',
  'fragile-item-shipping': '/IMG_3979_1686773817157.jpg',
  'museum-display-shipping': '/IMG_3832_1681922619689.jpg',
  'gallery-exhibit-shipping': '/IMG_4446_1703172460423.jpg',
  'art-installation-shipping': '/IMG_4196_1695841417957.jpg',
  'rare-collectibles-shipping': '/IMG_3954_1686069785125.jpg',
  'antique-artifacts-shipping': '/IMG_5091_1714149760004.jpg',
  // Furniture
  'designer-sofas-sectionals': '/2.jpg',
  'dining-tables-sets': '/IMG_3748.jpg',
  'marble-stone-furniture': '/IMG_3760.jpg',
  'grandfather-clock-shipping': '/IMG_3770.jpg',
  'outdoor-patio-furniture': '/IMG_3112.jpg',
  'bedroom-furniture': '/IMG_3114.jpg',
  'cabinets-credenzas': '/IMG_3105.jpg',
  'custom-handmade-furniture': '/IMG_3611.jpg',
  'designer-chairs': '/2.jpg',
  'executive-office-furniture': '/IMG_3748.jpg',
  'oversized-heavy-furniture': '/1.jpg',
  'antique-furniture-shipping': '/IMG_5091_1714149760004.jpg',
  'antique-heirloom-furniture': '/IMG_3954_1686069785125.jpg',
  // Heavy Items
  'pool-table-shipping': '/IMG_3112.jpg',
  'motorcycle-crating': '/IMG_3114.jpg',
  'heavy-equipment-austin': '/1.jpg',
  // Medical Equipment
  'diagnostic-devices': '/IMG_3979_1686773817157.jpg',
  'imaging-equipment': '/IMG_4446_1703172460423.jpg',
  'lab-equipment': '/IMG_3105.jpg',
  'sensitive-electronics': '/IMG_3611.jpg',
  'surgical-equipment': '/IMG_4196_1695841417957.jpg',
  // Shipping & Crating
  'machinery-manufacturing-equipment': '/1.jpg',
  'audio-equipment-studio-gear': '/IMG_3832_1681922619689.jpg',
  'aerospace-specialty-parts': '/3.jpg',
  'large-custom-built-objects': '/IMG_3760.jpg',
  'large-tvs-display-panels': '/IMG_3770.jpg',
  'oversized-one-off-items': '/1.jpg',
  'semiconductor-precision-tech': '/3.jpg',
  'servers-it-hardware': '/IMG_3611.jpg',
  'trade-show-booths-displays': '/IMG_3748.jpg',
  // Oversized
  'when-carriers-refuse': '/1.jpg',
}

const altMap = {
  'painting-shipping': 'Custom crating for painting shipping Austin Texas',
  'sculpture-shipping': 'Sculpture crating and shipping Austin Texas',
  'glass-art-shipping': 'Glass art shipping and crating Austin Texas',
  'fragile-item-shipping': 'Fragile item crating and shipping Austin Texas',
  'museum-display-shipping': 'Museum display shipping Austin Texas',
  'gallery-exhibit-shipping': 'Gallery exhibit shipping Austin Texas',
  'art-installation-shipping': 'Art installation shipping Austin Texas',
  'rare-collectibles-shipping': 'Rare collectibles crating Austin Texas',
  'antique-artifacts-shipping': 'Antique artifact shipping Austin Texas',
  'designer-sofas-sectionals': 'Designer sofa and sectional shipping Austin Texas',
  'dining-tables-sets': 'Dining table shipping and crating Austin Texas',
  'marble-stone-furniture': 'Marble and stone furniture shipping Austin Texas',
  'grandfather-clock-shipping': 'Grandfather clock shipping Austin Texas',
  'outdoor-patio-furniture': 'Outdoor patio furniture shipping Austin Texas',
  'bedroom-furniture': 'Bedroom furniture shipping and crating Austin Texas',
  'cabinets-credenzas': 'Cabinet and credenza shipping Austin Texas',
  'custom-handmade-furniture': 'Custom handmade furniture shipping Austin Texas',
  'designer-chairs': 'Designer chair shipping Austin Texas',
  'executive-office-furniture': 'Executive office furniture shipping Austin Texas',
  'oversized-heavy-furniture': 'Oversized heavy furniture shipping Austin Texas',
  'antique-furniture-shipping': 'Antique furniture shipping and crating Austin Texas',
  'antique-heirloom-furniture': 'Antique heirloom furniture shipping Austin Texas',
  'pool-table-shipping': 'Pool table shipping and crating Austin Texas',
  'motorcycle-crating': 'Motorcycle crating and shipping Austin Texas',
  'heavy-equipment-austin': 'Heavy equipment shipping Austin Texas',
  'diagnostic-devices': 'Medical diagnostic device shipping Austin Texas',
  'imaging-equipment': 'Medical imaging equipment shipping Austin Texas',
  'lab-equipment': 'Laboratory equipment shipping Austin Texas',
  'sensitive-electronics': 'Sensitive electronics crating Austin Texas',
  'surgical-equipment': 'Surgical equipment shipping Austin Texas',
  'machinery-manufacturing-equipment': 'Machinery and manufacturing equipment shipping Austin Texas',
  'audio-equipment-studio-gear': 'Audio equipment studio gear shipping Austin Texas',
  'aerospace-specialty-parts': 'Aerospace specialty parts shipping Austin Texas',
  'large-custom-built-objects': 'Large custom built object crating Austin Texas',
  'large-tvs-display-panels': 'Large TV and display panel shipping Austin Texas',
  'oversized-one-off-items': 'Oversized one-off item shipping Austin Texas',
  'semiconductor-precision-tech': 'Semiconductor precision tech shipping Austin Texas',
  'servers-it-hardware': 'Server and IT hardware shipping Austin Texas',
  'trade-show-booths-displays': 'Trade show booth shipping Austin Texas',
  'when-carriers-refuse': 'Oversized shipping when carriers refuse Austin Texas',
}

function processFile(filePath) {
  const slug = path.basename(path.dirname(filePath))
  const src = imageMap[slug]
  const alt = altMap[slug] || `Specialty shipping ${slug} Austin Texas`

  if (!src) {
    console.log(`  SKIP (no image mapping): ${slug}`)
    return false
  }

  let content = fs.readFileSync(filePath, 'utf8')

  // Skip if already has next/image import (already has hero image)
  if (content.includes("from 'next/image'") || content.includes('from "next/image"')) {
    console.log(`  SKIP (already has Image): ${slug}`)
    return false
  }

  // Add Image import after the last import line
  content = content.replace(
    /(import [^\n]+\n)(export |const SLUG)/,
    `$1import Image from 'next/image'\n$2`
  )

  // Find the hero section inner div and wrap in grid
  // Pattern: <div className="max-w-5xl mx-auto">\n    <Link  OR  <div className="max-w-5xl mx-auto">\n    <div className="inline-flex
  // We need to wrap everything before </section> in a grid div

  // Strategy: find the hero section, identify the inner div content, wrap in grid + add image
  // The hero ends just before a `{/* ` comment or `</div>\n        </section>`

  // Find the hero section block
  const heroSectionRegex = /(<section className="bg-gradient-to-br from-grey-900 to-grey-800[^>]*>\s*<div className="max-w-5xl mx-auto">)([\s\S]*?)(<\/div>\s*<\/section>)/

  const match = content.match(heroSectionRegex)
  if (!match) {
    console.log(`  SKIP (hero pattern not found): ${slug}`)
    return false
  }

  const heroOpen = match[1]
  const heroInner = match[2]
  const heroClose = match[3]

  // Build the replacement with 2-column grid
  const imageBlock = `
            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-grey-700 shadow-xl">
              <Image
                src="${src}"
                alt="${alt}"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
            </div>`

  const newHero = `${heroOpen}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>${heroInner}</div>${imageBlock}
          </div>
${heroClose}`

  content = content.replace(heroSectionRegex, newHero)

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`  ✓ Updated: ${slug}`)
  return true
}

// Find all service sub-pages (3 levels deep: /services/category/slug/page.tsx)
const servicesDir = path.join(__dirname, '../app/services')

function findSubPages(dir, depth = 0) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (depth < 2) {
        files.push(...findSubPages(path.join(dir, entry.name), depth + 1))
      }
    } else if (entry.name === 'page.tsx' && depth === 2) {
      files.push(path.join(dir, entry.name))
    }
  }
  return files
}

const subPages = findSubPages(servicesDir)
console.log(`Found ${subPages.length} sub-pages to process...\n`)

let updated = 0
let skipped = 0
for (const file of subPages) {
  const result = processFile(file)
  if (result) updated++
  else skipped++
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`)
