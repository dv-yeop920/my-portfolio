import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { portfolio } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <SiteHeader name={portfolio.profile.name} />
      <main>
        <Hero />
        <section id="about" className="section about container">
          <SectionHeading
            eyebrow="About Me"
            title="문제를 발견하고, 더 빠른 경험으로 개선합니다."
          />
          <p>{portfolio.profile.introduction}</p>
        </section>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter name={portfolio.profile.name} />
    </>
  );
}
