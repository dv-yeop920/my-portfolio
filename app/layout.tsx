import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RevealObserver } from "@/components/reveal-observer";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | 이준엽",
  },
  description: siteConfig.description,
  applicationName: "이준엽 포트폴리오",
  authors: [{ name: "이준엽", url: siteConfig.url }],
  creator: "이준엽",
  publisher: "이준엽",
  keywords: [
    "이준엽",
    "프론트엔드 개발자",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "포트폴리오",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: ReactNode; modal: ReactNode }>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          본문으로 건너뛰기
        </a>
        {children}
        {modal}
        <RevealObserver />
      </body>
    </html>
  );
}
