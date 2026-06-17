'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { EASE_OUT } from '@/lib/motion'

const stats = [
  { value: 5, suffix: '+', label: 'Years experience' },
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

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — text */}
          <div>
            <SectionHeader
              index="01 — ABOUT"
              title="Building for the web since 2019"
              className="mb-8"
            />

            <div className="space-y-4 text-slate-400">
              {[
                "I'm a full stack developer who loves turning complex problems into clean, fast, and maintainable software. I work across the entire stack — from designing database schemas to shipping polished UIs.",
                'My sweet spot is React / Next.js on the frontend paired with Node.js microservices and PostgreSQL on the backend — deployed on AWS with proper CI/CD from day one.',
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
                I&apos;m actively looking for{' '}
                <span className="font-medium text-white">remote full stack roles</span>{' '}
                where I can work on products that matter, with teams that care about craft.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4 self-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <p className="font-display mb-1 text-3xl font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
