import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import Badge from '@/components/ui/Badge'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { projects } from '@/data/projects'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Ferdous Azad`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  if (!project) notFound()

  const accentClass = project.color === 'violet'
    ? { glow: 'bg-violet-600/20', badge: 'violet' as const, border: 'border-violet-500/30', text: 'text-violet-400' }
    : { glow: 'bg-emerald-400/15', badge: 'mint' as const, border: 'border-emerald-400/30', text: 'text-emerald-400' }

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-3xl">

          {/* Back */}
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to projects
          </Link>

          {/* Header */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 mb-6">
            <div className={`pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full blur-3xl opacity-40 ${accentClass.glow}`} />

            <div className="relative flex items-start justify-between gap-4 mb-6">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold border ${accentClass.border} ${accentClass.text} bg-white/[0.03]`}>
                {project.color === 'violet' ? '<>' : '[ ]'}
              </div>
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <GitHubIcon size={16} />
                    GitHub
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-sm transition-colors hover:opacity-80 ${accentClass.text}`}
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mb-3">{project.title}</h1>
            <p className="text-slate-400 leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Tech stack */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant={accentClass.badge}>{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Live preview */}
          {project.liveUrl && project.liveUrl !== '#' && (
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Live Preview</h2>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between rounded-xl border px-5 py-4 transition-colors hover:bg-white/[0.03] ${accentClass.border}`}
              >
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {project.liveUrl.replace(/^https?:\/\//, '')}
                </span>
                <ExternalLink size={15} className={`${accentClass.text} flex-shrink-0`} />
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
