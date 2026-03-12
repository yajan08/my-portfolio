import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import VideoDemo from "@/components/VideoDemo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full max-w-4xl mx-auto space-y-12 py-12">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-ink-light)] hover:text-[var(--color-muted-orange)] transition-colors group"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
        All Work
      </Link>

      <header className="space-y-4" data-reveal>
        <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-ink)] tracking-tight">
          {project.title}
        </h1>
        <p className="text-lg text-[var(--color-ink-light)] font-light leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </header>

      {project.videoUrl && (
        <section className="space-y-4" data-reveal>
          <h2 className="section-title">Demo Video</h2>
          <VideoDemo
            videoUrl={project.videoUrl}
            title={project.title}
            orientation={project.videoOrientation ?? "landscape"}
          />
        </section>
      )}

      <section className="space-y-4" data-reveal>
        <h2 className="section-title">Description</h2>
        <p className="text-[var(--color-ink-light)] leading-relaxed">
          {project.description}
        </p>
      </section>

      <section className="space-y-4" data-reveal>
        <h2 className="section-title">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4" data-reveal>
        <h2 className="section-title">Impact / Outcome</h2>
        <p className="text-[var(--color-ink-light)] leading-relaxed">
          {project.impact}
        </p>
      </section>

      <section className="space-y-4" data-reveal>
        <h2 className="section-title">GitHub</h2>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-ink-light)] hover:text-[var(--color-muted-orange)] transition-colors"
        >
          View Source Code
          <span>→</span>
        </a>
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
