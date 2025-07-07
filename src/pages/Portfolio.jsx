import React from "react";
import { work } from "../data/work.js";
import OurWorkCard from "../components/OurWorkCard.jsx";
import HeroSection from "../components/layout/HeroSection";

const Portfolio = () => (
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
        {work.map((item) => (
          <OurWorkCard
            key={item.id}
            coverImage={item.coverMedia}
            title={item.title}
            shortDesc={item.shortDesc}
            date={item.date}
            clientName={item.clientName}
            coverType={item.coverType}
            link={`/work/${item.id}`}
          />
        ))}
      </div>
    </section>
  </>
);

export default Portfolio;
