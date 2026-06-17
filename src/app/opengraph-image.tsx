import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ferdous Azad — Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#080808',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'rgba(139,92,246,0.15)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '200px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(6,214,160,0.08)',
            filter: 'blur(80px)',
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(6,214,160,0.1)',
            border: '1px solid rgba(6,214,160,0.3)',
            borderRadius: '100px',
            padding: '8px 18px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#06D6A0',
            }}
          />
          <span style={{ color: '#06D6A0', fontSize: '18px', fontWeight: 500 }}>
            Available for remote work
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span style={{ color: '#F8FAFC' }}>Ferdous Azad</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '32px',
            color: '#94A3B8',
            marginBottom: '48px',
            fontWeight: 400,
          }}
        >
          Full Stack Developer
        </div>

        {/* Tech stack pills */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'].map((tech) => (
            <div
              key={tech}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#94A3B8',
                fontSize: '18px',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            fontSize: '20px',
            color: 'rgba(139,92,246,0.7)',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          ferdousazad.com
        </div>
      </div>
    ),
    { ...size }
  )
}
