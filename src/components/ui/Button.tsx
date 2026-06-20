'use client'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const base =
      'group inline-flex items-center justify-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.1em] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draft focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary:
        'bg-ink text-paper-2 shadow-[3px_3px_0_rgba(21,38,59,0.22)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_rgba(21,38,59,0.28)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_rgba(21,38,59,0.22)]',
      outline:
        'border border-line-strong bg-paper-2/50 text-ink hover:border-ink hover:bg-paper-2',
      accent:
        'bg-draft text-white shadow-[3px_3px_0_rgba(206,59,42,0.25)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_rgba(206,59,42,0.3)] active:translate-x-0 active:translate-y-0',
    }

    const sizes = {
      sm: 'h-8 px-4',
      md: 'h-10 px-5',
      lg: 'h-12 px-7 text-[0.8125rem]',
    }

    const classes = cn(base, variants[variant], sizes[size], className)

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
