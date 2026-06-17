'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { skillCategories } from '@/data/skills'
import { EASE_OUT } from '@/lib/motion'

const colorMap = {
  violet: {
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    label: 'text-violet-400',
    dot: 'bg-violet-500',
  },
  mint: {
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-400/5',
    label: 'text-emerald-400',
    dot: 'bg-emerald-400',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02 — SKILLS"
          title="My Tech Stack"
          subtitle="Tools and technologies I reach for when building products."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const colors = colorMap[cat.color]
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
                className={`rounded-2xl border ${colors.border} ${colors.bg} p-6`}
              >
                <p className={`mb-5 text-xs font-semibold uppercase tracking-widest ${colors.label}`}>
                  {cat.label}
                </p>
                <ul className="space-y-3">
                  {cat.skills.map((skill, j) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.2 + i * 0.08 + j * 0.05 }}
                      className="flex items-center gap-2.5 text-sm text-slate-300"
                    >
                      <span className={`h-1 w-1 shrink-0 rounded-full ${colors.dot}`} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Additional tools row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
        >
          <p className="mb-4 text-xs font-medium tracking-widest text-slate-500">ALSO FAMILIAR WITH</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Python', 'Kubernetes', 'Terraform', 'Nginx', 'Jest', 'Playwright',
              'Storybook', 'Figma', 'Zod', 'tRPC', 'Turborepo', 'Nx',
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
