
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ExternalLink } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "So K.",
      username: "vw7401283vw",
      location: "Tseung Kwan O, Hong Kong",
      flag: "🇭🇰",
      title: "Reactjs Project work",
      review: "Very professional and fast, highly recommended, great thanks! This is the third time hire iyyappanrock, great thanks for your help! Highly recommended for React native issues.",
      rating: 5
    },
    {
      name: "Jasper C.",
      username: "codingjasper",
      location: "Zwolle, Netherlands",
      flag: "🇳🇱",
      title: "Expo React Native add API endpoint to SectionList",
      review: "Very quick and good work. Truly swift response and amazing result it was nice to corporate with Iyyappan.",
      rating: 5
    },
    {
      name: "Matthew M.",
      username: "Pattilient",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      title: "Modify React Native project",
      review: "Fantastic work. Very detailed and very thorough. Kept working hard until the problem was solved. Excellent work. Made sure to fix every issue when found and did revisions until the project was perfect.",
      rating: 5
    },
    {
      name: "Vignesh P.",
      username: "doersvignesh",
      location: "Coimbatore, India",
      flag: "🇮🇳",
      title: "Bug fixing and Few Enhancements in React Native App",
      review: "He is very knowledgeable and quick turn around. I didn't have any communication gap and the deliveries were on time. Very honest about the quote and understanding the requirement is very appreciable. I can vouch that any one can hire him without any doubts.",
      rating: 5
    },
    {
      name: "Bai T.",
      username: "bairavip20",
      location: "Colombo, Sri Lanka",
      flag: "🇱🇰",
      title: "Fix the Google Sign-in Feature in my Nodejs/Reactjs website",
      review: "Excellent skills to work with! We are discussing new project with him now!",
      rating: 5
    },
    {
      name: "Horita D.",
      username: "cleanlake",
      location: "InukamiGun Tagacho, Japan",
      flag: "🇯🇵",
      title: "[URGENT!!!] Using connect-es in React Native app",
      review: "I was able to fix an issue on my React Native app by his help. I appreciate his problem solving skill. Thank you, Iyyappan.",
      rating: 5
    },
    {
      name: "Stelios A.",
      username: "steliscript",
      location: "Paphos, Cyprus",
      flag: "🇨🇾",
      title: "Upgrade expo sdk 40.0.0 to 48.0.0 and re-build apk",
      review: "S. Iyyappan has resolved all the issues I had with the dependency conflicts of the application. He put a great amount of effort into making sure he delivers a fully functional app. Happy with the results.",
      rating: 5
    },
    {
      name: "Alain R.",
      username: "ark2784",
      location: "Tulum, Mexico",
      flag: "🇲🇽",
      title: "React Native Expo App Real Estate",
      review: "Everything was perfect! Iyyapan did a great work and all implementations are working well!!! For sure best election for the project!",
      rating: 5
    },
    {
      name: "Lauro S.",
      username: "las1485",
      location: "Rio de Janeiro, Brazil",
      flag: "🇧🇷",
      title: "Change video player in React Native Project in IOS",
      review: "S. Iyyappan did a very good job delivering everything we need for the task. Also he was very polite and fast to respond. Will hire again.",
      rating: 5
    },
    {
      name: "Sathish Kumar V.",
      username: "sathishkv2024",
      location: "Cumming, United States",
      flag: "🇺🇸",
      title: "Expertise Wanted: React JS, Redux, MUI & Axios",
      review: "Iyyappan professionalism, expertise, and dedication to meeting deadlines exceeded my expectations. He delivered high-quality work that perfectly matched our project requirements.",
      rating: 5
    },
    {
      name: "Phan P.",
      username: "sangpdev94",
      location: "Phong Dien, Vietnam",
      flag: "🇻🇳",
      title: "React Native Expert to work on existing codebase",
      review: "I assigned this task to ten developers, but it was iyyappanrock0 who successfully completed it. I truly appreciate his exceptional skills and dedication. He has proven to be an outstanding developer.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by clients worldwide with <span className="font-bold text-blue-600">42 successful projects</span> on Freelancer.com
          </p>
          <div className="mt-6 flex justify-center items-center space-x-4">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="ml-2 text-sm font-semibold text-gray-700">5.0 Rating</span>
            </div>
            <a 
              href="https://www.freelancer.in/u/iyyappanrock0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Profile
            </a>
          </div>
        </div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-blue-500 opacity-20 absolute top-4 right-4" />
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">@{testimonial.username}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <span className="text-lg mr-2">{testimonial.flag}</span>
                        <span className="text-sm text-gray-600">{testimonial.location}</span>
                      </div>

                      <div className="flex items-center mb-3">
                        {renderStars(testimonial.rating)}
                      </div>

                      <h5 className="font-semibold text-gray-800 mb-3 text-sm">
                        {testimonial.title}
                      </h5>

                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        "{testimonial.review}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-8" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-8" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6">
              Join these satisfied clients and let's build something amazing together!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
