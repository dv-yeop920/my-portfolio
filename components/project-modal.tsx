"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export function ProjectModal({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") router.back();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [router]);

  return (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) router.back();
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label="프로젝트 상세"
      >
        <button
          type="button"
          className="project-modal-close"
          aria-label="프로젝트 상세 닫기"
          onClick={() => router.back()}
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="project-modal-content">{children}</div>
      </section>
    </div>
  );
}
