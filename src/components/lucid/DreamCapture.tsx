import { useState } from "react";
import { Plus, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Stage = "idle" | "recording" | "saved";

export function DreamCapture() {
  const [stage, setStage] = useState<Stage>("idle");

  const record = () => {
    if (stage !== "idle") {
      setStage("idle");
      return;
    }
    setStage("recording");
    window.setTimeout(() => setStage("saved"), 1100);
  };

  return (
    <section id="capture" className="relative mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Chapter 01 · Waking</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-moon sm:text-5xl">
          Capture it before it fades.
        </h2>
        <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg">
          Dreams dissolve within minutes of waking. One tap opens a page that is already listening —
          write a line, tag a mood, and let the rest come back later.
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-12">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
          <button
            type="button"
            onClick={record}
            aria-live="polite"
            className="group relative inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-secondary/60 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-0 -z-10 rounded-full",
                stage === "recording" && "animate-[lucid-pulse-ring_1.4s_ease-out_infinite]",
              )}
              style={{ background: "oklch(0.72 0.12 292 / 0.35)" }}
            />
            {stage === "recording" ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" aria-hidden="true" />
            )}
            {stage === "idle" ? "Record Dream" : stage === "recording" ? "Listening…" : "Clear entry"}
          </button>

          <div
            className={cn(
              "glass grain rounded-3xl p-6 transition-all duration-700 sm:p-8",
              stage === "saved" ? "opacity-100" : "opacity-45",
            )}
            style={{ transform: stage === "saved" ? "none" : "translateY(14px) scale(0.985)" }}
          >
            {stage === "saved" ? (
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="eyebrow">Dream #128</p>
                  <p className="text-xs text-muted-foreground">14 March · 6:12 AM</p>
                </div>
                <h3 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                  The Ocean Between Streets
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-lavender">
                  “I was walking through a city I had never seen before, but every corner felt
                  remembered. Each street opened onto the same quiet ocean.”
                </p>
                <dl className="mt-7 grid gap-6 sm:grid-cols-2">
                  <div className="min-w-0">
                    <dt className="eyebrow">Mood</dt>
                    <dd className="mt-2 text-sm text-foreground">Curious · Peaceful · Strange</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="eyebrow">Tags</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {["Ocean", "City", "Travel"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </article>
            ) : (
              <div className="flex min-h-[13rem] flex-col justify-center gap-3">
                <div className="h-3 w-24 rounded-full bg-muted" />
                <div className="h-6 w-3/4 rounded-full bg-muted/70" />
                <div className="h-3 w-full max-w-md rounded-full bg-muted/50" />
                <div className="h-3 w-2/3 max-w-sm rounded-full bg-muted/40" />
                <p className="mt-3 text-xs text-muted-foreground">
                  Your entry appears here the moment you start recording.
                </p>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
