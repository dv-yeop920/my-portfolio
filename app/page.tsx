import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { StructuredData } from "@/components/structured-data";
import { portfolio } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const profile = portfolio.profile;

  return (
    <div className="portfolio-shell">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${siteConfig.url}/#website`,
              name: siteConfig.name,
              url: siteConfig.url,
              inLanguage: "ko-KR",
            },
            {
              "@type": "ProfilePage",
              "@id": `${siteConfig.url}/#profile`,
              url: siteConfig.url,
              name: siteConfig.name,
              mainEntity: {
                "@type": "Person",
                name: profile.name,
                jobTitle: profile.role,
                email: profile.email,
                image: `${siteConfig.url}${profile.image}`,
                sameAs: [profile.github],
              },
            },
          ],
        }}
      />
      <SiteHeader
        role={portfolio.profile.role}
        image={portfolio.profile.image}
        imageAlt={portfolio.profile.imageAlt}
      />
      <div className="portfolio-content">
        <main id="main-content">
          <Hero />
          <section id="about" className="section about container">
            <SectionHeading
              eyebrow="About Me"
              title={`문제를 정확히 정의하고 \n 사용자에게 필요한 방식으로 풀어가는 과정을 \n중요하게 생각합니다.`}
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
        <SiteFooter name={portfolio.profile.name} role={portfolio.profile.role} />
      </div>
    </div>
  );
}
