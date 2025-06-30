import React from "react";
import { faqs } from "../data/faqs";

const FAQs = () => (
  <section className="py-16 px-4 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-lg mb-2">Q: {faq.question}</h3>
          <p className="text-gray-700">A: {faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQs; 