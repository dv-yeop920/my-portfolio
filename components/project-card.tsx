import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Image
        src={project.previewImage}
        alt={project.previewAlt}
        width={720}
        height={440}
      />
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags compact">
          {project.stack.slice(0, 4).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="text-link">
          {project.title} 상세 보기
        </Link>
      </div>
    </article>
  );
}
