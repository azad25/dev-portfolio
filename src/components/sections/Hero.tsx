'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { SITE } from '@/lib/constants'
import { EASE_OUT } from '@/lib/motion'
import { useHasMounted } from '@/hooks/useHasMounted'

const orbitingTechs = [
  { label: 'React',   startAngle:   0, radius: 130, duration: 10, ccw: false, color: 'violet'  },
  { label: 'Go',      startAngle:  72, radius: 130, duration: 14, ccw: true,  color: 'mint'    },
  { label: 'Python',  startAngle: 144, radius: 130, duration: 11, ccw: false, color: 'neutral' },
  { label: 'PHP',     startAngle: 216, radius: 130, duration: 15, ccw: true,  color: 'violet'  },
  { label: 'Node.js', startAngle: 288, radius: 130, duration: 12, ccw: false, color: 'mint'    },
] as const

const colorMap = {
  violet:  'border-violet-500/40 bg-violet-500/10 text-violet-300',
  mint:    'border-emerald-400/40 bg-emerald-400/10 text-emerald-400',
  neutral: 'border-white/15 bg-white/5 text-slate-300',
} as const

export default function Hero() {
  const mounted = useHasMounted()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 py-20 lg:grid-cols-2 lg:gap-8 lg:py-0">

        {/* Left — text */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={mounted ? { opacity: 0, y: 24 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0 }}
            className="mb-6"
          >
            <Badge variant="mint" pulse>Available for remote work</Badge>
          </motion.div>

          <motion.p
            initial={mounted ? { opacity: 0, y: 24 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
            className="mb-2 text-xs font-medium tracking-[0.15em] text-slate-500"
          >
            FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={mounted ? { opacity: 0, y: 24 } : false}
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
            initial={mounted ? { opacity: 0, y: 24 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.35 }}
            className="mb-8 max-w-md text-base leading-relaxed text-slate-400 md:text-lg"
          >
            I build fast, scalable web applications — from backend APIs to pixel-perfect
            interfaces. Specialising in React, Node.js &amp; cloud infrastructure.
          </motion.p>

          <motion.div
            initial={mounted ? { opacity: 0, y: 24 } : false}
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

          <motion.div
            initial={mounted ? { opacity: 0 } : false}
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

        {/* Right — orbiting skills */}
        <motion.div
          initial={mounted ? { opacity: 0, scale: 0.9 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          {/* Orbit stage — fixed size square, everything inside is centred */}
          <div className="relative h-[320px] w-[320px] md:h-[380px] md:w-[380px]">

            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-violet-600/25 blur-3xl" />
            </div>

            {/* Orbit ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[266px] w-[266px] rounded-full border border-dashed border-violet-500/20 md:h-[300px] md:w-[300px]" />
            </div>

            {/* Avatar — absolutely centred */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-violet-600 to-emerald-500 shadow-[0_0_40px_rgba(139,92,246,0.35)]">
                <span className="font-display text-xl font-bold text-white">FA</span>
              </div>
            </div>

            {/* Orbiting skill badges
                Pattern: outer wrapper fills the stage and rotates.
                Inner span is offset by radius on X, then counter-rotates
                so the label text stays upright. */}
            {orbitingTechs.map((tech) => {
              const rotateFrom = tech.startAngle
              const rotateTo   = tech.ccw ? rotateFrom - 360 : rotateFrom + 360

              return (
                <motion.div
                  key={tech.label}
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [rotateFrom, rotateTo] }}
                  transition={{ duration: tech.duration, repeat: Infinity, ease: 'linear' }}
                >
                  <motion.span
                    style={{ x: tech.radius }}
                    animate={{ rotate: [-rotateFrom, -rotateTo] }}
                    transition={{ duration: tech.duration, repeat: Infinity, ease: 'linear' }}
                    className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${colorMap[tech.color]}`}
                  >
                    {tech.label}
                  </motion.span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
