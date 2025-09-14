// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-10 py-4">
      <div className="flex items-center gap-3 text-slate-800">
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
      <nav className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-slate-700 text-base font-medium leading-normal" href="#">Home</a>
          <a className="text-slate-700 text-base font-medium leading-normal" href="#">About</a>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              className="text-slate-700 text-base font-medium leading-normal flex items-center gap-1 hover:text-[var(--primary-700)] transition-colors"
              onClick={toggleServices}
            >
              Services
              <svg 
                className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <Link 
                  to="/chatbot" 
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-[var(--primary-50)] hover:text-[var(--primary-700)] transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Chat Bot
                </Link>
                <Link 
                  to="/booking" 
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-[var(--primary-50)] hover:text-[var(--primary-700)] transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Appointment Bookings
                </Link>
                <Link 
                  to="/mood-tracker" 
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-[var(--primary-50)] hover:text-[var(--primary-700)] transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Mood Tracker
                </Link>
                <Link 
                  to="/peer-support" 
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-[var(--primary-50)] hover:text-[var(--primary-700)] transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Peer Support
                </Link>
              </div>
            )}
          </div>
          
          <Link className="text-slate-700 text-base font-medium leading-normal hover:text-[var(--primary-700)] transition-colors" to="/resources">Resources</Link>
          <a className="text-slate-700 text-base font-medium leading-normal" href="#">Contact</a>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[var(--primary-500)] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[var(--primary-600)] transition-colors duration-200">
            <span className="truncate">Login</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[var(--primary-100)] text-[var(--primary-800)] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[var(--primary-200)] transition-colors duration-200">
            <span className="truncate">Sign Up</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;