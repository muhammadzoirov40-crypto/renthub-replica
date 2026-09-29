import type { ReactNode } from 'react'

export type Tone = 'brand' | 'emerald' | 'violet' | 'sky' | 'slate' | 'rose'

const TONES: Record<Tone, string> = {
  brand: 'bg-brand-500/12 text-brand-400 ring-brand-500/30',
  emerald: 'bg-emerald-500/12 text-emerald-400 ring-emerald-500/30',
  violet: 'bg-violet-500/12 text-violet-400 ring-violet-500/30',
  sky: 'bg-sky-500/12 text-sky-400 ring-sky-500/30',
  slate: 'bg-white/[0.06] text-slate-300 ring-white/10',
  rose: 'bg-rose-500/12 text-rose-400 ring-rose-500/30',
}

type Props = {
  children: ReactNode
  tone?: Tone
  className?: string
  dot?: boolean
}

export default function Badge({ children, tone = 'slate', className = '', dot = false }: Props) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10px] font-semibold tracking-wide ring-1 ring-inset',
        TONES[tone],
        className,
      ].join(' ')}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}
