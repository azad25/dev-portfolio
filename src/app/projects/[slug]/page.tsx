import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import Badge from '@/components/ui/Badge'
import ProjectThumb from '@/components/blueprint/ProjectThumb'
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
  const index = projects.findIndex((p) => p.id === slug)
  const project = projects[index]
  if (!project) notFound()

  const accent = project.color === 'violet' ? 'text-dim' : 'text-draft'
  const plate = (index + 1).toString().padStart(2, '0')

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 pb-24 pt-28">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-faint transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} />
            Back to index
          </Link>

          {/* Preview plate */}
          <div className="tick-corners sheet mb-4 overflow-hidden">
            <ProjectThumb variant={index} accent={project.color === 'violet' ? 'dim' : 'draft'} />
          </div>

          {/* Header sheet */}
          <div className="sheet mb-4 p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accent}`}>
                PLATE {plate}
              </span>
              <div className="flex items-center gap-4 text-ink-faint">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-ink">
                    <GitHubIcon size={15} />
                    Repo
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-70 ${accent}`}>
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </div>

            <h1 className="font-display mb-3 text-3xl font-semibold tracking-tight text-ink">{project.title}</h1>
            <p className="leading-relaxed text-ink-soft">{project.longDescription}</p>
          </div>

          {/* Tech schedule */}
          <div className="sheet mb-4 p-6">
            <h2 className="tech-label mb-4 text-ink-faint">SPECIFICATION / STACK</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant={project.color}>{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Live preview */}
          {project.liveUrl && project.liveUrl !== '#' && (
            <div className="sheet p-6">
              <h2 className="tech-label mb-4 text-ink-faint">DEPLOYMENT / LIVE</h2>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-line bg-paper px-5 py-4 transition-colors hover:border-ink"
              >
                <span className="font-mono text-sm text-ink-soft transition-colors group-hover:text-ink">
                  {project.liveUrl.replace(/^https?:\/\//, '')}
                </span>
                <ExternalLink size={15} className={`${accent} shrink-0`} />
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
