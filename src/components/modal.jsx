import React from "react";

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full text-left relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 text-xl hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="mb-4 rounded-lg"
        />
        <p className="text-gray-700">{project.description}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800"
        >
          View Code
        </a>
      </div>
    </div>
  );
}

export default Modal;
