import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/layout/HeroSection";
import ServiceCard from "../components/layout/ServiceCard";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const DEFAULT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/services/slug/${slug}`);
        const serviceData = res.data?.data;
        setService(serviceData);

        // Fetch related services by category
        const relatedRes = await axios.get(
          `${BASE_URL}/services/category/${serviceData.category}`
        );
        const filteredRelated = relatedRes.data?.data?.filter(
          (s) => s.slug !== slug
        );
        setRelated(filteredRelated);
      } catch (err) {
        setError("Failed to load service details.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchService();
  }, [slug]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!service) return <div className="text-center py-20">Service not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      <HeroSection
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.featuredImage || DEFAULT_HERO_IMAGE}
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: service.title },
        ]}
      />

      <div className="py-12 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* --- Main Content --- */}
        <motion.div
          className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl shadow-lg p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <img
            src={service.featuredImage}
            alt={service.title}
            className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
          />

          <div className="text-lg text-gray-700 mb-4">{service.shortDescription}</div>
          <div className="text-gray-600 mb-6">{service.description}</div>

          {/* Features */}
          {service.features?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-800 mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {service.technologies?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-800 mb-2">Technologies Used</h3>
              <ul className="flex flex-wrap gap-2 text-sm text-white">
                {service.technologies.map((tech, idx) => (
                  <li key={idx} className="bg-cyan-600 px-3 py-1 rounded-full">{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {service.tags?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-800 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* --- Sidebar --- */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <h2 className="text-xl font-bold text-cyan-700 mb-4">Related Services</h2>
          <motion.div className="space-y-4" initial="hidden" animate="visible">
            <AnimatePresence>
              {related?.map((item, idx) => (
                <ServiceCard key={item._id} service={item} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetails;
