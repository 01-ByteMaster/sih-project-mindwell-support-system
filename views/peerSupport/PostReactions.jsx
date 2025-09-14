// src/components/PostReactions.jsx

import React from 'react';

const PostReactions = ({ likes, smiles, comments }) => (
  <div className="mt-4 flex items-center gap-4">
    <button className="flex items-center gap-2 text-gray-500 hover:text-[#ea2a33] transition-colors">
      <span className="material-symbols-outlined text-lg">favorite_border</span>
      <span className="text-sm font-medium">{likes}</span>
    </button>
    <button className="flex items-center gap-2 text-gray-500 hover:text-[#ea2a33] transition-colors">
      <span className="material-symbols-outlined text-lg">sentiment_satisfied</span>
      <span className="text-sm font-medium">{smiles}</span>
    </button>
    <button className="flex items-center gap-2 text-gray-500 hover:text-[#ea2a33] transition-colors">
      <span className="material-symbols-outlined text-lg">chat_bubble_outline</span>
      <span className="text-sm font-medium">{comments}</span>
    </button>
  </div>
);

export default PostReactions;
