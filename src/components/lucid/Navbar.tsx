import { useEffect, useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "How It Works", href: "#capture" },
  { label: "Journal", href: "#journal" },
  { label: "Patterns", href: "#patterns" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl" : "",
      )}
      style={
        scrolled
          ? { background: "oklch(0.13 0.04 275 / 0.72)", borderBottom: "1px solid var(--border)" }
          : undefined
      }
    >
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
      >
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <Moon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-[0.95rem] font-semibold tracking-[0.42em] text-foreground">
            LUCID
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#start"
            className="hidden rounded-full border border-border bg-secondary/60 px-5 py-2 text-sm text-foreground transition-colors hover:bg-accent md:inline-flex"
          >
            Start Dreaming
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="border-t border-border px-5 pb-6 pt-2 backdrop-blur-xl md:hidden"
          style={{ background: "oklch(0.13 0.04 275 / 0.92)" }}
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 font-display text-2xl text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#start"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Start Dreaming
          </a>
        </div>
      )}
    </header>
  );
}
