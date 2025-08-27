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
    // {
    //   img: GSSoC,
    //   bg: "red-100",
    //   position: "Open Source Developer",
    //   company: "GSSoC",
    //   link: "https://gssoc.girlscript.tech/",
    //   date: "May 2023 - Aug 2023",
    // },
    // {
    //   img: SSoC,
    //   bg: "yellow-100",
    //   position: "Open Source Developer",
    //   company: "SSoC",
    //   link: "https://www.linkedin.com/showcase/socialsummerofcode/",
    //   date: "Jun 2023 - Aug 2023",
    // },
    // {
    //   img: Hacktoberfest,
    //   bg: "red-100",
    //   position: "Open Source Developer",
    //   company: "Hacktoberfest",
    //   link: "https://www.linkedin.com/company/hacktoberfest/",
    //   date: "Oct 2022",
    // },
    // {
    //   img: Vibhav,
    //   bg: "red-100",
    //   position: "Volunteer",
    //   company: "Vibhav",
    //   link: "https://www.linkedin.com/company/team-vibhav/",
    //   date: "Mar 2022 - Dec 2022",
    // },
  ];
  return (
    <div name="experience" className="h-full w-full my-[8%]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <div className="flex flex-row justify-center text-6xl text-white font-bold  my-[6%] animate-fall">
            Experience
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-2 max-w-[100%] m-auto">
            {experiences.map((experience) => (
              <ExperienceCard exp={experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
