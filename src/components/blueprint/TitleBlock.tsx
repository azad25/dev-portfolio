'use client'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { LogoMark } from '@/components/ui/Logo'

/**
 * Fixed drafting title block, bottom-right — the convention on every
 * engineering sheet. Carries the metadata and a live "sheet position"
 * readout driven by scroll. Desktop only; it's an accent, not navigation.
 */
export default function TitleBlock() {
  const progress = useScrollProgress()
  const pct = Math.round(progress * 100)

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 hidden xl:block">
      <div className="bg-paper-2/90 backdrop-blur-sm shadow-[2px_2px_0_rgba(21,38,59,0.12)]">
        <div className="grid grid-cols-[auto_1fr] divide-x divide-line border border-line-strong">
          {/* Logo cell */}
          <div className="flex items-center justify-center px-3 text-ink">
            <LogoMark size={26} />
          </div>

          <div className="divide-y divide-line">
            <div className="grid grid-cols-2 divide-x divide-line">
              <Cell k="DRAWN BY" v="F. AZAD" />
              <Cell k="SCALE" v="1:1" />
            </div>
            <div className="grid grid-cols-2 divide-x divide-line">
              <Cell k="SHEET" v={`${pct.toString().padStart(2, '0')} / 100`} />
              <Cell k="REV" v="B—2026" />
            </div>
          </div>
        </div>

        {/* Progress underline */}
        <div className="h-[3px] w-full bg-line">
          <div
            className="h-full bg-draft transition-[width] duration-150 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function Cell({ k, v }: { k: string; v: string }) {
  return (
    <div className="px-3 py-1.5">
      <p className="font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-ink-faint">{k}</p>
      <p className="font-mono text-xs font-medium tabular tracking-tight text-ink">{v}</p>
    </div>
  )
}
