import { useState } from 'react'
import { ImageOff } from 'lucide-react'

type Props = {
  src: string
  alt: string
  className?: string
}

/**
 * Remote thumbnail with a branded gradient placeholder, so a slow or failed
 * CDN request degrades to a designed surface instead of an empty black box.
 */
export default function SmartImage({ src, alt, className = '' }: Props) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={[
        'relative overflow-hidden bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900',
        className,
      ].join(' ')}
      role="img"
      aria-label={alt}
    >
      {!failed && (
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.18),transparent_65%)]">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
            <ImageOff className="h-4 w-4 text-slate-500" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            RentHub vault
          </span>
        </div>
      )}
    </div>
  )
}
