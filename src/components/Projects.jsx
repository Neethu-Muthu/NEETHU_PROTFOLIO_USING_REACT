import React, { useState, useEffect } from 'react';
import { KBA_Course, AssetPro, CookBook, ElectricityBill, Blog, Employee } from "../assets/images/index.js";
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
      caption: 'A comprehensive platform for learning about blockchain technology.',
    },
    {
      id: 2,
      title: 'AssetPro: Asset Management App',
      image: AssetPro,
      description: 'An efficient tool for managing and tracking IT assets.',
      github: 'https://github.com/Neethu-Muthu/IT_ASSETMANAGEMENT_PROJECT_DOCKERIZED',
      caption: 'An efficient tool for managing and tracking IT assets.',
    },
    {
      id: 3,
      title: 'CookBook',
      image: CookBook,
      description: 'A comprehensive recipe book featuring a variety of delicious and easy-to-make dishes.',
      github: 'https://github.com/Neethu-Muthu/COOKBOOK_DOCKER',
      caption: 'A comprehensive recipe book featuring a variety of delicious and easy-to-make dishes.',
    },
    {
      id: 4,
      title: 'Electricity Bill Management System',
      image: ElectricityBill,
      description: 'A system to manage and track electricity bills efficiently.',
      github: 'https://github.com/Neethu-Muthu/Electricity_Bill_Management_System',
      caption: 'A system to manage and track electricity bills efficiently.',
    },
    {
      id: 5,
      title: 'Blog App',
      image: Blog,
      description: 'A blogging platform built with MongoDB, Express, React, and Node.js.',
      github: 'https://github.com/Neethu-Muthu/Blog_App-MongoDB',
      caption: 'A platform for creating and managing blog posts.',
    },
    {
      id: 6,
      title: 'Employee Management App',
      image: Employee,
      description: 'An application to manage employee information and records.',
      github: 'https://github.com/Neethu-Muthu/Employee-Management-App_MongoDB',
      caption: 'An application to manage employee information and records.',
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
              <div className="px-4 py-2">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">{project.title}</h1>
                <p className="text-sm text-white max-md:text-black">{project.caption}</p>
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
