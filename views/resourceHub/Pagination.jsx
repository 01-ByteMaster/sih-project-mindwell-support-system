
import React from 'react';
import LeftSlideIcon from '../../src/assets/left-slide.svg';
import RightSlideIcon from '../../src/assets/right-slide.svg';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center p-4 mt-8">
      <a className="flex size-10 items-center justify-center text-stone-500 hover:text-stone-800 transition-colors" href="#">
        <img src={LeftSlideIcon} alt="Previous page" className="w-5 h-5" />
      </a>
      <a className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white rounded-full bg-[var(--primary-700)]" href="#">1</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-stone-800 rounded-full hover:bg-stone-100 transition-colors" href="#">2</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-stone-800 rounded-full hover:bg-stone-100 transition-colors" href="#">3</a>
      <a className="flex size-10 items-center justify-center text-stone-500 hover:text-stone-800 transition-colors" href="#">
        <img src={RightSlideIcon} alt="Next page" className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Pagination;