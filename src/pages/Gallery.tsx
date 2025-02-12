import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "Traditional Collection",
    description: "Timeless pieces that celebrate our heritage",
    images: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Modern Collection",
    description: "Contemporary designs for the modern woman",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Bridal Collection",
    description: "Make your special day even more memorable",
    images: [
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608508644127-ba99d7732fee?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&q=80"
    ]
  }
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center mb-6">Our Collections</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our exquisite range of jewelry, from traditional masterpieces to contemporary designs.
          </p>
        </div>
      </section>

      {/* Collections */}
      {collections.map((collection, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                <h2 className="text-4xl font-serif mb-4">{collection.title}</h2>
                <p className="text-gray-600 mb-8">{collection.description}</p>
                <button className="bg-gold-500 text-white px-6 py-3 rounded-full hover:bg-gold-600 transition flex items-center gap-2 group">
                  View Collection
                  <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
                </button>
              </div>
              <div className={`grid grid-cols-2 gap-4 ${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                <div className="space-y-4">
                  <img 
                    src={collection.images[0]} 
                    alt={collection.title} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <img 
                    src={collection.images[1]} 
                    alt={collection.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="pt-8">
                  <img 
                    src={collection.images[2]} 
                    alt={collection.title} 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Featured Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-white mb-6">Craftsmanship in Motion</h2>
              <p className="text-gray-400 mb-8">
                Watch our artisans at work as they transform precious metals and stones into stunning pieces of jewelry.
                Each piece tells a story of dedication, skill, and artistic vision.
              </p>
              <button className="bg-gold-500 text-white px-6 py-3 rounded-full hover:bg-gold-600 transition flex items-center gap-2 group">
                Learn More About Our Process
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </button>
            </div>
            <div className="aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80"
              >
                <source src="YOUR_VIDEO_URL" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}