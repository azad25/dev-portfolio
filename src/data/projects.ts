import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Full-stack analytics platform with real-time data visualisation and role-based access control.',
    longDescription:
      'Multi-tenant SaaS platform serving 50k+ users. Built with Next.js App Router, Prisma ORM, and PostgreSQL. Features real-time charts, team management, and Stripe billing integration.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS'],
    githubUrl: 'https://github.com/ferdousazad',
    liveUrl: '#',
    featured: true,
    color: 'violet',
  },
  {
    id: 'rest-api-platform',
    title: 'High-Throughput REST API',
    description: 'Scalable Node.js API platform with JWT auth, rate limiting, caching, and observability.',
    longDescription:
      'Production-grade REST API handling 10k+ requests/min. Implemented Redis caching, JWT refresh-token rotation, structured logging with Pino, and deployed with Docker on AWS ECS.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'AWS ECS'],
    githubUrl: 'https://github.com/ferdousazad',
    liveUrl: '#',
    featured: true,
    color: 'mint',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce with cart, checkout, payment processing, and admin CMS.',
    longDescription:
      'Built from scratch with Next.js, Stripe, and Supabase. Includes product catalogue, order management, admin dashboard, and email notifications via Resend.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ferdousazad',
    liveUrl: '#',
    featured: false,
    color: 'violet',
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat App',
    description: 'WebSocket-powered chat with rooms, presence indicators, and message history.',
    longDescription:
      'Real-time chat built with Socket.io, React, and MongoDB. Supports multiple rooms, online presence, typing indicators, and persistent message history.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/ferdousazad',
    liveUrl: '#',
    featured: false,
    color: 'mint',
  },
]
