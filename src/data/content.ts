export type Product = {
  id: string
  name: string
  category: string
  price: number
  badge: string
  badgeTone: 'brand' | 'emerald' | 'violet' | 'slate'
  rating: number
  reviews: number
  image: string
  cta: 'book' | 'notify'
}

export const CHIPS = ['All Assets', 'Cameras & Audio', 'Drones', 'Tech']

export const STATS = [
  { value: '$2.4M', label: 'Annual Volume' },
  { value: '99.4%', label: 'On-Time Release' },
  { value: '24/7', label: 'Asset Support' },
]

export const PRODUCTS: Product[] = [
  {
    id: 'fx3',
    name: 'Sony FX3 Cinema Kit',
    category: 'Cameras & Audio',
    price: 145,
    badge: 'Instant Weekly',
    badgeTone: 'brand',
    rating: 4.9,
    reviews: 128,
    cta: 'book',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=70',
  },
  {
    id: 'inspire',
    name: 'DJI Inspire 3 Pro Drone',
    category: 'Drones',
    price: 320,
    badge: 'Smart Escrow',
    badgeTone: 'violet',
    rating: 5.0,
    reviews: 64,
    cta: 'book',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=400&q=70',
  },
  {
    id: 'mbp',
    name: 'MacBook Pro M3 Max',
    category: 'Tech',
    price: 95,
    badge: 'Instant Weekly',
    badgeTone: 'emerald',
    rating: 4.8,
    reviews: 212,
    cta: 'notify',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=70',
  },
  {
    id: 'komodo',
    name: 'RED Komodo 6K Pack',
    category: 'Cameras & Audio',
    price: 275,
    badge: 'Smart Escrow',
    badgeTone: 'slate',
    rating: 4.9,
    reviews: 47,
    cta: 'notify',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=70',
  },
]

/* ---------------- Desktop cockpit ---------------- */

export const DESKTOP_CATEGORIES = [
  'All Assets',
  'Cameras & Audio',
  'Drones & Aerial',
  'Computing',
]

export const DESKTOP_METRICS = [
  { label: 'Total Volume', value: '$2.42M', sub: '+18.2% QoQ', tone: 'brand' as const },
  { label: 'Annual Rev', value: '$384.5K', sub: 'Recurring', tone: 'emerald' as const },
  { label: 'Escrow Trust', value: '99.4%', sub: 'AAA rated', tone: 'violet' as const },
  { label: 'Live availability', value: '24/7', sub: 'All regions', tone: 'sky' as const },
]

export const DESKTOP_PRODUCTS: Product[] = [
  {
    id: 'd-fx3',
    name: 'Sony FX3 Cinema Kit',
    category: 'Cinema body · 3 lenses · cage',
    price: 185,
    badge: 'Instant Weekly',
    badgeTone: 'brand',
    rating: 4.9,
    reviews: 128,
    cta: 'book',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=70',
  },
  {
    id: 'd-inspire',
    name: 'DJI Inspire 3 Pro Drone',
    category: 'Aerial · 8K full-frame',
    price: 240,
    badge: 'Smart Escrow',
    badgeTone: 'violet',
    rating: 5.0,
    reviews: 64,
    cta: 'book',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=70',
  },
  {
    id: 'd-mbp',
    name: 'Apple MacBook Pro 16" M3 Max',
    category: '36GB RAM · 1TB · Space Black',
    price: 65,
    badge: 'Instant Weekly',
    badgeTone: 'emerald',
    rating: 4.8,
    reviews: 212,
    cta: 'notify',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=70',
  },
  {
    id: 'd-komodo',
    name: 'RED Komodo 6K Cinema Package',
    category: 'Brain · DSMC3 · V-Mount kit',
    price: 210,
    badge: 'Smart Escrow',
    badgeTone: 'slate',
    rating: 4.9,
    reviews: 47,
    cta: 'notify',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=70',
  },
]

export const SIDEBAR_GROUPS = [
  {
    title: 'Core Operations',
    items: [
      { label: 'Dashboard', active: true },
      { label: 'Marketplace' },
      { label: 'Active Rentals' },
      { label: 'Projects' },
    ],
  },
  {
    title: 'Operations & Vault',
    items: [{ label: 'Customers' }, { label: 'Tickets & Support' }, { label: 'Escrowed Deals' }],
  },
  {
    title: 'Pinnacle Escrow',
    items: [{ label: 'Escrow Deposits' }, { label: 'Payouts & Billing' }],
  },
]

export const TX_LOG = [
  { id: 'ESC-9912', text: 'Escrow released → Sony FX3 custody', amount: '+$580', tone: 'emerald' as const },
  { id: 'GOV-4410', text: 'Government-backed transfer verified', amount: '$1,240', tone: 'sky' as const },
  { id: 'CUS-4471', text: 'Custody handoff → Inspire 3', amount: '$320', tone: 'violet' as const },
  { id: 'PAY-2210', text: 'Payout → RED Komodo owner', amount: '+$210', tone: 'emerald' as const },
]

export const TELEMETRY = [
  { label: 'Active Leases', value: '04', unit: 'Units', tone: 'brand' as const },
  { label: 'Month Revenue', value: '$3,850', unit: 'Net', tone: 'emerald' as const },
  { label: 'Escrow Protection', value: '$850', unit: 'Locked', tone: 'violet' as const },
  { label: 'Trust Index', value: '99.4%', unit: 'Score', tone: 'sky' as const },
]

export const DEVICE_STATUS = [
  { label: 'Vault node · Dushanbe', pct: 96, tone: 'emerald' as const },
  { label: 'Custody scanner fleet', pct: 74, tone: 'brand' as const },
  { label: 'Backup replication', pct: 88, tone: 'violet' as const },
]

/* ---------------- Dashboard (mobile) ---------------- */

export const DASH_NAV = [
  { label: 'Dashboard', active: true },
  { label: 'Marketplace' },
  { label: 'Rentals' },
  { label: 'Customers' },
  { label: 'Tickets & Support' },
  { label: 'Escrow Deposits' },
  { label: 'Payments' },
  { label: 'Backups' },
]

export const METRICS = [
  { label: 'Active Leases', value: '04', delta: '+2 this week', tone: 'brand' as const },
  { label: 'Asset Rev', value: '$3,850', delta: '+12.4%', tone: 'emerald' as const },
  { label: 'Escrow Value', value: '$850', delta: 'locked', tone: 'violet' as const },
  { label: 'Trust Index', value: '99.4%', delta: 'AAA rated', tone: 'sky' as const },
]

export const DEPLOYMENTS = [
  {
    title: 'Sony FX3 → Dushanbe Crew',
    owner: 'AK',
    progress: 72,
    left: '2d 6h left',
    status: 'In custody',
    tone: 'emerald' as const,
  },
  {
    title: 'DJI Inspire 3 → Panj Films',
    owner: 'MR',
    progress: 38,
    left: '5d 12h left',
    status: 'In transit',
    tone: 'brand' as const,
  },
  {
    title: 'MacBook Pro M3 → Studio Nine',
    owner: 'ZS',
    progress: 91,
    left: '6h left',
    status: 'Returning',
    tone: 'violet' as const,
  },
]

export const QUICK_ACTIONS = [
  { label: 'List Asset', icon: 'plus' },
  { label: 'Scan QR', icon: 'qr' },
  { label: 'Extend Time', icon: 'clock' },
  { label: 'Emergency Protection', icon: 'shield' },
]

export const LEDGER = [
  {
    id: 'ESC-9912',
    title: 'Escrow released — Sony FX3',
    time: '12:04',
    amount: '+$580',
    state: 'Cleared',
    tone: 'emerald' as const,
  },
  {
    id: 'CUS-4471',
    title: 'Custody handoff — Inspire 3',
    time: '11:38',
    amount: '$320',
    state: 'In custody',
    tone: 'violet' as const,
  },
  {
    id: 'ESC-9908',
    title: 'Deposit locked — MacBook Pro',
    time: '10:52',
    amount: '$95',
    state: 'Locked',
    tone: 'brand' as const,
  },
  {
    id: 'PAY-2210',
    title: 'Payout — RED Komodo owner',
    time: '09:17',
    amount: '+$275',
    state: 'Settled',
    tone: 'emerald' as const,
  },
]

/* ---------------- Messages ---------------- */

export type Attachment =
  | { kind: 'image'; src: string; caption: string }
  | { kind: 'voice'; duration: string }
  | { kind: 'file'; name: string; size: string }

export type Message =
  | { id: string; from: 'them'; type: 'text'; text: string; time: string }
  | { id: string; from: 'me'; type: 'text'; text: string; time: string; read?: boolean }
  | {
      id: string
      from: 'them' | 'me'
      type: 'attachment'
      time: string
      attachment: Attachment
      read?: boolean
    }
  | { id: string; from: 'me'; type: 'system'; text: string; time: string }

export const CHAT_MESSAGES: Message[] = [
  {
    id: 'm1',
    from: 'them',
    type: 'text',
    text: 'Hi! Is the Sony FX3 kit available from Oct 3 → Oct 9? I need it for a 2-day commercial.',
    time: '11:42',
  },
  {
    id: 'm2',
    from: 'me',
    type: 'text',
    text: 'Yes — available. Every RentHub rental is covered by an escrow guarantee, so funds only release after you confirm handoff. 🛡️',
    time: '11:44',
    read: true,
  },
  {
    id: 'm3',
    from: 'me',
    type: 'system',
    text: 'Escrow guarantee attached — $580 held in custody',
    time: '11:44',
  },
  {
    id: 'm4',
    from: 'them',
    type: 'attachment',
    time: '11:51',
    attachment: {
      kind: 'image',
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=70',
      caption: 'Kit check — body + 3 lenses + cage',
    },
  },
  {
    id: 'm5',
    from: 'them',
    type: 'text',
    text: 'Perfect. Sending the signed lease over now.',
    time: '11:53',
  },
  {
    id: 'm6',
    from: 'them',
    type: 'attachment',
    time: '11:54',
    attachment: { kind: 'voice', duration: '0:18' },
  },
  {
    id: 'm7',
    from: 'them',
    type: 'attachment',
    time: '11:55',
    attachment: {
      kind: 'file',
      name: 'RentHub_Lease_Agreement_FINAL.pdf',
      size: '248 KB',
    },
  },
]
