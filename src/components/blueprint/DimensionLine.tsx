'use client'
import { motion } from 'framer-motion'
import { EASE_DRAFT } from '@/lib/motion'

/**
 * A drafting dimension line used as a section divider. Witness ticks at each
 * end, arrowheads pointing inward, and a measurement label that "breaks" the
 * line in the middle. The line draws outward from the centre on scroll-in.
 */
export default function DimensionLine({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-3 text-dim ${className}`}
      aria-hidden="true"
    >
      <Tick />
      <Arrow dir="left" />
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: EASE_DRAFT }}
        style={{ originX: 1 }}
        className="h-px flex-1 bg-current/40"
      />
      <span className="tech-label shrink-0 whitespace-nowrap text-dim">{label}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: EASE_DRAFT }}
        style={{ originX: 0 }}
        className="h-px flex-1 bg-current/40"
      />
      <Arrow dir="right" />
      <Tick />
    </div>
  )
}

function Tick() {
  return <span className="h-3 w-px shrink-0 bg-current/50" />
}

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="7" height="8" viewBox="0 0 7 8" className="shrink-0 text-current">
      {dir === 'left' ? (
        <path d="M7 0 L0 4 L7 8 Z" fill="currentColor" />
      ) : (
        <path d="M0 0 L7 4 L0 8 Z" fill="currentColor" />
      )}
    </svg>
  )
}
