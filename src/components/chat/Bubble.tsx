import { FileText, Download, ImageIcon, Lock, CheckCheck } from 'lucide-react'
import VoicePlayer from './VoicePlayer'
import SmartImage from '../ui/SmartImage'
import type { Message } from '../../data/content'

export default function Bubble({ m }: { m: Message }) {
  if (m.type === 'system') {
    return (
      <div className="mx-auto my-3 flex max-w-[86%] items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1.5 text-center text-[10.5px] font-semibold text-brand-300">
        <Lock className="h-3 w-3 shrink-0" />
        <span className="leading-tight">{m.text}</span>
      </div>
    )
  }

  const mine = m.from === 'me'
  const hasAttachment = m.type === 'attachment'

  return (
    <div className={['flex', mine ? 'justify-end' : 'justify-start'].join(' ')}>
      <div className={['max-w-[82%] space-y-1.5', mine ? 'items-end' : 'items-start'].join(' ')}>
        {hasAttachment && m.type === 'attachment' && (
          <div
            className={[
              'overflow-hidden rounded-2xl border',
              mine
                ? 'rounded-br-md border-brand-500/30 bg-brand-500/10'
                : 'rounded-bl-md border-white/[0.08] bg-ink-900',
            ].join(' ')}
          >
            {m.attachment.kind === 'image' && (
              <figure>
                <div className="relative h-[168px] w-[248px]">
                  <SmartImage
                    src={m.attachment.src}
                    alt={m.attachment.caption}
                    className="absolute inset-0 h-full w-full"
                  />
                  <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-md bg-black/60 backdrop-blur">
                    <ImageIcon className="h-3.5 w-3.5 text-slate-300" />
                  </span>
                </div>
                <figcaption className="px-3 py-2 text-[11.5px] text-slate-300">
                  {m.attachment.caption}
                </figcaption>
              </figure>
            )}

            {m.attachment.kind === 'voice' && (
              <div className="w-[264px] px-3 py-3">
                <VoicePlayer duration={m.attachment.duration} />
              </div>
            )}

            {m.attachment.kind === 'file' && (
              <div className="flex w-[268px] items-center gap-3 px-3 py-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/15 text-rose-400">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11.5px] font-semibold text-white">
                    {m.attachment.name}
                  </p>
                  <p className="font-mono-num mt-0.5 text-[10px] text-slate-500">
                    PDF · {m.attachment.size}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Download attachment"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-brand-500/40 hover:text-brand-400"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {m.type === 'text' && (
          <div
            className={[
              'rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-relaxed',
              mine
                ? 'rounded-br-md bg-brand-500 text-white'
                : 'rounded-bl-md border border-white/[0.07] bg-ink-900 text-slate-200',
            ].join(' ')}
          >
            {m.text}
          </div>
        )}

        <div
          className={[
            'flex items-center gap-1 px-1 text-[10px] text-slate-500',
            mine ? 'justify-end' : 'justify-start',
          ].join(' ')}
        >
          <span className="font-mono-num">{m.time}</span>
          {mine && (
            <CheckCheck
              className={['h-3 w-3', m.read ? 'text-brand-400' : 'text-slate-600'].join(' ')}
            />
          )}
        </div>
      </div>
    </div>
  )
}
