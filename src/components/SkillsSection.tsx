
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'React Native CLI', color: 'from-blue-500 to-blue-600' },
    { name: 'React.js', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Expo CLI', color: 'from-purple-500 to-purple-600' },
    { name: 'Vue.js', color: 'from-green-500 to-green-600' },
    { name: 'Node.js', color: 'from-yellow-500 to-yellow-600' },
    { name: 'MySQL', color: 'from-orange-500 to-orange-600' },
    { name: 'PostgreSQL', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Database Design', color: 'from-pink-500 to-pink-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Full Stack Development expertise across modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">
                  {skill.name.split(' ')[0].charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop" alt="Frontend" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <h4 className="font-semibold text-gray-800">Frontend</h4>
              <p className="text-sm text-gray-600 mt-2">React, Vue, Mobile</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop" alt="Backend" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <h4 className="font-semibold text-gray-800">Backend</h4>
              <p className="text-sm text-gray-600 mt-2">Node.js, APIs</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop" alt="Database" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <h4 className="font-semibold text-gray-800">Database</h4>
              <p className="text-sm text-gray-600 mt-2">MySQL, PostgreSQL</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop" alt="Mobile" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <h4 className="font-semibold text-gray-800">Mobile</h4>
              <p className="text-sm text-gray-600 mt-2">React Native, Expo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
