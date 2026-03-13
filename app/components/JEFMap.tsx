"use client";

export default function JEFMap() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Background sea */}
        <rect width="400" height="400" fill="var(--color-accent-light)" opacity="0.3" rx="8" />

        {/* Baltic Sea highlight */}
        <path
          d="M200 120 Q220 160 210 200 Q200 240 220 280 Q230 300 240 320 Q220 330 200 320 Q180 300 185 270 Q190 240 180 200 Q175 160 190 120Z"
          fill="var(--color-accent)"
          opacity="0.12"
        />

        {/* Norway - elongated western shape */}
        <path
          d="M140 40 L150 35 L158 50 L155 80 L150 120 L145 150 L140 170 L135 150 L130 120 L132 80 L135 50Z"
          fill="var(--color-accent)"
          opacity="0.5"
          stroke="var(--color-paper)"
          strokeWidth="1"
        />

        {/* Sweden - central tall shape */}
        <path
          d="M165 45 L180 40 L185 60 L190 100 L192 140 L190 180 L185 210 L175 220 L170 200 L168 160 L165 120 L160 80Z"
          fill="var(--color-accent)"
          opacity="0.5"
          stroke="var(--color-paper)"
          strokeWidth="1"
        />

        {/* Finland - eastern tall shape */}
        <path
          d="M210 30 L225 25 L235 50 L240 80 L238 120 L235 160 L230 190 L220 200 L215 180 L210 140 L205 100 L205 60Z"
          fill="var(--color-accent)"
          opacity="0.5"
          stroke="var(--color-paper)"
          strokeWidth="1"
        />

        {/* Denmark - small shape below Sweden */}
        <path
          d="M155 230 L170 225 L175 235 L178 245 L172 255 L162 258 L155 250 L152 240Z"
          fill="var(--color-accent)"
          opacity="0.55"
          stroke="var(--color-paper)"
          strokeWidth="1"
        />

        {/* Estonia - small Baltic state */}
        <rect x="230" y="195" width="30" height="16" rx="3"
          fill="var(--color-accent)" opacity="0.5" stroke="var(--color-paper)" strokeWidth="1"
        />

        {/* Latvia - small Baltic state */}
        <rect x="228" y="218" width="32" height="18" rx="3"
          fill="var(--color-accent)" opacity="0.5" stroke="var(--color-paper)" strokeWidth="1"
        />

        {/* Lithuania - small Baltic state */}
        <rect x="225" y="243" width="34" height="20" rx="3"
          fill="var(--color-accent)" opacity="0.5" stroke="var(--color-paper)" strokeWidth="1"
        />

        {/* Netherlands - small western shape */}
        <path
          d="M115 268 L128 264 L132 275 L130 288 L122 292 L114 286 L112 278Z"
          fill="var(--color-accent)"
          opacity="0.6"
          stroke="var(--color-paper)"
          strokeWidth="1"
        />

        {/* UK - island to the west */}
        <path
          d="M65 200 L80 190 L90 195 L95 210 L92 240 L88 270 L82 285 L72 280 L68 260 L62 235 L60 215Z"
          fill="var(--color-accent)"
          opacity="0.5"
          stroke="var(--color-paper)"
          strokeWidth="1"
        />

        {/* Iceland - small island top-left */}
        <ellipse cx="40" cy="60" rx="22" ry="14"
          fill="var(--color-accent)" opacity="0.45" stroke="var(--color-paper)" strokeWidth="1"
        />

        {/* Context / surrounding land (non-JEF) - Germany, Poland, Russia */}
        <path
          d="M140 265 L155 260 L195 260 L220 255 L225 270 L220 300 L200 310 L170 310 L145 300 L138 280Z"
          fill="var(--color-stone)"
          opacity="0.3"
          stroke="var(--color-paper)"
          strokeWidth="1"
        />
        {/* Russia context */}
        <path
          d="M265 180 L310 170 L340 180 L350 210 L345 250 L330 270 L300 275 L270 260 L262 230 L260 200Z"
          fill="var(--color-stone)"
          opacity="0.2"
          stroke="var(--color-paper)"
          strokeWidth="1"
        />

        {/* Amsterdam dot with pulse */}
        <circle cx="122" cy="278" r="6" fill="var(--color-accent)" opacity="0.2"
          style={{ animation: "pulse-subtle 3s ease-in-out infinite", transformOrigin: "122px 278px" }}
        />
        <circle cx="122" cy="278" r="3" fill="var(--color-accent)" opacity="0.8" />

        {/* Labels */}
        <text x="108" y="306" fill="var(--color-accent)" fontSize="9" fontFamily="var(--font-display)" fontWeight="600" opacity="0.8">
          Amsterdam
        </text>

        <text x="290" y="150" fill="var(--color-muted)" fontSize="11" fontFamily="var(--font-display)" fontWeight="500" opacity="0.6" letterSpacing="0.1em">
          JEF REGION
        </text>

        {/* Baltic Sea label */}
        <text x="188" y="260" fill="var(--color-accent)" fontSize="8" fontFamily="var(--font-body)" opacity="0.4" letterSpacing="0.15em" transform="rotate(-70, 188, 260)">
          BALTIC SEA
        </text>

        {/* Country labels - small, subtle */}
        <text x="42" y="90" fill="var(--color-muted)" fontSize="7" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">Iceland</text>
        <text x="75" y="250" fill="var(--color-muted)" fontSize="7" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">UK</text>
        <text x="142" y="115" fill="var(--color-muted)" fontSize="7" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">NO</text>
        <text x="178" y="130" fill="var(--color-muted)" fontSize="7" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">SE</text>
        <text x="225" y="120" fill="var(--color-muted)" fontSize="7" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">FI</text>
        <text x="165" y="248" fill="var(--color-muted)" fontSize="7" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">DK</text>
        <text x="246" y="208" fill="var(--color-muted)" fontSize="6.5" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">EE</text>
        <text x="244" y="232" fill="var(--color-muted)" fontSize="6.5" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">LV</text>
        <text x="242" y="257" fill="var(--color-muted)" fontSize="6.5" fontFamily="var(--font-body)" opacity="0.5" textAnchor="middle">LT</text>
      </svg>
    </div>
  );
}
