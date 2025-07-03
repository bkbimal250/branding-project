import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../data/services";
import ServiceCard from "../components/layout/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/layout/HeroSection";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const DEFAULT_HERO_IMAGE = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80";

const ServiceDetails = () => {
  const { slug } = useParams();
  const filtered = slug ? services.filter((s) => s.slug === slug) : services;
  const isSingle = filtered.length === 1;
  const service = isSingle ? filtered[0] : null;

  return (
    <div className="bg-white min-h-screen">
      <HeroSection
        title={isSingle ? service.title : "Our Services"}
        subtitle={isSingle ? service.shortDescription : "Explore all our creative and strategic services for your brand."}
        backgroundImage={isSingle ? service.coverImage?.url : DEFAULT_HERO_IMAGE}
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          ...(isSingle ? [{ label: service.title }] : [])
        ]}
      />
      <div className="py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          {isSingle ? service.title : "All Service Details"}
        </h1>
        {isSingle ? (
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* Main Details */}
            <motion.div
              className="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl shadow-lg p-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <img
                src={service.coverImage?.url}
                alt={service.coverImage?.alt}
                className="w-full h-56 object-cover rounded-xl mb-6 shadow-md"
              />
              <div className="text-lg text-gray-700 mb-4">{service.shortDescription}</div>
              <div className="text-gray-600 mb-6">{service.description}</div>
              <AnimatePresence>
                {service.features && service.features.length > 0 && (
                  <motion.div
                    className="mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={1}
                  >
                    <h3 className="text-xl font-semibold text-cyan-800 mb-2">Features</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {service.features.map((feature, idx) => (
                        <motion.li key={idx} className="text-gray-700" variants={fadeIn} custom={idx+2}>
                          <span className="font-semibold">{feature.title}:</span> {feature.description}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {service.process && service.process.length > 0 && (
                  <motion.div
                    className="mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={2}
                  >
                    <h3 className="text-xl font-semibold text-cyan-800 mb-2">Process</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      {service.process.map((step, idx) => (
                        <motion.li key={idx} className="text-gray-700" variants={fadeIn} custom={idx+3}>
                          <span className="font-semibold">{step.title}:</span> {step.description}
                        </motion.li>
                      ))}
                    </ol>
                  </motion.div>
                )}
                {service.deliverables && service.deliverables.length > 0 && (
                  <motion.div
                    className="mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={3}
                  >
                    <h3 className="text-xl font-semibold text-cyan-800 mb-2">Deliverables</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {service.deliverables.map((item, idx) => (
                        <motion.li key={idx} className="text-gray-700" variants={fadeIn} custom={idx+4}>{item}</motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {service.gallery && service.gallery.length > 0 && (
                  <motion.div
                    className="mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={4}
                  >
                    <h3 className="text-xl font-semibold text-cyan-800 mb-2">Gallery</h3>
                    <div className="flex flex-wrap gap-4">
                      {service.gallery.map((img, idx) => (
                        <motion.img key={idx} src={img.url} alt={img.alt} className="w-32 h-24 object-cover rounded-lg border" variants={fadeIn} custom={idx+5} />
                      ))}
                    </div>
                  </motion.div>
                )}
                {service.faqs && service.faqs.length > 0 && (
                  <motion.div
                    className="mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={5}
                  >
                    <h3 className="text-xl font-semibold text-cyan-800 mb-2">FAQs</h3>
                    <ul className="space-y-2">
                      {service.faqs.map((faq, idx) => (
                        <motion.li key={idx} variants={fadeIn} custom={idx+6}>
                          <span className="font-semibold">Q: {faq.question}</span>
                          <div className="ml-2 text-gray-700">A: {faq.answer}</div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {/* Sidebar: Similar Services */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <h2 className="text-xl font-bold text-cyan-700 mb-4">Similar Services</h2>
              <motion.div
                className="space-y-4"
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence>
                  {services
                    .filter((s) => s.category === service.category && s.slug !== service.slug)
                    .map((sim, idx) => (
                      <ServiceCard key={sim.slug} service={sim} index={idx} />
                    ))}
                </AnimatePresence>
              </motion.div>
            </aside>
          </div>
        ) : (
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {services.map((service, idx) => (
                <ServiceCard key={service.slug} service={service} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
