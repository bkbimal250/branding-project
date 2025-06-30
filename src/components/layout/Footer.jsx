import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { label: 'Services', path: '/video-services' },
  { label: 'Company', path: '/about' },
  { label: 'Resources', path: '/resources' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Sign In', path: '/signin' },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#232526] via-[#414345] to-[#283e51] text-white pt-12 pb-6 px-4 md:px-0 mt-16 border-t border-cyan-900">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Branding */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <Link to="/" className="flex items-center space-x-3 mb-3">
            <img
              src="https://3dtrixs.com/wp-content/uploads/2022/06/3dtrixs_logo_icon.png"
              alt="logo"
              className="w-12 h-12 rounded-full bg-white p-1 border-2 border-cyan-400 drop-shadow-lg"
            />
            <span className="text-2xl font-extrabold tracking-tight text-white">
              invert<span className="text-cyan-400">visuals</span>
            </span>
          </Link>
          <p className="text-cyan-200 text-sm max-w-xs mt-2">
            Delivering creative visual solutions for your business needs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4 text-cyan-300">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4 text-cyan-300">Contact</h3>
          <ul className="text-cyan-100 text-sm space-y-2">
            <li>Email: <a href="mailto:info@invertvisuals.com" className="hover:text-cyan-400">info@invertvisuals.com</a></li>
            <li>Phone: <a href="tel:+911234567890" className="hover:text-cyan-400">+91 12345 67890</a></li>
            <li>Location: Bengaluru, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-cyan-300">Follow Us</h3>
          <div className="flex space-x-5">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-2xl transition-colors duration-150"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-2xl transition-colors duration-150"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-2xl transition-colors duration-150"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-cyan-900 pt-6 flex flex-col md:flex-row items-center justify-between text-cyan-200 text-sm">
        <span>&copy; {new Date().getFullYear()} invertvisuals. All rights reserved.</span>
        <span>Made with <span className="text-cyan-400">&#10084;</span> in India</span>
      </div>
    </footer>
  );
};

export default Footer; 