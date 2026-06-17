import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'senior-fsd',
    role: 'Senior Full Stack Developer',
    company: 'Company Name',
    type: 'Remote',
    period: '2023 — Present',
    current: true,
    description:
      'Leading development of a microservices-based SaaS platform. Architecting scalable backend services and mentoring junior developers.',
    highlights: [
      'Reduced API p95 latency by 40% via Redis caching and query optimisation',
      'Migrated monolith to microservices, improving deployment frequency by 3×',
      'Established code review standards and CI/CD pipelines with GitHub Actions',
    ],
  },
  {
    id: 'fsd',
    role: 'Full Stack Developer',
    company: 'Previous Company',
    type: 'Hybrid',
    period: '2021 — 2023',
    current: false,
    description:
      'Built and maintained multiple React / Node.js products from the ground up. Owned the full development cycle from design to production.',
    highlights: [
      'Delivered an e-commerce platform with Stripe integration, handling £200k+ monthly GMV',
      'Implemented automated testing suite — raised coverage from 12% to 78%',
      'Led frontend rebuild using Next.js, reducing Time to Interactive by 55%',
    ],
  },
  {
    id: 'junior-dev',
    role: 'Junior Web Developer',
    company: 'Agency Name',
    type: 'On-site',
    period: '2020 — 2021',
    current: false,
    description:
      'Developed client websites and web apps. Gained hands-on experience with React, REST APIs, and agile workflows.',
    highlights: [
      'Delivered 12+ client projects on schedule',
      'Built reusable component library that halved frontend build times',
    ],
  },
]
