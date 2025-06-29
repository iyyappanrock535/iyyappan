import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Iyyappan Sivakumar
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Projects</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Testimonials</a>
            <a href="#certificates" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Certificates</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Projects</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Testimonials</a>
              <a href="#certificates" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Certificates</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
