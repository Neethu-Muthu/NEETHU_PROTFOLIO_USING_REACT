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
  MongoDB_Logo, // Add this import
  Office_Logo, // Add this import
  ExpressJs_Logo, // Add this import
  NodeJs_Logo // Add this import
} from "../assets/images/index";

function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = (name) => {
    setName(name)
  }
  return (
    <div className="pb-5 h-auto my-20" id="skills">

      <div className="text-center font-bold flex justify-between items-center ">
        <h1 className="text-6xl max-md:text-4xl">Skills</h1>
        <div className="text-[#7e9199] text-6xl max-md:text-4xl">{name}</div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10">

        <div className="flex flex-col gap-10 max-sm:gap-5 max-sm:w-full">

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Languages</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("JavaScript")} onMouseLeave={() => handleLeave(null)}>
                <img src={JavaScript_Logo} alt="JavaScript" className="h-10" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Python")} onMouseLeave={() => handleLeave(null)}>
                <img src={Python_Logo} alt="Python" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("HTML")} onMouseLeave={() => handleLeave(null)}>
                <img src={HTML_Logo} alt="HTML5" className="h-12" />
              </div> 

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("CSS")} onMouseLeave={() => handleLeave(null)}>
                <img src={CSS_Logo} alt="CSS3" className="h-12" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Libraries and Frameworks</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("React")} onMouseLeave={() => handleLeave(null)}>
                <img src={React_Logo} alt="React" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Tailwind")} onMouseLeave={() => handleLeave(null)}>
                <img src={Tailwind_Logo} alt="Tailwind" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("MongoDB")} onMouseLeave={() => handleLeave(null)}>
                <img src={MongoDB_Logo} alt="MongoDB" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Express")} onMouseLeave={() => handleLeave(null)}>
                <img src={ExpressJs_Logo} alt="Express" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Node.js")} onMouseLeave={() => handleLeave(null)}>
                <img src={NodeJs_Logo} alt="Node.js" className="h-12" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* <h4 className="text-2xl">Technologies</h4> */}
            {/* <div className="flex gap-5 max-sm:flex-wrap"> */}
              {/* <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Machine Learning")} onMouseLeave={() => handleLeave(null)}>
                <img src={ML_Logo} alt="Machine Learning" className="h-12" />
              </div> */}
            {/* </div> */}
          </div>

        </div>

        <div className="flex flex-col gap-10 max-sm:gap-5 max-sm:w-full">

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Version Control</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Git")} onMouseLeave={() => handleLeave(null)}>
                <img src={Git_Logo} alt="Git" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Github")} onMouseLeave={() => handleLeave(null)}>
                <img src={Github_Logo} alt="Github" className="h-12" />
              </div> 
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Other Tools & Services</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Linux")} onMouseLeave={() => handleLeave(null)}>
                <img src={Linux_Logo} alt="Linux" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Visual Studio Code")} onMouseLeave={() => handleLeave(null)}>
                <img src={VSCode_Logo} alt="Visual Studio Code" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("MS Office Suite")} onMouseLeave={() => handleLeave(null)}>
                <img src={Office_Logo} alt="MS Office Suite" className="h-12" />
              </div>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default Skills;
