import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 sm:space-y-16 py-10 sm:py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-ink-light)] hover:text-[var(--color-muted-orange)] transition-colors group"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">{"<-"}</span>
        Home
      </Link>

      <section className="space-y-6" data-reveal>
        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-serif text-[var(--color-ink)] tracking-tight">
            Selected Works
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-ink-light)] font-light max-w-2xl leading-relaxed">
            Practical systems, refined execution, and outcomes you can point to.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
