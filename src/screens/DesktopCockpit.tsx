import { useState } from 'react'
import { Search, SlidersHorizontal, Layers } from 'lucide-react'
import Sidebar from '../components/desktop/Sidebar'
import TopCommandBar from '../components/desktop/TopCommandBar'
import MetricsGrid from '../components/desktop/MetricsGrid'
import HardwareGrid from '../components/desktop/HardwareGrid'
import TransactionLog from '../components/desktop/TransactionLog'
import TelemetryPanel from '../components/desktop/TelemetryPanel'
import ChatPanel from '../components/desktop/ChatPanel'
import { DESKTOP_CATEGORIES } from '../data/content'

export default function DesktopCockpit({ onOpenBoards }: { onOpenBoards?: () => void }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [tab, setTab] = useState(DESKTOP_CATEGORIES[0])

  return (
    <div className="flex h-screen w-full overflow-hidden bg-ink-950 text-slate-200">
      <Sidebar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onOpenBoards={onOpenBoards}
      />

      {/* Central workspace */}
      <div className="flex min-w-0 flex-1 flex-col">
        <TopCommandBar />

        <div className="thin-scroll min-h-0 flex-1 overflow-y-auto">
          <div className="px-6 pb-8 pt-6">
            {/* Main header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                  <Layers className="h-3.5 w-3.5 text-brand-500" />
                  Global vault · region EU-Central / ASIA-1
                </div>
                <h1 className="mt-1.5 max-w-[560px] text-[30px] font-extrabold leading-[1.1] tracking-tight text-white">
                  RentHub Global Vault &amp; Operations Cockpit
                </h1>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-2">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
                <span className="font-mono-num text-[12px] font-bold text-emerald-300">
                  Online 99.4%
                </span>
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-emerald-400/70">
                  Telemetry level
                </span>
              </div>
            </div>

            {/* Search + category tabs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="glass flex min-w-[280px] flex-1 items-center gap-2.5 rounded-xl border border-white/10 px-3.5 py-2.5">
                <Search className="h-4 w-4 shrink-0 text-slate-500" />
                <input
                  aria-label="Search the global vault"
                  placeholder="Search vault inventory, leases, custodians..."
                  className="min-w-0 flex-1 bg-transparent text-[12.5px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Search filters"
                  className="shrink-0 text-slate-500 transition hover:text-brand-400"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {DESKTOP_CATEGORIES.map((c) => {
                  const on = c === tab
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setTab(c)}
                      className={[
                        'whitespace-nowrap rounded-lg border px-3.5 py-2.5 text-[12px] font-bold transition',
                        on
                          ? 'border-brand-500 bg-brand-500 text-white'
                          : 'border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200',
                      ].join(' ')}
                    >
                      {c}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6">
              <MetricsGrid />
            </div>

            {/* Hardware deployments */}
            <section className="mt-8">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-[17px] font-bold tracking-tight text-white">
                    Available Hardware Deployments
                  </h2>
                  <p className="mt-1 text-[12.5px] text-slate-500">
                    Verified custody · insured deposits · instant escrow release
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[12px] font-semibold text-slate-400 transition hover:border-white/20 hover:text-slate-200"
                >
                  View all 128 assets
                </button>
              </div>

              <HardwareGrid />
            </section>
          </div>
        </div>

        <TransactionLog />
      </div>

      {/* Right panel */}
      <aside className="flex h-full w-[380px] shrink-0 flex-col border-l border-white/[0.07] bg-ink-950">
        <div className="thin-scroll max-h-[46%] shrink-0 overflow-y-auto p-4">
          <TelemetryPanel />
        </div>
        <ChatPanel />
      </aside>
    </div>
  )
}
