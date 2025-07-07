import React, { useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AddService = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    icon: "",
    featuredImage: "",
    tags: "",
    technologies: "",
    isFeatured: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(",").map((t) => t.trim()),
        technologies: formData.technologies.split(",").map((t) => t.trim()),
      };

      const res = await axios.post(`${BASE_URL}/services`, payload);
      if (res.data.success) {
        setMessage("Service added successfully!");
        setFormData({
          title: "",
          shortDescription: "",
          description: "",
          category: "",
          icon: "",
          featuredImage: "",
          tags: "",
          technologies: "",
          isFeatured: false,
        });
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      setMessage("Error adding service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Service</h2>
      {message && <p className="text-center mb-4 text-cyan-700">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="shortDescription"
          type="text"
          placeholder="Short Description"
          value={formData.shortDescription}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="description"
          placeholder="Full Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded h-24"
        />
        <input
          name="category"
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="icon"
          type="url"
          placeholder="Icon Image URL"
          value={formData.icon}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          name="featuredImage"
          type="url"
          placeholder="Featured Image URL"
          value={formData.featuredImage}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          name="tags"
          type="text"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          name="technologies"
          type="text"
          placeholder="Technologies (comma separated)"
          value={formData.technologies}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
          Featured Service?
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-600 text-white py-3 rounded hover:bg-cyan-700 transition"
        >
          {loading ? "Submitting..." : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
