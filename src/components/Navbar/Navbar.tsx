import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('publications');

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Zhang Daqing Lab
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/publications"
              className={`text-white hover:text-blue-400 transition-colors ${
                activeTab === 'publications' ? 'text-blue-400' : ''
              }`}
              onClick={() => setActiveTab('publications')}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                学术成果
              </motion.div>
            </Link>
            <Link
              to="/announcements"
              className={`text-white hover:text-blue-400 transition-colors ${
                activeTab === 'announcements' ? 'text-blue-400' : ''
              }`}
              onClick={() => setActiveTab('announcements')}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                通知公告
              </motion.div>
            </Link>
            <Link
              to="/stats"
              className={`text-white hover:text-blue-400 transition-colors ${
                activeTab === 'stats' ? 'text-blue-400' : ''
              }`}
              onClick={() => setActiveTab('stats')}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                其他
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 