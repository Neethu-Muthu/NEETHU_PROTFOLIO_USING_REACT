import React from "react";

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-5 max-w-lg w-full text-left relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 text-xl hover:text-black"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

        <p className="text-sm text-gray-500 mb-4 capitalize">
          Type: {project.type}
        </p>

        <img
          src={project.image}
          alt={project.title}
          className="mb-4 rounded-lg max-h-64 object-cover w-full"
        />

        <p className="text-gray-700 mb-3">{project.description}</p>

        {/* Display detailed roles if they exist */}
        {project.roles && project.roles.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mb-1">
              Roles & Contributions:
            </h3>
            <ul className="list-disc pl-5 text-gray-700 mb-4 max-h-40 overflow-auto">
              {project.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </>
        )}

        {/* Link to GitHub repo if exists */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}

export default Modal;
