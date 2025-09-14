
import React from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center p-4 mt-8">
      <a className="flex size-10 items-center justify-center text-stone-500 hover:text-stone-800 transition-colors" href="#">
        <span className="material-symbols-outlined"> chevron_left </span>
      </a>
      <a className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white rounded-full bg-[var(--primary-700)]" href="#">1</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-stone-800 rounded-full hover:bg-stone-100 transition-colors" href="#">2</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-stone-800 rounded-full hover:bg-stone-100 transition-colors" href="#">3</a>
      <a className="flex size-10 items-center justify-center text-stone-500 hover:text-stone-800 transition-colors" href="#">
        <span className="material-symbols-outlined"> chevron_right </span>
      </a>
    </div>
  );
};

export default Pagination;