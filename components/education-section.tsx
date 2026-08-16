import { SectionHeading } from "./section-heading";

export function EducationSection() {
  return (
    <section id="education" className="section education container">
      <SectionHeading eyebrow="Background" title="Education" />
      <article className="education-entry" data-reveal data-reveal-delay="1">
        <h3>멋쟁이 사자처럼 프론트엔드 스쿨 플러스 (우수상)</h3>
        <p>23.10 ~ 23.12 (2개월)</p>
      </article>
    </section>
  );
}
