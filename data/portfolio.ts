export type SkillGroup = {
  title: string;
  skills: string[];
};

export type AboutHighlight = {
  title: string;
  description: string;
};

export type TechnicalHighlight = {
  title: string;
  description: string;
};

export type ProjectFlowStep = {
  title: string;
  description: string;
  solution?: string;
  images?: { src: string; alt: string; unoptimized?: boolean }[];
  image?: string;
  alt?: string;
};

export type ProjectScreen = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  purpose: string;
  role: string[];
  stack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  highlights: TechnicalHighlight[];
  retrospective: string;
  flow: ProjectFlowStep[];
  screens: ProjectScreen[];
  links: { label: string; href: string }[];
};

export const portfolio = {
  profile: {
    name: "이준엽",
    role: "Frontend Developer",
    phone: "010 - 6652 - 6402",
    email: "jyeop920@gmail.com",
    github: "https://github.com/dv-yeop920",
    image: "/profile.jpg",
    imageAlt: "이준엽 프로필 사진",
    headline:
      "사용자의 경험을 더 나은 방향으로 \n변화시키는 프로덕트를 지향하는 개발자 \n이준엽입니다",
    introduction:
      "사용자가 어디에서 불편을 느끼고 어떤 정보를 먼저 필요로 하는지 고민하며 UI/UX 흐름과 기능으로 풀어내는 것에 성취감을 느낍니다.",
    aboutHighlights: [
      {
        title: "서비스 출시 경험",
        description:
          "4인 스타트업에서 약 9개월간 청약 자격 검증 서비스의 기획 일부와 프론트엔드 개발을 담당했습니다. 공고 탐색 => 자격 검증 => 검증 결과 플로우로 청약 자격 검증 과정을 적용하고 실제 서비스로 구현했고 출시 후 2주간 누적 방문자 1,000명을 기록하는 경험을 했습니다.",
      },
      {
        title: "실제 문제를 서비스로 해결",
        description:
          "현재는 사이드 프로젝트로 제가 다니는 웨딩홀 예도 알바에서 직접 경험하고 있는 일정 관리의 급여 정산의 불편을 해결하기 위해 스케줄 및 급여 관리 웹 서비스를 개발하고 운영중이며 스케줄 작성과 급여 평균 계산 시간을 크게 줄였습니다.",
      },
      {
        title: "AI 활용",
        description:
          "AI에게 바로 코드를 맡기기보다 프로젝트 규칙과 작업 범위를 먼저 정의하고 조사 → 계획 → 구현 → 리뷰 과정을 나눠 활용합니다. AGENTS.md와 Agent 역할을 구성해 결과를 검토할 수 있는 형태로 AI를 개발 과정에 적용하고 있습니다.",
      },
      {
        title: "요구사항과 아키텍처",
        description:
          "기능을 만들기 전에 사용자 요구 사항, 데이터의 흐름, 예외 처리, 확장성을 먼저 고려합니다. 그 기준으로 컴포넌트와 로직의 역할을 나누고 기능이 늘어나거나 요구사항이 바뀌어도 대응하기 쉬운 구조를 만드는 것을 좋아합니다.",
      },
    ] satisfies AboutHighlight[],
  },
  skillGroups: [
    {
      title: "Language",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js(App Router)"],
    },
    {
      title: "State & Data",
      skills: ["TanStack Query", "Zustand", "Zod", "axios"],
    },
    {
      title: "Styling",
      skills: ["SCSS", "vanilla-extract", "styled-components"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      slug: "web-product-platform",
      title: "새집사",
      eyebrow: "Freelance · 2024.06 - 2025.02",
      summary:
        "복잡한 청약 공고를 직관적으로 탐색하고 자격 조건을 쉽게 검증할 수 있도록 만든 웹 서비스입니다.",
      purpose:
        "청약 공고는 정보가 흩어져 있고 자격 조건도 복잡해, 사용자가 자신에게 맞는 공고인지 빠르게 판단하기 어려움이 있습니다. 이 문제를 해결하기 위해" +
        " 4인 스타트업에서 서비스 기획의 일부와 프론트엔드 개발을 함께 담당하며 복잡한 청약 정보를 사용자가 쉽게 탐색하고 자격 여부를 확인할 수 있는 서비스 흐름을 설계하고 구현했습니다.",
      role: [
        "AWS S3와 CloudFront 기반 이미지 CDN 구축",
        "Server Components, metadata, semantic HTML, next/image를 활용한 SEO 개선",
        "PM2 클러스터 모드, 자동 재시작, 로그 추적을 구성해 운영 환경 구축",
        "공고 탐색 => 자격 검증 => 검증 결과 확인 흐름 설계 및 아키텍처 설계",
      ],
      stack: [
        "Next.js(App Router)",
        "TypeScript",
        "FSD 아키텍처",
        "AWS S3",
        "CloudFront",
        "next/image",
        "PM2",
      ],
      challenge:
        "청약 정보는 공고마다 지역·공급 조건·접수 일정이 흩어져 있고 자격 기준도 복잡했습니다. 사용자는 관심 있는 공고를 찾는 것부터 자신이 신청할 수 있는지 판단하는 과정까지 많은 정보를 직접 비교하고 해석해야 했습니다.",
      solution:
        "공고를 많이 보여주는 것보다 사용자가 판단하는 순서를 단순하게 만드는 것에 집중했습니다.관심 지역 선택 → 공고 탐색 → 상세 확인 → 자격 정보 입력 → 서류 발급 → 자격 분석으로 흐름을 연결하고 각 단계에서는 그 순간 필요한 정보만 우선적으로 보여주도록 구성했습니다.",
      outcome:
        "공고 탐색과 자격 확인을 분리된 과정이 아닌 하나의 사용자 흐름으로 연결한 서비스를 출시했습니다. 출시 후 약 2주간 누적 방문자 1,000명을 기록하며 실제 사용 환경에서 서비스를 운영했습니다.",
      highlights: [
        {
          title: "이미지 최적화",
          description:
            "다수의 이미지 사용으로 랜딩 속도가 느려지는 문제 때문에 S3·CloudFront CDN 기반으로 전달 구조를 변경, 이미지 포맷은 WebP·SVG로 최적화하고 next/image의 Lazy Loading을 적용해 초기 요청량을 줄였으며 그 결과 초기 이미지 평균 로딩 시간을 약 30% 단축했습니다.",
        },
        {
          title: "Next.js 기반 SEO 개선",
          description:
            "검색 유입을 고려해 App Router의 Server Components를 중심으로 렌더링 구조를 구성하고 페이지별 metadata, semantic HTML, next/image를 적용해 검색 엔진 최적화를 했습니다.",
        },
        {
          title: "PM2 기반 운영 환경 구성",
          description:
            "프로세스 장애가 서비스 중단으로 이어지지 않도록 PM2 Cluster Mode와 Auto Restart를 적용하고 로그 추적 환경을 구성했습니다. 장애 발생 시 프로세스를 자동 복구하고, 운영 이슈를 빠르게 확인할 수 있도록 했습니다.",
        },
      ],
      retrospective:
        "복잡한 도메인일수록 사용자가 어떤 순서로 정보를 확인하고 판단하는지 먼저 정리하는 과정이 중요하다는 점을 배웠습니다. 기획 참여부터 화면 설계, API 연동, 출시와 운영까지 경험하며 프론트엔드 개발이 하나의 기능 구현이 아니라 프로덕트가 만들어지고 사용자에게 전달되는 전체 과정과 연결되어 있다는 점을 이해하게 됐습니다. 또한 이미지 최적화, SEO, PM2 기반 운영 환경을 직접 구성하면서 성능과 운영 안정성까지 사용자 경험의 일부로 바라보는 기준을 만들었습니다. 요구사항과 데이터 흐름, 예외 상황을 문서로 정리하는 습관도 들이며 구현 전에 구조를 명확히 하고 변경 과정에서 발생하는 재작업을 줄이는 방식으로 개발하게 됐습니다.",
      flow: [
        {
          title: "온보딩",
          description: "서비스 소개 / 자격 확인 CTA / 온보딩 이미지 제공",
          solution:
            "복잡한 청약 제도를 처음부터 설명하기보다 ‘내 자격 알아보기’ CTA에 행동을 집중해 사용자가 바로 자격 확인을 시작할 수 있도록 구성했습니다. 초기 랜딩 속도를 확인하며 병목이 된 이미지 전달 방식을 S3·CloudFront CDN으로 바꾸고 WebP·SVG와 next/image의 lazy loading을 적용해 초기 로딩 부담을 줄였습니다. 검색 유입을 고려해 페이지별 metadata와 semantic HTML을 구성하고 Server Components를 활용해 SEO 기본 구조도 함께 개선했습니다.",
          images: [
            {
              src: "/projects/newzipsa/onboarding.png",
              alt: "새집사 온보딩 화면",
            },
            {
              src: "/projects/newzipsa/onboarding2.png",
              alt: "새집사 서비스 소개 온보딩 화면",
            },
            {
              src: "/projects/newzipsa/onboarding3.png",
              alt: "새집사 자격 확인 시작 온보딩 화면",
              unoptimized: true,
            },
          ],
        },
        {
          title: "지역 선택",
          description: "관심 지역 선택 / 지역별 모집 공고 수 조회 ",
          solution:
            "전국 공고를 모두 보여주기보다 사용자의 관심 지역을 먼저 받아 탐색 범위를 좁히는 방식을 선택했습니다. 지역별 모집 공고 수를 함께 제공하고 선택 지역을 최대 3개로 제한해 필요한 지역의 공고에 집중할 수 있도록 구성했습니다.",
          images: [
            {
              src: "/projects/newzipsa/region-selection.png",
              alt: "관심 지역을 선택하는 화면",
            },
          ],
        },
        {
          title: "공고 탐색",
          description:
            "선택한 지역과 공고 유형을 기준으로 모집 중인 청약 공고를 모아 보고 필요한 공고의 상세 정보로 바로 이동할 수 있도록 했습니다.",
          solution:
            "긴 공고문을 하나씩 열어보는 부담을 줄이기 위해 비교에 필요한 핵심 정보를 리스트에 먼저 노출했습니다. 여러 공고를 빠르게 비교한 뒤 필요한 공고만 상세하게 확인할 수 있도록 구성했습니다.",
          images: [
            {
              src: "/projects/newzipsa/announcement-explore.png",
              alt: "지역별 청약 공고를 탐색하는 화면",
            },
          ],
        },
        {
          title: "공고 상세",
          description:
            "공고 핵심 정보 조회 / 분양가·평당가 전환 / 기본·분양·일정 탭 조회 / 일정 D-Day 표시",
          solution:
            "긴 공고문에서 필요한 정보를 빠르게 찾을 수 있도록 가격·세대수·면적 등 핵심 정보는 상단에 우선 배치하고 상세 내용은 기본정보·분양정보·분양일정 탭으로 분리으며 접수 일정의 날짜 데이터를 date-fns로 계산해 D-Day 상태값으로 변환하고 Chip 형태로 시각화하여 날짜를 직접 계산하지 않아도 마감까지 남은 기간을 바로 확인할 수 있도록 구현했습니다.",
          images: [
            {
              src: "/projects/newzipsa/announcement-detail-1.png",
              alt: "청약 공고 기본 정보를 보여 주는 상세 화면",
            },
            {
              src: "/projects/newzipsa/announcement-detail-2.png",
              alt: "청약 공고 공급 정보를 보여 주는 상세 화면",
            },
            {
              src: "/projects/newzipsa/announcement-detail-3.png",
              alt: "청약 공고 분양 일정을 보여 주는 상세 화면",
            },
          ],
        },
        {
          title: "단계별 정보 수집",
          description:
            "단계별 질문, 입력 / 입력값 유지 / 이전 단계 수정 / 최종 입력 확인",
          solution:
            "법률 용어 중심의 복잡한 조건을 일상적인 질문과 선택지로 바꿔 사용자가 자신의 상황을 기준으로 답할 수 있고 마지막에 입력한 정보가 맞는지 확인할 수 있도록 UI/UX 흐름을 설계 했으며 단계별 입력값을 Zustand 전역 상태로 관리해 페이지 이동 시에도 값을 유지하고 각 단계와 최종 확인 화면이 동일한 상태를 참조하도록 구성했습니다. 이를 통해 단계별 폼의 상태 전달을 단순화하고 수정 흐름도 유지했습니다. ",
          images: [
            {
              src: "/projects/newzipsa/eligibility-question-1.png",
              alt: "세대 구성 정보를 입력하는 자격 확인 화면",
            },
            {
              src: "/projects/newzipsa/eligibility-question-2.png",
              alt: "주택 소유 이력을 입력하는 자격 확인 화면",
            },
            {
              src: "/projects/newzipsa/eligibility-confirmation.png",
              alt: "입력한 자격 정보를 확인하는 화면",
            },
          ],
        },
        {
          title: "정보 수집 참고 사항",
          description: "바텀시트 공통 컴포넌트 설계 / 질문별 참고 정보 조회",
          solution:
            "추가 설명이 필요한 항목은 현재 질문 흐름을 벗어나지 않고 바텀시트에서 바로 확인할 수 있도록 구성했습니다. 반복되는 안내 UI는 공통 컴포넌트로 분리해 질문별 내용만 다르게 사용할 수 있도록 관리하고 중복 구현을 줄이면서 일관된 안내 경험을 유지했습니다.",
          images: [
            {
              src: "/projects/newzipsa/eligibility-guide.png",
              alt: "세대원 기준을 설명하는 정보 수집 참고 화면",
            },
          ],
        },
        {
          title: "중요 정보 입력과 서류 처리",
          description:
            "거주지·이름·번호·청약통장 정보등 입력/ 필수 약관 동의 / 간편 인증 / 서류 발급 API 연동",
          solution:
            "자격 확인 과정이 복잡해지지 않도록 중요 정보 입력 → 약관 동의 → 서류 발급 API 호출 순서로 플로우를 구성했습니다. 입력 내용을 토대로 사용자가 발급 받아야 할 서류 목록을 불러오고 사용자가 직접 서류를 발급하거나 별도로 제출하지 않아도 필요한 서류를 불러올 수 있도록 해 절차를 줄였습니다.",
          images: [
            {
              src: "/projects/newzipsa/important-info-1.png",
              alt: "거주 지역을 선택하는 중요 정보 입력 화면",
            },
            {
              src: "/projects/newzipsa/important-info-2.png",
              alt: "주민등록상 주소를 확인하는 중요 정보 입력 화면",
            },
            {
              src: "/projects/newzipsa/important-info-3.png",
              alt: "청약통장 가입 정보를 입력하는 화면",
            },
            {
              src: "/projects/newzipsa/important-info-4.png",
              alt: "자격 분석을 위한 필수 동의 화면",
            },
            {
              src: "/projects/newzipsa/important-info-5.png",
              alt: "간편 인증으로 필수 서류를 불러오는 화면",
            },
          ],
        },
        {
          title: "자격 분석 결과",
          description:
            "서류 분석 API 연동 / 청약 자격 판정 조회 / 신청 가능 순위 안내 / 청약 일정 알림 신청",
          solution:
            "발급받은 서류를 분석 API로 전달해 청약 지원 자격 여부를 판정하고 결과를 충족·불충족 조건으로 나눠 사용자가 어떤점을 보완해야 하는지 확인할 수 있도록 구성했습니다. 또한 신청 가능한 날짜에 맞춰 알림 신청 여부를 받을 수 있게 해 자격 확인 이후 실제 청약 신청까지 이어질 수 있도록 했습니다.",
          images: [
            {
              src: "/projects/newzipsa/result.png",
              alt: "청약 자격 분석 결과를 안내하는 화면",
            },
          ],
        },
      ],
      screens: [
        {
          title: "공고 탐색 화면",
          description:
            "공고를 비교할 때 먼저 확인해야 하는 정보와 탐색 경험을 보여 줄 이미지 영역입니다.",
        },
        {
          title: "자격 검증 화면",
          description:
            "사용자 조건을 확인하고 검증 결과를 안내하는 흐름을 보여 줄 이미지 영역입니다.",
        },
        {
          title: "검증 결과 화면",
          description:
            "자격 조건을 이해하기 쉽게 정리한 결과 화면을 보여 줄 이미지 영역입니다.",
        },
      ],
      links: [],
    },
    {
      slug: "ai-study-planner",
      title: "런잇",
      eyebrow: "2026.03 - 2026.08",
      summary:
        "학생이 목표 설정부터 학습 인증까지 스스로 이어가도록 돕는 AI 기반 학습 플랫폼입니다.",
      purpose:
        "학생이 학습 계획을 세워도 매일의 실행과 기록까지 이어 가기 어렵다는 문제에서 출발했습니다. 목표 설정, 날짜별 계획, 학습 인증, AI 요약과 확인 퀴즈를 하나의 학습 경험으로 연결하는 교육 서비스를 개발하고 있습니다.",
      role: [
        "Feature-Sliced Design 기반 폴더 구조와 프론트엔드 규칙 구축",
        "전체 페이지 퍼블리싱과 학습 사용자 흐름 설계 및 구현",
        "AGENTS.md, Skill, Hook을 활용한 AI Agent 개발 환경 설계",
        "학습, 목표 달성, 단권화 도메인 기능 API 연동 진행",
      ],
      stack: [
        "Next.js App Router",
        "TypeScript",
        "Feature-Sliced Design",
        "REST API",
        "AI Summary",
        "AI Agents",
        "AGENTS.md",
      ],
      challenge:
        "학습 계획 설정부터 인증과 완료까지의 과정이 길고 선택지가 많아지면 사용자는 중간에 이탈하기 쉽습니다. 학습 유형마다 다른 기록 방식도 하나의 자연스러운 경험으로 연결해야 했습니다.",
      solution:
        "전체 과정을 목표 설정 → 날짜별 계획 생성 → 오늘의 학습 확인 → 학습 인증 → 확인 퀴즈 → 완료로 나눴습니다. 입력한 기간과 요일을 바탕으로 계획을 자동 생성하고, 학습 유형에 따라 스톱워치·자료 요약·오답 기록 등 인증 방식을 구분했습니다. 프론트엔드는 FSD를 참고해 도메인별 책임을 나누고, 팀의 AI Agent 작업 규칙도 함께 정리했습니다.",
      outcome:
        "전체 페이지 UI와 프론트엔드 구조를 구축했습니다. 학습·목표 달성·단권화 도메인의 핵심 기능과 API 연동을 순차적으로 진행하고 있으며, 정량적인 학습 성과는 서비스 검증 이후 확인할 예정입니다.",
      highlights: [
        {
          title: "Learning Journey",
          description:
            "목표 설정부터 완료까지 단계를 구분하고 반복 입력을 줄이는 학습 흐름을 설계했습니다.",
        },
        {
          title: "AI Agent Workflow",
          description:
            "팀의 코드 스타일과 구조를 통일하도록 AGENTS.md와 Skill, Hook 기반 규칙을 구성했습니다.",
        },
        {
          title: "Domain Architecture",
          description:
            "학습, 목표 달성, 단권화 기능을 기준으로 FSD 기반 책임을 분리했습니다.",
        },
      ],
      retrospective:
        "사용자의 학습 행동을 작은 단계로 나누는 UX와 팀의 개발 규칙은 함께 설계되어야 한다는 점을 배웠습니다. 화면을 빠르게 만드는 것뿐 아니라, 협업자가 같은 기준으로 기능을 확장할 수 있는 구조와 개발 환경을 만드는 데 집중했습니다.",
      flow: [
        {
          title: "학습 목표 설정",
          description:
            "학습 기간, 요일, 목표를 정해 사용자가 자신만의 학습 기준을 먼저 만들 수 있도록 설계했습니다.",
        },
        {
          title: "날짜별 계획 생성",
          description:
            "입력한 조건을 바탕으로 날짜별 학습 계획을 생성해 계획을 세우는 반복 작업을 줄였습니다.",
        },
        {
          title: "학습 인증과 기록",
          description:
            "스톱워치, 자료 요약, 오답 기록처럼 학습 유형에 맞는 인증 방법을 제공하도록 흐름을 나눴습니다.",
        },
        {
          title: "AI 복습과 완료",
          description:
            "학습 내용을 AI로 요약하고 확인 퀴즈를 풀며, 학습 목표 달성까지 이어지는 복습 경험을 구성했습니다.",
        },
      ],
      screens: [
        {
          title: "목표 및 학습 계획 설정",
          description:
            "목표, 기간, 요일을 입력해 날짜별 계획을 만드는 화면을 보여 줄 이미지 영역입니다.",
        },
        {
          title: "오늘의 학습과 인증",
          description:
            "오늘 해야 할 학습을 확인하고 유형별로 기록하는 경험을 보여 줄 이미지 영역입니다.",
        },
        {
          title: "AI 요약과 확인 퀴즈",
          description:
            "학습 자료 요약과 퀴즈 기반 복습 기능을 보여 줄 이미지 영역입니다.",
        },
      ],
      links: [],
    },
    {
      slug: "laviebel-schedule-manager",
      title: "라비에벨 스케줄 관리",
      eyebrow: "2026.05 - 2026.08",
      summary:
        "웨딩홀 근무자의 일정 조율과 급여 정산을 한곳에서 관리하도록 만든 스케줄 관리 웹 서비스입니다.",
      purpose:
        "웨딩홀 아르바이트 현장에서 카카오톡과 메모장에 흩어진 일정 때문에 매주 근무를 조율하고 급여를 정산하는 데 시간이 오래 걸리는 문제를 직접 경험했습니다. 일정 공지부터 신청, 배정, 확정, 급여 확인까지의 과정을 하나의 서비스로 연결해 관리자의 반복 업무와 근무자의 확인 부담을 줄이고자 했습니다.",
      role: [
        "서비스 기획, 프론트엔드와 백엔드 개발, 운영 전반 담당",
        "일정 공지·신청·배정·확정 사용자 흐름 설계 및 구현",
        "확정 근무시간과 수당을 반영하는 주간·월간 급여 자동 계산 로직 구현",
        "Supabase 기반 전용 가입 코드 발급·사용 횟수·활성 상태 관리 구조 설계",
      ],
      stack: [
        "Next.js(App Router)",
        "TypeScript",
        "Supabase",
        "vanilla-extract",
        "zod",
      ],
      challenge:
        "매주 근무 가능 일정을 카카오톡에서 조율하면 공지와 신청 내용을 다시 정리하고, 배정 결과를 확인시키는 과정이 반복됩니다. 직원별 시급과 추가 수당도 수기로 계산해 지급액을 확인하는 데 시간이 들고 오차가 발생할 여지가 있었습니다. 외부 사용자의 무단 가입을 막을 수 있는 접근 제어도 필요했습니다.",
      solution:
        "일정 공지 → 근무 신청 → 관리자 배정 → 근무 확정의 흐름으로 업무 과정을 재설계했습니다. 확정된 근무시간을 기준으로 시급과 추가 수당을 반영하는 주간·월간 급여 자동 계산 로직을 구현했고, Supabase에서 가입 코드별 사용 가능 횟수와 활성 상태를 관리하도록 구성했습니다. 코드가 소진되면 관리자가 새 코드를 발급하거나 갱신할 수 있어 구성원만 서비스에 참여할 수 있습니다.",
      outcome:
        "매주 스케줄 작성에 들던 시간을 평균 2시간에서 30분으로 단축했습니다. 확정 근무시간을 기준으로 급여를 계산해 수기 계산 과정의 오차 가능성을 줄였고, 전용 가입 코드 관리로 코드 재사용과 비인가 가입을 제한했습니다.",
      highlights: [
        {
          title: "Schedule Workflow",
          description:
            "공지, 신청, 배정, 확정 단계를 분리해 분산된 일정 조율 과정을 하나의 업무 흐름으로 만들었습니다.",
        },
        {
          title: "Payroll Automation",
          description:
            "확정 근무시간과 직원별 시급, 추가 수당을 반영해 주간·월간 지급액을 자동으로 계산합니다.",
        },
        {
          title: "Invite Code Control",
          description:
            "Supabase에서 가입 코드의 사용 횟수와 활성 상태를 관리해 인가된 구성원의 가입만 허용합니다.",
        },
      ],
      retrospective:
        "가까운 현장의 불편을 직접 관찰하면 기능의 우선순위와 사용자가 정말 확인하고 싶은 정보가 선명해진다는 점을 배웠습니다. 앞으로는 실제 운영 데이터와 사용자 피드백을 바탕으로 일정 충돌 안내, 급여 내역 확인 경험, 관리자 작업 흐름을 더 정교하게 다듬고 싶습니다.",
      flow: [
        {
          title: "일정 공지 확인",
          description:
            "관리자가 등록한 근무 일정과 필요한 인원을 확인하고, 근무자가 참여 가능한 날짜를 빠르게 파악합니다.",
        },
        {
          title: "근무 신청과 배정",
          description:
            "근무자는 가능한 일정을 신청하고, 관리자는 신청 현황을 바탕으로 인원을 배정합니다.",
        },
        {
          title: "근무 확정과 기록",
          description:
            "배정 결과와 확정 근무시간을 기준으로 주간 근무 기록을 관리할 수 있도록 구성했습니다.",
        },
        {
          title: "급여 자동 확인",
          description:
            "확정된 근무시간, 시급, 추가 수당을 반영해 근무자와 관리자가 지급액을 함께 확인합니다.",
        },
      ],
      screens: [
        {
          title: "월간 일정 공지와 신청",
          description:
            "근무 가능 일정을 확인하고 신청하는 화면을 보여 줄 이미지 영역입니다.",
        },
        {
          title: "관리자 배정과 확정",
          description:
            "신청 현황을 바탕으로 인원을 배정하고 근무를 확정하는 화면을 보여 줄 이미지 영역입니다.",
        },
        {
          title: "급여 내역 확인",
          description:
            "확정 근무시간과 수당을 반영한 주간·월간 급여 내역을 보여 줄 이미지 영역입니다.",
        },
      ],
      links: [],
    },
  ] satisfies Project[],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolio.projects.find(project => project.slug === slug);
}
