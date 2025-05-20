import React, { useState } from "react";
import "../App.css";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar({ sendDataToParent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    sendDataToParent(false);
  };

  const handleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    sendDataToParent(newMenuState);
  };

  return (
    <div className="flex justify-between items-center pt-8 mb-12 max-md:mb-6 max-md:block">
      <div className="flex justify-between w-full items-center">
        <h1
          className="text-3xl font-bold italic bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse max-md:text-2xl cursor-pointer"
          onClick={handleLinkClick}
        >
          &lt; Neethu M /&gt;
        </h1>
        <button
          className="text-3xl hidden max-md:block text-white"
          onClick={handleMenu}
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      <nav
        className={`transition-all duration-300 ease-in-out max-md:mt-6 ${
          menuOpen ? "max-md:block" : "max-md:hidden"
        }`}
      >
        <ul className="flex gap-10 max-md:flex-col max-md:gap-4 max-md:w-full text-lg font-medium text-[#7e9199] max-md:text-center">
          {["About", "Skills", "Projects", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="hover:text-white transition-colors duration-300 hover:border-b pb-1 max-md:hover:bg-purple-500 max-md:hover:text-white max-md:rounded max-md:px-3 max-md:py-1"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Social Icons for Mobile View */}
        <ul className="hidden max-md:flex justify-center items-center gap-6 mt-8 text-white text-3xl">
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-transform duration-300 hover:scale-125"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/yourID"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-transform duration-300 hover:scale-125"
            >
              <FaStackOverflow />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
