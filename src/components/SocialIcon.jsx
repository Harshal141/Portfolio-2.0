import React from 'react';

const SocialIcon = ({ src, alt }) => (
  <div className="flex justify-center items-center p-1.5 w-8 h-8 rounded-lg border border-solid bg-white bg-opacity-10 border-white border-opacity-30">
    <img loading="lazy" src={src} alt={alt} className="w-5 aspect-square" />
  </div>
);

export default SocialIcon;