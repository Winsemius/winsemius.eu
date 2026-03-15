"use client";

export default function JEFMap() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="400" height="400" fill="var(--color-surface-raised)" rx="4" />

        {/* Grid overlay */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-border)" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" rx="4" />

        {/* Baltic Sea highlight */}
        <path
          d="M200 120 Q220 160 210 200 Q200 240 220 280 Q230 300 240 320 Q220 330 200 320 Q180 300 185 270 Q190 240 180 200 Q175 160 190 120Z"
          fill="var(--color-amber)"
          opacity="0.06"
        />

        {/* Norway */}
        <path
          d="M140 40 L150 35 L158 50 L155 80 L150 120 L145 150 L140 170 L135 150 L130 120 L132 80 L135 50Z"
          fill="var(--color-amber)"
          opacity="0.4"
          stroke="var(--color-amber)"
          strokeWidth="0.5"
          strokeOpacity="0.6"
        />

        {/* Sweden */}
        <path
          d="M165 45 L180 40 L185 60 L190 100 L192 140 L190 180 L185 210 L175 220 L170 200 L168 160 L165 120 L160 80Z"
          fill="var(--color-amber)"
          opacity="0.4"
          stroke="var(--color-amber)"
          strokeWidth="0.5"
          strokeOpacity="0.6"
        />

        {/* Finland */}
        <path
          d="M210 30 L225 25 L235 50 L240 80 L238 120 L235 160 L230 190 L220 200 L215 180 L210 140 L205 100 L205 60Z"
          fill="var(--color-amber)"
          opacity="0.4"
          stroke="var(--color-amber)"
          strokeWidth="0.5"
          strokeOpacity="0.6"
        />

        {/* Denmark */}
        <path
          d="M155 230 L170 225 L175 235 L178 245 L172 255 L162 258 L155 250 L152 240Z"
          fill="var(--color-amber)"
          opacity="0.45"
          stroke="var(--color-amber)"
          strokeWidth="0.5"
          strokeOpacity="0.6"
        />

        {/* Estonia */}
        <rect x="230" y="195" width="30" height="16" rx="2"
          fill="var(--color-amber)" opacity="0.4" stroke="var(--color-amber)" strokeWidth="0.5" strokeOpacity="0.6"
        />

        {/* Latvia */}
        <rect x="228" y="218" width="32" height="18" rx="2"
          fill="var(--color-amber)" opacity="0.4" stroke="var(--color-amber)" strokeWidth="0.5" strokeOpacity="0.6"
        />

        {/* Lithuania */}
        <rect x="225" y="243" width="34" height="20" rx="2"
          fill="var(--color-amber)" opacity="0.4" stroke="var(--color-amber)" strokeWidth="0.5" strokeOpacity="0.6"
        />

        {/* Netherlands */}
        <path
          d="M115 268 L128 264 L132 275 L130 288 L122 292 L114 286 L112 278Z"
          fill="var(--color-amber)"
          opacity="0.6"
          stroke="var(--color-amber)"
          strokeWidth="0.5"
          strokeOpacity="0.8"
        />

        {/* UK */}
        <path
          d="M65 200 L80 190 L90 195 L95 210 L92 240 L88 270 L82 285 L72 280 L68 260 L62 235 L60 215Z"
          fill="var(--color-amber)"
          opacity="0.4"
          stroke="var(--color-amber)"
          strokeWidth="0.5"
          strokeOpacity="0.6"
        />

        {/* Iceland */}
        <ellipse cx="40" cy="60" rx="22" ry="14"
          fill="var(--color-amber)" opacity="0.35" stroke="var(--color-amber)" strokeWidth="0.5" strokeOpacity="0.6"
        />

        {/* Non-JEF context land */}
        <path
          d="M140 265 L155 260 L195 260 L220 255 L225 270 L220 300 L200 310 L170 310 L145 300 L138 280Z"
          fill="var(--color-text-muted)"
          opacity="0.15"
          stroke="var(--color-border)"
          strokeWidth="0.5"
        />
        {/* Russia */}
        <path
          d="M265 180 L310 170 L340 180 L350 210 L345 250 L330 270 L300 275 L270 260 L262 230 L260 200Z"
          fill="var(--color-red)"
          opacity="0.08"
          stroke="var(--color-red)"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />

        {/* Amsterdam dot with pulse */}
        <circle cx="122" cy="278" r="8" fill="var(--color-amber)" opacity="0.15"
          style={{ animation: "pulse-subtle 3s ease-in-out infinite", transformOrigin: "122px 278px" }}
        />
        <circle cx="122" cy="278" r="3" fill="var(--color-amber)" opacity="0.9" />

        {/* Connection lines from Amsterdam */}
        {[
          [122, 278, 75, 240],   // to UK
          [122, 278, 142, 100],  // to Norway
          [122, 278, 178, 130],  // to Sweden
          [122, 278, 225, 120],  // to Finland
          [122, 278, 165, 242],  // to Denmark
          [122, 278, 245, 203],  // to Estonia
          [122, 278, 244, 227],  // to Latvia
          [122, 278, 242, 253],  // to Lithuania
        ].map(([x1, y1, x2, y2], i) => (
          <line key={`conn${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="var(--color-amber)" strokeWidth="0.5" opacity="0.2"
            strokeDasharray="4 4"
          />
        ))}

        {/* Labels */}
        <text x="108" y="306" fill="var(--color-amber)" fontSize="9" fontFamily="var(--font-mono)" fontWeight="500" opacity="0.9">
          AMS
        </text>

        <text x="290" y="150" fill="var(--color-text-muted)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="500" opacity="0.5" letterSpacing="0.15em">
          JEF REGION
        </text>

        <text x="188" y="260" fill="var(--color-amber)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.3" letterSpacing="0.2em" transform="rotate(-70, 188, 260)">
          BALTIC
        </text>

        {/* Country labels */}
        <text x="42" y="90" fill="var(--color-text-muted)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">IS</text>
        <text x="75" y="250" fill="var(--color-text-muted)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">UK</text>
        <text x="142" y="115" fill="var(--color-text-muted)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">NO</text>
        <text x="178" y="130" fill="var(--color-text-muted)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">SE</text>
        <text x="225" y="120" fill="var(--color-text-muted)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">FI</text>
        <text x="165" y="248" fill="var(--color-text-muted)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">DK</text>
        <text x="246" y="208" fill="var(--color-text-muted)" fontSize="6.5" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">EE</text>
        <text x="244" y="232" fill="var(--color-text-muted)" fontSize="6.5" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">LV</text>
        <text x="242" y="257" fill="var(--color-text-muted)" fontSize="6.5" fontFamily="var(--font-mono)" opacity="0.4" textAnchor="middle">LT</text>

        {/* Russia label */}
        <text x="305" y="225" fill="var(--color-red)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.3" textAnchor="middle">RU</text>
      </svg>
    </div>
  );
}
