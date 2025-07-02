import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle, backgroundImage, background, breadcrumb }) => {
  return (
    <section
      className="w-full py-16 flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '350px',
              color: '#fff',
            }
          : background
          ? { background }
          : { backgroundColor: '#f8fafc' }
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
      )}
      <div className={backgroundImage ? "relative z-10" : undefined}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg" style={backgroundImage ? { color: '#fff' } : { color: '#111827' }}>{title}</h1>
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center justify-center space-x-2 mb-4" aria-label="Breadcrumb">
            {breadcrumb.map((item, idx) => (
              <span key={idx} className="flex items-center">
                {idx > 0 && <span className="mx-2 text-gray-200">/</span>}
                {item.path ? (
                  <Link to={item.path} className={backgroundImage ? "text-amber-200 hover:underline font-medium" : "text-blue-600 hover:underline font-medium"}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={backgroundImage ? "text-amber-100 font-medium" : "text-gray-500 font-medium"}>{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {subtitle && <p className={backgroundImage ? "text-lg md:text-xl max-w-2xl mx-auto text-amber-100" : "text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default HeroSection; 