"use client";

import { Profile } from "@/lib/ResumeData";
import React from "react";
import Image from "next/image";
import TextType from "./TextType";
import { CardBase, LinkLike } from "./baseComponents/CardBuilder";
import { FiLink, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export function ProfileCard(profile: Profile) {
  return (
    <div className="flex flex-col gap-4">
      {/* top section: photo left, text right */}
      <div className="flex items-center gap-6">
        <Image
          src={profile.image}
          alt={`${profile.name} - user profile`}
          width={100}
          height={100}
          className="aspect-square h-24 w-24 rounded-md border border-neutral-500 shadow-md transition-transform hover:scale-110 object-cover"
          style={{ objectPosition: "center" }}
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

      <div className="relative mt-2 rounded-xl bg-purple-500 p-6 shadow-xl ">
        <div className="absolute left-10 -top-2 h-0 w-0 border-x-8 border-b-10 border-x-transparent border-b-purple-500 rounded-b-md" />
        <p className="text-sm text-neutral-100">{profile.summary}</p>
      </div>
    </div>
  );
}

const VISIBLE_BULLETS_COUNT = 2;

export function ExperienceCard({
  title,
  company,
  companyUrl,
  period,
  location,
  bullets,
  disableLinks,
  disableAnimations,
  expanded,
  onToggleExpand,
}: {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  bullets?: string[];
  disableLinks?: boolean;
  disableAnimations?: boolean;
  expanded?: boolean;
  onToggleExpand?: () => void;
}) {
  const hasMoreBullets = bullets && bullets.length > VISIBLE_BULLETS_COUNT;
  const initialBullets = bullets?.slice(0, VISIBLE_BULLETS_COUNT) || [];
  const extraBullets = bullets?.slice(VISIBLE_BULLETS_COUNT) || [];

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
      {initialBullets.length > 0 && (
        <ul className="space-y-1 text-neutral-400 text-sm list-disc pl-5">
          {initialBullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      <AnimatePresence initial={false}>
        {expanded && extraBullets.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="space-y-1 text-neutral-400 text-sm list-disc pl-5 pt-1">
              {extraBullets.map((b, i) => (
                <motion.li
                  key={`extra-${i}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                    delay: 0.1 + i * 0.06,
                  }}
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {hasMoreBullets && onToggleExpand && (
        <button
          onClick={onToggleExpand}
          className="mt-2 flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors duration-300 cursor-pointer"
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center"
          >
            <FiChevronDown size={14} />
          </motion.span>
          {expanded ? "Show less" : `Show ${extraBullets.length} more`}
        </button>
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
    : "transition-transform duration-300 hover:scale-[1.01] hover:border-purple-400";
  return (
    <div
      className={`w-full md:w-[49%] lg:w-[49%] rounded-md border border-dashed border-neutral-700/60 shadow-lg backdrop-blur-[1px] p-2 mt-3 ${anim}`}
    >
      <div
        className="w-full overflow-hidden rounded-xl border border-dashed border-neutral-700/60"
        style={{ aspectRatio: "1200 / 630" }}
      >
        <LinkLike href={repoUrl} disableLinks={disableLinks} className="block w-full h-full cursor-pointer">
          <img
            src={img || "/project/anubhav.png"}
            alt={title}
            className="w-full h-full object-cover object-bottom cursor-pointer"
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
              className="text-violet-300 hover:text-purple-500 cursor-pointer"
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
  url,
  disableAnimations,
  disableLinks,
}: {
  title: string;
  org: string;
  period: string;
  points?: string[];
  url?: string;
  disableAnimations?: boolean;
  disableLinks?: boolean;
}) {
  return (
    <CardBase disableAnimations={disableAnimations}>
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-2">
          <span className="text-neutral-100 text-base md:text-lg leading-snug">
            {title}
          </span>
          {url && !disableLinks && (
            <LinkLike
              href={url}
              disableLinks={disableLinks}
              className="text-violet-300 hover:text-purple-500 transition-colors cursor-pointer"
            >
              <FiLink size={15} />
            </LinkLike>
          )}
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

export function BlogCard({
  title,
  link,
  image,
  disableAnimations,
  disableLinks,
}: {
  title: string;
  link: string;
  image: string;
  disableAnimations?: boolean;
  disableLinks?: boolean;
}) {
  const anim = disableAnimations
    ? "no-animate"
    : "transition-transform duration-300 hover:scale-[1.01] hover:border-purple-400";
  return (
    <div
      className={`w-full md:w-[49%] lg:w-[49%] rounded-md border border-dashed border-neutral-700/60 shadow-lg backdrop-blur-[1px] p-2 mt-3 ${anim}`}
    >
      <div
        className="w-full overflow-hidden rounded-xl border border-dashed border-neutral-700/60"
        style={{ aspectRatio: "1200 / 630" }}
      >
        <LinkLike href={link} disableLinks={disableLinks} className="block w-full h-full cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover cursor-pointer"
          />
        </LinkLike>
      </div>
      <div className="m-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-neutral-100 text-sm md:text-base leading-snug line-clamp-2">
            {title}
          </h3>
          <LinkLike
            href={link}
            disableLinks={disableLinks}
            className="text-violet-300 hover:text-purple-500 cursor-pointer flex-shrink-0"
          >
            <FiLink size={15} />
          </LinkLike>
        </div>
      </div>
    </div>
  );
}
