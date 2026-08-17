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
  outcome: string;
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
  team: string;
  contribution: string;
  role: string[];
  architecture?: { src: string; alt: string; width: number; height: number };
  structure?: {
    title: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    description: string;
    points: string[];
  };
  stack: string[];
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
          "AI에게 바로 코드를 맡기기보다 **프로젝트 규칙과 작업 범위를 먼저 정의**하고 조사 → 계획 → 구현 → 리뷰 과정을 나눠 활용합니다. AGENTS.md와 Agent 역할을 구성해 **결과를 검토할 수 있는 형태**로 AI를 개발 과정에 적용하고 있습니다.",
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
        src: "/projects/laviebel/lavi-folder.png?v=20260818",
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
            "AI 활용 시 구현 범위가 넓어지거나 프로젝트 의도와 다른 결과가 나오면 수정 비용이 커질 수 있었습니다.",
          decision:
            "AI의 결과를 그대로 반영하지 않고 조사, 계획, 구현, 리뷰 단계마다 범위와 결과를 검토하기로 했습니다. Harness Engineering 기반으로 **규칙과 작업 범위를 먼저 정의**하고 **조사 → 계획 → 승인 → 구현 → 리뷰와 Agent 역할**을 분리했습니다.",
          outcome:
            "기획 의도와 아키텍처를 단계별로 검토하며 **구현 범위 이탈과 수정 비용**을 줄였습니다.",
        },
        {
          title: "Supabase 기반 데이터 흐름 설계",
          problem:
            "일정 신청, 배정, 확정, 급여가 분리되면 같은 근무 정보를 반복 입력하거나 정산 오류가 생길 수 있었습니다.",
          decision:
            "일정 정보가 한 번 입력되면 신청부터 급여까지 같은 데이터를 재사용하도록 관계형 흐름을 설계하기로 했습니다. **회원 → 일정 신청 → 인원 배정 → 근무 확정 → 급여 계산**이 이어지도록 Supabase DB 구조를 설계하고 확정 근무시간, 시급, 수당을 급여 계산에 연결했습니다.",
          outcome:
            "관리자와 근무자가 보는 일정 / 급여 정보를 **하나의 데이터 흐름**으로 연결해 중복 입력과 수기 대조를 줄였습니다.",
        },
        {
          title: "Zod 기반 입력 데이터 검증",
          problem:
            "회원가입, 일정, 급여 입력에 잘못된 값이 들어가면 이후 배정과 정산 로직까지 영향을 받을 수 있었습니다.",
          decision:
            "입력 오류는 저장 이후가 아니라 화면에서 처리하기 전에 차단하고 기능마다 검증 기준을 독립적으로 관리하기로 했습니다. 기능별로 **Zod 스키마를 분리**해 입력 조건과 예외를 정의하고 데이터를 처리하기 전에 스키마 기준으로 검증했습니다.",
          outcome:
            "유효하지 않은 값이 이후 로직으로 전달되는 경우를 줄이고 입력 조건을 기능별로 일관되게 관리했습니다.",
        },
      ],
      retrospective:
        "실제 사용자의 요구사항을 기능으로 옮기는 과정에서 **화면 구현 전에 요구사항과 예외 상황을 정리하고 데이터 흐름과 상태 변화, 컴포넌트의 책임을 설계하는 과정**을 더 깊게 경험했습니다. 사용자와 관리자처럼 역할이 다른 흐름을 하나의 시스템으로 연결하며 변경과 확장을 고려해 구조를 나누는 등 **프론트엔드에서도 시스템 디자인 관점이 중요하다는 기준**을 만들었습니다.\n\nAI 개발에서는 **작업 규칙과 범위를 먼저 정리하고 단계별로 검토하는 방식**을 익혔습니다. MCP를 연결해 필요한 도구와 컨텍스트를 활용하면서 **요구사항 분석부터 설계와 구현 검토까지 AI를 개발 과정에 연결하는 경험**을 쌓았습니다.",
      flow: [
        {
          title: "회원가입",
          description:
            "가입 코드 입력 / 계정 생성 / 근무자 정보 등록 / 유효성 검사",
          solution:
            "내부 구성원만 가입할 수 있도록 Supabase에 저장된 가입 코드를 입력해야 회원가입을 할 수 있도록 구성했습니다. 또한 잘못된 데이터가 저장되는 것을 방지하기 위해 이름, 연락처 등 **필수 입력값을 검증**해 유효한 코드와 정보가 확인된 경우에만 계정을 생성하도록 회원가입 흐름을 설계했습니다.",
          images: [
            {
              src: "/projects/laviebel/signup.png",
              alt: "라비에벨 가입 코드 입력 화면",
            },
            {
              src: "/projects/laviebel/signup2.png",
              alt: "라비에벨 근무자 정보 입력 화면",
            },
          ],
        },
        {
          title: "일정 생성 / 관리자",
          description: "스케줄 신청 오픈, 마감 / 날짜별 배정 날짜 조회",
          solution:
            "관리자가 신청 가능한 날짜를 직접 선택해 스케줄을 오픈하고 근무자에게 신청 가능한 일정을 명확하게 보여줄 수 있도록 흐름을 구성했습니다. 이후 날짜별로 배정된 인원을 조회, 수정할 수 있게 해 일정 생성부터 인원 배치와 변경 관리까지 날짜 단위로 이어지도록 페이지 구조를 설계했습니다.",
          images: [
            {
              src: "/projects/laviebel/schedule-create.png",
              alt: "라비에벨 관리자의 일정 등록 화면",
            },
            {
              src: "/projects/laviebel/schedule-create-dates.png",
              alt: "라비에벨 관리자의 복수 일정 등록 화면",
            },
          ],
        },
        {
          title: "일정 신청 / 근무자",
          description:
            "신청 가능 일정 조회 / 캘린더 날짜 선택 / 근무 신청 / 신청 상태 확인",
          solution:
            "근무 일정은 날짜 기준으로 확인하는 정보이기 때문에 신청 가능한 날짜를 관리자 일정 페이지와 동일하게 캘린더에 표시해 한눈에 파악할 수 있도록 구성했습니다. 근무자는 원하는 날짜를 직접 선택해 신청하고 현재 상태까지 같은 흐름에서 확인할 수 있게 해 일정 확인부터 신청까지의 과정을 직관적으로 연결했습니다.",
          images: [
            {
              src: "/projects/laviebel/schedule-application.png",
              alt: "라비에벨 근무자의 일정 신청 화면",
            },
            {
              src: "/projects/laviebel/application-status.png",
              alt: "라비에벨 근무자의 일정 신청 상태 화면",
            },
          ],
        },
        {
          title: "인원 배정 / 관리자",
          description:
            "날짜별 신청자 조회 / 포지션별 인원 배정 / 이전 배정 이력 확인 / 근무 확정, 수정",
          solution:
            "기존에는 카카오톡 신청 내용을 메모장에 옮겨 날짜별 근무 가능 인원을 다시 정리하고 이전 스케줄을 찾아보며 포지션 배치까지 직접 맞춰야 했습니다. 이를 **날짜별 신청자와 기존 배정 정보를 한 화면에서 확인**하고 바로 포지션을 배정 및 수정할 수 있도록 구성해 흩어진 정보를 찾고 비교하는 과정을 줄였습니다.",
          images: [
            {
              src: "/projects/laviebel/staff-assignment.png",
              alt: "라비에벨 관리자의 근무자 배정 화면",
            },
            {
              src: "/projects/laviebel/assignment-confirmation.png",
              alt: "라비에벨 관리자의 근무 확정 화면",
            },
          ],
        },
        {
          title: "확정 일정 / 근무자",
          description: "확정 일정 / 근무시간 / 포지션 조회",
          solution:
            "기존에는 확정된 스케줄을 확인하려면 카카오톡 대화를 다시 찾거나 개인 메모장에 일정을 따로 옮겨 관리해야 했습니다. **확정된 근무일만 캘린더에 모아 보여주고** 날짜를 선택하면 근무시간과 포지션을 바로 확인할 수 있도록 구성해 자신의 출근 일정을 한눈에 파악할 수 있게 했습니다.",
          images: [
            {
              src: "/projects/laviebel/confirmed-schedule.png",
              alt: "라비에벨 근무자의 확정 일정 조회 화면",
            },
          ],
        },
        {
          title: "급여 관리 / 근무자",
          description: "확정 근무시간 기반 급여 계산 / 주, 월 급여 조회",
          solution:
            "기존에는 근무시간과 수당을 직접 계산해 급여를 확인했고 실제 지급액과 차이가 생기면 다시 계산해야 했습니다. **확정된 근무 일정과 시급, 수당을 기준으로 급여를 자동 계산**하고 주, 월 단위로 내역을 확인할 수 있게 해 수기 계산과 금액을 다시 대조하는 과정을 줄였습니다.",
          images: [
            {
              src: "/projects/laviebel/payroll.png",
              alt: "라비에벨 근무자의 급여 조회 화면",
            },
          ],
        },
        {
          title: "가입 코드 관리 · 관리자",
          description: "가입 코드 발급 / 사용 횟수 관리",
          solution:
            "가입 코드를 운영 상황에 맞게 관리할 수 있도록 **Supabase에 코드별 사용 가능 횟수와 활성 상태를 저장**하는 구조를 설계했습니다. 관리자는 각 코드의 상태를 조회, 수정하고 사용 횟수가 소진된 경우 신규 코드를 발급하거나 갱신할 수 있도록 구현해 회원가입에 사용하는 코드를 데이터 기준으로 관리할 수 있게 했습니다.",
          images: [
            {
              src: "/projects/laviebel/invite-code.png",
              alt: "라비에벨 관리자의 가입 코드 설정 화면",
            },
            {
              src: "/projects/laviebel/administrator-management.png",
              alt: "라비에벨 관리자의 구성원 관리 화면",
            },
          ],
        },
        {
          title: "공지 관리 / 관리자",
          description: "공지 등록 / 조회 / 수정 / 삭제",
          solution:
            "중요 공지 사항을 채팅방에 따로 알리면 중요한 내용이 대화에 묻히기 쉽기 때문에 관리자가 필요한 내용을 공지로 등록하고 대상 근무자에게 전달할 수 있게 해 중요 사항을 확인할 수 있게 했습니다.",
          images: [
            {
              src: "/projects/laviebel/admin-notification.png",
              alt: "라비에벨 관리자의 공지 작성 화면",
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
      links: [],
    },
  ] satisfies Project[],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolio.projects.find(project => project.slug === slug);
}
