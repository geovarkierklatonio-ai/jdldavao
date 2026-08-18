import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Company Info */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            JDL DAVAO
          </h3>
          <p className="text-gray-400 mb-4">
            Your trusted partner in security systems technology since 2009. Serving Davao with professional CCTV, fire alarms, and integrated solutions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm hover:text-red-400 transition-colors font-medium">
            Facebook
            </a>
            <a href="#" className="text-sm hover:text-red-400 transition-colors font-medium">
            LinkedIn
            </a>
            <a href="#" className="text-sm hover:text-red-400 transition-colors font-medium">
              Twitter
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                CCTV Systems
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Fire Alarm Systems
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Access Control
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Data Networking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Intercom Systems
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <div className="space-y-4 text-gray-400">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <p>201 RLC Bldg.,</p>
                <p>Sobrecarey St., cor. Sta Ana Ave.</p>
                <p>Davao City, Philippines</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-blue-400" />
              <a href="tel:08222243926" className="hover:text-white transition-colors">
                082-2243926
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-red-400" />
              <a href="mailto:jdldavao@yahoo.com" className="hover:text-white transition-colors">
                jdldavao@yahoo.com
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            &copy; 2026 JDL Security Systems Technology Corp. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
