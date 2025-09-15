// src/components/Sidebar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../src/assets/home.svg';
import Smile from '../../src/assets/smile.svg';
import Bookmark from '../../src/assets/bookmark.svg';
import Community from '../../src/assets/community.svg';
import Trend from '../../src/assets/trend.svg';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Mood Tracker');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
  <aside className="w-80 bg-white p-6 shadow-2xl rounded-r-3xl">
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-center gap-3 mb-10">
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
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-[var(--text-primary)] leading-none">MindWell</h1>
          <p className="text-gray-500 text-sm">Student Wellness</p>
        </div>
      </div>
      <nav className="flex flex-col gap-4">
        <Link 
          to="/"
          onClick={() => handleItemClick('Home')}
          className={`flex items-center gap-4 px-4 py-3 rounded-full transition-colors ${
            activeItem === 'Home' 
              ? 'text-white font-bold shadow-md' 
              : 'text-[var(--text-secondary)] hover:bg-gray-100'
          }`}
          style={{ backgroundColor: activeItem === 'Home' ? '#FFB6C1' : 'transparent' }}
        >
          <img 
            src={Home} 
            alt="Home" 
            className="w-5 h-5" 
            style={{ filter: activeItem === 'Home' ? 'brightness(0) invert(1)' : 'none' }}
          />
          <span className="font-medium">Home</span>
        </Link>
        <button 
          onClick={() => handleItemClick('Mood Tracker')}
          className={`flex items-center gap-4 px-4 py-3 rounded-full transition-colors ${
            activeItem === 'Mood Tracker' 
              ? 'text-white font-bold shadow-md' 
              : 'text-[var(--text-secondary)] hover:bg-gray-100'
          }`}
          style={{ backgroundColor: activeItem === 'Mood Tracker' ? '#FFB6C1' : 'transparent' }}
        >
          <img 
            src={Smile} 
            alt="Mood Tracker" 
            className="w-5 h-5" 
            style={{ filter: activeItem === 'Mood Tracker' ? 'brightness(0) invert(1)' : 'none' }}
          />
          <span className="font-medium">Mood Tracker</span>
        </button>
        <button 
          onClick={() => handleItemClick('Activities')}
          className={`flex items-center gap-4 px-4 py-3 rounded-full transition-colors ${
            activeItem === 'Activities' 
              ? 'text-white font-bold shadow-md' 
              : 'text-[var(--text-secondary)] hover:bg-gray-100'
          }`}
          style={{ backgroundColor: activeItem === 'Activities' ? '#FFB6C1' : 'transparent' }}
        >
          <img 
            src={Trend} 
            alt="Activities" 
            className="w-5 h-5" 
            style={{ filter: activeItem === 'Activities' ? 'brightness(0) invert(1)' : 'none' }}
          />
          <span className="font-medium">Activities</span>
        </button>
        <Link 
          to="/resources"
          onClick={() => handleItemClick('Resources')}
          className={`flex items-center gap-4 px-4 py-3 rounded-full transition-colors ${
            activeItem === 'Resources' 
              ? 'text-white font-bold shadow-md' 
              : 'text-[var(--text-secondary)] hover:bg-gray-100'
          }`}
          style={{ backgroundColor: activeItem === 'Resources' ? '#FFB6C1' : 'transparent' }}
        >
          <img 
            src={Bookmark} 
            alt="Resources" 
            className="w-5 h-5" 
            style={{ filter: activeItem === 'Resources' ? 'brightness(0) invert(1)' : 'none' }}
          />
          <span className="font-medium">Resources</span>
        </Link>
        <Link 
          to="/peer-support"
          onClick={() => handleItemClick('Community')}
          className={`flex items-center gap-4 px-4 py-3 rounded-full transition-colors ${
            activeItem === 'Community' 
              ? 'text-white font-bold shadow-md' 
              : 'text-[var(--text-secondary)] hover:bg-gray-100'
          }`}
          style={{ backgroundColor: activeItem === 'Community' ? '#FFB6C1' : 'transparent' }}
        >
          <img 
            src={Community} 
            alt="Community" 
            className="w-5 h-5" 
            style={{ filter: activeItem === 'Community' ? 'brightness(0) invert(1)' : 'none' }}
          />
          <span className="font-medium">Community</span>
        </Link>
      </nav>
      <div className="mt-auto text-center">
        <img alt="Calm illustration" className="mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1hhJTM_AQ9PWVVJ-48GxXh2gZx1yltH0S8emWusXZBc7NI_xwSJwhSiyzKjTzuFukoo5hQEiunF1m5vHIeD7j_n4GCAaGmFAmDn05-xhFHwqsnTarPvxPmb6l7bmacEgANP6i7YZRylrrFr28LzuD43wki2bK5axqEZhaeeDmtosOps0pMAZCfOgbdpShV6GdG5tmNhbNEYJV4gIpEugLvNXTHf4OBIYnhTVW6DXysL9M9U5eH83092J9vnJx-zMSQ8YrkPphPA" />
      </div>
    </div>
  </aside>
  );
};

export default Sidebar;