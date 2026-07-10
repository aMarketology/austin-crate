'use client'

import { useState } from 'react'

// ─── Mock Data ────────────────────────────────────────────────────────────────

type OrderStatus = 'Quoted' | 'Picked Up' | 'Crating' | 'Shipped' | 'Delivered' | 'Follow-Up Sent'

interface Order {
  id: string
  customer: string
  email: string
  phone: string
  city: string
  item: string
  value: string
  pickupDate: string
  deliveryDate: string
  status: OrderStatus
  referredBy: string | null
  referralCode: string
  loyaltyPoints: number
  outreachSent: boolean
  reviewLeft: boolean
  referralsMade: number
  notes: string
}

const MOCK_ORDERS: Order[] = [
  { id: 'ACF-2026-041', customer: 'Sandra Whitmore', email: 'sandra.whitmore@email.com', phone: '(512) 884-2210', city: 'Wimberley', item: 'Victorian mahogany secretary desk', value: '$4,200', pickupDate: 'Jul 2, 2026', deliveryDate: 'Jul 7, 2026', status: 'Delivered', referredBy: null, referralCode: 'SANDRA-WIM', loyaltyPoints: 420, outreachSent: false, reviewLeft: false, referralsMade: 0, notes: 'Delicate veneer. Customer was very happy with pickup.' },
  { id: 'ACF-2026-042', customer: 'Marcus Chen', email: 'mchen@techco.io', phone: '(512) 340-7751', city: 'Taylor', item: 'Precision optical testing equipment (2 units)', value: '$18,500', pickupDate: 'Jul 3, 2026', deliveryDate: 'Jul 8, 2026', status: 'Delivered', referredBy: null, referralCode: 'MARCUS-TAY', loyaltyPoints: 1850, outreachSent: true, reviewLeft: true, referralsMade: 1, notes: 'Samsung fab adjacent. Repeat potential — ask about Q3 equipment shipments.' },
  { id: 'ACF-2026-043', customer: 'Diane & Robert Kessler', email: 'd.kessler@gmail.com', phone: '(512) 601-4488', city: 'Marble Falls', item: 'Oil painting (36"x48") + bronze sculpture', value: '$11,000', pickupDate: 'Jul 5, 2026', deliveryDate: '', status: 'Shipped', referredBy: 'Marcus Chen', referralCode: 'KESSLER-MF', loyaltyPoints: 1100, outreachSent: false, reviewLeft: false, referralsMade: 0, notes: 'Referred by Marcus Chen. Lake LBJ estate.' },
  { id: 'ACF-2026-044', customer: 'Tom Hargrove', email: 'tom@hargrovedesign.com', phone: '(512) 220-8834', city: 'Austin', item: 'Custom walnut dining table (96")', value: '$3,800', pickupDate: 'Jul 7, 2026', deliveryDate: '', status: 'Crating', referredBy: null, referralCode: 'TOM-ATX', loyaltyPoints: 380, outreachSent: false, reviewLeft: false, referralsMade: 0, notes: 'Interior designer. High referral potential — handles 8-10 client moves/year.' },
  { id: 'ACF-2026-045', customer: 'Priya Nambiar', email: 'priya.n@utexas.edu', phone: '(512) 773-9920', city: 'San Marcos', item: 'Antique Rajasthani cabinet (TXST faculty relocation)', value: '$6,500', pickupDate: 'Jul 9, 2026', deliveryDate: '', status: 'Picked Up', referredBy: null, referralCode: 'PRIYA-SM', loyaltyPoints: 650, outreachSent: false, reviewLeft: false, referralsMade: 0, notes: 'TXST faculty. Moving to Boston. Very particular about fragile inlay work.' },
  { id: 'ACF-2026-046', customer: 'James Okafor', email: 'jokafor@bastropbiz.com', phone: '(512) 458-2291', city: 'Bastrop', item: 'Gun safe (750 lbs) + antique armoire', value: '$2,100', pickupDate: '', deliveryDate: '', status: 'Quoted', referredBy: null, referralCode: 'JAMES-BAS', loyaltyPoints: 0, outreachSent: false, reviewLeft: false, referralsMade: 0, notes: 'Quote sent Jul 9. Follow up if no reply by Jul 12.' },
]

const STATUS_COLORS: Record<OrderStatus, string> = {
  'Quoted':         'bg-gray-100 text-gray-600 border border-gray-200',
  'Picked Up':      'bg-blue-50 text-blue-700 border border-blue-200',
  'Crating':        'bg-amber-50 text-amber-700 border border-amber-200',
  'Shipped':        'bg-purple-50 text-purple-700 border border-purple-200',
  'Delivered':      'bg-emerald-50 text-emerald-700 border border-emerald-200',
  'Follow-Up Sent': 'bg-teal-50 text-teal-700 border border-teal-200',
}

const PIPELINE: OrderStatus[] = ['Quoted', 'Picked Up', 'Crating', 'Shipped', 'Delivered', 'Follow-Up Sent']

const EMAIL_TEMPLATES = [
  {
    id: 'delivery',
    label: '📦 Post-Delivery (Day 0)',
    subject: 'Your crate arrived — a few things to know',
    body: `Hi [NAME],

Great news — your [ITEM] has been delivered. A quick note on safely opening your crate:

1. Use a flathead screwdriver on the screw-closure lid — don't use a pry bar
2. Remove the top foam layer first and set aside
3. Inspect the item before signing any freight paperwork

We documented condition before crating — those photos are attached.

If anything looks off, call us immediately at (512) 240-9818.

— Peter & the Austin Crate team`,
  },
  {
    id: 'review',
    label: '⭐ Review Request (Day 3)',
    subject: 'How did we do? (30 seconds)',
    body: `Hi [NAME],

We hope [ITEM] is exactly where it belongs.

If we took good care of you, we'd be really grateful for a quick Google review — it takes about 30 seconds and means the world to a small Austin business.

👉 https://g.page/r/austincrate/review

Use your referral code [CODE] for $50 off your next shipment — and anyone you refer gets $50 off their first too.

Thanks for trusting us with something valuable.

— Peter Hall, Austin Crate & Freight
(512) 240-9818`,
  },
  {
    id: 'referral',
    label: '🤝 Referral Nudge (Day 14)',
    subject: 'Know anyone else who needs a crate?',
    body: `Hi [NAME],

Just a quick note — your referral code [CODE] is still active.

Anyone you send our way gets $50 off their first shipment. You get $50 credit toward your next one.

Homebuyers, antique collectors, gallery owners, people relocating to Austin — if they've got something valuable that needs moving properly, we'd love to help.

Reply anytime or call (512) 240-9818.

— Austin Crate & Freight`,
  },
]

function StatCard({ label, value, sub, accent }: { label: string; value: string; sub: string; accent: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
      <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${accent}`}>{label}</p>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-400">{sub}</p>
    </div>
  )
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const ADMIN_PW = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? '1597'

  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS)
  const [selected, setSelected] = useState<Order | null>(null)
  const [activeTab, setActiveTab] = useState<'pipeline' | 'outreach' | 'loyalty' | 'templates'>('pipeline')
  const [templateIdx, setTemplateIdx] = useState(0)
  const [searchQ, setSearchQ] = useState('')

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-10 w-full max-w-sm border border-gray-200 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-gray-900 font-bold text-lg leading-tight">Austin Crate</p>
              <p className="text-gray-400 text-xs">Admin Dashboard</p>
            </div>
          </div>
          <label className="block text-gray-500 text-sm mb-2">Passcode</label>
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setPwError(false) }}
            onKeyDown={e => { if (e.key === 'Enter') { if (pw === ADMIN_PW) setAuthed(true); else setPwError(true) } }}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-3"
            placeholder="Enter passcode"
            autoFocus
          />
          {pwError && <p className="text-red-500 text-sm mb-3">Incorrect passcode</p>}
          <button
            onClick={() => { if (pw === ADMIN_PW) setAuthed(true); else setPwError(true) }}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Sign In
          </button>
          <p className="text-gray-400 text-xs text-center mt-4">Mock dashboard — real auth coming soon</p>
        </div>
      </div>
    )
  }

  const delivered = orders.filter(o => o.status === 'Delivered')
  const outreachQueue = delivered.filter(o => !o.outreachSent)
  const totalReferrals = orders.reduce((a, o) => a + o.referralsMade, 0)

  const filtered = orders.filter(o =>
    [o.customer, o.city, o.item, o.id].some(f => f.toLowerCase().includes(searchQ.toLowerCase()))
  )

  function markOutreachSent(id: string) {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, outreachSent: true, status: 'Follow-Up Sent' as OrderStatus } : o))
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, outreachSent: true, status: 'Follow-Up Sent' } : prev)
  }

  function advanceStatus(id: string) {
    setOrders(prev => prev.map(o => {
      if (o.id !== id) return o
      const next = PIPELINE[Math.min(PIPELINE.indexOf(o.status) + 1, PIPELINE.length - 1)]
      return { ...o, status: next }
    }))
    if (selected?.id === id) setSelected(prev => {
      if (!prev) return prev
      const next = PIPELINE[Math.min(PIPELINE.indexOf(prev.status) + 1, PIPELINE.length - 1)]
      return { ...prev, status: next }
    })
  }

  const tabs = [
    { key: 'pipeline',   label: '📋 Pipeline' },
    { key: 'outreach',   label: `📬 Outreach${outreachQueue.length > 0 ? ` (${outreachQueue.length})` : ''}` },
    { key: 'loyalty',    label: '🏆 Loyalty & Referrals' },
    { key: 'templates',  label: '✉️ Templates' },
  ] as const

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-gray-900">Austin Crate & Freight</span>
            <span className="ml-2 text-xs text-gray-400 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">Admin · Mock</span>
          </div>
        </div>
        <div className="text-sm text-gray-400">July 10, 2026</div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6 px-3 gap-1 shrink-0">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === t.key
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {t.label}
            </button>
          ))}
          <div className="mt-auto pt-6 px-4">
            <button onClick={() => setAuthed(false)} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Sign out</button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-auto p-6">

          {/* PIPELINE */}
          {activeTab === 'pipeline' && (
            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Order Pipeline</h1>
                  <p className="text-gray-400 text-sm mt-1">Track every job from quote to delivered</p>
                </div>
                <input
                  type="text"
                  placeholder="Search customer, city, item…"
                  value={searchQ}
                  onChange={e => setSearchQ(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 w-64 shadow-sm"
                />
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <StatCard label="Active Jobs" value={String(orders.filter(o => !['Delivered','Follow-Up Sent'].includes(o.status)).length)} sub="in progress" accent="text-gray-500" />
                <StatCard label="Delivered" value={String(delivered.length)} sub="this month" accent="text-emerald-600" />
                <StatCard label="Outreach Due" value={String(outreachQueue.length)} sub="need follow-up" accent="text-amber-600" />
                <StatCard label="Referrals" value={String(totalReferrals)} sub="from loyalty program" accent="text-purple-600" />
              </div>

              {/* Kanban */}
              <div className="grid grid-cols-3 xl:grid-cols-6 gap-3 mb-8">
                {PIPELINE.map(stage => {
                  const cols = filtered.filter(o => o.status === stage)
                  return (
                    <div key={stage} className="bg-white rounded-xl p-3 border border-gray-200 min-h-32 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${STATUS_COLORS[stage]}`}>{stage}</span>
                        <span className="text-gray-400 text-xs">{cols.length}</span>
                      </div>
                      <div className="space-y-2">
                        {cols.map(o => (
                          <button key={o.id} onClick={() => setSelected(o)}
                            className="w-full text-left bg-gray-50 hover:bg-emerald-50 rounded-lg p-2.5 border border-gray-200 hover:border-emerald-300 transition-all">
                            <p className="text-gray-900 text-xs font-semibold truncate">{o.customer}</p>
                            <p className="text-gray-400 text-xs truncate mt-0.5">{o.item}</p>
                            <p className="text-emerald-600 text-xs mt-1 font-semibold">{o.value}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Table */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <tr>
                      {['ID','Customer','City','Item','Value','Status','Outreach','Action'].map(h => (
                        <th key={h} className="px-4 py-3 text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filtered.map(o => (
                      <tr key={o.id} className="hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setSelected(o)}>
                        <td className="px-4 py-3 text-gray-400 font-mono text-xs">{o.id}</td>
                        <td className="px-4 py-3 text-gray-900 font-semibold">{o.customer}</td>
                        <td className="px-4 py-3 text-gray-500">{o.city}</td>
                        <td className="px-4 py-3 text-gray-600 max-w-[180px] truncate">{o.item}</td>
                        <td className="px-4 py-3 text-emerald-600 font-bold">{o.value}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${STATUS_COLORS[o.status]}`}>{o.status}</span>
                        </td>
                        <td className="px-4 py-3">
                          {o.status === 'Delivered' && !o.outreachSent
                            ? <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">Due</span>
                            : o.outreachSent
                            ? <span className="text-xs bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded-full">Sent ✓</span>
                            : <span className="text-gray-300 text-xs">—</span>}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={e => { e.stopPropagation(); advanceStatus(o.id) }}
                            disabled={o.status === 'Follow-Up Sent'}
                            className="text-xs bg-gray-100 hover:bg-emerald-600 hover:text-white text-gray-600 px-3 py-1 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed border border-gray-200 hover:border-emerald-600"
                          >
                            Advance →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* OUTREACH */}
          {activeTab === 'outreach' && (
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Post-Delivery Outreach Queue</h1>
                <p className="text-gray-400 text-sm mt-1">Customers who received their crate and need a follow-up sequence</p>
              </div>

              {outreachQueue.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-sm">
                  <p className="text-4xl mb-3">✅</p>
                  <p className="text-gray-900 font-bold text-lg">All caught up</p>
                  <p className="text-gray-400 text-sm mt-1">No delivered orders are waiting for outreach</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {outreachQueue.map(o => (
                    <div key={o.id} className="bg-white rounded-2xl border border-amber-200 p-6 flex items-start gap-6 shadow-sm">
                      <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center text-2xl shrink-0">📦</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h3 className="text-gray-900 font-bold">{o.customer}</h3>
                          <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">Outreach Due</span>
                          {o.referredBy && <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-full">Referred by {o.referredBy}</span>}
                        </div>
                        <p className="text-gray-500 text-sm">{o.item} · {o.city} · Delivered {o.deliveryDate || 'recently'}</p>
                        <p className="text-gray-400 text-sm mt-1">📧 {o.email} · 📞 {o.phone}</p>
                        <p className="text-gray-400 text-xs mt-2 italic">{o.notes}</p>
                        <div className="flex gap-2 mt-4">
                          {['Day 0 — Delivery confirmation + opening guide|"Your crate arrived…"', `Day 3 — Google review + referral code|Code: ${o.referralCode} · $50 off both`, 'Day 14 — Referral nudge|"Know anyone who needs a crate?"'].map(s => {
                            const [title, sub] = s.split('|')
                            return (
                              <div key={title} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs flex-1">
                                <p className="font-semibold text-gray-800 mb-1">{title}</p>
                                <p className="text-gray-400">{sub}</p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        <button onClick={() => markOutreachSent(o.id)} className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap shadow-sm">Send Day 0 Email</button>
                        <button onClick={() => setSelected(o)} className="bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm px-5 py-2 rounded-xl transition-colors border border-gray-200">View Full Record</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {delivered.filter(o => o.outreachSent).length > 0 && (
                <div className="mt-8">
                  <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Outreach Sent</h2>
                  <div className="space-y-2">
                    {delivered.filter(o => o.outreachSent).map(o => (
                      <div key={o.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between shadow-sm">
                        <div>
                          <span className="text-gray-900 font-medium">{o.customer}</span>
                          <span className="text-gray-400 text-sm ml-3">{o.item}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {o.reviewLeft && <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">⭐ Review Left</span>}
                          {o.referralsMade > 0 && <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-full">🤝 {o.referralsMade} referral</span>}
                          <span className="text-xs text-teal-600 font-medium">Follow-up sent ✓</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* LOYALTY */}
          {activeTab === 'loyalty' && (
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Loyalty & Referral Program</h1>
                <p className="text-gray-400 text-sm mt-1">Every customer gets a referral code. Every referral earns $50 for them and $50 credit for you.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: '💰 How It Works', body: 'Customer refers a friend using their unique code. Friend gets $50 off. Customer gets $50 credit toward next shipment.' },
                  { title: '🏆 Loyalty Points', body: '1 point per $1 spent. 500 pts = $25 credit. 1,000 pts = $75 credit (bonus tier). 2,000+ = VIP status + priority scheduling.' },
                  { title: '📬 When to Send', body: 'Day 0: delivery confirmation. Day 3: review request + referral code reveal. Day 14: referral nudge if no referrals yet.' },
                ].map(({ title, body }) => (
                  <div key={title}>
                    <p className="text-emerald-700 font-bold mb-1">{title}</p>
                    <p className="text-gray-600 text-sm">{body}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-4 mb-8">
                <StatCard label="Total Referrals" value={String(totalReferrals)} sub="all time" accent="text-purple-600" />
                <StatCard label="Review Rate" value="50%" sub="1 of 2 delivered" accent="text-amber-600" />
                <StatCard label="Top Earner" value="Marcus Chen" sub="1,850 pts · 1 referral" accent="text-emerald-600" />
                <StatCard label="Revenue from Referrals" value="$11K" sub="Kessler job via Marcus" accent="text-blue-600" />
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-gray-900 font-bold">Customer Loyalty Ledger</h2>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <tr>{['Customer','City','Referral Code','Points','Tier','Referrals','Review','Referred By'].map(h => <th key={h} className="px-4 py-3 text-left">{h}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {orders.filter(o => o.status !== 'Quoted').map(o => {
                      const tier = o.loyaltyPoints >= 2000 ? 'VIP 👑' : o.loyaltyPoints >= 1000 ? 'Gold 🥇' : o.loyaltyPoints >= 500 ? 'Silver 🥈' : 'Member'
                      const tc = o.loyaltyPoints >= 2000 ? 'text-yellow-600' : o.loyaltyPoints >= 1000 ? 'text-amber-600' : o.loyaltyPoints >= 500 ? 'text-gray-500' : 'text-gray-400'
                      return (
                        <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 text-gray-900 font-semibold">{o.customer}</td>
                          <td className="px-4 py-3 text-gray-500">{o.city}</td>
                          <td className="px-4 py-3 font-mono text-emerald-600 text-xs">{o.referralCode}</td>
                          <td className="px-4 py-3 text-gray-900 font-bold">{o.loyaltyPoints.toLocaleString()}</td>
                          <td className={`px-4 py-3 font-bold text-xs ${tc}`}>{tier}</td>
                          <td className="px-4 py-3"><span className={`font-bold ${o.referralsMade > 0 ? 'text-purple-600' : 'text-gray-300'}`}>{o.referralsMade > 0 ? `${o.referralsMade} ✓` : '0'}</span></td>
                          <td className="px-4 py-3">{o.reviewLeft ? <span className="text-emerald-600 text-xs font-semibold">⭐ Left</span> : o.outreachSent ? <span className="text-amber-500 text-xs">Pending</span> : <span className="text-gray-300 text-xs">—</span>}</td>
                          <td className="px-4 py-3 text-gray-400 text-xs">{o.referredBy || '—'}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TEMPLATES */}
          {activeTab === 'templates' && (
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Email Templates</h1>
                <p className="text-gray-400 text-sm mt-1">Post-delivery outreach sequence — 3 touchpoints per customer</p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mb-6">
                {EMAIL_TEMPLATES.map((t, i) => (
                  <button key={t.id} onClick={() => setTemplateIdx(i)}
                    className={`p-4 rounded-xl border text-left transition-all ${templateIdx === i ? 'border-emerald-500 bg-emerald-50 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'}`}>
                    <p className="font-semibold text-gray-900 mb-1">{t.label}</p>
                    <p className="text-gray-400 text-xs">{t.subject}</p>
                  </button>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-gray-900 font-bold">{EMAIL_TEMPLATES[templateIdx].label}</p>
                    <p className="text-gray-400 text-sm mt-0.5">Subject: <span className="text-gray-700">{EMAIL_TEMPLATES[templateIdx].subject}</span></p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {['[NAME] = customer name','[ITEM] = item shipped','[CODE] = referral code'].map(t => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-500 border border-gray-200 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <pre className="px-6 py-6 text-gray-600 text-sm whitespace-pre-wrap font-sans leading-relaxed bg-gray-50">
                  {EMAIL_TEMPLATES[templateIdx].body}
                </pre>
              </div>
              <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-gray-900 font-bold mb-6">Sequence Timeline</h2>
                <div className="flex items-start">
                  {[
                    { day: 'Day 0',  label: 'Delivery Confirmation', desc: 'Crate opening guide + condition photos', color: 'bg-emerald-600' },
                    { day: 'Day 3',  label: 'Review Request',        desc: 'Google review link + referral code reveal', color: 'bg-blue-600' },
                    { day: 'Day 14', label: 'Referral Nudge',        desc: '"Know anyone?" — if no referrals yet', color: 'bg-purple-600' },
                    { day: 'Day 90', label: 'Check-In',              desc: 'Seasonal check-in + repeat customer offer', color: 'bg-gray-400' },
                  ].map((step, i, arr) => (
                    <div key={step.day} className="flex-1 flex items-start">
                      <div className="flex flex-col items-center mr-4">
                        <div className={`w-9 h-9 ${step.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm`}>{i + 1}</div>
                        {i < arr.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1 min-h-8" />}
                      </div>
                      <div className="pb-8">
                        <p className="text-xs text-gray-400 font-semibold">{step.day}</p>
                        <p className="text-gray-900 font-semibold text-sm">{step.label}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Detail Drawer */}
        {selected && (
          <aside className="w-80 bg-white border-l border-gray-200 flex flex-col overflow-auto shrink-0 shadow-lg">
            <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-gray-900 font-bold">Order Detail</p>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-700 text-xl leading-none">×</button>
            </div>
            <div className="px-5 py-5 flex-1 space-y-5">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Customer</p>
                <p className="text-gray-900 font-bold text-lg">{selected.customer}</p>
                <p className="text-gray-500 text-sm">{selected.email}</p>
                <p className="text-gray-500 text-sm">{selected.phone}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Item</p>
                <p className="text-gray-700">{selected.item}</p>
                <p className="text-emerald-600 font-bold">{selected.value}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[['City', selected.city], ['Order ID', selected.id], ['Pickup', selected.pickupDate || '—'], ['Delivered', selected.deliveryDate || '—']].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-gray-400 text-xs mb-1">{k}</p>
                    <p className="text-gray-800 text-sm font-mono">{v}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Status</p>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${STATUS_COLORS[selected.status]}`}>{selected.status}</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-2">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Loyalty</p>
                {[
                  ['Points', selected.loyaltyPoints.toLocaleString()],
                  ['Referral Code', selected.referralCode],
                  ['Referrals Made', String(selected.referralsMade)],
                  ['Referred By', selected.referredBy || '—'],
                  ['Review Left', selected.reviewLeft ? 'Yes ⭐' : 'No'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm">
                    <span className="text-gray-500">{k}</span>
                    <span className={`font-semibold ${k === 'Review Left' && selected.reviewLeft ? 'text-emerald-600' : k === 'Referral Code' ? 'text-emerald-600 font-mono text-xs' : 'text-gray-800'}`}>{v}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Notes</p>
                <p className="text-gray-600 text-sm leading-relaxed">{selected.notes}</p>
              </div>
              <div className="space-y-2 pt-2">
                {selected.status === 'Delivered' && !selected.outreachSent && (
                  <button onClick={() => markOutreachSent(selected.id)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors shadow-sm">
                    Send Day 0 Email
                  </button>
                )}
                <button
                  onClick={() => advanceStatus(selected.id)}
                  disabled={selected.status === 'Follow-Up Sent'}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 py-2.5 rounded-xl text-sm transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Advance Status →
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
