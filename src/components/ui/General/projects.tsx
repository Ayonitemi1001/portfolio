import React from "react";
import Image from "next/image";
import { projectData } from "@/lib/data";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Design System/card";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col space-y-2 mb-12 md:mb-16 text-center">
          <h2 className="text-gray-400 text-xs md:text-sm font-bold tracking-wider uppercase">
            My Recent Work
          </h2>
          <h1 className="text-cyan-600 font-bold text-2xl md:text-2xl">
            Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {projectData.map((project) => (
            <Card
              key={project.id}
              className="bg-cyan-950 p-5 rounded-3xl border border-blue-500/10 hover:border-cyan-700/50 transition-all duration-300 shadow-xl group overflow-hidden w-full max-w-md mx-auto md:max-w-none md:mx-0 flex flex-col"
            >
              {/* Project Image Container */}
              <div className="rounded-2xl overflow-hidden mb-6 relative h-48 md:h-52 w-full shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <CardContent className="flex flex-col grow p-0">
                <CardTitle className="text-xl font-bold text-white mb-3">
                  {project.title}
                </CardTitle>

                <CardDescription className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] md:text-xs font-medium text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/* Buttons */}
              <CardFooter className="flex items-center gap-3 md:gap-4 mt-auto p-0 border-t-0 pt-0">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-white text-white font-semibold text-sm md:text-base text-center hover:bg-cyan-950/50 transition-colors duration-300"
                >
                  Github
                </a>

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-xl bg-cyan-600 text-white font-semibold text-sm md:text-base text-center hover:bg-cyan-500 transition-colors duration-300 shadow-lg shadow-cyan-500/20"
                >
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
