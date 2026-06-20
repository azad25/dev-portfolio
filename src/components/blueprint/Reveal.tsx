'use client'
import { motion, type Variants } from 'framer-motion'
import { EASE_OUT, EASE_DRAFT } from '@/lib/motion'

type Mode = 'up' | 'clip' | 'scale' | 'left' | 'right'

const VARIANTS: Record<Mode, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  },
  left: {
    hidden: { opacity: 0, x: -28 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  },
  right: {
    hidden: { opacity: 0, x: 28 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE_OUT } },
  },
  // slide in from left — cross-browser safe reveal
  clip: {
    hidden: { opacity: 0, x: -36 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: EASE_DRAFT },
    },
  },
}

export default function Reveal({
  children,
  mode = 'up',
  delay = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  mode?: Mode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'span'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={VARIANTS[mode]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
