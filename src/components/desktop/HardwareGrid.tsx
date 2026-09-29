import { Star, Bookmark, ShieldCheck } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import SmartImage from '../ui/SmartImage'
import { DESKTOP_PRODUCTS } from '../../data/content'

export default function HardwareGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {DESKTOP_PRODUCTS.map((p) => (
        <Card key={p.id} interactive className="flex flex-col overflow-hidden">
          <div className="relative h-[168px] w-full">
            <SmartImage src={p.image} alt={p.name} className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

            <div className="absolute left-3 top-3 flex items-center gap-2">
              <Badge tone={p.badgeTone}>{p.badge}</Badge>
            </div>

            <button
              type="button"
              aria-label="Save to watchlist"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/45 text-slate-300 backdrop-blur transition hover:border-brand-500/50 hover:text-brand-400"
            >
              <Bookmark className="h-4 w-4" />
            </button>

            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 text-[11px] font-semibold text-slate-300">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                {p.rating.toFixed(1)}
              </span>
              <span className="text-slate-500">{p.reviews} reviews</span>
              <span className="ml-auto flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" /> Verified
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-4">
            <h3 className="text-[15px] font-bold leading-snug text-white">{p.name}</h3>
            <p className="mt-1 text-[12px] text-slate-500">{p.category}</p>

            <div className="mt-4 flex items-end justify-between gap-3 border-t border-white/[0.07] pt-3.5">
              <div>
                <span className="font-mono-num text-[24px] font-extrabold leading-none text-white">
                  ${p.price}
                </span>
                <span className="text-[12px] text-slate-500"> / day</span>
                <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-wider text-slate-600">
                  Deposit insured
                </p>
              </div>

              <button
                type="button"
                className={[
                  'shrink-0 rounded-xl px-4 py-2.5 text-[12.5px] font-bold transition',
                  p.cta === 'book'
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'border border-white/12 bg-white/[0.05] text-slate-200 hover:border-brand-500/45 hover:text-brand-400',
                ].join(' ')}
              >
                {p.cta === 'book' ? 'Instant Book' : 'Notify Availability'}
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
