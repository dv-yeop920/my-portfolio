import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getProjectBySlug } from "@/data/portfolio";
import { ProjectDetail } from "./project-detail";

describe("ProjectDetail", () => {
  it("shows the verified optimization story without an invented metric", () => {
    const project = getProjectBySlug("web-product-platform");
    if (!project) throw new Error("Fixture project is required");

    render(<ProjectDetail project={project} />);

    expect(
      screen.getByRole("heading", { name: "Web Product Platform" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/AWS S3와 CloudFront/)).toBeInTheDocument();
    expect(
      screen.getByText(/측정 수치는 보존되어 있지 않지만/),
    ).toBeInTheDocument();
    expect(screen.queryByText(/70점/)).not.toBeInTheDocument();
  });

  it("labels the study planner as in progress", () => {
    const project = getProjectBySlug("ai-study-planner");
    if (!project) throw new Error("Fixture project is required");

    render(<ProjectDetail project={project} />);

    expect(screen.getByText("개발 중")).toBeInTheDocument();
    expect(screen.getByText(/API 연동 진행/)).toBeInTheDocument();
  });
});
