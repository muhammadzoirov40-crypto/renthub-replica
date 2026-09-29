import {
  LayoutGrid,
  Store,
  KeyRound,
  FolderKanban,
  Users,
  LifeBuoy,
  Lock,
  Landmark,
  Wallet,
  Settings,
  Moon,
  Sun,
  Bell,
  Smartphone,
} from 'lucide-react'
import { SIDEBAR_GROUPS } from '../../data/content'

const ICONS: Record<string, typeof LayoutGrid> = {
  Dashboard: LayoutGrid,
  Marketplace: Store,
  'Active Rentals': KeyRound,
  Projects: FolderKanban,
  Customers: Users,
  'Tickets & Support': LifeBuoy,
  'Escrowed Deals': Lock,
  'Escrow Deposits': Landmark,
  'Payouts & Billing': Wallet,
}

type Props = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onOpenBoards?: () => void
}

export default function Sidebar({ theme, onToggleTheme, onOpenBoards }: Props) {
  return (
    <aside className="flex h-full w-[252px] shrink-0 flex-col border-r border-white/[0.07] bg-ink-900">
      {/* Logo */}
      <div className="flex items-center gap-2.5 border-b border-white/[0.07] px-4 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-extrabold text-white shadow-glow">
          R
        </span>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[13.5px] font-extrabold tracking-tight text-white">RentHub</p>
          <p className="truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-500">
            Command Center
          </p>
        </div>
        <button
          type="button"
          aria-label="Notifications"
          className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/[0.06] hover:text-white"
        >
          <Bell className="h-4 w-4" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="thin-scroll min-h-0 flex-1 overflow-y-auto px-3 py-4">
        {SIDEBAR_GROUPS.map((group, gi) => (
          <div key={group.title} className={gi > 0 ? 'mt-5' : ''}>
            <h3 className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const Icon = ICONS[item.label] ?? LayoutGrid
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-current={item.active ? 'page' : undefined}
                      className={[
                        'group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[12.5px] font-semibold transition',
                        item.active
                          ? 'bg-brand-500 text-white shadow-glow'
                          : 'text-slate-400 hover:bg-white/[0.05] hover:text-slate-100',
                      ].join(' ')}
                    >
                      <Icon
                        className={[
                          'h-4 w-4 shrink-0',
                          item.active ? 'text-white' : 'text-slate-500 group-hover:text-slate-300',
                        ].join(' ')}
                      />
                      <span className="truncate">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/[0.07] px-3 py-3">
        <button
          type="button"
          onClick={onOpenBoards}
          className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] font-semibold text-slate-400 transition hover:bg-white/[0.05] hover:text-slate-100"
        >
          <Smartphone className="h-4 w-4 text-slate-500" />
          Mobile boards
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] font-semibold text-slate-400 transition hover:bg-white/[0.05] hover:text-slate-100"
        >
          <Settings className="h-4 w-4 text-slate-500" />
          Settings
        </button>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle colour theme"
          className="mt-1 flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] font-semibold text-slate-400 transition hover:bg-white/[0.05] hover:text-slate-100"
        >
          {theme === 'dark' ? (
            <Moon className="h-4 w-4 text-slate-500" />
          ) : (
            <Sun className="h-4 w-4 text-slate-500" />
          )}
          {theme === 'dark' ? 'Dark mode' : 'Light mode'}
          <span className="ml-auto flex h-4 w-7 items-center rounded-full bg-white/10 p-0.5">
            <span
              className={[
                'h-3 w-3 rounded-full bg-brand-500 transition-transform',
                theme === 'dark' ? '' : 'translate-x-3',
              ].join(' ')}
            />
          </span>
        </button>

        <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-2.5 py-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-[11px] font-bold text-white">
            OA
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[12px] font-bold text-white">Operator Alpha</p>
            <p className="truncate text-[10px] text-slate-500">Root vault access</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
