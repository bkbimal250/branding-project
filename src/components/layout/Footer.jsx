import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaBehance } from 'react-icons/fa';

const services = {
  design: [
    { label: 'Brand Identity Design', path: '/brand-identity-design' },
    { label: 'Website Design', path: '/website-design' },
    { label: 'Space Design', path: '/space-design' },
    { label: 'Packaging', path: '/packaging' }
  ],
  digital: [
    { label: 'Digital Marketing', path: '/digital-marketing' },
    { label: 'Content Creations', path: '/content-creations' },
    { label: 'Advertisements', path: '/advertisements' }
  ],
  media: [
    { label: '3D/2D Video Services', path: '/3d-rendering-services' },
    { label: 'Motion Graphics', path: '/motion-graphics' },
    { label: 'Brand Photography', path: '/brand-photography' }
  ],
  branding: [
    { label: 'Brand Merchandising', path: '/brand-merchandising' }
  ]
};

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Team', path: '/team' },
  { label: 'Portfolio', path: '/our-works' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Careers', path: '/careers' }
];

const resourceLinks = [
  { label: 'Blog', path: '/blogs' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Support', path: '/support' }
];

const socialLinks = [
  { icon: <FaLinkedin />, url: 'https://linkedin.com/company/invertvisuals' },
  { icon: <FaInstagram />, url: 'https://instagram.com/invertvisuals' },
  { icon: <FaTwitter />, url: 'https://twitter.com/invertvisuals' },
  { icon: <FaYoutube />, url: 'https://youtube.com/invertvisuals' },
  { icon: <FaBehance />, url: 'https://behance.net/invertvisuals' }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 border-t border-cyan-500/20">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Branding Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="w-12 h-12 rounded-full bg-white/10 p-1 border border-cyan-400/30 backdrop-blur-sm"
              >
                <img
                  src="https://3dtrixs.com/wp-content/uploads/2022/06/3dtrixs_logo_icon.png"
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                invert<span className="text-cyan-400">visuals</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm mb-6 max-w-md">
              We transform brands through innovative design, compelling digital strategies, and cutting-edge visual content that engages audiences and drives results.
            </p>
            
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#22d3ee' }}
                  className="text-gray-300 hover:text-cyan-400 text-xl transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-5 text-cyan-400 border-b border-cyan-400/30 pb-2">Our Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Design</h4>
                <ul className="space-y-2">
                  {services.design.map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <Link to={service.path} className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                        {service.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Digital</h4>
                <ul className="space-y-2">
                  {services.digital.map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <Link to={service.path} className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                        {service.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Media</h4>
                <ul className="space-y-2">
                  {services.media.map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <Link to={service.path} className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                        {service.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Branding</h4>
                <ul className="space-y-2">
                  {services.branding.map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <Link to={service.path} className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                        {service.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Company Links Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-5 text-cyan-400 border-b border-cyan-400/30 pb-2">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={link.path} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-5 text-cyan-400 border-b border-cyan-400/30 pb-2">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={link.path} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} invertvisuals. All rights reserved.
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
          </div>
          <div>
            Made By <span className="text-cyan-400">Invertvisuals</span> in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;