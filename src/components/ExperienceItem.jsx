import React from 'react';

const ExperienceItem = ({ company, role, date, description }) => (
  <div className="flex flex-col justify-center p-4 mt-4 rounded-2xl max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4 font-semibold">
        <div className="text-2xl tracking-wide text-zinc-100">{company} - </div>
        <div className="my-auto text-base text-slate-500">{role}</div>
      </div>
      <div className="my-auto text-base font-medium text-zinc-100 text-opacity-40">{date}</div>
    </div>
    <div className="mt-6 text-base text-zinc-100 text-opacity-60 max-md:max-w-full">
      {description}
    </div>
  </div>
);

export default ExperienceItem;