import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "이준엽 | Frontend Developer",
  description:
    "성능과 사용자 경험을 고민하는 프론트엔드 개발자 이준엽의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
