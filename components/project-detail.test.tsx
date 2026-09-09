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
      screen.getByRole("heading", { name: "사용자 흐름 설계" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "기술적 포인트" }),
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
      screen.getByRole("heading", { name: "MCP 기반 개발 및 배포 환경 연동" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "급여 관리 / 근무자" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "라비에벨 근무자의 급여 조회 화면" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "라비에벨 스케줄 관리 서비스 아키텍처" }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("다음 개발 계획")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText(/웹 푸시 알림 기능/)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "서비스 바로가기" }),
    ).toHaveAttribute("href", "https://lavi-crew.vercel.app");
  });

  it("shows MIXTI as an AI and performance-focused MVP case study", () => {
    const project = getProjectBySlug("mixti-group-chemistry");
    if (!project) throw new Error("Fixture project is required");

    render(<ProjectDetail project={project} />);

    expect(screen.getByRole("heading", { name: "MIXTI" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "서비스 바로가기" }),
    ).toHaveAttribute("href", "https://mixti.io/");
    expect(
      screen.getByRole("heading", { name: "01. 서비스 아키텍처" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "02. 폴더 구조" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "03. AI 분석 아키텍처" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "04. AI 에이전트 활용" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "05. Performance Optimization" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "06. 운영 및 모니터링" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "배포 환경" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "프로젝트 이미지" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "MIXTI 서비스 아키텍처" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "MIXTI FSD 기반 프론트엔드 폴더 구조",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "웹폰트와 FCP/LCP 병목 해결" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "03. AI 분석 아키텍처",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "04. AI 에이전트 활용" }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Result")).toHaveLength(5);
    expect(screen.getAllByText("Implementation")).toHaveLength(5);
    expect(screen.getAllByText(/OpenAI Responses API/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/GA4/).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", { name: "06. 운영 및 모니터링" }),
    ).toBeInTheDocument();
    expect(screen.queryByLabelText("폰트 네트워크 요청 이미지 추가 예정"))
      .not.toBeInTheDocument();
    expect(screen.getByLabelText("GA4 사용자 흐름 이미지 추가 예정"))
      .toBeInTheDocument();
  });
});
