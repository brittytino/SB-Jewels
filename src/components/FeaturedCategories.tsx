import React from 'react';
import { ChevronRight } from 'lucide-react';
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

export function FeaturedCategories() {
  const categories = [
    {
      title: "Traditional Bridal Collection",
      description: "Exquisite South Indian bridal jewelry",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80"
    },
    {
      title: "Diamond Jewelry",
      description: "IGI certified diamond collections",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
    },
    {
      title: "Temple Jewelry",
      description: "Authentic traditional temple designs",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-4">Our Collections</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our carefully curated collections of fine jewelry in Singanallur, each piece telling its own unique story of elegance and craftsmanship.
          </p>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={category.image} 
                    alt={`${category.title} Collection at S.B Jewels Singanallur`}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-2xl font-serif mb-2">{category.title}</h3>
                      <p className="text-gray-200 mb-4">{category.description}</p>
                      <motion.div 
                        whileHover={{ x: 10 }}
                        className="flex items-center text-gold-400 group-hover:text-gold-300 transition"
                      >
                        <span className="mr-2">View Collection</span>
                        <ChevronRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}