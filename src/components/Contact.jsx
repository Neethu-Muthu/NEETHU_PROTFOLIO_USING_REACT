import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder action
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20 px-4"
      id="contact"
    >
      <div className="text-4xl mb-6 max-[500px]:text-2xl">Contact Me</div>
      <p className="text-gray-600 text-base max-w-xl mx-auto">
        If you have a project in mind or just want to get in touch, feel free to
        send a message.
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

      {/* Message Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-4 max-w-xl mx-auto w-full text-left"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-black"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
