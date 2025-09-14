// src/components/ChatInput.jsx

import React from 'react';

const ChatInput = () => (
  <div className="mt-6 border-t border-purple-100 pt-4">
    <div className="flex items-center gap-3 @container">
      <div className="relative flex-1">
        <input className="form-input w-full resize-none overflow-hidden rounded-full text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-purple-300 border-gray-200 bg-gray-50 h-12 placeholder:text-gray-400 px-6 text-base" placeholder="Type your message or select an emoji..." />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button className="flex items-center justify-center p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-100 transition-colors">
            <span className="material-symbols-outlined text-2xl"> sentiment_satisfied </span>
          </button>
          <button className="flex items-center justify-center p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-100 transition-colors">
            <span className="material-symbols-outlined text-2xl"> add_photo_alternate </span>
          </button>
          <button className="flex items-center justify-center p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-100 transition-colors">
            <span className="material-symbols-outlined text-2xl"> mic </span>
          </button>
        </div>
      </div>
      <button className="flex items-center justify-center rounded-full h-12 w-12 btn-primary transition-transform hover:scale-105">
        <span className="material-symbols-outlined text-2xl"> send </span>
      </button>
    </div>
  </div>
);

export default ChatInput;