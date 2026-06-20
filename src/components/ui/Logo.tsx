/**
 * Draftsman's mark — an axonometric cube drawn in ink linework.
 * Reads as "I build structures." Used in the navbar, footer, and title block.
 */
export function LogoMark({ size = 30, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* top face — faintly inked */}
      <path
        d="M16 3 L27 9.5 L16 16 L5 9.5 Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* left face */}
      <path
        d="M5 9.5 L16 16 L16 29 L5 22.5 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* right face — revision-red accent edge */}
      <path
        d="M27 9.5 L16 16 L16 29 L27 22.5 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* construction crosshair at centroid */}
      <path d="M16 16 v-3 M16 16 h2.6" className="stroke-draft" strokeWidth="1.4" />
    </svg>
  )
}

/** Logo + wordmark lockup. */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-ink ${className}`}>
      <LogoMark size={26} />
      <span className="font-mono text-sm font-semibold tracking-[0.12em] text-ink">
        F.AZAD<span className="text-draft">_</span>
      </span>
    </span>
  )
}
