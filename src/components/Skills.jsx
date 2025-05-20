import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Python_Logo,
  React_Logo,
  Git_Logo,
  Github_Logo,
  Linux_Logo,
  VSCode_Logo,
  Tailwind_Logo,
  MongoDB_Logo,
  Office_Logo,
  ExpressJs_Logo,
  NodeJs_Logo,
  ethereum,
  fabric,
  SmartContract,
  Api,
  Identus,
  Canton,
  Daml,
  ERC20,
  ERC721,
  ERC1155,
  Go,
  // Cursor
} from "../assets/images/index";

function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = () => setName(null);

  return (
    <div className="pb-5 h-auto my-20" id="skills">
      <div className="text-center font-bold flex justify-between items-center ">
        <h1 className="text-6xl max-md:text-4xl">Skills</h1>
        <div className="text-[#7e9199] text-6xl max-md:text-4xl">{name}</div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-10 max-sm:gap-5 max-sm:w-full">
          {/* Languages */}
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Languages</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              {[
                { logo: JavaScript_Logo, label: "JavaScript" },
                { logo: Python_Logo, label: "Python" },
                { logo: HTML_Logo, label: "HTML" },
                { logo: CSS_Logo, label: "CSS" },
                { logo: Go, label: "GoLang" },
              ].map(({ logo, label }, i) => (
                <div
                  key={i}
                  className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                  onMouseMove={() => setName(label)}
                  onMouseLeave={handleLeave}
                >
                  <img src={logo} alt={label} className="h-12" />
                </div>
              ))}
            </div>
          </div>

          {/* Libraries and Frameworks */}
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Libraries and Frameworks</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              {[
                { logo: React_Logo, label: "React" },
                { logo: Tailwind_Logo, label: "Tailwind" },
                { logo: MongoDB_Logo, label: "MongoDB" },
                { logo: ExpressJs_Logo, label: "Express" },
                { logo: NodeJs_Logo, label: "Node.js" },
              ].map(({ logo, label }, i) => (
                <div
                  key={i}
                  className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                  onMouseMove={() => setName(label)}
                  onMouseLeave={handleLeave}
                >
                  <img src={logo} alt={label} className="h-12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 max-sm:gap-5 max-sm:w-full">
          {/* Version Control */}
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Version Control</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              {[
                { logo: Git_Logo, label: "Git" },
                { logo: Github_Logo, label: "Github" },
              ].map(({ logo, label }, i) => (
                <div
                  key={i}
                  className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                  onMouseMove={() => setName(label)}
                  onMouseLeave={handleLeave}
                >
                  <img src={logo} alt={label} className="h-12" />
                </div>
              ))}
            </div>
          </div>

          {/* Other Tools */}
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Other Tools & Services</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              {[
                { logo: Linux_Logo, label: "Linux" },
                { logo: VSCode_Logo, label: "Visual Studio Code" },
                { logo: Office_Logo, label: "MS Office Suite" },
                // { logo: Cursor, label: "Cursor" },
              ].map(({ logo, label }, i) => (
                <div
                  key={i}
                  className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                  onMouseMove={() => setName(label)}
                  onMouseLeave={handleLeave}
                >
                  <img src={logo} alt={label} className="h-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="mt-20 flex flex-col gap-5 max-sm:gap-5 max-sm:w-full">
        <h4 className="text-2xl">Blockchain Development</h4>
        <div className="flex gap-5 flex-wrap">
          {[
            { logo: ethereum, label: "Ethereum" },
            { logo: fabric, label: "Hyperledger Fabric" },
            { logo: Identus, label: "Hyperledger Identus" },
            { logo: Canton, label: "Canton Network" },
            { logo: SmartContract, label: "Smart Contracts" },
            { logo: Api, label: "API Development" },
            { logo: Daml, label: "DAML" },
            { logo: ERC20, label: "ERC-20 Token" },
            { logo: ERC721, label: "ERC-721 Token" },
            { logo: ERC1155, label: "ERC-1155 Token" },
          ].map(({ logo, label }, i) => (
            <div
              key={i}
              className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
              onMouseMove={() => setName(label)}
              onMouseLeave={handleLeave}
            >
              <img src={logo} alt={label} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
