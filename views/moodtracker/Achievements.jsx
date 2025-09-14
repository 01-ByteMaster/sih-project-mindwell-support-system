// src/components/Achievements.jsx

import React from 'react';
import LockImage from '../../src/assets/lock.jpg';

const Achievement = ({ title, image, isLocked }) => (
  <div className="flex flex-col items-center text-center gap-2">
    <div className="relative">
      {!isLocked ? (
        <img alt={`${title} Badge`} className="w-24 h-24 rounded-full object-cover shadow-lg" src={image} />
      ) : (
        <img alt="Locked Achievement" className="w-24 h-24 rounded-full object-cover shadow-lg" src={LockImage} />
      )}
    </div>
    <p className={`text-sm font-medium ${isLocked ? 'text-gray-500' : 'text-[var(--text-primary)]'}`}>
      {title}
    </p>
  </div>
);

const Achievements = () => (
  <div className="bg-white p-8 rounded-2xl shadow-sm">
    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Achievements</h3>
    <div className="grid grid-cols-2 gap-4">
      <Achievement
        title="7-Day Calm Streak"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAPDoM0b7BKnB14uMA0kRYzuJ4ENjlGFuxa7CAaSnqf4RCuDyjGTlmbPUd9oBU59OnLLcr1dasdhAql0aFyU6Q5yow9XnCDPNjWbzVaJUzthWgXNyPtEzd95donBXOM9U9Z746xUJ-e6rUyI4wci-hs6ACwxiQSaFip5NmeoO5c142JGP5Ieoe3GWcnSdeV5W1WyvXJAJZgbN3yYxaseTYXFkMTQcMLc2XnCS59sQ4AVWWRXouSBhlD3WwYTnlBwBVaT6hLWU7Cxw"
        isLocked={false}
      />
      <Achievement
        title="Mindful Master"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBgU7yILTD9C7Wj65bG4FMyXlZEAzj63-GxTqSjzWYUExFMUZzT0mcs1x9X86ylU1aRF65srhlDoJ0RGAKDWEw1DK3mOGXDBGjYqEivO5gQJ4aK1XEzPaCf3z7WUeBcWBbuEyrZVaeDDpsvxsjJ41hO127Zf46p6s782HdHwq7hq255qlGXggcejMbvzYj0JKxMKJeHqZZCJgRswNrs4S1auMyVFPy9Rh3p1u6oJj1DjLRAcRtDlQCPNFJFEXJ2y8FEZ0DVqpEzyw"
        isLocked={false}
      />
      <Achievement
        title="Positive Champion"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBbWTClngUXipEwpnqLmd--unlhKKmVsOxgTL7U2PFC9BWy3zWMecKrRTuHUxIjbyRedyBrlbdyHaJoSXMMHJBg2l09qwdSG4TpVujMd73mUSiRlEnB2GyrGHS5-xGCKgJPBWnqwQFsj3U5QstPQSJxhHD3l52m7ChWkA6t08x4PvVJJC45CFYhJj54fj_IGRCbUjceWF90e4eEn7_5Jm1ZINIJL0cvWFPwVFkL6xCBYLBFlZAUKvqc3nHV4AvC6-U_Y6GVfKI20g"
        isLocked={false}
      />
      <Achievement
        title="Locked"
        isLocked={true}
      />
    </div>
  </div>
);

export default Achievements;