'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { EASE_OUT } from '@/lib/motion'

interface SectionHeaderProps {
  index: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  index,
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className={cn(align === 'center' && 'text-center', className)}
    >
      <p className="mb-2 text-xs font-medium tracking-[0.15em] text-violet-400">{index}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-xl text-slate-400 md:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
