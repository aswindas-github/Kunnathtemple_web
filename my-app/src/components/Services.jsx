import React from 'react';
import { Flame, Flower, Sun, Moon, Gift, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "നിത്യപൂജകൾ",
      description: "പരമ്പരാഗത ആചാരങ്ങളോടെ രാവിലെയും വൈകുന്നേരവും ആരാധനാ ചടങ്ങുകൾ.",
      timings: "5:30 AM & 6:30 PM"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "പ്രത്യേക അഭിഷേകം",
      description: "ദേവതയ്ക്ക് പുണ്യസ്നാന ചടങ്ങ്, വിശുദ്ധ വഴിപാടുകൾ എന്നിവയോടെ.",
      timings: "വെള്ളിയാഴ്ചകൾ 7:00 AM"
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: "അർച്ചനയും വഴിപാടുകളും",
      description: "ദൈവാനുഗ്രഹം തേടുന്നതിനായി വ്യക്തിപരമായ പ്രാർത്ഥനകളും വഴിപാടുകളും",
      timings: "6:00 AM - 8:00 PM"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "ഉത്സവ ആഘോഷങ്ങൾ",
      description: "നവരാത്രി ആഘോഷങ്ങൾ, ദേവീ ഉത്സവങ്ങൾ, മറ്റു പലതും",
      timings: "കലണ്ടർ പ്രകാരം"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "വിവാഹ ചടങ്ങുകൾ",
      description: "ദിവ്യമാതാവ് അനുഗ്രഹിച്ച പവിത്രമായ വിവാഹ ചടങ്ങുകൾ",
      timings: "നിയമനം വഴി"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "കമ്മ്യൂണിറ്റി ഇവൻ്റുകൾ",
      description: "സാംസ്കാരിക പരിപാടികൾ, ഭജന സെഷനുകൾ, ആത്മീയ ഒത്തുചേരലുകൾ",
      timings: "പ്രതിവാരം"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ക്ഷേത്ര സേവനങ്ങളും ആചാരങ്ങളും
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ഭക്തർക്ക് ദൈവവുമായി ബന്ധപ്പെടാനും അവരുടെ ക്ഷേമത്തിനായി അനുഗ്രഹം തേടാനും സഹായിക്കുന്നതിനായി ഞങ്ങൾ വിവിധ ആത്മീയ സേവനങ്ങളും പരമ്പരാഗത ആചാരങ്ങളും വാഗ്ദാനം ചെയ്യുന്നു.
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
              പ്രത്യേക സേവനങ്ങൾ ആവശ്യമുണ്ടോ?
            </h3>
            <p className="text-gray-600 mb-6">
              പ്രത്യേക പൂജകൾ, ചടങ്ങുകൾ, അല്ലെങ്കിൽ വ്യക്തിപരമായ കൂടിയാലോചനകൾ എന്നിവയ്ക്കായി, ദയവായി ഞങ്ങളുടെ ക്ഷേത്ര ഓഫീസുമായി ബന്ധപ്പെടുക.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              ക്ഷേത്ര ഓഫീസുമായി ബന്ധപ്പെടുക
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;