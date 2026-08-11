import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project,
  revealDelay,
}: {
  project: Project;
  revealDelay?: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
      aria-label={`${project.title} 상세 페이지`}
      data-reveal
      data-reveal-delay={revealDelay}
    >
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          {project.slug === "ai-study-planner" ? <span>진행 중</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
    </Link>
  );
}
