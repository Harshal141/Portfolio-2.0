"use client";
import React from "react";

type LinkLikeProps = React.PropsWithChildren<{
  href?: string;
  disableLinks?: boolean;
  className?: string;
  style?: React.CSSProperties;
}>;

export function LinkLike({ href, disableLinks, className, style, children }: LinkLikeProps) {
  if (!href || disableLinks) return <span className={className} style={style}>{children}</span>;
  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  );
}

type CardBaseProps = React.PropsWithChildren<{
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
}>;

export function CardBase({ className = "", disableAnimations, style, children }: CardBaseProps) {
  const base = "projBox mt-3 p-3";
  const anim = disableAnimations ? "no-animate" : "";
  const cls = `${base} ${anim} ${className}`.trim();
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
}

export function ExperienceCard({
  title,
  company,
  companyUrl,
  period,
  location,
  bullets,
  disableLinks,
  disableAnimations,
}: {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  bullets?: string[];
  disableLinks?: boolean;
  disableAnimations?: boolean;
}) {
  return (
    <div className={disableAnimations ? "no-animate" : ""}>
      <div className="heading1 mt-3 mb-1">{title}</div>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="heading3">
          <LinkLike
            href={companyUrl}
            disableLinks={disableLinks}
            style={{
              fontWeight: "bold",
              letterSpacing: "normal",
              color: "#ff2e63 !important"
            }}
          >
            {company}
          </LinkLike>
          {location ? <span style={{ color: "#6d6d6d" }}> · {location}</span> : null}
        </div>
        <div className="heading3">{period}</div>
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="mt-2 heading3" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      <div className="line" />
    </div>
  );
}

export function ProjectCard({
  title,
  tech,
  description,
  repoUrl,
  disableLinks,
  disableAnimations,
}: {
  title: string;
  tech: string;
  description: string;
  repoUrl?: string;
  disableLinks?: boolean;
  disableAnimations?: boolean;
}) {
  return (
    <div className={`projBox mt-3 p-3 ${disableAnimations ? "no-animate" : ""}`}>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="heading1">{title}</div>
        {repoUrl ? (
          <LinkLike href={repoUrl} disableLinks={disableLinks}>
            <img src="/legacy/assets/img/Vector.png" className="code-logo" alt="code link" />
          </LinkLike>
        ) : null}
      </div>
      <div className="heading4 mt-1">{tech}</div>
      <div className="heading3 mt-2">{description}</div>
    </div>
  );
}

export function AchievementCard({ title, org, period, points, disableAnimations }: {
  title: string;
  org: string;
  period: string;
  points?: string[];
  disableAnimations?: boolean;
}) {
  return (
    <div className={disableAnimations ? "no-animate" : ""}>
      <div className="heading1 mt-3 mb-1">{title}</div>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="heading3" style={{ color: "#7734e7" }}>{org}</div>
        <div className="heading3">{period}</div>
      </div>
      {points && (
        <ul className="mt-2 heading3" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
      <div className="line" />
    </div>
  );
}


