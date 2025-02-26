import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const template = `
Hi S.B Jewels! 👋

I'm interested in your jewelry collection and would like to know more.

*My Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*My Message:*
${formData.message}

Looking forward to hearing from you! ✨
    `.trim();

    const whatsappMessage = encodeURIComponent(template);
    window.open(`https://wa.me/919791939502?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&q=80" 
            alt="Contact S.B Jewels" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-serif text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Let us help you find the perfect piece of jewelry for your special moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-3xl font-serif mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition bg-gray-50"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition bg-gray-50"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition bg-gray-50"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition bg-gray-50"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your jewelry preferences or any specific requirements..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gold-500 text-white py-4 rounded-xl hover:bg-gold-600 transition flex items-center justify-center gap-2 shadow-lg mt-8"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-serif mb-8">Visit Our Store</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-gold-50 p-3 rounded-xl">
                      <MapPin className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Store Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        33, Mahalakshmi Nagar<br />
                        Neelikonampalayam, Singanallur<br />
                        Coimbatore - 641014
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-gold-50 p-3 rounded-xl">
                      <Phone className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Mobile: +91 9791939502<br />
                        Landline: 04222273916
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-gold-50 p-3 rounded-xl">
                      <Mail className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-gray-600">info@sbjewels.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-gold-50 p-3 rounded-xl">
                    <Clock className="text-gold-500" size={24} />
                  </div>
                  <h2 className="text-3xl font-serif">Business Hours</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Monday - Saturday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-medium">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}