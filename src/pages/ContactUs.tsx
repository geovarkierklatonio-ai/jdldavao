import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '082-2243926',
      link: 'tel:08222243926',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'jdldavao@yahoo.com',
      link: 'mailto:jdldavao@yahoo.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '201 RLC Bldg., Sobrecarey St., cor. Sta Ana Ave., Davao City',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Get in touch with our team - we're here to help
          </p>
        </motion.div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {info.label}
                  </h3>
                  <p className="text-gray-600">{info.value}</p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 font-semibold"
              >
                ✓ Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="+63 912 345 6789"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="cctv">CCTV Systems</option>
                    <option value="fire">Fire Alarm Systems</option>
                    <option value="access">Access Control</option>
                    <option value="networking">Data Networking</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl h-80 flex items-center justify-center border-2 border-blue-300 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="JDL Davao Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8659651145827!2d125.58804362346627!3d7.079639518741851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93c58d5d9c5d5d5d%3A0x5d5d5d5d5d5d5d5d!2s201%20RLC%20Bldg%2C%20Sobrecarey%20St%2C%20Davao%20City!5e0!3m2!1sen!2sph!4v1234567890"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose JDL?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Professional and certified security experts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>24/7 customer support and emergency response</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>State-of-the-art security technology</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Competitive pricing and flexible payment options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Warranty on all installations and products</span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-white border-2 border-gray-300 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Emergency:</span> Available 24/7
                </p>
                <p>
                  <span className="font-semibold">Regular Hours:</span> Mon-Fri, 9:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold">Weekends:</span> By appointment only
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long does a typical CCTV installation take?',
                a: 'Most installations take 1-3 days depending on the system size and complexity.',
              },
              {
                q: 'Do you offer 24/7 support?',
                a: 'Yes, we provide round-the-clock technical support for emergency situations.',
              },
              {
                q: 'What payment options do you accept?',
                a: 'We accept cash, bank transfers, and installment plans for larger projects.',
              },
              {
                q: 'Are your products guaranteed?',
                a: 'All installations come with a 1-year warranty on parts and labor.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
