import React from 'react';
import { motion } from 'framer-motion';
import { FiFilm, FiEdit, FiPieChart, FiSmartphone, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Dummy data
const contentServices = [
  {
    icon: <FiFilm className="text-4xl" />,
    title: "Video Production",
    description: "Engaging video content for all platforms",
    image: "https://images.unsplash.com/photo-1579107622005-5f5ab1b0c48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "300% higher engagement than text"
  },
  {
    icon: <FiEdit className="text-4xl" />,
    title: "Copywriting",
    description: "Compelling messaging that converts",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "30% increase in conversions"
  },
  {
    icon: <FiPieChart className="text-4xl" />,
    title: "Social Media Content",
    description: "Platform-optimized posts that perform",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "5x more shares than industry average"
  },
  {
    icon: <FiSmartphone className="text-4xl" />,
    title: "Interactive Content",
    description: "Quizzes, polls and immersive experiences",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "2x longer engagement time"
  }
];

const contentTypes = [
  {
    name: "Blog Articles",
    description: "SEO-optimized long-form content",
    examples: ["How-to guides", "Listicles", "Industry insights"]
  },
  {
    name: "Infographics",
    description: "Visual data storytelling",
    examples: ["Statistics visualization", "Process flows", "Comparison charts"]
  },
  {
    name: "Email Campaigns",
    description: "Targeted messaging for your audience",
    examples: ["Newsletters", "Product launches", "Promotional sequences"]
  }
];

const benefits = [
  "Consistent brand voice across channels",
  "Higher search engine visibility",
  "Increased audience engagement",
  "Improved lead generation",
  "Stronger customer relationships"
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

const ContentCreations = () => (
  <>
    <HeroSection 
      title="Content Creations" 
      subtitle="Creative content to elevate your brand."
      breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Content Creations' }]}
      backgroundImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
            Content That Connects and Converts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            In today's digital landscape, quality content is the key to building relationships, 
            establishing authority, and driving business growth.
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
          {contentServices.map((service, index) => (
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

    {/* Content Types Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Content Specialties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diverse formats to meet your marketing goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contentTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">Examples:</h4>
                <ul className="space-y-1">
                  {type.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
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
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Quality Content Matters</h2>
            <p className="text-xl mb-8">
              Strategic content creates value for your audience and your business.
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
                  <FiCheckCircle className="text-green-400 text-xl mt-1 mr-3 flex-shrink-0" />
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
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Content creation process" 
                className="w-full h-full object-cover"
              />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Content Creation Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A strategic approach to delivering impactful content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            { step: "1", title: "Strategy", icon: "🎯" },
            { step: "2", title: "Research", icon: "🔍" },
            { step: "3", title: "Creation", icon: "✍️" },
            { step: "4", title: "Review", icon: "✅" },
            { step: "5", title: "Publish", icon: "🚀" }
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Elevate Your Content?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create content that resonates with your audience and drives results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Start Your Content Strategy
          </motion.button>
        </motion.div>
      </div>
    </section>
  </>
);

export default ContentCreations;