import React from "react";
import { services } from "../data/services";
import { FaPalette, FaChartLine, FaLaptopCode, FaFilm, FaTshirt, FaPenFancy, FaShapes, FaBook, FaProjectDiagram, FaClipboardCheck, FaChess, FaBoxOpen } from 'react-icons/fa';

// Map icon string to react-icons
const iconMap = {
  palette: <FaPalette className="text-4xl text-amber-600" />,
  'chart-line': <FaChartLine className="text-4xl text-blue-600" />,
  'laptop-code': <FaLaptopCode className="text-4xl text-green-600" />,
  film: <FaFilm className="text-4xl text-purple-600" />,
  tshirt: <FaTshirt className="text-4xl text-pink-600" />,
  'pen-fancy': <FaPenFancy className="text-2xl" />,
  shapes: <FaShapes className="text-2xl" />,
  book: <FaBook className="text-2xl" />,
  'project-diagram': <FaProjectDiagram className="text-2xl" />,
  'clipboard-check': <FaClipboardCheck className="text-2xl" />,
  chess: <FaChess className="text-2xl" />,
  'box-open': <FaBoxOpen className="text-2xl" />,
};

const Services = () => (
  <section className="py-16 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-xl transition">
          {service.coverImage && (
            <img
              src={service.coverImage.url.startsWith('http') ? service.coverImage.url : service.coverImage.url.replace('/images', 'https://placehold.co/400x200?text=Service')}
              alt={service.coverImage.alt || service.title}
              className="w-full h-40 object-cover rounded mb-4"
              style={{ maxWidth: 320 }}
            />
          )}
          <div className="mb-3">
            {iconMap[service.icon] || <span className="text-4xl">🎨</span>}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
          <p className="text-gray-600 text-center mb-3">{service.shortDescription || service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 