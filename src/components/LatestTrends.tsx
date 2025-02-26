import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
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

export function LatestTrends() {
  const trends = [
    {
      title: "Traditional Temple Jewelry",
      description: "Authentic South Indian temple jewelry with intricate designs",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80"
    },
    {
      title: "Modern Minimalist Designs",
      description: "Contemporary pieces for the modern woman",
      image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&q=80"
    },
    {
      title: "Bridal Collection",
      description: "Exquisite bridal sets for your special day",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Latest Jewelry Trends</h2>
              <p className="text-gray-600 mb-8">
                Stay ahead of fashion with our latest collection of trendy jewelry pieces. From traditional South Indian designs to contemporary styles, find the perfect piece to express your personality.
              </p>
              <div className="space-y-6">
                {trends.map((trend, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <TrendingUp className="text-gold-500" size={24} />
                    <div>
                      <h3 className="font-semibold group-hover:text-gold-600 transition">{trend.title}</h3>
                      <p className="text-sm text-gray-500">{trend.description}</p>
                    </div>
                    <ArrowRight className="ml-auto text-gold-500 opacity-0 group-hover:opacity-100 transition" size={20} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80"
                alt="Latest Jewelry Trends"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&q=80"
                alt="Modern Jewelry Designs"
                className="w-full h-64 object-cover rounded-lg mt-8"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}