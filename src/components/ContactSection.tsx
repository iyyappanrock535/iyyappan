
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how my expertise can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities, whether it's a freelance project, 
              full-time position, or collaboration. Feel free to reach out if you'd like to discuss:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                Web & Mobile Application Development
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                Full Stack Development Projects
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                Technical Consulting & Code Review
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                Team Collaboration & Mentoring
              </li>
            </ul>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Response Time</h4>
              <p className="text-gray-600">
                I typically respond to inquiries within 24 hours. Let's start a conversation about your project!
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
