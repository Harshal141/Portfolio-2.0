"use client";
import { Profile } from "@/lib/ResumeData";
import React from "react";

type LinkLikeProps = React.PropsWithChildren<{
  href?: string;
  disableLinks?: boolean;
  className?: string;
  style?: React.CSSProperties;
}>;

export function LinkLike({
  href,
  disableLinks,
  className,
  style,
  children,
}: LinkLikeProps) {
  if (!href || disableLinks)
    return (
      <span className={className} style={style}>
        {children}
      </span>
    );
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

export function CardBase({
  className = "",
  disableAnimations,
  style,
  children,
}: CardBaseProps) {
  const base =
    "rounded-md border border-neutral-700/60 bg-neutral-900/40 shadow-lg backdrop-blur-sm p-3 md:p-4";
  const anim = disableAnimations
    ? "no-animate"
    : "transition-transform duration-300 hover:scale-[1.01]";
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
    <CardBase disableAnimations={disableAnimations}>
      <div className="mt-1 mb-2 flex items-start justify-between gap-3">
        <div>
          <div className="text-neutral-100 font-semibold text-base md:text-lg leading-snug">
            {title}
          </div>
          <div className="text-neutral-300/80 text-sm">
            <LinkLike
              href={companyUrl}
              disableLinks={disableLinks}
              className="font-semibold text-pink-400 hover:text-pink-300"
            >
              {company}
            </LinkLike>
            {location ? (
              <span className="text-neutral-500"> · {location}</span>
            ) : null}
          </div>
        </div>
        <div className="text-violet-300 text-xs md:text-sm whitespace-nowrap">
          {period}
        </div>
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="mt-2 space-y-1 text-neutral-400 text-sm list-disc pl-5">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </CardBase>
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
    <CardBase disableAnimations={disableAnimations}>
      <div className="flex items-start justify-between gap-3">
        <div className="text-neutral-100 font-semibold text-base md:text-lg leading-snug">
          {title}
        </div>
        {repoUrl ? (
          <LinkLike
            href={repoUrl}
            disableLinks={disableLinks}
            className="shrink-0"
          >
            <img
              src="/legacy/assets/img/Vector.png"
              className="code-logo"
              alt="code link"
            />
          </LinkLike>
        ) : null}
      </div>
      <div className="text-neutral-500 text-xs md:text-sm mt-1">{tech}</div>
      <div className="text-neutral-300/80 text-sm mt-2">{description}</div>
    </CardBase>
  );
}

export function AchievementCard({
  title,
  org,
  period,
  points,
  disableAnimations,
}: {
  title: string;
  org: string;
  period: string;
  points?: string[];
  disableAnimations?: boolean;
}) {
  return (
    <CardBase disableAnimations={disableAnimations}>
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="text-neutral-100 font-semibold text-base md:text-lg leading-snug">
          {title}
        </div>
        <div className="text-violet-300 text-xs md:text-sm whitespace-nowrap">
          {period}
        </div>
      </div>
      <div className="text-violet-400 text-sm">{org}</div>
      {points && (
        <ul className="mt-2 space-y-1 text-neutral-400 text-sm list-disc pl-5">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </CardBase>
  );
}

export function ProfileCard(profile: Profile) {
  return (
    <>
      <div className="d-flex flex-row">
        <img
          src={profile.image}
          className="img-hp me-4"
          alt="Harshal Patil - user profile"
        />
        <div className="user-detail">
          <h1 style={{ display: "none" }}>{profile.name}</h1>
          <p className="hero-name" style={{ fontWeight: 600 }}>
            {profile.name}
          </p>
          <span className="heading3">
            <span className="wrap">{profile.taglineList[0]}</span>
          </span>
          <h4 className="heading4">{profile.subtitle}</h4>
        </div>
      </div>

      <div className="pointer" />
      <div className="about-box mt-3">
        <p className="heading3">{profile.summary}</p>
      </div>
    </>
  );
}
