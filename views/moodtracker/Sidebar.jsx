// src/components/Sidebar.jsx

import React from 'react';

const Sidebar = () => (
  <aside className="w-80 bg-white p-6 shadow-lg rounded-r-3xl">
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">MindfulU</h1>
        <p className="text-[var(--text-secondary)] text-sm">Student Wellness</p>
      </div>
      <nav className="flex flex-col gap-4">
        <a className="flex items-center gap-4 px-4 py-3 rounded-full text-[var(--text-secondary)] hover:bg-gray-100 transition-colors" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-medium">Home</span>
        </a>
        <a className="flex items-center gap-4 px-4 py-3 rounded-full bg-[var(--primary-color)] text-white font-bold shadow-md" href="#">
          <span className="material-symbols-outlined">sentiment_satisfied</span>
          <span className="font-medium">Mood Tracker</span>
        </a>
        <a className="flex items-center gap-4 px-4 py-3 rounded-full text-[var(--text-secondary)] hover:bg-gray-100 transition-colors" href="#">
          <span className="material-symbols-outlined">trending_up</span>
          <span className="font-medium">Activities</span>
        </a>
        <a className="flex items-center gap-4 px-4 py-3 rounded-full text-[var(--text-secondary)] hover:bg-gray-100 transition-colors" href="#">
          <span className="material-symbols-outlined">book</span>
          <span className="font-medium">Resources</span>
        </a>
        <a className="flex items-center gap-4 px-4 py-3 rounded-full text-[var(--text-secondary)] hover:bg-gray-100 transition-colors" href="#">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-medium">Community</span>
        </a>
      </nav>
      <div className="mt-auto text-center">
        <img alt="Calm illustration" className="mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1hhJTM_AQ9PWVVJ-48GxXh2gZx1yltH0S8emWusXZBc7NI_xwSJwhSiyzKjTzuFukoo5hQEiunF1m5vHIeD7j_n4GCAaGmFAmDn05-xhFHwqsnTarPvxPmb6l7bmacEgANP6i7YZRylrrFr28LzuD43wki2bK5axqEZhaeeDmtosOps0pMAZCfOgbdpShV6GdG5tmNhbNEYJV4gIpEugLvNXTHf4OBIYnhTVW6DXysL9M9U5eH83092J9vnJx-zMSQ8YrkPphPA" />
      </div>
    </div>
  </aside>
);

export default Sidebar;