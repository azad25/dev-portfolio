import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  /** keys retained from data model; mapped to blueprint accents */
  variant?: 'violet' | 'mint' | 'neutral'
  className?: string
  pulse?: boolean
}

export default function Badge({ children, variant = 'neutral', className, pulse }: BadgeProps) {
  const variants = {
    violet: 'border-dim/35 text-dim bg-dim/[0.07]',
    mint: 'border-draft/35 text-draft bg-draft/[0.07]',
    neutral: 'border-line-strong text-ink-soft bg-paper-2/60',
  }
  const dot = variant === 'mint' ? 'bg-draft' : variant === 'violet' ? 'bg-dim' : 'bg-ink-soft'

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[0.625rem] font-medium uppercase tracking-[0.08em]',
        variants[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={cn('absolute inline-flex h-full w-full animate-ping rounded-full opacity-75', dot)} />
          <span className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', dot)} />
        </span>
      )}
      {children}
    </span>
  )
}
