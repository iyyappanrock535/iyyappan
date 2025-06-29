
import React, { useState } from 'react';
import { ExternalLink, Smartphone, Globe, Code, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "NOQ Self-Checkout Store",
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      shortDescription: "Comprehensive self-checkout mobile application with payment gateway integration and cross-platform compatibility.",
      fullDescription: "A comprehensive self-checkout mobile application with payment gateway integration and cross-platform compatibility.",
      features: [
        "UI Implementation: Converted Figma designs into clean, responsive React Native UI with pixel-perfect design",
        "API Integration: Integrated REST APIs for authentication, user data, and dynamic content with robust error handling",
        "Payment Gateway: Integrated multiple payment gateways (Stripe, Razorpay, Paytm) with secure transactions",
        "End-to-End Development: Complete navigation, state management, and platform-specific optimizations"
      ],
      technologies: ["React Native", "Redux", "Payment Gateways", "REST APIs", "Figma to Code"],
      category: "E-commerce"
    },
    {
      id: 2,
      title: "SurfConnect App",
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=400&fit=crop",
      shortDescription: "Real-time surf monitoring app with HD cameras and weather forecasting for water sports enthusiasts.",
      fullDescription: "Surf Connect allows you to assess sea conditions in real time without being on the beach. Features monitoring cameras at main surfing points for all sea sports.",
      features: [
        "Real-time sea condition monitoring without being on the beach",
        "HD monitoring cameras at main surfing, kite surfing, SUP, and bodyboarding spots",
        "Wave and wind forecasting for each beach location",
        "Strategic camera positioning to assess true wave size and conditions",
        "Multi-sport compatibility for surfing, windsurfing, and other water sports"
      ],
      technologies: ["React Native", "Real-time Streaming", "Weather APIs", "Camera Integration", "Geolocation"],
      category: "Sports & Recreation"
    },
    {
      id: 3,
      title: "GoldPe",
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop",
      shortDescription: "Save in Gold, Spend in Cash - Turn your savings into digital gold that grows with time.",
      fullDescription: "Turn your savings into digital gold that grows with time. Convert to physical gold or withdraw cash instantly when you need it.",
      features: [
        "Digital gold savings platform",
        "Real-time gold price tracking",
        "Instant cash withdrawal functionality",
        "Physical gold conversion options",
        "Secure transaction processing"
      ],
      technologies: ["React Native", "Payment Integration", "Real-time APIs", "Security Features"],
      category: "FinTech"
    },
    {
      id: 4,
      title: "Raha Store",
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop",
      shortDescription: "Versatile e-commerce and grocery application with user-friendly interface and wide product range.",
      fullDescription: "Raha Store is a versatile e-commerce and grocery application designed to streamline your shopping experience. With a user-friendly interface and a wide range of products, Raha Store empowers users to conveniently shop for groceries and other essentials from the comfort of their own homes.",
      features: [
        "Comprehensive grocery shopping platform",
        "Wide range of product categories",
        "User-friendly interface design",
        "Home delivery functionality",
        "Order tracking and management"
      ],
      technologies: ["React Native", "E-commerce APIs", "Payment Gateway", "Location Services"],
      category: "E-commerce"
    },
    {
      id: 5,
      title: "Yaadien",
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=600&h=400&fit=crop",
      shortDescription: "Social dating application with modern matching algorithms and user-friendly interface.",
      fullDescription: "A modern social dating application similar to popular dating platforms, featuring advanced matching algorithms and intuitive user experience.",
      features: [
        "Advanced matching algorithms",
        "User profile creation and management",
        "Real-time messaging system",
        "Location-based matching",
        "Privacy and security features"
      ],
      technologies: ["React Native", "Real-time Chat", "Geolocation", "Push Notifications"],
      category: "Social"
    },
    {
      id: 6,
      title: "Lucky 7 Royale Poker",
      type: "Mobile Game",
      icon: <Code className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop",
      shortDescription: "Interactive poker game application with multiplayer functionality and engaging gameplay.",
      fullDescription: "An interactive poker game application featuring multiplayer functionality, real-time gameplay, and engaging user experience.",
      features: [
        "Multiplayer poker gameplay",
        "Real-time game mechanics",
        "Interactive user interface",
        "Score tracking and leaderboards",
        "Social gaming features"
      ],
      technologies: ["React Native", "Game Logic", "Real-time Multiplayer", "Animation Libraries"],
      category: "Gaming"
    },
    {
      id: 7,
      title: "Sixty Plus",
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      shortDescription: "Elder care service platform connecting families with professional caregivers in Tamil Nadu.",
      fullDescription: "We will be your extended hand in Tamil Nadu, to take care of your ageing parents. Feel confident your parents are well-cared for at home, enjoying their independence and dignity. All this without them needing to move out of their home and neighbourhood to some remote care home.",
      features: [
        "Professional caregiver network",
        "In-home care services",
        "Family monitoring dashboard",
        "Emergency response system",
        "Health tracking and reports"
      ],
      technologies: ["React Native", "Healthcare APIs", "Location Services", "Emergency Systems"],
      category: "Healthcare"
    },
    {
      id: 8,
      title: "Adhiban Nidhi",
      type: "Web & Mobile App",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      shortDescription: "Comprehensive financial services platform offering strategic consulting and diverse financial products.",
      fullDescription: "Adhiban is a Reliable Financial Services company in Coimbatore, India offering strategic financial consulting services. We address a fundamental problem of every customer to attain financial independence through our diverse, tailor-made financial products and services.",
      features: [
        "Strategic financial consulting",
        "Project finance and business loans",
        "NRI investment services",
        "Company secretary services",
        "Chit fund management"
      ],
      technologies: ["React.js", "React Native", "Financial APIs", "Security Systems"],
      category: "FinTech"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Showcasing 8 of my 28 completed projects across React.js and React Native applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                      {project.icon}
                      <span className="text-sm font-medium text-gray-700">{project.type}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-white">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Click to view details</span>
                      <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent flex items-end p-6 transition-all duration-300">
                      <div className="text-white">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="text-sm space-y-1">
                          {project.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-1 h-1 bg-white rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
                      {project.icon}
                      <span className="text-sm font-medium">{project.type}</span>
                    </div>
                    <div className="bg-blue-100 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-blue-700">{project.category}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more projects?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              I have completed <span className="font-semibold text-blue-600">28 projects in total</span> across React.js and React Native CLI. 
              The above showcases 8 of my most impactful applications. Let's discuss how I can help bring your next project to life.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Contact Me</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
