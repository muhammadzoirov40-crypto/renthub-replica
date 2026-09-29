import { Search, Plus, QrCode, Bell, Command } from 'lucide-react'

const QUICK = [
  { label: 'New listing', Icon: Plus, primary: true },
  { label: 'Scan QR', Icon: QrCode, primary: false },
]

export default function TopCommandBar() {
  return (
    <div className="flex items-center gap-3 border-b border-white/[0.07] bg-ink-950/80 px-6 py-3 backdrop-blur-xl">
      <div className="glass flex min-w-0 max-w-[420px] flex-1 items-center gap-2.5 rounded-xl border border-white/10 px-3 py-2">
        <Search className="h-4 w-4 shrink-0 text-slate-500" />
        <input
          aria-label="Search assets, leases and operators"
          placeholder="Search assets, leases, operators..."
          className="min-w-0 flex-1 bg-transparent text-[12.5px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
        <kbd className="flex shrink-0 items-center gap-0.5 rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
          <Command className="h-3 w-3" />K
        </kbd>
      </div>

      <div className="flex items-center gap-2">
        {QUICK.map(({ label, Icon, primary }) => (
          <button
            key={label}
            type="button"
            className={[
              'flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12px] font-bold transition',
              primary
                ? 'bg-brand-500 text-white hover:bg-brand-600'
                : 'border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20',
            ].join(' ')}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-brand-500/40 hover:text-brand-400"
        >
          <Bell className="h-4 w-4" />
        </button>
      </div>

      <div className="ml-auto flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5">
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
        <span className="font-mono-num text-[11px] font-semibold text-emerald-300">
          Telemetry link stable
        </span>
      </div>
    </div>
  )
}
