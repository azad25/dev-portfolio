'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useHasMounted } from '@/hooks/useHasMounted'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { EASE_OUT } from '@/lib/motion'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'

export default function Navbar() {
  const mounted = useHasMounted()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={mounted ? { y: -80, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link, i) => {
              const id = link.href.replace('#', '')
              const active = activeSection === id
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'group flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-200',
                    active ? 'text-ink' : 'text-ink-faint hover:text-ink'
                  )}
                >
                  <span className={cn('text-[0.625rem]', active ? 'text-draft' : 'text-ink-faint/60')}>
                    {`0${i + 1}`}
                  </span>
                  {link.label}
                </button>
              )
            })}
          </nav>

          <div className="hidden md:flex">
            <Button href={`mailto:${SITE.email}`} size="sm">
              Hire me
            </Button>
          </div>

          <button
            className="flex items-center justify-center p-2 text-ink-soft hover:text-ink md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-line bg-paper/97 px-6 py-4 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-2 py-2 text-left font-mono text-sm uppercase tracking-wider text-ink-soft hover:text-ink"
                >
                  <span className="text-[0.625rem] text-draft">{`0${i + 1}`}</span>
                  {link.label}
                </button>
              ))}
              <Button href={`mailto:${SITE.email}`} size="sm" className="mt-3 w-full">
                Hire me
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
