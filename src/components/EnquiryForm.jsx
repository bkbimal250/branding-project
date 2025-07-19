import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setSuccessMsg("");
    setErrorMsg("");
    setLoading(true);
    // Map frontend fields to backend fields
    const payload = {
      name: data.name,
      email: data.email, // Not used by backend, but can be stored for future
      phone: data.phone,
      location: data.address, // Map address to location
      services: data.subject, // Map subject to services
      message: data.message
    };
    try {
      await axios.post(`${BASE_URL}/api/b1/enquiry`, payload);
      setSuccessMsg("Your enquiry has been submitted successfully!");
    } catch (error) {
      setErrorMsg("Something went wrong while sending your enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
        {successMsg && (
          <div className="mb-4 p-3 rounded bg-green-100 text-green-700 font-semibold text-center">
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="mb-4 p-3 rounded bg-red-100 text-red-700 font-semibold text-center">
            {errorMsg}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number"
                }
              })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          {/* Address (Location) */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              id="address"
              type="text"
              {...register("address", { required: "Address is required" })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.address ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              placeholder="Enter your address"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
          </div>

          {/* Subject (Services) Dropdown */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              {...register("subject", { required: "Please select a subject" })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              defaultValue=""
            >
              <option value="" disabled>Choose Services</option>
              <option value="Brand Identity Design" >Brand Identity Design</option>
              <option value="Package Design">Package Design</option>
              <option value="Branding">Branding </option>
              <option value="2d video Services">2d video Services</option>
              <option value="3d video Services">3d video Services</option>
              <option value="Website Design">Website Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Motion Graphics">Motion Graphics</option>
              <option value="Brand Merchandising">Brand Merchandising</option>
            </select>
            {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message", { required: "Message is required" })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              placeholder="How can we help you?"
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 disabled:opacity-60"
            disabled={loading}
          >
            <FiSend />
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default EnquiryForm;
