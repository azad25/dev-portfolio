'use client'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'
import { drawOn, EASE_OUT } from '@/lib/motion'

/* ----- isometric helpers ----- */
const HW = 150 // half-width of a plane
const QH = 58 // quarter-height (2:1 dimetric)
const T = 14 // slab thickness
const CX = 200

type Plane = {
  cy: number
  index: string
  label: string
  stack: string
}

const PLANES: Plane[] = [
  { cy: 100, index: '01', label: 'INTERFACE', stack: 'React · Next.js · Tailwind' },
  { cy: 240, index: '02', label: 'SERVICES', stack: 'Node · Go · Laravel · FastAPI' },
  { cy: 380, index: '03', label: 'DATA', stack: 'Postgres · Redis · MySQL' },
]

const topFace = (cy: number) =>
  `M${CX - HW} ${cy} L${CX} ${cy - QH} L${CX + HW} ${cy} L${CX} ${cy + QH} Z`

const labelStyle = { fontFamily: 'var(--ff-mono)' } as const

export default function StackSchematic() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Scroll "explodes" the assembly apart.
  const yTop = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 8])
  const yBot = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 82])
  const planeY = [yTop, yMid, yBot]

  return (
    <div ref={ref} className="relative w-full">
      {/* gradient glow behind the assembly */}
      <div className="glow-dim pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        animate={reduce ? undefined : { y: [0, -9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
      <motion.svg
        viewBox="0 0 560 472"
        fill="none"
        className="relative w-full overflow-visible"
        initial={reduce ? 'show' : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {/* Assembly axis — the exploded-view alignment line */}
        <motion.line
          x1={CX}
          y1={24}
          x2={CX}
          y2={456}
          className="stroke-dim"
          strokeWidth="1"
          strokeDasharray="2 5"
          variants={drawOn(0.1, 1.2)}
        />

        {/* Planes (top plane first in DOM) */}
        {PLANES.map((p, i) => (
          <PlaneGroup key={p.index} plane={p} y={planeY[i]} delay={0.15 + i * 0.18} reduce={!!reduce} />
        ))}

        {/* Data-flow particles travelling down the axis, on top of the stack */}
        {!reduce && <Particles />}
      </motion.svg>
      </motion.div>
    </div>
  )
}

function PlaneGroup({
  plane,
  y,
  delay,
  reduce,
}: {
  plane: Plane
  y: MotionValue<number>
  delay: number
  reduce: boolean
}) {
  const { cy, index, label, stack } = plane
  const L = CX - HW
  const R = CX + HW

  return (
    <motion.g style={{ y }}>
      {/* sonar pulse — the layer is alive */}
      {!reduce && (
        <motion.circle
          cx={CX}
          cy={cy}
          className="stroke-dim"
          fill="none"
          strokeWidth="1"
          initial={{ r: 5, opacity: 0 }}
          animate={{ r: [5, 22], opacity: [0.5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut', delay: delay + 0.4 }}
        />
      )}
      {/* Slab side faces (thickness) */}
      <motion.path
        d={`M${L} ${cy} L${CX} ${cy + QH} L${CX} ${cy + QH + T} L${L} ${cy + T} Z`}
        className="fill-paper-sunk stroke-line-strong"
        strokeWidth="1"
        variants={fade(delay + 0.5)}
      />
      <motion.path
        d={`M${CX} ${cy + QH} L${R} ${cy} L${R} ${cy + T} L${CX} ${cy + QH + T} Z`}
        className="fill-paper-sunk stroke-line-strong"
        strokeWidth="1"
        variants={fade(delay + 0.5)}
      />

      {/* Top face fill, then drawn-on outline */}
      <motion.path d={topFace(cy)} className="fill-paper-2" fillOpacity="0.92" variants={fade(delay + 0.35)} />
      <motion.path
        d={topFace(cy)}
        className="stroke-ink"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
        variants={drawOn(delay, 0.9)}
      />

      {/* Per-layer glyph */}
      <motion.g variants={fade(delay + 0.55)}>
        {index === '01' && <UIGlyph cy={cy} />}
        {index === '02' && <ServicesGlyph cy={cy} />}
        {index === '03' && <DataGlyph cy={cy} />}
      </motion.g>

      {/* Leader line + label out to the right */}
      <motion.g variants={fade(delay + 0.65)} style={labelStyle}>
        <path
          d={`M${R} ${cy} L${R + 26} ${cy}`}
          className="stroke-ink-faint"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle cx={R + 26} cy={cy} r="2.5" className="fill-draft" />
        <text x={R + 36} y={cy - 3} fontSize="13" fontWeight="600" className="fill-ink" style={labelStyle}>
          <tspan className="fill-draft">{index}</tspan> {label}
        </text>
        <text x={R + 36} y={cy + 13} fontSize="10" className="fill-ink-soft" style={labelStyle}>
          {stack}
        </text>
      </motion.g>
    </motion.g>
  )
}

/* ---------- layer glyphs (flat, centred on each plane) ---------- */

function UIGlyph({ cy }: { cy: number }) {
  return (
    <g className="stroke-ink" strokeWidth="1.3" fill="none">
      <rect x={CX - 38} y={cy - 24} width="76" height="48" rx="3" className="fill-paper" />
      <line x1={CX - 38} y1={cy - 12} x2={CX + 38} y2={cy - 12} />
      <circle cx={CX - 31} cy={cy - 18} r="1.5" className="fill-draft stroke-none" />
      <circle cx={CX - 25} cy={cy - 18} r="1.5" className="fill-ink-faint stroke-none" />
      <circle cx={CX - 19} cy={cy - 18} r="1.5" className="fill-ink-faint stroke-none" />
      <rect x={CX - 31} y={cy - 5} width="26" height="20" rx="2" className="fill-paper-2" />
      <line x1={CX + 1} y1={cy - 2} x2={CX + 30} y2={cy - 2} className="stroke-ink-soft" />
      <line x1={CX + 1} y1={cy + 4} x2={CX + 30} y2={cy + 4} className="stroke-ink-soft" />
      <line x1={CX + 1} y1={cy + 10} x2={CX + 20} y2={cy + 10} className="stroke-ink-soft" />
      {/* blinking caret — live UI */}
      <rect x={CX + 23} y={cy + 6} width="2.5" height="7" className="animate-pulse fill-draft stroke-none" />
    </g>
  )
}

function ServicesGlyph({ cy }: { cy: number }) {
  const nodes = [
    { x: CX - 40, y: cy },
    { x: CX, y: cy - 14 },
    { x: CX, y: cy + 14 },
    { x: CX + 40, y: cy },
  ]
  return (
    <g className="stroke-ink" strokeWidth="1.3">
      <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} className="stroke-ink-faint" />
      <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[2].x} y2={nodes[2].y} className="stroke-ink-faint" />
      <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[3].x} y2={nodes[3].y} className="stroke-ink-faint" />
      <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[3].x} y2={nodes[3].y} className="stroke-ink-faint" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="6" className="fill-paper" />
      ))}
      <circle cx={nodes[1].x} cy={nodes[1].y} r="3" className="fill-draft stroke-none" />
    </g>
  )
}

function DataGlyph({ cy }: { cy: number }) {
  return (
    <g className="stroke-ink fill-paper" strokeWidth="1.3">
      {/* database cylinder */}
      <ellipse cx={CX - 8} cy={cy - 14} rx="22" ry="7" />
      <path d={`M${CX - 30} ${cy - 14} V${cy + 12} a22 7 0 0 0 44 0 V${cy - 14}`} />
      <path d={`M${CX - 30} ${cy - 1} a22 7 0 0 0 44 0`} fill="none" className="stroke-ink-faint" />
      {/* cache chip */}
      <rect x={CX + 22} y={cy - 8} width="20" height="20" rx="2" className="fill-paper-2 stroke-ink" />
      <path d={`M${CX + 27} ${cy - 8} v20 M${CX + 37} ${cy - 8} v20`} className="stroke-ink-faint" strokeWidth="1" />
    </g>
  )
}

/* ---------- ambient data-flow particles ---------- */
function Particles() {
  const dots = [0, 1, 2, 3]
  return (
    <>
      {dots.map((d) => (
        <motion.circle
          key={d}
          cx={CX}
          r="2.4"
          className={d % 2 === 0 ? 'fill-draft' : 'fill-dim'}
          initial={{ cy: 30, opacity: 0 }}
          animate={{ cy: [30, 450], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: 'easeIn',
            delay: d * 0.65,
          }}
        />
      ))}
    </>
  )
}

/* simple fade-up variant local to this file */
function fade(delay: number) {
  return {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT, delay } },
  }
}
