'use client'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import { projects } from '@/data/projects'
import { EASE_OUT } from '@/lib/motion'

export default function Projects() {
  return (
    <section id="projects" className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            index="03 — PROJECTS"
            title="Selected Work"
            subtitle="A few things I've built recently."
          />
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/ferdousazad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <GitHubIcon size={15} />
            View all on GitHub
          </motion.a>
        </div>

        {/* Featured projects — 2 col */}
        <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.filter((p) => p.featured).map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.12 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              {/* Accent glow */}
              <div
                className={`pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0 ${
                  project.color === 'violet' ? 'bg-violet-600/20' : 'bg-emerald-400/15'
                }`}
              />

              {/* Top row — icon + external links */}
              <div className="mb-5 flex items-start justify-between gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold ${
                    project.color === 'violet'
                      ? 'bg-violet-500/15 text-violet-400'
                      : 'bg-emerald-400/10 text-emerald-400'
                  }`}
                >
                  {project.color === 'violet' ? '<>' : '[ ]'}
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-white"
                      aria-label="GitHub repository"
                    >
                      <GitHubIcon size={17} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-white"
                      aria-label="Live site"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <Link href={`/projects/${project.id}`} className="group/title mb-2 block">
                <h3 className="text-lg font-semibold text-white transition-colors group-hover/title:text-slate-300">
                  {project.title}
                </h3>
              </Link>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{project.longDescription}</p>

              {/* Tags + detail link */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant={project.color === 'violet' ? 'violet' : 'mint'}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                    project.color === 'violet'
                      ? 'text-violet-400/70 hover:text-violet-300'
                      : 'text-emerald-400/70 hover:text-emerald-300'
                  }`}
                >
                  Details <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects — 2 col smaller */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.filter((p) => !p.featured).map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex items-start justify-between">
                <Link href={`/projects/${project.id}`} className="group/title">
                  <h3 className="font-semibold text-white transition-colors group-hover/title:text-slate-300">
                    {project.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-white"
                    >
                      <GitHubIcon size={16} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-white"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{project.description}</p>
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
                  className="flex shrink-0 items-center gap-1 text-xs text-slate-500 transition-colors hover:text-white"
                >
                  Details <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
