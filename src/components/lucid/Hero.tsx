import { StarField } from "./StarField";
import { Reveal } from "./Reveal";

function DreamCard() {
  return (
    <figure className="glass drift w-[15.5rem] rounded-3xl p-5 sm:w-[17.5rem]">
      <figcaption className="eyebrow">Last night</figcaption>
      <blockquote className="mt-3 font-display text-xl leading-snug text-foreground sm:text-2xl">
        “I was walking through a familiar city, but every street led to the ocean.”
      </blockquote>
      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
        <span>11:48 PM</span>
        <span>Dream #128</span>
      </div>
    </figure>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate flex w-full items-center overflow-hidden pb-16 pt-28 sm:min-h-[min(100svh,50rem)] sm:pb-28 sm:pt-36"
    >
      {/* Night environment */}
      <StarField count={70} />
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute right-[-6rem] top-16 h-48 w-48 rounded-full opacity-80 blur-[1px] sm:right-[4%] sm:top-10 sm:h-64 sm:w-64"
        style={{ background: "var(--gradient-moon)", boxShadow: "var(--shadow-glow)" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[45%]"
        style={{
          background:
            "radial-gradient(70% 100% at 50% 100%, oklch(0.4 0.12 288 / 0.45), transparent 70%)",
          filter: "blur(24px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-15%] top-[35%] h-40 w-[60%] rounded-full opacity-40 blur-3xl"
        style={{ background: "oklch(0.5 0.12 300 / 0.5)" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow">A private dream journal</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-[18ch] text-balance font-display text-[2.6rem] leading-[1.06] text-moon sm:text-[3.4rem] lg:text-[4rem]">
              Remember what your mind creates while you sleep.
            </h1>

          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg">
              Lucid helps you capture your dreams the moment you wake, then quietly reveals the
              recurring patterns, people and places your mind returns to at night.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Start Dreaming
              </a>
              <a
                href="#journal"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-colors hover:bg-accent/60"
              >
                Explore Lucid
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <p className="mt-8 text-xs text-muted-foreground/80">
              A concept product. Your entries stay yours — nothing here is shared or scored.
            </p>
          </Reveal>
        </div>

        {/* Floating dream fragments */}
        <div className="relative min-w-0">
          <div className="relative mx-auto flex h-[20rem] w-full max-w-[26rem] items-center justify-center sm:h-[26rem]">
            <div className="absolute left-0 top-2 rotate-[-6deg] sm:left-2">
              <DreamCard />
            </div>
            <div
              className="glass drift-slow absolute bottom-2 right-0 w-[11rem] rounded-2xl p-4 sm:right-2 sm:w-[13rem]"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="eyebrow">Fragment</p>
              <p className="mt-2 text-sm leading-relaxed text-lavender">
                a door I had never opened before
              </p>
              <div className="mt-3 flex gap-1.5">
                {["Ocean", "City"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              aria-hidden="true"
              className="drift absolute right-8 top-0 h-2 w-2 rounded-full bg-ember"
              style={{ boxShadow: "0 0 18px 4px oklch(0.83 0.09 75 / 0.6)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
