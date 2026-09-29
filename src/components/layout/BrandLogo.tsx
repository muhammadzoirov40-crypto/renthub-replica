type Props = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZES = {
  sm: { box: 'h-7 w-7 rounded-lg', text: 'text-base', glyph: 'text-xs' },
  md: { box: 'h-9 w-9 rounded-xl', text: 'text-xl', glyph: 'text-sm' },
  lg: { box: 'h-11 w-11 rounded-2xl', text: 'text-2xl', glyph: 'text-lg' },
}

export default function BrandLogo({ size = 'md', className = '' }: Props) {
  const s = SIZES[size]
  return (
    <div className={['flex items-center gap-2.5', className].join(' ')}>
      <span
        className={[
          'flex items-center justify-center bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow',
          s.box,
        ].join(' ')}
      >
        <span className={['font-extrabold leading-none text-white', s.glyph].join(' ')}>R</span>
      </span>
      <span className={['font-extrabold tracking-tight text-white', s.text].join(' ')}>
        Rent<span className="text-brand-500">Hub</span>
      </span>
    </div>
  )
}
