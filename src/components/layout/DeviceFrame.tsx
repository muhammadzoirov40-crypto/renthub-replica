import type { ReactNode } from 'react'

type Props = {
  title: string
  caption: string
  children: ReactNode
  /** `scroll` = long page with floating bottom nav; `fixed` = app shell with its own panes */
  mode?: 'scroll' | 'fixed'
}

/**
 * Phone-sized viewport (390 x 844) presented on the design board,
 * matching the wireframe: rounded bezel, status area, content area.
 */
export default function DeviceFrame({ title, caption, children, mode = 'scroll' }: Props) {
  return (
    <figure className="flex w-[390px] shrink-0 flex-col">
      <figcaption className="mb-3 flex items-baseline gap-2 px-1">
        <span className="text-[13px] font-bold tracking-tight text-white">{title}</span>
        <span className="text-[11px] text-slate-500">{caption}</span>
      </figcaption>

      <div className="relative rounded-[38px] border border-white/10 bg-black p-[6px] shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
        <div className="relative h-[844px] w-full overflow-hidden rounded-[32px] bg-ink-950">
          {/* status bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-40 flex h-11 items-center justify-between px-6 text-[11px] font-semibold text-slate-300">
            <span className="font-mono-num">9:41</span>
            <span className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-4 rounded-[3px] border border-slate-400/70" />
              <span className="h-2.5 w-1.5 rounded-[2px] bg-slate-400/70" />
            </span>
          </div>

          {mode === 'scroll' ? (
            <div className="thin-scroll h-full overflow-y-auto pt-11 pb-24">{children}</div>
          ) : (
            <div className="flex h-full flex-col pt-11">{children}</div>
          )}
        </div>
      </div>
    </figure>
  )
}
