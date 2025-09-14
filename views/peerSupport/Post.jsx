// src/components/Post.jsx

import React from 'react';
import PostReactions from './PostReactions';
import Reply from './Reply';

const Post = ({ post }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <div className="flex items-start gap-4">
      <div className="h-14 w-14 rounded-full bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url("${post.profilePic}")` }}></div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-800">{post.author}</p>
            <p className="text-xs text-gray-500">Posted {post.time}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <span className="material-symbols-outlined">flag</span>
          </button>
        </div>
        <p className="mt-2 text-gray-700">{post.content}</p>
        <PostReactions likes={post.likes} smiles={post.smiles} comments={post.comments} />
      </div>
    </div>
    <div className="mt-6 space-y-4 pl-16 border-l-2 border-gray-100">
      {post.replies.map((reply) => (
        <Reply key={reply.id} {...reply} />
      ))}
    </div>
  </div>
);

export default Post;