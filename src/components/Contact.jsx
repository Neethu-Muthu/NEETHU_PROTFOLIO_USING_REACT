import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
      <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me </div>
      <p className="text-gray-400 text-base">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
      </p>
      <div className="flex justify-center gap-5 mt-10">
        
        <a href="mailto:neethu.ceecs24@duk.ac.in" className="text-gray-400 text-3xl hover:text-white" aria-label="Email Me">
          <FaEnvelope className="text-3xl" />
        </a>
        <a href="https://github.com/Neethu-Muthu" target="_blank" className="text-gray-400 text-3xl hover:text-white" rel="noreferrer" aria-label="GitHub">
          <FaGithub className="text-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/neethumuthu/" target="_blank" className="text-gray-400 text-3xl hover:text-white" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-3xl" />
        </a>
        {/* Uncomment if you want to add StackOverflow */}
        {/* <a href="https://stackoverflow.com/users/23691689/talha-shah" target="_blank" className="text-gray-400 text-3xl hover:text-white" rel="noreferrer" aria-label="StackOverflow">
          <FaStackOverflow className="text-3xl" />
        </a> */}
      </div>
    </div>
  );
}

export default Contact;
