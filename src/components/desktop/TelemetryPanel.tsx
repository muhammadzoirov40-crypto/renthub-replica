import { Activity, ChevronRight } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import ProgressBar from '../ui/ProgressBar'
import { DEVICE_STATUS, TELEMETRY } from '../../data/content'

export default function TelemetryPanel() {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500/15">
            <Activity className="h-3.5 w-3.5 text-brand-500" />
          </span>
          <h2 className="text-[13px] font-bold tracking-tight text-white">Telemetry Cockpit</h2>
        </div>
        <Badge tone="emerald" dot>
          ONLINE 99.4%
        </Badge>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.06]">
        {TELEMETRY.map((t) => (
          <div key={t.label} className="px-4 py-3.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-600">
              {t.label}
            </p>
            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span className="font-mono-num text-[20px] font-extrabold leading-none text-white">
                {t.value}
              </span>
              <span className="text-[10.5px] font-semibold text-slate-500">{t.unit}</span>
            </div>
            <div
              className={[
                'mt-2 h-1 w-8 rounded-full',
                t.tone === 'brand'
                  ? 'bg-brand-500'
                  : t.tone === 'emerald'
                    ? 'bg-emerald-400'
                    : t.tone === 'violet'
                      ? 'bg-violet-400'
                      : 'bg-sky-400',
              ].join(' ')}
            />
          </div>
        ))}
      </div>

      <div className="space-y-3 px-4 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-600">
            Device status
          </h3>
          <button
            type="button"
            className="flex items-center gap-0.5 text-[11px] font-semibold text-slate-500 transition hover:text-brand-400"
          >
            Diagnostics <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        {DEVICE_STATUS.map((d) => (
          <div key={d.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11.5px] text-slate-400">{d.label}</span>
              <span className="font-mono-num text-[11px] font-semibold text-slate-300">
                {d.pct}%
              </span>
            </div>
            <ProgressBar value={d.pct} tone={d.tone} />
          </div>
        ))}
      </div>
    </Card>
  )
}
