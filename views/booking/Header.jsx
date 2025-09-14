import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-stone-200 px-10 py-4">
      <div className="flex items-center gap-4 text-stone-900">
        <svg
          className="size-7 text-rose-500"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6_319)">
            <path
              d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_6_319">
              <rect fill="white" height="48" width="48"></rect>
            </clipPath>
          </defs>
        </svg>
        <h2 className="text-stone-900 text-xl font-bold leading-tight tracking-[-0.015em]">
          MindfulU
        </h2>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4">
        <nav className="flex items-center gap-9">
          <a className="text-stone-700 text-sm font-medium leading-normal hover:text-rose-500 transition-colors" href="#">Home</a>
          <a className="text-stone-700 text-sm font-medium leading-normal hover:text-rose-500 transition-colors" href="#">Resources</a>
          <a className="text-stone-700 text-sm font-medium leading-normal hover:text-rose-500 transition-colors" href="#">Support</a>
          <a className="text-stone-700 text-sm font-medium leading-normal hover:text-rose-500 transition-colors" href="#">Contact</a>
        </nav>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-stone-900 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-stone-800 transition-colors">
          <span className="truncate">Login</span>
        </button>
        <button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCES54-qZctIc9PXjRS17A171aM6ehclqzyH1zxzj7zTlaE_nezrqzzUouJCYdEh7BnjogJuNEjZFfzwZboQCBLw5UAs176HrI54JUowTjOVaduUN29bFNciNNYNAf9TLqGOwJ0jirgqU8N7qkBpdTxwxXobFAGRE5qxghLFSG2jIg0IJrwr_eCthOb9huohFZQaStw6xm2Vp3P-0PdDq1lNkfAa6h-2EVdpdL39gzYvM4KTMEVqHQv0gZfp5WvAWQOH9uGSwHrzw")',
            }}
          ></div>
        </button>
      </div>
    </header>
  );
};

export default Header;