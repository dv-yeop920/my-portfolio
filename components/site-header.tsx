"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

type SiteHeaderProps = {
  role: string;
  image: string;
  imageAlt: string;
};

export function SiteHeader({ role, image, imageAlt }: SiteHeaderProps) {
  const NAME = "JUNYEOPLEE";
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map(link => ({ link, element: document.querySelector(link.href) }))
      .filter(
        (
          section,
        ): section is { link: (typeof links)[number]; element: HTMLElement } =>
          section.element instanceof HTMLElement,
      );

    const updateActiveLink = () => {
      const activationLine = window.innerHeight * 0.32;
      const lastSection = sections.at(-1);
      if (
        lastSection &&
        lastSection.element.getBoundingClientRect().top <= window.innerHeight - 80
      ) {
        setActiveLink(lastSection.link.href);
        return;
      }

      const activeSection = [...sections]
        .reverse()
        .find(({ element }) => element.getBoundingClientRect().top <= activationLine);

      setActiveLink(activeSection?.link.href ?? null);
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  return (
    <header className="site-header">
      <Link
        href="/"
        className="sidebar-profile"
        aria-label={`${NAME} ${role} 홈`}
      >
        <span className="sidebar-avatar">
          <Image src={image} alt={imageAlt} width={420} height={520} priority />
        </span>
        <span className="sidebar-profile-copy">
          <span>{NAME}</span>
        </span>
      </Link>
      <nav className="sidebar-nav" aria-label="주요 메뉴">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={activeLink === link.href ? "is-active" : undefined}
            aria-current={activeLink === link.href ? "true" : undefined}
            onClick={() => setActiveLink(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
