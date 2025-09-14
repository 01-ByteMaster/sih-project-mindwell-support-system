// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import BellIcon from '../../src/assets/bell.svg';
import MenuIcon from '../../src/assets/menu.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-[#ea2a33] size-6 sm:size-8">
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
          </div>
          <h2 className="text-slate-800 text-2xl font-bold leading-none tracking-[-0.015em] flex items-center">
          MindWell
        </h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link className="text-sm font-medium text-gray-600 hover:text-[#ea2a33] transition-colors" to="/">Home</Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-[#ea2a33] transition-colors" to="/resources">Resources</Link>
          <a className="text-sm font-bold text-[#ea2a33] underline" href="#">Community</a>
          <a className="text-sm font-medium text-gray-600 hover:text-[#ea2a33] transition-colors" href="#">About</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <img src={MenuIcon} alt="Menu" className="w-6 h-6" />
          )}
        </button>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
            <img src={BellIcon} alt="Notifications" className="w-5 h-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#ea2a33]"></span>
          </button>
          <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnMKMH-Jr4hpIjagio4S_tkYbG7uOfysqFg5ZfJG3k53z2xQbkvk6MYLJUeLqdfS0WTyZHPQxUl5Z39KZG3m9s0MGFLtFEpXEquToTmwa5hGsDEup9ChYKjG6PQDBWQnZ-I53iHQAglGAY69Wg75xJhA_FEGvckJH1ia1Y46O96XrO9RestUljc0IHrLBun8YAD5ECFyN8megm7tWl46OTb9DSzpb4SUZPtclLPihS5H_YPxjvtPpwT-zHcDFbKR2wUDQ8pnbilw")' }}></div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-6 space-y-4 text-center">
            <Link 
              className="block text-sm font-medium text-gray-600 hover:text-[#ea2a33] transition-colors py-2" 
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              className="block text-sm font-medium text-gray-600 hover:text-[#ea2a33] transition-colors py-2" 
              to="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <a className="block text-sm font-bold text-[#ea2a33] py-2" href="#">Community</a>
            <a className="block text-sm font-medium text-gray-600 hover:text-[#ea2a33] transition-colors py-2" href="#">About</a>
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200">
              <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                <img src={BellIcon} alt="Notifications" className="w-5 h-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#ea2a33]"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnMKMH-Jr4hpIjagio4S_tkYbG7uOfysqFg5ZfJG3k53z2xQbkvk6MYLJUeLqdfS0WTyZHPQxUl5Z39KZG3m9s0MGFLtFEpXEquToTmwa5hGsDEup9ChYKjG6PQDBWQnZ-I53iHQAglGAY69Wg75xJhA_FEGvckJH1ia1Y46O96XrO9RestUljc0IHrLBun8YAD5ECFyN8megm7tWl46OTb9DSzpb4SUZPtclLPihS5H_YPxjvtPpwT-zHcDFbKR2wUDQ8pnbilw")' }}></div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;