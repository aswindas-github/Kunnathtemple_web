import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/3692755/pexels-photo-3692755.jpeg",
      title: "Temple Architecture"
    },
    {
      url: "https://images.pexels.com/photos/3692748/pexels-photo-3692748.jpeg",
      title: "Sacred Sanctum"
    },
    {
      url: "https://images.pexels.com/photos/8828581/pexels-photo-8828581.jpeg",
      title: "Daily Rituals"
    },
    {
      url: "https://images.pexels.com/photos/6436308/pexels-photo-6436308.jpeg",
      title: "Festival Decorations"
    },
    {
      url: "https://images.pexels.com/photos/8828576/pexels-photo-8828576.jpeg",
      title: "Devotional Gathering"
    },
    {
      url: "https://images.pexels.com/photos/7879443/pexels-photo-7879443.jpeg",
      title: "Festival Celebrations"
    },
    {
      url: "https://images.pexels.com/photos/4195378/pexels-photo-4195378.jpeg",
      title: "Prayer Rituals"
    },
    {
      url: "https://images.pexels.com/photos/4913426/pexels-photo-4913426.jpeg",
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
            Temple Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the divine beauty and sacred moments captured within our temple premises 
            and during various celebrations.
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
              Visit Our Temple
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the divine atmosphere and sacred energy in person. All devotees are welcome.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;