import { useState } from 'react'
import { ChevronLeft, Phone, Video, MoreVertical, Send, Paperclip, Mic } from 'lucide-react'
import Bubble from '../components/chat/Bubble'
import Card from '../components/ui/Card'
import { CHAT_MESSAGES } from '../data/content'

export default function MessagesHub() {
  const [draft, setDraft] = useState('')

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-ink-950/85 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Back"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-[12px] font-bold text-white">
              AV
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-950 bg-emerald-400" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-bold text-white">Alex Vance</p>
            <p className="truncate text-[10.5px] text-emerald-400">
              Online · inquiring about Sony FX3
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              aria-label="Audio call"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-brand-500/40 hover:text-brand-400"
            >
              <Phone className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Video call"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-brand-500/40 hover:text-brand-400"
            >
              <Video className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="More options"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/[0.06] hover:text-white"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="thin-scroll min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
        <div className="mx-auto w-fit rounded-full bg-white/[0.05] px-3 py-1 text-[10.5px] font-semibold text-slate-500">
          Today
        </div>

        {CHAT_MESSAGES.map((m) => (
          <div key={m.id} className="animate-fade-up">
            <Bubble m={m} />
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 z-20 border-t border-white/[0.06] bg-ink-950/90 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Attach file"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-brand-500/40 hover:text-brand-400"
          >
            <Paperclip className="h-4 w-4" />
          </button>

          <Card className="flex min-w-0 flex-1 items-center gap-2 px-3 py-1.5">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type message or text..."
              aria-label="Type message or text"
              className="min-w-0 flex-1 bg-transparent py-1.5 text-[12.5px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Record voice message"
              className="shrink-0 text-slate-500 transition hover:text-slate-300"
            >
              <Mic className="h-4 w-4" />
            </button>
          </Card>

          <button
            type="button"
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-glow transition hover:bg-brand-600"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
