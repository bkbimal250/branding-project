import React from 'react';

const phoneNumber = '911234567890'; // Replace with your WhatsApp number (country code + number, no + sign)
const message = encodeURIComponent('Hello! I would like to know more about your services.');

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${phoneNumber}?text=${message}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group"
    aria-label="Chat with us on WhatsApp"
    style={{ textDecoration: 'none' }}
  >
    <span className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg border border-blue-600 font-semibold text-base transition-all duration-200 flex items-center">
      Chat with us 🧑‍💻
    </span>
  </a>
);

export default WhatsAppButton; 