import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found container">
      <p className="eyebrow">404</p>
      <h1>요청하신 프로젝트를 찾을 수 없습니다.</h1>
      <Link href="/#projects" className="button primary">
        프로젝트 목록으로 돌아가기
      </Link>
    </main>
  );
}
