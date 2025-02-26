import React from 'react';
import { Clock, Gift, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export function SpecialOffers() {
  const offers = [
    {
      title: "Wedding Collection",
      discount: "10% Off",
      validity: "Valid until March 31st, 2024",
      image: "https://images.unsplash.com/photo-1608508644127-ba99d7732fee?auto=format&fit=crop&q=80"
    },
    {
      title: "Diamond Jewelry",
      discount: "5% Off",
      validity: "Limited Time Offer",
      image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&q=80"
    },
    {
      title: "Gold Exchange",
      discount: "Best Rates",
      validity: "Ongoing Offer",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gold-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our exclusive offers and make your jewelry purchase even more special.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-serif">{offer.title}</h3>
                    <p className="text-gold-300 font-semibold">{offer.discount}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{offer.validity}</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 flex items-center gap-2 text-gold-600 font-semibold group"
                  >
                    Learn More
                    <ArrowRight className="group-hover:translate-x-1 transition" size={16} />
                  </motion.button>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}