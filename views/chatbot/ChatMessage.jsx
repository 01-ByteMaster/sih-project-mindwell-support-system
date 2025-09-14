// src/components/ChatMessage.jsx

import React, { useState } from 'react';
import Copy from '../../src/assets/copy.svg';
import Like from '../../src/assets/like.svg';
import Dislike from '../../src/assets/dislike.svg';

const ChatMessage = ({ author, profilePic, text, isBot, actions }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [needsImprovement, setNeedsImprovement] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleNeedsImprovement = () => {
    setNeedsImprovement(!needsImprovement);
  };

  return (
    <div className={`flex items-start gap-3 p-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0" style={{ backgroundImage: `url("${profilePic}")` }}></div>
      )}
      <div className={`flex flex-col gap-1.5 ${isBot ? 'items-start' : 'items-end'}`}>
        <p className="text-[var(--text-secondary)] text-sm font-medium">{author}</p>
        <div className={`max-w-md rounded-xl px-4 py-3 border border-gray-300 ${isBot ? 'rounded-tl-none chat-message-bot' : 'rounded-tr-none'}`} style={!isBot ? { backgroundColor: '#7F00FF', color: 'white' } : {}}>
          <p className="text-base leading-relaxed">
            {text}
          </p>
          {isBot && (
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
              <button 
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800 transition-colors"
                title="Copy message"
              >
                <img src={Copy} alt="Copy" className="w-4 h-4" />
                Copy
              </button>
              <button 
                onClick={handleLike}
                className={`flex items-center gap-1 text-xs transition-colors ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                title="Like message"
              >
                <img src={Like} alt="Like" className="w-4 h-4" />
                Like
              </button>
              <button 
                onClick={handleNeedsImprovement}
                className={`flex items-center gap-1 text-xs transition-colors ${needsImprovement ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
                title="Needs improvement"
              >
                <img src={Dislike} alt="Needs Improvement" className="w-4 h-4" />
                Needs Improvement
              </button>
            </div>
          )}
        </div>
        {actions && (
          <div className="mt-2 p-3 border border-gray-200 rounded-lg bg-white">
            {actions}
          </div>
        )}
      </div>
      {!isBot && (
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0" style={{ backgroundImage: `url("${profilePic}")` }}></div>
      )}
    </div>
  );
};

export default ChatMessage;