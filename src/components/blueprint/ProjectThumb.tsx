/**
 * Placeholder project "screenshot" — a drafted UI wireframe inside a browser
 * frame, rendered as blueprint linework. Six variants for the six projects.
 * Pure SVG (usable in server components); adapts to dark sections via the
 * fill / stroke colour tokens. A scan line sweeps on hover.
 */
export default function ProjectThumb({
  variant = 0,
  accent = 'dim',
  className = '',
}: {
  variant?: number
  accent?: 'dim' | 'draft'
  className?: string
}) {
  const aFill = accent === 'dim' ? 'fill-dim' : 'fill-draft'
  const aStroke = accent === 'dim' ? 'stroke-dim' : 'stroke-draft'

  return (
    <svg
      viewBox="0 0 320 180"
      className={`block w-full ${className}`}
      fill="none"
      role="img"
      aria-label="Project preview wireframe"
    >
      {/* sheet background */}
      <rect x="0" y="0" width="320" height="180" className="fill-paper-2" />

      {/* browser chrome */}
      <rect x="8" y="8" width="304" height="164" rx="3" className="fill-paper stroke-line-strong" />
      <line x1="8" y1="26" x2="312" y2="26" className="stroke-line-strong" strokeWidth="1" />
      <circle cx="16" cy="17" r="2" className={aFill} />
      <circle cx="23" cy="17" r="2" className="fill-ink-faint" />
      <circle cx="30" cy="17" r="2" className="fill-ink-faint" />
      <rect x="40" y="13" width="120" height="8" rx="4" className="fill-paper-sunk" />

      {/* per-variant content, clipped to the viewport */}
      <g className="stroke-ink" strokeWidth="1.2">
        {variant % 6 === 0 && <ErpDash a={aFill} s={aStroke} />}
        {variant % 6 === 1 && <FinanceAI a={aFill} s={aStroke} />}
        {variant % 6 === 2 && <Analytics a={aFill} s={aStroke} />}
        {variant % 6 === 3 && <ApiList a={aFill} s={aStroke} />}
        {variant % 6 === 4 && <Ecommerce a={aFill} s={aStroke} />}
        {variant % 6 === 5 && <ChatApp a={aFill} s={aStroke} />}
      </g>

      {/* hover scan */}
      <rect
        x="8"
        y="26"
        width="60"
        height="146"
        className="fill-dim/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ mixBlendMode: 'multiply' }}
      />
    </svg>
  )
}

type P = { a: string; s: string }

function ErpDash({ a }: P) {
  return (
    <g>
      {/* sidebar */}
      <rect x="16" y="34" width="44" height="130" className="fill-paper-sunk" strokeWidth="0" />
      {[44, 56, 68, 80, 92].map((y) => (
        <line key={y} x1="22" y1={y} x2="54" y2={y} className="stroke-ink-faint" />
      ))}
      <rect x="22" y="40" width="32" height="6" className={a} strokeWidth="0" />
      {/* stat cards */}
      {[68, 152, 236].map((x) => (
        <rect key={x} x={x} y="36" width="72" height="34" className="fill-paper stroke-line-strong" />
      ))}
      <rect x="74" y="42" width="30" height="6" className={a} strokeWidth="0" />
      {/* table */}
      <rect x="68" y="78" width="240" height="86" className="fill-paper stroke-line-strong" />
      {[92, 104, 116, 128, 140, 152].map((y) => (
        <line key={y} x1="76" y1={y} x2="300" y2={y} className="stroke-ink-faint" />
      ))}
      <line x1="140" y1="80" x2="140" y2="162" className="stroke-ink-faint" />
      <line x1="220" y1="80" x2="220" y2="162" className="stroke-ink-faint" />
    </g>
  )
}

function FinanceAI({ a, s }: P) {
  return (
    <g>
      {/* chart panel */}
      <rect x="16" y="34" width="180" height="100" className="fill-paper stroke-line-strong" />
      <polyline points="24,118 50,96 76,104 104,72 132,84 160,52 188,60" className={s} strokeWidth="1.6" fill="none" />
      <polyline points="24,128 50,124 76,118 104,120 132,108 160,110 188,98" className="stroke-ink-faint" fill="none" />
      {/* AI chat bubble */}
      <rect x="16" y="142" width="180" height="22" rx="4" className="fill-paper-sunk" strokeWidth="0" />
      <circle cx="28" cy="153" r="5" className={a} strokeWidth="0" />
      <line x1="40" y1="150" x2="150" y2="150" className="stroke-ink-faint" />
      <line x1="40" y1="157" x2="120" y2="157" className="stroke-ink-faint" />
      {/* stat column */}
      {[34, 76, 118].map((y) => (
        <rect key={y} x="204" y={y} width="104" height="30" className="fill-paper stroke-line-strong" />
      ))}
      <rect x="210" y="40" width="40" height="7" className={a} strokeWidth="0" />
      <rect x="210" y="82" width="56" height="7" className="fill-ink-faint" strokeWidth="0" />
      <rect x="210" y="124" width="34" height="7" className="fill-ink-faint" strokeWidth="0" />
    </g>
  )
}

function Analytics({ a }: P) {
  const bars = [40, 70, 55, 90, 64, 100, 78]
  return (
    <g>
      {/* two stat boxes */}
      <rect x="16" y="34" width="140" height="36" className="fill-paper stroke-line-strong" />
      <rect x="164" y="34" width="140" height="36" className="fill-paper stroke-line-strong" />
      <rect x="22" y="40" width="46" height="8" className={a} strokeWidth="0" />
      <rect x="170" y="40" width="60" height="8" className="fill-ink-faint" strokeWidth="0" />
      {/* bar chart */}
      <rect x="16" y="78" width="288" height="86" className="fill-paper stroke-line-strong" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={28 + i * 38}
          y={158 - h * 0.7}
          width="20"
          height={h * 0.7}
          className={i === 5 ? a : 'fill-paper-sunk'}
          strokeWidth="0"
        />
      ))}
      <line x1="20" y1="158" x2="300" y2="158" className="stroke-ink-faint" />
    </g>
  )
}

function ApiList({ a }: P) {
  const rows = [40, 64, 88, 112, 136]
  return (
    <g>
      {rows.map((y, i) => (
        <g key={y}>
          <rect x="16" y={y} width="220" height="18" className="fill-paper stroke-line-strong" />
          <rect x="22" y={y + 5} width="34" height="8" className={i % 2 === 0 ? a : 'fill-ink-faint'} strokeWidth="0" />
          <line x1="64" y1={y + 9} x2="200" y2={y + 9} className="stroke-ink-faint" />
        </g>
      ))}
      {/* json panel */}
      <rect x="244" y="40" width="64" height="114" className="fill-paper-sunk stroke-line-strong" />
      {[50, 60, 70, 80, 90, 100, 110, 120, 130, 140].map((y, i) => (
        <line key={y} x1={252 + (i % 3) * 4} y1={y} x2={252 + (i % 3) * 4 + (i % 2 ? 36 : 24)} y2={y} className="stroke-ink-faint" />
      ))}
    </g>
  )
}

function Ecommerce({ a }: P) {
  const cells = [0, 1, 2, 3, 4, 5]
  return (
    <g>
      {cells.map((i) => {
        const x = 16 + (i % 3) * 100
        const y = 36 + Math.floor(i / 3) * 66
        return (
          <g key={i}>
            <rect x={x} y={y} width="88" height="58" className="fill-paper stroke-line-strong" />
            <rect x={x + 6} y={y + 6} width="76" height="30" className="fill-paper-sunk" strokeWidth="0" />
            <path d={`M${x + 6} ${y + 36} l20 -14 14 9 18 -12 18 17 z`} className="stroke-ink-faint" fill="none" />
            <line x1={x + 6} y1={y + 44} x2={x + 60} y2={y + 44} className="stroke-ink-faint" />
            <rect x={x + 6} y={y + 48} width="24" height="6" className={i === 1 ? a : 'fill-ink-faint'} strokeWidth="0" />
          </g>
        )
      })}
    </g>
  )
}

function ChatApp({ a, s }: P) {
  return (
    <g>
      {/* contacts */}
      <rect x="16" y="34" width="80" height="130" className="fill-paper-sunk" strokeWidth="0" />
      {[42, 64, 86, 108, 130].map((y, i) => (
        <g key={y}>
          <circle cx="30" cy={y + 6} r="6" className={i === 0 ? a : 'fill-paper'} />
          <line x1="42" y1={y + 4} x2="86" y2={y + 4} className="stroke-ink-faint" />
          <line x1="42" y1={y + 10} x2="74" y2={y + 10} className="stroke-ink-faint" />
        </g>
      ))}
      {/* bubbles */}
      <rect x="104" y="40" width="120" height="20" rx="10" className="fill-paper stroke-line-strong" />
      <rect x="150" y="70" width="150" height="22" rx="11" className={`${a} stroke-none`} fillOpacity="0.18" />
      <rect x="150" y="70" width="150" height="22" rx="11" className={s} fill="none" />
      <rect x="104" y="102" width="100" height="20" rx="10" className="fill-paper stroke-line-strong" />
      <rect x="104" y="142" width="200" height="20" rx="10" className="fill-paper-sunk" strokeWidth="0" />
    </g>
  )
}
