import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Very unique products, good customer service, they also customize products according to their customer needs. Very happy with their service.",
    author: "Ragavi",
    role: "Loyal Customer",
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&q=80",
    customerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    text: "Good service, excellent collection, customer satisfied. Very good.",
    author: "Anilkumar",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
    customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-serif text-center mb-4">What Our Customers Say</h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our valued customers have to say about their experience with S.B Jewels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={testimonial.image} 
                  alt="Jewelry piece" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-12 left-6">
                  <div className="relative">
                    <img 
                      src={testimonial.customerImage} 
                      alt={testimonial.author} 
                      className="w-20 h-20 rounded-full border-4 border-white object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gold-500 rounded-full p-1">
                      <Star size={16} className="fill-white text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4 pt-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}