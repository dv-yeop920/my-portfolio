export type SkillGroup = {
  title: string;
  skills: string[];
};

export type TechnicalHighlight = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  status: string;
  summary: string;
  purpose: string;
  role: string[];
  stack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  highlights: TechnicalHighlight[];
  retrospective: string;
  previewImage: string;
  previewAlt: string;
  metrics: string[];
  links: { label: string; href: string }[];
};

export const portfolio = {
  profile: {
    name: "이준엽",
    role: "Frontend Developer",
    email: "jyeop920@gmail.com",
    github: "https://github.com/dv-yeop920",
    image: "/profile-placeholder.svg",
    imageAlt: "이준엽 프로필 사진",
    headline: "사용자가 느끼는 속도와 경험을 개선하는 프론트엔드 개발자",
    introduction:
      "화면을 구현하는 데서 멈추지 않고, 사용 흐름에서 발생하는 병목을 발견하고 해결하는 프론트엔드 개발을 지향합니다.",
  },
  skillGroups: [
    {
      title: "Core Frontend",
      skills: ["React", "Next.js", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Architecture & Integration",
      skills: ["Feature-Sliced Design", "REST API"],
    },
    {
      title: "Performance & Delivery",
      skills: [
        "Lighthouse",
        "Lazy Loading",
        "WebP",
        "SVG",
        "AWS S3",
        "CloudFront",
        "Deployment",
      ],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      slug: "web-product-platform",
      title: "Web Product Platform",
      eyebrow: "Company Project",
      status: "개발 완료",
      summary:
        "청약 공고를 직관적으로 확인하고 간편하게 자격을 검증할 수 있는 웹 서비스입니다.",
      purpose:
        "사용자가 청약 공고를 쉽게 탐색하고, 복잡한 자격 조건을 간편하게 확인할 수 있도록 돕는 웹 서비스를 구축했습니다.",
      role: [
        "화면 설계에 필요한 기획 일부 참여",
        "전체 화면 및 프론트엔드 기능 구현",
        "API 연동과 배포 참여",
        "이미지 로딩 병목 개선",
      ],
      stack: [
        "React",
        "REST API",
        "AWS S3",
        "CloudFront",
        "WebP",
        "SVG",
        "Lazy Loading",
      ],
      challenge:
        "개발 중 Lighthouse 점검에서 랜딩 페이지의 이미지 로딩이 사용자 경험에 부담이 되는 것을 확인했습니다.",
      solution:
        "이미지를 AWS S3와 CloudFront를 통해 전달하고, 콘텐츠 특성에 맞춰 WebP와 SVG를 사용했으며, 초기 화면에 불필요한 이미지는 lazy loading으로 지연했습니다.",
      outcome:
        "측정 수치는 보존되어 있지 않지만, 이미지 전달과 초기 로딩 방식을 개선하는 과정을 직접 설계하고 반영했습니다.",
      highlights: [
        {
          title: "Image Delivery",
          description: "S3와 CloudFront를 사용해 이미지 전달 경로를 구성했습니다.",
        },
        {
          title: "Loading Strategy",
          description:
            "WebP/SVG와 lazy loading을 적용해 초기 이미지 부담을 줄였습니다.",
        },
      ],
      retrospective:
        "성능 개선 결과를 이후에도 입증할 수 있도록 측정 지표를 기록하고 비교하는 과정의 중요성을 배웠습니다.",
      previewImage: "/project-platform-preview.svg",
      previewAlt: "Web Product Platform 화면을 나타내는 추상 미리보기",
      metrics: [],
      links: [],
    },
    {
      slug: "ai-study-planner",
      title: "AI Study Planner",
      eyebrow: "Learning Service",
      status: "개발 중",
      summary:
        "학생의 학습 일정과 목표 관리를 돕고 AI 노트 요약 기능을 제공하는 학습 지원 서비스입니다.",
      purpose:
        "학생이 계획을 세우고 목표 달성 과정을 관리하며 요약된 학습 자료를 활용할 수 있도록 돕습니다.",
      role: [
        "Feature-Sliced Design을 참고한 폴더 구조 구축",
        "전체 페이지 퍼블리싱 및 UI 구현",
        "학습, 목표 달성, 단권화 도메인 기능 API 연동 진행",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Feature-Sliced Design",
        "REST API",
        "AI Summary",
      ],
      challenge:
        "학습 계획, 목표 달성, 노트 요약처럼 서로 다른 도메인 흐름을 일관된 사용자 경험으로 연결해야 합니다.",
      solution:
        "도메인별 책임을 분리할 수 있도록 FSD 기반 구조를 적용하고, 공통 UI와 기능 흐름을 정돈하며 API 연동을 진행합니다.",
      outcome:
        "현재 페이지 UI와 구조 구축을 완료했고, 핵심 도메인 기능 연동은 개발 상태에 맞추어 공개합니다.",
      highlights: [
        {
          title: "Domain Structure",
          description:
            "학습, 목표 달성, 단권화 기능을 기준으로 프론트엔드 책임을 구분합니다.",
        },
        {
          title: "AI Assistance",
          description:
            "노트 내용을 요약하여 학습에 활용하는 사용자 흐름을 제공합니다.",
        },
      ],
      retrospective:
        "서비스가 완료되면 실제 사용자 흐름과 성능을 검증해 구조 선택의 효과를 확인할 예정입니다.",
      previewImage: "/study-planner-preview.svg",
      previewAlt: "AI Study Planner 대시보드를 나타내는 추상 미리보기",
      metrics: [],
      links: [],
    },
  ] satisfies Project[],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolio.projects.find((project) => project.slug === slug);
}
