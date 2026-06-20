import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/layout/SmoothScroll'

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--ff-display',
  display: 'swap',
})

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--ff-body',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--ff-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ferdousazad.com'),
  title: 'Ferdous Azad — Full Stack Developer',
  description:
    'Full stack web developer who engineers complete systems and crafts the interface. React, Next.js, Node.js, Go, Laravel, cloud infrastructure. Open to remote roles.',
  keywords: ['full stack developer', 'react developer', 'next.js', 'node.js', 'frontend engineer', 'remote developer'],
  openGraph: {
    title: 'Ferdous Azad — Full Stack Developer',
    description: 'Engineers the whole stack, then makes the UI sing. React, Node.js, Go, TypeScript, PostgreSQL.',
    url: 'https://ferdousazad.com',
    siteName: 'Ferdous Azad',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferdous Azad — Full Stack Developer',
    description: 'Engineers the whole stack, then makes the UI sing. React, Node.js, Go, TypeScript, PostgreSQL.',
  },
}

export const viewport: Viewport = {
  themeColor: '#e7e9e1',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
