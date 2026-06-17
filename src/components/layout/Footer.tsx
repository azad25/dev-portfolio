import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/ui/SocialIcons'
import { SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ferdous Azad. Built with Next.js & Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-white" aria-label="GitHub">
            <GitHubIcon size={18} />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-white" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
          <a href={SITE.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-white" aria-label="Twitter / X">
            <XIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
