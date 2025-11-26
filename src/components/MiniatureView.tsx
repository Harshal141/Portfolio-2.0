"use client";
import React, { useEffect, useRef } from "react";
import {
  profile,
  experiences,
  projects,
  achievements,
  education,
} from "@/lib/ResumeData";
import {
  AchievementCard,
  ExperienceCard,
  ProfileCard,
  EducationCard,
  ProjectCardV2,
} from "./Cards";
import Footer from "./Footer";
import { Socials } from "./baseComponents/Socials";
import { useExpandedExperience } from "@/context/ExpandedExperienceContext";

export default function MiniatureView() {
  const panelLeftRef = useRef<HTMLDivElement | null>(null);
  const panelContentRef = useRef<HTMLDivElement | null>(null);
  const { isExpanded } = useExpandedExperience();

  useEffect(() => {
    const panelLeft = panelLeftRef.current;
    const panelContent = panelContentRef.current;
    if (!panelLeft || !panelContent) return;

    const onScroll = () => {
      panelLeft.style.marginTop = `${window.scrollY / 10}px`;
      panelContent.style.marginTop = `-${window.scrollY}px`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onClick = (e: MouseEvent) => {
      const screenHeight = window.screen.height;
      const height = Math.max(
        document.body.getBoundingClientRect().height,
        document.documentElement.getBoundingClientRect().height
      );
      if (e.clientY < screenHeight * 0.33)
        window.scrollTo({ top: 0, behavior: "smooth" });
      else if (e.clientY < screenHeight * 0.66)
        window.scrollTo({
          top: height / 2 - screenHeight / 2,
          behavior: "smooth",
        });
      else window.scrollTo({ top: height, behavior: "smooth" });
    };
    panelContent.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      panelContent.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="left_scroll">
      <div className="constrain">
        <div className="panel panel_left p-10" ref={panelLeftRef}>
          <div
            className="panel-content panel_content_left container-fluid"
            ref={panelContentRef}
          >
            {/* #TODO: make match porper */}
            <div className="mover"></div>

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
                    disableLinks
                    disableAnimations
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
                    disableAnimations
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
                  disableAnimations
                  disableLinks
                />
              ))}
            </div>

            <div className="education mt-5">
              <h2 className="heading3 section-title">EDUCATION</h2>
              {education.map((e, i) => (
                <EducationCard
                  key={`${e.degree}-${i}`}
                  degree={e.degree}
                  institute={e.institute}
                  period={e.period}
                  disableAnimations
                />
              ))}
            </div>
            <Socials />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
