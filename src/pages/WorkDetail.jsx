// WorkDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const WorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/works/${id}`);
        setProject(response.data);
      } catch (err) {
        setError("Work not found.");
      } finally {
        setLoading(false);
      }
    };
    fetchWork();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error || !project) return <p className="text-center mt-10">{error || "Project not found."}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="text-sm mb-6 text-blue-600 hover:underline"
      >
         Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        {project.clientName}
      </p>
      <p className="text-gray-700 mb-6">{project.description}</p>

      {/* Cover media */}
      <div className="mb-8">
        {project.coverImage && project.coverImage.url ? (
          <img
            src={project.coverImage.url}
            alt={project.title}
            className="w-full max-h-[500px] object-cover rounded-xl"
          />
        ) : null}
      </div>

      {/* Gallery Images */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt="Project Visual"
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {/* Modal Preview for videos (if any) can be added here if video URLs are present in gallery/content */}
      <Dialog open={!!videoPreview} onClose={() => setVideoPreview(null)} className="fixed z-50 inset-0">
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-80 px-4">
          <Dialog.Panel className="relative max-w-4xl w-full">
            <button onClick={() => setVideoPreview(null)} className="absolute top-2 right-2 text-white z-50">
              <X size={28} />
            </button>
            <video
              src={videoPreview}
              controls
              autoPlay
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default WorkDetail;
