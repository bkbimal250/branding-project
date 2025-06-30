import React from "react";

const Contact = () => (
  <section className="py-16 px-4 max-w-xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
    <form className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
      <input className="border p-2 rounded" type="text" placeholder="Your Name" />
      <input className="border p-2 rounded" type="email" placeholder="Your Email" />
      <textarea className="border p-2 rounded" placeholder="Your Message" rows={4} />
      <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Send</button>
    </form>
  </section>
);

export default Contact; 