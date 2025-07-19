import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import axios from 'axios';

// Add for popup and animation
import { FaCheckCircle } from 'react-icons/fa';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const [emailOrUsername, setemailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailOrUsername || !password) {
      setError('Please enter your email or username and password.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/b1/auth/login`, {
        emailOrUsername,
        password
      });
      login(res.data.user, res.data.token, res.data.user.role);
      setShowSuccess(true);
      setTimeout(() => {
        if (res.data.user.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/');
        }
      }, 1500); // Show animation for 1.5s
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Wrong credentials, please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700 tracking-tight">Sign In</h2>
        {error && (
          <div className="mb-4 flex justify-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded shadow-lg animate-shake">
              {error}
            </div>
          </div>
        )}
        {showSuccess && (
          <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
            <FaCheckCircle className="text-green-500 text-5xl mb-2 animate-bounce" />
            <span className="text-green-700 font-semibold">Login Successful!</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className={`space-y-5 ${showSuccess ? 'opacity-50 pointer-events-none' : ''}`}>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email or Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
              value={emailOrUsername}
              onChange={e => setemailOrUsername(e.target.value)}
              required
              placeholder="Enter your email or username"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition disabled:opacity-60" disabled={loading || showSuccess}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-semibold">Register</Link>
        </p>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
        .animate-shake { animation: shake 0.4s; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.7s; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce { animation: bounce 1s infinite; }
      `}</style>
    </div>
  );
};

export default Login; 