import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getProjectBySlug } from "@/data/portfolio";
import { ProjectDetail } from "./project-detail";

describe("ProjectDetail", () => {
  it("shows the Saejipsa user flow story", () => {
    const project = getProjectBySlug("web-product-platform");
    if (!project) throw new Error("Fixture project is required");

    render(<ProjectDetail project={project} />);

    expect(
      screen.getByRole("heading", { name: "새집사" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "사용자 행동을 중심으로 설계한 흐름" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "문제 해결과 기술적 판단" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "문제를 발견하고 해결한 과정" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "자격 분석 결과" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "화면 미리보기" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Flow 01")).not.toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(20);
    expect(
      screen.getByRole("img", { name: "새집사 서비스 아키텍처" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "FSD 기반 폴더 구조" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "새집사 FSD 기반 프론트엔드 폴더 구조" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "자격 검증 화면" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/70점/)).not.toBeInTheDocument();
  });

  it("shows the RunIt learning flow", () => {
    const project = getProjectBySlug("ai-study-planner");
    if (!project) throw new Error("Fixture project is required");

    render(<ProjectDetail project={project} />);

    expect(
      screen.getByRole("heading", { name: "런잇" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/API 연동 진행/)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Learning Journey" }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("판단 및 구현")).toHaveLength(3);
    expect(
      screen.getByRole("heading", { name: "AI 요약과 확인 퀴즈" }),
    ).toBeInTheDocument();
  });

  it("shows the Laviebel scheduling and payroll automation story", () => {
    const project = getProjectBySlug("laviebel-schedule-manager");
    if (!project) throw new Error("Fixture project is required");

    render(<ProjectDetail project={project} />);

    expect(
      screen.getByRole("heading", { name: "라비에벨 스케줄 관리" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("주간 스케줄 작성 시간 평균 2시간 → 30분 단축"),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Supabase 기반 데이터 흐름 설계" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "급여 관리 · 관리자 + 근무자" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "라비에벨 근무자의 급여 조회 화면" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "라비에벨 스케줄 관리 서비스 아키텍처" }),
    ).toBeInTheDocument();
  });
});
