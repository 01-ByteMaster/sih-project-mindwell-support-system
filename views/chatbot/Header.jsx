// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Bell from '../../src/assets/bell.svg';

const Header = () => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-purple-200 px-10 py-3 bg-white">
    <div className="flex items-center gap-3 text-[var(--primary-color)]">
      <svg
        className="size-8 text-[var(--primary-700)] flex-shrink-0"
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
      <h2 className="text-slate-800 text-2xl font-bold leading-none tracking-[-0.015em] flex items-center">
        MindWell
      </h2>
    </div>
    <div className="flex flex-1 justify-end gap-6">
      <nav className="flex items-center gap-8">
        <Link to="/" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Home</Link>
        <a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" href="#">Resources</a>
        <a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" href="#">Community</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-purple-50 hover:bg-purple-100 text-[var(--text-secondary)] transition-colors">
          <img src={Bell} alt="Notifications" className="w-6 h-6" />
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-purple-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzMR2ywENA2xsfWntW0aIqUCyNrHXYWpQYOVka2zz_3CH6kiotpyCLl_fnt17FPthTlrFbr4zJRgowZRMkfKU2UsHOBBLHp-tH8WyE3h1lgQ5McXy_WcvkVQGkVAxi5BAt_uB6hisbZ2iY5KcQUffce4NQawOoPRBq6XYaAHORiVqKdhnjX8oU_3l5x2AfTiEnJJoFLFTJyN9najjNvoQ9G_CFQs4Yzpgk9GF_4id7rtrco6xNLHnsLX3aHgvPYI7n6eTO7YGMVw")' }}></div>
      </div>
    </div>
  </header>
);

export default Header;