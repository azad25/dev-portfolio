'use client'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import FigureLabel from '@/components/blueprint/FigureLabel'
import ProjectThumb from '@/components/blueprint/ProjectThumb'
import Badge from '@/components/ui/Badge'
import { projects } from '@/data/projects'
import { EASE_OUT } from '@/lib/motion'

const accent = (color: 'violet' | 'mint') => (color === 'violet' ? 'text-dim' : 'text-draft')
const thumbAccent = (color: 'violet' | 'mint') => (color === 'violet' ? 'dim' : 'draft')

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative overflow-hidden section-padding px-6">
      <div className="glow-draft pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <FigureLabel
            fig="03"
            label="PROJECTS"
            title="Selected drawings"
            subtitle="A few systems I've built end to end — preview plates below."
          />
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/azad25"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft transition-colors hover:text-ink"
          >
            <GitHubIcon size={14} />
            Full archive →
          </motion.a>
        </div>

        {/* Featured plates */}
        <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
              className="tick-corners sheet group relative flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(21,38,59,0.12)]"
            >
              <div
                className={`pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                  project.color === 'violet' ? 'bg-dim/25' : 'bg-draft/20'
                }`}
              />

              {/* preview plate */}
              <div className="relative overflow-hidden border-b border-line">
                <ProjectThumb
                  variant={projects.indexOf(project)}
                  accent={thumbAccent(project.color)}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 border border-line-strong bg-paper/85 px-2 py-0.5 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm">
                  <span className={accent(project.color)}>PLATE {(i + 1).toString().padStart(2, '0')}</span>
                </span>
              </div>

              <div className="relative flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-dim">
                      {project.title}
                    </h3>
                  </Link>
                  <div className="mt-1 flex items-center gap-3 text-ink-faint">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" aria-label="GitHub repository">
                        <GitHubIcon size={16} />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" aria-label="Live site">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-soft">{project.longDescription}</p>

                <span className="mb-4 h-px w-full bg-line" />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant={project.color}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className={`flex items-center gap-1 font-mono text-[0.6875rem] uppercase tracking-wider transition-colors ${accent(project.color)} hover:text-ink`}
                  >
                    Detail <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Secondary plates */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: i * 0.1 }}
              className="sheet group flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgba(21,38,59,0.1)]"
            >
              <div className="overflow-hidden border-b border-line">
                <ProjectThumb
                  variant={projects.indexOf(project)}
                  accent={thumbAccent(project.color)}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="font-display font-semibold text-ink transition-colors group-hover:text-dim">
                      {project.title}
                    </h3>
                  </Link>
                  <div className="mt-0.5 flex items-center gap-3 text-ink-faint">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" aria-label="GitHub repository">
                        <GitHubIcon size={15} />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" aria-label="Live site">
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="neutral">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex shrink-0 items-center gap-1 font-mono text-[0.6875rem] uppercase tracking-wider text-ink-faint transition-colors hover:text-ink"
                  >
                    Detail <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
