import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const title = project?.title ?? "Project";
  const summary = project?.summary ?? "Frontend project case study";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#102438",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#93c5fd", display: "flex", fontSize: 28, fontWeight: 700 }}>
          PROJECT CASE STUDY
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 800, letterSpacing: "-0.06em" }}>
            {title}
          </div>
          <div style={{ color: "#dbe5ed", display: "flex", fontSize: 30, lineHeight: 1.35, maxWidth: "1000px" }}>
            {summary}
          </div>
        </div>
        <div style={{ borderTop: "2px solid #31516e", color: "#93c5fd", display: "flex", fontSize: 24, paddingTop: "24px" }}>
          Junyeop Lee · Frontend Developer
        </div>
      </div>
    ),
    size,
  );
}
