import React from "react";
import { Link } from 'react-router-dom';
import { FaVideo, FaInstagram, FaPalette, FaCube } from 'react-icons/fa';

const services = [
  {
    icon: <FaVideo className="text-cyan-500 w-10 h-10 mb-2" />,
    title: 'Video Advertising',
    desc: 'Engaging video ads to boost your brand reach and conversions.'
  },
  {
    icon: <FaInstagram className="text-cyan-500 w-10 h-10 mb-2" />,
    title: 'Social Media Post/Reel',
    desc: 'Creative posts and reels for all social platforms.'
  },
  {
    icon: <FaPalette className="text-cyan-500 w-10 h-10 mb-2" />,
    title: 'Brand Identity',
    desc: 'Unique branding and visual identity for your business.'
  },
  {
    icon: <FaCube className="text-cyan-500 w-10 h-10 mb-2" />,
    title: '2D/3D Videos',
    desc: 'Stunning 2D/3D animation and explainer videos.'
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'Invertvisuals transformed our brand presence with their creative videos. Highly recommended!',
    company: 'Acme Corp.'
  },
  {
    name: 'Rahul Verma',
    text: 'Professional, timely, and super creative. Our go-to team for all things visual!',
    company: 'StartupX'
  },
  {
    name: 'Aisha Khan',
    text: 'Loved the 3D animation work! It made our product launch a huge success.',
    company: 'TechNova'
  },
];

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2980] via-[#26d0ce] to-[#1e3c72] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Creative Visual Services for Modern Brands</h1>
        <p className="text-lg md:text-2xl mb-8 text-cyan-100 max-w-2xl mx-auto">Grow your business with stunning videos, social content, and brand identity crafted by experts.</p>
        <Link to="/contact" className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-200 text-xl focus-visible:ring-2 focus-visible:ring-cyan-400">LET'S TALK</Link>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Services</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-200">
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#232526] via-[#414345] to-[#283e51] text-white">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-2xl font-bold mb-4 text-white uppercase">{t.name[0]}</div>
              <p className="italic mb-4">"{t.text}"</p>
              <span className="font-semibold text-cyan-200">{t.name}</span>
              <span className="text-cyan-400 text-sm">{t.company}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 