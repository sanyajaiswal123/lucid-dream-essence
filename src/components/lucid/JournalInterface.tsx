import { useState } from "react";
import { Plus, Search, Moon, BookOpen, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const entries = [
  {
    id: "128",
    title: "The Ocean Between Streets",
    date: "14 Mar",
    excerpt:
      "I was standing in an empty train station. Every platform opened onto water instead of tracks.",
    themes: ["Water", "Travel", "Night"],
    emotion: { label: "Curiosity", value: 78 },
  },
  {
    id: "127",
    title: "A House With One More Room",
    date: "12 Mar",
    excerpt:
      "My childhood house had a door I'd never noticed. Inside, everything was arranged the way I remembered it.",
    themes: ["Doors", "Memory", "Home"],
    emotion: { label: "Nostalgia", value: 64 },
  },
  {
    id: "126",
    title: "Slow Flight Over the Field",
    date: "09 Mar",
    excerpt: "I was moving above a field, low and unhurried, as if the air had weight.",
    themes: ["Flying", "Calm", "Sky"],
    emotion: { label: "Wonder", value: 71 },
  },
];

export function JournalInterface() {
  const [activeId, setActiveId] = useState(entries[0]!.id);
  const active = entries.find((e) => e.id === activeId)!;

  return (
    <section id="journal" className="relative mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Chapter 02 · The archive</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-moon sm:text-5xl">
          Your dreams, kept like memories.
        </h2>
        <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg">
          This is Lucid itself. Choose an entry to move through the archive — each dream keeps its
          own themes and the emotion you recorded with it.
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-12">
        <div
          className="glass grain overflow-hidden rounded-[1.75rem] p-2 sm:p-3"
          role="group"
          aria-label="Lucid journal preview"
        >
          {/* App chrome */}
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[1.35rem] border border-border/70 bg-secondary/40 px-4 py-3 sm:flex sm:justify-between">
            <div className="flex min-w-0 items-center gap-2">
              <Moon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
              <span className="truncate text-xs font-semibold tracking-[0.34em] text-foreground">
                LUCID
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground sm:flex">
                <Search className="h-3 w-3" aria-hidden="true" /> Search dreams
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                <Plus className="h-3 w-3" aria-hidden="true" /> Dream
              </span>
            </div>
          </div>

          <div className="grid gap-3 p-1 pt-3 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:p-3">
            {/* Entry list */}
            <div className="min-w-0">
              <p className="eyebrow px-1">Good morning · 3 entries</p>
              <ul className="mt-3 flex flex-col gap-2">
                {entries.map((e) => (
                  <li key={e.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(e.id)}
                      aria-current={e.id === activeId}
                      className={cn(
                        "w-full rounded-2xl border px-4 py-3 text-left transition-all duration-400",
                        e.id === activeId
                          ? "border-primary/50 bg-accent/60"
                          : "border-border/60 bg-secondary/20 hover:bg-secondary/45",
                      )}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="truncate text-sm text-foreground">{e.title}</span>
                        <span className="shrink-0 text-[0.7rem] text-muted-foreground">
                          {e.date}
                        </span>
                      </div>
                      <span className="mt-1 block truncate text-xs text-muted-foreground">
                        Dream #{e.id} · {e.themes[0]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detail */}
            <div className="min-w-0 rounded-2xl border border-border/60 bg-secondary/25 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="eyebrow">{active.id === entries[0]!.id ? "Last night’s dream" : "Earlier entry"}</p>
                <span className="flex items-center gap-1.5 text-[0.7rem] text-muted-foreground">
                  <BookOpen className="h-3 w-3" aria-hidden="true" /> Dream #{active.id}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl leading-snug text-foreground sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-lavender">“{active.excerpt}”</p>

              <div className="mt-6 h-px w-full bg-border" />

              <p className="eyebrow mt-5">Themes</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {active.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="eyebrow mt-6">Emotion</p>
              <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <div className="min-w-0">
                  <div className="mb-1.5 flex items-center gap-1.5 text-sm text-foreground">
                    <Sparkles className="h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
                    <span className="truncate">{active.emotion.label}</span>
                  </div>
                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
                    role="progressbar"
                    aria-valuenow={active.emotion.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${active.emotion.label} intensity`}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${active.emotion.value}%`,
                        background: "linear-gradient(90deg, var(--indigo-soft), var(--primary))",
                      }}
                    />
                  </div>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {active.emotion.value}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
