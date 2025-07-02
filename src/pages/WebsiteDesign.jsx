import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiSmartphone, FiGlobe, FiCode, FiZap, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Dummy data
const webServices = [
  {
    icon: <FiLayout className="text-4xl" />,
    title: "Custom Website Design",
    description: "Tailored designs that reflect your brand identity",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Unique visual identity", "User-centric design", "Brand consistency"]
  },
  {
    icon: <FiSmartphone className="text-4xl" />,
    title: "Responsive Development",
    description: "Flawless performance across all devices",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mobile-first approach", "Touch optimization", "Cross-browser compatible"]
  },
  {
    icon: <FiGlobe className="text-4xl" />,
    title: "E-Commerce Solutions",
    description: "Online stores that convert visitors to customers",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Secure checkout", "Product management", "Payment integration"]
  }
];

const techStack = [
  {
    name: "Frontend",
    technologies: ["React", "Next.js", "Tailwind CSS", "GSAP"]
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Express", "Firebase", "MongoDB"]
  },
  {
    name: "CMS",
    technologies: ["WordPress", "Sanity.io", "Shopify", "Contentful"]
  }
];

const benefits = [
  "Increased online visibility",
  "Higher conversion rates",
  "Improved user experience",
  "Competitive edge in your industry",
  "24/7 digital presence"
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

const WebsiteDesign = () => (
  <>
    <HeroSection 
      title="Website Design" 
      subtitle="Modern, responsive websites for your brand."
      breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Website Design' }]}
      backgroundImage="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
            Your Digital Front Door
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            In today's digital-first world, your website is often the first impression customers have of your business. 
            We craft websites that not only look stunning but deliver measurable results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {webServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

    {/* Tech Stack Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use modern technologies to build fast, secure, and scalable websites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FiZap className="text-yellow-500 mr-2" />
                {tech.name}
              </h3>
              <ul className="space-y-2">
                {tech.technologies.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                      {i + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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
            <h2 className="text-3xl font-bold mb-6">Why Invest in Professional Web Design?</h2>
            <p className="text-xl mb-8">
              A well-designed website is your most powerful marketing asset, working for you 24/7.
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
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Web design process" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to creating exceptional websites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            { step: "1", title: "Discovery", icon: "🔍" },
            { step: "2", title: "Wireframing", icon: "📐" },
            { step: "3", title: "Design", icon: "🎨" },
            { step: "4", title: "Development", icon: "💻" },
            { step: "5", title: "Launch", icon: "🚀" }
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready for a Website That Works?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a digital experience that represents your brand and drives results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Start Your Web Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  </>
);

export default WebsiteDesign;