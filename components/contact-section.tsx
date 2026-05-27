import { portfolio } from "@/data/portfolio";

export function ContactSection() {
  const { profile } = portfolio;

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>좋은 사용자 경험을 만드는 팀과 함께하고 싶습니다.</h2>
        <p>
          프로젝트와 프론트엔드 개발 경험에 대한 이야기를 나누고 싶다면
          연락해 주세요.
        </p>
        <div className="actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            이메일: {profile.email}
          </a>
          <a
            className="button secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
