import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Modern interior with stretch ceiling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 md:py-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Space with Premium Stretch Ceilings
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Elevate your interior with our modern stretch ceiling solutions. 
            Professional installation, stunning designs, and exceptional quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
              Get Free Quote
              <ChevronRight size={20} className="ml-2" />
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;