export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 style={{ whiteSpace: "pre-line" }}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
