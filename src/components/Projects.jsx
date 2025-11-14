import React, { useState } from "react";
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
  CBDCPlaceholder,
  MoneyMarketPlaceholder,
  RWA,
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
    // CLIENT PROJECTS
    {
      id: 12,
      title: "Retail CBDC with Wholesale Integration",
      image: CBDCPlaceholder,
      description:
        "A Hyperledger Fabric-based solution enabling users to request, transfer, and redeem Central Bank Digital Currency (CBDC). Includes seamless integration between retail and wholesale flows.",
      github: null,
      caption:
        "Retail CBDC built on Hyperledger Fabric with end-to-end integration with wholesale phase.",
      type: "client",
      roles: [
        "Developed retail CBDC chaincode on Hyperledger Fabric",
        "Integrated retail and wholesale phases",
        "Built blockchain APIs for interaction",
      ],
    },
    {
      id: 11,
      title: "Tokenized Money Market Platform",
      image: MoneyMarketPlaceholder,
      description:
        "Built using the Canton distributed ledger and DAML smart contracts, this platform facilitates the creation, tokenization, and trading of financial instruments.",
      github: null,
      caption:
        "Canton-based platform for tokenized finance with DAML smart contracts.",
      type: "client",
      roles: [
        "Set up the Canton network",
        "Developed DAML smart contracts",
        "Built blockchain APIs for integration",
      ],
    },

    {
      id: 13,
      title: "RWA Tokenization Platform",
      image: RWA, // add your image import
      description:
        "A Real-World Asset (RWA) Tokenization platform built using the Canton blockchain and DAML smart contracts to tokenize land properties into fractional digital tokens.",
      github: null,
      caption:
        "Canton-based RWA platform for fractional land tokenization with DAML smart contracts.",
      type: "client",
      roles: [
        "Developed DAML smart contracts for land tokenization",
        "Built blockchain APIs for integration",
      ],
    },

    // PERSONAL PROJECTS
    {
      id: 1,
      title: "TicketMaster DApp",
      image: TicketMasterGif,
      description:
        "TicketMaster app built on the Ethereum blockchain. Users can browse events, view seat availability, and securely purchase tickets using MetaMask.",
      github: "https://github.com/Neethu-Muthu/ticketmaster_app",
      caption: "Decentralized ticket booking app on Ethereum using MetaMask.",
      type: "personal",
    },
    {
      id: 2,
      title: "SecureBallot",
      image: SecureBallotGif,
      description:
        "A secure cooperative bank voting system built on Hyperledger Fabric, featuring private data collection and automated winner declaration.",
      github: "https://github.com/Neethu-Muthu/SecureBallot-Hyperledger",
      caption: "Hyperledger-based secure and private voting system.",
      type: "personal",
    },
    {
      id: 3,
      title: "CertiLink DApp",
      image: CertiLinkGif,
      description:
        "A decentralized app on Ethereum to issue and verify certificates using smart contracts.",
      github: "https://github.com/neethu-muthu/certilink-dapp",
      caption: "Ethereum-based certificate issuing and verification platform.",
      type: "personal",
    },
    {
      id: 4,
      title: "NFT Marketplace on Hyperledger Fabric",
      image: NFTMarketplaceGif,
      description:
        "Decentralized NFT marketplace built on Hyperledger Fabric using ERC20 and ERC721 token standards.",
      github: "https://github.com/Neethu-Muthu/NFT-Marketplace-Fabric",
      caption: "NFT minting and trading marketplace using Hyperledger Fabric.",
      type: "personal",
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
      type: "personal",
    },
    {
      id: 6,
      title: "AssetPro: Asset Management App",
      image: AssetGif,
      description: "An efficient tool for managing and tracking IT assets.",
      github:
        "https://github.com/Neethu-Muthu/IT_ASSETMANAGEMENT_PROJECT_DOCKERIZED",
      caption: "An efficient tool for managing and tracking IT assets.",
      type: "personal",
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
      type: "personal",
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
      type: "personal",
    },
    {
      id: 9,
      title: "Blog App",
      image: BlogGif,
      description:
        "A blogging platform built with MongoDB, Express, React, and Node.js.",
      github: "https://github.com/Neethu-Muthu/Blog_App-MongoDB",
      caption: "A platform for creating and managing blog posts.",
      type: "personal",
    },
    {
      id: 10,
      title: "Employee Management App",
      image: EmployeeGif,
      description: "An application to manage employee information and records.",
      github: "https://github.com/Neethu-Muthu/Employee-Management-App_MongoDB",
      caption: "An application to manage employee information and records.",
      type: "personal",
    },
  ];

  const clientProjects = projects.filter((p) => p.type === "client");
  const personalProjects = projects.filter((p) => p.type === "personal");

  const renderProjects = (projectList) =>
    projectList.map((project) => (
      <div
        key={project.id}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-indigo-500 transition-shadow duration-300 border border-gray-200 cursor-pointer flex flex-col h-[480px]"
        onClick={() => handleProjectClick(project)}
      >
        <img
          className="w-full h-[300px] object-cover"
          src={project.image}
          alt={project.title}
        />
        <div className="flex flex-col justify-between px-4 py-3 flex-grow">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              {project.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {project.caption}
            </p>
            {project.type === "client" && project.roles && (
              <ul className="mt-2 list-disc list-inside text-gray-600 text-sm max-h-24 overflow-auto pr-1">
                {project.roles.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    ));

  return (
    <div className="pb-5 h-auto my-20 px-5" id="projects">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10 text-center">
        Projects
      </h1>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-purple-800">
          Client Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderProjects(clientProjects)}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6 text-purple-800">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderProjects(personalProjects)}
        </div>
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default Projects;
