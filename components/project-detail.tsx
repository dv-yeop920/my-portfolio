import Image from "next/image";
import Link from "next/link";
import type {
  DecisionStory,
  Project,
  ProjectEvidence,
  TechnicalHighlight,
} from "@/data/portfolio";
import type { ReactNode } from "react";
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

function DecisionStoryGrid({ story }: { story: DecisionStory }) {
  const items = [
    { label: "Problem", content: story.problem },
    { label: "Decision", content: story.decision },
    { label: "Implementation", content: story.implementation },
    { label: "Result", content: story.result },
  ];

  return (
    <div className="decision-story-grid">
      {items.map(item => (
        <div className="decision-story-item" key={item.label}>
          <strong>{item.label}</strong>
          <p>
            <BoldText content={item.content} />
          </p>
        </div>
      ))}
    </div>
  );
}

function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="case-hero container" data-reveal>
      <Link href="/#projects" className="back-link">
        &larr; Projects
      </Link>
      <div className="project-meta">
        <span>{project.eyebrow}</span>
      </div>
      <h1>{project.title}</h1>
      <p className="case-summary">{project.summary}</p>
      {project.links.length ? (
        <div className="project-links" aria-label="프로젝트 링크">
          {project.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
      {!project.overviewOnly ? (
        <>
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
        </>
      ) : null}
    </section>
  );
}

function CaseChapter({
  title,
  story,
  storyPosition = "before",
  children,
}: {
  title: string;
  story?: DecisionStory;
  storyPosition?: "before" | "after";
  children?: ReactNode;
}) {
  const storyGrid = story ? <DecisionStoryGrid story={story} /> : null;

  return (
    <section className="case-chapter container" data-reveal>
      <header className="case-chapter-heading">
        <h2>{title}</h2>
      </header>
      {storyPosition === "before" ? storyGrid : null}
      {children}
      {storyPosition === "after" ? storyGrid : null}
    </section>
  );
}

function ArchitectureExplanation({ project }: { project: Project }) {
  if (!project.architectureDescription || !project.architectureDecisions?.length) {
    return null;
  }

  return (
    <div className="architecture-explanation">
      <p>{project.architectureDescription}</p>
      <div className="architecture-technology-list">
        {project.architectureDecisions.map(item => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function EvidenceList({ evidence }: { evidence: ProjectEvidence[] }) {
  return (
    <div className="technical-evidence-list">
      {evidence.map(item => (
        <figure className="technical-evidence" key={item.title}>
          <div className="technical-evidence-media">
            {item.src ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 820px) 100vw, 42vw"
              />
            ) : (
              <div
                className="technical-evidence-placeholder"
                aria-label={`${item.title} 이미지 추가 예정`}
              >
                <span>Measurement capture</span>
                <strong>이미지 추가 예정</strong>
              </div>
            )}
          </div>
          <figcaption>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function BeforeAfterComparison({
  comparison,
}: {
  comparison: NonNullable<TechnicalHighlight["beforeAfter"]>;
}) {
  const beforeSrc = comparison.before.src;
  const afterSrc = comparison.after.src;

  if (!beforeSrc || !afterSrc) {
    return null;
  }

  const items = [
    { ...comparison.before, src: beforeSrc },
    { ...comparison.after, src: afterSrc },
  ];

  return (
    <div className="technical-evidence-comparison">
      {items.map(item => (
        <figure className="technical-evidence" key={item.title}>
          <div className="technical-evidence-media">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 820px) 100vw, 42vw"
            />
          </div>
          <figcaption>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function HighlightChapter({
  highlight,
  label = "기술 결정",
}: {
  highlight: TechnicalHighlight;
  label?: string;
}) {
  const story: DecisionStory = {
    problem: highlight.problem,
    decision: highlight.decision,
    implementation: highlight.implementation ?? highlight.decision,
    result: highlight.outcome,
  };

  return (
    <article className="case-subchapter" data-reveal>
      <p className="eyebrow">{label}</p>
      <h3>{highlight.title}</h3>
      <DecisionStoryGrid story={story} />
      {highlight.beforeAfter ? (
        <BeforeAfterComparison comparison={highlight.beforeAfter} />
      ) : highlight.evidence?.length ? (
        <EvidenceList evidence={highlight.evidence} />
      ) : null}
    </article>
  );
}

function RequestFlowDiagram({ items }: { items: string[] }) {
  return (
    <ol className="request-flow-diagram" aria-label="MIXTI 요청 처리 흐름">
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </li>
      ))}
    </ol>
  );
}

function PromptLayers() {
  return (
    <div className="prompt-layers" aria-label="MIXTI Prompt 구성">
      {[
        ["System", "분석 역할과 판단 원칙"],
        ["Input", "그룹 유형 · 구성원 · MBTI"],
        ["Constraints", "분석 범위와 금지 조건"],
        ["Output Schema", "summary · atmosphere · roles · pairs · insights"],
      ].map(([title, description]) => (
        <div key={title}>
          <strong>{title}</strong>
          <span>{description}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectFlowList({
  steps,
  descriptionLabel,
  solutionLabel,
}: {
  steps: Project["flow"];
  descriptionLabel: string;
  solutionLabel: string;
}) {
  return (
    <ol className="project-flow">
      {steps.map((step, index) => (
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
              {descriptionLabel && step.description ? <div>
                <strong>{descriptionLabel}</strong>
                <p>
                  <BoldText content={step.description} />
                </p>
              </div> : null}
              {solutionLabel && step.solution ? (
                <div>
                  <strong>{solutionLabel}</strong>
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
  );
}

function ProjectNextPlan({ plan }: { plan: NonNullable<Project["nextPlan"]> }) {
  return (
    <aside className="project-next-plan" aria-label="다음 개발 계획" data-reveal>
      <strong>{plan.title}</strong>
      <p>
        <BoldText content={plan.description} />
      </p>
    </aside>
  );
}

function MixtiCaseStudy({ project }: { project: Project }) {
  const architecture = project.architecture;
  const structure = project.structure;
  const analysis = project.highlights.find(highlight =>
    highlight.title.includes("OpenAI"),
  );
  const prompt = project.highlights.find(highlight =>
    highlight.title.includes("Prompt"),
  );
  const font = project.highlights.find(highlight =>
    highlight.title.includes("웹폰트"),
  );
  const inp = project.highlights.find(highlight =>
    highlight.title.includes("INP"),
  );
  const monitoring = project.highlights.find(highlight =>
    highlight.title.includes("GA4"),
  );

  if (
    !architecture ||
    !structure ||
    !analysis ||
    !prompt ||
    !font ||
    !inp ||
    !monitoring
  ) {
    return null;
  }

  return (
    <main className="case-study case-study--mixti-group-chemistry case-study--structured">
      <ProjectHero project={project} />

      <CaseChapter
        title="01. 서비스 아키텍처"
      >
        <div className="chapter-image chapter-image--architecture">
          <Image
            src={architecture.src}
            alt={architecture.alt}
            width={architecture.width}
            height={architecture.height}
            sizes="(max-width: 820px) 100vw, 80vw"
          />
        </div>
        <ArchitectureExplanation project={project} />
      </CaseChapter>

      <CaseChapter
        title="02. 폴더 구조"
      >
        <div className="chapter-structure">
          <Image
            src={structure.src}
            alt={structure.alt}
            width={structure.width}
            height={structure.height}
            sizes="(max-width: 820px) 100vw, 36vw"
            unoptimized
          />
          <div className="chapter-structure-copy">
            <p>
              <BoldText content={structure.description} />
            </p>
            <ul>
              {structure.points.map(point => (
                <li key={point}>
                  <BoldText content={point} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CaseChapter>

      <CaseChapter
        title="03. AI 분석 아키텍처"
        storyPosition="after"
        story={{
          problem: analysis.problem,
          decision: analysis.decision,
          implementation: analysis.implementation ?? analysis.decision,
          result: analysis.outcome,
        }}
      >
        <RequestFlowDiagram
          items={[
            "입력 Schema 검증",
            "Prompt 생성",
            "Next.js Route Handler",
            "OpenAI Responses API",
            "Structured Output",
            "memberId / pairId 검증",
            "Supabase 저장",
            "Result UI",
          ]}
        />
      </CaseChapter>

      <CaseChapter
        title="04. AI 에이전트 활용"
        storyPosition="after"
        story={{
          problem: prompt.problem,
          decision: prompt.decision,
          implementation: prompt.implementation ?? prompt.decision,
          result: prompt.outcome,
        }}
      >
        <PromptLayers />
      </CaseChapter>

      <CaseChapter
        title="05. Performance Optimization"
      >
        <div className="case-subchapter-grid">
          <HighlightChapter highlight={font} label="LCP / Font Loading" />
          <HighlightChapter highlight={inp} label="INP / Interaction Cost" />
        </div>
      </CaseChapter>

      <CaseChapter
        title="06. 운영 및 모니터링"
      >
        <div className="case-subchapter-grid">
          <article className="case-subchapter case-subchapter--monitoring">
            <DecisionStoryGrid
              story={{
                problem: monitoring.problem,
                decision: monitoring.decision,
                implementation:
                  monitoring.implementation ?? monitoring.decision,
                result: monitoring.outcome,
              }}
            />
            {monitoring.evidence?.length ? (
              <EvidenceList evidence={monitoring.evidence} />
            ) : null}
          </article>
        </div>
      </CaseChapter>

      <section className="retrospective container" data-reveal>
        <p className="eyebrow">Retrospective</p>
        <h2>{project.retrospectiveTitle ?? "배운 점"}</h2>
        <StoryContent content={project.retrospective} />
        <Link href="/#projects" className="text-link">
          다른 프로젝트 보기
        </Link>
      </section>
    </main>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  if (project.slug === "mixti-group-chemistry") {
    return <MixtiCaseStudy project={project} />;
  }

  const hasFlowImages = project.flow.some(step => step.images?.length);
  const highlightLabels = project.highlightLabels ?? {
    problem: "문제",
    decision: "판단 및 구현",
    implementation: "Implementation",
    outcome: "결과",
  };

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
        {project.links.length ? (
          <div className="project-links" aria-label="프로젝트 링크">
            {project.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
        {!project.overviewOnly ? (
          <>
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
          </>
        ) : null}
      </section>

      <section
        className={`case-grid container${
          project.overviewOnly ? " case-grid--overview-only" : ""
        }`}
      >
        <article data-reveal>
          <p className="eyebrow">Overview</p>
          <h2>프로젝트 개요</h2>
          <StoryContent content={project.purpose} />
        </article>
        {!project.overviewOnly ? (
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
        ) : null}
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
            {project.architectureStory ? (
              <DecisionStoryGrid story={project.architectureStory} />
            ) : null}
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
            {project.structureStory ? (
              <DecisionStoryGrid story={project.structureStory} />
            ) : null}
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

      {!project.overviewOnly && project.problems?.length ? (
        <section className="section project-flow-section container">
          <div data-reveal>
            <p className="eyebrow">Before</p>
            <h2>기존의 문제점</h2>
          </div>
          <ProjectFlowList
            steps={project.problems}
            descriptionLabel="상황"
            solutionLabel="문제"
          />
        </section>
      ) : null}

      {!project.overviewOnly ? (
        <section className="section project-flow-section container">
          <div data-reveal>
            <p className="eyebrow">User Flow</p>
            <h2>{project.flowTitle ?? "사용자 흐름 설계"}</h2>
          </div>
          <ProjectFlowList
            steps={project.flow}
            descriptionLabel={project.flowDescriptionLabel ?? "기능"}
            solutionLabel={project.flowSolutionLabel ?? "문제 해결"}
          />
          {project.nextPlan ? <ProjectNextPlan plan={project.nextPlan} /> : null}
        </section>
      ) : null}

      {!project.overviewOnly && !hasFlowImages && project.screens.length ? (
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

      {!project.overviewOnly ? (
        <section
          className="section problem-solving container"
          aria-labelledby="problem-solving-title"
        >
          <div data-reveal>
            <p className="eyebrow">
              {project.highlightsEyebrow ?? "Technical Point"}
            </p>
            <h2 id="problem-solving-title">
              {project.highlightsTitle ?? "기술적 포인트"}
            </h2>
          </div>
          <div className="technical-details">
            {project.highlights.map((highlight, index) => (
              <article
                className={highlight.evidence?.length ? "has-evidence" : undefined}
                key={highlight.title}
                data-reveal
                data-reveal-delay={(index % 3) + 1}
              >
                <h3>{highlight.title}</h3>
                <div className="technical-highlight-content">
                  <div className="technical-decision">
                    <div>
                      <strong>{highlightLabels.problem}</strong>
                      <p>
                        <BoldText content={highlight.problem} />
                      </p>
                    </div>
                    <div>
                      <strong>{highlightLabels.decision}</strong>
                      <p>
                        <BoldText content={highlight.decision} />
                      </p>
                    </div>
                    {highlight.implementation ? (
                      <div>
                        <strong>{highlightLabels.implementation}</strong>
                        <p>
                          <BoldText content={highlight.implementation} />
                        </p>
                      </div>
                    ) : null}
                    <div>
                      <strong>{highlightLabels.outcome}</strong>
                      <p>
                        <BoldText content={highlight.outcome} />
                      </p>
                    </div>
                  </div>
                  {highlight.evidence?.length ? (
                    <div className="technical-evidence-list">
                      {highlight.evidence.map(item => (
                        <figure className="technical-evidence" key={item.title}>
                          <div className="technical-evidence-media">
                            {item.src ? (
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 820px) 100vw, 42vw"
                              />
                            ) : (
                              <div
                                className="technical-evidence-placeholder"
                                aria-label={`${item.title} 이미지 추가 예정`}
                              >
                                <span>Measurement capture</span>
                                <strong>이미지 추가 예정</strong>
                              </div>
                            )}
                          </div>
                          <figcaption>
                            <strong>{item.title}</strong>
                            <p>{item.description}</p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {!project.overviewOnly ? (
        <section className="retrospective container" data-reveal>
          <p className="eyebrow">Retrospective</p>
          <h2>{project.retrospectiveTitle ?? "배운 점"}</h2>
          <StoryContent content={project.retrospective} />
          <Link href="/#projects" className="text-link">
            다른 프로젝트 보기
          </Link>
        </section>
      ) : null}
    </main>
  );
}
