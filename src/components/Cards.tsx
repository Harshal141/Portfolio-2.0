"use client";

import { Profile } from "@/lib/ResumeData";
import React from "react";
import Image from "next/image";
import TextType from "./TextType";
import { CardBase, LinkLike } from "./baseComponents/CardBuilder";
import { FiLink } from "react-icons/fi";

export function ProfileCard(profile: Profile) {
  return (
    <div className="flex flex-col gap-4">
      {/* top section: photo left, text right */}
      <div className="flex items-center gap-6">
        <Image
          src={`${profile.image}`}
          alt={`${profile.name} - user profile`}
          width={100}
          height={100}
          className="h-24 w-24 rounded-md border border-neutral-500 shadow-md transition-transform hover:scale-110 object-cover"
        />

        <div className="flex flex-col">
          <h1 className="sr-only">{profile.name}</h1>
          <p className="text-3xl font-normal text-neutral-100">
            {profile.name}
          </p>
          <span className="text-sm text-neutral-400 my-1">
            {profile.subtitle}
          </span>
          <h4 className="text-xs text-neutral-500">
            <TextType
              text={profile.taglineList}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h4>
        </div>
      </div>

      <div className="relative mt-2 rounded-xl bg-purple-500 p-6 shadow-xl">
        <div className="absolute left-10 -top-2 h-0 w-0 border-x-8 border-b-10 border-x-transparent border-b-purple-500 rounded-b-md" />
        <p className="text-sm text-neutral-100">{profile.summary}</p>
      </div>
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
      <div className="my-1 flex items-start justify-between gap-3">
        <div>
          <div className="text-neutral-100 text-base md:text-lg leading-snug">
            {title}
          </div>
          <div className="text-neutral-300/80 text-xs my-1">
            <LinkLike
              href={companyUrl}
              disableLinks={disableLinks}
              className="text-violet-300 hover:text-purple-500"
            >
              {company}
            </LinkLike>
            {location ? (
              <span className="text-neutral-500"> · {location}</span>
            ) : null}
          </div>
        </div>
        <div className="text-violet-300 text-[0.7rem] tracking-wide">
          {period}
        </div>
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-1 text-neutral-400 text-sm list-disc pl-5">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </CardBase>
  );
}

export function ProjectCardV2({
  title,
  tech,
  description,
  repoUrl,
  img,
  disableAnimations,
  disableLinks,
}: {
  title: string;
  tech: string[];
  description: string;
  repoUrl?: string;
  img?: string;
  disableAnimations?: boolean;
  disableLinks?: boolean;
}) {
  const anim = disableAnimations
    ? "no-animate"
    : "transition-transform duration-300 hover:scale-[1.01]";
  return (
    <div
      className={`w-full md:w-[49%] lg:w-[49%] rounded-md border border-dashed border-neutral-700/60 shadow-lg backdrop-blur-[1px] p-2 mt-3 ${anim}`}
    >
      <div className="w-full h-[220px] overflow-hidden rounded-xl border border-dashed border-neutral-700/60">
        <LinkLike href={repoUrl} disableLinks={disableLinks}>
          <img
            src={img || "/project/anubhav.png"}
            alt={title}
            className="w-full h-full object-cover object-bottom"
          />
        </LinkLike>
      </div>
      <div className="m-3">
        <div className="flex items-center justify-between">
          <h3 className="text-neutral-100 text-base md:text-lg leading-snug">
            {title}
          </h3>
          {repoUrl && (
            <LinkLike
              href={repoUrl}
              disableLinks={disableLinks}
              className="text-violet-300 hover:text-purple-500"
            >
              <FiLink size={15} />
            </LinkLike>
          )}
        </div>
        <div className="flex flex-wrap gap-2 my-2">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-neutral-700/20 text-neutral-400 text-xs px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="space-y-1 text-neutral-400 text-sm list-disc">
          {description}
        </p>
      </div>
    </div>
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
        <div className="text-neutral-100 text-base md:text-lg leading-snug">
          {title}
        </div>
        <div className="text-violet-300 text-[0.7rem] tracking-wide">
          {period}
        </div>
      </div>
      <div className="text-violet-300 text-xs">{org}</div>
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

export function EducationCard({
  degree,
  institute,
  period,
  disableLinks,
  disableAnimations,
}: {
  degree: string;
  institute: string;
  period: string;
  disableLinks?: boolean;
  disableAnimations?: boolean;
}) {
  return (
    <CardBase disableAnimations={disableAnimations}>
      <div className="mt-1 mb-2 flex items-start justify-between gap-3">
        <div>
          <div className="text-neutral-100 text-base md:text-lg leading-snug">
            {degree}
          </div>
          <div className="text-neutral-300/80 text-xs">
            <LinkLike disableLinks={disableLinks} className="text-violet-300">
              {institute}
            </LinkLike>
          </div>
        </div>
        <div className="text-violet-300 text-[0.7rem] tracking-wide">
          {period}
        </div>
      </div>
    </CardBase>
  );
}
