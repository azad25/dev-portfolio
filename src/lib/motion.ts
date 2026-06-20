import type { Transition, Variants } from 'framer-motion'

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]
export const EASE_DRAFT: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const transition = (delay = 0, duration = 0.7): Transition => ({
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

/* Stagger container for revealing lists of drafting elements */
export const stagger = (amount = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: amount, delayChildren },
  },
})

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

/* Pen draws the line on: pathLength 0 -> 1 */
export const drawOn = (delay = 0, duration = 1.1): Variants => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration, ease: EASE_DRAFT, delay },
      opacity: { duration: 0.2, delay },
    },
  },
})
