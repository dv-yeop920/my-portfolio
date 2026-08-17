import { describe, expect, it } from "vitest";
import { getProjectBySlug, portfolio } from "./portfolio";

describe("portfolio project content", () => {
  it("contains featured projects with distinct case-study routes", () => {
    expect(portfolio.projects).toHaveLength(3);
    expect(portfolio.projects.map((project) => project.slug)).toEqual([
      "web-product-platform",
      "laviebel-schedule-manager",
      "mingle-group-chemistry",
    ]);
  });

  it("keeps project routes and flow data consistent", () => {
    const platform = getProjectBySlug("web-product-platform");
    const scheduleManager = getProjectBySlug("laviebel-schedule-manager");
    const mingle = getProjectBySlug("mingle-group-chemistry");

    expect(platform?.links).toEqual([]);
    expect(platform?.screens).toHaveLength(3);
    expect(platform?.flow).toHaveLength(8);
    expect(platform?.flow.flatMap((step) => step.images ?? [])).toHaveLength(18);
    expect(scheduleManager?.links).toEqual([
      {
        label: "서비스 바로가기",
        href: "https://lavi-crew.vercel.app",
      },
    ]);
    expect(scheduleManager?.flow).toHaveLength(11);
    expect(scheduleManager?.nextPlan?.title).toBe("Next");
    expect(mingle?.status).toBe("진행 중");
    expect(mingle?.overviewOnly).toBe(true);
    expect(mingle?.flow).toHaveLength(0);
  });

  it("returns undefined for a project slug that does not exist", () => {
    expect(getProjectBySlug("unknown-project")).toBeUndefined();
  });
});
