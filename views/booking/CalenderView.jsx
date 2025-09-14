
import React from 'react';

const CalendarView = ({ month, showLeftArrow = true, showRightArrow = true, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <button className={`p-2 rounded-full hover:bg-stone-100 transition-colors ${!showLeftArrow && 'invisible'}`}>
          <span className="material-symbols-outlined text-stone-500">chevron_left</span>
        </button>
        <p className="text-stone-900 text-lg font-bold leading-tight text-center">{month}</p>
        <button className={`p-2 rounded-full hover:bg-stone-100 transition-colors ${!showRightArrow && 'invisible'}`}>
          <span className="material-symbols-outlined text-stone-500">chevron_right</span>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        <p className="text-stone-500 text-xs font-bold leading-normal tracking-wider h-10 flex items-center justify-center">S</p>
        <p className="text-stone-500 text-xs font-bold leading-normal tracking-wider h-10 flex items-center justify-center">M</p>
        <p className="text-stone-500 text-xs font-bold leading-normal tracking-wider h-10 flex items-center justify-center">T</p>
        <p className="text-stone-500 text-xs font-bold leading-normal tracking-wider h-10 flex items-center justify-center">W</p>
        <p className="text-stone-500 text-xs font-bold leading-normal tracking-wider h-10 flex items-center justify-center">T</p>
        <p className="text-stone-500 text-xs font-bold leading-normal tracking-wider h-10 flex items-center justify-center">F</p>
        <p className="text-stone-500 text-xs font-bold leading-normal tracking-wider h-10 flex items-center justify-center">S</p>
        {children}
      </div>
    </div>
  );
};

export default CalendarView;