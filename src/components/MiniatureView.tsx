"use client";
import React, { useEffect, useRef } from "react";
import { profile, experiences, projects, achievements, education } from "@/lib/profile";
import { AchievementCard, ExperienceCard, ProjectCard } from "./cards";

export default function MiniatureView() {
  const panelLeftRef = useRef<HTMLDivElement | null>(null);
  const panelContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panelLeft = panelLeftRef.current;
    const panelContent = panelContentRef.current;
    if (!panelLeft || !panelContent) return;

    const onScroll = () => {
      panelLeft.style.marginTop = `${window.scrollY / 10}px`;
      panelContent.style.marginTop = `-${window.scrollY}px`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onClick = (e: MouseEvent) => {
      const screenHeight = window.screen.height;
      const height = Math.max(
        document.body.getBoundingClientRect().height,
        document.documentElement.getBoundingClientRect().height
      );
      if (e.clientY < screenHeight * 0.33) window.scrollTo({ top: 0, behavior: 'smooth' });
      else if (e.clientY < screenHeight * 0.66)
        window.scrollTo({ top: height / 2 - screenHeight / 2, behavior: 'smooth' });
      else window.scrollTo({ top: height, behavior: 'smooth' });
    };
    panelContent.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      panelContent.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="left_scroll">
      <div className="constrain">
        <div className="panel panel_left p-5" ref={panelLeftRef}>
          <div className="panel-content panel_content_left container-fluid" ref={panelContentRef}>
            <div className="mover"></div>

            <div className="d-flex flex-row">
              <img src="/legacy/assets/img/image.jpg" className="img-hp me-4" alt="miniature user profile" />
              <div className="user-detail">
                <p className="heading2" style={{ fontWeight: 600 }}>{profile.name}</p>
                <span className="heading3"><span className="wrap">{profile.taglineList[0]}</span></span>
                <p className="heading4">{profile.subtitle}</p>
              </div>
            </div>

            <div className="pointer"></div>
            <div className="about-box mt-3">
              <p className="heading3">{profile.summary}</p>
            </div>

            <div className="workExp mt-5">
              <p className="heading3 section-title">WORK EXPERIENCE</p>
              {experiences.map((e) => (
                <ExperienceCard
                  key={`${e.title}-${e.company}-${e.period}`}
                  title={e.title}
                  company={e.company}
                  companyUrl={e.companyUrl}
                  location={e.location}
                  period={e.period}
                  bullets={e.bullets}
                  disableLinks
                  disableAnimations
                />
              ))}
            </div>

            <div className="projects mt-5">
              <h2 className="heading3 section-title">PROJECTS</h2>
              {projects.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  tech={p.tech}
                  description={p.description}
                  repoUrl={p.repoUrl}
                  disableLinks
                  disableAnimations
                />
              ))}
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
                  disableAnimations
                />
              ))}
            </div>

            <div className="education mt-5">
              <p className="heading3 section-title">EDUCATION</p>
              {education.map((e, i) => (
                <React.Fragment key={`${e.degree}-${i}`}>
                  <div className="heading1 mt-3 mb-1">{e.degree}</div>
                  <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                    <div className="heading4">{e.institute}</div>
                    <div className="heading4">{e.period}</div>
                  </div>
                  <div className="line"></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


