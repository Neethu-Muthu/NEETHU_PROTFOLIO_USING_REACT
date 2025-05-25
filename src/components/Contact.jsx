import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20 px-4"
      id="contact"
    >
      <div className="text-4xl mb-6 max-[500px]:text-2xl">Contact Me</div>
      <p className="text-gray-600 text-base max-w-xl mx-auto">
        Feel free to reach out through my social links below.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-5 mt-6">
        <a
          href="mailto:neethu.ceecs24@duk.ac.in"
          className="text-gray-500 text-2xl hover:text-black"
          aria-label="Email Me"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Neethu-Muthu"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 text-2xl hover:text-black"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/neethumuthu/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 text-2xl hover:text-black"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;
