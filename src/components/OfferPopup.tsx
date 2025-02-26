import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift } from 'lucide-react';

export function OfferPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
            onClick={() => setIsVisible(false)}
          />
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full overflow-hidden"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block mb-4"
              >
                <Sparkles className="text-gold-500 w-12 h-12" />
              </motion.div>
              
              <h3 className="text-3xl font-serif text-gray-900 mb-2">Special Offer!</h3>
              <div className="flex justify-center items-center gap-2 mb-4">
                <Gift className="text-gold-500" />
                <p className="text-xl font-semibold text-gold-600">
                  Get 5% Off on Diamond Jewelry
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gold-50 p-4 rounded-lg mb-6"
              >
                <p className="text-gray-700 mb-2">
                  Visit our store in Singanallur, Coimbatore and enjoy exclusive discounts on our premium collection.
                </p>
                <p className="text-sm text-gray-500">
                  *Valid until March 31st, 2024
                </p>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-white px-8 py-3 rounded-full hover:bg-gold-600 transition shadow-lg w-full"
                onClick={() => setIsVisible(false)}
              >
                Claim Offer
              </motion.button>
            </div>
            
            <motion.div
              className="absolute -top-12 -left-12 w-24 h-24 bg-gold-200 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-gold-300 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}