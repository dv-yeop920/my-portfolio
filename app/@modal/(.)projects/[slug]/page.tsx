import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { ProjectModal } from "@/components/project-modal";
import { getProjectBySlug } from "@/data/portfolio";

type InterceptedProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InterceptedProjectPage({
  params,
}: InterceptedProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <ProjectModal>
      <ProjectDetail project={project} />
    </ProjectModal>
  );
}
