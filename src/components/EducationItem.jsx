import React from 'react';

const EducationItem = ({ degree, institution, period }) => (
  <div className="flex flex-col justify-center p-4 mt-6 rounded-2xl bg-zinc-100 bg-opacity-0 max-md:max-w-full">
    <div className="flex gap-3 justify-between max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col">
        <div className="text-2xl font-semibold tracking-wide text-zinc-100">{degree}</div>
        <div className="mt-3 text-base text-zinc-100 text-opacity-60">{institution}</div>
      </div>
      <div className="self-end mt-10 text-base font-medium text-zinc-100 text-opacity-40 max-md:mt-10">
        {period}
      </div>
    </div>
  </div>
);

export default EducationItem;