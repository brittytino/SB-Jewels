import React from 'react';
import { Shield, Gem, Gift, Award, Star, Users } from 'lucide-react';
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

export function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="text-gold-500" size={32} />,
      title: "BIS Hallmarked Gold",
      description: "Every piece of gold jewelry comes with BIS hallmark certification, ensuring 100% purity."
    },
    {
      icon: <Gem className="text-gold-500" size={32} />,
      title: "Certified Diamonds",
      description: "IGI and GIA certified diamonds for complete transparency and authenticity."
    },
    {
      icon: <Gift className="text-gold-500" size={32} />,
      title: "Custom Designs",
      description: "Create your dream jewelry with our expert craftsmen in Singanallur."
    },
    {
      icon: <Award className="text-gold-500" size={32} />,
      title: "33+ Years of Excellence",
      description: "Trusted by generations of families in Coimbatore for their precious jewelry needs."
    },
    {
      icon: <Star className="text-gold-500" size={32} />,
      title: "Premium Quality",
      description: "Finest craftsmanship and attention to detail in every piece we create."
    },
    {
      icon: <Users className="text-gold-500" size={32} />,
      title: "Expert Guidance",
      description: "Our experienced team helps you choose the perfect jewelry for every occasion."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-serif text-center mb-4">Why Choose S.B Jewels?</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Experience the finest jewelry shopping in Singanallur, Coimbatore with our commitment to quality and service.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}