import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🕉️</span>
              <div>
                <h3 className="text-2xl font-bold text-orange-400">
                  Kunnath Sree Bhagavathi
                </h3>
                <p className="text-lg text-gray-300">Kshethram</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              A sacred family temple dedicated to Sree Bhagavathi Devi, serving the 
              spiritual needs of devotees with traditional rituals, festivals, and 
              divine blessings for generations.
            </p>
            <div className="flex items-center gap-2 text-orange-400">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Spreading Divine Love & Blessings</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-orange-400 transition-colors">
                About Temple
              </a>
              <a href="#services" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Services & Rituals
              </a>
              <a href="#events" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Events & Festivals
              </a>
              <a href="#gallery" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Photo Gallery
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Kunnath Village</p>
                  <p>Kerala, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">+91 9876543210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">info@kunnathtemple.org</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>5:00 AM - 12:00 PM</p>
                  <p>4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Kunnath Sree Bhagavathi Kshethram. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> for divine service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;