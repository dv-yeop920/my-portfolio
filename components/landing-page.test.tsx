import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("introduces Lee Junyeop and exposes contact actions", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /사용자의 경험을 더 나은 방향으로 변화시키는/,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/dv-yeop920",
    );
    expect(screen.getByRole("link", { name: "이메일 보내기" })).toHaveAttribute(
      "href",
      "mailto:jyeop920@gmail.com",
    );
    expect(
      screen.getByRole("link", { name: "jyeop920@gmail.com" }),
    ).toHaveAttribute("href", "mailto:jyeop920@gmail.com");
    expect(screen.getByText(/Phone/, { selector: "strong" })).toBeInTheDocument();
    expect(screen.getByText("010 - 6652 - 6402")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Skills" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Language" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Education" })).toHaveAttribute(
      "href",
      "#education",
    );
    expect(
      screen.getByText("멋쟁이 사자처럼 프론트엔드 스쿨 플러스 (우수상)"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("코드스테이츠 소프트웨어 엔지니어링 부트캠프 (프론트엔드)"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "서비스 출시 경험" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/누적 방문자 1,000명/)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "실제 문제를 서비스로 해결" }),
    ).toBeInTheDocument();
    expect(screen.getByText("TanStack Query")).toBeInTheDocument();
    expect(screen.getByText("vanilla-extract")).toBeInTheDocument();
    expect(
      screen.queryByText("실제 구현과 문제 해결에 활용한 기술을 중심으로 정리했습니다."),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "이준엽 프로필 사진" }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Performance")).not.toBeInTheDocument();
  });

  it("links each featured project to its case study", () => {
    render(<HomePage />);

    expect(
      screen.getByText(
        "복잡한 청약 공고를 직관적으로 탐색하고 자격 조건을 쉽게 검증할 수 있도록 만든 웹 서비스입니다.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "새집사 상세 페이지" }),
    ).toHaveAttribute("href", "/projects/web-product-platform");
    expect(
      screen.getByRole("link", { name: "런잇 상세 페이지" }),
    ).toHaveAttribute("href", "/projects/ai-study-planner");
    expect(
      screen.getByRole("link", { name: "라비에벨 스케줄 관리 상세 페이지" }),
    ).toHaveAttribute("href", "/projects/laviebel-schedule-manager");
    expect(screen.getByText("진행 중")).toBeInTheDocument();
    expect(screen.queryByText("개발 완료")).not.toBeInTheDocument();
    expect(screen.queryByText("개발 및 운영 중")).not.toBeInTheDocument();
  });
});
