import { Reveal } from "./Reveal";
import { StarField } from "./StarField";

const insights = [
  {
    quiet: "Your journal shows…",
    line: "Water appears in 8 of your entries this month.",
    note: "Most often it arrives near the end of a dream, and you usually describe it as still.",
  },
  {
    quiet: "A pattern in your entries…",
    line: "Dreams with water are most often tagged curious or uncertain.",
    note: "Lucid only reflects the words you wrote — it doesn’t decide what they mean.",
  },
  {
    quiet: "You may be noticing…",
    line: "Three entries in a row began in a place you called familiar.",
    note: "Recurring settings are grouped so you can read them side by side.",
  },
];

export function InsightSection() {
  return (
    <section
      id="about"
      className="grain relative w-full overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "radial-gradient(90% 70% at 50% 0%, oklch(0.28 0.09 288 / 0.6), transparent 65%)",
      }}
    >
      <StarField count={34} className="opacity-60" />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Chapter 05 · Understanding</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-moon sm:text-5xl">
            Reflection, not interpretation.
          </h2>
          <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg">
            Lucid doesn’t tell you what your dreams mean. It shows you what you have already written,
            arranged so patterns can surface on their own.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {insights.map((ins, i) => (
            <Reveal as="li" key={ins.line} delay={i * 130} className="min-w-0">
              <div className="glass flex h-full flex-col rounded-3xl p-6 sm:p-7">
                <p className="eyebrow">{ins.quiet}</p>
                <p className="mt-4 font-display text-2xl leading-snug text-foreground">{ins.line}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{ins.note}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
            Lucid is a journaling concept. It doesn’t diagnose anything, and it makes no claim that
            dream symbols carry a fixed or scientific meaning.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
