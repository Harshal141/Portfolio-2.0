import React from 'react';

const AchievementItem = ({ title, organization, date, description }) => (
  <div className="flex flex-col justify-center p-4 mt-6 rounded-2xl max-md:max-w-full">
    <div className="flex gap-3 justify-between max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col">
        <div className="text-2xl font-semibold tracking-wide text-zinc-100">{title}</div>
        <div className="mt-3 text-base text-slate-500">{organization}</div>
      </div>
      <div className="self-start text-base font-medium text-slate-500">{date}</div>
    </div>
    <div className="mt-3 text-base text-zinc-100 text-opacity-60 max-md:max-w-full">
      {description}
    </div>
  </div>
);

export default AchievementItem;