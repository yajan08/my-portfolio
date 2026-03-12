import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-orange)] focus:ring-offset-4 focus:ring-offset-[var(--color-paper)]"
    >
      <article className="project-card" data-reveal>
        <div className="project-thumb">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="64px"
            className="object-contain p-2"
          />
        </div>

        <div className="space-y-2">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-summary">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
