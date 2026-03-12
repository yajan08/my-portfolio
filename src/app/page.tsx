import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <main className="flex flex-col items-center text-center space-y-10 max-w-2xl mx-auto px-4" data-reveal>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-serif text-[var(--color-ink)] tracking-tight">
            Yajan Mehta
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-ink-light)] font-light leading-relaxed max-w-xl mx-auto">
            I build thoughtful apps that turn real-world problems into simple, inclusive digital experiences.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/work"
            className="btn-primary"
          >
            My Work
          </Link>

          <Link
            href="/contact"
            className="btn-ghost"
          >
            Contact Me
          </Link>
        </div>
      </main>
    </div>
  );
}
