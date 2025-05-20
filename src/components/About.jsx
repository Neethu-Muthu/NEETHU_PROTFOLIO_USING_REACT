import React from "react";
import coding_gif from "../assets/images/female-web-developer-7362400-6031665-ezgif.com-optimize.gif";

function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-1/2 max-xl:w-full text-left max-md:text-center">
          <h1 className="text-5xl max-md:text-4xl mb-5 font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Hi, I'm Neethu M 👋
          </h1>
          <p className="text-2xl max-md:text-base mb-4 font-light text-gray-200">
            I'm a passionate{" "}
            <span className="text-purple-400 font-medium">
              Blockchain Developer
            </span>{" "}
            and MERN stack specialist dedicated to building scalable, secure,
            and user-friendly web and decentralized applications.
          </p>
          <p className="text-lg max-md:text-sm mb-5 text-gray-300">
            From crafting interactive UI/UX with React to developing secure
            smart contracts on Ethereum and Hyperledger, I love blending
            technology and creativity to solve real-world problems.
          </p>
          <a
            href="#contact"
            className="p-2 px-5 rounded-md text-base bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-all inline-block font-semibold"
          >
            GET IN TOUCH
          </a>
        </div>
        <img
          className="w-[80%] h-auto max-w-[500px] max-md:w-full max-md:h-auto rounded shadow-lg"
          src={coding_gif}
          alt="Coding Gif"
        />
      </div>
    </div>
  );
}

export default About;
