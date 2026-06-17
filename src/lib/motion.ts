import type { Transition } from 'framer-motion'

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const transition = (delay = 0, duration = 0.6): Transition => ({
  duration,
  ease: EASE_OUT,
  delay,
})

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: transition(delay),
})
