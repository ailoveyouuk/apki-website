export default function PowerFlowDiagram() {
  return (
    <svg
      viewBox="0 0 900 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram showing solar, grid, and vehicle power sources charging an APKI portable power station, which powers medical, shelter, and communications equipment"
    >
      {/* Sources */}
      <g>
        {/* Sun */}
        <circle cx="90" cy="110" r="34" stroke="#ACAB0F" strokeWidth="2.5" />
        <circle cx="90" cy="110" r="14" fill="#ACAB0F" opacity="0.85" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1={90 + Math.cos((deg * Math.PI) / 180) * 42}
            y1={110 + Math.sin((deg * Math.PI) / 180) * 42}
            x2={90 + Math.cos((deg * Math.PI) / 180) * 50}
            y2={110 + Math.sin((deg * Math.PI) / 180) * 50}
            stroke="#ACAB0F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
        <text x="90" y="172" textAnchor="middle" fontSize="13" fill="#3A3A3A" fontFamily="Arial">
          Solar
        </text>

        {/* Grid / plug */}
        <rect x="56" y="222" width="68" height="68" rx="8" stroke="#01233F" strokeWidth="2.5" />
        <path
          d="M78 240 L78 272 M102 240 L102 272 M70 254 L110 254"
          stroke="#01233F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text x="90" y="312" textAnchor="middle" fontSize="13" fill="#3A3A3A" fontFamily="Arial">
          Grid / Mains
        </text>

        {/* Vehicle */}
        <path
          d="M56 372 h68 l10 22 v20 h-88 v-20 z"
          stroke="#28730A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="70" cy="414" r="7" stroke="#28730A" strokeWidth="2.5" />
        <circle cx="110" cy="414" r="7" stroke="#28730A" strokeWidth="2.5" />
        <text x="90" y="452" textAnchor="middle" fontSize="13" fill="#3A3A3A" fontFamily="Arial">
          Vehicle / 12V
        </text>
      </g>

      {/* Flow lines: sources -> unit */}
      <path d="M124 110 C 260 110, 260 220, 380 240" stroke="#ACAB0F" strokeWidth="2.5" className="flow-line" />
      <path d="M124 256 C 260 256, 300 256, 380 256" stroke="#01233F" strokeWidth="2.5" className="flow-line" />
      <path d="M124 400 C 260 400, 260 280, 380 272" stroke="#28730A" strokeWidth="2.5" className="flow-line" />

      {/* Unit */}
      <g>
        <rect x="380" y="180" width="150" height="170" rx="10" fill="#3A3A3A" />
        <rect x="380" y="180" width="150" height="170" rx="10" stroke="#01233F" strokeWidth="2" />
        <rect x="400" y="200" width="110" height="46" rx="4" fill="#0d0d0d" />
        <circle cx="500" cy="223" r="8" className="pulse-soft" fill="#28730A" />
        <rect x="400" y="258" width="46" height="30" rx="3" stroke="#ACAB0F" strokeWidth="2" />
        <rect x="454" y="258" width="46" height="30" rx="3" stroke="#ACAB0F" strokeWidth="2" />
        <rect x="400" y="298" width="100" height="14" rx="2" fill="#28730A" opacity="0.8" />
        <text
          x="455"
          y="410"
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill="#01233F"
          fontFamily="Oswald, Arial"
          letterSpacing="1"
        >
          APKI PPS
        </text>
      </g>

      {/* Flow lines: unit -> use cases */}
      <path d="M530 220 C 650 220, 650 120, 760 100" stroke="#28730A" strokeWidth="2.5" className="flow-line" />
      <path d="M530 260 C 650 260, 650 256, 760 256" stroke="#28730A" strokeWidth="2.5" className="flow-line" />
      <path d="M530 300 C 650 300, 650 400, 760 412" stroke="#28730A" strokeWidth="2.5" className="flow-line" />

      {/* Use cases */}
      <g>
        {/* Medical cross */}
        <circle cx="800" cy="100" r="40" stroke="#28730A" strokeWidth="2.5" />
        <path d="M800 82 v36 M782 100 h36" stroke="#28730A" strokeWidth="6" strokeLinecap="round" />
        <text x="800" y="158" textAnchor="middle" fontSize="13" fill="#3A3A3A" fontFamily="Arial">
          Medical Care
        </text>

        {/* Shelter / tent */}
        <path d="M770 270 l30 -34 l30 34 z" stroke="#01233F" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="800" y1="236" x2="800" y2="270" stroke="#01233F" strokeWidth="2" />
        <text x="800" y="298" textAnchor="middle" fontSize="13" fill="#3A3A3A" fontFamily="Arial">
          Field &amp; Shelter
        </text>

        {/* Comms / signal */}
        <circle cx="800" cy="412" r="4" fill="#ACAB0F" />
        <path
          d="M786 412 a14 14 0 0 1 28 0 M778 412 a22 22 0 0 1 44 0 M770 412 a30 30 0 0 1 60 0"
          stroke="#ACAB0F"
          strokeWidth="2.5"
          fill="none"
        />
        <text x="800" y="452" textAnchor="middle" fontSize="13" fill="#3A3A3A" fontFamily="Arial">
          Comms &amp; Monitoring
        </text>
      </g>
    </svg>
  );
}
