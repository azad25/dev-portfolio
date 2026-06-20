'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FigureLabel from '@/components/blueprint/FigureLabel'
import { EASE_OUT } from '@/lib/motion'

const stats = [
  { value: 5, suffix: '+', label: 'Years in production' },
  { value: 30, suffix: '+', label: 'Projects delivered' },
  { value: 10, suffix: 'k+', label: 'GitHub contributions' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 40
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 1500 / steps)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular">
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden section-padding px-6">
      <div className="glow-dim pointer-events-none absolute -right-32 top-1/4 h-[460px] w-[460px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Left — notes */}
          <div>
            <FigureLabel
              fig="01"
              label="ABOUT"
              title="Drawing software since 2019"
              className="mb-8"
            />

            <div className="space-y-4 text-ink-soft">
              {[
                "I'm a full-stack developer who turns fuzzy problems into clean, fast, maintainable systems. I work end to end — from the database schema to the last hover state.",
                'My sweet spot is React / Next.js on the surface, paired with Node, Go and Laravel services and PostgreSQL underneath — shipped on Docker / AWS with CI/CD from day one.',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 + i * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.3 }}
              >
                Currently drawing up{' '}
                <span className="font-medium text-ink">remote full-stack roles</span>{' '}
                where craft is part of the spec, not an afterthought.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Go', 'Laravel', 'PostgreSQL', 'Docker', 'AWS'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-line bg-paper-2/50 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-ink-soft"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right — spec cells */}
          <div className="grid grid-cols-2 gap-4 self-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
                className="tick-corners sheet p-5"
              >
                <p className="mb-1 font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-ink-faint">
                  {`0${i + 1}`} / METRIC
                </p>
                <p className="font-display text-gradient text-4xl font-semibold">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
