'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/ui/SocialIcons'
import FigureLabel from '@/components/blueprint/FigureLabel'
import Button from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { EASE_OUT } from '@/lib/motion'
import type { ContactFormData } from '@/types'

const INITIAL: ContactFormData = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder-ink-faint outline-none transition-colors focus:border-dim'
  const labelClass = 'mb-1.5 block font-mono text-[0.625rem] uppercase tracking-[0.15em] text-ink-faint'

  return (
    <section id="contact" className="relative overflow-hidden section-padding px-6">
      <div className="glow-dim pointer-events-none absolute -right-24 bottom-0 h-[440px] w-[440px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Left */}
          <div>
            <FigureLabel fig="05" label="CONTACT" title="Request for build" className="mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
              className="mb-8 max-w-sm leading-relaxed text-ink-soft"
            >
              Open to remote full-stack roles, freelance builds, and interesting
              collaborations. File a request below or reach out directly.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 }}
              href={`mailto:${SITE.email}`}
              className="mb-10 inline-block border-b border-line-strong pb-1 font-mono text-base text-ink transition-colors hover:border-draft hover:text-draft"
            >
              {SITE.email}
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              {[
                { href: SITE.github, Icon: GitHubIcon, label: 'GitHub' },
                { href: SITE.linkedin, Icon: LinkedInIcon, label: 'LinkedIn' },
                { href: SITE.twitter, Icon: XIcon, label: 'Twitter / X' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 border border-line bg-paper-2/50 px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-ink-soft transition-all hover:border-ink hover:text-ink"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
            className="tick-corners sheet p-6"
          >
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <CheckCircle className="mb-4 h-11 w-11 text-dim" />
                <p className="font-display text-lg font-semibold text-ink">Request filed.</p>
                <p className="mt-2 text-sm text-ink-soft">I&apos;ll respond within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-mono text-xs uppercase tracking-wider text-draft underline-offset-4 hover:underline"
                >
                  File another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Brief</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about the role or project…" className={`${inputClass} resize-none`} />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs text-draft">
                    Transmission failed — please email me directly.
                  </p>
                )}

                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Transmitting…' : (
                    <>
                      Submit request
                      <Send size={14} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
