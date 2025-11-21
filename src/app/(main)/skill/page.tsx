import React from "react";
import { ConnectDB } from "../../../../lib/db";
import Skill from "../../../../models/skill.model";
import Image from "next/image";


  const skills = [
    { skillCategory: "frontend", skillName: "React", skillImage: "/react.png" },
    { skillCategory: "frontend", skillName: "Next.js", skillImage: "/next.jpeg" },
    
    { skillCategory: "backend", skillName: "Node.js", skillImage: "/node.png" },
    { skillCategory: "language", skillName: "JavaScript", skillImage: "/js.png" },
    { skillCategory: "language", skillName: "Groovy", skillImage: "/groovy.png" },
    { skillCategory: "database", skillName: "MongoDB", skillImage: "/mongodb.jpeg" },
    { skillCategory: "tools", skillName: "GitHub", skillImage: "/github.png" },
    { skillCategory: "tools", skillName: "Docker", skillImage: "/docker.png" },
    { skillCategory: "tools", skillName: "Jenkins", skillImage: "/jenkin.png" },
    { skillCategory: "other", skillName: "Kubernetes", skillImage: "/kubernetes.png" },
  ];


export default async function SkillPage() {
  

  const categories = [
    "frontend",
    "backend",
    "language",
    "database",
    "tools",
    "other",
  ];

  return (
    <section
      id="skills"
      className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-12"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Technical Skills
        </h1>
      </div>

      {/* Category Sections */}
      {categories.map((category) => {
        const categorySkills = skills.filter(
          (skill) => skill.skillCategory === category
        );
        if (categorySkills.length === 0) return null;

        return (
          <div key={category} className="mb-5">
            <h2 className="text-2xl font-bold text-white mb-6 capitalize">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2">
              {categorySkills.map((skill , index) => (
                <div
                  key={index}
                  className="flex items-center justify-start space-x-3 px-4 py-3 rounded-lg
                      border border-gray-800 bg-zinc-950/70 border-dashed
                      hover:bg-zinc-900 transition-all duration-300
                       shadow-sm hover:shadow-md cursor-pointer"
                >
                  {/* Skill Icon */}
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                    {" "}
                    <Image
                      src={skill.skillImage}
                      alt={skill.skillName}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Skill Name */}
                  <h2 className="text-sm font-medium text-gray-200 truncate">
                    {skill.skillName}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

