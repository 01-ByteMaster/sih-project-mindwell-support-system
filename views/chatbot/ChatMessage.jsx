// src/components/ChatMessage.jsx

import React from 'react';

const ChatMessage = ({ author, profilePic, text, isBot, actions }) => (
  <div className={`flex items-start gap-3 p-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
    {isBot && (
      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0" style={{ backgroundImage: `url("${profilePic}")` }}></div>
    )}
    <div className={`flex flex-col gap-1.5 ${isBot ? 'items-start' : 'items-end'}`}>
      <p className="text-[var(--text-secondary)] text-sm font-medium">{author}</p>
      <p className={`text-base leading-relaxed flex max-w-md rounded-xl px-4 py-3 ${isBot ? 'rounded-tl-none chat-message-bot' : 'rounded-tr-none chat-message-user'}`}>
        {text}
      </p>
      {actions}
    </div>
    {!isBot && (
      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0" style={{ backgroundImage: `url("${profilePic}")` }}></div>
    )}
  </div>
);

export default ChatMessage;