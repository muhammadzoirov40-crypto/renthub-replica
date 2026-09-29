import { useState } from 'react'
import { Search, Star, SlidersHorizontal, ArrowRight, Zap, ShieldCheck } from 'lucide-react'
import BrandLogo from '../components/layout/BrandLogo'
import BottomNav from '../components/ui/BottomNav'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import SmartImage from '../components/ui/SmartImage'
import { CHIPS, PRODUCTS, STATS } from '../data/content'

export default function MarketplaceHome() {
  const [chip, setChip] = useState(CHIPS[0])

  return (
    <div className="relative">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.06] bg-ink-950/85 px-5 py-3 backdrop-blur-xl">
        <BrandLogo size="sm" />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-brand-500/40 hover:text-brand-400"
            aria-label="Filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-[11px] font-bold text-white">
            M
          </span>
        </div>
      </header>

      <section className="animate-fade-up px-5 pt-5">
        <h1 className="text-[27px] font-extrabold leading-[1.1] tracking-tight text-white">
          Rent Anything,
          <br />
          <span className="text-brand-500">Anywhere.</span>
        </h1>
        <p className="mt-2 max-w-[280px] text-[12.5px] leading-relaxed text-slate-400">
          Everything-as-a-Service — list, escrow and release physical assets with an audited
          custody trail.
        </p>

        <div className="mt-4 flex gap-2.5">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-3 py-2.5 text-[12px] font-bold text-white transition hover:bg-brand-600"
          >
            Browse Marketplace <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[12px] font-bold text-slate-200 transition hover:border-brand-500/40 hover:text-white"
          >
            List an Asset
          </button>
        </div>
      </section>

      <section className="mt-5 px-5">
        <div className="glass flex items-center gap-2.5 rounded-2xl border border-white/10 px-3.5 py-3">
          <Search className="h-4 w-4 shrink-0 text-slate-500" />
          <input
            className="min-w-0 flex-1 bg-transparent text-[12.5px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
            placeholder="Search what you want to rent..."
            aria-label="Search what you want to rent"
          />
        </div>

        <div className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5">
          {CHIPS.map((c) => {
            const on = c === chip
            return (
              <button
                key={c}
                type="button"
                onClick={() => setChip(c)}
                className={[
                  'shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[11.5px] font-semibold transition',
                  on
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:text-slate-200',
                ].join(' ')}
              >
                {c}
              </button>
            )
          })}
        </div>
      </section>

      <section className="mt-4 px-5">
        <Card className="grid grid-cols-3 divide-x divide-white/[0.07] p-0">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-3 text-center">
              <div className="font-mono-num text-[15px] font-bold text-white">{s.value}</div>
              <div className="mt-0.5 text-[9.5px] font-medium leading-tight text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </Card>
      </section>

      <section className="mt-6 px-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[13px] font-bold tracking-tight text-white">Hardware Feed</h2>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-brand-500">
            View all <ArrowRight className="h-3 w-3" />
          </span>
        </div>

        <div className="space-y-3">
          {PRODUCTS.map((p) => (
            <Card key={p.id} interactive className="overflow-hidden">
              <div className="flex gap-3 p-3">
                <div className="relative h-[92px] w-[92px] shrink-0">
                  <SmartImage
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 h-full w-full rounded-xl"
                  />
                  <span className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-md bg-black/60 backdrop-blur">
                    <Zap className="h-3 w-3 text-brand-500" />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="truncate text-[13px] font-bold text-white">{p.name}</h3>
                    <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-slate-300">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {p.rating.toFixed(1)}
                    </span>
                  </div>

                  <p className="mt-0.5 text-[11px] text-slate-500">
                    {p.category} · {p.reviews} reviews
                  </p>

                  <div className="mt-2">
                    <Badge tone={p.badgeTone}>{p.badge}</Badge>
                  </div>

                  <div className="mt-2.5 flex items-end justify-between gap-2">
                    <div>
                      <span className="font-mono-num text-[17px] font-extrabold text-white">
                        ${p.price}
                      </span>
                      <span className="text-[11px] text-slate-500"> / day</span>
                    </div>
                    <button
                      type="button"
                      className="rounded-lg bg-brand-500 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-brand-600"
                    >
                      Instant Book
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[10.5px] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Escrow-backed release · ID verified owner
              </div>
            </Card>
          ))}
        </div>
      </section>

      <BottomNav active="market" />
    </div>
  )
}
