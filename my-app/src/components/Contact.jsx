import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "ക്ഷേത്ര വിലാസം",
      details: [
        "കുന്നത്ത് ശ്രീഭഗവതി ക്ഷേത്രം",
        "കുന്നത്ത് ഗ്രാമം",
        "കേരളം, ഇന്ത്യ"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "ഫോൺ നമ്പറുകൾ",
      details: [
        "ക്ഷേത്രം ഓഫീസ്: +91 9876543210",
        "പുരോഹിതൻ: +91 8765432109",
        "അടിയന്തരാവസ്ഥ: +91 7654321098"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ക്ഷേത്ര സമയക്രമം",
      details: [
        "രാവിലെ: 5:00 AM - 12:00 PM",
        "വൈകുന്നേരം: 4:00 PM - 9:00 PM",
        "പ്രത്യേക ഇവൻ്റുകൾ: പ്രഖ്യാപിച്ചത് പോലെ"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "ബന്ധപ്പെടാനുള്ള ഇമെയിൽ",
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
            നമ്മുടെ ക്ഷേത്രം സന്ദർശിക്കുക
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            എല്ലാ ഭക്തരെയും തുറന്ന മനസ്സോടെ ഞങ്ങൾ സ്വാഗതം ചെയ്യുന്നു. സേവനങ്ങൾ, പരിപാടികൾ, ആത്മീയ മാർഗനിർദേശങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള ഏതൊരു അന്വേഷണത്തിനും ബന്ധപ്പെടാൻ മടിക്കേണ്ട.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ
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
                ദ്രുത പ്രവർത്തനങ്ങൾ
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Navigation className="w-4 h-4" />
                  ദിശകൾ നേടുക
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
                  <Phone className="w-4 h-4" />
                  ഇപ്പോൾ വിളിക്കൂ
                </button>
              </div>
            </div>
          </div>

          {/* Map and Location */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              ഞങ്ങളെ കണ്ടെത്തുക
            </h3>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-96 mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">
                  സംവേദനാത്മക മാപ്പ്
                </p>
                <p className="text-gray-400 text-sm">
                  കുന്നത്ത് ശ്രീഭഗവതി ക്ഷേത്രം
                </p>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                എങ്ങനെ എത്തിച്ചേരാം
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• കുന്നത്ത് ഗ്രാമത്തിന്റെ ഹൃദയഭാഗത്ത് സ്ഥിതിചെയ്യുന്നു</li>
                <li>• സ്വകാര്യ, പൊതുഗതാഗതമാർഗ്ഗങ്ങളിൽ എളുപ്പത്തിൽ എത്തിച്ചേരാം</li>
                <li>• ഭക്തർക്ക് പാർക്കിംഗ് സൗകര്യം</li>
                <li>• വീൽചെയറിൽ പ്രവേശിക്കാവുന്ന പ്രവേശന കവാടം</li>
                <li>• പൊതു ശൗചാലയങ്ങളും കുടിവെള്ളവും ലഭ്യമാണ്</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;