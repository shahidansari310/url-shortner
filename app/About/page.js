"use client";
import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-purple-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">
        About Our URL Shortener
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Welcome to our <span className="font-semibold">URL Shortener</span>! 🚀  
        This project allows users to shorten long URLs into compact, shareable links.  
        It's built using <span className="font-medium text-purple-600">Next.js, MongoDB, and TailwindCSS</span>.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-purple-600">🔹 Features:</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Generate short links instantly</li>
          <li>Customizable short URLs</li>
          <li>Fast and secure</li>
        </ul>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">Made with ❤️ by <span className="font-semibold">Shahid Ansari</span></p>
      </div>
    </div>
  );
};

export default About;

