import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'violet' | 'mint' | 'neutral'
  className?: string
  pulse?: boolean
}

export default function Badge({ children, variant = 'neutral', className, pulse }: BadgeProps) {
  const variants = {
    violet: 'bg-violet-500/10 text-violet-300 border-violet-500/25',
    mint: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/25',
    neutral: 'bg-white/5 text-slate-400 border-white/10',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={cn(
              'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
              variant === 'mint' ? 'bg-emerald-400' : 'bg-violet-400'
            )}
          />
          <span
            className={cn(
              'relative inline-flex h-1.5 w-1.5 rounded-full',
              variant === 'mint' ? 'bg-emerald-400' : 'bg-violet-400'
            )}
          />
        </span>
      )}
      {children}
    </span>
  )
}
