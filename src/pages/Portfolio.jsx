import React, { useEffect, useState } from "react";
import OurWorkCard from "../components/OurWorkCard.jsx";
import HeroSection from "../components/layout/HeroSection";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Portfolio = () => {
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

  if (loading) return <div className="text-center py-20 text-lg font-medium text-cyan-700">Loading works...</div>;
  if (error) return <div className="text-center py-20 text-red-600 font-semibold">{error}</div>;

  return (
    <>
      <HeroSection
        title="Our Portfolio"
        subtitle="Explore our diverse range of creative projects and success stories."
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Portfolio" }
        ]}
      />
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((item, idx) => (
            <OurWorkCard
              key={item._id || item.slug || idx}
              work={item}
              index={idx}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
