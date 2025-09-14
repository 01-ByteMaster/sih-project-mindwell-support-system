// src/components/PostReactions.jsx

import React from 'react';
import LikeIcon from '../../src/assets/like.svg';
import SmileIcon from '../../src/assets/smile.svg';
import CommentIcon from '../../src/assets/comment.svg';

const PostReactions = ({ likes, smiles, comments }) => (
  <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4">
    <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-[#ea2a33] transition-colors p-1">
      <img src={LikeIcon} alt="Like" className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="text-xs sm:text-sm font-medium">{likes}</span>
    </button>
    <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-[#ea2a33] transition-colors p-1">
      <img src={SmileIcon} alt="Smile" className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="text-xs sm:text-sm font-medium">{smiles}</span>
    </button>
    <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-[#ea2a33] transition-colors p-1">
      <img src={CommentIcon} alt="Comment" className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="text-xs sm:text-sm font-medium">{comments}</span>
    </button>
  </div>
);

export default PostReactions;
