// src/components/Post.jsx

import React from 'react';
import PostReactions from './PostReactions';
import Reply from './Reply';
import FlagIcon from '../../src/assets/flag.svg';

const Post = ({ post }) => (
  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url("${post.profilePic}")` }}></div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start sm:items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="font-bold text-gray-800 text-sm sm:text-base truncate">{post.author}</p>
            <p className="text-xs text-gray-500">Posted {post.time}</p>
          </div>
          <button className="text-gray-400 hover:text-black flex-shrink-0 p-1 transition-colors">
            <img src={FlagIcon} alt="Flag" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed break-words">{post.content}</p>
        <PostReactions likes={post.likes} smiles={post.smiles} comments={post.comments} />
      </div>
    </div>
    <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 pl-8 sm:pl-12 lg:pl-16 border-l-2 border-gray-100">
      {post.replies.map((reply) => (
        <Reply key={reply.id} {...reply} />
      ))}
    </div>
  </div>
);

export default Post;