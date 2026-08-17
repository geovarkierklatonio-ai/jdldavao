import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Zap, Users, ArrowRight, Award, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { label: 'Years of Service', value: '15+', icon: Award },
    { label: 'Completed Projects', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '300+', icon: Users },
    { label: 'Security Experts', value: '50+', icon: Shield },
  ];

  const services = [
    {
      icon: Shield,
      title: 'CCTV Systems',
      description: 'High-definition surveillance solutions for 24/7 monitoring and protection.',
    },
    {
      icon: Zap,
      title: 'Fire Alarm Systems',
      description: 'Advanced fire detection systems with certified installation and support.',
    },
    {
      icon: Users,
      title: 'Access Control',
      description: 'Smart access management systems for enhanced security and convenience.',
    },
    {
      icon: Truck,
      title: 'Data Networking',
      description: 'Professional networking infrastructure for seamless connectivity.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services.',
    },
    {
      icon: Award,
      title: 'Expert Installation',
      description: 'Professional installation by certified security technicians.',
    },
  ];

  const whyChooseUs = [
    'Industry-leading expertise since 2009',
    'Certified professional team',
    'State-of-the-art equipment',
    '24/7 customer support',
    'Competitive pricing',
    'Warranty on all installations',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900">
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [180, 90, 0] }}
            transition={{ duration: 25, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-6 flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                <Shield className="w-12 h-12 text-blue-300" />
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">Security</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional security systems technology and solutions for Davao businesses since 2009
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl text-center border border-blue-200 hover:shadow-lg transition-shadow"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Services</span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your needs
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">Why Choose JDL Davao?</h2>
              <p className="text-lg text-blue-100 mb-8">
                With over 15 years of experience, we've become Davao's trusted security partner. Our commitment to excellence and customer satisfaction sets us apart.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <span className="text-lg">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right side - Image placeholder with gradient */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20">
                <div className="bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl aspect-square flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Shield className="w-40 h-40 text-white opacity-50" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-5xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how JDL Davao can provide the perfect security solution for your needs
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:08222243926"
              className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Call Us: 082-2243926
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
