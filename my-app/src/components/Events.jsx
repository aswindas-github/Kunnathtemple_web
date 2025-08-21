import React from 'react';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "നവരാത്രി ഉത്സവം",
      date: "ഒക്ടോബർ 15-23, 2024",
      time: "6:00 AM - 9:00 PM",
      description: "പ്രത്യേക പൂജകൾ, സാംസ്കാരിക പരിപാടികൾ, ഭക്തിപരമായ പ്രവർത്തനങ്ങൾ എന്നിവയോടെ ദുർഗ്ഗാ ദേവിയെ ആദരിക്കുന്ന ഒമ്പത് ദിവസത്തെ ആഘോഷം.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrUZ4ibWaBzdii3c0CIHvw4X5xxw2stk_4pOu9P6rUysWJCK-VNrdikPteeZpRjZzDxySfmXKCcxxjDevhc-fPVLhyhM48oIONEFBajaFOTV4cN3lJ3g3tfxwfDp8jzhhFEjwHBLPZ3lPpL=s1360-w1360-h1020-rw",
      featured: true
    },
    {
      title: "പ്രതിമാസ ഭജന സെഷൻ",
      date: "എല്ലാ രണ്ടാമത്തെ ശനിയാഴ്ചയും",
      time: "7:00 PM - 9:00 PM",
      description: "ഭക്തിഗാനത്തിനും ആത്മീയ പ്രഭാഷണത്തിനുമുള്ള സമൂഹ ഒത്തുചേരൽ.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZUFFlPuTnxhYBYXOqcTGkKiLy148wEdAOb8Q7JoJ2lt9K7hAKRGkK2IoeN_R3saMqJE-zNDa0sc6fmxZKDbM3faQSN0LBvg6fXgELZa4ISGkPd57-dO_Lnl8EJbH5IfCXA-o=s1360-w1360-h1020-rw",
      featured: false
    },
    {
      title: "ദേവീ പൂജ",
      date: "എല്ലാ വെള്ളിയാഴ്ചയും",
      time: "7:00 AM",
      description: "ശ്രീഭഗവതി ദേവിക്ക് പ്രത്യേക അഭിഷേകവും അർച്ചനയും.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noGK0jhsb9QsCH-RBn7sidyr5vLWK4ZeVIIhp36dZZO-bCQDQeETFq1pK7XlksJUWXcKTNgjjf2gr7otq-i7gNvO0RG-lqw8ppBsEc4_F_U5l_9Z31OhhPzRKjsHoTiWMBZBQkaKloYaPVC=s1360-w1360-h1020-rw",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "വാർഷിക ക്ഷേത്രോത്സവം",
      date: "മാർച്ച് 2024",
      description: "പരമ്പരാഗത സംഗീതം, നൃത്തം, സമൂഹ വിരുന്ന് എന്നിവയോടുകൂടിയ ഗംഭീരമായ ആഘോഷം."
    },
    {
      title: "സരസ്വതി പൂജ",
      date: "ഫെബ്രുവരി 2024",
      description: "അറിവിനും ജ്ഞാനത്തിനും വേണ്ടി സരസ്വതി ദേവിക്ക് സമർപ്പിച്ചിരിക്കുന്ന പ്രത്യേക ആരാധന."
    },
    {
      title: "പുതുവത്സരാഘോഷം",
      date: "ജനുവരി 2024",
      description: "പ്രത്യേക പ്രാർത്ഥനകളോടെയും അനുഗ്രഹങ്ങളോടെയും പുതുവത്സരത്തെ സ്വാഗതം ചെയ്തു."
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ഇവൻ്റുകളും ഉത്സവങ്ങളും
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            നമ്മുടെ സമൂഹത്തെ ഭക്തിയിലും സന്തോഷത്തിലും ഒന്നിപ്പിക്കുന്ന പവിത്രമായ ഉത്സവങ്ങളും ആത്മീയ ഒത്തുചേരലുകളും ആഘോഷിക്കുന്നതിൽ ഞങ്ങളോടൊപ്പം ചേരൂ.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            വരാനിരിക്കുന്ന ഇവൻ്റുകൾ
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
            സമീപകാല ആഘോഷങ്ങൾ
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
              ക്ഷേത്ര പരിപാടികളെക്കുറിച്ച് അപ്‌ഡേറ്റ് ചെയ്‌തുകൊണ്ടിരിക്കുക
            </h3>
            <p className="mb-6 opacity-90">
              ഞങ്ങളുടെ ക്ഷേത്ര പ്രവർത്തനങ്ങൾ പിന്തുടരുക, ഒരു ആഘോഷമോ ആത്മീയ ഒത്തുചേരലോ ഒരിക്കലും നഷ്ടപ്പെടുത്തരുത്.
            </p>
            <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              അപ്ഡേറ്റുകൾക്ക് സബ്സ്ക്രൈബ് ചെയ്യുക
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;