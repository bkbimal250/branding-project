import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiGift, FiPackage, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Dummy data
const merchandiseTypes = [
  {
    icon: <FiShoppingBag className="text-4xl" />,
    title: "Apparel",
    description: "Custom t-shirts, hoodies, and workwear that showcase your brand",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    examples: ["Polo shirts", "Branded jackets", "Custom uniforms"]
  },
  {
    icon: <FiGift className="text-4xl" />,
    title: "Promotional Products",
    description: "Practical items that keep your brand top of mind",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    examples: ["Branded notebooks", "Custom USB drives", "Logo pens"]
  },
  {
    icon: <FiPackage className="text-4xl" />,
    title: "Premium Merchandise",
    description: "High-end items for VIP clients and employees",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    examples: ["Leather goods", "Tech accessories", "Eco-friendly products"]
  }
];

const benefits = [
  "Extends brand visibility beyond digital spaces",
  "Creates tangible connections with customers",
  "Enhances employee engagement and pride",
  "Generates walking advertisements",
  "Builds brand loyalty through utility"
];

const processSteps = [
  {
    title: "Concept Development",
    description: "We identify the best products to represent your brand"
  },
  {
    title: "Design Customization",
    description: "Our designers create visually appealing merchandise"
  },
  {
    title: "Material Selection",
    description: "We choose quality materials that reflect your brand values"
  },
  {
    title: "Production",
    description: "Ethical manufacturing with strict quality control"
  },
  {
    title: "Distribution",
    description: "Strategic fulfillment to your locations or directly to recipients"
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

const BrandMerchandising = () => (
  <>
    <HeroSection 
      title="Brand Merchandising" 
      subtitle="Transform your brand into tangible experiences with high-quality custom merchandise."
      backgroundImage="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Brand Merchandising' }]}
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
            Wear Your Brand With Pride
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Quality merchandise creates lasting impressions. We design and produce custom items that your customers and employees will love to use every day.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {merchandiseTypes.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <div className="text-blue-600 mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Popular Items:</h4>
                  <ul className="space-y-1">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{example}</span>
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
            <h2 className="text-3xl font-bold mb-6">The Power of Branded Merchandise</h2>
            <p className="text-xl mb-8">
              Quality merchandise creates lasting connections between your brand and your audience.
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
                  <FiTrendingUp className="text-yellow-400 text-xl mt-1 mr-3 flex-shrink-0" />
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
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Branded merchandise examples" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Merchandising Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to delivery, we ensure quality at every step
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
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Case Study Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How our merchandise solutions have helped brands stand out
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={fadeIn}>
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Merchandise case study" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tech Startup Swag Kit</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-xl">92%</div>
                  <div className="text-gray-600 text-sm">Employee adoption</div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-xl">3.5x</div>
                  <div className="text-gray-600 text-sm">Social media mentions</div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-xl">10K+</div>
                  <div className="text-gray-600 text-sm">Impression per month</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Our comprehensive merchandise package for a rising tech company became part of their culture, with employees proudly wearing branded apparel and using custom accessories daily.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Read full case study →
              </button>
            </div>
          </motion.div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Brand Merchandise?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's design products that your audience will love and use every day.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Start Your Merchandise Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  </>
);

export default BrandMerchandising;