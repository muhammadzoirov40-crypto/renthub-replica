import { TrendingUp, ShieldCheck, Radio, Activity } from 'lucide-react'
import Card from '../ui/Card'
import { DESKTOP_METRICS } from '../../data/content'

const ICONS = [TrendingUp, Activity, ShieldCheck, Radio]

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {DESKTOP_METRICS.map((m, i) => {
        const Icon = ICONS[i % ICONS.length]
        return (
          <Card key={m.label} className="p-4">
            <div className="flex items-start justify-between">
              <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-500">
                {m.label}
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05]">
                <Icon className="h-3.5 w-3.5 text-slate-400" />
              </span>
            </div>
            <div className="font-mono-num mt-3 text-[26px] font-extrabold leading-none text-white">
              {m.value}
            </div>
            <div className="mt-2.5 flex items-center gap-1.5">
              <span
                className={[
                  'h-1.5 w-1.5 rounded-full',
                  m.tone === 'brand'
                    ? 'bg-brand-500'
                    : m.tone === 'emerald'
                      ? 'bg-emerald-400'
                      : m.tone === 'violet'
                        ? 'bg-violet-400'
                        : 'bg-sky-400',
                ].join(' ')}
              />
              <span className="text-[11px] font-semibold text-slate-500">{m.sub}</span>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
