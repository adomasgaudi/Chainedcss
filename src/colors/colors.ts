// colors
// rose
// pink
// fuchsia
// purple
// violet
// indigo
// blue
// lightBlue
// cyan
// teal
// emerald
// green
// lime
// yellow
// amber
// orange
// red
// warmGray

const colorsWindi = [
  {
    name: "Rose",
    variants: [
      { name: "50", value: "#fff1f2" },
      { name: "100", value: "#ffe4e6" },
      { name: "200", value: "#fecdd3" },
      { name: "300", value: "#fda4af" },
      { name: "400", value: "#fb7185" },
      { name: "500", value: "#f43f5e" },
      { name: "600", value: "#e11d48" },
      { name: "700", value: "#be123c" },
      { name: "800", value: "#9f1239" },
      { name: "900", value: "#881337" },
    ],
  },
  {
    name: "Pink",
    variants: [
      { name: "50", value: "#fdf2f8" },
      { name: "100", value: "#fce7f3" },
      { name: "200", value: "#fbcfe8" },
      { name: "300", value: "#f9a8d4" },
      { name: "400", value: "#f472b6" },
      { name: "500", value: "#ec4899" },
      { name: "600", value: "#db2777" },
      { name: "700", value: "#be185d" },
      { name: "800", value: "#9d174d" },

      { name: "900", value: "#831843" },
    ],
  },
  {
    name: "Fuchsia",
    variants: [
      { name: "50", value: "#fdf4ff" },
      { name: "100", value: "#fae8ff" },
      { name: "200", value: "#f5d0fe" },
      { name: "300", value: "#f0abfc" },
      { name: "400", value: "#e879f9" },
      { name: "500", value: "#d946ef" },
      { name: "600", value: "#c026d3" },
      { name: "700", value: "#a21caf" },
      { name: "800", value: "#86198f" },
      { name: "900", value: "#701a75" },
    ],
  },
  {
    name: "Purple",
    variants: [
      { name: "50", value: "#faf5ff" },
      { name: "100", value: "#f3e8ff" },
      { name: "200", value: "#e9d5ff" },
      { name: "300", value: "#d8b4fe" },
      { name: "400", value: "#c084fc" },
      { name: "500", value: "#a855f7" },
      { name: "600", value: "#9333ea" },
      { name: "700", value: "#7e22ce" },
      { name: "800", value: "#6b21a8" },
      { name: "900", value: "#581c87" },
    ],
  },
  {
    name: "Violet",
    variants: [
      { name: "50", value: "#f5f3ff" },
      { name: "100", value: "#ede9fe" },
      { name: "200", value: "#ddd6fe" },
      { name: "300", value: "#c4b5fd" },
      { name: "400", value: "#a78bfa" },
      { name: "500", value: "#8b5cf6" },
      { name: "600", value: "#7c3aed" },
      { name: "700", value: "#6d28d9" },
      { name: "800", value: "#5b21b6" },
      { name: "900", value: "#4c1d95" },
    ],
  },
  {
    name: "Indigo",
    variants: [
      { name: "50", value: "#eef2ff" },
      { name: "100", value: "#e0e7ff" },
      { name: "200", value: "#c7d2fe" },
      { name: "300", value: "#a5b4fc" },
      { name: "400", value: "#818cf8" },
      { name: "500", value: "#6366f1" },
      { name: "600", value: "#4f46e5" },
      { name: "700", value: "#4338ca" },
      { name: "800", value: "#3730a3" },
      { name: "900", value: "#312e81" },
    ],
  },
  {
    name: "Blue",
    variants: [
      { name: "50", value: "#eff6ff" },
      { name: "100", value: "#dbeafe" },
      { name: "200", value: "#bfdbfe" },
      { name: "300", value: "#93c5fd" },
      { name: "400", value: "#60a5fa" },
      { name: "500", value: "#3b82f6" },
      { name: "600", value: "#2563eb" },
      { name: "700", value: "#1d4ed8" },
      { name: "800", value: "#1e40af" },
      { name: "900", value: "#1e3a8a" },
    ],
  },
  {
    name: "LightBlue",
    variants: [
      { name: "50", value: "#f0f9ff" },
      { name: "100", value: "#e0f2fe" },
      { name: "200", value: "#bae6fd" },
      { name: "300", value: "#7dd3fc" },
      { name: "400", value: "#38bdf8" },
      { name: "500", value: "#0ea5e9" },
      { name: "600", value: "#0284c7" },
      { name: "700", value: "#0369a1" },
      { name: "800", value: "#075985" },
      { name: "900", value: "#0c4a6e" },
    ],
  },
  {
    name: "Cyan",
    variants: [
      { name: "50", value: "#ecfeff" },
      { name: "100", value: "#cffafe" },
      { name: "200", value: "#a5f3fc" },
      { name: "300", value: "#67e8f9" },
      { name: "400", value: "#22d3ee" },
      { name: "500", value: "#06b6d4" },
      { name: "600", value: "#0891b2" },
      { name: "700", value: "#0e7490" },
      { name: "800", value: "#155e75" },
      { name: "900", value: "#164e63" },
    ],
  },
  {
    name: "Teal",
    variants: [
      // add from 50 ro 900 styles
      { name: "50", value: "#f0fdfa" },
      { name: "100", value: "#ccfbf1" },
      { name: "200", value: "#99f6e4" },
      { name: "300", value: "#5eead4" },
      { name: "400", value: "#2dd4bf" },
      { name: "500", value: "#14b8a6" },
      { name: "600", value: "#0d9488" },
      { name: "700", value: "#0f766e" },
      { name: "800", value: "#115e59" },
      { name: "900", value: "#134e4a" },
    ],
  },
  {
    name: "Emerald",
    variants: [
      { name: "50", value: "#ecfdf5" },
      { name: "100", value: "#d1fae5" },
      { name: "200", value: "#a7f3d0" },
      { name: "300", value: "#6ee7b7" },
      { name: "400", value: "#34d399" },
      { name: "500", value: "#10b981" },
      { name: "600", value: "#059669" },
      { name: "700", value: "#047857" },
      { name: "800", value: "#065f46" },
      { name: "900", value: "#064e3b" },
    ],
  },
  {
    name: "Green",
    variants: [
      { name: "50", value: "#f0fdf4" },
      { name: "100", value: "#dcfce7" },
      { name: "200", value: "#bbf7d0" },
      { name: "300", value: "#86efac" },
      { name: "400", value: "#4ade80" },
      { name: "500", value: "#22c55e" },
      { name: "600", value: "#16a34a" },
      { name: "700", value: "#15803d" },
      { name: "800", value: "#166534" },
      { name: "900", value: "#14532d" },
    ],
  },
  {
    name: "LightGreen",
    variants: [
      { name: "50", value: "#f7fee7" },
      { name: "100", value: "#ecfccb" },
      { name: "200", value: "#d9f99d" },
      { name: "300", value: "#bef264" },
      { name: "400", value: "#a3e635" },
      { name: "500", value: "#84cc16" },
      { name: "600", value: "#65a30d" },
      { name: "700", value: "#4d7c0f" },
      { name: "800", value: "#3f6212" },
      { name: "900", value: "#365314" },
    ],
  },
  {
    name: "Lime",
    variants: [
      { name: "50", value: "#f7fee7" },
      { name: "100", value: "#ecfccb" },

      { name: "200", value: "#d9f99d" },
      { name: "300", value: "#bef264" },
      { name: "400", value: "#a3e635" },
      { name: "500", value: "#84cc16" },
      { name: "600", value: "#65a30d" },
      { name: "700", value: "#4d7c0f" },
      { name: "800", value: "#3f6212" },
      { name: "900", value: "#365314" },
    ],
  },
  {
    name: "Yellow",
    variants: [
      { name: "50", value: "#fefce8" },
      { name: "100", value: "#fef9c3" },
      { name: "200", value: "#fef08a" },
      { name: "300", value: "#fde047" },
      { name: "400", value: "#facc15" },
      { name: "500", value: "#eab308" },
      { name: "600", value: "#ca8a04" },
      { name: "700", value: "#a16207" },
      { name: "800", value: "#854d0e" },
      { name: "900", value: "#713f12" },
    ],
  },
  {
    name: "Amber",
    variants: [
      { name: "50", value: "#fffbeb" },
      { name: "100", value: "#fef3c7" },
      { name: "200", value: "#fde68a" },
      { name: "300", value: "#fcd34d" },
      { name: "400", value: "#fbbf24" },
      { name: "500", value: "#f59e0b" },
      { name: "600", value: "#d97706" },
      { name: "700", value: "#b45309" },
      { name: "800", value: "#92400e" },
      { name: "900", value: "#78350f" },
    ],
  },
  {
    name: "Orange",
    variants: [
      { name: "50", value: "#fff7ed" },
      { name: "100", value: "#ffedd5" },
      { name: "200", value: "#fed7aa" },
      { name: "300", value: "#fdba74" },
      { name: "400", value: "#fb923c" },
      { name: "500", value: "#f97316" },
      { name: "600", value: "#ea580c" },
      { name: "700", value: "#c2410c" },
      { name: "800", value: "#9a3412" },
      { name: "900", value: "#7c2d12" },
    ],
  },
  {
    name: "Red",
    variants: [
      { name: "50", value: "#fef2f2" },
      { name: "100", value: "#fee2e2" },
      { name: "200", value: "#fecaca" },
      { name: "300", value: "#fca5a5" },
      { name: "400", value: "#f87171" },
      { name: "500", value: "#ef4444" },
      { name: "600", value: "#dc2626" },
      { name: "700", value: "#b91c1c" },
      { name: "800", value: "#991b1b" },
      { name: "900", value: "#7f1d1d" },
    ],
  },
  {
    name: "WarmGray",
    variants: [
      { name: "50", value: "#fafaf9" },
      { name: "100", value: "#f5f5f4" },
      { name: "200", value: "#e7e5e4" },
      { name: "300", value: "#d6d3d1" },

      { name: "400", value: "#a8a29e" },
      { name: "500", value: "#78716c" },
      { name: "600", value: "#57534e" },
      { name: "700", value: "#44403c" },
      { name: "800", value: "#292524" },
      { name: "900", value: "#1c1917" },
    ],
  },
  {
    name: "White",
    variants: [
      { name: "50", value: "#ffffff" },
      { name: "100", value: "#fefefe" },
      { name: "200", value: "#fdfdfd" },
      { name: "300", value: "#fcfcfc" },
      { name: "400", value: "#fbfbfb" },
      { name: "500", value: "#fafafa" },
      { name: "600", value: "#f9f9f9" },
      { name: "700", value: "#f8f8f8" },
      { name: "800", value: "#f7f7f7" },
      { name: "900", value: "#f5f5f5" },
    ],
  },
];

export { colorsWindi };
