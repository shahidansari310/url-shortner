"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-purple-50 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 text-lg">
        Feel free to reach out to us! Connect on social media.
      </p>

      <div className="flex justify-center gap-6 mt-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 text-3xl"
        >
          <FaInstagram />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shahid-ansari-433449327/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-3xl"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shahidansari310"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black text-3xl"
        >
          <FaGithub />
        </a>
      </div>

      <p className="mt-6 text-gray-600">
        📧 Email: <span className="font-medium">shahidansari31006@gmail.com</span>
      </p>
    </div>
  );
};

export default Contact;
