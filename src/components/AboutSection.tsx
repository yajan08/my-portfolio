export default function AboutSection() {
  return (
    <section className="space-y-6" data-reveal>
      <header className="space-y-3">
        <h2 className="text-sm tracking-[0.4em] uppercase text-[var(--color-ink-light)]">
          About
        </h2>
        <p className="text-2xl font-serif text-[var(--color-ink)] tracking-tight">
          I help businesses reach their true potential with software that ships.
        </p>
      </header>
      <div className="space-y-4 text-[var(--color-ink-light)] leading-relaxed">
        <p>
          I build business software that is clean, reliable, and easy to adopt, so teams move faster without extra overhead.
        </p>
        <p>
          I am experienced in leading projects, aligning stakeholders, and delivering products that match client goals and timelines.
        </p>
        <p>
          I care about accessibility, scalable foundations, and measurable outcomes so your users feel supported and your roadmap stays on track.
        </p>
      </div>
    </section>
  );
}
