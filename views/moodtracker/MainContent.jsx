// src/components/MainContent.jsx

import React from 'react';
import MoodTracker from './MoodTracker';
import MoodTrends from './MoodTrends';
import Achievements from './Achievements';

const MainContent = () => (
  <main className="flex-1 p-8">
    <div className="max-w-4xl mx-auto">
      <header className="mb-10">
        <h2 className="text-4xl font-bold text-[var(--text-primary)]">Daily Mood Tracker</h2>
        <p className="text-[var(--text-secondary)] mt-1">A space to reflect and record your emotional well-being.</p>
      </header>
      <MoodTracker />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MoodTrends />
        <Achievements />
      </section>
    </div>
  </main>
);

export default MainContent;