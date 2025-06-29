
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Coding workspace"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Digital Experiences
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With <span className="font-semibold text-blue-600">6 years of dedicated experience</span> in the tech industry, 
              I specialize in building robust, scalable applications that solve real-world problems. I have successfully completed 
              <span className="font-semibold text-purple-600"> 28 projects in React.js and React Native CLI</span>, 
              ranging from complex mobile applications to dynamic web platforms.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My journey has taken me through the full spectrum of development, from front-end user interfaces to back-end architectures. 
              I'm passionate about staying at the forefront of technology, continuously learning and adapting to new frameworks 
              and methodologies. My goal is to create digital solutions that not only meet technical requirements but also 
              provide exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
                <div className="text-gray-600">Completed Projects</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <div className="text-gray-600">Udemy Certificates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
