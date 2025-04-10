import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">
              StretchCeilings
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600">Gallery</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Gallery</a>
              <a href="#reviews" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Reviews</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</a>
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;