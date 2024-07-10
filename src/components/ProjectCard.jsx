import React from 'react';

const ProjectCard = ({ name, technologies, description }) => (
  <div className="flex flex-col justify-center p-4 mt-6 rounded-2xl border border-solid bg-cyan-900 bg-opacity-10 border-cyan-900 border-opacity-50 max-md:max-w-full">
    <div className="flex gap-3 justify-between w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-center">
        <div className="shrink-0 rounded-xl border border-solid bg-white bg-opacity-0 border-white border-opacity-30 h-[91px] w-[91px]" />
        <div className="flex flex-col my-auto">
          <div className="flex gap-2 text-2xl font-semibold tracking-wide text-zinc-100">
            <div>{name}</div>
            <div className="my-auto">↗</div>
          </div>
          <div className="flex gap-5 justify-center mt-3 text-base text-zinc-100 text-opacity-60">
            {technologies.map((tech, index) => (
              <div key={index} className="justify-center px-2 py-1 bg-cyan-900 bg-opacity-20 rounded-[60px]">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3382d427a237aca42de29fd84257e95ed5294cd7ffc08960f66cec55f250dc1?apiKey=39abe5058c20493bb239609f2bdddfc1&" alt="Project icon" className="shrink-0 self-start w-6 aspect-square" />
    </div>
    <div className="mt-3 text-base text-zinc-100 text-opacity-60 max-md:max-w-full">
      {description}
    </div>
  </div>
);

export default ProjectCard;