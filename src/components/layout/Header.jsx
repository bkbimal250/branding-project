import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { label } from 'framer-motion/client';
import { useAuth } from '../AuthContext';

const navLinks = [
  {
    label: 'Services',
    path: '/services',
    submenu: [
      { label: 'Brand Identity Design', path: '/Brand-Identity-Design' },
      { label: 'Digital Marketing', path: '/digital-marketing' },
      { label: 'Website Design', path: '/website-design' },
      { label: '3D /2d video Services', path: '/3d-rendering-services' },
      { label: 'Brand Merchandising', path: '/Brand-Merchandising' },
      { label: 'Content Creations', path: '/content-creations' },
      { label: 'Advertisements', path: '/advertisements' },
      { label: 'Packaging', path: '/packaging' },
      {label:'Brand Photography',path:'/brand-photography'},
      {label:'Space Design',path:'/space-design'},
      {label:'Motion Graphics',path:'/motion-graphics'}
    ],
  },
  {
    label: 'Company',
    submenu: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {label:'Blogs',path:'/blogs'},
  { label: 'Our Works', path: '/our-works' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: '-100%',
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { 
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`bg-gradient-brand text-black shadow-2xl sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Tagline */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-start md:flex-row md:items-center md:space-x-4"
        >
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4 focus:outline-none">
            <motion.img
              whileHover={{ rotate: 10 }}
              src="https://3dtrixs.com/wp-content/uploads/2022/06/3dtrixs_logo_icon.png"
              alt="logo"
              className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-xl rounded-full bg-white p-1 border-2 border-cyan-400"
            />
            <motion.span 
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black drop-shadow-lg"
              whileHover={{ color: '#6b0d0e' }}
              transition={{ duration: 0.2 }}
            >
              invert<span className="text-brand-red">visuals</span>
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-semibold text-base lg:text-lg relative">
          {navLinks.map((item, idx) => (
            <div key={item.label} className="relative group">
              {item.submenu ? (
                <>
                  <motion.button
                    whileHover={{ color: '#6b0d0e' }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-3 py-2 rounded-lg hover:bg-brand-red-light/30 focus-visible:ring-2 focus-visible:ring-brand-red transition-all duration-200 focus:outline-none ${
                      item.submenu?.some(sub => location.pathname === sub.path) ? 'bg-blue-600 text-white font-semibold' : ''
                    }`}
                    aria-haspopup="true"
                    aria-expanded={dropdown === idx}
                    onClick={() => toggleDropdown(idx)}
                    onMouseEnter={() => setDropdown(idx)}
                    tabIndex={0}
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: dropdown === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 ml-1 lg:ml-2" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {dropdown === idx && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute left-0 top-full mt-2 min-w-[220px] bg-white text-black rounded-xl shadow-2xl py-2 z-30 overflow-hidden"
                        onMouseLeave={() => setDropdown(null)}
                      >
                        {item.submenu.map((sub) => (
                          <motion.div
                            key={sub.label}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              to={sub.path}
                              className="block px-5 py-2.5 font-medium hover:bg-brand-creme hover:text-brand-red transition-colors duration-150 focus:bg-brand-creme-light focus:text-brand-red focus:outline-none"
                              tabIndex={0}
                            >
                              {sub.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-lg hover:bg-brand-red-light/30 hover:text-brand-red focus-visible:ring-2 focus-visible:ring-brand-red transition-colors duration-200 focus:outline-none ${
                      location.pathname === item.path ? 'bg-blue-600 text-white font-semibold' : ''
                    }`}
                    tabIndex={0}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}

          {/* Auth section */}
          {user ? (
            <div className="relative">
              <button
                className="px-3 py-2 font-semibold text-black hover:underline focus:outline-none flex items-center"
                onClick={() => setUserDropdown((prev) => !prev)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {user.name || user.email || user.phone || user.role}
                {userDropdown ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
              </button>
              {userDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => { setUserDropdown(false); navigate('/profile'); }}
                  >
                    Profile
                  </button>
                  {user.role === 'admin' ? (
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => { setUserDropdown(false); navigate('/admin/dashboard'); }}
                    >
                      Admin Dashboard
                    </button>
                  ) : (
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => { setUserDropdown(false); navigate('/'); }}
                    >
                      Home
                    </button>
                  )}
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    onClick={() => { setUserDropdown(false); logout(); navigate('/'); }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 py-2 rounded-lg bg-brand-creme text-brand-red font-semibold hover:bg-brand-creme-light transition ml-2"
            >
              Sign In
            </Link>
          )}
        </nav>

        {/* Let's Talk Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block ml-4 lg:ml-6 bg-blue-600 text-white font-bold px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 text-sm lg:text-base focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none"
        >
          LET'S TALK
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-black focus:outline-none"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </motion.button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden fixed inset-0 w-full h-full bg-brand-creme/95 text-black px-6 pt-24 pb-8 space-y-6 z-40 overflow-y-auto"
            style={{ backdropFilter: 'blur(10px)' }}
            aria-hidden={!mobileOpen}
          >
            <button
              className="absolute top-6 right-6 text-black focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {navLinks.map((item, idx) => (
              <motion.div 
                key={item.label}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="relative"
              >
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center justify-between w-full text-left text-lg font-semibold py-3 px-4 rounded-lg hover:bg-brand-red/20 hover:text-brand-red focus-visible:ring-2 focus-visible:ring-brand-red transition-colors duration-200 ${
                        item.submenu?.some(sub => location.pathname === sub.path) ? 'bg-blue-600 text-white' : ''
                      }`}
                      onClick={() => toggleDropdown(idx)}
                      aria-haspopup="true"
                      aria-expanded={dropdown === idx}
                      tabIndex={0}
                    >
                      {item.label}
                      <motion.div
                        animate={{ rotate: dropdown === idx ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 ml-2" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {dropdown === idx && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="ml-4 mt-1 mb-3 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg py-1"
                        >
                          {item.submenu.map((sub) => (
                            <motion.div
                              key={sub.label}
                              whileHover={{ x: 5 }}
                              whileTap={{ x: 0 }}
                            >
                              <Link
                                to={sub.path}
                                className="block px-6 py-3 font-medium hover:text-brand-red transition-colors duration-150 focus:text-brand-red focus:outline-none"
                                onClick={() => setMobileOpen(false)}
                                tabIndex={0}
                              >
                                {sub.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 0 }}
                  >
                    <Link
                      to={item.path}
                      className={`block text-lg font-semibold py-3 px-4 rounded-lg hover:bg-brand-red/20 hover:text-brand-red transition-colors duration-200 focus:outline-none ${
                        location.pathname === item.path ? 'bg-blue-600 text-white' : ''
                      }`}
                      onClick={() => setMobileOpen(false)}
                      tabIndex={0}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Auth section */}
            {user ? (
              <div className="relative mt-4">
                <button
                  className="px-3 py-2 font-semibold text-black hover:underline focus:outline-none w-full text-left flex items-center"
                  onClick={() => setUserDropdown((prev) => !prev)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {user.name || user.email || user.phone || user.role}
                  {userDropdown ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                </button>
                {userDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => { setUserDropdown(false); navigate('/profile'); setMobileOpen(false); }}
                    >
                      Profile
                    </button>
                    {user.role === 'admin' ? (
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => { setUserDropdown(false); navigate('/admin/dashboard'); setMobileOpen(false); }}
                      >
                        Admin Dashboard
                      </button>
                    ) : (
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => { setUserDropdown(false); navigate('/'); setMobileOpen(false); }}
                      >
                        Home
                      </button>
                    )}
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                      onClick={() => { setUserDropdown(false); logout(); navigate('/'); setMobileOpen(false); }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-3 py-2 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition ml-2"
              >
                Sign In
              </Link>
            )}

            {/* Removed India flag and country name from mobile nav */}

            <motion.div
              custom={navLinks.length + 1}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 text-lg focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none"
              >
                LET'S TALK
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;