// import React, { useEffect, useState } from 'react'
import ExperienceCard from "./ExperienceCard";
import teamexe from "../../assets/teamexe.png";
import nith from "../../assets/nith.png";

export default function Experience() {
  const experiences = [
    {
      img: teamexe,
      bg: "red-100",
      position: "Coordinator",
      company: "Team .EXE",
      link: "https://www.linkedin.com/company/exe-nith/ ",
      date: "Dec 2024 - Present",
    },
    {
      img: nith,
      bg: "red-100",
      position: "Web Developer",
      company: "Department of Computer Science & Engineering, NIT Hamirpur",
      link: "https://www.linkedin.com/company/codesscafe/",
      date: "Mar 2024 - Feb 2025",
    },
    {
      img: teamexe,
      bg: "red-100",
      position: "Executive",
      company: "Team .EXE",
      link: "https://www.linkedin.com/company/exe-nith/ ",
      date: "Dec 2023 - Dec 2024",
    },
  ];
  return (
    <div name="experience" className="w-full min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center justify-center h-full lg:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <div className="flex flex-row justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold my-6 animate-fall">
            Experience
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[100%] m-auto w-full">
            {experiences.map((experience) => (
              <ExperienceCard exp={experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
