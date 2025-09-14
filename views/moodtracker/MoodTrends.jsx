// src/components/MoodTrends.jsx

import React from 'react';
import GraphArrowUp from '../../src/assets/graph-arrow-up.svg';

const MoodTrends = () => (
  <div className="bg-white p-8 rounded-2xl shadow-sm">
    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Mood Trends</h3>
    <div className="flex items-baseline gap-2 mb-4">
      <p className="text-4xl font-bold text-[var(--text-primary)]">Good</p>
      <p className="text-green-500 font-medium flex items-center"><img src={GraphArrowUp} alt="Arrow up" className="w-4 h-4 mr-1" />10%</p>
    </div>
    <p className="text-[var(--text-secondary)] text-sm mb-6">vs. Last 7 Days</p>
    <div className="h-48 relative">
      <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#E8A3B8" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
            <stop stopColor="#FFB6C1" stopOpacity="0.2"></stop>
            <stop offset="1" stopColor="#FFB6C1" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#paint0_linear_chart)"></path>
      </svg>
    </div>
    <div className="flex justify-around mt-4 text-sm font-medium text-[var(--text-secondary)]">
      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
    </div>
  </div>
);

export default MoodTrends;