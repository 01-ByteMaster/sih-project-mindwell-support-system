// src/components/Reply.jsx

import React from 'react';

const Reply = ({ author, time, text, profilePic }) => (
  <div className="flex items-start gap-3">
    <div className="h-8 w-8 rounded-full bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url("${profilePic}")` }}></div>
    <div>
      <div className="flex items-baseline gap-2">
        <p className="font-bold text-sm text-gray-800">{author}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <p className="text-sm text-gray-600 mt-1">{text}</p>
    </div>
  </div>
);

export default Reply;