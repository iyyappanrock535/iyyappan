
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face"
              alt="Iyyappan Sivakumar"
              className="w-48 h-48 rounded-full mx-auto shadow-2xl border-8 border-white hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Iyyappan Sivakumar
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in">
            Full Stack Developer
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Passionate Full Stack Developer with <span className="font-semibold text-blue-600">6 years of experience</span> 
            in creating exceptional web and mobile applications using modern technologies like React Native, React.js, Vue.js, and Node.js.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Learn More About Me
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
