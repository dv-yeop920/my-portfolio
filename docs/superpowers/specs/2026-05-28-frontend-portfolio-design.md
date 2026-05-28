# Frontend Portfolio Website Design

## Purpose

Build a job-search portfolio site for Lee Junyeop (`이준엽`), a frontend
developer whose strongest positioning is improving user experience through
performance-aware problem solving. The site should let a recruiter understand
the candidate quickly on the landing page, then inspect two projects as case
studies with enough technical detail to support an interview conversation.

## Confirmed Technology Direction

- Framework: latest stable Next.js with the App Router
- Language: TypeScript
- Styling: plain CSS, organized for reusable sections and responsive layouts
- Development bundler: Turbopack, as provided by modern Next.js defaults
- Content approach: typed local portfolio data rather than a CMS or database

Vite is intentionally not part of this project because Next.js provides the
application build and development tooling for an App Router site.

## Audience And Positioning

The primary audience is recruiters and frontend interviewers. The site's
message is:

> A frontend developer who diagnoses user-facing performance problems and
> delivers polished product experiences with thoughtful implementation.

The portfolio should support that message in three ways:

- Clean UI and responsive execution demonstrate visual implementation quality.
- The first project highlights image delivery and loading optimization choices.
- The second project highlights scalable frontend structure and domain feature
  delivery for a learning product.

## Information Architecture

### Landing Page

The home page is a single, scannable introduction with anchored sections:

1. **Header**: name/wordmark, navigation to About, Skills, Projects, and
   Contact, plus a compact mobile navigation treatment.
2. **Hero**: `이준엽 | Frontend Developer`, a performance-centered value
   statement, email and GitHub calls to action, and a profile image area that
   can be replaced with an approved portrait asset.
3. **About**: a short narrative describing an interest in finding frontend
   bottlenecks, improving user experience, and delivering complete product
   screens.
4. **Skills**: grouped competency display for core frontend, architecture/API,
   and delivery/performance technologies.
5. **Featured Projects**: two prominent cards, each including a visual area,
   public working title, summary, role highlights, technology tags, and a link
   to its detailed case study.
6. **Contact**: a concise closing invitation with email and GitHub links.
7. **Footer**: identity and copyright presentation without unnecessary legal
   or marketing copy.

### Project Detail Pages

Each project card links to `/projects/[slug]`. The page is primarily a readable
case study, with selected technical-detail blocks where they strengthen the
story.

Each case study includes:

1. **Project Hero**: working title, project category/status, summary, role,
   technology tags, and optional external links only when available.
2. **Overview**: the product purpose and user problem.
3. **My Role**: specific ownership and contribution scope.
4. **Challenge And Solution**: problem, decision, implementation, and outcome
   narrative.
5. **Technical Highlights**: compact architecture or performance detail cards.
6. **Screenshots**: accessible image gallery when publishable assets are
   provided; until then the layout supports neutral visual placeholders.
7. **Retrospective**: lessons and future improvements without invented metrics.
8. **Navigation**: return to home/projects and move to the other case study.

## Initial Project Content

Project names and company attribution are intentionally working labels until
Lee Junyeop provides publicly usable names.

### Project 1: Web Product Platform

This is a prior company project for which screenshots remain available.

- Role: contributed to part of screen planning; implemented all project
  screens and frontend functionality; integrated APIs; configured image
  delivery optimization; participated in deployment.
- Case-study focus: image-heavy landing experience and performance-oriented
  improvements.
- Confirmed technical narrative: Lighthouse exposed poor image-loading
  performance during development; the implementation used AWS S3 and
  CloudFront for image delivery, SVG/WebP assets where appropriate, and lazy
  loading to improve page loading behavior and transferred image weight.
- Evidence rule: no Lighthouse score, improvement percentage, or measured load
  time is displayed because those measurements are no longer available.
- Asset rule: screenshots are reviewed before publication and redacted if they
  expose personal data, credentials, confidential business information, or
  assets that cannot be published.

### Project 2: AI Study Planner

This is an in-progress learning-support service for students.

- Product purpose: help students define study plans and schedules, set
  achievement goals, and use AI-assisted note summarization to support
  studying.
- Role: established a folder structure informed by Feature-Sliced Design and
  completed page publishing/UI implementation.
- Intended feature case-study focus: personal learning, learning goal
  achievement, and consolidated-note (`단권화`) domain features and their API
  integration.
- Publication rule: the site must display the project and each feature using
  its truthful implementation and deployment status at release time. Planned
  API work must not be presented as completed until verified.

## Skills Content

The first version presents only technologies supported by the supplied
experience or the portfolio implementation:

- Core Frontend: React, Next.js, TypeScript, HTML, CSS
- Architecture And Integration: Feature-Sliced Design, REST API integration
- Performance And Delivery: Lighthouse auditing, lazy loading, WebP, SVG,
  AWS S3, Amazon CloudFront, deployment

Skill presentation describes practical use rather than numerical proficiency
ratings.

## Contact Content

- Name: 이준엽
- Role: Frontend Developer
- Email: `jyeop920@gmail.com`
- GitHub: `https://github.com/dv-yeop920`

## Visual Direction

The design takes inspiration from the reference site's clear scrolling resume
format while establishing a distinct, more modern visual identity:

- A warm off-white or very light gray background with deep navy text.
- A restrained blue accent for buttons, links, highlights, and active states.
- Large, clear headings, generous whitespace, and strong reading hierarchy.
- Minimal cards and borders that keep the case-study content professional.
- Project cards use image previews when available, with polished placeholder
  treatments until real assets are approved.
- Animations are limited to subtle hover/focus feedback and gentle section
  entrances; readability and performance take priority over spectacle.

## Responsive And Accessible Behavior

- Desktop layouts use a compact persistent header, a two-column hero, and
  spacious project cards.
- Mobile layouts collapse content into one column and retain clear primary
  calls to action and project links.
- Navigation and actions must be keyboard reachable with visible focus styles.
- Text contrast must remain readable against all backgrounds.
- Every project image receives meaningful alternative text; decorative visuals
  are excluded from assistive reading where appropriate.
- Motion respects reduced-motion preferences.
- Page metadata, semantic headings, and descriptive links support discovery and
  comprehension.

## Content Model And Component Boundaries

Portfolio content lives in a typed module such as `data/portfolio.ts`. It
contains profile/contact fields, skills groups, and two project case-study
records keyed by slug. This permits project names, links, statuses, or images
to be updated without restructuring page components.

Expected page and UI boundaries:

- `app/layout.tsx`: root metadata, font setup, global layout shell.
- `app/page.tsx`: landing-page composition.
- `app/projects/[slug]/page.tsx`: project lookup, metadata, and detail-page
  composition, including a not-found result for invalid slugs.
- `components/`: reusable header, hero, section heading, skill display,
  project card, contact/footer, and case-study presentation blocks.
- `public/`: publishable screenshots and static assets once reviewed.

The pages consume the content model and the components render it; factual
project data is not duplicated in individual UI blocks.

## Data Flow And Failure States

- Home page reads profile, skill, and project summary data and renders links
  using each project's slug.
- Project detail routes resolve a matching project record from the typed local
  data set.
- An unknown project slug resolves to Next.js not-found behavior rather than
  an empty case-study page.
- Missing external deployment or repository links are omitted from the UI
  rather than shown as inactive controls.
- Missing screenshot assets render deliberate placeholder visuals and content
  remains readable without images.

## Verification Criteria

Implementation is acceptable when:

- The home page displays the approved sections and contact links.
- Two project cards navigate to separate detailed case-study pages.
- Project 1 describes verified optimization actions without unsupported
  numerical claims.
- Project 2 can accurately reflect development/deployment status through the
  content data.
- Unknown project URLs result in a proper not-found state.
- Desktop and mobile layouts are visually checked in a browser.
- Keyboard focus, semantic links/headings, image alternative text, and reduced
  motion behavior are verified.
- Lint and production build checks pass using the chosen Next.js project setup.

## Out Of Scope For The First Version

- CMS or database-backed content editing
- Contact submission form or email backend
- Blog, authentication, admin editing, or analytics dashboard
- Fabricated performance metrics, fabricated deployed links, or publication of
  unreviewed company screenshots
