
import React from 'react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Advanced React Development",
      platform: "Udemy",
      description: "Comprehensive course covering advanced React patterns, hooks, and performance optimization",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop"
    },
    {
      title: "Full Stack JavaScript Development",
      platform: "Udemy", 
      description: "Complete full-stack development course covering Node.js, databases, and modern JavaScript",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certificates & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Continuous learning and professional development through recognized certification programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <img 
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {cert.platform}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for More Projects</h3>
          <p className="text-lg text-gray-600 mb-6">
            I'm always eager to take on new challenges and expand my portfolio with exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
