"use client";
import React from "react";
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
  ProjectCard,
  EducationCard
} from "./Cards";
import Footer from "./Footer";

export default function LegacyContent() {
  return (
    <div className="constrain left_constrain">
      <div className="panel p-md-10 p-2">
        <div className="panel-content container-fluid">
          <ProfileCard {...profile} />
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
              <ProjectCard
                key={p.title}
                title={p.title}
                tech={p.tech}
                description={p.description}
                repoUrl={p.repoUrl}
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
              />
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
