'use client'
import { motion } from 'framer-motion'
import FigureLabel from '@/components/blueprint/FigureLabel'
import Badge from '@/components/ui/Badge'
import { experiences } from '@/data/experience'
import { EASE_OUT, EASE_DRAFT } from '@/lib/motion'

export default function Experience() {
  return (
    <section id="experience" className="print-negative section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <FigureLabel
          fig="04"
          label="EXPERIENCE"
          title="Revision history"
          subtitle="Where I've worked, and what changed because I was there."
          className="mb-12"
        />

        <div className="relative">
          {/* Datum line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, ease: EASE_DRAFT }}
            style={{ originY: 0 }}
            className="absolute left-[6px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line-strong md:block"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
                className="relative md:pl-10"
              >
                {/* Datum marker — square node, draft-red if current */}
                <div
                  className={`absolute left-0 top-2 hidden h-3.5 w-3.5 rotate-45 border md:block ${
                    exp.current ? 'border-draft bg-draft' : 'border-line-strong bg-paper'
                  }`}
                />

                <div className="tick-corners sheet p-6 transition-colors duration-200 hover:border-line-strong">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-ink-faint">
                          REV {String.fromCharCode(67 - i)}
                        </span>
                        {exp.current && (
                          <Badge variant="mint" pulse>
                            Current
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-ink">{exp.role}</h3>
                      <p className="text-sm text-ink-soft">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-xs tabular text-ink-faint">{exp.period}</span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-ink-soft">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.3 + j * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-ink-soft"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-draft" />
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
