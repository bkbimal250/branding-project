import React from 'react';
import { Link } from 'react-router-dom'; // Optional: if you're using React Router

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-center text-gray-600 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
