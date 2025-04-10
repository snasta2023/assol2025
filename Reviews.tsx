import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "John Smith",
    role: "Homeowner",
    content: "The team did an amazing job with our living room ceiling. The installation was quick and professional.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    content: "I've worked with them on multiple projects. Their attention to detail and quality of work is outstanding.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Restaurant Owner",
    content: "They transformed our restaurant's ambiance with their creative ceiling design. Highly recommended!",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;