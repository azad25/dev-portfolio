'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { drawOn } from '@/lib/motion'

/**
 * Ambient animated drafting layer behind the hero: gradient glows, a slowly
 * rotating compass rose, drawn-on dimension annotations, a flowing section
 * line, and a scanning sweep — all subtle, edge-weighted so they frame rather
 * than fight the central schematic.
 */
export default function HeroBackdrop() {
  const reduce = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* gradient depth */}
      <div className="glow-dim absolute -right-24 top-1/4 h-[520px] w-[520px]" />
      <div className="glow-draft absolute -bottom-20 left-[8%] h-[360px] w-[360px]" />

      {/* flowing diagonal section line */}
      <svg className="absolute inset-0 h-full w-full text-dim/40" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="78%" x2="100%" y2="42%" stroke="currentColor" strokeWidth="1" className={reduce ? '' : 'dash-flow'} strokeDasharray="6 8" />
      </svg>

      {/* compass rose, bottom-left */}
      <svg
        className={`absolute -left-10 bottom-8 h-44 w-44 text-line-strong ${reduce ? '' : 'origin-center'}`}
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        style={reduce ? undefined : { animation: 'spin-slow 60s linear infinite' }}
      >
        <circle cx="60" cy="60" r="56" stroke="currentColor" strokeOpacity="0.5" />
        <circle cx="60" cy="60" r="40" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="2 4" />
        <circle cx="60" cy="60" r="3" className="fill-draft" stroke="none" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15 * Math.PI) / 180
          const r1 = i % 6 === 0 ? 44 : 50
          return (
            <line
              key={i}
              x1={60 + Math.cos(a) * r1}
              y1={60 + Math.sin(a) * r1}
              x2={60 + Math.cos(a) * 56}
              y2={60 + Math.sin(a) * 56}
              stroke="currentColor"
              strokeOpacity="0.45"
            />
          )
        })}
        <path d="M60 8 L66 60 L60 112 L54 60 Z" className="fill-dim/30 stroke-dim" strokeWidth="0.8" />
      </svg>

      {/* drawn-on dimension annotation, top-left */}
      <motion.svg
        className="absolute left-6 top-28 hidden h-16 w-40 text-ink-faint lg:block"
        viewBox="0 0 160 64"
        fill="none"
        aria-hidden="true"
        initial="hidden"
        animate="show"
      >
        <motion.path d="M6 12 V52 M154 12 V52" stroke="currentColor" strokeWidth="1" variants={drawOn(0.6, 0.8)} />
        <motion.path d="M6 32 H154" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" variants={drawOn(0.9, 1)} />
        <motion.path d="M6 32 L16 27 M6 32 L16 37" stroke="currentColor" strokeWidth="1" variants={drawOn(1.1, 0.4)} />
        <motion.path d="M154 32 L144 27 M154 32 L144 37" stroke="currentColor" strokeWidth="1" variants={drawOn(1.1, 0.4)} />
      </motion.svg>

      {/* scanning sweep */}
      {!reduce && (
        <div
          className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-transparent via-dim/[0.07] to-transparent"
          style={{ animation: 'scan-sweep 9s ease-in-out infinite' }}
        />
      )}
    </div>
  )
}
