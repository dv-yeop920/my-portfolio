import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { portfolio } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader
        role={portfolio.profile.role}
        image={portfolio.profile.image}
        imageAlt={portfolio.profile.imageAlt}
      />
      <div className="portfolio-content">
        <main>
          <Hero />
          <section id="about" className="section about container">
            <SectionHeading
              eyebrow="About Me"
              title={`사용자의 불편에서 시작해\n제품의 완성도를 높입니다.`}
            />
            <ul className="about-list">
              {portfolio.profile.aboutHighlights.map((highlight, index) => (
                <li
                  key={highlight.title}
                  data-reveal
                  data-reveal-delay={(index % 3) + 1}
                >
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </li>
              ))}
            </ul>
          </section>
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <SiteFooter name={portfolio.profile.role} />
      </div>
    </div>
  );
}
