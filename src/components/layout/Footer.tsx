import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/ui/SocialIcons'
import { LogoMark } from '@/components/ui/Logo'
import { SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="print-negative no-fade-b border-t border-line-strong">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-ink">
            <LogoMark size={26} />
            <div className="font-mono text-xs leading-tight text-ink-soft">
              <p className="text-ink">FERDOUS AZAD</p>
              <p className="text-ink-faint">FULL-STACK · EST. 2019</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-ink-faint">
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" aria-label="GitHub">
              <GitHubIcon size={18} />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" aria-label="LinkedIn">
              <LinkedInIcon size={18} />
            </a>
            <a href={SITE.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" aria-label="Twitter / X">
              <XIcon size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-faint sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} F. Azad — all sheets</p>
          <p>Drawn with Next.js · Framer Motion · Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
