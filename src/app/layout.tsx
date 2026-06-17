import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/layout/SmoothScroll'

export const metadata: Metadata = {
  metadataBase: new URL('https://ferdousazad.com'),
  title: 'Ferdous Azad — Full Stack Developer',
  description:
    'Full stack web developer specialising in React, Next.js, Node.js and cloud infrastructure. Open to remote roles.',
  keywords: ['full stack developer', 'react developer', 'next.js', 'node.js', 'remote developer'],
  openGraph: {
    title: 'Ferdous Azad — Full Stack Developer',
    description: 'Full stack developer open to remote roles. React, Node.js, TypeScript, PostgreSQL.',
    url: 'https://ferdousazad.com',
    siteName: 'Ferdous Azad',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferdous Azad — Full Stack Developer',
    description: 'Full stack developer open to remote roles. React, Node.js, TypeScript, PostgreSQL.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
