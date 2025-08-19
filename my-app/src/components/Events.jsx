import React from 'react';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Navarathri Festival",
      date: "October 15-23, 2024",
      time: "6:00 AM - 9:00 PM",
      description: "Nine-day celebration honoring Goddess Durga with special poojas, cultural programs, and devotional activities.",
      image: "https://images.pexels.com/photos/7879443/pexels-photo-7879443.jpeg",
      featured: true
    },
    {
      title: "Monthly Bhajan Session",
      date: "Every 2nd Saturday",
      time: "7:00 PM - 9:00 PM",
      description: "Community gathering for devotional singing and spiritual discourse.",
      image: "https://images.pexels.com/photos/8828576/pexels-photo-8828576.jpeg",
      featured: false
    },
    {
      title: "Devi Pooja",
      date: "Every Friday",
      time: "7:00 AM",
      description: "Special abhishekam and archana dedicated to Sree Bhagavathi Devi.",
      image: "https://images.pexels.com/photos/3692748/pexels-photo-3692748.jpeg",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Annual Temple Festival",
      date: "March 2024",
      description: "Grand celebration with traditional music, dance, and community feast."
    },
    {
      title: "Saraswathi Pooja",
      date: "February 2024",
      description: "Special worship dedicated to Goddess Saraswathi for knowledge and wisdom."
    },
    {
      title: "New Year Celebration",
      date: "January 2024",
      description: "Welcomed the new year with special prayers and blessings."
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Events & Festivals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in celebrating sacred festivals and spiritual gatherings that bring 
            our community together in devotion and joy.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Upcoming Events
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  event.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`w-full object-cover ${
                      event.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  {event.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {event.title}
                  </h4>
                  
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Recent Celebrations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {event.title}
                </h4>
                <p className="text-orange-600 font-medium text-sm mb-3">
                  {event.date}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated on Temple Events
            </h3>
            <p className="mb-6 opacity-90">
              Follow our temple activities and never miss a celebration or spiritual gathering.
            </p>
            <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;