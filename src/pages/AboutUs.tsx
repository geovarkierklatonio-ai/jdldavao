import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Juan Dela Cruz',
      role: 'Founder & CEO',
      imagePosition: '0% 0%',
      bio: 'Security industry veteran with 20+ years of experience',
    },
    {
      name: 'Maria Santos',
      role: 'Technical Director',
      imagePosition: '100% 0%',
      bio: 'Expert in CCTV systems and network infrastructure',
    },
    {
      name: 'Carlos Reyes',
      role: 'Operations Manager',
      imagePosition: '0% 100%',
      bio: 'Oversees project delivery and customer satisfaction',
    },
    {
      name: 'Anna Morales',
      role: 'Sales & Marketing Head',
      imagePosition: '100% 100%',
      bio: 'Building strong relationships with corporate clients',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in every project and customer interaction.',
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: '24/7 support and maintenance ensure your peace of mind at all times.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our primary goal in every business decision.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuously adopting latest technology to stay ahead in the industry.',
    },
  ];

  const milestones = [
    { year: '2009', event: 'Company Founded' },
    { year: '2012', event: '100+ Projects Completed' },
    { year: '2015', event: 'Expansion to Multiple Cities' },
    { year: '2018', event: 'ISO Certification Achieved' },
    { year: '2021', event: '500+ Projects Milestone' },
    { year: '2026', event: 'Leading Security Provider in Mindanao' },
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
          <h1 className="text-5xl font-bold mb-4">About JDL Davao</h1>
          <p className="text-xl text-blue-100">
            Your trusted security partner since 2009
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              To provide Davao City and the surrounding areas with professional, reliable, and innovative security solutions that protect lives, properties, and businesses.
            </p>
            <p className="text-lg text-gray-600">
              We believe that security is not just about equipment—it's about peace of mind. Every installation we complete, every service we provide, and every support call we answer is driven by our commitment to excellence and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-4">
              To be the most trusted and innovative security systems provider in Mindanao, recognized for our expertise, professionalism, and customer-centric approach.
            </p>
            <p className="text-lg text-gray-600">
              We envision a future where every business and property owner in Davao has access to world-class security solutions that are affordable, reliable, and easy to maintain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Core Values
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Our Journey
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-8 items-center"
            >
              <div
                className={`flex-1 text-right ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-600">{milestone.event}</p>
                  </>
                ) : null}
              </div>

              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />
                <div className="w-1 h-12 bg-gray-300 my-2" />
              </div>

              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                {index % 2 === 1 ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-600">{milestone.event}</p>
                  </>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Meet Our Team
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <motion.div
                    role="img"
                    aria-label={member.name}
                    className="w-full h-full bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/team-portraits-grid.png')",
                      backgroundPosition: member.imagePosition,
                      backgroundSize: '200% 200%',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-5xl font-bold mb-6">
            Let's Secure Your Future Together
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to learn how JDL Davao can help protect what matters most to you
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-block"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
