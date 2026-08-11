import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { profile } = portfolio;

  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">{profile.role}</p>
        <h1 id="hero-title">{profile.headline}</h1>
        <p className="hero-description">{profile.introduction}</p>
        <div className="actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            이메일 보내기
          </a>
          <a
            className="button secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
