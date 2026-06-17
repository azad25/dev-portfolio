'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { SITE } from '@/lib/constants'
import { EASE_OUT } from '@/lib/motion'
import { orbitingTechs } from '@/data/skills'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16">
      {/* Background radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 py-20 lg:grid-cols-2 lg:gap-8 lg:py-0">

        {/* Left — text */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0 }}
            className="mb-6"
          >
            <Badge variant="mint" pulse>Available for remote work</Badge>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
            className="mb-2 text-xs font-medium tracking-[0.15em] text-slate-500"
          >
            FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.2 }}
            className="font-display mb-4 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Ferdous</span>
            <br />
            <span>Azad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.35 }}
            className="mb-8 max-w-md text-base leading-relaxed text-slate-400 md:text-lg"
          >
            I build fast, scalable web applications — from backend APIs to pixel-perfect
            interfaces. Specialising in React, Node.js &amp; cloud infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View my work
              <ArrowDown size={16} />
            </Button>
            <Button variant="outline" size="lg" href={SITE.cv}>
              <Download size={16} />
              Download CV
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.7 }}
            className="mt-14 hidden items-center gap-3 lg:flex"
          >
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
              <motion.div
                className="h-1.5 w-0.5 rounded-full bg-violet-400"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="text-xs text-slate-500">Scroll to explore</span>
          </motion.div>
        </div>

        {/* Right — orbiting tech icons */}
        <div className="flex items-center justify-center">
          <div className="relative flex h-[340px] w-[340px] items-center justify-center md:h-[400px] md:w-[400px]">
            {/* Glow */}
            <div className="absolute h-48 w-48 rounded-full bg-violet-600/20 blur-3xl" />

            {/* Orbit rings */}
            <div className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-violet-500/15" />
            <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-emerald-400/10" />

            {/* Avatar */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
              className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-violet-600 to-emerald-500"
            >
              <span className="font-display text-2xl font-bold text-white">FA</span>
            </motion.div>

            {/* Orbiting badges */}
            {orbitingTechs.map((tech, i) => {
              const angleRad = (tech.angle * Math.PI) / 180
              const x = Math.cos(angleRad) * tech.radius
              const y = Math.sin(angleRad) * tech.radius

              const colorMap = {
                violet: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
                mint: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-400',
                neutral: 'border-white/10 bg-white/5 text-slate-400',
              } as const

              return (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: EASE_OUT }}
                  className="absolute"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2.5 + i * 0.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3,
                    }}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${colorMap[tech.color]}`}
                  >
                    {tech.label}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
