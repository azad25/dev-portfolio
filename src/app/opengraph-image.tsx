import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ferdous Azad — Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const INK = '#15263b'
const PAPER = '#e7e9e1'
const PAPER2 = '#eef0e9'
const DRAFT = '#ce3b2a'
const SOFT = '#3c4d61'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: PAPER,
          backgroundImage:
            'linear-gradient(rgba(21,38,59,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(21,38,59,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          fontFamily: 'sans-serif',
          position: 'relative',
          color: INK,
        }}
      >
        {/* drawing frame */}
        <div
          style={{
            position: 'absolute',
            top: '28px',
            left: '28px',
            right: '28px',
            bottom: '28px',
            border: '1px solid rgba(21,38,59,0.3)',
          }}
        />

        {/* top row: mark + dwg no */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
              <path d="M16 3 L27 9.5 L16 16 L5 9.5 Z" fill={INK} fillOpacity="0.1" stroke={INK} strokeWidth="1.4" />
              <path d="M5 9.5 L16 16 L16 29 L5 22.5 Z" stroke={INK} strokeWidth="1.4" />
              <path d="M27 9.5 L16 16 L16 29 L27 22.5 Z" stroke={INK} strokeWidth="1.4" />
              <path d="M16 16 v-3 M16 16 h2.6" stroke={DRAFT} strokeWidth="1.4" />
            </svg>
            <span style={{ fontSize: '22px', letterSpacing: '0.12em', fontWeight: 600 }}>F.AZAD</span>
          </div>
          <span style={{ fontSize: '18px', letterSpacing: '0.15em', color: SOFT }}>DWG. NO — FA·001</span>
        </div>

        {/* center */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
          <span style={{ fontSize: '20px', letterSpacing: '0.18em', color: DRAFT, marginBottom: '18px' }}>
            FULL-STACK ENGINEER × FRONTEND CRAFT
          </span>
          <div style={{ display: 'flex', fontSize: '116px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
            <span>Ferdous Azad</span>
            <span style={{ color: DRAFT }}>.</span>
          </div>
          <span style={{ fontSize: '26px', color: SOFT, marginTop: '20px', maxWidth: '760px' }}>
            Engineers the whole stack, then draws every pixel of the interface.
          </span>
        </div>

        {/* bottom row: tags + title block */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['React', 'Next.js', 'Node', 'Go', 'Laravel', 'Postgres'].map((t) => (
              <div
                key={t}
                style={{
                  display: 'flex',
                  border: '1px solid rgba(21,38,59,0.3)',
                  background: PAPER2,
                  padding: '7px 14px',
                  fontSize: '17px',
                  color: SOFT,
                }}
              >
                {t}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid rgba(21,38,59,0.3)', background: PAPER2 }}>
            <div style={{ display: 'flex' }}>
              <TBCell k="DRAWN BY" v="F. AZAD" />
              <TBCell k="SCALE" v="1:1" border />
            </div>
            <div style={{ display: 'flex', borderTop: '1px solid rgba(21,38,59,0.16)' }}>
              <TBCell k="SHEET" v="01 / 100" />
              <TBCell k="REV" v="B—2026" border />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

function TBCell({ k, v, border }: { k: string; v: string; border?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 16px',
        width: '160px',
        borderLeft: border ? '1px solid rgba(21,38,59,0.16)' : 'none',
      }}
    >
      <span style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'rgba(21,38,59,0.55)' }}>{k}</span>
      <span style={{ fontSize: '20px', fontWeight: 600 }}>{v}</span>
    </div>
  )
}
