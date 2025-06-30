import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import FAQs from "../pages/FAQs";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Process from "../pages/Process";
import Industries from "../pages/Industries";
import Layout from "../components/layout/Layout";

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter; 