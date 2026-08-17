import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { ProjectGallery } from "./project-gallery";

function BoldText({ content }: { content: string }) {
  return content
    .split("**")
    .map((text, index) =>
      index % 2 === 1 ? <strong key={`${index}-${text}`}>{text}</strong> : text,
    );
}

function StoryContent({ content }: { content: string }) {
  return content.split("\n\n").map((paragraph, paragraphIndex) => (
    <p key={`${paragraphIndex}-${paragraph.slice(0, 20)}`}>
      <BoldText content={paragraph} />
    </p>
  ));
}

export function ProjectDetail({ project }: { project: Project }) {
  const hasFlowImages = project.flow.some(step => step.images?.length);

  return (
    <main className={`case-study case-study--${project.slug}`}>
      <section className="case-hero container" data-reveal>
        <Link href="/#projects" className="back-link">
          &larr; Projects
        </Link>
        <div className="project-meta">
          <span>{project.eyebrow}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <dl className="project-facts" aria-label="프로젝트 참여 정보">
          <div>
            <dt>프로젝트 형태</dt>
            <dd>{project.team}</dd>
          </div>
          <div>
            <dt>담당 영역</dt>
            <dd>{project.contribution}</dd>
          </div>
        </dl>
        <div className="tags">
          {project.stack.map(technology => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>

      <section className="case-grid container">
        <article data-reveal>
          <p className="eyebrow">Overview</p>
          <h2>프로젝트 개요</h2>
          <p>
            <BoldText content={project.purpose} />
          </p>
        </article>
        <article data-reveal data-reveal-delay="1">
          <p className="eyebrow">My Role</p>
          <h2>주요 작업</h2>
          <ul>
            {project.role.map(role => (
              <li key={role}>
                <BoldText content={role} />
              </li>
            ))}
          </ul>
        </article>
        {project.architecture ? (
          <figure
            className="project-architecture"
            data-reveal
            data-reveal-delay="2"
          >
            <figcaption>
              <p className="eyebrow">Architecture</p>
              <h2>서비스 아키텍처</h2>
            </figcaption>
            <Image
              src={project.architecture.src}
              alt={project.architecture.alt}
              width={project.architecture.width}
              height={project.architecture.height}
              sizes="(max-width: 820px) 100vw, 80vw"
            />
          </figure>
        ) : null}
        {project.structure ? (
          <section
            className="frontend-structure"
            aria-labelledby="frontend-structure-title"
            data-reveal
            data-reveal-delay="3"
          >
            <header className="frontend-structure-heading">
              <p className="eyebrow">structure</p>
              <h2 id="frontend-structure-title">{project.structure.title}</h2>
            </header>
            <div className="frontend-structure-content">
              <div className="frontend-structure-image">
                <Image
                  src={project.structure.src}
                  alt={project.structure.alt}
                  width={project.structure.width}
                  height={project.structure.height}
                  sizes="(max-width: 820px) 100vw, 36vw"
                  unoptimized
                />
              </div>
              <div className="frontend-structure-copy">
                <p>
                  <BoldText content={project.structure.description} />
                </p>
                <ul>
                  {project.structure.points.map(point => (
                    <li key={point}>
                      <BoldText content={point} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}
      </section>

      <section className="section project-flow-section container">
        <div data-reveal>
          <p className="eyebrow">User Flow</p>
          <h2>사용자 흐름 설계</h2>
        </div>
        <ol className="project-flow">
          {project.flow.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              data-reveal-delay={(index % 3) + 1}
            >
              <div
                className={`project-flow-media${
                  step.images?.length === 1 ? " is-single" : ""
                }`}
              >
                {step.images?.length ? (
                  step.images.map(image => (
                    <figure className="project-flow-image" key={image.src}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1170}
                        height={2532}
                        sizes="(max-width: 820px) 75vw, 22vw"
                        unoptimized={image.unoptimized}
                      />
                    </figure>
                  ))
                ) : step.image && step.alt ? (
                  <figure className="project-flow-image">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={960}
                      height={640}
                    />
                  </figure>
                ) : (
                  <div className="project-media-placeholder" aria-hidden="true">
                    <span>Flow {String(index + 1).padStart(2, "0")}</span>
                    <strong>Image coming soon</strong>
                  </div>
                )}
              </div>
              <div className="project-flow-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <div className="project-flow-notes">
                  <div>
                    <strong>기능</strong>
                    <p>
                      <BoldText content={step.description} />
                    </p>
                  </div>
                  {step.solution ? (
                    <div>
                      <strong>문제 해결</strong>
                      <p>
                        <BoldText content={step.solution} />
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {!hasFlowImages ? (
        <section
          className="section project-screens container"
          aria-labelledby="project-screens-title"
        >
          <div data-reveal>
            <p className="eyebrow">Key Screens</p>
            <h2 id="project-screens-title">주요 화면</h2>
            <p className="project-screens-intro">
              실제 화면 이미지는 추후 추가할 예정입니다. 현재는 각 화면이
              설명하는 사용자 경험과 이미지를 넣을 공간을 준비해 두었습니다.
            </p>
          </div>
          <ProjectGallery screens={project.screens} />
        </section>
      ) : null}

      <section
        className="section problem-solving container"
        aria-labelledby="problem-solving-title"
      >
        <div data-reveal>
          <p className="eyebrow">Technical Point</p>
          <h2 id="problem-solving-title">기술적 포인트</h2>
        </div>
        <div className="technical-details">
          {project.highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              data-reveal
              data-reveal-delay={(index % 3) + 1}
            >
              <h3>{highlight.title}</h3>
              <div className="technical-decision">
                <div>
                  <strong>문제</strong>
                  <p>
                    <BoldText content={highlight.problem} />
                  </p>
                </div>
                <div>
                  <strong>판단 및 구현</strong>
                  <p>
                    <BoldText content={highlight.decision} />
                  </p>
                </div>
                <div>
                  <strong>결과</strong>
                  <p>
                    <BoldText content={highlight.outcome} />
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="retrospective container" data-reveal>
        <p className="eyebrow">Retrospective</p>
        <h2>배운 점</h2>
        <StoryContent content={project.retrospective} />
        <Link href="/#projects" className="text-link">
          다른 프로젝트 보기
        </Link>
      </section>
    </main>
  );
}
