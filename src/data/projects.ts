import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'gen-erp',
    title: 'GenERP BD',
    description: 'Enterprise ERP platform with dynamic multi-tenant configuration, covering sales, HR, inventory, accounting, and POS.',
    longDescription:
      'Full-featured ERP built for Bangladeshi businesses — from sole freelancers to 1,000-employee RMG factories. Multi-tenant (stancl/tenancy), role-based access (Spatie), dynamic workflows, Inertia.js + Vue 3 frontend, REST API with Swagger docs, and PDF/Excel export. Ships with 3 demo scenarios: retail, pharmacy, and garments.',
    tags: ['Laravel 12', 'Vue 3', 'Inertia.js', 'MySQL', 'Tailwind CSS', 'PHP 8.4'],
    githubUrl: 'https://github.com/azad25/gen-erp',
    liveUrl: 'https://ferdousazad.com/erp',
    featured: true,
    color: 'mint',
  },
  {
    id: 'moneymind',
    title: 'MoneyMind Finance AI',
    description: 'AI-powered personal finance agent with natural language interface, budget tracking, and MCP sandbox integration.',
    longDescription:
      'Conversational finance assistant that lets you manage budgets, analyse spending, and get AI-driven insights through natural language. Built with Next.js 16, FastAPI, and an MCP sandbox for tool-augmented AI agents. Features real-time charts, expense categorisation, and a dark-first UI.',
    tags: ['Next.js 16', 'FastAPI', 'Python', 'AI Agent', 'MCP', 'Tailwind CSS'],
    githubUrl: 'https://github.com/azad25/moneymind-finance-ai-agent',
    liveUrl: 'https://ferdousazad.com/moneymind',
    featured: true,
    color: 'violet',
  },
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
