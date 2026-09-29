import { useState } from 'react'
import { Monitor, Smartphone } from 'lucide-react'
import DeviceFrame from './components/layout/DeviceFrame'
import BrandLogo from './components/layout/BrandLogo'
import MarketplaceHome from './screens/MarketplaceHome'
import DashboardAnalytics from './screens/DashboardAnalytics'
import MessagesHub from './screens/MessagesHub'
import DesktopCockpit from './screens/DesktopCockpit'

type View = 'mobile' | 'desktop'

const SCREENS = [
  {
    key: 'home',
    title: '01 · Marketplace Home',
    caption: 'Discovery + booking',
    mode: 'scroll' as const,
    node: <MarketplaceHome />,
  },
  {
    key: 'dash',
    title: '02 · Dashboard Analytics',
    caption: 'Terminal cockpit',
    mode: 'scroll' as const,
    node: <DashboardAnalytics />,
  },
  {
    key: 'chat',
    title: '03 · Messages Hub',
    caption: 'Escrow-aware chat',
    mode: 'fixed' as const,
    node: <MessagesHub />,
  },
]

const VIEWS: { key: View; label: string; Icon: typeof Monitor }[] = [
  { key: 'desktop', label: 'Desktop Operations Cockpit', Icon: Monitor },
  { key: 'mobile', label: 'Mobile Boards', Icon: Smartphone },
]

function ViewSwitch({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1">
      {VIEWS.map(({ key, label, Icon }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={[
            'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11.5px] font-bold transition',
            view === key
              ? 'bg-brand-500 text-white'
              : 'text-slate-400 hover:bg-white/[0.06] hover:text-slate-200',
          ].join(' ')}
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const [view, setView] = useState<View>('desktop')

  if (view === 'desktop') {
    return <DesktopCockpit onOpenBoards={() => setView('mobile')} />
  }

  return (
    <div className="board-grid min-h-screen">
      <header className="border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-5">
          <BrandLogo size="md" />
          <div className="flex flex-wrap items-center gap-3">
            <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-slate-400 sm:inline">
              React · Tailwind CSS · TypeScript
            </span>
            <ViewSwitch view={view} onChange={setView} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 py-10">
        <div className="mb-8 max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            RentHub — pixel-perfect UI replica
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Three production-grade screens built from the wireframes: deep dark canvas
            <span className="font-mono-num text-slate-300"> #0d0f12 / #121418</span>, soft
            1px-bordered rounded cards, and{' '}
            <span className="text-brand-500">orange-500</span> brand accents.
          </p>
        </div>

        <div className="no-scrollbar -mx-6 flex gap-8 overflow-x-auto px-6 pb-6">
          {SCREENS.map((s) => (
            <DeviceFrame key={s.key} title={s.title} caption={s.caption} mode={s.mode}>
              {s.node}
            </DeviceFrame>
          ))}
        </div>

        <footer className="mt-4 border-t border-white/[0.06] pt-6 text-[11px] text-slate-600">
          RentHub design system · {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  )
}
