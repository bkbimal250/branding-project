import React from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiLayers, FiShoppingBag, FiTruck, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Dummy data
const packagingServices = [
  {
    icon: <FiBox className="text-4xl" />,
    title: "Custom Box Design",
    description: "Tailored packaging that reflects your brand identity",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "40% better unboxing experience"
  },
  {
    icon: <FiLayers className="text-4xl" />,
    title: "Sustainable Packaging",
    description: "Eco-friendly solutions that reduce environmental impact",
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "100% recyclable materials"
  },
  {
    icon: <FiShoppingBag className="text-4xl" />,
    title: "Retail Packaging",
    description: "Shelf-ready designs that attract customers",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "30% increase in shelf appeal"
  },
  {
    icon: <FiTruck className="text-4xl" />,
    title: "Shipping Solutions",
    description: "Durable packaging optimized for logistics",
    image: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "20% fewer damaged goods"
  }
];

const packagingTypes = [
  {
    name: "Primary Packaging",
    description: "Direct product containment and protection",
    examples: ["Bottles", "Jars", "Pouches", "Tubes"]
  },
  {
    name: "Secondary Packaging",
    description: "Grouping and display of primary packages",
    examples: ["Boxes", "Cartons", "Shrink wrap", "Trays"]
  },
  {
    name: "Tertiary Packaging",
    description: "Bulk handling and shipping protection",
    examples: ["Pallets", "Crates", "Shipping containers", "Stretch wrap"]
  }
];

const benefits = [
  "Enhanced brand recognition",
  "Improved product protection",
  "Sustainable material options",
  "Cost-effective solutions",
  "Customized for your target market"
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

const Packaging = () => (
  <>
    <HeroSection 
      title="Packaging Solutions" 
      subtitle="Transform your product presentation with innovative packaging designs."
      breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Packaging' }]}
      backgroundImage="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
            Packaging That Protects and Promotes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your packaging is the first physical touchpoint with customers - make it memorable, 
            functional, and aligned with your brand values.
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
          {packagingServices.map((service, index) => (
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
                <div className="text-green-600 mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">
                  {service.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

    {/* Packaging Types Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Packaging Levels</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for every packaging need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packagingTypes.map((type, index) => (
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
    <section className="py-20 bg-gradient-to-r from-green-800 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">The Power of Great Packaging</h2>
            <p className="text-xl mb-8">
              More than just a container - packaging is a marketing tool, brand ambassador, 
              and sustainability statement.
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
                  <FiCheckCircle className="text-green-300 text-xl mt-1 mr-3 flex-shrink-0" />
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
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Packaging examples" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <FiBox className="text-white text-6xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">Custom Solutions</h3>
                  <p className="text-green-200 mt-2">Tailored to your product requirements</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-full h-full bg-yellow-400 rounded-2xl -bottom-4 -right-4"></div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Materials Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Packaging Materials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality materials for every application
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 text-center">
          {[
            { name: "Corrugated", icon: "📦", description: "Durable and versatile" },
            { name: "Kraft Paper", icon: "🧻", description: "Eco-friendly and recyclable" },
            { name: "Rigid Box", icon: "🎁", description: "Premium luxury packaging" },
            { name: "Biodegradable", icon: "🌱", description: "Plant-based materials" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Packaging Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to delivery - seamless packaging solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            { step: "1", title: "Consultation", icon: "💬" },
            { step: "2", title: "Design", icon: "✏️" },
            { step: "3", title: "Prototyping", icon: "🔄" },
            { step: "4", title: "Production", icon: "🏭" },
            { step: "5", title: "Delivery", icon: "🚚" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Elevate Your Packaging?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create packaging that protects your product and promotes your brand.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Get a Packaging Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  </>
);

export default Packaging;