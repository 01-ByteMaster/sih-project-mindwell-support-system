// src/components/MoodTracker.jsx

import React from 'react';

const MoodTracker = () => (
  <section className="bg-white p-8 rounded-2xl shadow-sm mb-8">
    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">How are you feeling today?</h3>
    <div className="flex justify-around items-center mb-6">
      <button className="emoji-btn flex flex-col items-center gap-2 text-5xl text-gray-400 hover:text-red-400">
        <span>😞</span>
        <span className="text-sm font-medium">Very Sad</span>
      </button>
      <button className="emoji-btn flex flex-col items-center gap-2 text-5xl text-gray-400 hover:text-orange-400">
        <span>🙁</span>
        <span className="text-sm font-medium">Sad</span>
      </button>
      <button className="emoji-btn flex flex-col items-center gap-2 text-5xl text-gray-400 hover:text-yellow-400">
        <span>😐</span>
        <span className="text-sm font-medium">Neutral</span>
      </button>
      <button className="emoji-btn flex flex-col items-center gap-2 text-5xl text-gray-400 hover:text-lime-400">
        <span>🙂</span>
        <span className="text-sm font-medium">Happy</span>
      </button>
      <button className="emoji-btn flex flex-col items-center gap-2 text-5xl text-gray-400 hover:text-green-400">
        <span>😄</span>
        <span className="text-sm font-medium">Very Happy</span>
      </button>
    </div>
    <textarea className="w-full rounded-xl border-gray-200 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] p-4 text-base text-[var(--text-primary)] placeholder:text-gray-400 min-h-[120px] transition-shadow duration-200" placeholder="Add a note about your day..."></textarea>
    <div className="text-right mt-4">
      <button className="bg-[var(--primary-color)] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)] focus:ring-opacity-50">
        Save Mood
      </button>
    </div>
  </section>
);

export default MoodTracker;