"use client";

import { LinkLike } from "./CardBuilder";
import { useState } from "react";
import { socials } from "@/lib/ResumeData";

export function Socials() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-10">
      {socials.map((s) => (
        <SocialIcon key={s.href} {...s} />
      ))}
    </div>
  );
}

export function SocialIcon({
  href,
  icon: Icon,
  username,
  subtext,
  disableLinks,
}: {
  href?: string;
  icon: any;
  username: string;
  subtext?: string;
  disableLinks?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <LinkLike
      href={href}
      disableLinks={disableLinks}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex items-center shadow-lg border border-dashed border-neutral-700/60
        rounded-full bg-neutral-900/40
        transition-all duration-700 ease-out-in
        overflow-hidden cursor-pointer
        ${
          hovered
            ? "w-52 px-4 justify-start border-purple-400"
            : "w-10 px-2 justify-center"
        }
        h-10
      `}
      style={{ textDecoration: "none", transformOrigin: "center" }}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center transition-all duration-300 ${
          hovered ? "mr-2" : ""
        } w-10 h-10`}
      >
        <Icon size={18} />
      </div>
      {/* Conditionally render text on hover */}
      {hovered && (
        <div className="flex flex-col">
          <span className="text-neutral-100 text-sm truncate">{username}</span>
          {subtext && (
            <span className="text-neutral-500 text-xs truncate">{subtext}</span>
          )}
        </div>
      )}
    </LinkLike>
  );
}
