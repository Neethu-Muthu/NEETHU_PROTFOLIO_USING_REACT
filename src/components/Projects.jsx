import React, { useState, useEffect } from 'react';
import { KBA_Course, AssetPro, CookBook } from "../assets/images/index.js";
import Modal from './modal.jsx';

function Projects() {
  const [visible, setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHover = (index) => {
    if (isLargeScreen) {
      setVisible(index);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: 'KBA Course App',
      image: KBA_Course,
      description: 'This project is a web application designed to showcase various blockchain-related courses.',
      github: 'https://github.com/Neethu-Muthu/KBA_COURSES_MERN_WITH_CSS',
      // live: 'https://talhashah-dev.github.io/blogging-app/'
    },
    {
      id: 2,
      title: 'AssetPro: Asset Management App',
      image: AssetPro,
      description: 'Showcasing all JavaScript projects that I have built.',
      github: 'https://github.com/Neethu-Muthu/IT_ASSETMANAGEMENT_PROJECT_DOCKERIZED',
      // live: 'https://talhashah-dev.github.io/js-projects/'
    },
    {
      id: 3,
      title: 'CookBook',
      image: CookBook,
      description: 'Personal Portfolio built with React.js & Tailwind CSS',
      github: 'https://github.com/Neethu-Muthu/COOKBOOK_DOCKER',
      // live: 'https://talhashah.vercel.app/'
    }
  ];

  return (
    <div className="pb-5 h-auto my-20" id="projects">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[30%] max-md:w-[49%] max-sm:w-full h-[250px] rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative cursor-pointer"
            onClick={() => handleProjectClick(project)}
            onMouseOver={() => handleHover(project.id)}
            onMouseLeave={() => setVisible(0)}
          >
            <img 
              className="w-full h-full object-cover"
              src={project.image}
              alt={project.title}
              style={{ objectFit: 'cover' }}
            />

            <div className={`${visible === project.id || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
              <div className="px-4">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">{project.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
    </div>
  );
}

export default Projects;
