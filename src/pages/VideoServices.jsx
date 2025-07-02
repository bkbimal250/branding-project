import React from 'react';
import { motion } from 'framer-motion';
import { FiFilm, FiCamera, FiLayers, FiMonitor, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Dummy data
const videoServices = [
  {
    icon: <FiFilm className="text-4xl" />,
    title: "3D Animation",
    description: "Bring your ideas to life with stunning 3D visuals",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "300% more engagement"
  },
  {
    icon: <FiCamera className="text-4xl" />,
    title: "2D Animation",
    description: "Classic storytelling with modern techniques",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "2x better message retention"
  },
  {
    icon: <FiLayers className="text-4xl" />,
    title: "Motion Graphics",
    description: "Dynamic visuals that explain and entertain",
    image: "https://images.unsplash.com/photo-1626785774625-ddcdd0f1d26f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "40% higher conversion rates"
  },
  {
    icon: <FiMonitor className="text-4xl" />,
    title: "Video Editing",
    description: "Professional post-production for polished results",
    image: "https://images.unsplash.com/photo-1579107622005-5f5ab1b0c48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "50% faster production time"
  }
];

const videoTypes = [
  {
    name: "Explainer Videos",
    description: "Simplify complex concepts with animation",
    examples: ["Product demos", "Service explanations", "Process breakdowns"]
  },
  {
    name: "Commercials",
    description: "Captivating ads for any platform",
    examples: ["TV spots", "Social media ads", "Pre-roll videos"]
  },
  {
    name: "Brand Videos",
    description: "Tell your company's story visually",
    examples: ["Company culture", "Customer testimonials", "Event coverage"]
  }
];

const benefits = [
  "Higher engagement than static content",
  "Improved message comprehension",
  "Increased conversion rates",
  "Better SEO performance",
  "More shareable content"
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

const VideoServices = () => (
  <>
    <HeroSection 
      title="3D / 2D Video Services" 
      subtitle="Professional animation and video production for impactful storytelling."
      breadcrumb={[{ label: 'Home', path: '/' }, { label: '3D / 2D Video Services' }]}
      backgroundImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
            Visual Storytelling That Captivates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From concept to final render, we create video content that engages audiences 
            and delivers your message with impact.
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
          {videoServices.map((service, index) => (
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
                <div className="text-red-600 mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                <div className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full inline-block">
                  {service.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

    {/* Video Types Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Video Specialties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diverse formats for every communication need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videoTypes.map((type, index) => (
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
                      <FiCheckCircle className="text-red-500 mt-1 mr-2 flex-shrink-0" />
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
    <section className="py-20 bg-gradient-to-r from-red-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Video Content Works</h2>
            <p className="text-xl mb-8">
              Video is the most engaging and effective medium for modern communication.
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
                  <FiCheckCircle className="text-red-300 text-xl mt-1 mr-3 flex-shrink-0" />
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
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black">
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1579107622005-5f5ab1b0c48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Video production" 
                className="w-full h-full object-cover opacity-80"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Video Production Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined workflow from concept to delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            { step: "1", title: "Concept", icon: "💡" },
            { step: "2", title: "Script/Storyboard", icon: "📝" },
            { step: "3", title: "Production", icon: "🎥" },
            { step: "4", title: "Post-Production", icon: "🎬" },
            { step: "5", title: "Delivery", icon: "🚀" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="w-12 h-12 bg-red-100 text-red-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Video Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See examples of our 3D/2D animation and video work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden aspect-video bg-black"
            >
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <img 
                src={`https://source.unsplash.com/random/800x450/?animation,${index}`}
                alt="Video portfolio sample"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-lg">{index === 0 ? "3D Product Animation" : "2D Explainer Video"}</h3>
                <p className="text-red-200 text-sm">Client: Example Brand</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create stunning video content that engages your audience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Start Your Video Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  </>
);

export default VideoServices;