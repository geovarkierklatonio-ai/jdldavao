import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

export const AccomplishedProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SGS Philippines Professional Maintenance',
      category: 'cctv',
      location: 'Davao City',
      date: 'March 2026',
      description: 'Complete CCTV system installation with professional maintenance services',
      imagePosition: '0% 0%',
      technologies: ['4K CCTV', 'Cloud Storage', 'AI Detection'],
    },
    {
      id: 2,
      title: 'Sanfrance Provincial Capitol Integration',
      category: 'comprehensive',
      location: 'Sanfrance, Davao',
      date: 'March 2026',
      description: 'CCTV, Data Networking & FDAS Installation project',
      imagePosition: '50% 0%',
      technologies: ['CCTV', 'Networking', 'Fire Alarm'],
    },
    {
      id: 3,
      title: 'CMA Commercial Trading Corp',
      category: 'cctv',
      location: 'Davao City',
      date: 'March 2026',
      description: 'Integrated commercial CCTV system installation',
      imagePosition: '100% 0%',
      technologies: ['HD CCTV', 'Smart Monitoring', 'Mobile Access'],
    },
    {
      id: 4,
      title: 'DTI Davao Government Workspaces',
      category: 'comprehensive',
      location: 'Davao City',
      date: 'March 2025',
      description: 'CCTV and Fire Alarm systems for government building',
      imagePosition: '0% 100%',
      technologies: ['CCTV', 'Fire Alarm', 'Network'],
    },
    {
      id: 5,
      title: 'MRD Pappas Boarding House',
      category: 'fire',
      location: 'Davao City',
      date: 'October 2025',
      description: 'Fire Detection and Alarm System Installation',
      imagePosition: '50% 100%',
      technologies: ['FDAS', 'Smart Sensors', 'Alert System'],
    },
    {
      id: 6,
      title: 'Corporate Office Security Upgrade',
      category: 'access',
      location: 'Davao City',
      date: 'February 2025',
      description: 'Access control and intercom system installation',
      imagePosition: '100% 100%',
      technologies: ['Access Control', 'Biometric', 'Intercom'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cctv', label: 'CCTV Systems' },
    { id: 'fire', label: 'Fire Alarms' },
    { id: 'access', label: 'Access Control' },
    { id: 'comprehensive', label: 'Comprehensive' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
          <h1 className="text-5xl font-bold mb-4">Accomplished Projects</h1>
          <p className="text-xl text-blue-100">
            Showcasing our successful installations and implementations
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-300">
                <motion.div
                  role="img"
                  aria-label={project.title}
                  className="w-full h-full bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url('${getImageUrl('/images/security-projects-grid.png')}')`,
                    backgroundPosition: project.imagePosition,
                    backgroundSize: '300% 200%',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Meta Information */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-red-600" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-5 h-5 text-red-600" />
                    <span>{project.category.replace('-', ' ')}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Learn More <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
