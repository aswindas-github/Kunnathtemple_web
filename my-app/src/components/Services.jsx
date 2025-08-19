import React from 'react';
import { Flame, Flower, Sun, Moon, Gift, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Daily Poojas",
      description: "Morning and evening worship services with traditional rituals",
      timings: "5:30 AM & 6:30 PM"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Special Abhishekam",
      description: "Sacred bathing ceremony for the deity with holy offerings",
      timings: "Fridays 7:00 AM"
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Archana & Offerings",
      description: "Personal prayers and offerings to seek divine blessings",
      timings: "6:00 AM - 8:00 PM"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Festival Celebrations",
      description: "Grand celebrations of Navarathri, Devi festivals, and more",
      timings: "As per calendar"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Wedding Ceremonies",
      description: "Sacred marriage ceremonies blessed by the divine mother",
      timings: "By appointment"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Events",
      description: "Cultural programs, bhajan sessions, and spiritual gatherings",
      timings: "Weekly"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Temple Services & Rituals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer various spiritual services and traditional rituals to help devotees 
            connect with the divine and seek blessings for their well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  {service.timings}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for Services */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Special Services?
            </h3>
            <p className="text-gray-600 mb-6">
              For special poojas, ceremonies, or personal consultations, please contact our temple office.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Contact Temple Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;