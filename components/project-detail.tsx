import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="case-study">
      <section className="case-hero container">
        <Link href="/#projects" className="back-link">
          &larr; Projects
        </Link>
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          <span>{project.status}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="tags">
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>

      <section className="case-preview container" aria-labelledby="screenshots-title">
        <p className="eyebrow">Screenshots</p>
        <h2 id="screenshots-title">화면 미리보기</h2>
        <Image
          src={project.previewImage}
          alt={project.previewAlt}
          width={720}
          height={440}
          priority
        />
      </section>

      <section className="case-grid container">
        <article>
          <p className="eyebrow">Overview</p>
          <h2>프로젝트 개요</h2>
          <p>{project.purpose}</p>
        </article>
        <article>
          <p className="eyebrow">My Role</p>
          <h2>담당 역할</h2>
          <ul>
            {project.role.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="story container" aria-labelledby="challenge-title">
        <p className="eyebrow">Challenge &amp; Solution</p>
        <h2 id="challenge-title">문제를 발견하고 해결한 과정</h2>
        <div className="story-grid">
          <article>
            <h3>Challenge</h3>
            <p>{project.challenge}</p>
          </article>
          <article>
            <h3>Decision</h3>
            <p>{project.solution}</p>
          </article>
          <article>
            <h3>Outcome</h3>
            <p>{project.outcome}</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">Technical Highlights</p>
        <h2>기술적 포인트</h2>
        <div className="highlight-grid">
          {project.highlights.map((highlight) => (
            <article key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="retrospective container">
        <p className="eyebrow">Retrospective</p>
        <h2>배운 점</h2>
        <p>{project.retrospective}</p>
        <Link href="/#projects" className="text-link">
          다른 프로젝트 보기
        </Link>
      </section>
    </main>
  );
}
