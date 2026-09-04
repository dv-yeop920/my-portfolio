import { describe, expect, it } from "vitest";
import { getProjectBySlug, portfolio } from "./portfolio";

describe("portfolio project content", () => {
  it("contains featured projects with distinct case-study routes", () => {
    expect(portfolio.projects).toHaveLength(3);
    expect(portfolio.projects.map((project) => project.slug)).toEqual([
      "web-product-platform",
      "laviebel-schedule-manager",
      "mixti-group-chemistry",
    ]);
  });

  it("keeps project routes and flow data consistent", () => {
    const platform = getProjectBySlug("web-product-platform");
    const scheduleManager = getProjectBySlug("laviebel-schedule-manager");
    const mixti = getProjectBySlug("mixti-group-chemistry");

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
    expect(mixti?.status).toBe("진행 중");
    expect(mixti?.overviewOnly).not.toBe(true);
    expect(mixti?.flow).toHaveLength(5);
    expect(mixti?.flow[0]?.title).toBe("홈 페이지");
    expect(mixti?.highlights).toHaveLength(5);
    expect(mixti?.stack).toEqual(
      expect.arrayContaining([
        "OpenAI Responses API",
        "Supabase",
        "React Query",
        "Zustand",
        "GA4",
      ]),
    );
    expect(mixti?.architecture?.alt).toBe("MIXTI 서비스 아키텍처");
    expect(mixti?.structure?.title).toBe("FSD 기반 폴더 구조");
    expect(mixti?.purpose).not.toContain("GA4");
    expect(mixti?.highlights.some((highlight) => highlight.title.includes("GA4")))
      .toBe(true);
    expect(mixti?.highlights.flatMap((highlight) => highlight.evidence ?? []))
      .toHaveLength(4);
    expect(
      mixti?.highlights.flatMap((highlight) =>
        (highlight.evidence ?? []).map((item) => item.title),
      ),
    ).toEqual([
      "폰트 네트워크 요청",
      "Lighthouse mobile 측정",
      "Vercel Speed Insights",
      "GA4 사용자 흐름",
    ]);
  });

  it("returns undefined for a project slug that does not exist", () => {
    expect(getProjectBySlug("unknown-project")).toBeUndefined();
  });
});
