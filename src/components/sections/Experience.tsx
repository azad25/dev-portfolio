'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import { experiences } from '@/data/experience'
import { EASE_OUT } from '@/lib/motion'

export default function Experience() {
  return (
    <section id="experience" className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04 — EXPERIENCE"
          title="Work History"
          subtitle="Companies I've worked with and the impact I've made."
          className="mb-14"
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent md:block"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
                className="relative md:pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-[#080808] md:block"
                  style={{
                    background: exp.current
                      ? 'rgb(139 92 246)'
                      : 'rgba(139 92 246 / 0.35)',
                  }}
                />

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.1] hover:bg-white/[0.03]">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{exp.role}</h3>
                      <p className="text-sm text-slate-400">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">{exp.period}</span>
                      {exp.current && (
                        <Badge variant="mint" pulse>
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-slate-400">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.3 + j * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-slate-400"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
