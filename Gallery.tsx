import React from 'react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Modern Living Room"
  },
  {
    url: "https://images.unsplash.com/photo-1600573472573-8a44e5cd0473?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Office Space"
  },
  {
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Restaurant Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Custom Lighting"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of completed projects and get inspired
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;