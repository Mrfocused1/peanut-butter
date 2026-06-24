/*
 * Hand-drawn brush-stroke underline.
 * A filled, tapered stroke path (thick body, brush lift-off at the right tip)
 * roughened with an feTurbulence + feDisplacementMap filter so the edges read
 * as hand-painted rather than a clean rectangle. Each instance needs a unique
 * `id` so the filter references don't collide.
 */
export default function BrushUnderline({ className = '', id = 'brush', color = '#c87508' }) {
  const fid = `${id}-rough`
  return (
    <svg
      className={className}
      viewBox="0 0 300 30"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <filter id={fid} x="-8%" y="-60%" width="116%" height="220%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.14"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <path
        filter={`url(#${fid})`}
        fill={color}
        d="M7 15
           C 78 8, 150 9, 214 11
           C 250 12, 278 14, 296 13
           C 278 19, 250 20, 214 20
           C 150 22, 78 23, 9 26
           C 2.5 25, 2 18, 7 15 Z"
      />
    </svg>
  )
}
