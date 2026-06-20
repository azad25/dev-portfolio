'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Grid from '@/components/blueprint/Grid'
import HeroBackdrop from '@/components/blueprint/HeroBackdrop'
import StackSchematic from '@/components/blueprint/StackSchematic'
import { SITE } from '@/lib/constants'
import { EASE_OUT } from '@/lib/motion'
import { useHasMounted } from '@/hooks/useHasMounted'

export default function Hero() {
  const mounted = useHasMounted()
  const reveal = (delay: number) => ({
    initial: mounted ? { opacity: 0, y: 22 } : false,
    animate: { opacity: 1, y: 0 } as const,
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  })

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <Grid />
      <HeroBackdrop />

      {/* Drawing-sheet frame border */}
      <div className="pointer-events-none absolute inset-4 hidden border border-line md:block tick-corners" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:py-0">
        {/* Left — titled drawing */}
        <div className="flex flex-col">
          <motion.div {...reveal(0)} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="tech-label text-ink-faint">DWG. NO — FA·001</span>
            <Badge variant="mint" pulse>
              Available for remote work
            </Badge>
          </motion.div>

          <motion.p {...reveal(0.08)} className="tech-label mb-4 text-ink-soft">
            FULL-STACK ENGINEER&nbsp;
            <span className="text-draft">×</span>&nbsp;FRONTEND CRAFT
          </motion.p>

          <motion.h1
            {...reveal(0.16)}
            className="font-display text-6xl font-semibold leading-[0.95] tracking-tight text-ink md:text-7xl xl:text-8xl"
          >
            Ferdous
            <br />
            <span className="text-gradient">Azad</span>
            <span className="text-draft">.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.3)}
            className="mt-7 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            I engineer the whole system — schemas, services and infrastructure —
            then draw every pixel of the interface by hand. React &amp; Next.js up
            front; Node, Go &amp; Laravel underneath.
          </motion.p>

          <motion.div {...reveal(0.42)} className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View the work
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </Button>
            <Button variant="outline" size="lg" href={SITE.cv}>
              <Download size={15} />
              Spec sheet (CV)
            </Button>
          </motion.div>

          {/* annotation: scroll cue with a leader */}
          <motion.div
            initial={mounted ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.7 }}
            className="mt-14 hidden items-center gap-3 lg:flex"
          >
            <span className="h-px w-10 bg-line-strong" />
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} className="text-draft" />
            </motion.span>
            <span className="tech-label text-ink-faint">SCROLL TO EXPLORE THE SET</span>
          </motion.div>
        </div>

        {/* Right — signature schematic */}
        <motion.div
          initial={mounted ? { opacity: 0, scale: 0.96 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.25 }}
          className="relative"
        >
          <p className="tech-label mb-2 hidden text-right text-ink-faint lg:block">
            FIG.&nbsp;00 — SYSTEM ASSEMBLY, EXPLODED VIEW
          </p>
          <StackSchematic />
        </motion.div>
      </div>
    </section>
  )
}
