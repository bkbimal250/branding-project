import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import HeroSection from '../components/layout/HeroSection';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
      info: "408, Kamdhenu Commerz Building, Sector-13, Kharghar, Navi Mumbai",
      link: "https://goo.gl/maps/EXAMPLE"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <HeroSection
        title="Contact Us"
        subtitle="Have questions or want to discuss a project? Reach out to our team - we'd love to hear from you."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss a project? Reach out to our team - we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <FiSend />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
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

            {/* Google Map */}
            <motion.div
              variants={fadeIn}
              className="rounded-xl shadow-xl overflow-hidden h-64 sm:h-80 lg:h-96"
            >
              <div id="map" className="w-full h-full">
                {/* Fallback if map doesn't load */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Loading map...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { day: "Monday", hours: "9:00 AM - 6:00 PM" },
              { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
              { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
              { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
              { day: "Friday", hours: "9:00 AM - 6:00 PM" },
              { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
              { day: "Sunday", hours: "Closed" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${item.hours === "Closed" ? "bg-red-500" : "bg-green-500"}`}></div>
                <div>
                  <p className="font-medium text-gray-900">{item.day}</p>
                  <p className="text-gray-600">{item.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Initialize Google Map */}
      <script>
        {`
          function initMap() {
            const location = { lat: 19.0488, lng: 73.0686 }; // Kharghar coordinates
            const map = new google.maps.Map(document.getElementById("map"), {
              zoom: 15,
              center: location,
              styles: [
                {
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    { "saturation": 36 },
                    { "color": "#333333" },
                    { "lightness": 40 }
                  ]
                },
                {
                  "featureType": "all",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    { "visibility": "on" },
                    { "color": "#ffffff" },
                    { "lightness": 16 }
                  ]
                },
                {
                  "featureType": "all",
                  "elementType": "labels.icon",
                  "stylers": [
                    { "visibility": "off" }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry.fill",
                  "stylers": [
                    { "color": "#fefefe" },
                    { "lightness": 20 }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    { "color": "#fefefe" },
                    { "lightness": 17 },
                    { "weight": 1.2 }
                  ]
                },
                {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [
                    { "color": "#f5f5f5" },
                    { "lightness": 20 }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    { "color": "#f5f5f5" },
                    { "lightness": 21 }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                    { "color": "#ffffff" },
                    { "lightness": 17 }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    { "color": "#ffffff" },
                    { "lightness": 29 },
                    { "weight": 0.2 }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                    { "color": "#ffffff" },
                    { "lightness": 18 }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "geometry",
                  "stylers": [
                    { "color": "#ffffff" },
                    { "lightness": 16 }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "geometry",
                  "stylers": [
                    { "color": "#f2f2f2" },
                    { "lightness": 19 }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    { "color": "#e9e9e9" },
                    { "lightness": 17 }
                  ]
                }
              ]
            });
            
            new google.maps.Marker({
              position: location,
              map: map,
              title: "Mémoire Agency",
              icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              }
            });
          }
          
          // Call initMap when Google Maps script is loaded
          window.initMap = initMap;
        `}
      </script>
    </div>
  );
};

export default Contact;