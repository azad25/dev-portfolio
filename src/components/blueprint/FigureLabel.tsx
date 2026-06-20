'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { EASE_OUT, EASE_DRAFT } from '@/lib/motion'

/**
 * Section header drawn as a figure reference on a drawing sheet:
 *   ⊕ FIG. 02 / SKILLS  ───────
 *   Display Title
 *   optional subtitle
 * The numbering is meaningful here — the page reads as an ordered sheet set.
 */
export default function FigureLabel({
  fig,
  label,
  title,
  subtitle,
  align = 'left',
  className,
}: {
  fig: string
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={cn(align === 'center' && 'flex flex-col items-center text-center', className)}
    >
      {/* Eyebrow: callout glyph + figure ref + leader line */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="mb-4 flex items-center gap-3"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0 text-draft" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
          <path d="M7 3.5 V10.5 M3.5 7 H10.5" stroke="currentColor" strokeWidth="1" />
        </svg>
        <span className="tech-label text-ink">
          FIG.&nbsp;{fig}&nbsp;<span className="text-ink-faint">/</span>&nbsp;{label}
        </span>
        <motion.span
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
          transition={{ duration: 0.7, ease: EASE_DRAFT, delay: 0.1 }}
          style={{ originX: 0 }}
          className={cn('h-px bg-line-strong', align === 'center' ? 'w-12' : 'w-16 sm:w-28')}
        />
      </motion.div>

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 18 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.85, ease: EASE_DRAFT, delay: 0.05 }}
        className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink md:text-[2.75rem]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.12 }}
          className="mt-3 max-w-xl text-ink-soft md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
