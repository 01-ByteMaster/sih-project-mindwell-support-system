// src/components/Reply.jsx

import React from 'react';

const Reply = ({ author, time, text, profilePic }) => (
  <div className="flex items-start gap-2 sm:gap-3">
    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url("${profilePic}")` }}></div>
    <div className="min-w-0 flex-1">
      <div className="flex items-baseline gap-2 flex-wrap">
        <p className="font-bold text-xs sm:text-sm text-gray-800 truncate">{author}</p>
        <p className="text-xs text-gray-500 flex-shrink-0">{time}</p>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed break-words">{text}</p>
    </div>
  </div>
);

export default Reply;