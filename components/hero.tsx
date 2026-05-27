import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { profile, strengths } = portfolio;

  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          {profile.name} | {profile.role}
        </p>
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
      <div className="strength-panel" aria-label="주요 강점">
        {strengths.map((strength, index) => (
          <div className="strength" key={strength}>
            <span>0{index + 1}</span>
            <strong>{strength}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
