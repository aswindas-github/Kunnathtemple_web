import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Temple Address",
      details: [
        "Kunnath Sree Bhagavathi Kshethram",
        "Kunnath Village",
        "Kerala, India"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "Temple Office: +91 9876543210",
        "Priest: +91 8765432109",
        "Emergency: +91 7654321098"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Temple Timings",
      details: [
        "Morning: 5:00 AM - 12:00 PM",
        "Evening: 4:00 PM - 9:00 PM",
        "Special Events: As announced"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Email",
      details: [
        "info@kunnathtemple.org",
        "events@kunnathtemple.org",
        "donations@kunnathtemple.org"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Visit Our Temple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We welcome all devotees with open hearts. Feel free to reach out for any 
            inquiries about services, events, or spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-12 space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Actions
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
              </div>
            </div>
          </div>

          {/* Map and Location */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Find Us
            </h3>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-96 mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">
                  Interactive Map
                </p>
                <p className="text-gray-400 text-sm">
                  Kunnath Sree Bhagavathi Kshethram
                </p>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                How to Reach
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Located in the heart of Kunnath village</li>
                <li>• Easily accessible by private and public transport</li>
                <li>• Parking available for devotees</li>
                <li>• Wheelchair accessible entrance</li>
                <li>• Public restrooms and drinking water available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;