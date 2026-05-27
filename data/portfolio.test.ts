import { describe, expect, it } from "vitest";
import { getProjectBySlug, portfolio } from "./portfolio";

describe("portfolio project content", () => {
  it("contains two featured projects with distinct case-study routes", () => {
    expect(portfolio.projects).toHaveLength(2);
    expect(portfolio.projects.map((project) => project.slug)).toEqual([
      "web-product-platform",
      "ai-study-planner",
    ]);
  });

  it("keeps unavailable claims and links out of the case studies", () => {
    const platform = getProjectBySlug("web-product-platform");
    const planner = getProjectBySlug("ai-study-planner");

    expect(platform?.metrics).toEqual([]);
    expect(platform?.links).toEqual([]);
    expect(planner?.status).toBe("개발 중");
    expect(planner?.links).toEqual([]);
  });

  it("returns undefined for a project slug that does not exist", () => {
    expect(getProjectBySlug("unknown-project")).toBeUndefined();
  });
});
