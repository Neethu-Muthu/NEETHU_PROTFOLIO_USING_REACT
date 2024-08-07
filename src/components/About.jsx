import React from "react";
import coding_gif from "../assets/images/female-web-developer-7362400-6031665-ezgif.com-optimize.gif";

function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-1/2 max-xl:w-full text-left max-md:text-center">
          <h1 className="text-5xl max-md:text-4xl mb-5">Hi, I'm Neethu M 👋</h1>
          <p className="text-3xl max-md:text-base mb-5 font-light">
            I specialize in the MERN stack and excel at creating seamless, visually engaging web experiences. With a strong foundation in web technologies and a passion for problem-solving, I turn creative ideas into functional, user-friendly websites.
          </p>
          <a
            href="#contact"
            className="p-2 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto"
          >
            GET IN TOUCH
          </a>
        </div>
        <img
          className="w-[80%] h-auto max-w-[500px] max-md:w-full max-md:h-auto rounded"
          src={coding_gif}
          alt="Coding Gif"
        />
      </div>
    </div>
  );
}

export default About;
