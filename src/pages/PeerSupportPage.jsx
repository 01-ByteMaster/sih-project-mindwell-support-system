// src/App.jsx

import React from 'react';
// import Head from 'next/head';
import Header from '../../views/peerSupport/Header.jsx';
import MainContent from '../../views/peerSupport/MainContent.jsx';
import Footer from '../../views/peerSupport/Footer.jsx';

// Define the custom tailwind styles as a single string
const tailwindStyles = `
  :root {
    --c-primary: #F3E8EC;
    --c-secondary: #F9F5F6;
    --c-text-primary: #1F2937;
    --c-text-secondary: #6B7280;
    --c-border: #E5E7EB;
  }
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--c-secondary);
  }
  .calming-gradient {
    background: linear-gradient(180deg, #F3E8EC 0%, #F9F5F6 100%);
  }
`;

const PeerSupportPage = () => (
  <div className="flex min-h-screen flex-col text-gray-800 overflow-x-hidden">
    {/* <Head>
      <meta charSet="utf-8" />
      <title>MindWell - Anonymous Peer Support Forum</title>
      <link href="data:image/x-icon;base64," rel="icon" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <style>{tailwindStyles}</style>
    </Head> */}
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default PeerSupportPage;