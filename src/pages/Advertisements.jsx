import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiBarChart2, FiFilm, FiSmartphone, FiDollarSign, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Dummy data
const adServices = [
  {
    icon: <FiFilm className="text-4xl" />,
    title: "TV Commercials",
    description: "High-impact video ads for television broadcasting",
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "85% increase in brand recall"
  },
  {
    icon: <FiSmartphone className="text-4xl" />,
    title: "Digital Ads",
    description: "Targeted campaigns for social media and websites",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "3-5x higher engagement rates"
  },
  {
    icon: <FiBarChart2 className="text-4xl" />,
    title: "Programmatic Ads",
    description: "AI-driven real-time ad placements",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stats: "40% lower customer acquisition costs"
  }
];

const adTypes = [
  {
    name: "Video Ads",
    description: "15-30 second spots for TV and digital platforms",
    examples: ["Product demos", "Testimonials", "Storytelling"]
  },
  {
    name: "Display Ads",
    description: "Static and animated banners for websites",
    examples: ["Leaderboards", "Sidebar ads", "Interstitials"]
  },
  {
    name: "Native Ads",
    description: "Seamless content integration",
    examples: ["Sponsored articles", "In-feed social ads", "Recommendation widgets"]
  }
];

const benefits = [
  "Precise audience targeting",
  "Measurable ROI",
  "Increased brand awareness",
  "Higher conversion rates",
  "Competitive advantage"
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

const Advertisements = () => (
  <>
    <HeroSection 
      title="Advertisements" 
      subtitle="Reach your audience with impactful ads."
      breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Advertisements' }]}
      backgroundImage="https://images.unsplash.com/photo-1750779941037-b3cbfde22acb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Amplify Your Message
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            In today's crowded marketplace, strategic advertising makes the difference between being seen and being remembered. 
            We craft campaigns that cut through the noise and drive action.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {adServices.map((service, index) => (
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
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {service.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

    {/* Ad Types Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advertising Formats</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multi-channel solutions tailored to your campaign goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {adTypes.map((type, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Why Our Advertising Works</h2>
            <p className="text-xl mb-8">
              We combine creative excellence with data-driven strategies to deliver campaigns that perform.
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
                alt="Advertising analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 w-full h-full bg-yellow-400 rounded-2xl -bottom-4 -right-4"></div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Case Study Section */}
    <section className="py-20 bg-white">
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
            Real campaigns delivering real results
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
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Case study" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fashion Retail Campaign</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-xl">4.2x</div>
                  <div className="text-gray-600 text-sm">ROI increase</div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-xl">68%</div>
                  <div className="text-gray-600 text-sm">Engagement boost</div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-xl">3M+</div>
                  <div className="text-gray-600 text-sm">Impressions</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Our targeted social media campaign for a luxury fashion brand delivered exceptional engagement rates and drove a significant increase in online sales during the holiday season.
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Campaign?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create advertising that doesn't just get seen - gets results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  </>
);

export default Advertisements;