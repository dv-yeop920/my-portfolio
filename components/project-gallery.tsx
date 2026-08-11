import Image from "next/image";
import type { ProjectScreen } from "@/data/portfolio";

export function ProjectGallery({ screens }: { screens: ProjectScreen[] }) {
  return (
    <div className="project-gallery">
      {screens.map((screen, index) => (
        <article
          className="project-screen"
          key={screen.title}
          data-reveal
          data-reveal-delay={(index % 3) + 1}
        >
          <div className="project-screen-media">
            {screen.image && screen.alt ? (
              <Image
                src={screen.image}
                alt={screen.alt}
                width={960}
                height={640}
              />
            ) : (
              <div className="project-media-placeholder" aria-hidden="true">
                <span>Screen {String(index + 1).padStart(2, "0")}</span>
                <strong>Image coming soon</strong>
              </div>
            )}
          </div>
          <div className="project-screen-copy">
            <h3>{screen.title}</h3>
            <p>{screen.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
