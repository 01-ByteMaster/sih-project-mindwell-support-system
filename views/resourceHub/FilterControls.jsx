
import React from 'react';
import DropDownIcon from '../../src/assets/drop-down.svg';

const FilterControls = () => {
  return (
    <div className="flex justify-between items-center gap-4 p-4 mt-8">
      <div className="flex gap-3">
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white pl-4 pr-3 border border-stone-200 hover:bg-stone-50 transition-colors">
          <p className="text-stone-800 text-sm font-medium leading-normal">Language</p>
          <img src={DropDownIcon} alt="Dropdown" className="w-5 h-5 text-stone-600" />
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white pl-4 pr-3 border border-stone-200 hover:bg-stone-50 transition-colors">
          <p className="text-stone-800 text-sm font-medium leading-normal">Type</p>
          <img src={DropDownIcon} alt="Dropdown" className="w-5 h-5 text-stone-600" />
        </button>
      </div>
      <div className="flex gap-2">
        <button className="h-10 px-3 flex items-center justify-center rounded-full text-sm font-medium text-stone-800 bg-white border border-stone-200 hover:bg-stone-50 transition-colors">All</button>
        <button className="h-10 px-3 flex items-center justify-center rounded-full text-sm font-medium text-white bg-[var(--primary-700)]">Videos</button>
        <button className="h-10 px-3 flex items-center justify-center rounded-full text-sm font-medium text-stone-800 bg-white border border-stone-200 hover:bg-stone-50 transition-colors">Audio</button>
        <button className="h-10 px-3 flex items-center justify-center rounded-full text-sm font-medium text-stone-800 bg-white border border-stone-200 hover:bg-stone-50 transition-colors">Articles</button>
      </div>
    </div>
  );
};

export default FilterControls;