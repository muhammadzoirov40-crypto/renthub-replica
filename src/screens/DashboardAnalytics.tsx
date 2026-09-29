import {
  Search,
  LayoutGrid,
  Store,
  KeyRound,
  Users,
  LifeBuoy,
  Lock,
  CreditCard,
  DatabaseBackup,
  Plus,
  QrCode,
  Timer,
  ShieldAlert,
  ArrowUpRight,
  MoreHorizontal,
} from 'lucide-react'
import BrandLogo from '../components/layout/BrandLogo'
import Card from '../components/ui/Card'
import Badge, { type Tone } from '../components/ui/Badge'
import ProgressBar from '../components/ui/ProgressBar'
import BottomNav from '../components/ui/BottomNav'
import { DASH_NAV, DEPLOYMENTS, LEDGER, METRICS, QUICK_ACTIONS } from '../data/content'

const NAV_ICONS: Record<string, typeof LayoutGrid> = {
  Dashboard: LayoutGrid,
  Marketplace: Store,
  Rentals: KeyRound,
  Customers: Users,
  'Tickets & Support': LifeBuoy,
  'Escrow Deposits': Lock,
  Payments: CreditCard,
  Backups: DatabaseBackup,
}

const ACTION_ICONS: Record<string, typeof Plus> = {
  plus: Plus,
  qr: QrCode,
  clock: Timer,
  shield: ShieldAlert,
}

const METRIC_TONE: Record<string, Tone> = {
  brand: 'brand',
  emerald: 'emerald',
  violet: 'violet',
  sky: 'sky',
}

export default function DashboardAnalytics() {
  return (
    <div className="relative">
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-ink-950/85 px-5 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <BrandLogo size="sm" />
          <Badge tone="emerald" dot>
            LIVE
          </Badge>
        </div>

        <div className="glass mt-3 flex items-center gap-2.5 rounded-xl border border-white/10 px-3 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-slate-500" />
          <input
            className="min-w-0 flex-1 bg-transparent text-[12.5px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
            placeholder="Jump to rental, asset, user..."
            aria-label="Jump to rental, asset, user"
          />
        </div>
      </header>

      <nav className="mt-4 px-5">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Navigation
          </h2>
          <span className="text-[10.5px] text-slate-600">8 modules</span>
        </div>
        <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
          {DASH_NAV.map((item) => {
            const Icon = NAV_ICONS[item.label] ?? LayoutGrid
            return (
              <button
                key={item.label}
                type="button"
                className={[
                  'flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-[11.5px] font-semibold transition',
                  item.active
                    ? 'border-brand-500/50 bg-brand-500/12 text-brand-400'
                    : 'border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200',
                ].join(' ')}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </button>
            )
          })}
        </div>
      </nav>

      <section className="mt-5 px-5">
        <div className="grid grid-cols-2 gap-3">
          {METRICS.map((m) => (
            <Card key={m.label} className="p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-500">
                  {m.label}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-600" />
              </div>
              <div className="font-mono-num mt-2 text-[24px] font-extrabold leading-none text-white">
                {m.value}
              </div>
              <div className="mt-2">
                <Badge tone={METRIC_TONE[m.tone]}>{m.delta}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-6 px-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[13px] font-bold tracking-tight text-white">Active Deployment</h2>
          <span className="flex items-center gap-1 text-[11px] text-slate-500">
            3 running <MoreHorizontal className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="space-y-2.5">
          {DEPLOYMENTS.map((d) => (
            <Card key={d.title} className="p-3.5">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[11px] font-bold text-slate-300">
                  {d.owner}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate text-[12.5px] font-semibold text-white">{d.title}</p>
                    <Badge tone={d.tone} dot>
                      {d.status}
                    </Badge>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2.5">
                    <ProgressBar value={d.progress} tone={d.tone} className="flex-1" />
                    <span className="font-mono-num shrink-0 text-[10.5px] font-semibold text-slate-400">
                      {d.left}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-6 px-5">
        <h2 className="mb-3 text-[13px] font-bold tracking-tight text-white">Quick Action</h2>
        <div className="grid grid-cols-2 gap-2.5">
          {QUICK_ACTIONS.map((a) => {
            const Icon = ACTION_ICONS[a.icon] ?? Plus
            const primary = a.label === 'List Asset'
            const danger = a.label === 'Emergency Protection'
            return (
              <button
                key={a.label}
                type="button"
                className={[
                  'flex items-center gap-2 rounded-xl border px-3 py-3 text-left text-[11.5px] font-bold transition',
                  primary
                    ? 'border-transparent bg-brand-500 text-white hover:bg-brand-600'
                    : danger
                      ? 'border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20'
                      : 'border-white/[0.08] bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06]',
                ].join(' ')}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="leading-tight">{a.label}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="mt-6 px-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[13px] font-bold tracking-tight text-white">
            Recent Escrow &amp; Custody Stream
          </h2>
        </div>

        <Card className="divide-y divide-white/[0.06] overflow-hidden p-0">
          {LEDGER.map((row) => (
            <div key={row.id} className="flex items-center gap-3 px-3.5 py-3">
              <span
                className={[
                  'h-2 w-2 shrink-0 rounded-full',
                  row.tone === 'emerald'
                    ? 'bg-emerald-400'
                    : row.tone === 'violet'
                      ? 'bg-violet-400'
                      : 'bg-brand-500',
                ].join(' ')}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-slate-200">{row.title}</p>
                <p className="font-mono-num mt-0.5 text-[10px] text-slate-500">
                  {row.id} · {row.time}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div
                  className={[
                    'font-mono-num text-[12px] font-bold',
                    row.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-300',
                  ].join(' ')}
                >
                  {row.amount}
                </div>
                <div className="mt-0.5 text-[9.5px] font-semibold text-slate-500">{row.state}</div>
              </div>
            </div>
          ))}
        </Card>
      </section>

      <BottomNav active="dash" />
    </div>
  )
}
