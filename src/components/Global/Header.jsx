import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div id="Header_2" className="container mx-auto px-4 py-3">
        <div id="Header_3" className="flex items-center justify-between">
          {/* Logo */}
          <div id="Header_4" className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img id="Header_5" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full hover:opacity-80 transition-opacity" />
              <span id="Header_6" className="text-white text-2xl font-bold hover:text-gray-200">YourLogo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav id="Header_7" className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${location.pathname === '/' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-200 transition-colors font-semibold`}
            >
              Home
            </Link>
          </nav>

          {/* Search Bar */}
          <div id="Header_8" className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                id="Header_9"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-48"
              />
              <button
                id="Header_10"
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-200"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Header_11"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-200 focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="Header_12" className="md:hidden mt-4 pb-4">
            <Link
              to="/"
              className={`block py-2 text-center ${location.pathname === '/' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <form onSubmit={handleSearch} className="mt-4">
              <input
                id="Header_13"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </form>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;