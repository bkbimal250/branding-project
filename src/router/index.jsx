import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import FAQs from "../pages/FAQs";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Process from "../pages/Process";
import Layout from "../components/layout/Layout";
import BrandIdentityDesign from "../pages/BrandIdentityDesign";
import DigitalMarketing from "../pages/DigitalMarketing";
import WebsiteDesign from "../pages/WebsiteDesign";
import VideoServices from "../pages/VideoServices";
import BrandMerchandising from "../pages/BrandMerchandising";
import ContentCreations from "../pages/ContentCreations";
import Advertisements from "../pages/Advertisements";
import Packaging from "../pages/Packaging";
import BrandPhotography from "../pages/BrandPhotography";
import SpaceDesign from "../pages/SpaceDesign";
import MotionGraphics from "../pages/MotionGraphics";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Careers from '../pages/Careers';
import Testimonials from "../pages/Testimonials";
import ServiceDetails from "../pages/ServiceDetails";
import Blogs from "../pages/Blogs";
import BlogsDetails from "../pages/BlogsDetails";
import NotFound from "../pages/NotFound";
import WorkDetail from "../pages/WorkDetail";
import ScrollTop from "../components/ScrollTop";
import AdminDashboard from "../admindashboard/AdminDashboard";
// Admin section pages
import AdminBlogs from "../admindashboard/Sections/Blogs/AdminBlogs";
import AdminServices from "../admindashboard/Sections/Services/AdminServices";
import AdminWorks from "../admindashboard/Sections/Works/AdminWorks";
import AdminServiceEdit from "../admindashboard/Sections/Services/AdminServiceEdit";
import ProtectedRoute from '../components/ProtectedRoute';
import AdminLayout from "../admindashboard/AdminLayout";
import AddService from "../admindashboard/addService";
import OurWorks from "../pages/OurWorks";
import Profile from "../pages/Profile";

const AppRouter = () => (
  <BrowserRouter>
    <ScrollTop />
    <Routes>
      {/* Public/User routes with Layout */}
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="*" element={ <NotFound /> } />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/Brand-Identity-Design" element={<BrandIdentityDesign />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/website-design" element={<WebsiteDesign />} />
        <Route path="/3d-rendering-services" element={<VideoServices />} />
        <Route path="/Brand-Merchandising" element={<BrandMerchandising />} />
        <Route path="/content-creations" element={<ContentCreations />} />
        <Route path="/advertisements" element={<Advertisements />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/brand-photography" element={<BrandPhotography />} />
        <Route path="/space-design" element={<SpaceDesign />} />
        <Route path="/motion-graphics" element={<MotionGraphics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDetails />} />
        <Route path="work/:id" element={<WorkDetail />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      
      {/* Admin routes with AdminLayout */}
      <Route path="/admin/dashboard" element={
        <ProtectedRoute adminOnly>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<AdminDashboard />} />
        <Route path="blogs" element={<AdminBlogs />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="services/edit/:id" element={<AdminServiceEdit />} />
        <Route path="services/add" element={<AddService />} />
        <Route path="works" element={<AdminWorks />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter; 