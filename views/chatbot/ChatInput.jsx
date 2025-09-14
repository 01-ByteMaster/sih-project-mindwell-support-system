// src/components/ChatInput.jsx

import React from 'react';
import SentimentSatisfied from '../../src/assets/sentiment-satisfied.svg';
import AddImage from '../../src/assets/add-image.svg';
import Mic from '../../src/assets/mic.svg';
import Message from '../../src/assets/message.svg';

const ChatInput = () => (
  <div className="mt-6 border-t border-purple-100 pt-4">
    <div className="flex items-center gap-3 @container">
      <div className="relative flex-1">
        <input className="form-input w-full resize-none overflow-hidden rounded-full text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-purple-300 border-gray-200 bg-gray-50 h-12 placeholder:text-gray-400 px-6 text-base" placeholder="Type your message or select an emoji..." />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button 
            className="flex items-center justify-center p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-100 transition-colors"
            title="Sentiments Satisfied"
          >
            <img src={SentimentSatisfied} alt="Emoji" className="w-6 h-6" />
          </button>
          <button 
            className="flex items-center justify-center p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-100 transition-colors"
            title="Add Image"
          >
            <img src={AddImage} alt="Add Image" className="w-6 h-6" />
          </button>
          <button 
            className="flex items-center justify-center p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-100 transition-colors"
            title="Voice Input"
          >
            <img src={Mic} alt="Microphone" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <button 
        className="flex items-center justify-center rounded-full h-12 w-12 btn-primary transition-transform hover:scale-105"
        title="Send Message"
      >
        <img src={Message} alt="Send" className="w-6 h-6" />
      </button>
    </div>
  </div>
);

export default ChatInput;