import type { Tone } from './Badge'

const BAR: Record<Tone, string> = {
  brand: 'from-brand-500 to-brand-400',
  emerald: 'from-emerald-500 to-emerald-400',
  violet: 'from-violet-500 to-violet-400',
  sky: 'from-sky-500 to-sky-400',
  slate: 'from-slate-400 to-slate-300',
  rose: 'from-rose-500 to-rose-400',
}

type Props = {
  value: number
  tone?: Tone
  className?: string
}

export default function ProgressBar({ value, tone = 'brand', className = '' }: Props) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div
      className={['h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]', className].join(' ')}
    >
      <div
        className={[
          'h-full rounded-full bg-gradient-to-r transition-[width] duration-700',
          BAR[tone],
        ].join(' ')}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
