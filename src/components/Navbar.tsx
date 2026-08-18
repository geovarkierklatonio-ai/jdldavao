import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Shield, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'NEW PRODUCTS', path: '/products' },
    { name: 'ACCOMPLISHED PROJECTS', path: '/projects' },
    { name: 'BLOG', path: '/blog' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">JDL DAVAO</h1>
                <p className="text-xs text-gray-600">Security Systems</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-bold text-gray-700 rounded-md transition-all duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-red-600 after:transition-transform ${
                      isActive
                        ? 'text-red-600 bg-red-50 after:scale-x-100'
                        : 'hover:text-red-600 hover:bg-red-50 after:scale-x-0 hover:after:scale-x-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+639166294234"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="p-2 rounded-md text-gray-700 hover:bg-red-50 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-50 border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm font-bold rounded-md transition-colors ${
                      isActive ? 'bg-blue-100 text-red-600' : 'text-gray-700 hover:bg-blue-100'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="tel:+639166294234"
                className="block px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-700 rounded-md"
              >
                📞 Call: 082-2243926
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
