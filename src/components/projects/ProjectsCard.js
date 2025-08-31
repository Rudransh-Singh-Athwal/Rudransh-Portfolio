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
      {/* Image: responsive height so layout doesn't break on small screens.
          On large screens it will still occupy the same visual area because we use lg:h-[75%].
      */}
      <img
        className="block w-full h-44 sm:h-56 md:h-64 lg:h-[75%] object-fill transform duration-700 backdrop-opacity-100"
        src={project.img}
        alt={project.title || "Project"}
      />

      {/* Shadow overlay: only absolute/visible on large screens to preserve original effect */}
      <div className="hidden lg:block lg:absolute w-full h-full shadow-2xl opacity-20 transform duration-500 lg:inset-y-3/4 lg:group-hover:-inset-y-0" />

      {/* Gradient/content area:
          - static (normal flow) on small/medium screens so description and icons never overlap
          - absolute and animated on large screens (unchanged behaviour) via lg: classes
      */}
      <div
        className="bg-gradient-to-b from-[#10263a] to-[#122f4b] w-full px-4 py-4 transform duration-500
                   lg:absolute lg:w-full lg:h-full lg:inset-y-3/4 lg:group-hover:-inset-y-0"
      >
        {/* Title */}
        <div className="font-bold text-base sm:text-lg lg:text-xl text-center text-white">
          {project.title}
        </div>

        {/* Tech icons: wrap to multiple lines if necessary (prevents overflow) */}
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

        {/* Description: visible on all sizes and allowed to grow.
            On large screens we keep the vertical spacing (lg:mt-12) to match original look.
        */}
        <p className="text-gray-100 text-sm sm:text-sm lg:text-base text-center w-full mt-3 lg:mt-12">
          {project.desc}
        </p>

        {/* Footer icons:
            - On small/medium screens: appear in-flow after the description (mt-4)
            - On large screens: positioned absolutely at bottom (preserves original layout)
        */}
        <div
          className="flex justify-center gap-6 mt-4 pb-2 text-white
                     lg:mt-0 lg:absolute lg:left-1/2 lg:bottom-4 lg:-translate-x-1/2"
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
