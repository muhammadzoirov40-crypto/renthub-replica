import { useState } from 'react'
import { Play, Pause } from 'lucide-react'

const WAVE = [
  30, 55, 80, 45, 95, 65, 40, 75, 100, 55, 35, 70, 90, 50, 60, 85, 40, 65, 30, 55, 75, 95, 45, 60,
  80, 35, 70, 50, 90, 40, 65, 85, 55, 30, 75, 50,
]

export default function VoicePlayer({ duration, compact = false }: { duration: string; compact?: boolean }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? 'Pause voice message' : 'Play voice message'}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition hover:bg-brand-600"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
      </button>
      <div className={['flex min-w-0 flex-1 items-center gap-[2px]', compact ? 'h-6' : 'h-8'].join(' ')}>
        {WAVE.map((h, i) => (
          <span
            key={i}
            className={[
              'w-[3px] shrink-0 rounded-full',
              playing && i < 14 ? 'bg-brand-500' : 'bg-white/25',
            ].join(' ')}
            style={{ height: `${Math.max(10, h * (compact ? 0.22 : 0.28))}px` }}
          />
        ))}
      </div>
      <span className="font-mono-num shrink-0 text-[11px] font-semibold text-slate-400">
        {duration}
      </span>
    </div>
  )
}
