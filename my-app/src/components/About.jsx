import React from 'react';
import { Heart, Star, Users, Calendar } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "ദൈവിക അനുഗ്രഹങ്ങൾ",
      description: "ശ്രീ ഭഗവതി ദേവിയുടെ ദിവ്യകാരുണ്യം അനുഭവിക്കൂ"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "പവിത്രമായ പാരമ്പര്യങ്ങൾ",
      description: "പുരാതന ആചാരങ്ങളും ആത്മീയ ആചാരങ്ങളും സംരക്ഷിക്കൽ"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "കമ്മ്യൂണിറ്റി ഐക്യം",
      description: "കുടുംബങ്ങളെയും സമൂഹങ്ങളെയും വിശ്വാസത്തിൽ ഒന്നിപ്പിക്കൽ"
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "ഉത്സവങ്ങളും പരിപാടികളും",
      description: "വർഷം മുഴുവനും പുണ്യ മുഹൂർത്തങ്ങൾ ആഘോഷിക്കുന്നു"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            നമ്മുടെ വിശുദ്ധ ക്ഷേത്രത്തെക്കുറിച്ച്
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            കുന്നത്ത് ശ്രീ ഭഗവതി ക്ഷേത്രം, ഭക്തി, പാരമ്പര്യം, ദിവ്യകാരുണ്യങ്ങൾ എന്നിവയിലൂടെ തലമുറകളെ ബന്ധിപ്പിക്കുന്ന ആത്മീയ പ്രകാശത്തിന്റെ ഒരു ദീപസ്തംഭമായി നിലകൊള്ളുന്നു.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                വിശ്വാസത്തിൻ്റെ ഒരു പാരമ്പര്യം
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                തലമുറകളായി, ഞങ്ങളുടെ കുടുംബ ക്ഷേത്രം ആത്മീയ ജീവിതത്തിന്റെ ഒരു മൂലക്കല്ലായി വർത്തിക്കുന്നു, ശ്രീ ഭഗവതി ദേവിയുടെ ആരാധനയ്ക്കായി സമർപ്പിച്ചിരിക്കുന്നു. ഭക്തർക്ക് ആശ്വാസം കണ്ടെത്താനും, അനുഗ്രഹങ്ങൾ തേടാനും, ദിവ്യസാന്നിധ്യവുമായി ബന്ധപ്പെടാനും കഴിയുന്ന ഒരു പുണ്യസ്ഥലമായി ഈ ക്ഷേത്രം പ്രവർത്തിക്കുന്നു.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                ഞങ്ങളുടെ ക്ഷേത്രം പരമ്പരാഗത കേരള വാസ്തുവിദ്യാ ശൈലി പിന്തുടരുകയും പുരാതന വേദ ആചാരങ്ങൾ നിലനിർത്തുകയും ചെയ്യുന്നു, നമ്മുടെ സമ്പന്നമായ സാംസ്കാരിക പൈതൃകത്തിന്റെ സംരക്ഷണം ഉറപ്പാക്കുകയും ജീവിതത്തിന്റെ എല്ലാ തുറകളിൽ നിന്നുമുള്ള ഭക്തരെ സ്വാഗതം ചെയ്യുകയും ചെയ്യുന്നു.
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
                src="https://templesofkerala.org/kozhikode/img/160.jpg"
                alt="Temple Interior"
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img
                src="https://templesofkerala.org/kozhikode/img/161.jpg"
                alt="Temple Rituals"
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img
                src="https://templesofkerala.org/kozhikode/img/158.jpg"
                alt="Temple Decorations"
                className="rounded-xl shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img
                src="https://templesofkerala.org/kozhikode/img/159.jpg"
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