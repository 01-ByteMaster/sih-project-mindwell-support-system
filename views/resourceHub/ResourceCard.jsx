
import React from 'react';

const ResourceCard = ({ imageUrl, altText, title, details, icon, iconIsVisible }) => {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="w-full h-48 sm:h-56 lg:h-60 rounded-2xl overflow-hidden relative">
        <img alt={altText} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={imageUrl} />
        <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity ${!iconIsVisible ? 'opacity-0 group-hover:opacity-100' : ''}`}>
          <button className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition-colors">
            <span className="material-symbols-outlined text-3xl">{icon}</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-stone-900 text-lg font-bold leading-normal">{title}</p>
        <p className="text-stone-500 text-sm font-normal leading-normal">{details}</p>
      </div>
    </div>
  );
};

export default ResourceCard;