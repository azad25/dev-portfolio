import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    color: 'violet',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML / CSS'],
  },
  {
    label: 'Backend',
    color: 'mint',
    skills: ['Node.js', 'Express', 'Fastify', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    label: 'Database',
    color: 'violet',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle ORM', 'Supabase'],
  },
  {
    label: 'DevOps & Tools',
    color: 'mint',
    skills: ['Docker', 'AWS', 'Vercel', 'CI / CD', 'Git / GitHub', 'Linux'],
  },
]

export const orbitingTechs = [
  { label: 'React', angle: 0, radius: 140, color: 'violet' },
  { label: 'Node.js', angle: 60, radius: 140, color: 'mint' },
  { label: 'Next.js', angle: 120, radius: 140, color: 'violet' },
  { label: 'TypeScript', angle: 180, radius: 140, color: 'neutral' },
  { label: 'PostgreSQL', angle: 240, radius: 140, color: 'mint' },
  { label: 'Docker', angle: 300, radius: 140, color: 'neutral' },
] as const
