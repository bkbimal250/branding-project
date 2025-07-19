import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../components/AuthContext';
import BlogForm from './BlogForms';
import EditBlogForm from './EditBlogForm';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminBlogs = () => {
  const { adminToken } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editBlog, setEditBlog] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/b1/blogs`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setBlogs(res.data);
    } catch (err) {
      setError('Failed to fetch blogs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (slug) => {
    if (!window.confirm('Delete this blog?')) return;
    try {
      await axios.delete(`${BASE_URL}/api/b1/blogs/${slug}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      fetchBlogs();
    } catch {
      alert('Failed to delete blog.');
    }
  };

  const handleEdit = async (blog) => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/b1/blogs/${blog._id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setEditBlog(res.data);
    } catch (err) {
      setError('Failed to fetch blog for editing.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditSuccess = () => {
    setEditBlog(null);
    fetchBlogs();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-cyan-700">Manage Blogs</h1>
      <BlogForm onSuccess={fetchBlogs} />
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead>
              <tr className="bg-cyan-50">
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Author</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-b">
                  <td className="py-2 px-4">{blog.title}</td>
                  <td className="py-2 px-4">{blog.author}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEdit(blog)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(blog.slug)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {editBlog && (
        <EditBlogForm
          blog={editBlog}
          onClose={() => setEditBlog(null)}
          onSuccess={handleEditSuccess}
        />
      )}
    </div>
  );
};

export default AdminBlogs; 