// WorkDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { work } from "../data/work";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const WorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = work.find((w) => w.id === parseInt(id));

  const [videoPreview, setVideoPreview] = useState(null);

  if (!project) return <p className="text-center mt-10">Project not found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="text-sm mb-6 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        {project.clientName} • {project.date}
      </p>
      <p className="text-gray-700 mb-6">{project.shortDesc}</p>

      {/* Cover media */}
      <div className="mb-8">
        {project.coverType === "video" ? (
          <video
            src={project.coverMedia}
            controls
            className="w-full max-h-[500px] object-cover rounded-xl"
          />
        ) : (
          <img
            src={project.coverMedia}
            alt={project.title}
            className="w-full max-h-[500px] object-cover rounded-xl"
          />
        )}
      </div>

      {/* PDFs */}
      {project.pdfs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Documents</h2>
          <ul className="list-disc list-inside">
            {project.pdfs.map((pdf, index) => (
              <li key={index}>
                <a href={pdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View PDF {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Images */}
      {project.images.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Project Visual"
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {/* Videos */}
      {project.videos.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Video Previews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.videos.map((vid, idx) => (
              <div key={idx}>
                <video
                  src={vid}
                  onClick={() => setVideoPreview(vid)}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer border"
                  muted
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal Preview */}
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
