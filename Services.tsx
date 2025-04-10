import React from 'react';

const services = [
  {
    title: "Residential Ceilings",
    description: "Transform your home with our custom stretch ceiling solutions perfect for any room.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Commercial Projects",
    description: "Innovative ceiling designs for offices, restaurants, and retail spaces.",
    image: "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Custom Lighting",
    description: "Integrated lighting solutions that combine functionality with stunning aesthetics.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of stretch ceiling solutions to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;