import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Check } from 'lucide-react';

export const NewProducts: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: '4K Ultra HD CCTV Camera',
      category: 'cctv',
      price: '₱15,999',
      imagePosition: '0% 0%',
      rating: 4.8,
      reviews: 124,
      features: ['4K Resolution', 'Night Vision', 'Remote Access', 'Cloud Storage'],
      badge: 'NEW',
    },
    {
      id: 2,
      name: 'Smart Fire Alarm System',
      category: 'fire',
      price: '₱8,499',
      imagePosition: '50% 0%',
      rating: 4.9,
      reviews: 89,
      features: ['IoT Enabled', 'Mobile Alert', 'Battery Backup', 'Certified'],
      badge: 'HOT',
    },
    {
      id: 3,
      name: 'Access Control Panel',
      category: 'access',
      price: '₱22,500',
      imagePosition: '100% 0%',
      rating: 4.7,
      reviews: 156,
      features: ['Biometric Support', '500 Users', 'Network Ready', 'Dual Lock'],
      badge: 'SALE',
    },
    {
      id: 4,
      name: 'Wireless NVR System',
      category: 'nvr',
      price: '₱18,999',
      imagePosition: '0% 100%',
      rating: 4.6,
      reviews: 98,
      features: ['8 Channel', '4TB Storage', 'Wireless Setup', 'AI Detection'],
      badge: 'NEW',
    },
    {
      id: 5,
      name: 'Professional Intercom System',
      category: 'intercom',
      price: '₱12,799',
      imagePosition: '50% 100%',
      rating: 4.8,
      reviews: 67,
      features: ['Multi-Station', 'Clear Audio', 'Door Release', 'Video Support'],
      badge: 'HOT',
    },
    {
      id: 6,
      name: 'Network Switch (24 Port)',
      category: 'network',
      price: '₱9,999',
      imagePosition: '100% 100%',
      rating: 4.5,
      reviews: 112,
      features: ['Gigabit Ethernet', 'Managed', 'PoE Support', 'Industrial Grade'],
      badge: 'TRENDING',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'cctv', label: 'CCTV Systems' },
    { id: 'fire', label: 'Fire Alarms' },
    { id: 'access', label: 'Access Control' },
    { id: 'nvr', label: 'NVR Systems' },
    { id: 'intercom', label: 'Intercom' },
    { id: 'network', label: 'Networking' },
  ];

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">New Products</h1>
          <p className="text-xl text-blue-100">
            Discover our latest security solutions and innovative products
          </p>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <motion.div
                  role="img"
                  aria-label={product.name}
                  className="w-full h-full bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/security-products-grid.png')",
                    backgroundPosition: product.imagePosition,
                    backgroundSize: '300% 200%',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div
                  className={`absolute top-4 right-4 px-4 py-2 rounded-full text-white font-bold text-sm ${
                    product.badge === 'NEW'
                      ? 'bg-green-500'
                      : product.badge === 'HOT'
                      ? 'bg-red-500'
                      : product.badge === 'SALE'
                      ? 'bg-orange-500'
                      : 'bg-purple-500'
                  }`}
                >
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-teal-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <motion.button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 rounded-lg hover:shadow-lg transition-all"
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
