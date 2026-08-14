export const siteConfig = {
  name: "이준엽 | Frontend Developer",
  description:
    "사용자 경험과 성능을 고민하며 제품을 만드는 프론트엔드 개발자 이준엽의 포트폴리오입니다.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://my-portfolio-kappa-lake-0z3iii7a2n.vercel.app",
  locale: "ko_KR",
  github: "https://github.com/dv-yeop920",
  email: "jyeop920@gmail.com",
} as const;
