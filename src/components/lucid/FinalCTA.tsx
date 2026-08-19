import { Reveal } from "./Reveal";
import { StarField } from "./StarField";

export function FinalCTA() {
  return (
    <section id="start" className="grain relative w-full overflow-hidden px-5 py-28 sm:px-8 sm:py-36">
      <StarField count={46} />
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute left-1/2 top-6 h-40 w-40 -translate-x-1/2 rounded-full opacity-80 sm:h-52 sm:w-52"
        style={{ background: "var(--gradient-moon)", boxShadow: "var(--shadow-glow)" }}
      />
      <div className="relative mx-auto max-w-2xl pt-40 text-center sm:pt-52">
        <Reveal>
          <h2 className="font-display text-[2.5rem] leading-[1.08] text-moon sm:text-6xl">
            Tonight you will dream something.
            <br />
            Tomorrow you can keep it.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-lg text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg">
            Open Lucid before the details go. A private space for your dreams — no feed, no audience.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#top"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Start Dreaming
            </a>
            <a
              href="#journal"
              className="inline-flex w-full items-center justify-center rounded-full border border-border px-8 py-4 text-sm text-foreground transition-colors hover:bg-accent/60 sm:w-auto"
            >
              Explore Lucid
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
