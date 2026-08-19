import { useMemo } from "react";
import { cn } from "@/lib/utils";

/** Deterministic pseudo-random so SSR and client render identical stars. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function StarField({ count = 60, className }: { count?: number; className?: string }) {
  const stars = useMemo(() => {
    const rand = seeded(7);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand() * 100,
      top: rand() * 100,
      size: 1 + rand() * 1.8,
      delay: rand() * 6,
      duration: 4 + rand() * 6,
      opacity: 0.25 + rand() * 0.55,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-moonlight"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `lucid-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
