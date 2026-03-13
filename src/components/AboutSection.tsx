export default function AboutSection() {
  return (
    <section className="space-y-6" data-reveal>
      <header className="space-y-3">
        <h2 className="text-sm tracking-[0.4em] uppercase text-[var(--color-ink-light)]">
          About
        </h2>
        <p className="text-2xl font-serif text-[var(--color-ink)] tracking-tight">
          App developer focused on inclusive, scalable, real-world mobile applications.
        </p>
      </header>
      <div className="space-y-4 text-[var(--color-ink-light)] leading-relaxed">
        <p>
          I translate complex requirements into clear, steady experiences that feel calm and deliberate.
        </p>
        <p>
          My builds favor durable architecture, transparent data flows, and small touches of craft that make teams feel confident.
        </p>
        <p>
          Accessibility and measurable outcomes stay central, so each release is useful, stable, and ready for real users.
        </p>
      </div>
    </section>
  );
}
