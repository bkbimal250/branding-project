import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiDollarSign, FiTrendingUp, FiMail, FiUsers, FiBarChart2 } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Dummy data
const marketingServices = [
  {
    icon: <FiSearch className="text-4xl" />,
    title: "SEO Services",
    description: "Improve your search rankings and organic traffic",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "Average 3x more organic traffic"
  },
  {
    icon: <FiDollarSign className="text-4xl" />,
    title: "PPC Advertising",
    description: "Targeted ads that maximize your ROI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "30% lower cost-per-acquisition"
  },
  {
    icon: <FiTrendingUp className="text-4xl" />,
    title: "Social Media Marketing",
    description: "Strategic campaigns across all platforms",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "5x engagement rate increase"
  },
  {
    icon: <FiMail className="text-4xl" />,
    title: "Email Marketing",
    description: "Convert leads and retain customers",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "Average 42:1 ROI"
  }
];

const marketingApproaches = [
  {
    name: "Data-Driven Strategy",
    description: "Decisions based on real performance metrics",
    examples: ["A/B testing", "Conversion tracking", "ROI analysis"]
  },
  {
    name: "Omnichannel Marketing",
    description: "Seamless experience across all touchpoints",
    examples: ["Cross-platform consistency", "Unified messaging", "Integrated campaigns"]
  },
  {
    name: "Conversion Optimization",
    description: "Maximize every visitor's potential",
    examples: ["Landing page optimization", "Funnel analysis", "CTR improvement"]
  }
];

const benefits = [
  "Increased brand visibility and awareness",
  "Higher quality leads and conversions",
  "Measurable campaign performance",
  "Better understanding of your audience",
  "Competitive advantage in your market"
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const DigitalMarketing = () => (
  <>
    <HeroSection 
      title="Digital Marketing" 
      subtitle="Grow your business with our digital marketing expertise."
      breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Digital Marketing' }]}
      backgroundImage="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
    
    {/* Introduction Section */}
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Transform Your Digital Presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            In today's competitive landscape, a strategic digital marketing approach is essential 
            to stand out, attract quality leads, and grow your business.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {marketingServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-40 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <div className="text-blue-600 mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block">
                  {service.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

    {/* Approaches Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Marketing Methodology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven strategies that deliver consistent results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {marketingApproaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.name}</h3>
              <p className="text-gray-600 mb-4">{approach.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">Includes:</h4>
                <ul className="space-y-1">
                  {approach.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <FiBarChart2 className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">The Power of Digital Marketing</h2>
            <p className="text-xl mb-8">
              Transform your business with strategies that deliver measurable growth.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <FiTrendingUp className="text-green-400 text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Digital marketing analytics" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <FiBarChart2 className="text-white text-6xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">Data-Driven Results</h3>
                  <p className="text-blue-200 mt-2">Real-time analytics to optimize performance</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-full h-full bg-yellow-400 rounded-2xl -bottom-4 -right-4"></div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our 5-Step Marketing Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to digital success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            { step: "1", title: "Discovery", icon: "🔍" },
            { step: "2", title: "Strategy", icon: "📊" },
            { step: "3", title: "Implementation", icon: "🛠️" },
            { step: "4", title: "Optimization", icon: "⚡" },
            { step: "5", title: "Reporting", icon: "📈" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital marketing expertise can transform your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Get Your Free Strategy Session
          </motion.button>
        </motion.div>
      </div>
    </section>
  </>
);

export default DigitalMarketing;