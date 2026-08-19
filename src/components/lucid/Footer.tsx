import { Moon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 py-12 sm:px-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-[0.42em] text-foreground">LUCID</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A dream journal and pattern tracker. Lucid is an imaginary product built as a design
            concept — there is no account to create.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-6 text-sm">
          <ul className="flex flex-col gap-3">
            <li className="eyebrow">Explore</li>
            {[
              { label: "How It Works", href: "#capture" },
              { label: "Journal", href: "#journal" },
              { label: "Patterns", href: "#patterns" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3">
            <li className="eyebrow">About</li>
            <li>
              <a
                href="#about"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                The idea
              </a>
            </li>
            <li>
              <a
                href="#start"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Start dreaming
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-10 text-xs text-muted-foreground/70 sm:px-8">
        Lucid — concept design, 2026.
      </div>
    </footer>
  );
}
