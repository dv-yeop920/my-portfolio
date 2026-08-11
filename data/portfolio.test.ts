import { describe, expect, it } from "vitest";
import { getProjectBySlug, portfolio } from "./portfolio";

describe("portfolio project content", () => {
  it("contains three featured projects with distinct case-study routes", () => {
    expect(portfolio.projects).toHaveLength(3);
    expect(portfolio.projects.map((project) => project.slug)).toEqual([
      "web-product-platform",
      "ai-study-planner",
      "laviebel-schedule-manager",
    ]);
  });

  it("keeps project routes and flow data consistent", () => {
    const platform = getProjectBySlug("web-product-platform");
    const planner = getProjectBySlug("ai-study-planner");
    const scheduleManager = getProjectBySlug("laviebel-schedule-manager");

    expect(platform?.links).toEqual([]);
    expect(planner?.links).toEqual([]);
    expect(platform?.screens).toHaveLength(3);
    expect(platform?.flow).toHaveLength(8);
    expect(platform?.flow.flatMap((step) => step.images ?? [])).toHaveLength(18);
    expect(planner?.title).toBe("런잇");
    expect(planner?.flow).toHaveLength(4);
    expect(scheduleManager?.links).toEqual([]);
    expect(scheduleManager?.flow).toHaveLength(4);
  });

  it("returns undefined for a project slug that does not exist", () => {
    expect(getProjectBySlug("unknown-project")).toBeUndefined();
  });
});
