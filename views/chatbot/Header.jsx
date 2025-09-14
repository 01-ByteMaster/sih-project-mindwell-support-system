// src/components/Header.jsx

import React from 'react';

const Header = () => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-purple-200 px-10 py-3 bg-white">
    <div className="flex items-center gap-4 text-[var(--primary-color)]">
      <div className="size-6">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
        </svg>
      </div>
      <h2 className="text-xl font-bold tracking-tight">MindWell</h2>
    </div>
    <div className="flex flex-1 justify-end gap-6">
      <nav className="flex items-center gap-8">
        <a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" href="#">Home</a>
        <a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" href="#">Resources</a>
        <a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" href="#">Community</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-purple-50 hover:bg-purple-100 text-[var(--text-secondary)] transition-colors">
          <span className="material-symbols-outlined text-2xl"> notifications </span>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-purple-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzMR2ywENA2xsfWntW0aIqUCyNrHXYWpQYOVka2zz_3CH6kiotpyCLl_fnt17FPthTlrFbr4zJRgowZRMkfKU2UsHOBBLHp-tH8WyE3h1lgQ5McXy_WcvkVQGkVAxi5BAt_uB6hisbZ2iY5KcQUffce4NQawOoPRBq6XYaAHORiVqKdhnjX8oU_3l5x2AfTiEnJJoFLFTJyN9najjNvoQ9G_CFQs4Yzpgk9GF_4id7rtrco6xNLHnsLX3aHgvPYI7n6eTO7YGMVw")' }}></div>
      </div>
    </div>
  </header>
);

export default Header;