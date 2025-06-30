import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  {
    label: 'Services',
    submenu: [
      { label: 'Video Services', path: '/video-services' },
      { label: 'Video Styles Services', path: '/video-styles-services' },
      { label: '3D Modeling', path: '/3d-modeling' },
      { label: '3D Rendering Services', path: '/3d-rendering-services' },
      { label: 'VFX Services', path: '/vfx-services' },
      { label: 'Content Creations', path: '/content-creations' },
      { label: 'Advertisements', path: '/advertisements' },
    ],
  },
  {
    label: 'Company',
    submenu: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  { label: 'Resources', path: '/resources' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Sign In', path: '/signin' },
];

const indiaFlag = (
  <span role="img" aria-label="India" className="text-2xl">🇮🇳</span>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className="bg-gradient-to-r from-[#1a2980] via-[#26d0ce] to-[#1e3c72] text-white shadow-2xl sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-4">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="https://3dtrixs.com/wp-content/uploads/2022/06/3dtrixs_logo_icon.png"
              alt="logo"
              className="w-14 h-14 drop-shadow-xl rounded-full bg-white p-1 border-2 border-cyan-400"
            />
            <span className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg">
              invert<span className="text-cyan-400">visuals</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 font-semibold text-lg relative">
          {navLinks.map((item, idx) => (
            <div key={item.label} className="relative group">
              {item.submenu ? (
                <>
                  <button
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-cyan-900/30 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors duration-200 focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={dropdown === idx}
                    onMouseEnter={() => setDropdown(idx)}
                    onMouseLeave={() => setDropdown(null)}
                    tabIndex={0}
                  >
                    {item.label}
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-3 min-w-[220px] bg-white text-black rounded-2xl shadow-2xl py-3 z-30 transition-all duration-200 ${dropdown === idx ? 'block' : 'hidden'} group-hover:block`}
                    onMouseEnter={() => setDropdown(idx)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className="block px-6 py-3 font-semibold hover:bg-cyan-50 hover:text-cyan-700 rounded-lg transition-colors duration-150 focus:bg-cyan-100 focus:text-cyan-700"
                        tabIndex={0}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-cyan-900/30 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors duration-200"
                  tabIndex={0}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-cyan-900/30 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors duration-200">
            {indiaFlag}
            <span className="font-bold text-lg">India</span>
          </div>
        </nav>

        {/* Let's Talk Button */}
        <button className="hidden md:block ml-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-200 text-lg focus-visible:ring-2 focus-visible:ring-cyan-400">
          LET'S TALK
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#0a1124]/95 text-white px-8 pt-28 pb-8 space-y-8 z-40 transition-all duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out`}
        style={{ backdropFilter: 'blur(8px)' }}
        aria-hidden={!mobileOpen}
      >
        <button
          className="absolute top-8 right-8 text-white focus:outline-none"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((item, idx) => (
          <div key={item.label} className="relative">
            {item.submenu ? (
              <>
                <button
                  className="flex items-center w-full text-left text-xl font-semibold border-b border-gray-800 pb-4 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors duration-200"
                  onClick={() => setDropdown(dropdown === idx ? null : idx)}
                  aria-haspopup="true"
                  aria-expanded={dropdown === idx}
                  tabIndex={0}
                >
                  {item.label}
                  <ChevronDown className="w-5 h-5 ml-2" />
                </button>
                {dropdown === idx && (
                  <div className="ml-4 mt-2 bg-white text-black rounded-2xl shadow-2xl py-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className="block px-6 py-3 font-semibold hover:bg-cyan-50 hover:text-cyan-700 rounded-lg transition-colors duration-150 focus:bg-cyan-100 focus:text-cyan-700"
                        onClick={() => setMobileOpen(false)}
                        tabIndex={0}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className="block text-xl font-semibold border-b border-gray-800 pb-4 hover:text-cyan-400 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
                tabIndex={0}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <div className="flex items-center space-x-3 pt-4">
          {indiaFlag}
          <span className="font-bold text-lg">India</span>
        </div>
        <button className="w-full mt-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-200 text-xl focus-visible:ring-2 focus-visible:ring-cyan-400">
          LET'S TALK
        </button>
      </div>
    </header>
  );
};

export default Header;
