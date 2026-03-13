import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <main className="flex flex-col items-center text-center space-y-10 max-w-2xl mx-auto px-4" data-reveal>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl name-font text-[var(--color-ink)] tracking-tight">
            Yajan Mehta
          </h1>
          <p className="text-xs uppercase tracking-[0.45em] text-[var(--color-ink-light)]">
            App Developer
          </p>
          <p className="text-lg md:text-xl text-[var(--color-ink-light)] font-light leading-relaxed max-w-xl mx-auto">
            Building inclusive, scalable mobile applications with calm execution and clear results.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/work"
            className="btn-primary"
          >
            View Work
          </Link>

          <Link
            href="/contact"
            className="btn-ghost"
          >
            Let's Talk
          </Link>
        </div>
      </main>
    </div>
  );
}
