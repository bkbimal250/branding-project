import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingBalls = ({ isMobile }) => {
  const balls = [
    { id: 1, color: 'bg-pink-400', size: isMobile ? 20 : 40, duration: 25, path: [[10, 20], [90, 80]] },
    { id: 2, color: 'bg-blue-300', size: isMobile ? 15 : 30, duration: 30, path: [[80, 30], [20, 70]] },
    { id: 3, color: 'bg-purple-300', size: isMobile ? 25 : 50, duration: 35, path: [[15, 70], [85, 30]] },
    { id: 4, color: 'bg-yellow-300', size: isMobile ? 10 : 20, duration: 40, path: [[90, 50], [10, 50]] },
    { id: 5, color: 'bg-green-300', size: isMobile ? 18 : 35, duration: 45, path: [[30, 80], [70, 20]] },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className={`absolute rounded-full opacity-20 blur-[2px] ${ball.color}`}
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
          }}
          initial={{
            x: `${ball.path[0][0]}%`,
            y: `${ball.path[0][1]}%`,
          }}
          animate={{
            x: `${ball.path[1][0]}%`,
            y: `${ball.path[1][1]}%`,
          }}
          transition={{
            duration: ball.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const HomeHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      title: "Empowering Brands With Proven Digital Marketing Strategies",
      mobileTitle: "Proven Digital Marketing Strategies",
      subtitle: "Transforming Clicks Into Measurable Business Growth.",
      mobileSubtitle: "Transform Clicks Into Growth",
      testimonial: {
        rating: "★★★★★",
        text: "Transforming Clicks Into Measurable Business Growth.",
        mobileText: "Transformed our digital presence",
        author: "Moringa Pawder",
        role: "Real Estate Investor"
      },
      bgImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop')",
      mobileBgImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop')",
      bgColor: "bg-blue-900/50"
    },
    {
      title: "Data-Driven Marketing Solutions",
      mobileTitle: "Data-Driven Marketing",
      subtitle: "Turning Analytics Into Actionable Strategies.",
      mobileSubtitle: "Analytics Into Action",
      testimonial: {
        rating: "★★★★★",
        text: "Our revenue increased by 200% in just 3 months!",
        mobileText: "+200% revenue in 3 months",
        author: "Sarah Johnson",
        role: "E-commerce Owner"
      },
      bgImage: "url('https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?q=80&w=1632&auto=format&fit=crop')",
      mobileBgImage: "url('https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?q=80&w=600&auto=format&fit=crop')",
      bgColor: "bg-purple-900/50"
    },
    {
      title: "Customized Growth Strategies",
      mobileTitle: "Custom Growth Strategies",
      subtitle: "Tailored Solutions For Your Unique Business Needs.",
      mobileSubtitle: "Tailored Business Solutions",
      testimonial: {
        rating: "★★★★★",
        text: "The best marketing decision we ever made.",
        mobileText: "Best marketing decision",
        author: "Michael Chen",
        role: "Tech Startup CEO"
      },
      bgImage: "url('https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=1170&auto=format&fit=crop')",
      mobileBgImage: "url('https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=600&auto=format&fit=crop')",
      bgColor: "bg-green-900/50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Floating decorative balls */}
      <FloatingBalls isMobile={isMobile} />

      {/* Background images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: isMobile 
              ? slides[currentSlide].mobileBgImage 
              : slides[currentSlide].bgImage 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      
      {/* Color overlay */}
      <div className={`absolute inset-0 ${slides[currentSlide].bgColor} transition-colors duration-1000`}></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="text-center w-full max-w-4xl mx-auto text-white px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {isMobile ? slides[currentSlide].mobileTitle : slides[currentSlide].title}
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {isMobile ? slides[currentSlide].mobileSubtitle : slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8 md:mb-12"
            >
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg"
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get A Quote
              </motion.button>
            </motion.div>
            
            {/* Testimonial */}
            <motion.div 
              className={`bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 md:p-6 mx-auto ${isMobile ? 'max-w-xs' : 'max-w-md'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-yellow-400 text-xl md:text-2xl mb-1 md:mb-2">
                {slides[currentSlide].testimonial.rating}
              </div>
              <p className="italic text-black text-sm md:text-base mb-2 md:mb-4">
                {isMobile ? slides[currentSlide].testimonial.mobileText : slides[currentSlide].testimonial.text}
              </p>
              <div className="font-semibold text-sm md:text-base">
                {slides[currentSlide].testimonial.author}
              </div>
              <div className="text-xs md:text-sm text-black opacity-80">
                {slides[currentSlide].testimonial.role}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-1 md:p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-1 md:p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center space-x-1 md:space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
            whileHover={{ scale: isMobile ? 1 : 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHeroSection;