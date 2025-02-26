import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Users, Clock } from 'lucide-react';

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

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80" 
            alt="S.B Jewels Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-serif text-white mb-6">Our Story</h1>
            <p className="text-xl text-gray-200">
              Crafting timeless pieces of jewelry since 1990, S.B Jewels has been Singanallur's premier destination for exquisite jewelry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div>
                <h2 className="text-4xl font-serif mb-6">A Legacy of Excellence</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 1990, S.B Jewels has grown from a small family business to become one of Singanallur's most trusted names in jewelry. Our commitment to quality, craftsmanship, and customer service has remained unwavering throughout our journey.
                </p>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Singanallur, Coimbatore, our showroom showcases an extensive collection of traditional and contemporary jewelry pieces, each crafted with precision and passion.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Award className="text-gold-500" size={24} />
                    <span className="font-semibold">BIS Hallmarked</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="text-gold-500" size={24} />
                    <span className="font-semibold">Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-gold-500" size={24} />
                    <span className="font-semibold">Expert Artisans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-gold-500" size={24} />
                    <span className="font-semibold">33+ Years</span>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80" 
                  alt="Jewelry Crafting at S.B Jewels" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80" 
                  alt="S.B Jewels Collection" 
                  className="w-full h-64 object-cover rounded-lg mt-8"
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-serif text-center mb-12">Our Values</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Every piece of jewelry at S.B Jewels is crafted using the finest materials and undergoes rigorous quality checks.",
                image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80"
              },
              {
                title: "Customer Trust",
                description: "Building lasting relationships with our customers through transparency and exceptional service.",
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80"
              },
              {
                title: "Innovation",
                description: "Blending traditional craftsmanship with modern designs to create unique and timeless pieces.",
                image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
              }
            ].map((value, index) => (
              <FadeInWhenVisible key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-serif text-center mb-12">Why Choose S.B Jewels?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-serif mb-4">Premium Jewelry in Singanallur</h3>
                  <p className="text-gray-600">
                    As one of the leading jewelry stores in Singanallur, Coimbatore, S.B Jewels offers an extensive collection of gold, diamond, and traditional jewelry. Our showroom in Mahalakshmi Nagar has been serving the community with the finest quality jewelry for over three decades.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-4">Expert Craftsmanship</h3>
                  <p className="text-gray-600">
                    Our team of skilled artisans brings together traditional techniques and modern design sensibilities to create jewelry pieces that are both timeless and contemporary. Each piece is crafted with attention to detail and undergoes strict quality control measures.
                  </p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}