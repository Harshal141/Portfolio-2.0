"use client";
import React from "react";
import Link from "next/link";
import {
  profile,
  experiences,
  projects,
  achievements,
  education,
  blogs,
} from "@/lib/ResumeData";
import {
  AchievementCard,
  ExperienceCard,
  ProfileCard,
  EducationCard,
  ProjectCardV2,
  BlogCard,
} from "./Cards";
import Footer from "./Footer";
import { Socials } from "./baseComponents/Socials";
import { useExpandedExperience } from "@/context/ExpandedExperienceContext";

const VISIBLE_BLOGS_COUNT = 4;

export default function LegacyContent() {
  const { isExpanded, toggleExpanded } = useExpandedExperience();

  return (
    <div className="constrain left_constrain">
      <div className="panel p-md-10 p-2">
        <div className="panel-content container-fluid">
          <ProfileCard {...profile} />

          <div className="workExp mt-5">
            <p className="heading3 section-title">WORK EXPERIENCE</p>
            {experiences.map((e) => {
              const key = `${e.title}-${e.company}-${e.period}`;
              return (
                <ExperienceCard
                  key={key}
                  title={e.title}
                  company={e.company}
                  companyUrl={e.companyUrl}
                  location={e.location}
                  period={e.period}
                  bullets={e.bullets}
                  expanded={isExpanded(key)}
                  onToggleExpand={() => toggleExpanded(key)}
                />
              );
            })}
          </div>

          <div className="projects mt-5">
            <h2 className="heading3 section-title">PROJECTS</h2>
            <div className="flex flex-wrap justify-between">
              {projects.map((p) => (
                <ProjectCardV2
                  key={p.title}
                  title={p.title}
                  tech={p.tech}
                  description={p.description}
                  repoUrl={p.repoUrl}
                  img={p.img}
                />
              ))}
            </div>
          </div>

          <div className="achieve mt-5">
            <h2 className="heading3 section-title">ACHIEVEMENTS</h2>
            {achievements.map((a) => (
              <AchievementCard
                key={`${a.title}-${a.period}`}
                title={a.title}
                org={a.org}
                period={a.period}
                points={a.points}
                url={a.url}
              />
            ))}
          </div>

          <div className="blogs mt-5">
            <h2 className="heading3 section-title">BLOGS</h2>
            <div className="flex flex-wrap justify-between">
              {blogs.slice(0, VISIBLE_BLOGS_COUNT).map((b) => (
                <BlogCard
                  key={b.title}
                  title={b.title}
                  link={b.link}
                  image={b.image}
                />
              ))}
            </div>
            {blogs.length > VISIBLE_BLOGS_COUNT && (
              <div className="flex justify-center mt-4">
                <Link
                  href="/blogs"
                  className="text-sm text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
                >
                  View all blogs →
                </Link>
              </div>
            )}
          </div>

          <div className="education mt-5">
            <h2 className="heading3 section-title">EDUCATION</h2>
            {education.map((e, i) => (
              <EducationCard
                key={`${e.degree}-${i}`}
                degree={e.degree}
                institute={e.institute}
                period={e.period}
              />
            ))}
          </div>
          <Socials />
          <Footer />
        </div>
      </div>
    </div>
  );
}
