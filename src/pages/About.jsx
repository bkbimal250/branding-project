import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPalette, FaChartLine, FaCamera, FaCube, FaThumbsUp, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
import HeroSection from '../components/layout/HeroSection';

const About = () => {
  useEffect(() => {
    const scrollAnimations = () => {
      const elements = document.querySelectorAll(".scroll-animation");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", scrollAnimations);
    return () => window.removeEventListener("scroll", scrollAnimations);
  }, []);

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

  const serviceItems = [
    { icon: <FaLightbulb />, title: "Brand Strategy & Design", desc: "Comprehensive brand identity development from logos to full visual systems" },
    { icon: <FaPalette />, title: "Packaging & Space Design", desc: "Transformative designs for physical products and environments" },
    { icon: <FaCamera />, title: "Advertising & Photography", desc: "Captivating visual campaigns and professional photography" },
    { icon: <FaChartLine />, title: "Digital Marketing", desc: "Data-driven online strategies for maximum engagement" },
    { icon: <FaCube />, title: "3D Modeling & Animation", desc: "Immersive 3D visuals that bring products to life" }
  ];

  const testimonials = [
    { name: "Vikash Patel", quote: "Mémoire has helped us develop a strong brand identity and successful digital marketing campaign." },
    { name: "Riddhi Sawant", quote: "Impressed by Mémoire's digital marketing prowess! Their strategic approach boosted our online presence." },
    { name: "Mehfooz K.", quote: "Outdoor marketing solutions are top‑notch. Creative concepts captivated our audience." }
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection
        title="About Us"
        subtitle="Crafting captivating brand experiences and pioneering innovative branding approaches."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About' }]}
        backgroundImage="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://assets.codepen.io/9394943/noise-light.png')]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Crafting Captivating Brand Experiences</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">We pioneer innovative branding approaches that redefine industry standards</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
        
        <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Company Overview <span className="text-yellow-400">🎯</span></h2>
            <p className="text-lg text-gray-700 mb-6">
              Mémoire is a full-service branding and marketing agency based in Kharghar, Navi Mumbai. We partner with businesses of all sizes, delivering integrated brand strategies rooted in creativity and data-driven insights.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-900 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Location</h4>
                  <p className="text-gray-600">408, Kamdhenu Commerz Building, Sector‑13, Kharghar, Navi Mumbai</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="mb-6">To craft captivating brand experiences that drive growth and loyalty</p>
                  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                  <p>To pioneer innovative branding approaches that redefine industry standards</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-full h-full bg-yellow-400 rounded-2xl -bottom-4 -right-4"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions tailored to elevate your brand</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all scroll-animation"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-900 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all scroll-animation"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4"><FaThumbsUp /></div>
              <h3 className="text-xl font-bold mb-3">Why Choose Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Expert team of strategists & creatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>End-to-end brand solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Proven track record of success</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Workflow Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A structured approach to delivering exceptional results</p>
        </motion.div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 -ml-px"></div>
          
          <div className="space-y-16">
            {[
              { title: "Discovery & Strategy", desc: "Collaborate to understand business verticals, audience, competition. Define brand roadmap" },
              { title: "Concept & Design", desc: "Design identity, packaging, signage, digital mockups" },
              { title: "Execution & Production", desc: "Create assets across advertising, web, social, photography, 3D/animation" },
              { title: "Deployment & Optimization", desc: "Launch campaigns; track performance; refine for growth" }
            ].map((step, index) => (
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
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center my-8 lg:my-0">
                  <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-blue-900 flex items-center justify-center text-blue-900 font-bold text-2xl">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Client Feedback</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">Hear what our clients say about working with us</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20 scroll-animation"
              >
                <div className="text-yellow-400 text-4xl mb-4">"</div>
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="font-bold">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="order-2 md:order-1">
            <div className="bg-blue-100 p-2 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FaShieldAlt className="text-blue-900 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Trust & Security</h2>
            <p className="text-lg text-gray-700 mb-6">
              We prioritize your data security and maintain the highest standards of professional integrity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-green-100 text-green-800 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Valid SSL Certificate</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 text-green-800 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Rated 'Good' by ScamAdviser</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 text-green-800 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Secure Data Handling</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="order-1 md:order-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Brand?</h3>
                  <p className="mb-6">Get in touch with our team to discuss how we can help you achieve your branding and marketing goals.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Contact Us
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;