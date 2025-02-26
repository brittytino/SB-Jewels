import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[80vh] sm:h-[90vh]"
    >
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80" 
          alt="Luxury Jewelry Collection at S.B Jewels Singanallur" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl sm:text-6xl font-serif mb-6 leading-tight">
            Timeless Elegance, Crafted with Passion
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            Discover our exquisite collection of handcrafted jewelry at Singanallur's premier jewelry destination.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-500 text-white px-8 py-3 rounded-full hover:bg-gold-600 transition flex items-center gap-2 group"
          >
            Explore Collection
            <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}