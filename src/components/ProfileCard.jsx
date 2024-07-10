import React from 'react';
import SocialIcon from './SocialIcon';
import ExperienceItem from './ExperienceItem';
import ProjectCard from './ProjectCard';
import AchievementItem from './AchievementItem';
import EducationItem from './EducationItem';

const ProfileCard = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea883ad74f20511144da92ceec054736d5d27547229dcd243c93514ed491d1c?apiKey=39abe5058c20493bb239609f2bdddfc1&", alt: "Social media icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9779028728e228671d8dae19d8c5249b58dd73a072a3b857d449987426814076?apiKey=39abe5058c20493bb239609f2bdddfc1&", alt: "Social media icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a748dda67428094da6c1b7a220630cc3a7a948b3ea33bbc90ecb0db7ba0a3d2f?apiKey=39abe5058c20493bb239609f2bdddfc1&", alt: "Social media icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3a99586f1198b752ecc4b9f4e7052da5188aaff9c0fa0589925d653b25c2ab?apiKey=39abe5058c20493bb239609f2bdddfc1&", alt: "Social media icon" }
  ];

  const experiences = [
    {
      company: "Fyle",
      role: "Engineering Intern",
      date: "11 Jul 2023 - current",
      description: "8+ months of experience in developing user-facing applications, plus worked on tech stack migration from AngularJs to Angular. Led web and extension development initiatives. • Developed engaging UI and implemented serivces for the Fyle web app using Angular. Blog Link • Created AWS Lambda functions for automation in ClickUp and Slack API to enhance the team's productivity."
    },
    {
      company: "Tax Sarthi",
      role: "Project Lead",
      date: "11 Jul 2023 - current",
      description: "Freelance project for the development of Tax Sarthi, a tax management portal for 10,000+ users using ReactJS and Firebase, built from scratch to production. • As the team lead hosted the initiative for the development of this portal. In addition to overseeing the primary responsibilities, instrumental in establishing backend services for the portal."
    },
    {
      company: "Open Source Software Club",
      role: "Technical Head",
      date: "11 Jul 2023 - current",
      description: "Organized Innerve a nationwide hackathon at Army Institute of Technology with a prize pool of 10+ Lakhs. • Managed internal college event Spark, which included taking classes for 400+ students."
    }
  ];

  const projects = [
    {
      name: "i-Moisture",
      technologies: ["React", "Flask", "AWS"],
      description: "Soil moisture prediction using digital images using multpile linear regression model based on the Gravimetric Methods calculation and median RGB Band values for each class of soil. • Using this model we introduce a gamified approach to Irrigation Management, specific to each crop."
    },
    {
      name: "i-Moisture",
      technologies: ["React", "Flask", "AWS"],
      description: "Soil moisture prediction using digital images using multpile linear regression model based on the Gravimetric Methods calculation and median RGB Band values for each class of soil. • Using this model we introduce a gamified approach to Irrigation Management, specific to each crop."
    },
    {
      name: "i-Moisture",
      technologies: ["React", "Flask", "AWS"],
      description: "Soil moisture prediction using digital images using multpile linear regression model based on the Gravimetric Methods calculation and median RGB Band values for each class of soil. • Using this model we introduce a gamified approach to Irrigation Management, specific to each crop."
    }
  ];

  const achievements = [
    {
      title: "Hack4TKM 2024 Winner",
      organization: "TKM Collage",
      date: "11 Jul 2023 - current",
      description: "Secured first position amongst 1000+ teams and Won a cash prize of 1Lakh."
    },
    {
      title: "HackOdisha 3.0 Runner Up",
      organization: "NIT Rourkela",
      date: "11 Jul 2023 - current",
      description: "Runner Up in HackOdisha 3.0 - National level hackathon organized by NIT Rourkela."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Army Institute Of Technology, Pune",
      period: "2021-2025"
    },
    {
      degree: "Higher Education",
      institution: "Army Public School Dighi.",
      period: "2020-2021"
    }
  ];

  return (
    <div className="flex justify-center items-center px-10 py-20 bg-neutral-900 max-md:px-5">
      <div className="mt-12 w-full max-w-[1247px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b5bec1aada38f5d4444ba393b26eb066149a9ff1c9bcc2b6e14034326159bfc?apiKey=39abe5058c20493bb239609f2bdddfc1&" alt="Profile" className="shrink-0 mt-40 max-w-full aspect-[0.44] w-[239px] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
              <header className="flex gap-5 justify-center self-start">
                <div className="shrink-0 rounded-xl border border-solid bg-white bg-opacity-10 border-white border-opacity-30 h-[91px] w-[91px]" />
                <div className="flex flex-col my-auto">
                  <h1 className="mr-6 text-4xl font-bold text-zinc-100 max-md:mr-2.5">
                    Harshal Patil{" "}
                  </h1>
                  <p className="text-base text-neutral-400">Backend Developer</p>
                  <p className="text-sm text-neutral-500">
                    Student at Army Institute of Technology
                  </p>
                </div>
              </header>
              <section className="flex flex-col p-6 mt-9 bg-cyan-900 rounded-2xl max-md:px-5 max-md:max-w-full">
                <p className="text-base text-zinc-100 max-md:max-w-full">
                  <br />
                  Hi i am Harshal Patil, and I am a college student with experience in full stack programming and freelancing. I am driven to generate original and creative ideas. I have a natural aptitude for leadership and a track record of providing clients with high-quality products. If you have a brilliant idea, please contact me. 😎 I am always open to collaborations and ideas.
                </p>
                <h2 className="mt-5 text-base font-semibold text-zinc-100 max-md:max-w-full">
                  Connect with me
                </h2>
                <div className="flex gap-4 self-start mt-5">
                  {socialIcons.map((icon, index) => (
                    <SocialIcon key={index} src={icon.src} alt={icon.alt} />
                  ))}
                </div>
              </section>
              <section>
                <h2 className="flex gap-2 self-start mt-16 text-base font-semibold tracking-wide whitespace-nowrap text-neutral-400 max-md:mt-10">
                  <div className="shrink-0 my-auto w-3 h-3 bg-white rounded-full" />
                  <div>EXPERIENCE</div>
                </h2>
                {experiences.map((exp, index) => (
                  <ExperienceItem key={index} {...exp} />
                ))}
              </section>
              <section>
                <h2 className="flex gap-2 self-start mt-16 text-base font-semibold tracking-wide whitespace-nowrap text-neutral-400 max-md:mt-10">
                  <div className="shrink-0 my-auto w-3 h-3 bg-white rounded-full" />
                  <div>PROJECTS</div>
                </h2>
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </section>
              <section>
                <h2 className="flex gap-2 self-start mt-16 text-base font-semibold tracking-wide whitespace-nowrap text-neutral-400 max-md:mt-10">
                  <div className="shrink-0 my-auto w-3 h-3 bg-white rounded-full" />
                  <div>ACHIEVEMENTS</div>
                </h2>
                {achievements.map((achievement, index) => (
                  <AchievementItem key={index} {...achievement} />
                ))}
              </section>
              <section>
                <h2 className="flex gap-2 self-start mt-16 text-base font-semibold tracking-wide whitespace-nowrap text-neutral-400 max-md:mt-10">
                  <div className="shrink-0 my-auto w-3 h-3 bg-white rounded-full" />
                  <div>EDUCATION</div>
                </h2>
                {education.map((edu, index) => (
                  <EducationItem key={index} {...edu} />
                ))}
              </section>
              <footer className="mt-16 max-md:mt-10">
                <p className="self-start text-base font-semibold tracking-wide text-neutral-400 max-md:max-w-full">
                  © 2024 Harshal Patil. All Rights Reserved.
                </p>
                <div className="flex gap-2 self-start mt-3 text-base text-zinc-100 text-opacity-60 max-md:flex-wrap">
                  <div className="shrink-0 my-auto w-3 h-3 bg-white rounded-full" />
                  <div>Last updated by Harshal on Jul 15, 2024, 12:35 AM IST</div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;