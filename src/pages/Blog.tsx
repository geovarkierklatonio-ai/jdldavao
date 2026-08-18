import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Peak Performance: JDL Security Delivers Professional Maintenance (PMS) for SGS Philippines, Inc.',
      excerpt: 'JDL Security successfully completes comprehensive professional maintenance services for SGS Philippines with our advanced PMS system ensuring peak performance.',
      date: 'March 30, 2026',
      author: 'Security Team',
      category: 'Case Study',
      imagePosition: '0% 0%',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'JDL Davao Successfully Completes CCTV, Data Networking & FDAS Installation at Sanfrance Provincial Capitol',
      excerpt: 'A comprehensive security upgrade featuring CCTV, high-speed data networking, and fire detection systems for government infrastructure.',
      date: 'March 26, 2026',
      author: 'Installation Team',
      category: 'Project Highlight',
      imagePosition: '50% 0%',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'JDL Security Installs CMA Commercial Trading Corp: Davao\'s New Standard for Integrated Commercial CCTV',
      excerpt: 'Discover how our integrated CCTV solutions provide enterprise-level security with cloud integration and AI-powered monitoring.',
      date: 'March 26, 2026',
      author: 'Tech Insights',
      category: 'Technology',
      imagePosition: '100% 0%',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'JDL Security Empowers DTI Davao: Setting New Benchmarks for Smart & Secure Government Workspaces',
      excerpt: 'Implementing state-of-the-art security measures for government agencies with intelligent monitoring and automated response systems.',
      date: 'March 25, 2026',
      author: 'Government Solutions',
      category: 'Case Study',
      imagePosition: '0% 100%',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'MRD PAPPAS Boarding House | FDAS Installation | JDL Davao',
      excerpt: 'Professional fire detection and alarm system installation ensuring safety compliance and resident protection.',
      date: 'October 31, 2025',
      author: 'Safety Division',
      category: 'Fire Safety',
      imagePosition: '50% 100%',
      readTime: '4 min read',
    },
    {
      id: 6,
      title: '10 Essential Tips for Choosing the Right Security System for Your Business',
      excerpt: 'A comprehensive guide on selecting security solutions that fit your business needs and budget.',
      date: 'October 15, 2025',
      author: 'Security Expert',
      category: 'Tips & Guides',
      imagePosition: '100% 100%',
      readTime: '9 min read',
    },
  ];

  const categories = ['all', 'Case Study', 'Project Highlight', 'Technology', 'Fire Safety', 'Tips & Guides'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Security Blog</h1>
          <p className="text-xl text-gray-200">
            Latest insights, tips, and case studies on security solutions
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-600'
              }`}
            >
              {cat === 'all' ? 'All Posts' : cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 max-w-7xl mx-auto px-4">
        {filteredPosts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-300">
                  <motion.div
                    role="img"
                    aria-label={post.title}
                    className="w-full h-full bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url('${getImageUrl('/images/security-insights-grid.png')}')`,
                      backgroundPosition: post.imagePosition,
                      backgroundSize: '300% 200%',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="text-red-600 font-medium">{post.readTime}</div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600">No posts found matching your criteria.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};
