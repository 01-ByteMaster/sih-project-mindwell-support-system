
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-stone-200 px-10 py-4">
      <div className="flex items-center gap-3 text-stone-900">
        <div className="size-8 text-[var(--primary-700)]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-stone-900 text-xl font-bold leading-tight tracking-[-0.015em]">MindWell</h2>
      </div>
      <nav className="flex flex-1 justify-center items-center gap-8">
        <a className="text-stone-900 text-base font-medium leading-normal hover:text-[var(--primary-700)] transition-colors" href="#">Home</a>
        <a className="text-[var(--primary-700)] text-base font-bold leading-normal" href="#">Resources</a>
        <a className="text-stone-900 text-base font-medium leading-normal hover:text-[var(--primary-700)] transition-colors" href="#">Community</a>
        <a className="text-stone-900 text-base font-medium leading-normal hover:text-[var(--primary-700)] transition-colors" href="#">Support</a>
      </nav>
      <div className="flex items-center justify-end gap-4">
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-stone-100 text-stone-900 hover:bg-stone-200 transition-colors">
          <span className="material-symbols-outlined text-2xl"> search </span>
        </button>
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-stone-100 text-stone-900 hover:bg-stone-200 transition-colors">
          <span className="material-symbols-outlined text-2xl"> notifications </span>
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