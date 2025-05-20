import React, { useState, useEffect } from "react";
import {
  TicketMasterGif,
  SecureBallotGif,
  CertiLinkGif,
  NFTMarketplaceGif,
  KBAGif,
  AssetGif,
  CookBookGif,
  Bill,
  BlogGif,
  EmployeeGif,
} from "../assets/images/index.js";
import Modal from "./modal.jsx";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: "TicketMaster DApp",
      image: TicketMasterGif,
      description:
        "TicketMaster app built on the Ethereum blockchain. Users can browse events, view seat availability, and securely purchase tickets using MetaMask.",
      github: "https://github.com/Neethu-Muthu/ticketmaster_app",
      caption: "Decentralized ticket booking app on Ethereum using MetaMask.",
    },
    {
      id: 2,
      title: "SecureBallot",
      image: SecureBallotGif,
      description:
        "A secure cooperative bank voting system built on Hyperledger Fabric, featuring private data collection and automated winner declaration.",
      github: "https://github.com/Neethu-Muthu/SecureBallot-Hyperledger",
      caption: "Hyperledger-based secure and private voting system.",
    },
    {
      id: 3,
      title: "CertiLink DApp",
      image: CertiLinkGif,
      description:
        "A decentralized app on Ethereum to issue and verify certificates using smart contracts.",
      github: "https://github.com/neethu-muthu/certilink-dapp",
      caption: "Ethereum-based certificate issuing and verification platform.",
    },
    {
      id: 4,
      title: "NFT Marketplace on Hyperledger Fabric",
      image: NFTMarketplaceGif,
      description:
        "Decentralized NFT marketplace built on Hyperledger Fabric using ERC20 and ERC721 token standards.",
      github: "https://github.com/Neethu-Muthu/NFT-Marketplace-Fabric",
      caption: "NFT minting and trading marketplace using Hyperledger Fabric.",
    },
    {
      id: 5,
      title: "KBA Course App",
      image: KBAGif,
      description:
        "This project is a web application designed to showcase various blockchain-related courses.",
      github: "https://github.com/Neethu-Muthu/KBA_COURSES_MERN_WITH_CSS",
      caption:
        "A comprehensive platform for learning about blockchain technology.",
    },
    {
      id: 6,
      title: "AssetPro: Asset Management App",
      image: AssetGif,
      description: "An efficient tool for managing and tracking IT assets.",
      github:
        "https://github.com/Neethu-Muthu/IT_ASSETMANAGEMENT_PROJECT_DOCKERIZED",
      caption: "An efficient tool for managing and tracking IT assets.",
    },
    {
      id: 7,
      title: "CookBook",
      image: CookBookGif,
      description:
        "A comprehensive recipe book featuring a variety of delicious and easy-to-make dishes.",
      github: "https://github.com/Neethu-Muthu/COOKBOOK_DOCKER",
      caption:
        "A comprehensive recipe book featuring a variety of delicious and easy-to-make dishes.",
    },
    {
      id: 8,
      title: "Electricity Bill Management System",
      image: Bill,
      description:
        "A system to manage and track electricity bills efficiently.",
      github:
        "https://github.com/Neethu-Muthu/Electricity_Bill_Management_System",
      caption: "A system to manage and track electricity bills efficiently.",
    },
    {
      id: 9,
      title: "Blog App",
      image: BlogGif,
      description:
        "A blogging platform built with MongoDB, Express, React, and Node.js.",
      github: "https://github.com/Neethu-Muthu/Blog_App-MongoDB",
      caption: "A platform for creating and managing blog posts.",
    },
    {
      id: 10,
      title: "Employee Management App",
      image: EmployeeGif,
      description: "An application to manage employee information and records.",
      github: "https://github.com/Neethu-Muthu/Employee-Management-App_MongoDB",
      caption: "An application to manage employee information and records.",
    },
  ];

  return (
    <div className="pb-5 h-auto my-20" id="projects">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[32%] max-md:w-[49%] max-sm:w-full h-auto rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <img
              className="w-full h-[300px] object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="bg-white px-4 py-3">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600">{project.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default Projects;
