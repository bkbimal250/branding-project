import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OurWorkCard from '../components/OurWorkCard';
import { motion } from 'framer-motion';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const OurWorks = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/works`);
        setWorks(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError('Error fetching works');
      } finally {
        setLoading(false);
      }
    };
    fetchWorks();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-medium text-cyan-700">
        Loading works...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Our Works
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
      >
        {works.map((work, index) => (
          <OurWorkCard key={work.slug || work._id || index} work={work} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default OurWorks; 