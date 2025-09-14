// src/App.jsx

import React from 'react';
//import Head from 'next/head';
import Sidebar from '../../views/moodtracker/Sidebar';
import MainContent from '../../views/moodtracker/MainContent';
import Footer from '../../views/moodtracker/Footer';

const customStyles = `
  :root {
    --primary-color: #F7C8D0;
    --secondary-color: #A6D6D6;
    --background-color: #FAF5F6;
    --text-primary: #333333;
    --text-secondary: #757575;
  }
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .emoji-btn {
    transition: transform 0.2s ease-in-out;
  }
  .emoji-btn:hover {
    transform: scale(1.1);
  }
  .emoji-btn.selected {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;

const MoodTracker = () => (
  <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden bg-transparent">
    {/* <Head>
      <meta charSet="utf-8" />
      <title>Stitch Design</title>
      <link rel="icon" href="data:image/x-icon;base64," type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
      <link as="style" href="https://fonts.googleapis.com/css2?display=swap&family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Inter:wght@400;500;700" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <style>{customStyles}</style>
    </Head> */}
    <div className="layout-container flex h-full grow flex-col">
      <main className="flex flex-1">
        <Sidebar />
        <MainContent />
      </main>
      <Footer />
    </div>
  </div>
);

export default MoodTracker;