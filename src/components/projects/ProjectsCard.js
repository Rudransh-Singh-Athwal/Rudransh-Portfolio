// ProjectsCard.jsx
import { FaGithub } from "react-icons/fa";
import { LinkIcon } from "@heroicons/react/24/outline";
import "../../index.css";

export default function ProjectsCard(props) {
  const project = props.project;

  return (
    <div
      className="relative group w-full h-full border-2 border-transparent rounded-none overflow-hidden m-auto hover:border-[0.5px] hover:border-gray-400 hover:glow"
      style={{ "--glow-color": "silver", "--glow-size": "1px" }}
    >
      <img
        className="block w-full h-44 sm:h-56 md:h-64 lg:h-[75%] object-fill transform duration-700 backdrop-opacity-100"
        src={project.img}
        alt={project.title || "Project"}
      />

      <div className="hidden lg:block lg:absolute w-full h-full shadow-2xl opacity-20 transform duration-500 lg:inset-y-1/2 lg:group-hover:-inset-y-0" />

      <div
        className="bg-gradient-to-b from-[#10263a] to-[#122f4b] w-full px-4 py-4 transform duration-500
                   lg:absolute lg:w-full lg:h-full lg:inset-y-1/2 lg:group-hover:-inset-y-0 lg:flex lg:flex-col"
      >
        <div className="font-bold text-base sm:text-lg lg:text-xl text-center text-white">
          {project.title}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {project.tech?.map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt={`tech-${index}`}
              className="h-6 w-6 sm:h-7 sm:w-7 transform transition-all duration-300 group-hover:scale-110"
            />
          ))}
        </div>

        <p className="text-gray-100 text-sm sm:text-sm lg:text-base text-center w-full mt-3 lg:mt-8 lg:flex-1 lg:overflow-y-auto lg:mb-4 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-500">
          {project.desc}
        </p>

        <div
          className="flex justify-center gap-6 mt-4 pb-2 text-white
                     lg:mt-0 lg:flex-shrink-0 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-500"
        >
          <span className="px-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center"
            >
              <FaGithub
                className="h-6 w-6 hover:glow"
                style={{ "--glow-color": "silver", "--glow-size": "4px" }}
              />
            </a>
          </span>

          <span className="px-4">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center"
            >
              <LinkIcon
                className="h-6 w-6 hover:bg-zinc-700 hover:glow p-0.5 rounded"
                style={{ "--glow-color": "gray", "--glow-size": "2px" }}
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
