import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("introduces Lee Junyeop and exposes contact actions", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /사용자가 느끼는 속도와 경험을 개선하는/,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/dv-yeop920",
    );
    const emailLinks = screen.getAllByRole("link", { name: /이메일/ });
    expect(emailLinks).toHaveLength(2);
    emailLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "mailto:jyeop920@gmail.com");
    });
    expect(
      screen.getByRole("heading", { name: "Skills" }),
    ).toBeInTheDocument();
  });

  it("links each featured project to its case study", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("link", { name: /Web Product Platform 상세 보기/ }),
    ).toHaveAttribute("href", "/projects/web-product-platform");
    expect(
      screen.getByRole("link", { name: /AI Study Planner 상세 보기/ }),
    ).toHaveAttribute("href", "/projects/ai-study-planner");
  });
});
