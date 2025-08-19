import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Daily: 5:00 AM - 12:00 PM | 4:00 PM - 9:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kunnath, Kerala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Title */}
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600">
                <span className="text-red-600">🕉️</span> Kunnath Sree Bhagavathi
                <div className="text-lg md:text-xl text-gray-700 font-medium">Kshethram</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Services</a>
              <a href="#events" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Events</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-orange-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors" onClick={toggleMenu}>About</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#events" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors" onClick={toggleMenu}>Events</a>
              <a href="#gallery" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors" onClick={toggleMenu}>Gallery</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors" onClick={toggleMenu}>Contact</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;