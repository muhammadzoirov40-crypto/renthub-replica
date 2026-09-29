import { LayoutGrid, MessageSquare, Gauge, User } from 'lucide-react'

const ITEMS = [
  { key: 'market', label: 'Market', Icon: LayoutGrid },
  { key: 'chat', label: 'Chat', Icon: MessageSquare },
  { key: 'dash', label: 'Dashboard', Icon: Gauge },
  { key: 'profile', label: 'Profile', Icon: User },
]

type Props = {
  active: 'market' | 'chat' | 'dash' | 'profile'
  onChange?: (key: string) => void
}

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav className="absolute inset-x-3 bottom-3 z-20">
      <div className="glass flex items-center justify-around rounded-2xl border border-white/10 px-2 py-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.95)]">
        {ITEMS.map(({ key, label, Icon }) => {
          const on = key === active
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange?.(key)}
              aria-label={label}
              aria-current={on ? 'page' : undefined}
              className={[
                'group flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 transition',
                on ? 'text-brand-500' : 'text-slate-500 hover:text-slate-300',
              ].join(' ')}
            >
              <span
                className={[
                  'flex h-7 w-12 items-center justify-center rounded-full transition',
                  on ? 'bg-brand-500/15' : 'group-hover:bg-white/[0.06]',
                ].join(' ')}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={on ? 2.4 : 1.9} />
              </span>
              <span className="text-[10px] font-semibold tracking-wide">{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
