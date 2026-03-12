export default function AboutSection() {
  return (
    <section className="space-y-6" data-reveal>
      <header className="space-y-3">
        <h2 className="text-sm tracking-[0.4em] uppercase text-[var(--color-ink-light)]">
          About
        </h2>
        <p className="text-2xl font-serif text-[var(--color-ink)] tracking-tight">
          A calm builder, obsessed with useful software.
        </p>
      </header>
      <div className="space-y-4 text-[var(--color-ink-light)] leading-relaxed">
        <p>
          I am an app developer focused on building real-world applications that feel simple, reliable, and human.
        </p>
        <p>
          I value clarity in product decisions and care deeply about inclusive design, scalable foundations, and honest performance.
        </p>
        <p>
          My recent work includes accessible learning tools, real-time systems, and business automation that replaces manual workflows with calm, dependable flows.
        </p>
      </div>
    </section>
  );
}
