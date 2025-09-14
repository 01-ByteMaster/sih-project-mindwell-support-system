// src/App.jsx

import React from 'react';
// import Head from 'next/head';
import Header from '../../views/chatbot/Header.jsx';
import ChatSection from '../../views/chatbot/ChatSection.jsx';
import Sidebar from '../../views/chatbot/Sidebar.jsx';
import Footer from '../../views/chatbot/Footer.jsx';

// Define the custom Tailwind CSS styles as a single string
const tailwindStyles = `
  :root {
    --primary-color: #7c3aed;
    --secondary-color: #f3e8ff;
    --text-primary: #1e1e1e;
    --text-secondary: #5a5a5a;
    --background-light: #faf5ff;
  }
  body {
    font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
    background-color: var(--background-light);
  }
  .chat-message-bot {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
  }
  .chat-message-user {
    background-color: var(--primary-color);
    color: white;
  }
  .btn-primary {
    background-color: var(--primary-color);
    color: white;
  }
  .btn-secondary {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
`;

const ChatbotPage = () => (
  <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden" style={{ backgroundColor: '#F0E7F2' }}>
    {/* <Head>
      <meta charSet="utf-8" />
      <title>MindWell - AI Chatbot</title>
      <link rel="icon" href="data:image/x-icon;base64," type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <style>{tailwindStyles}</style>
    </Head> */}
    <div className="layout-container flex h-full grow flex-col">
      <Header />
      <main className="flex flex-1 justify-center py-4 px-3 sm:py-6 sm:px-4 lg:py-8 lg:px-6">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-4 sm:gap-6 lg:gap-8">
          <div className="flex-1 min-w-0">
            <ChatSection />
          </div>
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
);

export default ChatbotPage;