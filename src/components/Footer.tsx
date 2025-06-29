
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Iyyappan Sivakumar
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies and best practices.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• React Native & Expo Development</li>
              <li>• React.js & Vue.js Applications</li>
              <li>• Node.js Backend Development</li>
              <li>• Database Design & Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-gray-400 mb-4">
              Let's discuss your next project and how we can work together to bring your ideas to life.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Iyyappan Sivakumar. Crafted with passion for exceptional development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
