import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills"
        description="실제 구현과 문제 해결에 활용한 기술을 중심으로 정리했습니다."
      />
      <div className="skill-grid">
        {portfolio.skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
