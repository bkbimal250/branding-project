import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import HeroSection from "../components/layout/HeroSection";
import EnquiryForm from "../components/EnquiryForm";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email Us",
      info: "info@memoire.co.in",
      link: "mailto:info@memoire.co.in"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Call Us",
      info: "+91 12345 67890",
      link: "tel:+911234567890"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Visit Us",
      info: "Mindspace, Airoli East, Navi Mumbai",
      link: "https://goo.gl/maps/EXAMPLE"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <HeroSection
        title="Contact Us"
        subtitle="Have questions or want to discuss a project? Reach out to our team — we'd love to hear from you."
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Contact" }]}
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether it's a project inquiry, partnership, or just a hello — drop us a line!
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enquiry Form */}
          <EnquiryForm />

          {/* Contact Info & Map */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    variants={fadeIn}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group"
                  >
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Embedded Google Map */}
            <motion.div
              variants={fadeIn}
              className="rounded-2xl shadow-xl overflow-hidden h-64 sm:h-80 lg:h-96"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7537.225400736068!2d72.99112469213695!3d19.168423378220872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf48ffd85c23%3A0x9cc262e352f3b9ea!2sMindspace%20Airoli%20East!5e0!3m2!1sen!2sin!4v1751869314569!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mindspace Airoli Map"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
