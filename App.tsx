import React from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, ChevronRight, Star, Image as ImageIcon } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Get an Instant Quote</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Use our calculator to get a rough estimate for your stretch ceiling project. 
                  For a more accurate quote, please contact us directly.
                </p>
                <Calculator />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="text-blue-600 mt-1 mr-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Installation</h3>
                      <p className="text-gray-600">Expert team with years of experience in stretch ceiling installation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-blue-600 mt-1 mr-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Premium Materials</h3>
                      <p className="text-gray-600">High-quality stretch ceiling materials from trusted manufacturers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-blue-600 mt-1 mr-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Custom Solutions</h3>
                      <p className="text-gray-600">Tailored designs to match your specific needs and preferences</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-blue-600 mt-1 mr-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Warranty</h3>
                      <p className="text-gray-600">Extended warranty on both materials and installation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Gallery />
        <Reviews />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@stretchceilings.com" className="hover:text-blue-400">info@stretchceilings.com</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
                <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Stretch Ceilings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;