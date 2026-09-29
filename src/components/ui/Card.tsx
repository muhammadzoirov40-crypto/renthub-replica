import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export default function Card({ children, className = '', interactive = false }: Props) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/[0.07] bg-ink-900 shadow-card',
        interactive
          ? 'transition-colors duration-200 hover:border-white/[0.14] hover:bg-ink-850'
          : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
