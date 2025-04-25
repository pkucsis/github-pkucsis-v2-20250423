import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Publications from './components/Publications/Publications';
import Announcements from './components/Announcements/Announcements';
import Stats from './components/Stats/Stats';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Publications />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 