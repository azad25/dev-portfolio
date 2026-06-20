'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Parallax engineering-grid backdrop with register/crosshair marks and a
 * faint construction circle. Layers drift at different rates on scroll so the
 * sheet feels like physical drafting paper sliding under the content.
 */
export default function Grid() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const major = useTransform(scrollYProgress, [0, 1], [0, -90])
  const marks = useTransform(scrollYProgress, [0, 1], [0, -180])
  const circle = useTransform(scrollYProgress, [0, 1], [0, 120])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Major grid — 8× the fine body grid */}
      <motion.div
        style={{ y: major, opacity: fade }}
        className="absolute -inset-x-8 -inset-y-24"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(var(--grid-major) 1px, transparent 1px), linear-gradient(90deg, var(--grid-major) 1px, transparent 1px)',
            backgroundSize: '208px 208px',
          }}
        />
      </motion.div>

      {/* Faint construction circle, drawn off the corner */}
      <motion.svg
        style={{ y: circle, opacity: fade }}
        className="absolute -right-40 top-10 h-[640px] w-[640px] text-ink"
        viewBox="0 0 640 640"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="320" cy="320" r="300" stroke="currentColor" strokeOpacity="0.08" />
        <circle cx="320" cy="320" r="210" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="4 6" />
        <path d="M320 0 V640 M0 320 H640" stroke="currentColor" strokeOpacity="0.05" />
      </motion.svg>

      {/* Register / crosshair marks at the corners — drafting alignment ticks */}
      <motion.div style={{ y: marks, opacity: fade }} className="absolute inset-0">
        {[
          'left-6 top-24',
          'right-8 top-40',
          'left-1/3 bottom-24',
        ].map((pos) => (
          <svg
            key={pos}
            className={`absolute ${pos} h-4 w-4 text-line-strong`}
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M8 0 V16 M0 8 H16" stroke="currentColor" strokeWidth="1" />
          </svg>
        ))}
      </motion.div>
    </div>
  )
}
