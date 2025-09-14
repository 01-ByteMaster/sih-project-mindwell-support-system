
import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../../src/assets/search.svg';
import BellIcon from '../../src/assets/bell.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-stone-200 px-10 py-4">
      <div className="flex items-center gap-3 text-stone-900">
        <div className="size-8 text-[var(--primary-700)]">
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
      <nav className="flex flex-1 justify-center items-center gap-8">
        <Link className="text-stone-900 text-base font-medium leading-normal hover:text-[var(--primary-700)] transition-colors" to="/">Home</Link>
        <a className="text-[var(--primary-700)] text-base font-bold leading-normal" href="#">Resources</a>
        <Link className="text-stone-900 text-base font-medium leading-normal hover:text-[var(--primary-700)] transition-colors" to="/peer-support">Community</Link>
        <a className="text-stone-900 text-base font-medium leading-normal hover:text-[var(--primary-700)] transition-colors" href="#">Support</a>
      </nav>
      <div className="flex items-center justify-end gap-4">
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-stone-100 text-stone-900 hover:bg-stone-200 transition-colors">
          <img src={SearchIcon} alt="Search" className="w-6 h-6" />
        </button>
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-stone-100 text-stone-900 hover:bg-stone-200 transition-colors">
          <img src={BellIcon} alt="Notifications" className="w-6 h-6" />
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJn5G-RtTSQYXzxvtO6e0B48o8ezePYLf1GK_K6NWEzGscUrvRJ4_l_UjaSIcFOptBH9Zn7Gpo6CqeSSuLXlNsYypwMXaK7FAHP6pkF1ctGM_JZXA0axXskOlSxRADMfcMvXwfgqh4qglSXVyqJH-B4qRWhNWAuPjpnQcY00rtOb0Ut4jXiSCWzCeTxgOjXbw0iYKcycSQcLWMPlSrINlSMLR6fuKos2YjbVbz0XJNOrKi6cbq5xR57xp-P55TkRRdo1Y30yxCAA")' }}
        ></div>
      </div>
    </header>
  );
};

export default Header;