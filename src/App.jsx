
// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Import your new page components
import BookingPage from './pages/BookingPage.jsx';
import PeerSupportPage from './pages/PeerSupportPage.jsx';
import ChatbotPage from './pages/ChatbotPage.jsx';
import MoodTracker from './pages/MoodTracker.jsx';
import ResourceHub from './pages/ResourceHub.jsx';
import LandingPage from './pages/Landing.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Components outside <Routes> like Header and Footer will show on EVERY page. */}
      <Routes>
        {/* Route 1: The Home Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route 2: The Booking Page */}
        <Route path="/booking" element={<BookingPage />} />

        {/* Route 3: The Peer Support Page */}
        <Route path="/peer-support" element={<PeerSupportPage />} />
        
        {/* Route 4: The Chatbot Page */}
        <Route path="/chatbot" element={<ChatbotPage />} />

        {/* Route 5: The Mood Tracker */}
        <Route path="/mood-tracker" element={<MoodTracker />} />
        
        {/* Route 6: The Resource Hub */}
        <Route path="/resources" element={<ResourceHub />}/>

        {/* You can add more routes for other pages here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;