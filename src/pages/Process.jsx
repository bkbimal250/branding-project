import React from "react";
import { processFlow } from "../data/processFlow";

const Process = () => (
  <section className="py-16 px-4 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
    <ol className="space-y-6">
      {processFlow.map((step) => (
        <li key={step.step} className="bg-white rounded-lg shadow p-6 flex gap-4 items-start">
          <span className="text-2xl font-bold text-blue-500">{step.step}</span>
          <div>
            <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Process; 