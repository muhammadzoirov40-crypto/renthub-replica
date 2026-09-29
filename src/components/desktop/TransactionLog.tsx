import { Radio, Lock, ArrowUpRight } from 'lucide-react'
import { TX_LOG } from '../../data/content'

export default function TransactionLog() {
  return (
    <div className="flex items-center gap-4 border-t border-white/[0.07] bg-ink-900/70 px-6 py-3">
      <div className="flex shrink-0 items-center gap-2">
        <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-brand-500/15">
          <Radio className="h-3.5 w-3.5 text-brand-500" />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-bold text-white">Live transaction log</p>
          <p className="text-[10px] text-slate-600">Escrow + government-backed transfers</p>
        </div>
      </div>

      <div className="thin-scroll flex min-w-0 flex-1 items-center gap-3 overflow-x-auto">
        {TX_LOG.map((t) => (
          <div
            key={t.id}
            className="flex shrink-0 items-center gap-2.5 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5"
          >
            <span
              className={[
                'h-1.5 w-1.5 shrink-0 rounded-full',
                t.tone === 'emerald'
                  ? 'bg-emerald-400'
                  : t.tone === 'sky'
                    ? 'bg-sky-400'
                    : 'bg-violet-400',
              ].join(' ')}
            />
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-slate-300">{t.text}</p>
              <p className="font-mono-num text-[9.5px] text-slate-600">{t.id}</p>
            </div>
            <span
              className={[
                'font-mono-num text-[11.5px] font-bold',
                t.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-300',
              ].join(' ')}
            >
              {t.amount}
            </span>
          </div>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-1.5 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1.5 text-[10.5px] font-bold text-emerald-300">
        <Lock className="h-3 w-3" /> AES-256 stream
        <ArrowUpRight className="h-3 w-3" />
      </div>
    </div>
  )
}
