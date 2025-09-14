// src/components/Header.jsx

import React from 'react';

const Header = () => (
  <header className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-md">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="text-[#ea2a33] size-8">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-900">MindWell</h1>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-sm font-medium text-gray-600 hover:text-[#ea2a33]" href="#">Home</a>
        <a className="text-sm font-medium text-gray-600 hover:text-[#ea2a33]" href="#">Resources</a>
        <a className="text-sm font-bold text-[#ea2a33] underline" href="#">Community</a>
        <a className="text-sm font-medium text-gray-600 hover:text-[#ea2a33]" href="#">About</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#ea2a33]"></span>
        </button>
        <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnMKMH-Jr4hpIjagio4S_tkYbG7uOfysqFg5ZfJG3k53z2xQbkvk6MYLJUeLqdfS0WTyZHPQxUl5Z39KZG3m9s0MGFLtFEpXEquToTmwa5hGsDEup9ChYKjG6PQDBWQnZ-I53iHQAglGAY69Wg75xJhA_FEGvckJH1ia1Y46O96XrO9RestUljc0IHrLBun8YAD5ECFyN8megm7tWl46OTb9DSzpb4SUZPtclLPihS5H_YPxjvtPpwT-zHcDFbKR2wUDQ8pnbilw")' }}></div>
      </div>
    </div>
  </header>
);

export default Header;