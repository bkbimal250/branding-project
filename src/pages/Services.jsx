import React from "react";
import { services } from "../data/services";

const Services = () => (
  <section className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="text-5xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 text-center">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 