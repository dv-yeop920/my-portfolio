"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

type PendingNavigation = {
  href: string;
  targetY: number;
};

export function SiteHeader({ role, image, imageAlt }: SiteHeaderProps) {
  const NAME = "JUNYEOPLEE";
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pendingNavigationRef = useRef<PendingNavigation | null>(null);

  useEffect(() => {
    const sections = links
      .map(link => ({ link, element: document.querySelector(link.href) }))
      .filter(
        (
          section,
        ): section is { link: (typeof links)[number]; element: HTMLElement } =>
          section.element instanceof HTMLElement,
      );

    const findActiveLink = () => {
      const activationLine = window.innerHeight * 0.32;
      const activeSection = sections.find(({ element }) => {
        const { top, bottom } = element.getBoundingClientRect();
        return top <= activationLine && bottom > activationLine;
      });

      const lastSection = sections.at(-1);
      const hasReachedPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      return hasReachedPageEnd && lastSection
        ? lastSection.link.href
        : activeSection?.link.href ?? null;
    };

    const updateActiveLink = () => {
      const pendingNavigation = pendingNavigationRef.current;

      if (pendingNavigation) {
        const hasReachedTarget =
          Math.abs(window.scrollY - pendingNavigation.targetY) <= 4;

        if (hasReachedTarget) {
          pendingNavigationRef.current = null;
        } else {
          return;
        }
      }

      setActiveLink(findActiveLink());
    };

    const cancelPendingNavigation = () => {
      if (!pendingNavigationRef.current) return;

      pendingNavigationRef.current = null;
      updateActiveLink();
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);
    window.addEventListener("wheel", cancelPendingNavigation, { passive: true });
    window.addEventListener("touchstart", cancelPendingNavigation, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
      window.removeEventListener("wheel", cancelPendingNavigation);
      window.removeEventListener("touchstart", cancelPendingNavigation);
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
            onClick={() => {
              const target = document.querySelector(link.href);
              const targetY =
                target instanceof HTMLElement
                  ? Math.min(
                      Math.max(0, window.scrollY + target.getBoundingClientRect().top - 28),
                      document.documentElement.scrollHeight - window.innerHeight,
                    )
                  : window.scrollY;

              pendingNavigationRef.current = { href: link.href, targetY };
              setActiveLink(link.href);
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
