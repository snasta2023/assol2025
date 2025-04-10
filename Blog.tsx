import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Benefits of Stretch Ceilings in Modern Interior Design",
    excerpt: "Discover how stretch ceilings can transform your space and provide unique design possibilities...",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Innovative Lighting Solutions with Stretch Ceilings",
    excerpt: "Explore creative lighting options and how they can be integrated with stretch ceilings...",
    date: "March 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600573472573-8a44e5cd0473?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Maintenance Tips for Your Stretch Ceiling",
    excerpt: "Learn how to properly maintain your stretch ceiling to ensure its longevity and beauty...",
    date: "March 5, 2024",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in stretch ceiling design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;