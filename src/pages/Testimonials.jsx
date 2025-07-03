import React, { useState, useEffect, useRef } from "react";
import { testimonials } from "../data/testimonials";

const SLIDE_INTERVAL = 3000; // 3 seconds

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsCount = testimonials.length;
  const intervalRef = useRef();

  // Determine how many testimonials to show based on screen size
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + slidesToShow) % testimonialsCount);
    }, SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [slidesToShow, testimonialsCount]);

  // Get the testimonials to display
  const getVisibleTestimonials = () => {
    let visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(testimonials[(current + i) % testimonialsCount]);
    }
    return visible;
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Testimonials</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700">
        {getVisibleTestimonials().map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
            <div className="text-2xl font-semibold text-cyan-700 mb-2">{testimonial.name}</div>
            <div className="text-gray-600 italic mb-4">"{testimonial.feedback}"</div>
            <div className="text-sm text-gray-400 font-medium">{testimonial.company}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

