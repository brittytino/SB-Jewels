import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { MetalPrices } from './components/MetalPrices';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { OfferPopup } from './components/OfferPopup';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LatestTrends } from './components/LatestTrends';
import { SpecialOffers } from './components/SpecialOffers';

function HomePage() {
  return (
    <>
      <OfferPopup />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[90vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80" 
            alt="Luxury Jewelry Collection at S.B Jewels Singanallur" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-6xl font-serif mb-6 leading-tight">
              Timeless Elegance, Crafted with Passion
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-200">
              Discover our exquisite collection of handcrafted jewelry at Singanallur's premier jewelry destination.
            </p>
            <button className="bg-gold-500 text-white px-8 py-3 rounded-full hover:bg-gold-600 transition flex items-center gap-2 group">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-4">Our Collections</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our carefully curated collections of fine jewelry in Singanallur, each piece telling its own unique story of elegance and craftsmanship.
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
                    alt={`${category.title} Collection at S.B Jewels Singanallur`}
                    className="w-full h-96 object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-2xl font-serif mb-2">{category.title}</h3>
                      <p className="text-gray-200 mb-4">{category.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <LatestTrends />
      <SpecialOffers />
      <Testimonials />

      {/* SEO Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-serif text-center mb-12">Premium Jewelry Store in Singanallur, Coimbatore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif mb-4">Your Trusted Jewelry Partner</h3>
                <p className="text-gray-600">
                  S.B Jewels is a leading jewelry store in Singanallur, Coimbatore, offering an extensive collection of gold jewelry, diamond ornaments, and traditional South Indian jewelry. With over three decades of experience, we have established ourselves as a trusted name in the jewelry industry.
                </p>
                <p className="text-gray-600 mt-4">
                  Visit our showroom in Mahalakshmi Nagar to explore our wide range of BIS hallmarked gold jewelry, certified diamond collections, and exquisite traditional ornaments. Our expert craftsmen can also create custom designs to match your preferences.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4">Quality Assurance</h3>
                <p className="text-gray-600">
                  At S.B Jewels, we prioritize quality and authenticity. All our gold jewelry comes with BIS hallmark certification, ensuring 100% purity. Our diamond jewelry is certified by internationally recognized laboratories like IGI and GIA, providing complete transparency and peace of mind to our customers.
                </p>
                <p className="text-gray-600 mt-4">
                  Experience the finest jewelry shopping in Singanallur with our extensive collection, competitive prices, and exceptional customer service. Whether you're looking for bridal jewelry, daily wear, or investment options, S.B Jewels is your one-stop destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gold-600 text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">Free Shipping on Orders Above ₹25,000 | Visit Our Store in Singanallur</p>
        </div>
      </div>

      <Header />
      <MetalPrices />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-serif mb-4">S.B Jewels</h4>
              <p className="text-gray-400">Crafting timeless pieces since 1990 in Singanallur, Coimbatore</p>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-gold-400 transition">About Us</Link></li>
                <li><Link to="/gallery" className="hover:text-gold-400 transition">Collections</Link></li>
                <li><Link to="/contact" className="hover:text-gold-400 transition">Contact</Link></li>
                <li><a href="#" className="hover:text-gold-400 transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>33, Mahalakshmi Nagar</li>
                <li>Neelikonampalaiyam, Singanallur</li>
                <li>Coimbatore - 641014</li>
                <li>Phone: +91 9791939502</li>
                <li>Landline: 04222273916</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Sunday</li>
                <li>10:00 AM - 8:00 PM</li>
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