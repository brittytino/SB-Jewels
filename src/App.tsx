import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Header } from './components/Header';
import { MetalPrices } from './components/MetalPrices';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './pages/Gallery';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80" 
            alt="Luxury Jewelry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-6xl font-serif mb-6 leading-tight">Timeless Elegance, Crafted with Passion</h2>
            <p className="text-xl mb-8 text-gray-200">Discover our exquisite collection of handcrafted jewelry that tells your unique story.</p>
            <button className="bg-gold-500 text-white px-8 py-3 rounded-full hover:bg-gold-600 transition flex items-center gap-2 group">
              Explore Collection
              <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-serif text-center mb-4">Our Collections</h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our carefully curated collections of fine jewelry, each piece telling its own unique story of elegance and craftsmanship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Necklaces",
                description: "Elegant pieces that grace your neckline",
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80"
              },
              {
                title: "Rings",
                description: "Symbols of eternal beauty",
                image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
              },
              {
                title: "Earrings",
                description: "The perfect finishing touch",
                image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80"
              }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h4 className="text-white text-2xl font-serif mb-2">{category.title}</h4>
                      <p className="text-gray-200 mb-4">{category.description}</p>
                      <div className="flex items-center text-gold-400 group-hover:text-gold-300 transition">
                        <span className="mr-2">View Collection</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-gold-600 text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">Free Shipping on Orders Above ₹25,000</p>
        </div>
      </div>

      <Header />
      <MetalPrices />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-serif mb-4">S.B Jewels</h4>
              <p className="text-gray-400">Crafting timeless pieces since 1990</p>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-gold-400 transition">Collections</a></li>
                <li><a href="#" className="hover:text-gold-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-gold-400 transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>33, Mahalakshmi Nagar</li>
                <li>Neelikonampalaiyam, Kovai - 641014</li>
                <li>Phone: +91 9791939502</li>
                <li>Landline: 04222273916</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Saturday</li>
                <li>10:00 AM - 8:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 S.B Jewels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;