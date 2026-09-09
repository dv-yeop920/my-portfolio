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
  problem: string;
  decision: string;
  implementation?: string;
  outcome: string;
  evidence?: ProjectEvidence[];
  beforeAfter?: {
    before: ProjectEvidence;
    after: ProjectEvidence;
  };
};

export type DecisionStory = {
  problem: string;
  decision: string;
  implementation: string;
  result: string;
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

export type ProjectEvidence = {
  title: string;
  description: string;
  src?: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  status?: string;
  overviewOnly?: boolean;
  nextPlan?: {
    title: string;
    description: string;
  };
  summary: string;
  purpose: string;
  team: string;
  contribution: string;
  role: string[];
  architecture?: { src: string; alt: string; width: number; height: number };
  architectureDescription?: string;
  architectureDecisions?: { title: string; description: string }[];
  architectureStory?: DecisionStory;
  structure?: {
    title: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    description: string;
    points: string[];
  };
  structureStory?: DecisionStory;
  stack: string[];
  highlights: TechnicalHighlight[];
  highlightsEyebrow?: string;
  highlightsTitle?: string;
  highlightLabels?: {
    problem: string;
    decision: string;
    implementation: string;
    outcome: string;
  };
  retrospective: string;
  retrospectiveTitle?: string;
  problems?: ProjectFlowStep[];
  flow: ProjectFlowStep[];
  flowTitle?: string;
  flowDescriptionLabel?: string;
  flowSolutionLabel?: string;
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
          "4인 스타트업에서 약 9개월간 **청약 자격 검증 서비스의 기획 일부와 프론트엔드 개발**을 담당했습니다. 공고 탐색 → 자격 검증 → 검증 결과 플로우를 실제 서비스로 구현했고 출시 후 2주간 **누적 방문자 1,000명**을 기록했습니다.",
      },
      {
        title: "실제 문제를 서비스로 해결",
        description:
          "웨딩홀 근무에서 직접 겪은 **일정 관리와 급여 정산의 불편**을 해결하기 위해 스케줄 및 급여 관리 웹 서비스를 개발하고 운영하고 있습니다. 신청부터 배정, 확정, 급여 확인까지 흐름을 연결해 **스케줄 작성과 급여 계산에 드는 비효율적인 시간을** 개선했습니다.",
      },
      {
        title: "AI 활용",
        description:
          "MIXTI에서 **Harness Engineering 기반 AI 개발 환경**을 구성하고 조사 → 계획 → 승인 → 구현 → 리뷰 단계로 역할을 분리해 AI 기반 개발의 안정성과 검증 가능성을 확보하며 개발 및 운영하고 있습니다. **GA4 기준 활성 사용자 100명 이상**을 기록하고 있으며 GA4와 Vercel Speed Insights를 바탕으로 사용자 트래픽과 성능 병목을 측정하고 개선하며 사용자 경험을 높이고 있습니다.",
      },
      {
        title: "요구사항과 아키텍처",
        description:
          "기능을 만들기 전에 **사용자 요구 사항, 데이터 흐름, 예외 처리, 확장성**을 먼저 고려합니다. 그 기준으로 컴포넌트와 로직의 역할을 나누고 기능이 늘어나거나 요구사항이 바뀌어도 **대응하기 쉬운 구조**를 만들기 위해 고민합니다.",
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
      eyebrow: "Freelancer\n2024.06 - 2025.02",
      summary:
        "복잡한 청약 공고를 직관적으로 탐색하고 자격 조건을 쉽게 검증할 수 있도록 만든 웹 서비스입니다.",
      purpose:
        "청약 공고는 정보가 흩어져 있고 **자격 조건도 복잡해** 사용자가 자신에게 맞는 공고인지 빠르게 판단하기 어려웠습니다. 이 문제를 해결하기 위해" +
        " **4인 스타트업에서 서비스 기획과 프론트엔드 개발을 함께 담당**하며 복잡한 청약 정보를 사용자가 쉽게 탐색하고 자격 여부를 확인할 수 있는 서비스 흐름을 설계하고 구현했습니다.",
      team: "4인 팀 프로젝트",
      contribution: "프론트엔드 개발 / 기획 참여",
      role: [
        "**AWS S3와 CloudFront 기반 이미지 CDN** 구축",
        "**Server Components, metadata, semantic HTML, next/image**를 활용한 SEO 개선",
        "**PM2 클러스터 모드, 자동 재시작, 로그 추적**을 구성해 운영 환경 구축",
        "**공고 탐색 → 자격 검증 → 검증 결과 확인** 흐름 및 아키텍처 설계",
      ],
      architecture: {
        src: "/projects/newzipsa/newzipsa-architecture.png",
        alt: "새집사 서비스 아키텍처",
        width: 1448,
        height: 1086,
      },
      structure: {
        title: "FSD 기반 폴더 구조",
        src: "/projects/newzipsa/newzipsa-folder.png",
        alt: "새집사 FSD 기반 프론트엔드 폴더 구조",
        width: 1024,
        height: 1536,
        description:
          "단순히 기능별로 묶는 대신 **라우팅, 화면 조합, 사용자의 액션, 도메인 데이터, 공통 코드의 책임**을 분리했습니다. 특정 도메인이나 기능을 변경해도 다른 영역의 영향을 최소화하고 화면과 기능이 늘어날 때 구조를 유지하기 위해 FSD를 적용했습니다.",
        points: [
          "**app**: 로그인 전 / 후 서비스 영역을 라우트그룹으로 나누고 앱 전역 provider와 페이지 URL을 관리했습니다.",
          "**views**: widgets, features, entities, shared의 UI를 조합한 **페이지 단위**입니다.",
          "**widgets**: bottomSheet, menu처럼 여러 요소가 결합된 큰 단위의 UI를 관리했습니다.",
          "**features**: 공고 검색, 필터, 정렬, 자격 정보 입력 / 검증처럼 사용자의 액션**(등록, 수정, 삭제)**을 담당하는 로직과 UI를 관리했습니다.",
          "**entities**: 청약 공고 상세와 자격, 순위, 가점 결과처럼 **데이터 조회**를 하는 로직과 UI를 관리했습니다.",
          "**shared**: 공통 UI, API, 설정 등 도메인과 무관한 **재사용 기반**으로 관리했습니다.",
        ],
      },
      stack: [
        "Next.js(App Router)",
        "TypeScript",
        "FSD 아키텍처",
        "AWS S3",
        "CloudFront",
        "next/image",
        "PM2",
      ],
      highlights: [
        {
          title: "이미지 최적화",
          problem:
            "온보딩 페이지 랜딩 과정에서 이미지가 많아 **초기 요청량과 첫 화면 로딩 부담**이 커졌습니다.",
          decision:
            "첫 화면에 꼭 필요한 이미지만 먼저 랜더링하고 나머지 이미지는 화면 진입 시점까지 지연하기로 했습니다. **S3 / CloudFront 기반 CDN**을 구축 하고 **WebP / SVG 변환과 next/image의 Lazy Loading**을 적용했습니다.",
          outcome:
            "초기 요청량을 줄여 **초기 이미지 평균 로딩 시간을 약 30% 단축**했습니다.",
        },
        {
          title: "Next.js 기반 SEO 개선",
          problem:
            "공고와 자격 확인 페이지가 검색 엔진에 안정적으로 노출될 수 있도록 기본 구조를 미리 갖출 필요가 있었습니다.",
          decision:
            "**App Router Server Components**를 중심으로 렌더링하고 페이지별 **metadata, semantic HTML, next/image**를 적용했습니다.",
          outcome:
            "공고와 자격 확인 페이지의 콘텐츠 구조와 메타 정보를 갖춰 **검색 엔진이 읽기 쉬운 페이지 기반**을 만들었습니다.",
        },
        {
          title: "PM2 기반 운영 환경 구성",
          problem:
            "예기치 않은 프로세스 중단에도 서비스를 안정적으로 운영하고 운영 이슈를 빠르게 확인할 수 있는 환경을 미리 준비할 필요가 있었습니다.",
          decision:
            "운영 상황에 대비해 프로세스를 자동으로 복구하고 상태를 추적할 수 있는 관리 방식을 적용하기로 했습니다. **PM2 Cluster Mode, Auto Restart, 로그 추적**을 구성해 프로세스 상태와 장애 로그를 관리했습니다.",
          outcome:
            "장애 발생 시 **프로세스를 자동 복구**하고 운영 이슈를 빠르게 확인할 수 있는 환경을 만들었습니다.",
        },
      ],
      retrospective:
        "복잡한 도메인일수록 **사용자가 어떤 순서로 정보를 확인하고 판단하는지** 먼저 정리하는 과정이 중요하다는 점을 배웠습니다. 기획 참여부터 화면 설계, API 연동, 출시와 운영까지 경험하며 프론트엔드 개발이 하나의 기능 구현이 아니라 프로덕트가 만들어지고 사용자에게 전달되는 전체 과정과 연결되어 있다는 점을 이해하게 됐습니다. 또한 **이미지 최적화, SEO, PM2 기반 운영 환경**을 직접 구성하면서 성능과 운영 안정성까지 사용자 경험의 일부로 바라보는 기준을 만들었습니다. 요구사항과 데이터 흐름, 예외 상황을 문서로 정리하는 습관도 들이며 구현 전에 구조를 명확히 하고 변경 과정에서 발생하는 재작업을 줄이는 방식으로 개발하게 됐습니다.",
      flow: [
        {
          title: "온보딩",
          description: "서비스 소개 / 자격 확인 CTA / 온보딩 이미지 제공",
          solution:
            "복잡한 청약 제도를 처음부터 설명하기보다 **‘내 자격 알아보기’ CTA**에 행동을 집중해 사용자가 바로 자격 확인을 시작할 수 있도록 구성했습니다. 초기 랜딩 속도를 확인하며 병목이 된 이미지 전달 방식을 **S3 / CloudFront CDN**으로 바꾸고 **WebP / SVG와 next/image의 lazy loading**을 적용해 초기 로딩 부담을 줄였습니다. 검색 유입을 고려해 페이지별 **metadata와 semantic HTML, Server Components**를 활용한 SEO 기본 구조도 함께 개선했습니다.",
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
            "전국 공고를 모두 보여주기보다 **사용자의 관심 지역을 먼저 받아 탐색 범위를 좁히는 방식**을 선택했습니다. 지역별 모집 공고 수를 함께 제공하고 선택 지역을 **최대 3개로 제한**해 필요한 지역의 공고에 집중할 수 있도록 구성했습니다.",
          images: [
            {
              src: "/projects/newzipsa/region-selection.png",
              alt: "관심 지역을 선택하는 화면",
            },
          ],
        },
        {
          title: "공고 탐색",
          description: "공고 필터링 / 게시물 조회 / 게시물 등록 상태 표시",
          solution:
            "긴 공고문을 하나씩 열어보는 부담을 줄이기 위해 **비교에 필요한 핵심 정보**를 리스트에 먼저 노출했습니다. 여러 공고를 빠르게 비교한 뒤 필요한 공고만 상세하게 확인할 수 있도록 구성했습니다.",
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
            "공고 핵심 정보 조회 / 분양가, 평당가 전환 / 기본, 분양, 일정 탭 조회 / 일정 D-Day 표시",
          solution:
            "긴 공고문에서 필요한 정보를 빠르게 찾을 수 있도록 **가격, 세대수, 면적 등 핵심 정보**는 상단에 우선 배치하고 상세 내용은 **기본정보 / 분양정보 / 분양일정** 탭으로 분리했습니다. 접수 일정의 날짜 데이터는 **date-fns로 계산해 D-Day 상태값으로 변환**하고 Chip 형태로 시각화하여 날짜를 직접 계산하지 않아도 마감까지 남은 기간을 바로 확인할 수 있도록 구현했습니다.",
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
            "법률 용어 중심의 복잡한 조건을 **일상적인 문장과 선택지**로 바꿔 사용자가 자신의 상황을 기준으로 쉽게 답할 수 있게 했습니다. 단계별 입력값은 **Zustand 전역 상태로 관리**해 페이지 이동 시에도 값을 유지하고 각 단계와 최종 확인 화면이 동일한 상태를 참조하도록 구성했습니다. 이를 통해 단계별 폼의 상태 전달을 단순화하고 수정 흐름도 유지했습니다.",
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
            "추가 설명이 필요한 항목은 현재 질문 흐름을 벗어나지 않고 **바텀시트에서 바로 확인**할 수 있도록 구성했습니다. 반복되는 안내 UI는 **공통 컴포넌트로 분리**해 질문별 내용만 다르게 사용할 수 있도록 관리하고 중복 구현을 줄이면서 일관된 안내 경험을 유지했습니다.",
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
            "거주지, 이름, 번호, 청약통장 정보 입력 / 필수 약관 동의 / 간편 인증 / 서류 발급 API 연동",
          solution:
            "자격 확인 과정이 복잡해지지 않도록 **중요 정보 입력 → 약관 동의 → 서류 발급 API 호출** 순서로 플로우를 구성했습니다. 입력 내용을 토대로 사용자가 발급 받아야 할 서류 목록을 불러오고 사용자가 직접 서류를 발급하거나 별도로 제출하지 않아도 **필요한 서류를 불러올 수 있도록** 해 절차를 줄였습니다.",
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
            "발급받은 서류를 분석 API로 전달해 **청약 지원 자격 여부를 판정**하고 결과를 충족·불충족 조건으로 나눠 사용자가 어떤 점을 보완해야 하는지 확인할 수 있도록 구성했습니다. 또한 신청 가능한 날짜에 맞춰 알림 신청 여부를 받아 알림을 받을 수 있게 해 청약 마감 일자를 인지할 수 있도록 했습니다.",
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
      slug: "laviebel-schedule-manager",
      title: "라비에벨 스케줄 관리",
      eyebrow: "2026.06 - 2026.08",
      summary:
        "웨딩홀 근무자의 일정 조율과 급여 정산을 한곳에서 관리하도록 만든 스케줄 관리 웹 서비스입니다.",
      nextPlan: {
        title: "Next",
        description:
          "관리자가 공지를 등록하거나 스케줄을 확정할 때 그리고 출근 일정이 다가올 때 근무자에게 알림을 보낼 수 있도록 **웹 푸시 알림 기능을 학습해 적용할 예정입니다.**",
      },
      purpose:
        "웨딩홀 근무에서 카카오톡으로 받은 신청 내용을 메모장에 옮겨 정리하고 근무 가능 날짜와 이전 포지션 배정 기록을 하나씩 확인해 매주 스케줄을 작성했으며 급여도 직접 계산한 뒤 지급액에 차이가 생기면 다시 계산해야 했습니다. 이를 해결하기 위해 **일정 공지 → 신청 → 배정 → 확정 → 급여 확인** 과정을 하나의 서비스로 연결하고 날짜별 신청 현황과 배정 정보를 한곳에서 관리할 수 있도록 업무 흐름을 재설계했습니다.",
      team: "1인 개인 프로젝트",
      contribution: "기획 / 프론트엔드 / 백엔드 / 운영",
      role: [
        "서비스 기획 / 프론트엔드 / 백엔드 개발 / 운영 담당",
        "**일정 공지 → 신청 → 배정 → 확정**으로 이어지는 사용자 흐름 설계 및 구현",
        "**확정 근무시간 / 시급 / 추가 수당**을 반영한 주간·월간 급여 자동 계산 로직 구현",
        "**Supabase 기반 전용 가입 코드**의 발급 / 사용 횟수 / 활성 상태 관리 구조 설계 및 구현",
      ],
      architecture: {
        src: "/projects/laviebel/lavi-architecture-v2.png",
        alt: "라비에벨 스케줄 관리 서비스 아키텍처",
        width: 1672,
        height: 941,
      },
      structure: {
        title: "폴더 구조",
        src: "/projects/laviebel/lavi-folder-20260818.png",
        alt: "라비에벨 프론트엔드 폴더 구조",
        width: 1446,
        height: 1087,
        description:
          "도메인 마다 UI, 상태, 입력 검증, 비즈니스 로직, API 요청을 따로 관리하며 응집도를 높이기 위해 **features 중심으로 구조를 구성**하고 하위 폴더에 나머지 폴더와 파일들을 구성했습니다.",
        points: [
          "**app**: 라우팅 그룹으로 admin, woker, auth를 나눠서 URL을 관리 합니다.",
          "**features**: 업무 단위로 화면과 로직을 묶어 변경 범위가 해당 기능 안에 머물도록 구성했습니다.",
          "**view**: 페이지를 구성하는 UI를 관리합니다.",
          "**schema**: Zod 기반 입력값 스키마와 검증 규칙을 관리합니다.",
          "**model**: 비즈니스 규칙과 화면에 필요한 데이터 가공 로직을 관리합니다.",
          "**api**: API 요청과 응답 처리 로직을 관리해 화면과 데이터 통신 책임을 분리했습니다.",
          "**shared**: 공통 UI, API, 설정 등 도메인과 무관한 재사용 기반으로 관리합니다.",
          "**supabase**: DB 마이그레이션 RLS RPC와 데이터베이스 테스트를 관리합니다.",
          "**docs**: 요구사항 사용자 흐름 아키텍처 결정과 도메인 규칙을 문서화하고 관리합니다.",
        ],
      },
      stack: [
        "Next.js(App Router)",
        "TypeScript",
        "Supabase",
        "vanilla-extract",
        "zod",
        "Harness",
        "Claude Code",
      ],
      highlights: [
        {
          title: "AI 기반 개발 프로세스 설계",
          problem:
            "AI 활용 시 구현 범위가 넓어지거나 프로젝트 의도와 다른 결과가 나오면 매번 수정 하느라 컨텍스트 비용이 많이 들어갔습니다.",
          decision:
            "AI의 결과를 그대로 반영하지 않고 조사, 계획, 구현, 리뷰 단계마다 범위와 결과를 검토하기로 했습니다. Harness Engineering 기반으로 **규칙과 작업 범위를 먼저 정의**하고 **조사 → 계획 → 승인 → 구현 → 리뷰 순으로 작업할 수 있게 Agent, skill, hook을 구성하고 역할**을 분리했습니다.",
          outcome:
            "기획 의도와 아키텍처를 단계별로 검토하며 **구현 범위 이탈을 방지할 수 있었고 컨텍스트 비용**을 줄였습니다.",
        },
        {
          title: "MCP 기반 개발 및 배포 환경 연동",
          problem:
            "코드 변경 이후 데이터 구조와 화면 동작, 배포 상태를 각각 다른 도구에서 확인하면 작업 흐름이 자주 끊기고 확인 과정도 반복됐습니다.",
          decision:
            "Vercel, GitHub, Supabase, Playwright MCP를 작업 환경에 연결했습니다. GitHub에서 변경 이력과 코드 맥락을 확인하고 Supabase에서 스키마와 데이터 상태를 조회했습니다. Playwright로 주요 화면 동작을 점검한 뒤 Vercel에서 배포 상태와 로그를 확인하도록 개발 흐름을 구성했습니다.",
          outcome:
            "구현부터 화면 검증과 배포 확인까지 필요한 정보를 한 작업 흐름에서 확인해 **반복 확인 시간과 도구 전환 비용**을 줄였습니다.",
        },
        {
          title: "Zod 기반 입력 데이터 검증",
          problem:
            "회원가입, 일정, 급여 입력에 잘못된 값이 들어가면 이후 배정과 정산 로직까지 영향을 받을 수 있었습니다.",
          decision:
            "입력 오류는 저장 이후가 아니라 화면에서 처리하기 전에 차단하고 기능마다 검증 기준을 독립적으로 관리하기로 했습니다. 기능별로 **Zod 스키마를 분리**해 입력 조건과 예외를 정의하고 데이터를 처리하기 전에 스키마 기준으로 검증했습니다.",
          outcome:
            "유효하지 않은 값이 이후 로직으로 전달되는 경우를 차단 하여 안정성이 증가 했습니다",
        },
      ],
      retrospective:
        "실제 사용자의 요구사항을 기능으로 옮기는 과정에서 **화면 구현 전에 요구사항과 예외 상황을 정리하고 데이터 흐름과 상태 변화, 컴포넌트의 책임을 설계하는 과정**을 더 깊게 경험했습니다. 사용자와 관리자처럼 역할이 다른 흐름을 하나의 시스템으로 연결하며 변경과 확장을 고려해 구조를 나누는 등 **프론트엔드에서도 시스템 디자인 관점이 중요하다는 기준**을 만들었습니다.\n\nAI 개발에서는 **작업 규칙과 범위를 먼저 정리하고 단계별로 검토하는 방식**을 익혔습니다. MCP를 연결해 필요한 도구와 컨텍스트를 활용하면서 **요구사항 분석부터 설계와 구현 검토까지 AI를 개발 과정에 연결하는 경험**을 쌓았습니다.",
      problems: [
        {
          title: "카카오톡과 메모장으로 관리하던 스케줄",
          description:
            "관리자가 채팅방에 일정을 공지하면 근무자가 메시지로 가능한 날짜를 답했고 날짜별 포지션과 배정 현황도 같은 대화에서 공유했습니다. 이후 신청 내역은 메모장으로 옮겨 출근 불가 날짜와 배정 정보를 직접 정리했습니다.",
          solution:
            "응답 형식과 작성 시점이 제각각이라 날짜별 신청자와 변경 사항을 다시 확인해야 했습니다. 일정이 바뀔 때마다 채팅과 메모를 함께 수정해야 했고 이전 배정 기록을 찾거나 근무시간과 수당을 기준으로 급여를 다시 계산하는 일도 반복됐습니다.",
          images: [
            {
              src: "/projects/laviebel/schedule-appli-kakao.png",
              alt: "카카오톡으로 근무 가능 날짜를 신청받는 화면",
            },
            {
              src: "/projects/laviebel/schdule-check-memo.png",
              alt: "메모장으로 근무 가능 날짜를 정리하는 화면",
            },
            {
              src: "/projects/laviebel/schedule-appli-kakao2.png",
              alt: "카카오톡으로 날짜별 포지션 배정을 공유하는 화면",
            },
          ],
        },
      ],
      flow: [
        {
          title: "회원가입",
          description:
            "가입 코드 입력 / 이메일 인증 / 근무자 정보 등록 / 유효성 검사",
          solution:
            "내부 구성원만 가입할 수 있도록 Supabase에 저장된 가입 코드를 확인한 뒤 이메일 인증과 정보 입력을 진행하도록 구성했습니다. 입력값은 저장 전에 검증해 유효한 코드와 정보가 확인된 경우에만 계정을 생성하도록 설계했습니다.",
          images: [
            {
              src: "/projects/laviebel/signup-verify.png",
              alt: "라비에벨 회원가입 유효성 검사",
            },
            {
              src: "/projects/laviebel/signup.png",
              alt: "라비에벨 회원가입 정보 입력",
            },
            {
              src: "/projects/laviebel/signup-email.PNG",
              alt: "라비에벨 이메일 확인",
            },
          ],
        },
        {
          title: "로그인",
          description: "이메일 로그인 / 인증 상태 확인 / 역할별 화면 이동",
          solution:
            "회원과 관리자가 같은 진입 화면을 사용하되 인증이 완료되면 역할에 맞는 업무 화면으로 이동하도록 구성했습니다. 로그인 상태를 기준으로 권한이 필요한 화면의 접근 흐름을 분리했습니다.",
          images: [
            {
              src: "/projects/laviebel/login.PNG",
              alt: "라비에벨 로그인 화면",
            },
            {
              src: "/projects/laviebel/login-verify.PNG",
              alt: "라비에벨 로그인 인증 화면",
            },
          ],
        },
        {
          title: "대시보드 / 관리자, 근무자",
          description: "역할별 일정 현황 확인 / 필요한 업무로 바로 이동",
          solution:
            "로그인 후 관리자는 일정 운영에 필요한 현황을 확인하고 근무자는 자신의 근무 일정을 먼저 볼 수 있도록 역할별 첫 화면을 나눴습니다. 자주 사용하는 업무 화면으로 바로 이동할 수 있게 해 다음 행동을 빠르게 선택하도록 구성했습니다.",
          images: [
            {
              src: "/projects/laviebel/admin-dashboard.PNG",
              alt: "라비에벨 관리자의 대시보드 화면",
            },
            {
              src: "/projects/laviebel/worker-dashboard.PNG",
              alt: "라비에벨 근무자의 대시보드 화면",
            },
          ],
        },
        {
          title: "일정 생성 / 관리자",
          description: "스케줄 공지 / 신청 오픈과 마감 / 복수 날짜 등록",
          solution:
            "관리자가 신청 가능한 날짜를 직접 선택해 일정을 공지하고 신청 기간을 관리할 수 있도록 구성했습니다. 여러 날짜를 한 번에 등록하고 날짜별 상태를 확인할 수 있게 해 매주 반복되는 일정 생성 작업을 줄였습니다.",
          images: [
            {
              src: "/projects/laviebel/admin-schedule-calander.PNG",
              alt: "라비에벨 관리자의 근무 확정 화면",
            },
            {
              src: "/projects/laviebel/admin-schedule-appli.PNG",
              alt: "라비에벨 관리자의 근무자 배정 화면",
            },
          ],
        },
        {
          title: "일정 신청 / 근무자",
          description:
            "신청 가능 일정 조회 / 캘린더 날짜 선택 / 근무 신청 / 신청 상태 확인",
          solution:
            "근무 일정은 날짜 기준으로 확인하는 정보이기 때문에 신청 가능한 날짜를 캘린더에 표시해 한눈에 파악할 수 있도록 구성했습니다. 근무자는 원하는 날짜를 직접 선택해 신청하고 현재 상태까지 같은 흐름에서 확인할 수 있게 했습니다.",
          images: [
            {
              src: "/projects/laviebel/woker-schedule-calander.PNG",
              alt: "라비에벨 근무자의 일정 캘린더 화면",
            },
            {
              src: "/projects/laviebel/woker-schedule-appli.PNG",
              alt: "라비에벨 근무자의 일정 신청 화면",
            },
          ],
        },
        {
          title: "인원 배정 / 관리자",
          description:
            "날짜별 신청자 조회 / 포지션별 인원 배정 / 이전 배정 이력 확인 / 근무 확정, 수정",
          solution:
            "날짜별 신청자와 기존 배정 정보를 한 화면에서 확인하고 바로 포지션을 배정 및 수정할 수 있도록 구성했습니다. 흩어진 정보를 찾고 비교하던 과정을 줄이고 인원 배정과 확정을 날짜 단위로 이어지게 했습니다.",
          images: [
            {
              src: "/projects/laviebel/admin-schedule-create.png",
              alt: "라비에벨 관리자의 근무자 배정 화면",
            },

            {
              src: "/projects/laviebel/admin-schedule-create-list.PNG",
              alt: "라비에벨 관리자의 복수 일정 등록 화면",
            },
          ],
        },
        {
          title: "확정 일정 / 근무자",
          description: "확정 일정 / 근무시간 / 포지션 조회",
          solution:
            "확정된 근무일을 일정표에서 확인하고 날짜를 선택하면 근무시간과 포지션을 바로 확인할 수 있도록 구성했습니다. 월,주,일 로 필터링해서 볼 수 있고 전체 스케줄 같이 근무 하는 근무자들이 궁금하면 테이블 형태로 한눈에 파악할 수 있게 했습니다.",
          images: [
            {
              src: "/projects/laviebel/woker-schedule-create-list.PNG",
              alt: "라비에벨 근무자 일정 조회",
            },
            {
              src: "/projects/laviebel/common-schedule-table.png",
              alt: "라비에벨 근무자의 확정 일정 조회 화면",
            },
          ],
        },
        {
          title: "급여 관리 / 근무자",
          description: "확정 근무시간 기반 급여 계산 / 주, 월 급여 조회",
          solution:
            "확정된 근무 일정과 시급, 수당을 기준으로 급여를 자동 계산하고 주, 월 단위로 내역을 확인할 수 있게 했습니다. 수기 계산과 실제 지급액을 다시 대조하는 과정을 줄였습니다.",
          images: [
            {
              src: "/projects/laviebel/common-pay.PNG",
              alt: "라비에벨 근무자의 급여 조회 화면",
            },
          ],
        },
        {
          title: "가입 코드 관리 / 관리자",
          description: "가입 코드 발급 / 사용 횟수 관리",
          solution:
            "가입 코드를 운영 상황에 맞게 관리할 수 있도록 Supabase에 코드별 사용 가능 횟수와 활성 상태를 저장하는 구조를 설계했습니다. 관리자는 코드 상태를 조회하고 사용 횟수가 소진되면 신규 코드를 발급하거나 갱신할 수 있습니다.",
          images: [
            {
              src: "/projects/laviebel/admin-code.png",
              alt: "라비에벨 관리자의 가입 코드 설정 화면",
            },
          ],
        },
        {
          title: "공지 관리 / 관리자",
          description: "공지 등록 / 조회 / 수정 / 삭제",
          solution:
            "중요 공지 사항이 채팅 대화에 묻히지 않도록 관리자가 필요한 내용을 공지로 등록하고 근무자가 서비스 안에서 확인할 수 있게 했습니다.",
          images: [
            {
              src: "/projects/laviebel/admin-notifi.PNG",
              alt: "라비에벨 관리자의 공지 작성 화면",
            },
          ],
        },
        {
          title: "인원 관리 / 관리자",
          description: "근무자 조회 / 상세 조회 / 정보 수정",
          solution:
            "근무자의 리스트를 조회하고 포지션, 시급, 가능한 포지션 등 수정해야할 사항이 생기면 바로 수정할 수 있도록 했습니다.",
          images: [
            {
              src: "/projects/laviebel/admin-worker-list.png",
              alt: "라비에벨 관리자의 구성원 관리 화면",
            },

            {
              src: "/projects/laviebel/admin-worker-detail.png",
              alt: "라비에벨 관리자의 근무자 상세 화면",
            },
          ],
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
            "확정 근무시간과 수당을 반영한 주간, 월간 급여 내역을 보여 줄 이미지 영역입니다.",
        },
      ],
      links: [
        {
          label: "서비스 바로가기",
          href: "https://lavi-crew.vercel.app",
        },
      ],
    },
    {
      slug: "mixti-group-chemistry",
      title: "MIXTI",
      eyebrow: "2026.08 - 09",
      status: "운영 중",
      summary:
        "2~15명의 MBTI와 관계 유형을 바탕으로 그룹의 분위기와 역할 그리고 대화 흐름을 AI 리포트로 보여주는 웹 서비스입니다.",
      purpose:
        "인스타그램을 보다 보면 MBTI 콘텐츠는 한 가지 유형의 특징을 설명하거나 두 사람의 연애 궁합을 보여주는 경우가 대부분이었습니다. 그런데 친구들이나 팀원처럼 여러 명이 함께 있을 때 어떤 분위기와 조합이 만들어지는지 다루는 콘텐츠는 찾기 어려웠습니다. ‘여러 명이 모였을 때의 케미를 볼 수 있는 서비스는 없을까?’라는 생각에서 MIXTI를 시작했습니다.\n\n친구나 팀 또는 가족 중 관계 유형을 고르고 2~15명의 MBTI를 입력하면 **그룹의 전체 분위기와 각자의 역할 그리고 1:1 케미**를 AI 리포트로 보여줍니다. 결과를 읽으며 서로의 관계를 이야기해 볼 수 있으며 로그인한 사용자는 분석 결과를 저장해 나중에 다시 확인할 수 있습니다.",
      team: "1인 개인 프로젝트",
      contribution: "기획 / 프론트엔드 / AI 및 데이터 연동 / 성능 개선",
      role: [
        "한글 웹폰트를 **11.4MB에서 1.04MB로 경량화**하고 PPR / Suspense Streaming을 적용해 초기 렌더링 병목 개선",
        "**OpenAI Streaming과 SSE 기반 진행 상태 전달**을 구현하고 화면 이탈 시 stream을 중단하도록 요청 생명주기 관리",
        "Agent의 비의도적인 코드 수정을 줄이기 위해 **조사 → 계획 → 승인 → 구현 → 리뷰 절차** 적용",
        "**Prompt와 logging hook**으로 Agent 실행의 입력, 도구 호출, 결과를 추적하는 디버깅 환경 구성",
      ],
      architecture: {
        src: "/projects/mixti/architecture.png",
        alt: "MIXTI 서비스 아키텍처",
        width: 1536,
        height: 1024,
      },
      architectureDescription:
        "사용자 입력은 Next.js 서버를 거쳐 OpenAI로 전달하고, 결과는 검증한 뒤 Supabase에 저장합니다. API Key와 Prompt는 브라우저에 노출하지 않고 서버에서 관리합니다.",
      architectureDecisions: [
        {
          title: "Vercel",
          description:
            "Next.js App Router와 Route Handler를 별도 서버 없이 운영하고 Preview와 Production을 나누기 위해 사용했습니다.",
        },
        {
          title: "Supabase",
          description:
            "사용자 정보와 분석 결과를 저장하고 프론트엔드의 데이터 접근 구조를 단순하게 관리하기 위해 사용했습니다.",
        },
        {
          title: "OpenAI",
          description:
            "여러 구성원의 MBTI와 관계 유형을 단순한 규칙만으로 설명하기 어려워, 그룹의 분위기와 역할을 맥락에 맞는 리포트로 만들기 위해 사용했습니다.",
        },
      ],
      architectureStory: {
        problem:
          "AI 요청을 브라우저에서 직접 처리하면 API Key와 Prompt가 노출됩니다. 또 JSON 형식이 맞아도 멤버나 pair가 빠진 결과는 화면과 저장 단계에서 사용할 수 없었습니다.",
        decision:
          "Next.js Route Handler에서 요청을 먼저 확인하고 OpenAI Responses API와 Zod로 응답 구조를 검증하기로 했습니다. memberId와 pairId로 모든 결과가 빠짐없이 들어왔는지 다시 확인한 뒤 저장합니다.",
        implementation:
          "사용자 입력 → /api/analyze → 서버 확인 → OpenAI 분석 → 결과 검증과 SSE 전달 → Supabase 저장 또는 게스트 보관 → 결과 화면 순서로 연결했습니다. 2~15명과 본인 1명 같은 기본 조건을 통과하지 못하면 OpenAI를 호출하지 않으며, 분석 중 화면을 떠나면 요청을 중단합니다.",
        result:
          "잘못된 요청과 불완전한 결과를 화면에 보내지 않고, 로그인 결과와 게스트 결과를 같은 화면에서 보여줄 수 있게 됐습니다. 다만 평균 응답 시간이나 실제 비용, 모델별 품질은 아직 측정하지 않았습니다.",
      },
      structure: {
        title: "FSD 기반 폴더 구조",
        src: "/projects/mixti/folder.png",
        alt: "MIXTI FSD 기반 프론트엔드 폴더 구조",
        width: 1086,
        height: 1448,
        description:
          "라우팅과 API 진입점은 app에 두고 화면 조합부터 공통 기능까지 **FSD의 책임 단위로 나눴습니다.** AI 응답 형식이나 인증 흐름이 바뀌어도 화면 전체를 수정하지 않도록 사용자 행동과 비즈니스 데이터 그리고 공통 기능의 경계를 분리했습니다.",
        points: [
          "**app**: 홈 / 마이페이지 / 히스토리 / 테스트 흐름의 route와 layout 그리고 분석 Route Handler를 관리합니다.",
          "**views**: 홈과 분석 결과처럼 여러 하위 기능을 조합하는 페이지 단위 화면입니다.",
          "**widgets**: bottom navigation과 step header처럼 여러 요소가 결합된 큰 UI 영역입니다.",
          "**features**: 그룹과 멤버 입력 / 세션 관리 / 분석 결과 저장과 공유처럼 사용자 행동 단위의 로직과 UI를 관리합니다.",
          "**entities**: 분석 결과 schema와 요약 카드 / MBTI 상수와 선택 UI처럼 비즈니스 데이터를 표현합니다.",
          "**shared**: 공통 UI / Supabase client / query key / 데이터 정규화 / 세션 보존 같은 기반 코드를 관리합니다.",
        ],
      },
      structureStory: {
        problem:
          "기능이 늘면서 페이지 안에 UI와 상태 그리고 비즈니스 로직이 섞여 변경 범위를 예측하기 어려웠습니다.",
        decision:
          "Next.js App Router의 라우팅 경계와 FSD의 책임 단위를 나눠 각 영역이 필요한 기능만 조합하도록 했습니다.",
        implementation:
          "app은 route와 Route Handler, views와 widgets는 화면 조합, features는 사용자 행동, entities는 분석과 멤버 데이터, shared는 공통 기능을 담당합니다.",
        result:
          "분석 schema나 인증 흐름이 바뀌어도 관련 영역만 수정할 수 있게 됐습니다. 작은 기능까지 나누는 데는 설계 비용이 있어 변경 가능성이 큰 기능부터 적용했습니다.",
      },
      stack: [
        "Next.js(App Router)",
        "TypeScript",
        "React Query",
        "Zustand",
        "Supabase",
        "OpenAI Responses API",
        "Zod",
        "Vercel Speed Insights",
        "GA4",
      ],
      highlightsEyebrow: "Performance · FCP / LCP",
      highlightsTitle: "문제 해결",
      highlightLabels: {
        problem: "Problem · 어떤 문제가 있었는가",
        decision: "Decision · 왜 선택했는가",
        implementation: "Implementation · 어떻게 구성했는가",
        outcome: "Result · 무엇이 달라졌고 어떤 한계가 남았는가",
      },
      highlights: [
        {
          title: "초기 화면 렌더링 지연 해결",
          problem:
            "홈 페이지가 인증과 사용자 데이터를 기다린 뒤 전체 화면을 렌더링해 LCP가 늦었습니다. 큰 폰트와 중복 요청 그리고 2.5초 동안 화면을 가리는 Splash도 원인이었습니다.",
          decision:
            "공개 콘텐츠와 회원 전용 콘텐츠를 나누고 프로필과 최근 분석만 Suspense로 격리했습니다. 폰트는 WOFF2와 서브셋을 적용하고 URL과 preload 정책을 정리했습니다.",
          implementation:
            "PPR과 Suspense Streaming으로 정적 영역을 먼저 보여주고 사용자 데이터 영역만 나눠 렌더링했습니다.",
          outcome:
            "동일한 Lighthouse Mobile 조건에서 성능 점수는 68에서 88로, LCP는 5.0초에서 3.9초로 개선됐습니다. 한글 웹폰트는 11.4MB에서 1.04MB로 줄었고 Vercel Speed Insights의 P75 LCP 평균은 1.5초 이하로 유지하고 있습니다.",
          beforeAfter: {
            before: {
              title: "Before",
              description: "폰트와 초기 화면 렌더링 최적화 전 Lighthouse 측정 캡처입니다.",
              alt: "MIXTI 폰트 최적화 전 Lighthouse mobile 측정 결과",
            },
            after: {
              title: "After",
              description: "폰트와 초기 화면 렌더링 최적화 후 Lighthouse 측정 캡처입니다.",
              alt: "MIXTI 폰트 최적화 후 Lighthouse mobile 측정 결과",
            },
          },
        },
        {
          title: "페이지 전환과 서버 데이터 패칭",
          problem:
            "서버 props와 클라이언트 useQuery가 섞여 hydration mismatch가 발생했습니다. 결과 페이지도 인증과 데이터 요청이 끝날 때까지 전체 화면을 기다렸습니다.",
          decision:
            "queryOptions()로 요청 정보를 통합하고 서버 prefetch 결과를 클라이언트가 재사용하게 했습니다. 라우트별 Suspense와 loading UI로 정적 Shell을 먼저 보여줬습니다.",
          implementation:
            "dehydrate()와 HydrationBoundary로 서버 캐시를 복원하고 중복 fetch를 제거했습니다. 결과 route에 loading.tsx와 prefetch를 추가하고 불필요한 인증 확인을 줄였습니다.",
          outcome:
            "hydration mismatch와 초기 중복 fetch를 없앴습니다. LCP는 756ms에서 706ms로 50ms, 약 6.6% 개선됐고 정적 Shell 뒤에 데이터 영역을 보여줄 수 있게 됐습니다.",
        },
        {
          title: "OpenAI Responses API 기반 스트리밍 분석",
          problem:
            "AI 분석은 응답 시간이 길어 전체 응답을 기다리는 동안 사용자가 멈춘 화면으로 느낄 수 있었습니다. JSON 형식이 맞아도 멤버나 pair가 빠지는 문제도 있었습니다.",
          decision:
            "**OpenAI Responses API와 zodTextFormat()**으로 정해진 형식의 결과를 받고, memberId와 pairId로 모든 결과가 들어왔는지 다시 확인했습니다.",
          implementation:
            "입력을 확인한 뒤 정적 instructions와 동적 input을 나눠 OpenAI에 전달했습니다. Streaming 응답은 SSE로 진행 상태를 보내며 화면을 떠나면 stream을 중단합니다.",
          outcome:
            "사용자는 분석이 진행 중인지 확인할 수 있고 화면을 떠난 요청은 계속 유지되지 않습니다. 평균 응답 시간과 실제 비용은 아직 측정하지 않았습니다.",
        },
        {
          title: "Prompt 설계와 Agent 실행 추적",
          problem:
            "AI Agent를 그대로 사용하면 작업 범위를 벗어나거나 실패 원인을 다시 확인하기 어려웠습니다.",
          decision:
            "Prompt를 역할 / 입력 / 제약 / 결과 형식으로 나누고 Agent에는 **조사 → 계획 → 승인 → 구현 → 리뷰 절차**를 적용했습니다.",
          implementation:
            "Prompt와 logging hook으로 Agent 실행의 입력, 도구 호출, 결과를 기록해 구현 전 변경 내용을 검토할 수 있게 했습니다.",
          outcome:
            "비의도적인 코드 수정을 줄이고 동일 조건 재현과 오류 원인 분석이 가능한 디버깅 환경을 구성했습니다.",
        },
        {
          title: "GA4 기반 사용자 흐름 개선",
          problem:
            "배포 후 사용자가 어디에서 들어와 어느 화면까지 이동하는지 확인할 필요가 있었습니다.",
          decision:
            "GA4와 Vercel Speed Insights를 연결해 사용자 흐름과 실제 성능을 함께 확인했습니다.",
          implementation:
            "GA4에서 유입과 이동을 보고 Vercel Speed Insights에서 LCP를 확인했습니다. Lighthouse와 Production RUM은 측정 조건을 나눠 기록했습니다.",
          outcome:
            "GA4 기준 **활성 사용자 100명 이상**을 기록했고 사용자 흐름과 성능을 보며 개선하고 있습니다.",
        },
      ],
      retrospective:
        "MIXTI는 처음으로 외부 API를 직접 연결해 만든 서비스로 연동 과정에서 응답 지연과 오류뿐 아니라 AI가 예상과 다른 결과를 주는 상황까지 마주했고 이를 해결하기 위해 입력값과 결과를 검증하면서 외부 API를 안정적으로 사용하는 방법을 배웠습니다.\n\nAI는 서비스의 분석 결과를 만드는 데만 사용하지 않고 조사 → 계획 → 구현 → 리뷰로 이어지는 개발 과정에도 활용했으며 각 단계의 결과를 직접 확인하고 수정하면서 AI를 더 효율적이고 안전하게 활용하는 경험을 쌓았습니다.\n\n이후 직접 구매한 **mixti.io 도메인**을 연결해 배포했고 현재는 GA4와 Vercel Speed Insights를 통해 사용자 흐름과 성능을 살펴보며 서비스 운영에 필요한 기준을 하나씩 만들어가고 있습니다. 앞으로도 사용자 피드백과 데이터를 바탕으로 모바일 성능과 AI 응답의 안정성을 꾸준히 개선해 나갈 계획입니다.",
      flowTitle: "MVP 사용자 흐름",
      flowSolutionLabel: "상세 설명",
      flow: [
        {
          title: "홈 페이지",
          description: "서비스 소개 / 그룹 케미 분석 시작 CTA",
          solution:
            "서비스를 확인한 뒤 로그인 없이 분석을 시작할 수 있습니다.",
          images: [
            {
              src: "/projects/mixti/m-home.PNG",
              alt: "MIXTI 홈 화면",
            },
          ],
        },
        {
          title: "관계 유형과 구성원 입력",
          description:
            "친구 / 팀 / 가족 중 관계 유형을 고르고 2~15명의 nickname과 MBTI를 입력합니다.",
          solution:
            "관계 유형과 본인 여부를 포함하고, 구성원 수와 중복 입력을 먼저 확인합니다.",
          images: [
            {
              src: "/projects/mixti/m-group-type.PNG",
              alt: "MIXTI 관계 유형 선택 화면",
            },
            {
              src: "/projects/mixti/m-human2.PNG",
              alt: "MIXTI 멤버 정보 입력 화면",
            },
            {
              src: "/projects/mixti/m-human.PNG",
              alt: "MIXTI 멤버 MBTI 선택 화면",
            },
          ],
        },
        {
          title: "AI 분석 요청 및 진행 상태",
          description:
            "분석 시작 버튼을 누르면 검증된 그룹 데이터를 서버에서 OpenAI Responses API로 보냅니다.",
          solution:
            "분석 중에는 SSE로 진행 상태와 오류를 보여주고, 정해진 형식의 결과를 받습니다.",
          images: [
            {
              src: "/projects/mixti/m-analyze.PNG",
              alt: "MIXTI AI 분석 진행 화면",
            },
          ],
        },
        {
          title: "완전성 검증과 결과 표시",
          description:
            "전체 분위기와 구성원 역할 그리고 1:1 케미가 담긴 분석 리포트를 확인합니다.",
          solution:
            "멤버와 pair가 빠지거나 중복되면 결과를 보여주지 않습니다. 로그인 결과와 게스트 결과는 같은 화면에서 확인합니다.",
          images: [
            {
              src: "/projects/mixti/m-result.PNG",
              alt: "MIXTI 그룹 케미 결과 요약 화면",
            },
            {
              src: "/projects/mixti/m-result2.PNG",
              alt: "MIXTI 케미 지표와 그룹 분위기 화면",
            },
            {
              src: "/projects/mixti/m-result3.PNG",
              alt: "MIXTI 멤버 역할과 1:1 케미 화면",
            },
            {
              src: "/projects/mixti/m-result4.PNG",
              alt: "MIXTI 결과 저장과 공유 화면",
            },
          ],
        },
      ],
      screens: [],
      links: [
        {
          label: "서비스 바로가기",
          href: "https://mixti.io/",
        },
      ],
    },
  ] satisfies Project[],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolio.projects.find(project => project.slug === slug);
}
