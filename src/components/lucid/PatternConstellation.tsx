import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Node = { id: string; label: string; count: number; x: number; y: number };

const nodes: Node[] = [
  { id: "water", label: "Water", count: 12, x: 50, y: 18 },
  { id: "ocean", label: "Ocean", count: 9, x: 22, y: 44 },
  { id: "travel", label: "Travel", count: 7, x: 74, y: 46 },
  { id: "train", label: "Train", count: 5, x: 86, y: 76 },
  { id: "doors", label: "Doors", count: 8, x: 40, y: 74 },
  { id: "night", label: "Night", count: 5, x: 12, y: 80 },
];

const edges: [string, string][] = [
  ["water", "ocean"],
  ["water", "travel"],
  ["ocean", "travel"],
  ["travel", "train"],
  ["ocean", "doors"],
  ["doors", "night"],
];

const byId = (id: string) => nodes.find((n) => n.id === id)!;

export function PatternConstellation() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.35);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="patterns"
      className="relative mx-auto w-full max-w-[1200px] overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Chapter 03 · Patterns</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-moon sm:text-5xl">
          Your dreams leave patterns.
        </h2>
        <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg">
          Every entry you write adds a point of light. Over weeks, the themes your journal returns to
          begin to connect. Hover or tap a point to see what it holds.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center">
        <div
          ref={ref}
          className="glass grain relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[16/11]"
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {edges.map(([a, b], i) => {
              const na = byId(a);
              const nb = byId(b);
              const lit = hovered === a || hovered === b;
              return (
                <line
                  key={`${a}-${b}`}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke={lit ? "oklch(0.82 0.09 292)" : "oklch(0.82 0.05 290 / 0.35)"}
                  strokeWidth={lit ? 0.45 : 0.25}
                  vectorEffect="non-scaling-stroke"
                  style={{
                    strokeDasharray: 200,
                    strokeDashoffset: visible ? 0 : 200,
                    transition: `stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1) ${400 + i * 220}ms, stroke 0.4s ease, stroke-width 0.4s ease`,
                  }}
                />
              );
            })}
          </svg>

          {nodes.map((n, i) => {
            const activeNode = hovered === n.id;
            const size = 8 + n.count * 0.9;
            return (
              <button
                key={n.id}
                type="button"
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(n.id)}
                onBlur={() => setHovered(null)}
                onClick={() => setHovered((v) => (v === n.id ? null : n.id))}
                aria-label={`${n.label}: appears in ${n.count} entries`}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  opacity: visible ? 1 : 0,
                  transition: `opacity 900ms ease ${i * 140}ms`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="block rounded-full transition-transform duration-500"
                  style={{
                    width: size,
                    height: size,
                    transform: activeNode ? "scale(1.5)" : "scale(1)",
                    background: "var(--moonlight)",
                    boxShadow: `0 0 ${activeNode ? 26 : 14}px ${activeNode ? 8 : 4}px oklch(0.72 0.12 292 / 0.55)`,
                  }}
                />
                <span
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-popover/90 px-2.5 py-1 text-[0.7rem] text-foreground transition-opacity duration-300",
                    activeNode ? "opacity-100" : "opacity-0",
                  )}
                >
                  {n.label} · {n.count}
                </span>
              </button>
            );
          })}
        </div>

        <Reveal delay={120} className="min-w-0">
          <p className="eyebrow">Recurring in your journal</p>
          <ul className="mt-4 flex flex-col">
            {[...nodes]
              .sort((a, b) => b.count - a.count)
              .map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setHovered(n.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(n.id)}
                    onBlur={() => setHovered(null)}
                    className={cn(
                      "grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/60 py-3 text-left transition-colors",
                      hovered === n.id ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    <span className="truncate font-display text-xl">{n.label}</span>
                    <span className="shrink-0 text-xs tabular-nums">{n.count} entries</span>
                  </button>
                </li>
              ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
