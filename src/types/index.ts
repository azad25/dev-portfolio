export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops'
}

export interface SkillCategory {
  label: string
  color: 'violet' | 'mint'
  skills: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  color: 'violet' | 'mint'
}

export interface Experience {
  id: string
  role: string
  company: string
  type: string
  period: string
  current: boolean
  description: string
  highlights: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
