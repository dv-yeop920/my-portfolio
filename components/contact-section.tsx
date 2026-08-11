import { portfolio } from "@/data/portfolio";

export function ContactSection() {
  const { profile } = portfolio;

  return (
    <section id="contact" className="section contact container" data-reveal>
      <h2>Contact</h2>
      <div className="contact-details">
        <p>
          <strong>Phone : </strong>
          {profile.phone}
        </p>
        <p>
          <strong>Email : </strong>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p>
          <strong>Github : </strong>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            {profile.github}
          </a>
        </p>
      </div>
    </section>
  );
}
