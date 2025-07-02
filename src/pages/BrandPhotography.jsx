import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera, FiUsers, FiShoppingBag, FiImage, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Dummy data
const photographyServices = [
  {
    icon: <FiUsers className="text-4xl" />,
    title: "Corporate Photography",
    description: "Professional images of your team and workplace",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Executive portraits", "Team photos", "Office environment"]
  },
  {
    icon: <FiShoppingBag className="text-4xl" />,
    title: "Product Photography",
    description: "Showcase your products in the best light",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["E-commerce ready", "Lifestyle shots", "Detail close-ups"]
  },
  {
    icon: <FiImage className="text-4xl" />,
    title: "Lifestyle Photography",
    description: "Authentic images of your products in use",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Real-world settings", "Emotional connection", "Storytelling"]
  }
];

const benefits = [
  "Consistent visual brand identity",
  "Higher engagement on social media",
  "Increased product conversion rates",
  "Professional image in your industry",
  "Authentic connection with customers"
];

const processSteps = [
  {
    title: "Concept Development",
    description: "We plan the shoot to align with your brand goals"
  },
  {
    title: "Styling & Setup",
    description: "Professional preparation of subjects and environment"
  },
  {
    title: "Photoshoot",
    description: "High-quality capture with proper lighting and composition"
  },
  {
    title: "Editing",
    description: "Professional retouching and color correction"
  },
  {
    title: "Delivery",
    description: "High-res files optimized for all platforms"
  }
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

const BrandPhotography = () => (
  <>
    <HeroSection 
      title="Brand Photography" 
      subtitle="Professional photography for your brand."
      breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Brand Photography' }]}
      backgroundImage="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
            Visual Storytelling for Your Brand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Professional photography builds trust, communicates quality, and creates emotional connections with your audience.
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
          {photographyServices.map((service, index) => (
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
                  <h4 className="font-medium text-gray-800">Includes:</h4>
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
            <h2 className="text-3xl font-bold mb-6">The Power of Professional Brand Photography</h2>
            <p className="text-xl mb-8">
              High-quality images can transform how customers perceive your brand.
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
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1522206024047-9c925421675b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Professional photography session" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Photography Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to final delivery, we ensure exceptional quality
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 -ml-px"></div>
          
          <div className="space-y-16 lg:space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-blue-900 font-bold text-lg mb-2">Step {index + 1}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center my-8 lg:my-0">
                  <div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-blue-900 flex items-center justify-center text-blue-900 font-bold text-2xl">
                    <FiCamera className="text-3xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Gallery Preview Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Photography Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Examples of our brand photography projects
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {[
            "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522206024047-9c925421675b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ].map((image, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <motion.img
                src={image}
                alt="Brand photography sample"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Elevate Your Brand With Professional Photography</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's capture your brand's unique story through stunning imagery.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Schedule Your Photoshoot
          </motion.button>
        </motion.div>
      </div>
    </section>
  </>
);

export default BrandPhotography;