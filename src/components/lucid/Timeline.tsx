import { useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Dream = {
  id: string;
  label: string;
  month: string;
  date: string;
  emotion: string;
  themes: string[];
  x: number;
  y: number;
};

const dreams: Dream[] = [
  {
    id: "d1",
    label: "Ocean",
    month: "Jan",
    date: "18 January",
    emotion: "Curious",
    themes: ["Water", "City"],
    x: 12,
    y: 30,
  },
  {
    id: "d2",
    label: "Doors",
    month: "Feb",
    date: "04 February",
    emotion: "Unsettled",
    themes: ["Doors", "Memory"],
    x: 34,
    y: 70,
  },
  {
    id: "d3",
    label: "Flying",
    month: "Feb",
    date: "22 February",
    emotion: "Weightless",
    themes: ["Flying", "Sky"],
    x: 55,
    y: 26,
  },
  {
    id: "d4",
    label: "Train",
    month: "Mar",
    date: "09 March",
    emotion: "Waiting",
    themes: ["Travel", "Night"],
    x: 74,
    y: 66,
  },
  {
    id: "d5",
    label: "Ocean",
    month: "Apr",
    date: "02 April",
    emotion: "Calm",
    themes: ["Water", "Home"],
    x: 91,
    y: 38,
  },
];

export function Timeline() {
  const [openId, setOpenId] = useState<string>("d3");
  const open = dreams.find((d) => d.id === openId)!;

  return (
    <section className="relative mx-auto w-full max-w-[1200px] overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Chapter 04 · The timeline</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-moon sm:text-5xl">
          Months of nights, in one glance.
        </h2>
        <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg">
          Each mark is a night you wrote something down. Select one to open it again.
        </p>
      </Reveal>

      <Reveal delay={140} className="mt-12">
        <div className="glass grain rounded-3xl p-5 sm:p-8">
          <div className="relative h-40 w-full sm:h-48">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border" />
            {dreams.map((d) => {
              const isOpen = d.id === openId;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setOpenId(d.id)}
                  aria-pressed={isOpen}
                  aria-label={`${d.label} dream, ${d.date}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-3"
                  style={{ left: `${d.x}%`, top: `${d.y}%` }}
                >
                  <span
                    aria-hidden="true"
                    className="block h-2.5 w-2.5 rounded-full transition-all duration-500"
                    style={{
                      background: isOpen ? "var(--moonlight)" : "oklch(0.82 0.05 290 / 0.6)",
                      transform: isOpen ? "scale(1.6)" : "scale(1)",
                      boxShadow: isOpen
                        ? "0 0 22px 7px oklch(0.72 0.12 292 / 0.6)"
                        : "0 0 10px 2px oklch(0.72 0.12 292 / 0.3)",
                    }}
                  />
                  <span
                    className={cn(
                      "absolute left-1/2 top-full -translate-x-1/2 text-[0.65rem] tracking-wide transition-colors",
                      isOpen ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {d.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-2 grid grid-cols-4 text-[0.65rem] tracking-[0.28em] text-muted-foreground/70">
            {["JAN", "FEB", "MAR", "APR"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          <div
            key={open.id}
            className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"
            style={{ animation: "fade-in 0.6s ease both" }}
          >
            <div className="min-w-0">
              <p className="eyebrow">{open.date}</p>
              <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
                The {open.label} dream
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Recorded emotion — {open.emotion}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {open.themes.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
