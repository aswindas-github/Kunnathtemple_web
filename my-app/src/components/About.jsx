import React from 'react';
import { Heart, Star, Users, Calendar } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Divine Blessings",
      description: "Experience the divine grace of Sree Bhagavathi Devi"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Sacred Traditions",
      description: "Preserving ancient rituals and spiritual practices"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Community Unity",
      description: "Bringing families and communities together in faith"
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Festivals & Events",
      description: "Celebrating sacred occasions throughout the year"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our Sacred Temple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kunnath Sree Bhagavathi Kshethram stands as a beacon of spiritual light, 
            connecting generations through devotion, tradition, and divine grace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                A Legacy of Faith
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For generations, our family temple has been a cornerstone of spiritual life, 
                dedicated to the worship of Sree Bhagavathi Devi. The temple serves as a 
                sacred space where devotees find solace, seek blessings, and connect with 
                the divine presence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our temple follows traditional Kerala architectural style and maintains 
                ancient Vedic practices, ensuring the preservation of our rich cultural 
                heritage while welcoming devotees from all walks of life.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3692748/pexels-photo-3692748.jpeg"
                alt="Temple Interior"
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/8828581/pexels-photo-8828581.jpeg"
                alt="Temple Rituals"
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/6436308/pexels-photo-6436308.jpeg"
                alt="Temple Decorations"
                className="rounded-xl shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/8828576/pexels-photo-8828576.jpeg"
                alt="Devotees Praying"
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;