export default function AboutSection() {
  return (
    <section className="space-y-6" data-reveal>
      <header className="space-y-3">
        <h2 className="text-sm tracking-[0.4em] uppercase text-[var(--color-ink-light)]">
          About
        </h2>
        <p className="text-2xl font-serif text-[var(--color-ink)] tracking-tight">
          A calm builder who turns messy problems into helpful products.
        </p>
      </header>
      <div className="space-y-4 text-[var(--color-ink-light)] leading-relaxed">
        <p>
          I build real-world apps that feel simple, reliable, and human, with the polish teams expect in production.
        </p>
        <p>
          Teams hire me when they need someone who can move from idea to shipped product, communicate clearly, and sweat the details.
        </p>
        <p>
          I focus on accessibility, scalable foundations, and measurable outcomes, so your users feel cared for and your roadmap moves faster.
        </p>
      </div>
    </section>
  );
}
