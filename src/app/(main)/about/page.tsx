

import React from "react";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 sm:px-10 lg:px-20 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text">
          About Me
        </h2>

        {/* Content */}
        <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          Hi, I’m <span className="text-blue-400 font-semibold">Anush Singla</span>, 
          a  <span className="text-purple-400 font-semibold">Full Stack Developer </span> 
          with a strong focus on the MERN Stack and an ever-growing interest in DevOps practices.
          I am passionate about building clean, scalable, user-centric web applications that aim to solve real-world problems.
        </p>

        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          Currently, I’m pursuing my{" "}
          <span className="text-pink-400 font-semibold">B.Tech in Computer Science Engineering </span> 
          from <span className="text-purple-400 font-semibold">Bharati Vidyapeeth's College of Engineering (BVCOE, Delhi)</span>, 
          while sharpening my problem-solving skills with DSA in Java. I love turning ideas into functioning, modern digital solutions, from frontend interfaces to backend architectures, with a performance, clarity, and maintainability-oriented approach.
        </p>
      </div>
    </section>
  );
}

