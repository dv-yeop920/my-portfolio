import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills"
      />
      <div className="skill-grid">
        {portfolio.skillGroups.map((group, index) => (
          <article
            className="skill-card"
            key={group.title}
            data-reveal
            data-reveal-delay={(index % 3) + 1}
          >
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
