import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: "https://templesofkerala.org/kozhikode/img/157.jpg",
      title: "Temple Architecture"
    },
    {
      url: "https://templesofkerala.org/kozhikode/img/159.jpg",
      title: "Sacred Sanctum"
    },
    {
      url: "https://templesofkerala.org/kozhikode/img/160.jpg",
      title: "Daily Rituals"
    },
    {
      url: "https://templesofkerala.org/kozhikode/img/161.jpg",
      title: "Festival Decorations"
    },
    {
      url: "https://templesofkerala.org/kozhikode/img/158.jpg",
      title: "Devotional Gathering"
    },
    {
      url: "https://templesofkerala.org/kozhikode/img/159.jpg",
      title: "Festival Celebrations"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrUZ4ibWaBzdii3c0CIHvw4X5xxw2stk_4pOu9P6rUysWJCK-VNrdikPteeZpRjZzDxySfmXKCcxxjDevhc-fPVLhyhM48oIONEFBajaFOTV4cN3lJ3g3tfxwfDp8jzhhFEjwHBLPZ3lPpL=s1360-w1360-h1020-rw",
      title: "Prayer Rituals"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZUFFlPuTnxhYBYXOqcTGkKiLy148wEdAOb8Q7JoJ2lt9K7hAKRGkK2IoeN_R3saMqJE-zNDa0sc6fmxZKDbM3faQSN0LBvg6fXgELZa4ISGkPd57-dO_Lnl8EJbH5IfCXA-o=s1360-w1360-h1020-rw",
      title: "Temple Offerings"
    }
  ];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ക്ഷേത്ര ഗാലറി
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            നമ്മുടെ ക്ഷേത്രപരിസരത്തും വിവിധ ആഘോഷങ്ങളിലും പകർത്തിയ ദിവ്യ സൗന്ദര്യവും പുണ്യ നിമിഷങ്ങളും പര്യവേക്ഷണം ചെയ്യുക.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              നമ്മുടെ ക്ഷേത്രം സന്ദർശിക്കുക
            </h3>
            <p className="text-gray-600 mb-6">
              ദിവ്യമായ അന്തരീക്ഷവും പവിത്രമായ ഊർജ്ജവും നേരിട്ട് അനുഭവിക്കൂ. എല്ലാ ഭക്തർക്കും സ്വാഗതം.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              നിങ്ങളുടെ സന്ദർശനം ആസൂത്രണം ചെയ്യുക
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;