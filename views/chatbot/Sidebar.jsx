// src/components/Sidebar.jsx

import React from 'react';

const Sidebar = () => (
  <aside className="w-[320px] shrink-0">
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
      <h2 className="text-lg font-bold tracking-tight text-red-600">Crisis Support</h2>
      <p className="text-[var(--text-secondary)] text-base leading-relaxed mt-2">If you're in immediate danger, please use the button below to get help.</p>
      <div className="mt-4">
        <button className="flex w-full items-center justify-center overflow-hidden rounded-full h-11 px-4 bg-red-500 text-white text-sm font-bold tracking-wide transition-transform hover:scale-105">
          <span className="material-symbols-outlined mr-2"> </span>
          <span className="truncate">Call Helpline Now</span>
        </button>
      </div>
      <div className="mt-6 border-t border-purple-100 pt-6">
        <h3 className="text-lg font-bold tracking-tight">How are you feeling?</h3>
        <p className="text-[var(--text-secondary)] text-sm mt-1">Log your mood with an emoji.</p>
        <div className="flex justify-around mt-4">
          <button className="text-4xl transition-transform hover:scale-125">😊</button>
          <button className="text-4xl transition-transform hover:scale-125">😐</button>
          <button className="text-4xl transition-transform hover:scale-125">😢</button>
          <button className="text-4xl transition-transform hover:scale-125">😠</button>
          <button className="text-4xl transition-transform hover:scale-125">😩</button>
        </div>
      </div>
    </div>
  </aside>
);

export default Sidebar;