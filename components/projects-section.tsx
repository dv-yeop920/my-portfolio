import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

const cardOrder: Record<string, number> = {
  "web-product-platform": 1,
  "laviebel-schedule-manager": 2,
  "ai-study-planner": 3,
};

export function ProjectsSection() {
  const projects = [...portfolio.projects].sort(
    (first, second) =>
      (cardOrder[first.slug] ?? Number.MAX_SAFE_INTEGER) -
      (cardOrder[second.slug] ?? Number.MAX_SAFE_INTEGER),
  );

  return (
    <section id="projects" className="section projects container">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects"
        description="구현 범위와 문제 해결 과정을 확인할 수 있는 대표 프로젝트입니다."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            revealDelay={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
