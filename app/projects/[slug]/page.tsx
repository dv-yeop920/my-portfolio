import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { StructuredData } from "@/components/structured-data";
import { getProjectBySlug, portfolio } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return project
    ? {
        title: project.title,
        description: project.summary,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
          type: "article",
          url: `/projects/${project.slug}`,
          title: `${project.title} | 이준엽`,
          description: project.summary,
          images: [
            {
              url: `/projects/${project.slug}/opengraph-image`,
              width: 1200,
              height: 630,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: `${project.title} | 이준엽`,
          description: project.summary,
          images: [`/projects/${project.slug}/opengraph-image`],
        },
      }
    : { title: "Project Not Found", robots: { index: false, follow: false } };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary,
          url: `${siteConfig.url}/projects/${project.slug}`,
          inLanguage: "ko-KR",
          author: {
            "@type": "Person",
            name: "이준엽",
            url: siteConfig.url,
          },
          about: project.stack,
          keywords: project.stack.join(", "),
        }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
