import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "이준엽 | Frontend Developer",
    short_name: "이준엽 포트폴리오",
    description: "프론트엔드 개발자 이준엽의 포트폴리오",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#2563eb",
    lang: "ko-KR",
  };
}
