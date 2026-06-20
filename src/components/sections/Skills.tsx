'use client'
import { motion } from 'framer-motion'
import FigureLabel from '@/components/blueprint/FigureLabel'
import Reveal from '@/components/blueprint/Reveal'
import { skillCategories } from '@/data/skills'
import { EASE_OUT } from '@/lib/motion'

const colorMap = {
  violet: { accent: 'text-dim', dot: 'bg-dim', rule: 'bg-dim/40' },
  mint: { accent: 'text-draft', dot: 'bg-draft', rule: 'bg-draft/40' },
}

const extras = [
  'Python', 'FastAPI', 'Inertia', 'Vue 3', 'Kubernetes', 'Terraform',
  'Nginx', 'Redis', 'gRPC', 'Playwright', 'Storybook', 'Figma',
]

export default function Skills() {
  return (
    <section id="skills" className="print-negative section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <FigureLabel
          fig="02"
          label="SKILLS"
          title="Bill of materials"
          subtitle="The components I reach for, scheduled by layer of the stack."
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
                className="tick-corners sheet flex flex-col p-5"
              >
                <div className="mb-4 flex items-baseline justify-between">
                  <p className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${c.accent}`}>
                    {cat.label}
                  </p>
                  <span className="font-mono text-[0.625rem] text-ink-faint">{`A·${i + 1}`}</span>
                </div>
                <span className={`mb-4 h-px w-full ${c.rule}`} />
                <ul className="space-y-2.5">
                  {cat.skills.map((skill, j) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.2 + i * 0.06 + j * 0.05 }}
                      className="flex items-center gap-2.5 text-sm text-ink-soft"
                    >
                      <span className="font-mono text-[0.625rem] text-ink-faint tabular">
                        {`${(j + 1).toString().padStart(2, '0')}`}
                      </span>
                      <span className={`h-1 w-1 shrink-0 ${c.dot}`} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Addenda */}
        <Reveal
          mode="clip"
          delay={0.15}
          className="mt-4 flex flex-col gap-4 border border-line bg-paper-2/50 p-5 sm:flex-row sm:items-center"
        >
          <p className="tech-label shrink-0 text-ink-faint">ADDENDA / ALSO SPEC'D</p>
          <div className="flex flex-wrap gap-2">
            {extras.map((tool) => (
              <span
                key={tool}
                className="border border-line bg-paper px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-ink-soft"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
