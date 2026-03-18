/**
 * Content Registry — Single source of truth for all page metadata.
 *
 * Every URL on the site should have an entry here. The sitemap, SEOWrapper,
 * structured data, and related-content systems all pull from this file.
 *
 * When you publish or edit a page:
 *   1. Add or update the entry below
 *   2. Set `modifiedDate` to today's date
 *
 * Last updated: 2026-02-26
 */

export interface ContentEntry {
  /** URL path, e.g. "/blog/austin-marathon-2026" */
  slug: string
  /** Full page title (also used as OG title) */
  title: string
  /** Meta description — keep under 160 characters */
  description: string
  /** ISO date string "YYYY-MM-DD" */
  publishDate: string
  /** ISO date string "YYYY-MM-DD" — update on every edit */
  modifiedDate: string
  /** Primary category for related-content matching */
  category: 'Services' | 'Locations' | 'Resources' | 'Blog' | 'Core'
  /** Topic tags for related-content matching */
  tags: string[]
  /** Author display name */
  author: string
  /** Sitemap priority 0.0–1.0 */
  priority: number
  /** How often this page changes (sitemap hint) */
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export const contentRegistry: ContentEntry[] = [
  // ── Core Pages ──────────────────────────────────────────────────────────────
  {
    slug: '/',
    title: 'Austin Specialty Shipping & Custom Crating | Furniture Crating & Heavy Pickup | Austin Crate & Freight',
    description:
      'Austin Texas specialty shipping & custom crating company. Furniture shipping and crating, fine art transport, heavy package pickup, and medical equipment shipping. Museum-quality care. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-03-07',
    category: 'Core',
    tags: ['specialty shipping', 'custom crating', 'furniture crating', 'furniture shipping and crating', 'white glove', 'Austin TX', 'fine art', 'furniture', 'medical equipment', 'heavy items'],
    author: 'Austin Crate & Freight',
    priority: 1.0,
    changeFrequency: 'weekly',
  },
  {
    slug: '/about',
    title: 'About Austin Crate & Freight | Specialty Shipping Experts Since 2010',
    description:
      "Learn about Austin Crate & Freight, Central Texas's premier white-glove specialty shipping company. Serving Austin since 2010 with museum-quality care for art, furniture, and medical equipment.",
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Core',
    tags: ['about', 'Austin Crate', 'company history', 'specialty shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/contact',
    title: 'Contact Austin Crate & Freight | Get a Free Quote',
    description:
      'Contact Austin Crate & Freight for a free quote on specialty shipping. Call (512) 240-9818 or send us a message. Serving Austin, Round Rock, Cedar Park & Central Texas.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Core',
    tags: ['contact', 'quote', 'Austin TX', 'specialty shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/gallery',
    title: 'Gallery | Austin Crate & Freight Specialty Shipping Work',
    description:
      'Browse our gallery of specialty shipping projects — custom crates for fine art, designer furniture, and medical equipment. See the quality and craftsmanship behind every shipment.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Core',
    tags: ['gallery', 'custom crating', 'fine art', 'furniture', 'medical equipment'],
    author: 'Austin Crate & Freight',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/buy-a-crate',
    title: 'Custom Wood Shipping Crates Austin TX | Buy a Crate | Austin Crate & Freight',
    description:
      'Order custom wood shipping crates in Austin, Texas. Museum-quality crating for fine art, heavy items, oversized packages, and furniture. Built to spec, fully insured. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Core',
    tags: ['custom crating Austin', 'wood crates', 'custom shipping crate', 'crating near me', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },

  // ── Services ────────────────────────────────────────────────────────────────
  {
    slug: '/services',
    title: 'Specialty Shipping Services Austin TX | Furniture, Art & Heavy Items | Austin Crate & Freight',
    description:
      'Austin, Texas specialty shipping services. Custom furniture shipping, heavy item pickup, fine art crating, oversized freight, and medical equipment transport. White-glove, fully insured.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Services',
    tags: ['specialty shipping', 'fine art', 'furniture', 'medical equipment', 'heavy items', 'oversized shipping', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    slug: '/services/fine-art',
    title: 'Fine Art Shipping Austin TX | Museum-Quality Crating & Transport',
    description:
      'Premier fine art shipping in Austin, Texas. Museum-quality crating, climate-controlled transport, expert art handlers, and full insurance. Serving galleries, collectors, and museums across Central Texas.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Services',
    tags: ['fine art shipping', 'art crating', 'museum transport', 'climate controlled', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture',
    title: 'Furniture Shipping & Crating Austin Texas | White-Glove Service | Austin Crate & Freight',
    description:
      'Expert furniture shipping and crating in Austin, Texas. Custom wood crates built in-house, white-glove pickup, disassembly & reassembly for designer, antique & heavy furniture. Scratch-free guarantee. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['furniture shipping and crating Austin Texas', 'furniture crating Austin TX', 'custom furniture crating Austin', 'furniture shipping Austin Texas', 'antique furniture shipping Texas', 'white glove furniture movers Austin', 'heavy furniture pickup Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/designer-sofas-sectionals',
    title: 'Designer Sofa & Sectional Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialist shipping and crating for designer sofas and sectionals in Austin, Texas. White-glove pickup, custom crating, and scratch-free delivery for luxury seating brands. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['designer sofa shipping Austin Texas', 'sectional shipping Austin TX', 'luxury sofa shipping Austin', 'sofa crating Austin Texas', 'white glove sofa delivery Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/antique-heirloom-furniture',
    title: 'Antique & Heirloom Furniture Shipping Austin Texas | Austin Crate & Freight',
    description: 'Expert antique and heirloom furniture shipping and crating in Austin, Texas. Period-correct handling, custom wood crates, white-glove service for irreplaceable pieces. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['antique furniture shipping Austin Texas', 'heirloom furniture shipping Austin TX', 'antique furniture crating Austin', 'vintage furniture transport Austin Texas'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/dining-tables-sets',
    title: 'Dining Table & Set Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialty shipping and crating for dining tables and sets in Austin, Texas. Large tables, chairs, china cabinets, and buffets — white-glove pickup and delivery. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['dining table shipping Austin Texas', 'dining set shipping Austin TX', 'dining table crating Austin', 'large table shipping Austin Texas', 'china cabinet shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/bedroom-furniture',
    title: 'Bedroom Furniture Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialist bedroom furniture shipping and crating in Austin, Texas. Platform beds, sleigh beds, dressers, armoires, and nightstands — white-glove pickup, disassembly & delivery. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['bedroom furniture shipping Austin Texas', 'bed frame shipping Austin TX', 'dresser shipping Austin Texas', 'armoire shipping Austin TX', 'bedroom set shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/custom-handmade-furniture',
    title: 'Custom & Handmade Furniture Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialty shipping and crating for custom and handmade furniture in Austin, Texas. One-of-a-kind pieces built by local craftsmen deserve museum-quality protection. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['custom furniture shipping Austin Texas', 'handmade furniture shipping Austin TX', 'artisan furniture shipping Austin', 'custom furniture crating Austin Texas', 'bespoke furniture transport Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/executive-office-furniture',
    title: 'Executive & Office Furniture Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialist office and executive furniture shipping and crating in Austin, Texas. Executive desks, conference tables, credenzas, and full office sets — white-glove service. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['office furniture shipping Austin Texas', 'executive desk shipping Austin TX', 'conference table shipping Austin', 'office furniture crating Austin Texas', 'credenza shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/oversized-heavy-furniture',
    title: 'Oversized & Heavy Furniture Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialist oversized and heavy furniture shipping and crating in Austin, Texas. Pieces too large or heavy for standard carriers — custom crating, liftgate, and white-glove delivery. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['oversized furniture shipping Austin Texas', 'heavy furniture shipping Austin TX', 'large furniture crating Austin', 'heavy furniture pickup Austin Texas', 'freight furniture shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/outdoor-patio-furniture',
    title: 'Outdoor & Patio Furniture Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialist outdoor and patio furniture shipping and crating in Austin, Texas. Teak, wrought iron, wicker, and high-end outdoor collections — white-glove service. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['outdoor furniture shipping Austin Texas', 'patio furniture shipping Austin TX', 'teak furniture shipping Austin', 'outdoor furniture crating Austin', 'patio set shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/designer-chairs',
    title: 'Designer Chair Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialist shipping and crating for designer chairs in Austin, Texas. Eames, Herman Miller, Knoll, Barcelona, and Bertoia chairs — white-glove pickup and delivery. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['designer chair shipping Austin Texas', 'Eames chair shipping Austin TX', 'Herman Miller shipping Austin', 'Knoll chair crating Austin', 'Barcelona chair shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/cabinets-credenzas',
    title: 'Cabinet & Credenza Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialist cabinet and credenza shipping in Austin, Texas. Display cabinets, china cabinets, media credenzas, and sideboards — custom crating and white-glove delivery. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['cabinet shipping Austin Texas', 'credenza shipping Austin TX', 'china cabinet shipping Austin', 'sideboard shipping Austin Texas', 'media credenza shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/grandfather-clock-shipping',
    title: 'Grandfather Clock Shipping Austin Texas | Austin Crate & Freight',
    description: 'Specialist grandfather clock shipping and crating in Austin, Texas. Pendulum removal, weight packaging, movement protection, and tall-case crating. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['grandfather clock shipping Austin Texas', 'grandfather clock crating Austin TX', 'antique clock shipping Austin', 'floor clock shipping Austin Texas', 'longcase clock shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/marble-stone-furniture',
    title: 'Marble & Stone Furniture Shipping Austin Texas | Austin Crate & Freight',
    description: 'Expert marble and stone furniture shipping and crating in Austin, Texas. Marble dining tables, travertine tops, granite surfaces, and carved stone pieces — safe delivery nationwide. Call (512) 240-9818.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Services',
    tags: ['marble furniture shipping Austin Texas', 'stone table shipping Austin TX', 'marble top crating Austin', 'granite furniture shipping Austin TX', 'travertine top shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/medical-equipment',
    title: 'Medical Equipment Transport Austin TX | HIPAA-Compliant Shipping',
    description:
      'HIPAA-compliant medical equipment transport in Austin, TX. Secure shipping for surgical instruments, imaging machines, lab equipment, and sensitive devices. Fully insured and bonded.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Services',
    tags: ['medical equipment', 'HIPAA', 'medical transport', 'surgical instruments', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/medical-equipment/imaging-equipment',
    title: 'Imaging Equipment Shipping Austin TX | X-Ray, MRI & CT Transport',
    description:
      'Specialist shipping for X-ray machines, MRI systems, CT scanners, and ultrasound equipment in Austin, TX. OEM-spec shock protection, orientation control, and HIPAA-compliant chain-of-custody documentation.',
    publishDate: '2026-06-01',
    modifiedDate: '2026-06-01',
    category: 'Services',
    tags: ['imaging equipment shipping', 'X-ray machine shipping Austin', 'MRI transport Austin', 'CT scanner shipping Austin', 'ultrasound shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/medical-equipment/lab-equipment',
    title: 'Lab Equipment Shipping Austin TX | Laboratory Transport Services',
    description:
      'Expert shipping for laboratory equipment in Austin, TX. Centrifuges, analyzers, microscopes, PCR machines, and biosafety cabinets transported with OEM protocols and decontamination documentation.',
    publishDate: '2026-06-01',
    modifiedDate: '2026-06-01',
    category: 'Services',
    tags: ['lab equipment shipping Austin', 'laboratory equipment transport', 'centrifuge shipping Austin', 'microscope shipping Austin', 'PCR machine shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/medical-equipment/diagnostic-devices',
    title: 'Diagnostic Device Shipping Austin TX | Patient Monitor & ECG Transport',
    description:
      'Specialist transport for diagnostic devices in Austin, TX. Patient monitors, ECG machines, analyzers, and portable diagnostics with display panel protection and HIPAA-compliant handling.',
    publishDate: '2026-06-01',
    modifiedDate: '2026-06-01',
    category: 'Services',
    tags: ['diagnostic device shipping Austin', 'patient monitor shipping Austin', 'ECG machine shipping Austin', 'diagnostic equipment transport', 'HIPAA'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/medical-equipment/surgical-equipment',
    title: 'Surgical Equipment Shipping Austin TX | OR Table & Surgical Instrument Transport',
    description:
      'Expert shipping for surgical equipment in Austin, TX. Operating tables, surgical lights, laparoscopic towers, and robotic systems with precision rigging and sterile barrier maintenance.',
    publishDate: '2026-06-01',
    modifiedDate: '2026-06-01',
    category: 'Services',
    tags: ['surgical equipment shipping Austin', 'operating table shipping Austin', 'surgical instrument transport', 'laparoscopic equipment shipping', 'OR equipment'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/medical-equipment/sensitive-electronics',
    title: 'Sensitive Medical Electronics Shipping Austin TX | Calibration-Critical Device Transport',
    description:
      'Specialist shipping for calibration-critical medical electronics in Austin, TX. Infusion pumps, defibrillators, ventilators, and precision devices with anti-static packaging and shock-isolated crating.',
    publishDate: '2026-06-01',
    modifiedDate: '2026-06-01',
    category: 'Services',
    tags: ['sensitive medical electronics shipping Austin', 'calibration equipment transport Austin', 'infusion pump shipping Austin', 'defibrillator shipping Austin', 'ventilator transport'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/heavy-items',
    title: 'Heavy Item Pickup & Shipping Austin TX | Austin Crate & Freight',
    description:
      'Heavy package pickup and oversized item shipping in Austin, TX. Custom crating for furniture, equipment, and machinery. Free local pickup. Call (512) 240-9818.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    category: 'Services',
    tags: ['heavy items', 'heavy package pickup', 'oversized shipping', 'Austin TX', 'custom crating', 'specialty shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    slug: '/services/oversized-shipping',
    title: 'Oversized Item Shipping Austin TX | Large Package Transport',
    description:
      'Ship oversized items from Austin, Texas. Custom crating and freight for items too large for FedEx or UPS. White-glove pickup, fully insured. Free quotes.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    category: 'Services',
    tags: ['oversized shipping', 'large items', 'freight', 'Austin TX', 'custom crating', 'bulky items'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    slug: '/services/shipping-and-crating',
    title: 'Specialty Shipping & Custom Crating Austin TX | Tech, Industrial & Oversized',
    description:
      'Custom crating and specialty freight for tech equipment, IT hardware, audio gear, large TVs, machinery, trade show displays, and oversized one-off items in Austin, TX. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['specialty shipping Austin TX', 'custom crating Austin', 'tech equipment shipping', 'machinery shipping Austin', 'trade show shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/servers-it-hardware',
    title: 'Server & IT Hardware Shipping Austin TX | Rack Server & Network Equipment Crating',
    description:
      'Custom crating and shipping for servers, networking gear, storage arrays, and rack equipment in Austin, TX. Anti-static packaging and component logging. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['server shipping Austin TX', 'IT hardware shipping Austin', 'rack server crating Austin', 'networking equipment shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/audio-equipment-studio-gear',
    title: 'Audio Equipment & Studio Gear Shipping Austin TX | Console & Monitor Crating',
    description:
      'Specialist shipping for studio monitors, mixing consoles, rack gear, synthesizers, and PA systems in Austin, TX. Shock-isolated crating and humidity protection. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['audio equipment shipping Austin TX', 'studio gear shipping Austin', 'mixing console shipping Austin TX', 'studio monitor shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/large-tvs-display-panels',
    title: 'Large TV & Display Panel Shipping Austin TX | OLED, LED Wall & Digital Signage',
    description:
      'Specialist shipping for 65"+ TVs, OLED panels, LED video walls, and digital signage in Austin, TX. Vertical transport and shock-isolated panel crating. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['large TV shipping Austin TX', 'flat screen TV shipping Austin', 'LED video wall shipping Austin', 'display panel crating Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/semiconductor-precision-tech',
    title: 'Semiconductor & Precision Tech Equipment Shipping Austin TX',
    description:
      'Specialist shipping for semiconductor equipment, wafer inspection systems, probe stations, and metrology tools in Austin, TX. Vibration isolation and ESD protection. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['semiconductor equipment shipping Austin TX', 'precision tech shipping Austin', 'wafer inspection equipment shipping Austin', 'ESD sensitive equipment crating Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/machinery-manufacturing-equipment',
    title: 'Machinery & Manufacturing Equipment Shipping Austin TX | CNC & Industrial Freight',
    description:
      'Heavy equipment crating and freight for CNC machines, laser cutters, industrial presses, and robotic cells in Austin, TX. Rigging, skid prep, and LTL coordination. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['machinery shipping Austin TX', 'CNC machine shipping Austin', 'manufacturing equipment shipping Austin TX', 'industrial equipment crating Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/trade-show-booths-displays',
    title: 'Trade Show Booth & Display Shipping Austin TX | Exhibit Freight',
    description:
      'On-time shipping for trade show booths, modular exhibits, LED lightboxes, and display systems in Austin, TX. Return shipping coordination and inventory logging. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['trade show booth shipping Austin TX', 'exhibit display shipping Austin', 'trade show display crating Austin TX', 'modular exhibit shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/large-custom-built-objects',
    title: 'Large Custom-Built Object Shipping Austin TX | Art, Props & Fabrications',
    description:
      'Specialist shipping for art installations, film props, architectural models, and custom fabrications in Austin, TX. Built-to-fit custom crating for non-standard shapes. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['custom built object shipping Austin TX', 'art installation shipping Austin', 'prop shipping Austin TX', 'custom fabrication shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/aerospace-specialty-parts',
    title: 'Aerospace & Specialty Parts Shipping Austin TX | Avionics & Composite Crating',
    description:
      'Specialist crating and freight for aerospace components, avionics assemblies, composite panels, and precision hardware in Austin, TX. Chain-of-custody documentation. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['aerospace parts shipping Austin TX', 'avionics shipping Austin TX', 'composite panel shipping Austin', 'specialty parts crating Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/shipping-and-crating/oversized-one-off-items',
    title: 'Oversized One-Off Item Shipping Austin TX — When UPS & FedEx Say No',
    description:
      'Custom crating and freight for oversized, overweight, or one-of-a-kind items that standard carriers refuse in Austin, TX. We quote it, crate it, and ship it. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['oversized item shipping Austin TX', 'carrier refused item shipping Austin', 'custom freight Austin TX', 'overweight package shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.75,
    changeFrequency: 'monthly',
  },

  // ── Locations ────────────────────────────────────────────────────────────────
  {
    slug: '/locations/round-rock',
    title: 'Specialty Shipping & Crating Round Rock TX | Furniture Shipping | Austin Crate',
    description:
      'Specialty shipping & custom crating in Round Rock, TX — furniture shipping and crating, fine art transport, heavy item pickup & medical equipment. White-glove service. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-03-07',
    category: 'Locations',
    tags: ['Round Rock', 'specialty shipping', 'specialty crating', 'furniture shipping and crating', 'custom furniture shipping', 'heavy package pickup', 'white glove shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/locations/cedar-park',
    title: 'Specialty Shipping & Crating Cedar Park TX | Furniture Shipping | Austin Crate',
    description:
      'Specialty shipping & custom crating in Cedar Park, TX — furniture shipping and crating, fine art transport, heavy item pickup & medical equipment. White-glove service. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-03-07',
    category: 'Locations',
    tags: ['Cedar Park', 'specialty shipping', 'specialty crating', 'furniture shipping and crating', 'custom furniture shipping', 'heavy package pickup', 'white glove shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/locations/georgetown',
    title: 'Specialty Shipping & Crating Georgetown TX | Furniture & Antique Shipping | Austin Crate',
    description:
      'Specialty shipping & custom crating in Georgetown, TX — furniture shipping and crating, antique transport, fine art shipping, heavy item pickup & medical equipment. White-glove. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-03-07',
    category: 'Locations',
    tags: ['Georgetown', 'specialty shipping', 'specialty crating', 'furniture shipping and crating', 'antique shipping', 'custom furniture shipping', 'heavy package pickup', 'Williamson County'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },

  // ── Resources ────────────────────────────────────────────────────────────────
  {
    slug: '/resources',
    title: 'Shipping Resources & Guides | Austin Crate & Freight',
    description:
      'Expert guides and resources for shipping fine art, furniture, and medical equipment. Learn how to prepare items for shipment, understand insurance, and more.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-10',
    category: 'Resources',
    tags: ['shipping guides', 'resources', 'how to ship', 'fine art', 'furniture'],
    author: 'Austin Crate & Freight',
    priority: 0.6,
    changeFrequency: 'weekly',
  },
  {
    slug: '/resources/prepare-artwork',
    title: 'How to Prepare Artwork for Shipping | Austin Crate & Freight',
    description:
      'Step-by-step guide to preparing paintings, sculptures, and artwork for safe shipping. Tips from the experts at Austin Crate & Freight for protecting your valuable art.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Resources',
    tags: ['prepare artwork', 'art shipping tips', 'paintings', 'sculptures', 'how to'],
    author: 'Austin Crate & Freight',
    priority: 0.5,
    changeFrequency: 'monthly',
  },

  // ── Blog ─────────────────────────────────────────────────────────────────────
  {
    slug: '/blog',
    title: 'Austin Local News & Shipping Tips | Austin Crate & Freight Blog',
    description:
      'Austin local news, industry updates, and expert tips on specialty shipping for fine art, furniture, and medical equipment from Austin Crate & Freight.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Blog',
    tags: ['blog', 'Austin news', 'shipping tips', 'local'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    slug: '/blog/apartment-fire-se-austin',
    title: 'Partial Structural Collapse Reported in SE Austin Abandoned Apartment Fire',
    description:
      'Austin Fire Department crews responded to a major fire at an abandoned apartment complex in Southeast Austin where a partial structural collapse was reported. No injuries confirmed.',
    publishDate: '2026-02-03',
    modifiedDate: '2026-02-03',
    category: 'Blog',
    tags: ['Austin news', 'fire', 'Southeast Austin', 'Austin Fire Department', 'local news'],
    author: 'Austin Crate & Freight',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/austin-marathon-2026',
    title: 'Austin Marathon 2026: Everything You Need to Know',
    description:
      'Complete guide to the 2026 Austin Marathon on February 15, 2026. Course map, road closures, parking, tips for spectators, and race weekend schedule for 30,000 runners.',
    publishDate: '2026-02-03',
    modifiedDate: '2026-02-03',
    category: 'Blog',
    tags: ['Austin Marathon', 'Austin events', 'running', '2026', 'road closures'],
    author: 'Austin Crate & Freight',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/lottery-ticket-round-rock',
    title: '$1 Million Scratch Lottery Ticket Sold at Round Rock Gas Station',
    description:
      'A lucky lottery player in Round Rock is $1 million richer after purchasing a winning scratch-off ticket at a Chevron station on I-35. Texas Lottery Commission confirmed the winning ticket.',
    publishDate: '2026-02-03',
    modifiedDate: '2026-02-03',
    category: 'Blog',
    tags: ['lottery', 'Round Rock', 'Texas Lottery', 'local news', 'Austin area'],
    author: 'Austin Crate & Freight',
    priority: 0.5,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/cost-to-ship-heavy-items-austin',
    title: 'How Much Does It Cost to Ship Heavy Items in Austin? (2026 Price Guide)',
    description:
      'Complete pricing guide for shipping heavy items in Austin, TX. Compare costs for heavy package pickup, custom furniture shipping, oversized item transport, and freight solutions.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    category: 'Blog',
    tags: ['cost to ship heavy items Austin', 'heavy package pickup', 'custom furniture shipping', 'oversized shipping', 'pricing guide', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/safety-speed-6400-panel-saw',
    title: 'New Equipment Spotlight: Safety Speed 6400 Panel Saw | Austin Crate & Freight',
    description:
      'Austin Crate & Freight adds the Safety Speed 6400 vertical panel saw to our shop. Learn how this precision machine improves every custom crate we build for art, furniture, and heavy equipment.',
    publishDate: '2026-03-07',
    modifiedDate: '2026-03-07',
    category: 'Blog',
    tags: ['custom crating Austin', 'panel saw', 'Safety Speed 6400', 'crate building', 'shop equipment', 'precision crating', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/ship-large-furniture-texas',
    title: 'How to Ship Large Furniture Across Texas | Austin Crate & Freight',
    description:
      'Complete guide to shipping large furniture across Texas — custom crating, preparation tips, costs by piece type, and how to find the right specialty carrier. By Austin Crate & Freight.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Blog',
    tags: ['ship large furniture Texas', 'furniture shipping Texas', 'custom furniture crating Austin', 'furniture transport Texas', 'antique furniture shipping', 'Austin TX'],
    author: 'Max-de',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/piano-shipping-austin',
    title: 'Piano Shipping in Austin, Texas: Complete Guide & Costs for 2026 | Austin Crate & Freight',
    description:
      'Everything you need to know about piano shipping in Austin, TX — upright pianos to concert grands. Costs, custom crating process, and what to ask before booking a transport company.',
    publishDate: '2026-03-22',
    modifiedDate: '2026-03-22',
    category: 'Blog',
    tags: ['piano shipping Austin Texas', 'piano moving Austin', 'piano crating', 'grand piano shipping Texas', 'upright piano transport Austin', 'Austin TX'],
    author: 'Peter Hall',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/what-is-white-glove-shipping',
    title: 'What Is White-Glove Shipping? (And Is It Worth It?) | Austin Crate & Freight',
    description:
      "A plain-English explanation of white-glove shipping — what it includes, what it doesn't, when to choose it, and what it costs in Austin, TX.",
    publishDate: '2026-03-25',
    modifiedDate: '2026-03-25',
    category: 'Blog',
    tags: ['white glove shipping explained', 'what is white glove delivery', 'white glove shipping Austin TX', 'premium delivery service', 'specialty shipping Austin Texas'],
    author: 'Max-de',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/custom-crating-vs-standard-boxes',
    title: 'Custom Crating vs. Standard Boxes: When You Need a Crate | Austin Crate & Freight',
    description:
      'How to decide between a custom wood crate and a standard shipping box. When custom crating pays for itself — and when it does not. Real cost comparisons from Austin Crate & Freight.',
    publishDate: '2026-03-28',
    modifiedDate: '2026-03-28',
    category: 'Blog',
    tags: ['custom crating vs standard boxes', 'custom crating Austin TX', 'when to use a crate', 'shipping crate vs box Austin', 'wood crate Austin Texas'],
    author: 'Peter Hall',
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  // ── Service Sub-Pages ─────────────────────────────────────────────────────────
  {
    slug: '/services/heavy-items/pool-table-shipping',
    title: 'Pool Table Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Professional pool table shipping, disassembly, and crating in Austin, Texas. Slate protection, felt preservation, and white-glove reassembly at destination. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['pool table shipping Austin TX', 'pool table moving Austin Texas', 'pool table crating Austin', 'ship pool table Austin', 'billiard table shipping Austin Texas'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/heavy-items/motorcycle-crating',
    title: 'Motorcycle Crating & Shipping Austin Texas | Austin Crate & Freight',
    description: 'Expert motorcycle crating and freight shipping in Austin, TX. Custom floor base, wheel chocks, foam padding, fuel compliance, and freight coordination. All makes and models. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['Austin motorcycle crating', 'motorcycle shipping Austin TX', 'motorcycle freight Austin Texas', 'crate motorcycle Austin', 'ship motorcycle Austin Texas'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/fragile-item-shipping',
    title: 'Fragile Item Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Professional fragile item shipping and custom crating in Austin, Texas. Glass, ceramics, electronics, sculptures, and delicate antiques — custom foam inserts and white-glove handling. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['fragile item shipping Austin TX', 'fragile item crating Austin', 'delicate item shipping Austin Texas', 'glass shipping Austin Texas', 'ceramics crating Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/oversized-shipping/when-carriers-refuse',
    title: 'When UPS & FedEx Refuse: Oversized Shipping Solutions Austin TX | Austin Crate & Freight',
    description: 'What to do when UPS, FedEx, or USPS refuses your shipment. Specialty freight solutions for oversized, overweight, and carrier-rejected items in Austin, Texas. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['oversized package shipping options Austin', 'when carriers refuse shipment Austin', 'items UPS won\'t ship Austin TX', 'FedEx refuses oversized Austin', 'specialty freight Austin Texas'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/heavy-items/heavy-equipment-austin',
    title: 'Heavy Equipment Shipping for Austin Businesses | Austin Crate & Freight',
    description: 'Heavy equipment shipping and crating in Austin, Texas. Industrial machinery, manufacturing equipment, trade show displays, and commercial fixtures — liftgate service and LTL freight. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['heavy equipment shipping Austin', 'industrial equipment transport Austin TX', 'machinery shipping Austin Texas', 'trade show display shipping Austin', 'commercial equipment freight Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture/antique-furniture-shipping',
    title: 'Antique Furniture Shipping Across Texas | Austin Crate & Freight',
    description: 'Expert antique furniture shipping across Texas. Custom crating, padded blanket wrap, and white-glove delivery for Victorian, Mid-Century, French Provincial, and all antique styles. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['antique furniture shipping Texas', 'ship antique furniture Texas', 'antique furniture transport Texas', 'antique furniture crating Austin TX', 'vintage furniture shipping Texas'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/painting-shipping',
    title: 'Painting Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Expert painting shipping and crating in Austin, TX. Canvas, framed, and mixed media — acid-free protocols, custom foam, white-glove handling. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['painting shipping Austin TX', 'framed art shipping Austin Texas', 'canvas painting crating Austin', 'fine art shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/sculpture-shipping',
    title: 'Sculpture Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Specialist sculpture shipping and crating in Austin, TX. Bronze, stone, ceramic, wood, and glass sculpture — custom cradles and vibration isolation. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['sculpture shipping Austin TX', 'bronze sculpture shipping Austin TX', 'sculpture crating Austin Texas', 'fine art sculpture transport Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/art-installation-shipping',
    title: 'Art Installation Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Complex art installation shipping and logistics in Austin, TX. Multi-component crating, inventory management, and reinstallation support for large-scale works. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['art installation shipping Austin TX', 'complex art shipping Austin', 'art installation logistics Austin Texas', 'large artwork shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/gallery-exhibit-shipping',
    title: 'Gallery Exhibit Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Full-service gallery exhibit shipping in Austin, TX. Outgoing and return logistics, condition reporting, art fair shipping, and multi-work crating for gallery shows. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['gallery exhibit shipping Austin TX', 'art gallery shipping Austin Texas', 'gallery show logistics Austin', 'art fair shipping Austin TX', 'traveling exhibition shipping Texas'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/antique-artifacts-shipping',
    title: 'Antique Artifact Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Museum-quality antique artifact shipping and crating in Austin, TX. Pre-Columbian objects, Asian antiques, tribal art, and archaeological pieces. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['antique artifact shipping Austin TX', 'archaeological artifact transport Austin', 'antique object crating Austin Texas', 'antiquities shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/rare-collectibles-shipping',
    title: 'Rare Collectibles Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Specialist rare collectibles shipping in Austin, TX — coins, sports memorabilia, graded cards, vintage toys, autographed items. Tamper-evident, insured, documented. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['rare collectibles shipping Austin TX', 'coin collection shipping Austin Texas', 'sports memorabilia shipping Austin TX', 'graded card shipping Austin Texas', 'PSA slab shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/glass-art-shipping',
    title: 'Glass Art Shipping & Crating Austin Texas | Austin Crate & Freight',
    description: 'Specialist glass art shipping and crating in Austin, TX. Blown glass, cast glass, stained glass panels, glass sculpture. Vibration isolation engineering. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['glass art shipping Austin TX', 'blown glass shipping Austin Texas', 'glass sculpture crating Austin', 'art glass shipping Austin', 'stained glass shipping Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/fine-art/museum-display-shipping',
    title: 'Museum Display Shipping & Logistics Austin Texas | Austin Crate & Freight',
    description: 'Institutional-grade museum display shipping in Austin, TX. Object ID documentation, condition reporting, loan compliance, and courier coordination. Call (512) 240-9818.',
    publishDate: '2026-03-18',
    modifiedDate: '2026-03-18',
    category: 'Services',
    tags: ['museum display shipping Austin TX', 'museum artifact transport Austin', 'museum exhibit logistics Austin Texas', 'museum shipping services Austin', 'institutional art shipping Austin'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
]

/**
 * Lookup a single entry by slug.
 * Returns `undefined` if the slug isn't registered.
 */
export function getEntry(slug: string): ContentEntry | undefined {
  return contentRegistry.find((e) => e.slug === slug)
}

/**
 * Return entries that share at least one tag or the same category,
 * sorted by relevance score, excluding the current slug.
 */
export function getRelatedEntries(
  currentSlug: string,
  { limit = 5 }: { limit?: number } = {}
): ContentEntry[] {
  const current = getEntry(currentSlug)
  if (!current) return []

  return contentRegistry
    .filter((e) => e.slug !== currentSlug)
    .map((e) => ({
      entry: e,
      score:
        (e.category === current.category ? 3 : 0) +
        e.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => entry)
}
