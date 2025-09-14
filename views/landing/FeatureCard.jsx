
// src/components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col gap-4 pb-3 bg-white p-6 rounded-2xl shadow-sm">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div>
        <p className="text-slate-800 text-xl font-bold leading-normal">{title}</p>
        <p className="text-slate-600 text-base font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;