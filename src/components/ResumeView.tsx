"use client";
import React from "react";
import { profile, experiences, projects, achievements, education } from "@/lib/profile";
import { AchievementCard, ExperienceCard, ProjectCard } from "./cards";

export default function LegacyContent() {
  return (
    <div className="constrain left_constrain">
      <div className="panel p-md-5 p-2">
        <div className="panel-content container-fluid">
          <div className="d-flex flex-row">
          <img src={profile.imageUrl} className="img-hp me-4" alt="miniature user profile" />
            <div className="user-detail">
              <h1 style={{ display: "none" }}>{profile.name}</h1>
              <p className="hero-name" style={{ fontWeight: 600 }}>{profile.name}</p>
              <span className="heading3"><span className="wrap">{profile.taglineList[0]}</span></span>
              <h4 className="heading4">{profile.subtitle}</h4>
            </div>
          </div>

          <div className="pointer" />
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
              />
            ))}
          </div>

          <div className="projects mt-5">
            <h2 className="heading3 section-title">PROJECTS</h2>
            {projects.map((p) => (
              <ProjectCard key={p.title} title={p.title} tech={p.tech} description={p.description} repoUrl={p.repoUrl} />
            ))}
          </div>

          <div className="achieve mt-5">
            <h2 className="heading3 section-title">ACHIEVEMENTS</h2>
            {achievements.map((a) => (
              <AchievementCard key={`${a.title}-${a.period}`} title={a.title} org={a.org} period={a.period} points={a.points} />
            ))}
          </div>

          <div className="education mt-5">
            <h2 className="heading3 section-title">EDUCATION</h2>
            {education.map((e, i) => (
              <React.Fragment key={`${e.degree}-${i}`}>
                <div className="heading1 mt-3 mb-1">{e.degree}</div>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div className="heading4">{e.institute}</div>
                  <div className="heading4">{e.period}</div>
                </div>
                <div className="line" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
