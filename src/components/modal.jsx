import React from 'react';
import PropTypes from 'prop-types';

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg mb-4">{project.description}</p>
            <p className="text-md mb-4 italic">{project.caption}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline mb-2"
            >
              GitHub Repository
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 hover:underline"
              >
                Live Preview
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired
};

export default Modal;
